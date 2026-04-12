# 🚀 Gu Gu Gu 專案：全自動上線終極指南

這份指南將帶你從零開始，把網站、直播中繼站同時部署到網路上，並讓 ESP32-CAM 成功連線。

---

## 第一階段：把所有檔案推上 GitHub
如果你還沒把程式碼放上去，這是一次到位的指令：

1. 打開終端機 (Terminal)。
2. 輸入以下指令：
```bash
git init
git add .
git commit -m "Deploy: Website + Cloud Relay"
# 前往 GitHub 網頁建立一個 Repo 並複製網址，取代下方的 URL
git remote add origin https://github.com/你的GitHub帳號/gugugu.git
git branch -M main
git push -u origin main --force
```

---

## 第二階段：上線「直播中繼站」(Render.com)
你的 ESP32-CAM 需要一個在雲端的「家」。

1. 登入 [Render.com](https://render.com/)。
2. 點 **New +** -> **Web Service**。
3. 選擇 GitHub 上的 `gugugu` Repo。
4. **關鍵設定：**
   - **Name**: `gugugu-relay`
   - **Root Directory**: `relay-server` (這點最重要！)
   - **Instance Type**: `Free`
   - **Start Command**: `node server.js`
5. 點擊 **Create Web Service**。
6. **記下生成的 URL** (例如: `https://gugugu-relay.onrender.com`)。

---

## 第三階段：讓 ESP32-CAM 開始推播
1. 打開 Arduino，載入 `esp32cam/esp32cam_push/esp32cam_push.ino`。
2. 將剛才 Render 給你的網址貼到 `host` 變數（**不可帶 https:// 或末尾斜槓**）：
   ```cpp
   const char* host = "gugugu-relay.onrender.com"; // 這是範例
   ```
3. 上傳程式碼到 ESP32-CAM。
4. 按下 RESET，看到 Serial Monitor 顯示 `✅ Connected to cloud server!`。

---

## 第四階段：上線「網站前端」(Netlify)
1. 登入 [Netlify](https://app.netlify.com/)。
2. **Add new site** -> **Import from existing project** -> **GitHub**。
3. 選擇 `gugugu` Repo。
4. **設定：**
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. 點擊 **Deploy**。
6. 打開你上線後的網站，進入直播頁面。
7. 輸入 WebSocket 網址，格式為：`wss://你的Render網址` (例如 `wss://gugugu-relay.onrender.com`)。
8. **大功告成！全網路的人都可以看到你的直播鳥屋了！** 🐦🎉
