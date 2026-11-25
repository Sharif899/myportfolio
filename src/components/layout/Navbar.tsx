'use client'

import { useEffect, useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-paper/95 backdrop-blur-sm transition-colors',
        scrolled ? 'border-hairline' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold leading-none text-ink no-underline"
          aria-label="Sherif Olabode — back to top"
        >
          Sherif Olabode
          <span className="mt-1 block font-body text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
            AI Evaluator &amp; Trainer
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft no-underline transition-colors hover:text-pine"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/sherif-olabode-cv.pdf"
            className="inline-flex items-center gap-2 rounded-sm border border-pine px-4 py-2 text-sm font-semibold text-pine no-underline transition-colors hover:bg-pine hover:text-white"
          >
            <FileDown size={15} aria-hidden="true" />
            Download CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-sm border border-hairline bg-surface px-3 py-2 text-sm font-medium text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          Menu
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-hairline bg-paper px-5 pb-5 pt-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-2 py-2.5 text-base font-medium text-ink no-underline hover:bg-pine-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/sherif-olabode-cv.pdf"
                className="inline-flex items-center gap-2 rounded-sm bg-pine px-4 py-2.5 text-sm font-semibold text-white no-underline"
              >
                <FileDown size={15} aria-hidden="true" />
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
