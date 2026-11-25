'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/lib/data'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="mt-4 text-dark-400 max-w-2xl">
            The tools and technologies I use every day, grouped by where they
            actually get used — no self-scored percentages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="card rounded-md p-7"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <h3 className="font-display text-lg font-bold text-white mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
