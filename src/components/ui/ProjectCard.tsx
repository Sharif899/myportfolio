'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  status: string
  year: string
  gradient: string
  accentColor: string
  link: string
  github: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
  inView: boolean
  featured?: boolean
}

export default function ProjectCard({ project, index, inView, featured }: ProjectCardProps) {
  return (
    <motion.div
      className={cn(
        'group glass-card rounded-sm overflow-hidden flex flex-col',
        featured && 'md:col-span-1'
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      {/* Gradient header */}
      <div
        className={cn(
          'relative h-44 bg-gradient-to-br overflow-hidden',
          project.gradient
        )}
      >
        {/* Glassmorphic overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Grid pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30" />

        {/* Center logo/icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display text-5xl font-bold text-white/20 select-none tracking-tight">
            {project.title.slice(0, 2).toUpperCase()}
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm font-mono text-xs bg-black/40 backdrop-blur-sm border border-white/10 text-white/80"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: project.status === 'Live' ? '#39FF14' : '#FF6B00',
                boxShadow: `0 0 6px ${project.status === 'Live' ? '#39FF14' : '#FF6B00'}`,
              }}
            />
            {project.status}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4 font-mono text-xs text-white/40">
          {project.year}
        </div>

        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-sm border border-white/20 text-white text-sm font-mono transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} />
            Live
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-sm border border-white/20 text-white text-sm font-mono transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={14} />
            Code
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span
              className="font-mono text-xs tracking-widest uppercase mb-1 block"
              style={{ color: project.accentColor + '80' }}
            >
              {project.category}
            </span>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-cyber-500 transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-500 group-hover:text-white transition-colors mt-1 shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            aria-label={`Visit ${project.title}`}
          >
            <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <p className="text-dark-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
