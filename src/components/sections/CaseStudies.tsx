import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { caseStudies, moreWork } from '@/lib/data'

function SectionHeading({
  number,
  kicker,
  title,
  intro,
}: {
  number: string
  kicker: string
  title: string
  intro?: string
}) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14">
        <p className="flex items-baseline gap-3">
          <span className="section-number">{number}</span>
          <span className="kicker">{kicker}</span>
        </p>
        <h2 className="section-title mt-3 max-w-2xl">{title}</h2>
        {intro && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          number="01"
          kicker="Selected work"
          title="Four tools that encode how I evaluate"
          intro="Each one started as a problem I kept running into while doing the job. All five are public, all five have tests, and the READMEs say where each tool stops. A tool that hides its limits is a demo, not a tool."
        />

        <div className="flex flex-col gap-14 md:gap-20">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i % 2 === 0 ? 0 : 60}>
              <article
                aria-labelledby={`case-${study.id}`}
                className="grid gap-6 rounded-sm border border-hairline bg-surface p-6 md:grid-cols-[220px_1fr] md:gap-10 md:p-10"
              >
                {/* Fact column — alternates sides so the four entries do not read as one repeated card */}
                <div
                  className={
                    i % 2 === 1
                      ? 'border-b border-hairline pb-5 md:order-2 md:border-b-0 md:border-l md:pb-0 md:pl-8'
                      : 'border-b border-hairline pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-8'
                  }
                >
                  <p className="font-display text-4xl font-medium text-pine">
                    {study.index}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    {study.year} · Open source
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {study.stack.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-hairline bg-paper px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 space-y-1.5">
                    {study.evidence.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    <a
                      href={study.repo}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine no-underline hover:underline"
                    >
                      Repository
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    {study.live && (
                      <a
                        href={study.live}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine no-underline hover:underline"
                      >
                        Live site
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    )}
                  </p>
                </div>

                {/* Narrative column */}
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <h3
                    id={`case-${study.id}`}
                    className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl"
                  >
                    {study.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink-soft">
                    {study.oneLiner}
                  </p>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
                    <p>
                      <span className="font-semibold text-ink">The problem. </span>
                      {study.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">The approach. </span>
                      {study.approach}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">The outcome. </span>
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* More work */}
        <Reveal>
          <div className="mt-16 md:mt-20">
            <h3 className="font-display text-2xl font-medium text-ink">More work</h3>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">
              One more evaluation tool, one live product, five earlier builds.
              Listed briefly — the case studies above are the argument.
            </p>
            <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
              {moreWork.map((item) => (
                <li key={item.title} className="py-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <p className="text-base font-semibold text-ink">
                        <a href={item.repo} className="text-link">
                          {item.title}
                        </a>
                        {item.live && (
                          <>
                            {' · '}
                            <a href={item.live} className="text-sm font-medium text-pine no-underline hover:underline">
                              Live site
                            </a>
                          </>
                        )}
                      </p>
                      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-ink-muted sm:text-right">
                      {item.proof}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
