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
              <span className="section-number">05</span>
              <span className="kicker">Expertise</span>
            </p>
            <h2 id="expertise-heading" className="section-title mt-3 max-w-2xl">
              What I can actually do
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              No percentages, no self-assessed scores — a capability is either
              demonstrated in the work above or it is not listed.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 60}>
              <div className="border-t border-hairline pt-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
