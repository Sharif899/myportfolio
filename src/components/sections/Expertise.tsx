import Reveal from '@/components/ui/Reveal'
import { capabilities } from '@/lib/data'

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="flex items-baseline gap-3">
              <span className="section-number">06</span>
              <span className="kicker">Tools</span>
            </p>
            <h2 id="expertise-heading" className="section-title mt-3 max-w-2xl">
              What I reach for, and why
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              Tools are choices, not a list. Each one below is there because
              it earned its place — the sentence next to it says how.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12">
          {capabilities.map((group) => (
            <Reveal key={group.category}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  {group.category}
                </h3>
                <dl className="mt-5 divide-y divide-hairline border-y border-hairline">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid gap-1 py-3.5 sm:grid-cols-[180px_1fr] sm:gap-6"
                    >
                      <dt className="text-base font-semibold text-ink">
                        {item.name}
                      </dt>
                      <dd className="text-base leading-relaxed text-ink-soft">
                        {item.why}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
