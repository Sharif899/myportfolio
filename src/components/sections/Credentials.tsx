import { GraduationCap, Award } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { certifications, education } from '@/lib/data'

export default function Credentials() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="flex items-baseline gap-3">
              <span className="section-number">06</span>
              <span className="kicker">Education &amp; credentials</span>
            </p>
            <h2 id="education-heading" className="section-title mt-3 max-w-2xl">
              Trained to measure, not just to build
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                <GraduationCap size={18} className="text-pine" aria-hidden="true" />
                Education
              </h3>
              <ol className="mt-6 space-y-7">
                {education.map((item) => (
                  <li key={item.degree} className="border-l-2 border-pine pl-5">
                    <p className="font-display text-lg font-medium leading-snug text-ink md:text-xl">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-base text-ink-soft">
                      {item.school} · {item.year}
                    </p>
                    {item.detail && (
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {item.detail}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                <Award size={18} className="text-pine" aria-hidden="true" />
                Certifications
              </h3>
              <ol className="mt-6 space-y-7">
                {certifications.map((cert) => (
                  <li key={cert.name} className="border-l-2 border-hairline pl-5">
                    <p className="font-display text-lg font-medium leading-snug text-ink md:text-xl">
                      {cert.name}
                    </p>
                    <p className="mt-1 text-base text-ink-soft">
                      {cert.issuer} · {cert.year}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm leading-relaxed text-ink-muted">
                The PhD thesis — on data quality and annotation consistency — is
                the research behind the method in section 02. The work did not
                start with the tools; the tools are the thesis, applied.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
