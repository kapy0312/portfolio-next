import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const OTHER_PROJECTS = [
  {
    title: '即時字幕 Web App',
    highlight:
      'WhisperX large-v3（CUDA int8）本地轉錄 + Ollama qwen3:14b 翻譯，Flask SSE 串流到 React 前端，支援繁體中文翻譯與學習筆記生成。',
    tags: ['Flask', 'React / Vite', 'WhisperX', 'Ollama', 'SSE', 'Tailwind'],
    github: null,
    demo: null,
  },
  {
    title: 'YT-Media-Extractor',
    highlight:
      'Electron 跨平台 YouTube 媒體下載工具，透過 Whop 平台商業授權銷售，GitHub Actions 自動建置 Windows + macOS (arm64/x64)。',
    tags: ['Electron', 'React', 'yt-dlp', 'GitHub Actions', 'Whop'],
    github: 'https://github.com/kapy0312',
    demo: null,
  },
  {
    title: '皮克敏成長中心',
    highlight:
      '課堂遊戲化 SPA：52 站點地圖系統含縮放/平移，皮克敏 Sprite 馬克，禮物倒數進化機制，React 18 + GAS + Google Sheets 即時同步。',
    tags: ['React 18', 'Google Apps Script', 'Google Sheets', 'SVG Canvas'],
    github: 'https://github.com/kapy0312',
    demo: null,
  },
]

export default function OtherProjects() {
  return (
    <section id="other" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="More Work" title="其他作品" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OTHER_PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              variant="small"
              project={project}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
