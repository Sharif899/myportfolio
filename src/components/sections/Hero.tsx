'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { socialLinks, stats } from '@/lib/data'
import SocialIcon from '@/components/ui/SocialIcon'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 w-full"
        style={{ y, opacity }}
      >
        <motion.p
          className="eyebrow flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <MapPin size={13} />
          Lagos, Nigeria · Working remotely
        </motion.p>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Sherif Olabode
        </motion.h1>

        <motion.p
          className="font-display text-lg md:text-2xl font-semibold text-accent-500 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Senior AI Evaluator &amp; Trainer | LLM Evaluation, RLHF &amp; QA |
          Software Engineer | Ph.D., Data Science
        </motion.p>

        <motion.p
          className="max-w-2xl text-dark-400 text-base md:text-lg leading-relaxed mb-10 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I evaluate large language models for a living — 12,000+ responses scored
          across 8+ projects at a 97% quality rating — and I build the software
          behind the evaluation: rubric harnesses, RLHF tooling, KYC and
          onboarding systems, and products people actually use.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            View my work
          </a>
          <a href="/sherif-olabode-cv.pdf" download className="btn-secondary">
            <Download size={15} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="flex items-center gap-5 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-accent-500 transition-colors duration-200"
              aria-label={link.label}
              whileHover={{ scale: 1.15, y: -2 }}
            >
              <SocialIcon icon={link.icon} size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-md overflow-hidden max-w-3xl border border-white/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-dark-900 px-5 py-5">
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] text-dark-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ArrowDown size={18} className="text-dark-500" />
      </motion.div>
    </section>
  )
}
