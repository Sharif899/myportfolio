import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { writing } from '@/lib/data'

export default function Writing() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="flex items-baseline gap-3">
              <span className="section-number">08</span>
              <span className="kicker">Writing</span>
            </p>
            <h2 id="writing-heading" className="section-title mt-3 max-w-2xl">
              The READMEs are the writing
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              I have not published a blog. What I have published is four long,
              careful README documents that explain the method, the numbers and
              the limits of each tool. They are the best evidence of how I think.
            </p>
          </div>
        </Reveal>

        <ol className="grid gap-6 md:grid-cols-2">
          {writing.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 2) * 80}>
                <a
                  href={item.href}
                  className="group flex h-full flex-col rounded-sm border border-hairline bg-surface p-7 no-underline transition-colors hover:border-pine/50 md:p-8"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-display text-xl font-medium leading-snug text-ink group-hover:text-pine md:text-2xl">
                      {item.title}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-ink-faint transition-colors group-hover:text-pine"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
                    {item.description}
                  </span>
                  <span className="mt-5 text-sm font-medium text-pine">
                    Read the README on GitHub →
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
