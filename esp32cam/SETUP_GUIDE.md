# 🐦 Gu Gu Gu ESP32-CAM 設定指南

## 你需要準備的東西

| 項目 | 說明 |
|------|------|
| ESP32-CAM (AI-Thinker) | 內含 OV2640 鏡頭 |
| USB 線 | Micro-USB 連接電腦 |
| ESP32-CAM-MB 底板 **或** FTDI USB-to-Serial 轉接器 | 用來上傳韌體 |
| Arduino IDE | 2.x 版本 |
| 電腦 | Windows / Mac / Linux 都可以 |

---

## Step 1：安裝 Arduino IDE

1. 去 [Arduino 官網](https://www.arduino.cc/en/software) 下載 Arduino IDE 2.x
2. 安裝完成後打開

## Step 2：安裝 ESP32 開發板支援

1. 打開 Arduino IDE
2. `File` → `Preferences`
3. 在 **Additional Board Manager URLs** 欄位加入：
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
4. 點 OK
5. `Tools` → `Board` → `Boards Manager`
6. 搜尋 **esp32**
7. 安裝 **esp32 by Espressif Systems**（選最新版本）
8. 等待安裝完成（可能需要幾分鐘）

## Step 3：打開韌體程式

1. 在 Arduino IDE 打開檔案：
   ```
   esp32cam/esp32cam_stream/esp32cam_stream.ino
   ```

2. **修改 WiFi 設定**（如果需要）：
   ```cpp
   const char* ssid     = "g_home";        // ← 你的 WiFi 名稱
   const char* password = "9477063800";     // ← 你的 WiFi 密碼
   ```

## Step 4：選擇開發板設定

在 Arduino IDE：

1. `Tools` → `Board` → 選擇 **AI Thinker ESP32-CAM**
   - 如果找不到，選 **ESP32 Wrover Module**
2. `Tools` → 確認以下設定：
   - **Board**: AI Thinker ESP32-CAM
   - **CPU Frequency**: 240MHz
   - **Flash Frequency**: 80MHz
   - **Flash Mode**: QIO
   - **Flash Size**: 4MB
   - **Partition Scheme**: Huge APP (3MB No OTA)
   - **Port**: 選你的 USB COM port（例如 COM3）

## Step 5：上傳韌體

### 如果你有 ESP32-CAM-MB 底板（有 USB 插口的那塊底板）：
1. 把 ESP32-CAM 插上 MB 底板
2. USB 線連接 MB 底板到電腦
3. 直接按 Upload (→ 箭頭按鈕)
4. 上傳過程中 MB 底板會自動處理 boot 模式

### 如果你用 FTDI USB-to-Serial 轉接器：
1. 接線：
   ```
   FTDI        ESP32-CAM
   ────────────────────
   5V    →     5V
   GND   →     GND
   TX    →     U0R
   RX    →     U0T
   ```
2. **上傳前：** 用杜邦線把 `GPIO 0` 連接到 `GND`（進入下載模式）
3. 按一下 ESP32-CAM 上的 RESET 鍵
4. 在 Arduino IDE 按 Upload
5. **上傳完成後：** 拔掉 `GPIO 0` → `GND` 的線
6. 按 RESET 鍵重啟

## Step 6：確認成功

1. 打開 `Tools` → `Serial Monitor`
2. 設定 baud rate 為 **115200**
3. 按 ESP32-CAM 的 RESET 鍵
4. 你應該看到類似這樣的輸出：

```
========================================
  ✅ WiFi Connected!
========================================
  IP Address : http://192.168.1.XXX
  Stream URL : http://192.168.1.XXX:81/stream
  Snapshot   : http://192.168.1.XXX/capture
  Signal     : -45 dBm
========================================
  Copy the Stream URL into your website!
========================================

🎥 Camera streaming is READY!
```

5. **記下那個 IP 地址！**

## Step 7：測試串流

1. 打開瀏覽器
2. 輸入 `http://192.168.1.XXX`（你的 ESP32 IP）→ 會看到狀態頁面
3. 輸入 `http://192.168.1.XXX:81/stream` → 會看到即時影像！

## Step 8：在網站上看直播

1. 打開 Gu Gu Gu 網站
2. 進入「直播鳥屋」頁面
3. 在上方的輸入框輸入 ESP32 的 IP（例如 `192.168.1.100`）
4. 按「連線」
5. 即可看到即時影像！🎉

---

## 🌐 外網存取方案（GitHub Pages / Netlify）

> ⚠️ 如果你的網站是部署在 GitHub Pages / Netlify 等外部伺服器上，觀眾的電腦不在同一個 WiFi，就無法直接看到 ESP32 的串流。你需要一個「隧道」把 ESP32 的串流開放到公網。

### 方案 A：ngrok（推薦 — 最簡單）

1. 去 [ngrok.com](https://ngrok.com) 註冊免費帳號
2. 下載 ngrok
3. 登入（只需一次）：
   ```bash
   ngrok config add-authtoken YOUR_AUTH_TOKEN
   ```

4. **在和 ESP32 同一個 WiFi 的電腦上**執行：
   ```bash
   ngrok http 192.168.1.XXX:81
   ```
   （把 `192.168.1.XXX` 換成你 ESP32 的 IP）

5. ngrok 會給你一個公網 URL，例如：
   ```
   https://abc123.ngrok-free.app
   ```

6. 在網站的串流頁面輸入這個 URL（會自動加上 `/stream`）
7. 外面的人就能看到直播了！

> **注意：** ngrok 免費版每次重啟會換 URL。如果需要固定 URL，要升級付費版或用其他方案。

### 方案 B：Cloudflare Tunnel（免費 + 固定 URL）

1. 註冊 [Cloudflare](https://dash.cloudflare.com) 帳號（免費）
2. 下載 [cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/)
3. 在和 ESP32 同一 WiFi 的電腦上：
   ```bash
   cloudflared tunnel --url http://192.168.1.XXX:81
   ```
4. 它會給你一個 `https://xxx.trycloudflare.com` 的 URL

### 方案 C：localtunnel（免費 + 簡單）

```bash
npx localtunnel --port 81 --local-host 192.168.1.XXX
```

---

## 🔧 疑難排解

### 問題：Serial Monitor 沒有輸出
- 確認 baud rate 是 115200
- 按 RESET 鍵
- 確認 USB 線有資料傳輸功能（有些只能充電）

### 問題：Camera init FAILED
- 確認板子型號選對（AI Thinker ESP32-CAM）
- 檢查相機排線是否接好（金色接頭朝板子，輕推卡扣）
- 試試按 RESET 重啟

### 問題：WiFi 連不上
- 確認 SSID 和密碼正確（區分大小寫）
- 確認路由器在 2.4GHz（ESP32 不支援 5GHz）
- 把 ESP32 靠近路由器

### 問題：串流卡頓
- 距離路由器太遠，靠近一些
- 同一網路上其他裝置佔用頻寬
- 在韌體中降低解像度（改 `FRAMESIZE_QVGA`）

### 問題：網站有 Mixed Content 錯誤
- 如果網站是 HTTPS，串流必須也是 HTTPS
- 使用 ngrok 或 Cloudflare Tunnel 就自動提供 HTTPS

---

## 帶去學校時

1. 修改韌體中的 WiFi 設定為學校 WiFi：
   ```cpp
   const char* ssid     = "SCHOOL_WIFI_NAME";
   const char* password = "SCHOOL_WIFI_PASSWORD";
   ```
2. 重新上傳韌體
3. 在學校的電腦上用 Serial Monitor 查看新的 IP
4. 如果需要外網存取，在學校的電腦上開 ngrok
