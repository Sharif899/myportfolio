import Reveal from '@/components/ui/Reveal'
import { stories } from '@/lib/data'

export default function Stories() {
  return (
    <section id="notes" aria-labelledby="notes-heading" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="flex items-baseline gap-3">
              <span className="section-number">03</span>
              <span className="kicker">Notes from the work</span>
            </p>
            <h2 id="notes-heading" className="section-title mt-3 max-w-2xl">
              Two things the work taught me
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              Not achievements. Decisions. Each one is checkable against the
              CV or the repositories, and each one changed how I build.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-5 md:gap-12">
          {stories.map((story, i) => (
            <Reveal
              key={story.index}
              delay={i === 1 ? 100 : 0}
              className={i === 0 ? 'md:col-span-3' : 'md:col-span-2'}
            >
              <article className="border-t-2 border-pine pt-6">
                <p className="font-display text-sm text-ink-faint">
                  {story.index}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
                  {story.title}
                </h3>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  Source: {story.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
