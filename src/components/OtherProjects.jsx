import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const OTHER_PROJECTS = [
  {
    title: "本地 AI 服務群",
    highlight:
      "一台 RTX 5060 Ti 主機跑多個本機 AI 服務，透過 Tailscale 給筆電使用，由自建的服務管理中心統一啟動、關閉與看健康狀態：PaddleOCR-VL 掃描 PDF 轉文字、Whisper 語音輸入（OpenCC 強制繁體）、遊戲文本批次翻譯、Markdown 轉 PDF（含 Mermaid）。",
    tags: ["Ollama", "PaddleOCR-VL", "Whisper", "Docker", "Tailscale", "Flask"],
    github: null,
    demo: null,
  },
  {
    title: "字幕生成器",
    highlight:
      "本機影片字幕系統：WhisperX large-v3（CUDA int8）轉錄，Ollama 修正中文同音錯字並批次翻譯、整理成繁中筆記，ffmpeg h264_nvenc GPU 加速燒錄字幕；瀏覽器內可直接編輯 SRT。",
    tags: ["WhisperX", "Ollama", "Flask", "React", "ffmpeg"],
    github: "https://github.com/kapy0312/subtitle-app",
    demo: null,
  },
  {
    title: "YT-Media-Extractor",
    highlight:
      "Electron + yt-dlp 跨平台影音下載工具：只用 Electron IPC、不開本機 HTTP 伺服器；登入憑證以 DPAPI / Keychain 加密；把 yt-dlp 錯誤碼翻成白話提示；為 Apple Silicon 配發原生核心，GitHub Actions 建置 Windows 與 macOS。",
    tags: ["Electron", "yt-dlp", "Node.js", "GitHub Actions"],
    github: "https://github.com/kapy0312/YT-Media-Extractor",
    demo: null,
  },
  {
    title: "皮克敏成長中心",
    highlight:
      "課堂遊戲化 SPA：52 站點地圖含縮放與平移、角色進化與禮物倒數機制，以 Google Apps Script + Google Sheets 當後端即時同步，實際用於課堂。",
    tags: ["React 18", "Google Apps Script", "Google Sheets", "SVG"],
    github: null,
    demo: null,
  },
];

export default function OtherProjects() {
  return (
    <section id="other" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="More Work" title="其他作品" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
  );
}
