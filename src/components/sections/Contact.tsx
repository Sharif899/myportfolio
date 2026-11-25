'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import SocialIcon from '@/components/ui/SocialIcon'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="section-title mb-5">Let&apos;s talk</h2>
          <p className="text-dark-400 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to freelance projects, startup collaborations and remote
            opportunities — especially AI evaluation, RLHF and safety work.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            href="mailto:sharifninolee@gmail.com"
            className="card rounded-md p-7 md:p-8 flex items-center gap-5 mb-6 group"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-md bg-accent-500/10 border border-accent-500/25 shrink-0">
              <Mail size={20} className="text-accent-500" />
            </span>
            <span>
              <span className="block font-mono text-xs text-dark-500 tracking-widest uppercase mb-1">
                Email
              </span>
              <span className="block font-display text-lg md:text-2xl font-bold text-white group-hover:text-accent-500 transition-colors">
                sharifninolee@gmail.com
              </span>
            </span>
          </a>

          <div className="grid sm:grid-cols-3 gap-4">
            {socialLinks
              .filter((link) => link.label !== 'Email')
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card rounded-md p-5 flex items-center gap-3 text-dark-300 hover:text-white transition-colors"
                >
                  <SocialIcon icon={link.icon} size={18} className="text-accent-500" />
                  <span className="font-body text-sm font-medium">{link.label}</span>
                </a>
              ))}
          </div>

          <p className="text-center text-dark-500 text-sm mt-8">
            Open to freelance &amp; remote opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
