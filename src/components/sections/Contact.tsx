import { FileDown, Mail } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SocialIcon from '@/components/ui/SocialIcon'
import { siteConfig, socialLinks } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="flex items-baseline gap-3">
              <span className="section-number">08</span>
              <span className="kicker">Contact</span>
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-display text-3xl font-medium leading-tight text-ink md:text-5xl"
            >
              If you need a verdict you can defend, write to me.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              I am available for remote evaluation and engineering work — LLM
              evaluation and benchmarking, annotation QA, KYC and onboarding
              systems, and full-stack product builds. Tell me what you need
              measured or built, and I will give you a straight answer about
              whether I am the right person for it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                <Mail size={16} aria-hidden="true" />
                {siteConfig.email}
              </a>
              <a href="/sherif-olabode-cv.pdf" className="btn-secondary">
                <FileDown size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-hairline pt-6">
              {socialLinks
                .filter((link) => link.label !== 'Email')
                .map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft no-underline hover:text-pine"
                    >
                      <SocialIcon icon={link.icon} size={16} />
                      {link.label}
                    </a>
                  </li>
                ))}
              <li className="text-sm text-ink-muted">Lagos, Nigeria · working remotely</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
