import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const FEATURED = [
  {
    title: "IIoT SCADA 平台",
    highlight:
      "從 PLC 到 AI 的端對端工業監控：S7-1511T 經 OPC UA 每秒讀值，Isolation Forest 抓多訊號組合異常，本機 LLM 依設備手冊診斷原因並附章節頁碼；趨勢預警在超標前提醒，並用命中率與漏報率檢驗自己準不準。資料同步到 Tiger Cloud，claude.ai 透過雲端 MCP 直接查設備狀況與 OEE。",
    metrics: [
      { label: "預警命中率", value: "100%" },
      { label: "平均提前", value: "7分40秒" },
      { label: "預估誤差", value: "≈10 秒" },
    ],
    tags: [
      "S7-1511T",
      "OPC UA",
      "FastAPI",
      "TimescaleDB",
      "pgvector",
      "Isolation Forest",
      "Ollama",
      "MCP",
      "AWS Lambda",
    ],
    nda: false,
    github: "https://github.com/kapy0312/iot-scada-platform",
    githubNote: null,
    demo: null,
    demoNote: "Demo 影片製作中",
    mediaUrl: "/images/scada-trend-warning.webp",
    architecture: "/architecture/scada.html",
    mediaType: "image",
    mediaAlt: "趨勢預警畫面：溫度過警戒後預估約 6 分鐘到危險值",
  },
  {
    title: "RAG Platform",
    highlight:
      "自建 PDF 知識庫問答：向量 + BM25 + RRF + reranker 混合檢索，每個答案附檔名與頁碼；Claude Agent 自己決定查幾次、讀哪一頁；掃描頁自動 OCR。本機與 AWS Serverless 共用同一套程式碼，並提供 MCP 連接器給 Claude 使用。自建雙裁判評估框架，用數據決定每個設計。",
    metrics: [
      { label: "Agent 正確", value: "12/12" },
      { label: "本機 RAG 正確", value: "11/12" },
      { label: "每題成本", value: "≈$0.015" },
    ],
    badge: "Live Demo",
    tags: [
      "Hybrid Retrieval",
      "Reranker",
      "Claude Agent",
      "MCP",
      "Qdrant",
      "FastAPI",
      "AWS Lambda",
      "DynamoDB",
    ],
    nda: false,
    github: "https://github.com/kapy0312/rag-platform",
    githubNote: null,
    demo: "https://dokd4w6bwden.cloudfront.net",
    demoNote: null,
    mediaUrl: "/images/rag-architecture.webp",
    architecture: "/architecture/rag.html",
    mediaType: "image",
    mediaFit: "contain",
    mediaAlt: "RAG Platform 系統架構圖",
  },
  {
    title: "VLT CNC 拋光系統",
    highlight:
      "Siemens SINUMERIK ONE 五軸 CNC 拋光控制，C# HMI（3GL）整合加工參數管理、即時電流補償與 NC 程式自動生成。單站已交付客戶試車，多站架構（1 主站 + 11 子站）以 PUT/GET 交握協調開發中；已完成交接手冊與場內模擬機建置。",
    tags: [
      "SINUMERIK ONE",
      "TIA Portal SCL / LAD",
      "SINAMICS S120",
      "C# / WinForms",
      "TRAORI",
    ],
    nda: true,
    github: "https://github.com/kapy0312/vlt-cnc-showcase",
    githubNote: null,
    demo: null,
    demoNote: "公司專案，不提供 Demo",
    mediaNote: "NDA · 僅提供架構說明",
    architecture: "/architecture/vlt.html",
  },
  {
    title: "BFX Lending Bot",
    highlight:
      "Bitfinex P2P 放貸自動化桌面應用，有付費用戶的商業產品。API Key 不離開客戶電腦；授權驗證移到 AWS Lambda，金鑰不再放在客戶端；新增 USD↔USDt 依 VWAP 一鍵切換資金。GitHub Actions 以 tag 自動建置 Windows / macOS 並發布更新。",
    metrics: [
      { label: "自動化測試", value: "300+" },
      { label: "平台", value: "Win / Mac" },
      { label: "銷售", value: "Whop" },
    ],
    tags: [
      "Electron",
      "React",
      "SQLite",
      "Bitfinex API",
      "AWS Lambda",
      "Jest / Vitest",
      "GitHub Actions",
    ],
    nda: false,
    github: "https://github.com/kapy0312/bfx-lending-bot-showcase",
    githubNote: null,
    demo: null,
    demoNote: "商業產品，原始碼不公開",
    mediaUrl: "/images/bfx-dashboard.webp",
    architecture: "/architecture/bfx.html",
    mediaType: "image",
    mediaAlt: "BFX Lending Bot 主畫面",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="Selected Work" title="精選作品" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED.map((project, i) => (
            <ProjectCard
              key={project.title}
              variant="featured"
              project={project}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
