# ☁️ 雲端中繼站 (Cloud Relay Server) 部署教學

因為我們把架構改成了**「ESP32 主動推播畫面到雲端」**，所以你的網站再也不受區域網路 (LAN) 和 ESP32 性能的限制了！
這個指南會教你如何免費部署 `relay-server` 到 Render.com。

---

## 步驟一：把 relay-server 放上 GitHub

如果你的 `gugugu` 資料夾已經在 GitHub 上，那很棒，直接把把最新的檔案 `commit` 和 `push` 上去就好。

如果你還沒有把 `relay-server` 放到 GitHub，請：
1. 打開 GitHub，建立一個新的 Repository (例如叫 `gugugu-relay`)
2. 把 `relay-server` 資料夾裡面的 `package.json` 和 `server.js` 傳上去。

---

## 步驟二：在 Render.com 部署

1. 前往 [Render.com](https://render.com/)，註冊一個免費帳號（用 GitHub 登入最快）。
2. 進入 Dashboard，點擊右上角的 **[New]** -> **[Web Service]**。
3. 選擇 **"Build and deploy from a Git repository"**。
4. 連結你的 GitHub 帳號，並選擇你剛剛上傳中繼站程式碼的 Repository (例如 `gugugu-relay`，如果是在原本的 repo 也可以選原本的)。
5. 填寫設定：
   - **Name**: 隨便取，例如 `gugugu-relay`
   - **Language**: `Node`
   - **Branch**: `main`
   - **Root Directory**: 如果你把 `server.js` 放在專案的 `relay-server` 資料夾裡，這裡就填 `relay-server`。如果你是新建獨立 Repo，這裡留白。
   - **Build Command**: 留白
   - **Start Command**: `node server.js`
   - **Instance Type**: 選擇 `Free` (免費方案)
6. 點擊最下方的 **[Create Web Service]**。

等待幾分鐘，畫面上會出現 "Live" 綠燈！
此時在畫面左上角，你會看到一串網址，例如：
🔗 `https://gugugu-relay.onrender.com`

**⚠️ 把這個網址複製下來，後面會用到！**

---

## 步驟三：設定 ESP32-CAM 韌體

1. 打開 Arduino IDE。
2. 打開檔案：`gugugu/esp32cam/esp32cam_push/esp32cam_push.ino`
3. 尋找這段程式碼：
   ```cpp
   const char* ssid     = "g_home";        
   const char* password = "9477063800";    

   // 改成你剛剛在 Render 拿到的網址 (不要加 https:// 開頭，直接寫網域)
   const char* host     = "gugugu-relay.onrender.com"; // <-- 換成你的
   const int   port     = 443;
   ```
4. 把 `host` 的值改成你在 Render 上獲得的網域（**切記不要放 `https://`，只要網域名稱**）。
5. 接著上傳韌體到 ESP32-CAM（選擇開發板 AI-Thinker ESP32-CAM）。
6. 上傳完畢並按 RESET，打開 Serial Monitor (115200)。
7. 你應該會看到它連上 WiFi 並顯示：`✅ Connected to cloud server!`

---

## 步驟四：在網站上觀看

1. 打開你的 Gu Gu Gu 網站。
2. 切換到「直播鳥屋」頁面。
3. 在頂部的輸入框，輸入你的 Render WebSocket 網址。
   - ⚠️ 注意！網址開頭要用 `wss://`。
   - 例如：`wss://gugugu-relay.onrender.com`
4. 點擊「連線」按鈕。
5. 等待幾秒鐘，你就會看到串流畫面出現！而且不管分享給多少人、用什麼網路，大家都能同時看到順暢的直播！🎉

---

### 原理總結

- **ESP32**：把自己當成發報機，一直瘋狂打 `POST https://gugugu-relay.onrender.com/upload` 送出照片。
- **Render 中繼站**：扮演「水塔」角色，接收照片後，瞬間「廣播 (Broadcast)」給所有連接它的瀏覽器客人。
- **網站瀏覽器**：只要一開，就連到 Render 等著接資料，把接到的資料變成圖片。非常省資源！
