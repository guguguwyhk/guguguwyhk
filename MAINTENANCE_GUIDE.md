# 🛠️ Gu Gu Gu 系統維護與更新手冊

這份手冊將教你如何在更換環境（如到學校後）以及如何更新網頁內容。

---

## 一、 更換 ESP32-CAM 的 WiFi (到學校後必做)

當你從家裡換到學校網路時，必須重新燒錄程式：

1.  用數據線將 ESP32-CAM 連接到電腦。
2.  打開 Arduino IDE，載入 `esp32cam/esp32cam_push/esp32cam_push.ino`。
3.  **修改 WiFi 設定**：
    ```cpp
    const char* ssid     = "你的學校WiFi名稱";
    const char* password = "你的學校WiFi密碼";
    ```
4.  **注意**：Render 中繼站的網址 (`host`) 通常不需要改，除非你重新建立了一個 Render 服務。
5.  點擊 **Upload (燒錄)**。
6.  打開 Serial Monitor，確認顯示 `✅ WiFi Connected!`。

---

## 二、 如何更新網頁內容 (Update Website)

如果你修改了網頁（例如改了 `home.js` 的文字或 CSS），請按照以下步驟「一鍵同步」：

1.  在電腦上修改好你的檔案並儲存。
2.  打開終端機 (Terminal)，進入你的專案資料夾。
3.  輸入以下 **Git 指令**（純英文）：

```bash
cd C:\Users\astin\Downloads\gugugu
git add .
git commit -m "Update website content"
git push
```

### 🎈 為什麼這麼簡單？
*   **Netlify**：它會自動偵測到你的 GitHub 變動，並在 1 分鐘內自動重新編譯並上線。
*   **Render**：如果你沒有修改 `relay-server` 資料夾的東西，它會保持運行，不需要理它。

---

## 三、 常見疑難排解 (Troubleshooting)

### 1. 影像出不來？
*   檢查 ESP32 是否有插電？
*   檢查 Render 的網址顏色是不是綠色的 (Live)？
*   確保你在網頁輸入網址時開頭是 `wss://`。

### 2. 直播突然變得很卡？
*   可能是學校 WiFi 同步上傳的人太多。
*   你可以嘗試在 Arduino 程式碼裡，稍微降低解像度：
    將 `config.frame_size = FRAMESIZE_VGA;` 改成 `config.frame_size = FRAMESIZE_QVGA;`。

### 3. 我改了程式，但 GitHub 報錯？
*   如果遇到衝突，可以用強行推送：
    `git push origin main --force`

---

祝你的畢業展/作品展大獲成功！🐦✨
