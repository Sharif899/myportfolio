'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { projects } from '@/lib/data'
import ProjectCard from '@/components/ui/ProjectCard'
import { cn } from '@/lib/utils'

const FILTERS = ['All', 'Web3 + AI', 'AI Tools', 'Web3', 'Dev Tools', 'Mobile App']

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  const displayed = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_60%,rgba(255,45,120,0.04)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-cyber-500/60 tracking-widest">03.</span>
            <div className="h-px flex-1 max-w-[60px] bg-cyber-500/30" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="section-title text-white">
                Selected <span className="cyber-text">Work</span>
              </h2>
              <p className="mt-4 text-dark-400 max-w-lg">
                Products I&apos;ve built, shipped, and launched. Each one is a reflection of a
                specific obsession at a specific moment in time.
              </p>
            </div>
            <div className="font-mono text-5xl font-bold text-dark-800 select-none">
              {String(projects.length).padStart(2, '0')}
            </div>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false) }}
              className={cn(
                'px-4 py-1.5 font-mono text-xs tracking-wider rounded-sm border transition-all duration-200',
                filter === f
                  ? 'border-cyber-500/60 text-cyber-500 bg-cyber-500/10'
                  : 'border-dark-700 text-dark-400 hover:border-dark-500 hover:text-dark-200'
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayed.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
                featured={project.featured}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more */}
        {filtered.length > 6 && (
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="cyber-btn px-8 py-3"
            >
              {showAll ? 'Show Less' : `Show All (${filtered.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
