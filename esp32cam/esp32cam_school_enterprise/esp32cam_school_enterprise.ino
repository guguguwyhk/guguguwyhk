/*
 * ========================================================
 *  Gu Gu Gu - ESP32-CAM SCHOOL ENTERPRISE VERSION
 *  適用於：需要「學號/帳號」與「密碼」的校園 WiFi (WPA2-EAP)
 * ========================================================
 */

#include "esp_camera.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include "esp_wpa2.h" // 必須包含這個用於企業級驗證

// ==================== 1. 學校網路與雲端設定 ====================
// 請在燒錄前修改以下資訊
const char* ssid         = "WYHK-Student";     // 你的學校 WiFi 名稱
const char* EAP_IDENTITY = "YOUR_STUDENT_ID";  // 帳號/學號
const char* EAP_PASSWORD = "YOUR_PASSWORD";    // 密碼

const char* host = "gugugu-relay.onrender.com"; // 你的 Render 網址
const int   port = 443;
const char* path = "/upload";

// ==================== 2. AI-Thinker 引腳設定 ====================
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

WiFiClientSecure client;

void setup() {
  Serial.begin(115200);
  Serial.println("\n\n--- Gu Gu Gu School Pusher Initializing ---");

  // ---- 相機系統設定 ----
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer   = LEDC_TIMER_0;
  config.pin_d0       = Y2_GPIO_NUM;
  config.pin_d1       = Y3_GPIO_NUM;
  config.pin_d2       = Y4_GPIO_NUM;
  config.pin_d3       = Y5_GPIO_NUM;
  config.pin_d4       = Y6_GPIO_NUM;
  config.pin_d5       = Y7_GPIO_NUM;
  config.pin_d6       = Y8_GPIO_NUM;
  config.pin_d7       = Y9_GPIO_NUM;
  config.pin_xclk     = XCLK_GPIO_NUM;
  config.pin_pclk     = PCLK_GPIO_NUM;
  config.pin_vsync    = VSYNC_GPIO_NUM;
  config.pin_href     = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn     = PWDN_GPIO_NUM;
  config.pin_reset    = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.grab_mode    = CAMERA_GRAB_LATEST; 
  config.fb_location  = CAMERA_FB_IN_PSRAM;

  // 性能關鍵：QVGA + 品質 20 確保大約 10 FPS
  config.frame_size   = FRAMESIZE_QVGA; 
  config.jpeg_quality = 20; 
  config.fb_count     = 2;

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) { Serial.println("Camera init failed"); return; }

  // ---- 學校 WPA2 Enterprise 連線邏輯 ----
  WiFi.disconnect(true);
  WiFi.mode(WIFI_STA);
  
  // 設置企業級驗證參數 (PEAP)
  esp_wifi_sta_wpa2_ent_set_identity((uint8_t *)EAP_IDENTITY, strlen(EAP_IDENTITY));
  esp_wifi_sta_wpa2_ent_set_username((uint8_t *)EAP_IDENTITY, strlen(EAP_IDENTITY));
  esp_wifi_sta_wpa2_ent_set_password((uint8_t *)EAP_PASSWORD, strlen(EAP_PASSWORD));
  esp_wifi_sta_wpa2_ent_enable();

  WiFi.begin(ssid);

  Serial.print("Connecting to Student WiFi [2.4GHz Mode Required]");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\n✅ WiFi Connected!");

  client.setInsecure(); // 跳過 SSL 憑證檢查以提升速度
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) { WiFi.reconnect(); delay(2000); return; }

  // 保持 TCP 長連線
  if (!client.connected()) {
    if (!client.connect(host, port)) { delay(1000); return; }
  }

  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) return;

  // 1. 發送極簡 POST 表頭
  client.print(String("POST ") + path + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" +
               "Content-Type: image/jpeg\r\n" +
               "Content-Length: " + String(fb->len) + "\r\n" +
               "Connection: keep-alive\r\n\r\n");

  // 2. 寫入圖片二進制數據
  client.write(fb->buf, fb->len);
  
  // 3. 快速消化伺服器響應，不讓緩衝區堵塞
  unsigned long start = millis();
  while (!client.available() && (millis() - start < 50)) { delay(1); }
  while (client.available()) { client.read(); }

  esp_camera_fb_return(fb);

  // 調控傳輸頻率，100ms 代表極致 10 FPS
  delay(100); 
}
