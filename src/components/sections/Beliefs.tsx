import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { beliefs, beliefsCoda } from '@/lib/data'

export default function Beliefs() {
  return (
    <section id="beliefs" aria-labelledby="beliefs-heading" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <p className="flex items-baseline gap-3">
              <span className="section-number">02</span>
              <span className="kicker">What I believe</span>
            </p>
            <h2
              id="beliefs-heading"
              className="section-title mt-3 max-w-2xl"
            >
              Four convictions, each with a receipt
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              These are not principles. They are positions I will argue about —
              each one paid for with a mistake I made or a number I did not
              like. Every one of them shows up in the tools above, so you do
              not have to take my word for it.
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl space-y-12 md:space-y-14">
          {beliefs.map((belief) => (
            <Reveal key={belief.index}>
              <article className="border-t-2 border-pine pt-6">
                <p className="font-display text-sm text-ink-faint">
                  {belief.index}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
                  {belief.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                  {belief.body}
                </p>
                <p className="mt-4">
                  <a
                    href={belief.showsUpHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine no-underline hover:underline"
                  >
                    Where this shows up: {belief.showsUpLabel}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <p className="border-l-2 border-pine pl-5 text-base leading-relaxed text-ink-soft md:text-lg">
              {beliefsCoda}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
