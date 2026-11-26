import Link from "next/link";
import SkillBadge from "@/components/SkillBadge";
import { CASE_STUDIES } from "@/lib/caseStudies";

export const metadata = {
  title: "Case Studies — Kevin Lai",
  description:
    "工程案例故事：撤回錯誤的評估結論、誠實計算預警命中率、RAG 整合工業異常診斷、微調負向結果、API Key 外洩後的機制修正。",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-bg min-h-screen">
      <header className="border-b border-white/[0.08] py-5 sticky top-0 bg-bg/90 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-semibold text-base text-primary tracking-tight hover:text-cyan transition-colors duration-200"
          >
            KL<span className="text-cyan">.</span>
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-muted hover:text-primary transition-colors duration-200"
          >
            ← 回作品集
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-cyan">
          How I Work
        </span>
        <h1 className="font-display font-semibold text-3xl md:text-4xl text-primary leading-tight mt-3 mb-6">
          案例故事
        </h1>

        <nav aria-label="案例目錄" className="mb-16 rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
          <ol className="flex flex-col gap-2 list-decimal list-inside text-sm text-muted">
            {CASE_STUDIES.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className="hover:text-cyan transition-colors duration-150">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col gap-20">
          {CASE_STUDIES.map((story) => (
            <article key={story.slug} id={story.slug} className="scroll-mt-24">
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-cyan/70">
                {story.project}
              </span>
              <h2 className="font-display font-semibold text-2xl text-primary leading-snug mt-1 mb-3">
                {story.title}
              </h2>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {story.tags.map((t) => (
                  <SkillBadge key={t} name={t} variant="it" />
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {story.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm md:text-base text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/[0.08] text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded border border-cyan/50 text-cyan font-medium text-sm hover:bg-cyan/10 hover:border-cyan/80 transition-colors duration-200"
          >
            聯絡我
          </Link>
        </div>
      </main>
    </div>
  );
}
