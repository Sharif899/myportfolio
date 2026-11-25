'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { whatIDo } from '@/lib/data'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">About</p>
          <h2 className="section-title">An evaluator who ships software</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            className="lg:col-span-3 space-y-5 text-dark-300 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>
              I&apos;m a Senior AI Evaluator &amp; Trainer with a Ph.D. in Data Science
              and seven years in model evaluation and AI training data. Since 2019
              at iMerit I have evaluated 12,000+ LLM responses and audited 3,000+
              contributor submissions; since 2020 at Databricks I have built
              evaluation pipelines supporting 75,000+ LLM test cases.
            </p>
            <p>
              I am also a Senior Software Engineer at Seamfix, building identity
              verification, KYC and digital onboarding systems, and an AI Training
              Expert with micro1 on image and video annotation.
            </p>
            <p className="text-dark-400">
              Based in <span className="text-white">Lagos, Nigeria</span> — working
              remotely with teams around the world.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card rounded-md p-7">
              <p className="eyebrow mb-5">What I do</p>
              <ul className="space-y-3.5">
                {whatIDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-dark-200 text-sm md:text-base">
                    <Check size={17} className="text-accent-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
