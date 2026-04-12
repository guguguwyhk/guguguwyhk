# 🚀 Gu Gu Gu Portal - GitHub 部署指南

這份指南將協助你將網站發佈到 GitHub Pages，讓所有人都能透過網件瀏覽。

## 1. 準備工作 (Prerequisites)
- 確保你已安裝 [Git](https://git-scm.com/downloads)。
- 擁有一個 [GitHub](https://github.com/) 帳號。
- 確保你的程式碼已經完成最後的修改。

## 2. 初始化 Git 倉庫
在你的專案根目錄（`Downloads\gugugu`）打開終端機，執行：

```bash
git init
git add .
git commit -m "Final exhibition build"
```

## 3. 在 GitHub 上建立新 Repository
1. 登入 GitHub，點擊右上角的 **+** -> **New repository**。
2. Repository name 命名為 `gugugu`。
3. 設為 **Public**。
4. **不要** 勾選 "Initialize this repository with a README"。
5. 點擊 **Create repository**。

## 4. 上傳程式碼
GitHub 會給你一組指令，通常如下（請替換為你的網址）：

```bash
git remote add origin https://github.com/你的用戶名/gugugu.git
git branch -M main
git push -u origin main
```

## 5. 快速部署 (使用 GitHub Pages)
由於這是一個 Vite 專案，最簡單的方法是使用 GitHub Actions 自動部署：

1. 在 GitHub Repository 頁面，點擊 **Settings** -> **Pages**。
2. 在 **Build and deployment** 下的 **Source**，改選 **GitHub Actions**。
3. 搜尋 "Static HTML" 或點擊建議的 Vite 部署範本。

> [!TIP]
> **推薦方法：手動發佈 Dist**
> 如果你不想使用 Actions，可以執行 `npm run build`，然後將生成的 `dist` 資料夾內容上傳到一個專門的 `gh-pages` 分支。

## 6. Google Sheets 最後一步 (重要)
確保你的 Google Apps Script 已經：
1. 點擊 **Deploy** -> **New Deployment**。
2. 選擇 **Web App**。
3. **Execute as**: Me.
4. **Who has access**: **Anyone**.
5. 複製產生的 **URL**，確保它與 `home.js` 中的 `scriptUrl` 一致。

---

祝你在華仁校園生態展覽中取得圓滿成功！Gu Gu! 🦉
