'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '@/lib/data'

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Education &amp; Certifications</p>
          <h2 className="section-title">Qualified, and still learning</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="card rounded-md p-7 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-accent-500" />
              <h3 className="font-display text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.degree}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-semibold text-white">{item.degree}</p>
                    <span className="font-mono text-xs text-accent-500 shrink-0">{item.year}</span>
                  </div>
                  <p className="text-dark-400 text-sm mt-0.5">{item.school}</p>
                  {item.detail && (
                    <p className="text-dark-500 text-sm mt-0.5">{item.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="card rounded-md p-7 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-accent-500" />
              <h3 className="font-display text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-semibold text-white">{cert.name}</p>
                    <span className="font-mono text-xs text-accent-500 shrink-0">{cert.year}</span>
                  </div>
                  <p className="text-dark-400 text-sm mt-0.5">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
