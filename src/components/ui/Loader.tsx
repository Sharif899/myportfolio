'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const BOOT_LINES = [
  '> Initializing SHARIF.OS v2.4.1...',
  '> Loading neural interface...',
  '> Calibrating vibecheck protocols...',
  '> Mounting web3 modules...',
  '> Injecting AI cortex...',
  '> System ready.',
]

export default function Loader() {
  const [lines, setLines] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]])
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100))
        i++
      } else {
        clearInterval(interval)
      }
    }, 350)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-950"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08)_0%,transparent_60%)]" />

      {/* Corner decorations */}
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 opacity-40`}>
          <div className="w-full h-0.5 bg-cyber-500" />
          <div className="w-0.5 h-full bg-cyber-500 absolute top-0" style={{ left: i % 2 === 1 ? 'auto' : 0, right: i % 2 === 1 ? 0 : 'auto' }} />
        </div>
      ))}

      <div className="relative z-10 w-full max-w-lg px-8">
        {/* Logo */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-5xl font-bold cyber-text tracking-tight">
            SHARIF
          </span>
          <div className="mt-1 font-mono text-xs text-cyber-500/50 tracking-[0.3em] uppercase">
            vibecoder.exe
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          className="glass rounded-sm border border-cyber-500/20 p-5 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-xs text-dark-400">terminal — sharif@portfolio</span>
          </div>
          <div className="space-y-1 min-h-[140px]">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                className="font-mono text-xs text-cyber-500/80 leading-5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {line}
                {i === lines.length - 1 && (
                  <span className="inline-block w-1.5 h-3 bg-cyber-500 ml-0.5 animate-blink" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-xs text-dark-400">
            <span>LOADING</span>
            <span className="text-cyber-500">{progress}%</span>
          </div>
          <div className="h-0.5 bg-dark-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-500 via-neon-purple to-cyber-500"
              style={{ backgroundSize: '200% 100%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
