🌐 [English](./README.md) | [中文](./README.zh-TW.md)

# Kevin Lai — 個人作品集（Next.js SSG）

Kevin Lai 的個人作品集網站，一位橫跨 OT（Siemens SINUMERIK、TIA Portal、
OPC-UA）與 IT（FastAPI、React、AI 整合）的 CIM / 工業 AI 工程師。

🔗 **線上網址:** [kapy0312.github.io/portfolio-next](https://kapy0312.github.io/portfolio-next/)

---

## 為什麼要做這個

這是從原本 Vite + React CSR 版本改寫而來。舊版在 HTML 層級是一個空的
`<div id="root">`——對一般使用者沒差，但招募方的連結預覽、部分爬蟲、
任何不執行 JS 的工具看到的都是空殼。這個版本改用 **Next.js App Router +
Static Export（SSG）**，每個頁面在 build 階段就完整渲染成 HTML。輸出結果
依然是 100% 靜態檔案——沒有伺服器、沒有 API routes——部署方式跟 Vite 版
一樣，還是丟去 GitHub Pages。

## 技術棧

- **Framework:** Next.js 15（App Router，`output: 'export'`）
- **UI:** React 18、Tailwind CSS v4（`@tailwindcss/postcss`）
- **Fonts:** `next/font/google` — Space Grotesk、Inter、Noto Sans TC
- **Animations:** 基於 IntersectionObserver 的捲動進場效果，未使用動畫套件
- **Deployment:** GitHub Actions → `gh-pages` branch → GitHub Pages

## 專案結構

```
portfolio-next/
├── next.config.js          # output: 'export'，GitHub Pages 的 basePath
├── postcss.config.mjs      # Tailwind v4 透過 PostCSS 載入
├── jsconfig.json           # "@/*" 路徑別名 → "./src/*"
├── public/
│   └── favicon.svg
├── .github/workflows/
│   └── deploy.yml          # CI：build → .nojekyll → 推送到 gh-pages
└── src/
    ├── app/
    │   ├── layout.jsx      # metadata、next/font 設定
    │   ├── page.jsx        # 組裝所有 section
    │   └── globals.css     # Tailwind theme tokens + 自訂樣式
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Skills.jsx
    │   ├── FeaturedProjects.jsx
    │   ├── OtherProjects.jsx
    │   ├── ProjectCard.jsx     # variant="featured" | "small"
    │   ├── SectionTitle.jsx
    │   ├── SkillBadge.jsx
    │   ├── Experience.jsx
    │   └── Contact.jsx
    └── hooks/
        └── useInView.js     # 只觸發一次的捲動偵測 hook
```

有用到 state 或瀏覽器 API（`useState`、`useEffect`、`useInView`）的元件都
標記 `'use client'`；純展示型元件（`SkillBadge`、`FeaturedProjects`、
`OtherProjects`）維持 Server Component。

## 本機啟動

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

`basePath` 只在正式 build 時套用（`next.config.js` 裡的
`isProd = process.env.NODE_ENV === 'production'`），所以 dev 模式是用根路徑
運行，本機測試不需要多打 `/portfolio-next/`。

## 建置

```bash
npm run build
```

靜態輸出會產生在 `out/`。要驗證 SSG 有沒有生效，用文字編輯器打開
`out/index.html`——裡面的中文內容（例如「CIM 工程師」）應該直接可讀，
不是要等 client-side 執行完才看得到。

## 部署

push 到 `main` 會觸發 `.github/workflows/deploy.yml`，流程是：

1. 安裝依賴套件（`npm ci`）
2. 執行建置（`next build`）
3. 建立 `out/.nojekyll`（否則 GitHub Pages 的 Jekyll 處理器會因為底線開頭
   悄悄濾掉 `_next/` 資源資料夾）
4. 透過 `peaceiris/actions-gh-pages` 把 `out/` 發布到 `gh-pages` branch

**一次性 repo 設定：**
- Settings → Pages → Source → Deploy from a branch → `gh-pages`
- Settings → Actions → General → Workflow permissions → **Read and write**
  （預設唯讀權限的 token 會在 push 時遇到 403）

也可以用 `npm run deploy` 手動部署（build + `gh-pages -d out`）。

## 待辦事項

- [ ] 替換 `Navbar.jsx`、`Contact.jsx` 裡的佔位 email（`your@email.com`）
- [ ] 替換 `Contact.jsx` 裡的佔位 104 履歷連結
- [ ] 替換 `public/favicon.svg` 佔位圖示
- [ ] 錄製並嵌入 IIoT SCADA demo 影片（`FeaturedProjects.jsx` → `mediaUrl`）
- [ ] 確認 `vlt-cnc-showcase`、`bfx-lending-bot-showcase` 這兩個 repo
      是否存在且公開，否則連結按鈕會 404