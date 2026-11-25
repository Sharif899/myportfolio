'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '@/lib/data'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.article
              key={job.org}
              className="card rounded-md p-7 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-accent-500 shrink-0">
                  {job.dates}
                </span>
              </div>
              <p className="text-dark-300 text-sm md:text-base mb-4">
                {job.org} · {job.location}
              </p>
              <ul className="space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-dark-400 text-sm md:text-base leading-relaxed">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
