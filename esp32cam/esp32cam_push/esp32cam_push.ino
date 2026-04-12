/*
 * ========================================================
 *  Gu Gu Gu - ESP32-CAM CLOUD PUSH RELAY FIRMWARE
 *  Board: AI-Thinker ESP32-CAM (OV2640)
 * ========================================================
 *
 *  This firmware does NOT start a local web server.
 *  Instead, it takes pictures and constantly POSTs them to
 *  your cloud relay server (e.g. Render.com).
 *
 * ========================================================
 */

#include "esp_camera.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>

// ==================== WiFi & Cloud Config ====================
const char* ssid     = "g_home";        // 你的 WiFi 名稱
const char* password = "9477063800";    // 你的 WiFi 密碼

// ☁️ 你的 Render 網域 (不要加 https://)
// 等你部署到 Render 後改成你的專屬網址，例如: "gugugu-relay.onrender.com"
const char* host     = "localhost";     // TODO: 更換為 Render 網域
const int   port     = 443;             // Render 預設走 HTTPS (443)
const char* path     = "/upload";

// ==================== AI-Thinker Pins ====================
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
#define LED_GPIO_NUM       4   

// 保持安全的長連線 (省去每次建立 HTTPS SSL 握手的恐怖開銷)
WiFiClientSecure client;

void setup() {
  Serial.begin(115200);
  Serial.println("\n\n--- Gu Gu Gu Cloud Pusher ---");

  pinMode(LED_GPIO_NUM, OUTPUT);
  digitalWrite(LED_GPIO_NUM, LOW);

  // ---- Camera Configuration ----
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

  if (psramFound()) {
    config.frame_size  = FRAMESIZE_VGA;  // 不要設太高，雲端傳輸 640x480 最適合
    config.jpeg_quality = 12;
    config.fb_count    = 2;
  } else {
    config.frame_size  = FRAMESIZE_QVGA; 
    config.jpeg_quality = 15;
    config.fb_count    = 1;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("❌ Camera init FAILED! 0x%x\n", err);
    return;
  }
  Serial.println("✅ Camera init OK");

  // ---- Connect to WiFi ----
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\n✅ WiFi Connected!");

  // **非常重要**: 跳過 SSL 憑證檢查，加速 ESP32 傳輸
  client.setInsecure();
  
  // 嘗試首次連線
  connectToServer();
}

void connectToServer() {
  Serial.print("Connecting to cloud server: ");
  Serial.println(host);
  
  if (!client.connect(host, port)) {
    Serial.println("❌ Connection failed!");
    delay(2000);
    return;
  }
  Serial.println("✅ Connected to cloud server!");
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi dropped. Reconnecting...");
    WiFi.reconnect();
    delay(3000);
    return;
  }

  if (!client.connected()) {
    Serial.println("Server dropped. Reconnecting TCP...");
    connectToServer();
    return;
  }

  // 1. Capture Frame
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Camera capture failed");
    return;
  }

  // 2. Send HTTP POST manually (Keep-Alive)
  String head = "-- Boundary string that separates headers from body --\n";
  String tail = "\r\n";
  
  // We send the raw JPEG bytes directly to keep it incredibly fast.
  String httpRequest = String("POST ") + path + " HTTP/1.1\r\n" +
                       "Host: " + host + "\r\n" +
                       "Connection: keep-alive\r\n" +
                       "Content-Type: image/jpeg\r\n" +
                       "Content-Length: " + String(fb->len) + "\r\n" +
                       "\r\n";

  client.print(httpRequest);
  
  uint8_t *fbBuf = fb->buf;
  size_t fbLen = fb->len;
  
  // Send the image directly over TCP
  size_t bytesSent = 0;
  while(bytesSent < fbLen) {
    size_t toSend = fbLen - bytesSent;
    if (toSend > 4096) toSend = 4096;
    size_t written = client.write(fbBuf + bytesSent, toSend);
    if(written == 0) {
      Serial.println("❌ Failed to write packet");
      break;
    }
    bytesSent += written;
  }

  // Read response quickly to clear buffer
  while (client.available()) {
    client.read(); // throw away response to keep latency low
  }

  esp_camera_fb_return(fb);

  // 一個極短的 delay，避免塞爆 Render (約莫每秒推 10 張)
  delay(100); 
}
