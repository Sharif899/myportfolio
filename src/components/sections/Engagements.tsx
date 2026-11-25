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
              <span className="section-number">04</span>
              <span className="kicker">What I can be hired for</span>
            </p>
            <h2 id="engagements-heading" className="section-title mt-3 max-w-2xl">
              Four kinds of work
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              If your problem is one of these, the evidence for it is already
              on this page. If it is none of these, write anyway. The worst
              you will get is a straight no.
            </p>
          </div>
        </Reveal>

        <ul className="divide-y divide-hairline border-y border-hairline">
          {engagements.map((item) => (
            <li key={item.title} className="py-6">
              <Reveal>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">
                      {item.scope}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-pine sm:max-w-56 sm:text-right">
                    {item.proof}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
