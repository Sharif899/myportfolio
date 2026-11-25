import { navLinks, siteConfig, socialLinks } from '@/lib/data'
import SocialIcon from '@/components/ui/SocialIcon'

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              Sherif Olabode
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Senior AI Evaluator &amp; Trainer, {siteConfig.location}
            </p>
            <p className="mt-4 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft no-underline hover:text-pine"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} size={16} />
                  {link.label}
                </a>
              ))}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted no-underline hover:text-pine"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sherif Olabode. All rights reserved.</p>
          <p>
            Built by hand with Next.js. No template, no tracking, no cookies.
            Last updated 25 November 2026.
          </p>
        </div>
      </div>
    </footer>
  )
}
