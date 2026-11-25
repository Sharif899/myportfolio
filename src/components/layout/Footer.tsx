'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/lib/data'
import SocialIcon from '@/components/ui/SocialIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display text-xl font-bold text-white mb-1">
              Sherif Olabode
            </div>
            <div className="text-sm text-dark-500">
              Senior AI Evaluator &amp; Trainer
            </div>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-500 hover:text-accent-500 transition-colors"
                aria-label={link.label}
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <SocialIcon icon={link.icon} size={18} />
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-dark-500 text-center md:text-right">
            <div>Built with Next.js</div>
            <div className="mt-1">© {year} Sherif Olabode. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
