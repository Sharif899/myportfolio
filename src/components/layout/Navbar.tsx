'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, socialLinks } from '@/lib/data'
import { Menu, X, Download } from 'lucide-react'
import SocialIcon from '@/components/ui/SocialIcon'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
          scrolled
            ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg font-bold text-white tracking-tight hover:text-accent-500 transition-colors"
          >
            Sherif Olabode
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'text-sm transition-colors duration-200',
                  activeSection === link.href.slice(1)
                    ? 'text-accent-500'
                    : 'text-dark-300 hover:text-white'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.slice(0, 3).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-accent-500 transition-colors duration-200"
                  aria-label={s.label}
                >
                  <SocialIcon icon={s.icon} size={16} />
                </a>
              ))}
            </div>
            <a
              href="/sherif-olabode-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          <button
            className="md:hidden text-dark-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-dark-900 border-l border-white/10 p-8 pt-20 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-display text-2xl font-bold text-dark-200 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <a
                href="/sherif-olabode-cv.pdf"
                download
                className="mt-8 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-white bg-accent-500"
              >
                <Download size={14} />
                Download CV
              </a>
              <div className="mt-auto flex gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-400 hover:text-accent-500 transition-colors"
                    aria-label={s.label}
                  >
                    <SocialIcon icon={s.icon} size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
