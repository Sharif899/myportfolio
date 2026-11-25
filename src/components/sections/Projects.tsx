'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { featuredProjects, moreProjects } from '@/lib/data'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="mt-4 text-dark-400 max-w-2xl">
            The work I&apos;m proudest of: AI evaluation tooling I built from my
            day job&apos;s expertise, a live product serving real users, and the
            Web3 products that got me here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl font-bold text-white mb-2">More projects</h3>
          <p className="text-dark-400 mb-8 max-w-2xl">
            Other products I&apos;ve shipped — each with its code and a live link.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {moreProjects.map((project, i) => (
              <motion.article
                key={project.title}
                className="card rounded-md p-6 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
              >
                <h4 className="font-display text-lg font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 pt-4 border-t border-white/5">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-dark-200 hover:text-accent-500 transition-colors"
                  >
                    <Github size={15} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-dark-200 hover:text-accent-500 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live site
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
