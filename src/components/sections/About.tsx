'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Cpu, Globe, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Globe,
    title: 'Web Apps',
    desc: 'Crafting fast, scalable full-stack applications with a focus on UX and performance.',
    color: '#00FFFF',
  },
  {
    icon: Cpu,
    title: 'Web3 & Crypto',
    desc: 'Building DeFi protocols, NFT platforms, and onchain products across multiple chains.',
    color: '#9B30FF',
  },
  {
    icon: Code2,
    title: 'AI Tools',
    desc: 'Shipping LLM-powered apps, RAG pipelines, and AI agents for real-world workflows.',
    color: '#FF2D78',
  },
  {
    icon: Zap,
    title: 'Experimental',
    desc: 'Exploring the weird, novel, and experimental edges of what the internet can be.',
    color: '#39FF14',
  },
]

const timeline = [
  { year: '2023', event: 'Started with HTML/CSS/JS. Built my first project.' },
  { year: '2024', event: 'Went deep on React & Node.js. First freelance client.' },
  { year: '2024', event: 'Fell into Web3 rabbit hole. Deployed first smart contract.' },
  { year: '2024', event: 'Built and launched 3 DeFi products. Joined a Web3 startup.' },
  { year: '2025', event: 'Pivoted to AI. Built LLM tools and shipped to thousands of users.' },
  { year: '2025', event: 'Full-time vibecoder. Building products at the intersection of all of it.' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(155,48,255,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-cyber-500/60 tracking-widest">01.</span>
            <div className="h-px flex-1 max-w-[60px] bg-cyber-500/30" />
          </div>
          <h2 className="section-title text-white">
            About <span className="cyber-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Avatar placeholder */}
            <div className="relative mb-8 inline-block">
              <div className="w-32 h-32 rounded-sm overflow-hidden neon-border">
                <div className="w-full h-full bg-gradient-to-br from-cyan-600 via-purple-700 to-pink-700 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-white">S</span>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyber-500/60" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyber-500/60" />
            </div>

            <div className="space-y-5 text-dark-300 leading-relaxed">
              <p className="text-lg text-dark-200">
                Hey, I&apos;m <span className="text-white font-semibold">Sharif</span> — a full
                stack developer who goes by the title <em className="text-cyber-500 not-italic">vibecoder</em>.
                I build things that live at the intersection of beautiful design,
                robust engineering, and emerging technology.
              </p>
              <p>
                My obsessions: fast and beautiful web apps, onchain products that actually make
                sense, AI tools that genuinely improve workflows, and experimental internet
                experiments that have no business existing — but do anyway.
              </p>
              <p>
                When I&apos;m not pushing commits, I&apos;m deep in crypto Twitter, tinkering with
                new models, or exploring what Farcaster and the open social web can become.
                I believe the next era of the internet will be built by a small number of
                builder-native individuals who can move fast and ship.
              </p>
              <p className="text-dark-400">
                Based in <span className="text-white">Lagos, Nigeria</span> 🌍 — building for the world.
              </p>
            </div>

            {/* Fun facts */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Next.js lover', 'Onchain native', 'AI tinkerer', 'Open source', 'Dark mode only'].map(
                (tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right: What I do + Timeline */}
          <div className="space-y-8">
            {/* Pillars */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="glass-card rounded-sm p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <p.icon size={22} style={{ color: p.color }} className="mb-3" />
                  <div className="font-display font-bold text-white mb-1">{p.title}</div>
                  <div className="text-xs text-dark-400 leading-relaxed">{p.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="glass-card rounded-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="font-mono text-xs text-cyber-500/60 tracking-widest uppercase mb-5">
                Origin Story
              </div>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                  >
                    <span className="font-mono text-xs text-cyber-500 w-10 shrink-0 mt-0.5">
                      {item.year}
                    </span>
                    <div className="flex items-start gap-3">
                      <div className="w-px h-full bg-dark-700 relative mt-2">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyber-500/40" />
                      </div>
                      <p className="text-sm text-dark-400 leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
