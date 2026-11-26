🌐 [中文](./README.md) | [English](./README_EN.md)

# Kevin Lai — 個人作品集（Next.js SSG）

Kevin Lai 的個人作品集網站。CIM / 工業 AI 工程師，橫跨 OT（Siemens SINUMERIK、TIA Portal、OPC UA）與 IT（FastAPI、React、LLM / RAG、AWS）。

🔗 **線上網址：** [kapy0312.github.io/portfolio-next](https://kapy0312.github.io/portfolio-next/)

---

## 網站內容

| 區塊 | 內容 |
|---|---|
| 精選作品 | [IIoT SCADA 平台](https://github.com/kapy0312/iot-scada-platform)（含 [Demo 影片](https://www.youtube.com/watch?v=DcHqKwXjdPI)）、[RAG Platform](https://github.com/kapy0312/rag-platform)（含 Live Demo 與 [Demo 影片](https://www.youtube.com/watch?v=nUIZQTsouj4)）、[VLT CNC 拋光系統](https://github.com/kapy0312/vlt-cnc-showcase)、[BFX Lending Bot](https://github.com/kapy0312/bfx-lending-bot-showcase) |
| 案例故事（`/case-studies`） | 5 則：撤回錯誤的評估結論、誠實計算預警命中率、RAG 整合工業異常診斷、微調負向結果、API Key 外洩後的機制修正 |
| 其他作品 | 本地 AI 服務群、[字幕生成器](https://github.com/kapy0312/subtitle-app)、[YT-Media-Extractor](https://github.com/kapy0312/YT-Media-Extractor)、皮克敏成長中心 |
| 技能、經歷、證照 | OT / IT 雙欄技能、工作經歷、AWS SAA 證照、西門子業界講師 |

## 為什麼用 Next.js SSG

舊版用 Vite + React CSR，HTML 裡只有一個空的 `<div id="root">`。一般人用瀏覽器看沒差，但招募方的連結預覽、搜尋引擎、不執行 JS 的工具看到的都是空殼。這個版本改用 **Next.js App Router + Static Export（SSG）**，每個頁面在 build 時就渲染成完整 HTML。輸出仍然是純靜態檔案，沒有伺服器，照樣部署在 GitHub Pages。

## 技術棧

- **Framework：** Next.js 15（App Router，`output: 'export'`）
- **UI：** React 18、Tailwind CSS v4（`@tailwindcss/postcss`）
- **字型：** `next/font/google`（Space Grotesk、Inter、Noto Sans TC）
- **動畫：** IntersectionObserver 捲動進場，未使用動畫套件
- **部署：** GitHub Actions → `gh-pages` branch → GitHub Pages

## 專案結構

```
portfolio-next/
├── next.config.js            # output: 'export'、basePath（僅正式 build）
├── postcss.config.mjs        # Tailwind v4
├── jsconfig.json             # "@/*" → "./src/*"
├── public/
│   ├── favicon.svg
│   ├── images/               # 專案截圖（WebP）
│   ├── videos/               # 卡片上的循環 Demo（由 GIF 轉成的 MP4）與預覽圖
│   └── architecture/         # 各專案架構圖（獨立 HTML，已移除敏感資訊）
├── .github/workflows/
│   └── deploy.yml            # build → .nojekyll → 推送 gh-pages
└── src/
    ├── app/
    │   ├── layout.jsx        # metadata、字型
    │   ├── page.jsx          # 首頁，組裝各區塊
    │   ├── case-studies/
    │   │   └── page.jsx      # 案例故事完整頁
    │   └── globals.css       # Tailwind theme tokens + 自訂樣式
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Skills.jsx
    │   ├── FeaturedProjects.jsx   # 精選作品資料
    │   ├── CaseStudiesPreview.jsx # 首頁的案例入口
    │   ├── OtherProjects.jsx      # 其他作品資料
    │   ├── ProjectCard.jsx        # variant="featured" | "small"
    │   ├── SectionTitle.jsx
    │   ├── SkillBadge.jsx
    │   ├── Experience.jsx         # 經歷與證照
    │   └── Contact.jsx
    ├── hooks/
    │   └── useInView.js
    └── lib/
        ├── caseStudies.js    # 案例故事內容（首頁與 /case-studies 共用）
        └── asset.js          # public/ 檔案路徑加上 basePath
```

用到 state 或瀏覽器 API 的元件標記 `'use client'`；純展示元件維持 Server Component。

## 更新內容時改哪裡

| 想改的東西 | 檔案 |
|---|---|
| 精選作品（文字、數字、標籤、連結、截圖） | `src/components/FeaturedProjects.jsx` |
| 其他作品 | `src/components/OtherProjects.jsx` |
| 案例故事 | `src/lib/caseStudies.js` |
| 技能 | `src/components/Skills.jsx` |
| 經歷、證照 | `src/components/Experience.jsx` |
| 聯絡方式 | `src/components/Contact.jsx`、`src/components/Navbar.jsx` |

截圖放在 `public/images/`，在資料裡寫 `mediaUrl: "/images/檔名.webp"`；循環 Demo 放在 `public/videos/`，寫 `mediaType: "loop"`、`mediaUrl: "/videos/檔名.mp4"`、`mediaPoster`，卡片捲到畫面內才開始載入；YouTube 連結寫在 `video`，卡片會多一顆「影片」按鈕。架構圖放在 `public/architecture/`，寫 `architecture: "/architecture/檔名.html"`，卡片會多一顆「架構圖」按鈕。路徑前綴都會自動處理。

**架構圖公開前的檢查**：VLT 是公司專案，公開版已移除 PLC／NCK 位址、程式名稱、機構規格；其他三張移除電腦名稱、私網 IP 與商業產品的已知弱點。更新架構圖時請照同樣原則檢查。

## 更新 Demo GIF

各專案 README 的 GIF 檔案很大（7～9 MB），網站改用 MP4（小約 10 倍，畫面相同）。專案 GIF 更新後，在 `portfolio-next` 根目錄執行（需要 ffmpeg）：

```powershell
ffmpeg -y -i ..\iot-scada-platform\docs\images\demo.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -preset slow -crf 28 -an public\videos\scada-demo.mp4
ffmpeg -y -ss 12 -i ..\iot-scada-platform\docs\images\demo.gif -frames:v 1 -vf "scale=960:-2" public\videos\scada-poster.webp
```

RAG Platform 把路徑換成 `..\rag-platform\docs\images\demo.gif`、輸出檔名換成 `rag-demo.mp4`、`rag-poster.webp`，預覽圖的 `-ss 12` 改成 `-ss 31`（有答案和出處的畫面）。`-ss` 是擷取第幾秒當預覽圖，GIF 換新後記得重挑。

## 本機啟動

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。`basePath` 只在正式 build 時套用，本機不用多打 `/portfolio-next/`。

## 建置

```bash
npm run build
```

輸出在 `out/`。用文字編輯器打開 `out/index.html`，應該直接看得到「CIM 工程師」等文字，代表 SSG 生效。

## 部署

push 到 `main` 會觸發 `.github/workflows/deploy.yml`：

1. `npm ci` 安裝套件
2. `next build`
3. 建立 `out/.nojekyll`（否則 GitHub Pages 的 Jekyll 會濾掉 `_next/` 資料夾）
4. 用 `peaceiris/actions-gh-pages` 把 `out/` 推到 `gh-pages` branch

**一次性設定：**
- Settings → Pages → Source → Deploy from a branch → `gh-pages`
- Settings → Actions → General → Workflow permissions → **Read and write**

## 待辦事項

- [ ] 104 履歷開放後，把連結加回 `Contact.jsx`
- [ ] `public/favicon.svg` 換成正式圖示
