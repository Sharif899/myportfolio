'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FeaturedProject } from '@/lib/data'

interface ProjectCardProps {
  project: FeaturedProject
  index: number
  inView: boolean
}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.article
      className="group card rounded-md overflow-hidden flex flex-col border-t-2 border-t-accent-500/60"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="font-mono text-xs tracking-widest uppercase text-accent-500">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-dark-500">
            <span
              className={cn(
                'w-1.5 h-1.5 rounded-full',
                project.status === 'Live' ? 'bg-accent-500' : 'bg-dark-400'
              )}
            />
            {project.status} · {project.year}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <p className="text-xs text-dark-300 mb-5">
          <span className="text-dark-500">Proof: </span>
          {project.proof}
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
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-dark-200 hover:text-accent-500 transition-colors"
            >
              <ExternalLink size={15} />
              Live site
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
