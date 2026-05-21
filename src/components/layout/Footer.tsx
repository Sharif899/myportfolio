'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/lib/data'
import SocialIcon from '@/components/ui/SocialIcon'
import { Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <div className="font-display text-2xl font-bold cyber-text mb-1">SHARIF</div>
            <div className="font-mono text-xs text-dark-500">
              Full Stack Vibecoder
            </div>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-cyber-500 transition-colors"
                aria-label={link.label}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <SocialIcon icon={link.icon} size={18} />
              </motion.a>
            ))}
          </div>

          {/* Right: Copy */}
          <div className="font-mono text-xs text-dark-600 text-center md:text-right">
            <div className="flex items-center gap-1.5 justify-center md:justify-end">
              <span>Built with</span>
              <Heart size={10} className="text-neon-pink fill-neon-pink" />
              <span>& Next.js</span>
            </div>
            <div className="mt-1">© {year} Sharif. All rights reserved.</div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 pt-8 border-t border-white/[0.03] flex items-center justify-center">
          <div className="font-mono text-xs text-dark-700 tracking-widest">
            &lt;/vibecoder&gt;
          </div>
        </div>
      </div>
    </footer>
  )
}
