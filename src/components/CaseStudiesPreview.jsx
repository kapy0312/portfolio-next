import Link from 'next/link'
import SectionTitle from './SectionTitle'
import SkillBadge from './SkillBadge'
import { CASE_STUDIES } from '@/lib/caseStudies'

export default function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle label="How I Work" title="案例故事" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((story) => (
            <Link
              key={story.slug}
              href={`/case-studies/#${story.slug}`}
              className="
                project-card relative rounded-xl
                bg-surface p-6 flex flex-col gap-4
              "
            >
              <h3 className="font-display font-semibold text-lg text-primary leading-snug">
                {story.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                {story.summary}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {story.tags.slice(0, 3).map((t) => (
                  <SkillBadge key={t} name={t} variant="default" />
                ))}
              </div>
              <span className="text-xs font-mono text-cyan/70">閱讀完整故事 →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
