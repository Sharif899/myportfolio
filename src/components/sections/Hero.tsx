'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { socialLinks, stats } from '@/lib/data'
import SocialIcon from '@/components/ui/SocialIcon'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 cyber-grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,255,255,0.07)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(155,48,255,0.07)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00FFFF, transparent)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[10%] w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #9B30FF, transparent)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Orbiting dot */}
      <div className="absolute top-[30%] right-[20%] hidden lg:block">
        <motion.div
          className="relative w-2 h-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '40px 40px' }}
        >
          <div className="w-2 h-2 rounded-full bg-cyber-500 shadow-cyber-sm" />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        style={{ y, opacity }}
      >
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass rounded-full border border-cyber-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="status-dot bg-green-400" />
          <span className="font-mono text-xs text-dark-300 tracking-widest uppercase">
            Available for work
          </span>
          <Sparkles size={12} className="text-cyber-500" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="block text-white">SHARIF</span>
          <span className="block cyber-text">.</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="font-mono text-base md:text-lg text-dark-300 mb-8 h-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-cyber-500/50">{'> '}</span>
          <TypeAnimation
            sequence={[
              'Building the future of the web.',
              2000,
              'Shipping Web3 products.',
              2000,
              'Crafting AI-powered experiences.',
              2000,
              'Creating experimental internet things.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-dark-200"
          />
          <span className="animate-blink text-cyber-500">_</span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto text-dark-400 text-base md:text-lg leading-relaxed mb-10 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Full stack vibecoder obsessed with modern web apps, Web3 protocols, AI tooling, and
          experimental products that push the boundaries of what&apos;s possible on the internet.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-btn px-8 py-3.5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 font-mono text-sm tracking-widest uppercase text-dark-300 hover:text-white border border-dark-600 hover:border-dark-400 rounded-sm transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={14} />
            Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-20"
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
              className="text-dark-500 hover:text-cyber-500 transition-all duration-200"
              aria-label={link.label}
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <SocialIcon icon={link.icon} size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-dark-900/80 px-6 py-5 text-center">
              <div className="font-display text-2xl md:text-3xl font-bold cyber-text mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-dark-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
