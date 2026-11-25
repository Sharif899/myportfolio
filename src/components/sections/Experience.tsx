import Reveal from '@/components/ui/Reveal'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="flex items-baseline gap-3">
              <span className="section-number">04</span>
              <span className="kicker">Experience</span>
            </p>
            <h2 id="experience-heading" className="section-title mt-3 max-w-2xl">
              Seven years, four rooms
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              What each role changed, not what it involved. Duties are on the CV;
              outcomes are here.
            </p>
          </div>
        </Reveal>

        <ol className="relative space-y-12 border-l border-hairline pl-8 md:space-y-14 md:pl-12">
          {experience.map((job, i) => (
            <li key={job.org} className="relative">
              <Reveal delay={i * 40}>
                <span
                  className="absolute -left-8 top-2 h-3 w-3 -translate-x-[7px] rounded-full border-2 border-pine bg-paper md:-left-12"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="shrink-0 text-sm font-medium text-ink-muted">
                    {job.dates}
                  </p>
                </div>
                <p className="mt-1 text-base font-semibold text-pine">
                  {job.org} <span className="font-normal text-ink-muted">· {job.meta}</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {job.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-base leading-relaxed text-ink-soft">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
