'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Send, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import SocialIcon from '@/components/ui/SocialIcon'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const const handleSubmit = async (e: React.FormEvent) => {   e.preventDefault()   setFormState('loading')   try {     const res = await fetch('/api/contact', {       method: 'POST',       headers: { 'Content-Type': 'application/json' },       body: JSON.stringify(form),     })     if (res.ok) {       setFormState('success')     } else {       setFormState('error')     }   } catch {     setFormState('error')   } } = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    // Simulate API call — wire up to your preferred email service (Resend, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1800))
    setFormState('success')
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(0,255,255,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-cyber-500/30" />
            <span className="font-mono text-sm text-cyber-500/60 tracking-widest">04.</span>
            <div className="h-px w-16 bg-cyber-500/30" />
          </div>
          <h2 className="section-title text-white mb-6">
            Let&apos;s <span className="cyber-text">Connect</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto leading-relaxed">
            Got a project in mind, a wild idea, or just want to talk about onchain stuff?
            My inbox is open. Let&apos;s build something interesting.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {/* Email block */}
            <div className="glass-card rounded-sm p-6 group hover:border-cyber-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={18} className="text-cyber-500" />
                <span className="font-mono text-xs text-dark-500 tracking-widest uppercase">Email</span>
              </div>
              <a
                href="mailto:sherifolabode@gmail.com"
                className="font-display text-xl font-bold text-white group-hover:text-cyber-500 transition-colors"
              >
                sherifolabode@gmail.com
              </a>
            </div>

            {/* Response time */}
            <div className="glass-card rounded-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare size={18} className="text-neon-purple" />
                <span className="font-mono text-xs text-dark-500 tracking-widest uppercase">Response time</span>
              </div>
              <p className="text-white font-display text-lg font-semibold">Within 24 hours</p>
              <p className="text-dark-400 text-sm mt-1">Usually much faster.</p>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-sm p-6">
              <div className="font-mono text-xs text-dark-500 tracking-widest uppercase mb-5">
                Find me online
              </div>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-sm border border-dark-700 hover:border-cyber-500/30 hover:bg-cyber-500/5 text-dark-400 hover:text-white transition-all duration-200"
                    whileHover={{ x: 3 }}
                  >
                    <SocialIcon icon={link.icon} size={16} />
                    <span className="font-mono text-xs">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-sm border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-dark-300">
                Open to freelance & full-time opportunities
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {formState === 'success' ? (
              <motion.div
                className="glass-card rounded-sm p-12 text-center h-full flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={48} className="text-green-400 mb-5" />
                <h3 className="font-display text-2xl font-bold text-white mb-3">Message sent!</h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => { setFormState('idle'); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-6 font-mono text-xs text-cyber-500 hover:text-white transition-colors"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={const handleSubmit = async (e: React.FormEvent) => {   e.preventDefault()   setFormState('loading')   try {     const res = await fetch('/api/contact', {       method: 'POST',       headers: { 'Content-Type': 'application/json' },       body: JSON.stringify(form),     })     if (res.ok) {       setFormState('success')     } else {       setFormState('error')     }   } catch {     setFormState('error')   } }} className="glass-card rounded-sm p-8 space-y-5">
                <div className="font-mono text-xs text-cyber-500/60 tracking-widest uppercase mb-6">
                  Send a message
                </div>

                {[
                  { label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block font-mono text-xs text-dark-500 mb-2 tracking-wider uppercase">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      className="w-full bg-dark-900/60 border border-dark-700 focus:border-cyber-500/50 rounded-sm px-4 py-3 text-sm text-white placeholder-dark-600 outline-none transition-colors duration-200 font-body"
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-mono text-xs text-dark-500 mb-2 tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-dark-900/60 border border-dark-700 focus:border-cyber-500/50 rounded-sm px-4 py-3 text-sm text-white placeholder-dark-600 outline-none transition-colors duration-200 resize-none font-body"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full cyber-btn py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: formState !== 'loading' ? 1.01 : 1 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
