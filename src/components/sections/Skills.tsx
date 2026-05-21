'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/lib/data'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(0,255,255,0.04)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-cyber-500/60 tracking-widest">02.</span>
            <div className="h-px flex-1 max-w-[60px] bg-cyber-500/30" />
          </div>
          <h2 className="section-title text-white">
            Tech <span className="cyber-text">Stack</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-lg">
            Tools, languages, and frameworks I reach for when building — organized by domain.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              className={cn(
                'glass-card rounded-sm p-7 cursor-pointer transition-all duration-300',
                activeCategory === category.category && 'ring-1 ring-cyber-500/40'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1 + 0.1 }}
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.category ? null : category.category
                )
              }
              whileHover={{ y: -3 }}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ color: category.color }}
                  >
                    {category.category}
                  </h3>
                  <div className="font-mono text-xs text-dark-500 mt-0.5">
                    {category.items.length} technologies
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center text-xs font-mono"
                  style={{
                    background: `${category.color}12`,
                    border: `1px solid ${category.color}30`,
                    color: category.color,
                  }}
                >
                  {String(catIdx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-3.5">
                {category.items.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-mono text-xs text-dark-300">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: category.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-0.5 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + skillIdx * 0.05 + 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud — flat list of all skills */}
        <motion.div
          className="mt-16 p-8 glass-card rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="font-mono text-xs text-dark-500 tracking-widest uppercase mb-5">
            Everything in the toolkit
          </div>
          <div className="flex flex-wrap gap-2">
            {skills
              .flatMap((c) => c.items.map((i) => ({ ...i, color: c.color })))
              .sort((a, b) => b.level - a.level)
              .map((skill, i) => (
                <motion.span
                  key={skill.name}
                  className="px-3 py-1.5 rounded-sm font-mono text-xs border transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    borderColor: `${skill.color}25`,
                    color: `${skill.color}90`,
                    background: `${skill.color}08`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.02 }}
                  whileHover={{ borderColor: `${skill.color}60`, color: skill.color }}
                >
                  {skill.name}
                </motion.span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
