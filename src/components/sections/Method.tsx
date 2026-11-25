import Reveal from '@/components/ui/Reveal'
import { principles } from '@/lib/data'

export default function Method() {
  return (
    <section id="method" aria-labelledby="method-heading" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="flex items-baseline gap-3">
              <span className="section-number">02</span>
              <span className="kicker">How I evaluate</span>
            </p>
            <h2
              id="method-heading"
              className="section-title mt-3 max-w-2xl"
            >
              Judgement you can check
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              A model’s score is only as good as the method behind it. These are
              the five rules I work by — each one is visible in the tools above,
              so you do not have to take my word for it.
            </p>
          </div>
        </Reveal>

        <ol className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {principles.map((principle, i) => (
            <li key={principle.index}>
              <Reveal delay={(i % 2) * 80}>
                <article className="border-t-2 border-pine pt-5">
                  <p className="font-display text-sm text-ink-faint">
                    {principle.index}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {principle.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={80}>
              <article className="flex h-full flex-col justify-between border-t-2 border-hairline pt-5">
                <p className="text-base leading-relaxed text-ink-soft">
                  The method is the product. The repositories on this page are
                  the method, written down and tested — read them before you hire
                  me, and you will know exactly how I work.
                </p>
                <p className="mt-6">
                  <a href="#work" className="text-link text-sm font-semibold">
                    Read the case studies →
                  </a>
                </p>
              </article>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  )
}
