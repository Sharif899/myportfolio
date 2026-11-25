import Reveal from '@/components/ui/Reveal'
import { engagements } from '@/lib/data'

export default function Engagements() {
  return (
    <section
      id="engagements"
      aria-labelledby="engagements-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="flex items-baseline gap-3">
              <span className="section-number">03</span>
              <span className="kicker">What I can be hired for</span>
            </p>
            <h2 id="engagements-heading" className="section-title mt-3 max-w-2xl">
              Four kinds of work
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              If your problem is one of these, the evidence for it is already on
              this page. If it is none of these, email me anyway — the worst
              outcome is a straight answer.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {engagements.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <article className="flex h-full flex-col rounded-sm border border-hairline bg-surface p-7 md:p-8">
                <h3 className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
                  {item.scope}
                </p>
                <p className="mt-5 border-t border-hairline pt-4 text-sm font-medium text-pine">
                  {item.proof}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
