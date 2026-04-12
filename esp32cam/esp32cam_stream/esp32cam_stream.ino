/*
 * ========================================================
 *  Gu Gu Gu - ESP32-CAM MJPEG Streaming Server
 *  Board: AI-Thinker ESP32-CAM (OV2640)
 * ========================================================
 *
 *  Endpoints:
 *    http://<IP>:80/          → Status page (HTML)
 *    http://<IP>:80/capture   → Single JPEG snapshot
 *    http://<IP>:81/stream    → MJPEG live stream
 *
 *  Serial Monitor: 115200 baud → prints IP on boot
 * ========================================================
 */

#include "esp_camera.h"
#include <WiFi.h>
#include "esp_http_server.h"

// ==================== WiFi Config ====================
// 🔧 改這裡的 WiFi 名稱和密碼
const char* ssid     = "ghome";
const char* password = "9477063800";

// ==================== AI-Thinker ESP32-CAM Pins ====================
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
#define LED_GPIO_NUM       4   // Onboard flash LED

// ==================== MJPEG Boundary ====================
#define PART_BOUNDARY "123456789000000000000987654321"

static const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;
static const char* _STREAM_BOUNDARY = "\r\n--" PART_BOUNDARY "\r\n";
static const char* _STREAM_PART = "Content-Type: image/jpeg\r\nContent-Length: %u\r\n\r\n";

httpd_handle_t stream_httpd = NULL;
httpd_handle_t camera_httpd = NULL;

// ==================== Stream Handler (port 81) ====================
static esp_err_t stream_handler(httpd_req_t *req) {
  camera_fb_t *fb = NULL;
  esp_err_t res = ESP_OK;
  char part_buf[128];

  res = httpd_resp_set_type(req, _STREAM_CONTENT_TYPE);
  if (res != ESP_OK) return res;

  // CORS headers for cross-origin access
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_set_hdr(req, "X-Framerate", "25");
  httpd_resp_set_hdr(req, "Cache-Control", "no-cache, no-store, must-revalidate");

  Serial.println("Stream client connected");

  while (true) {
    fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Camera capture failed");
      res = ESP_FAIL;
      break;
    }

    size_t hlen = snprintf(part_buf, 128, _STREAM_PART, fb->len);

    res = httpd_resp_send_chunk(req, _STREAM_BOUNDARY, strlen(_STREAM_BOUNDARY));
    if (res == ESP_OK) {
      res = httpd_resp_send_chunk(req, part_buf, hlen);
    }
    if (res == ESP_OK) {
      res = httpd_resp_send_chunk(req, (const char *)fb->buf, fb->len);
    }

    esp_camera_fb_return(fb);

    if (res != ESP_OK) {
      Serial.println("Stream client disconnected");
      break;
    }
  }

  return res;
}

// ==================== Single Capture Handler (port 80) ====================
static esp_err_t capture_handler(httpd_req_t *req) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Capture failed");
    httpd_resp_send_500(req);
    return ESP_FAIL;
  }

  httpd_resp_set_type(req, "image/jpeg");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_set_hdr(req, "Content-Disposition", "inline; filename=capture.jpg");
  httpd_resp_set_hdr(req, "Cache-Control", "no-cache");

  esp_err_t res = httpd_resp_send(req, (const char *)fb->buf, fb->len);
  esp_camera_fb_return(fb);

  return res;
}

// ==================== Status Page Handler (port 80) ====================
static esp_err_t index_handler(httpd_req_t *req) {
  String html = "<!DOCTYPE html><html><head>"
    "<meta charset='utf-8'>"
    "<meta name='viewport' content='width=device-width,initial-scale=1'>"
    "<title>Gu Gu Gu CAM</title>"
    "<style>"
    "body{font-family:system-ui;background:#0a1208;color:#f0fdf4;display:flex;"
    "flex-direction:column;align-items:center;justify-content:center;min-height:100vh;margin:0;}"
    ".card{background:rgba(5,12,8,.8);border:1px solid rgba(134,239,172,.2);"
    "border-radius:24px;padding:2rem;max-width:600px;width:90%;text-align:center;}"
    "h1{color:#86efac;font-size:2rem;margin-bottom:1rem;}"
    ".status{background:#22c55e;display:inline-block;padding:6px 16px;border-radius:20px;"
    "color:#000;font-weight:bold;font-size:.85rem;margin-bottom:1.5rem;}"
    "img{width:100%;border-radius:16px;margin:1rem 0;border:1px solid rgba(134,239,172,.15);}"
    "a{color:#86efac;text-decoration:none;font-weight:bold;}"
    ".info{text-align:left;font-size:.9rem;line-height:2;}"
    ".info span{color:#86efac;}"
    "</style></head><body>"
    "<div class='card'>"
    "<h1>🐦 Gu Gu Gu CAM</h1>"
    "<div class='status'>● ONLINE</div>"
    "<img src='/capture' onclick='this.src=\"/capture?\"+Date.now()' />"
    "<p style='font-size:.8rem;color:#86a498;'>點擊圖片刷新快照</p>"
    "<div class='info'>"
    "<p><span>IP：</span>" + WiFi.localIP().toString() + "</p>"
    "<p><span>串流地址：</span><a href='http://" + WiFi.localIP().toString() + ":81/stream'>http://"
    + WiFi.localIP().toString() + ":81/stream</a></p>"
    "<p><span>快照地址：</span><a href='/capture'>/capture</a></p>"
    "<p><span>WiFi RSSI：</span>" + String(WiFi.RSSI()) + " dBm</p>"
    "<p><span>Free Heap：</span>" + String(ESP.getFreeHeap()) + " bytes</p>"
    "</div></div></body></html>";

  httpd_resp_set_type(req, "text/html");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  return httpd_resp_send(req, html.c_str(), html.length());
}

// ==================== Start Servers ====================
void startCameraServer() {
  httpd_config_t config = HTTPD_DEFAULT_CONFIG();
  config.server_port = 80;
  config.max_uri_handlers = 4;

  // --- Main server on port 80 (status + capture) ---
  httpd_uri_t index_uri = {
    .uri       = "/",
    .method    = HTTP_GET,
    .handler   = index_handler,
    .user_ctx  = NULL
  };

  httpd_uri_t capture_uri = {
    .uri       = "/capture",
    .method    = HTTP_GET,
    .handler   = capture_handler,
    .user_ctx  = NULL
  };

  if (httpd_start(&camera_httpd, &config) == ESP_OK) {
    httpd_register_uri_handler(camera_httpd, &index_uri);
    httpd_register_uri_handler(camera_httpd, &capture_uri);
    Serial.println("Status server started on port 80");
  }

  // --- Stream server on port 81 ---
  config.server_port = 81;
  config.ctrl_port += 1;

  httpd_uri_t stream_uri = {
    .uri       = "/stream",
    .method    = HTTP_GET,
    .handler   = stream_handler,
    .user_ctx  = NULL
  };

  if (httpd_start(&stream_httpd, &config) == ESP_OK) {
    httpd_register_uri_handler(stream_httpd, &stream_uri);
    Serial.println("Stream server started on port 81");
  }
}

// ==================== Setup ====================
void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();
  Serial.println("========================================");
  Serial.println("  Gu Gu Gu - ESP32-CAM Starting...");
  Serial.println("========================================");

  // LED pin
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

  // Use higher resolution if PSRAM is available
  if (psramFound()) {
    Serial.println("PSRAM found! Using high quality settings.");
    config.frame_size  = FRAMESIZE_VGA;    // 640x480 — good balance
    config.jpeg_quality = 10;              // 0-63, lower = better quality
    config.fb_count    = 2;                // Double buffer for smoother stream
  } else {
    Serial.println("No PSRAM. Using lower quality settings.");
    config.frame_size  = FRAMESIZE_QVGA;   // 320x240
    config.jpeg_quality = 12;
    config.fb_count    = 1;
  }

  // ---- Init Camera ----
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("❌ Camera init FAILED! Error: 0x%x\n", err);
    Serial.println("Check your wiring and board selection!");
    // Blink LED rapidly to indicate error
    for (int i = 0; i < 10; i++) {
      digitalWrite(LED_GPIO_NUM, HIGH);
      delay(100);
      digitalWrite(LED_GPIO_NUM, LOW);
      delay(100);
    }
    return;
  }
  Serial.println("✅ Camera initialized successfully!");

  // Optional: Adjust sensor settings for better image
  sensor_t *s = esp_camera_sensor_get();
  if (s) {
    s->set_brightness(s, 1);     // -2 to 2
    s->set_contrast(s, 1);       // -2 to 2
    s->set_saturation(s, 0);     // -2 to 2
    s->set_whitebal(s, 1);       // 0 = disable, 1 = enable
    s->set_awb_gain(s, 1);       // 0 = disable, 1 = enable
    s->set_wb_mode(s, 0);        // 0-4
    s->set_aec2(s, 1);           // Auto exposure
    s->set_ae_level(s, 0);       // -2 to 2
    s->set_gainceiling(s, (gainceiling_t)6);  // 0-6
    s->set_vflip(s, 0);          // 0 or 1 — flip if image is upside down
    s->set_hmirror(s, 0);        // 0 or 1 — mirror if image is flipped
  }

  // ---- Connect to WiFi ----
  Serial.printf("Connecting to WiFi: %s", ssid);
  WiFi.begin(ssid, password);
  WiFi.setSleep(false);  // Disable WiFi sleep for stable streaming

  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    attempts++;
    if (attempts > 40) {  // 20 second timeout
      Serial.println("\n❌ WiFi connection FAILED!");
      Serial.println("Check SSID and password.");
      // Blink LED 3 times slowly
      for (int i = 0; i < 3; i++) {
        digitalWrite(LED_GPIO_NUM, HIGH);
        delay(500);
        digitalWrite(LED_GPIO_NUM, LOW);
        delay(500);
      }
      ESP.restart();  // Restart and try again
    }
  }

  Serial.println("\n");
  Serial.println("========================================");
  Serial.println("  ✅ WiFi Connected!");
  Serial.println("========================================");
  Serial.printf("  IP Address : http://%s\n", WiFi.localIP().toString().c_str());
  Serial.printf("  Stream URL : http://%s:81/stream\n", WiFi.localIP().toString().c_str());
  Serial.printf("  Snapshot   : http://%s/capture\n", WiFi.localIP().toString().c_str());
  Serial.printf("  Signal     : %d dBm\n", WiFi.RSSI());
  Serial.println("========================================");
  Serial.println("  Copy the Stream URL into your website!");
  Serial.println("========================================");

  // Flash LED twice to confirm success
  for (int i = 0; i < 2; i++) {
    digitalWrite(LED_GPIO_NUM, HIGH);
    delay(300);
    digitalWrite(LED_GPIO_NUM, LOW);
    delay(300);
  }

  // ---- Start HTTP Servers ----
  startCameraServer();

  Serial.println("\n🎥 Camera streaming is READY!");
  Serial.println("Open the Stream URL in your browser to test.\n");
}

// ==================== Loop ====================
void loop() {
  // Monitor WiFi connection
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("⚠️ WiFi disconnected! Reconnecting...");
    WiFi.reconnect();
    int attempts = 0;
    while (WiFi.status() != WL_CONNECTED && attempts < 20) {
      delay(500);
      Serial.print(".");
      attempts++;
    }
    if (WiFi.status() == WL_CONNECTED) {
      Serial.printf("\n✅ Reconnected! IP: %s\n", WiFi.localIP().toString().c_str());
    } else {
      Serial.println("\n❌ Reconnect failed. Restarting...");
      ESP.restart();
    }
  }

  delay(10000);  // Check every 10 seconds
}
