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
4.  點擊 **Upload (燒錄)**。

---

## 二、 如何更新網頁內容 (Update Website)

在終端機輸入這段指令，保證你的網頁同步到網路上：

```bash
cd C:\Users\astin\Downloads\gugugu
git add .
git commit -m "Update website content"
git push
```

---

## 三、 常見疑難排解 (Troubleshooting)

### 1. Netlify 部署報錯 (Submodule Error)
如果你看到 "No url found for submodule path" 的錯誤，請執行這段：
```bash
del .gitmodules
git rm -r --cached guguguwyhk
git config --remove-section submodule.guguguwyhk
git add .
git commit -m "Fix submodule issues"
git push
```

### 2. 影像出不來？
*   檢查 ESP32 是否有插電？
*   檢查 Render 的網址顏色是不是綠色的 (Live)？
*   確保你在網頁輸入網址時開頭是 `wss://`。

### 3. 我改了程式，但 GitHub 報錯？
*   如果遇到衝突，可以用強行推送：
    `git push origin main --force`

---

祝你的畢業展/作品展大獲成功！🐦✨
