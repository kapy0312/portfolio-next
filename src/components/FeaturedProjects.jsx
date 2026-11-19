import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const FEATURED = [
  {
    title: 'VLT CNC 多站拋光系統',
    highlight:
      '生產環境部署的多站 CNC 協調控制系統：SINUMERIK ONE 主機協調 4 支 Sub-Station，C# HMI 即時監控，SFTP 自動派送 NC 程式，POKE_BLK 鏡像 DB 同步站台資料。',
    tags: ['SINUMERIK ONE', 'TIA Portal', 'C# / WinForms', 'SFTP / WinSCP', 'OPC-UA'],
    nda: true,
    github: 'https://github.com/kapy0312/vlt-cnc-showcase',
    githubNote: 'NDA 保護，不公開原始碼',
    demo: null,
    demoNote: 'NDA 保護，不提供 Demo',
    mediaNote: 'NDA · 僅提供架構說明',
  },
  {
    title: 'IIoT SCADA 平台',
    highlight:
      '全端工廠監控平台：OPC-UA（Siemens S7-1511T）+ SLMP（Mitsubishi FX5U）雙協定接入，TimescaleDB 時序壓縮與保留策略，Isolation Forest 異常偵測，並整合 RAG 檢索設備手冊、Ollama LLM 生成有憑有據的診斷報告。',
    tags: ['FastAPI', 'React', 'TimescaleDB', 'OPC-UA', 'SLMP', 'Isolation Forest', 'RAG', 'Ollama'],
    nda: false,
    github: 'https://github.com/kapy0312/iot-scada-platform',
    githubNote: null,
    demo: null,
    demoNote: 'Demo 影片製作中',
    mediaNote: 'DEMO VIDEO COMING SOON',
  },
  {
    title: 'RAG Platform',
    highlight:
      '多類別 PDF 文件問答系統，同一套程式碼透過 RAG_ENV 切換本地／AWS Serverless 雙環境。混合檢索（Dense bge-m3 + BM25 + RRF 融合）取代單純向量搜尋，自建 15 題七項指標評估框架，跑過 LoRA 微調與四模型 + 雲端 Gemini 的完整 benchmark 對照。',
    tags: ['Qdrant', 'Hybrid Retrieval', 'FastAPI', 'AWS Lambda', 'DynamoDB', 'LoRA', 'Ollama'],
    badge: 'LIVE DEMO',
    nda: false,
    github: 'https://github.com/kapy0312/rag-platform',
    githubNote: null,
    demo: 'https://dokd4w6bwden.cloudfront.net',
    demoNote: null,
    mediaNote: 'SCREENSHOT COMING SOON',
  },
  {
    title: 'BFX Lending Bot',
    highlight:
      'Bitfinex 放貸自動化商業桌面應用：UTC 01:30 結算週期對齊、帳本收益對帳、跨平台 Electron + React 打包，透過 Whop 平台授權銷售，擁有付費用戶，GitHub Actions CI/CD 自動建置 Win / macOS。',
    tags: ['Electron', 'React', 'SQLite', 'Bitfinex API', 'Whop', 'GitHub Actions'],
    nda: false,
    github: 'https://github.com/kapy0312/bfx-lending-bot-showcase',
    githubNote: null,
    demo: null,
    demoNote: 'Demo 影片製作中',
    mediaNote: 'SCREENSHOT COMING SOON',
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="Selected Work" title="精選作品" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
  )
}
