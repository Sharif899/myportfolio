'use client'


import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from '@/components/ui/Loader'
import Navbar from '@/components/layout/Navbar'
import CursorGlow from '@/components/ui/CursorGlow'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import ScanlineEffect from '@/components/ui/ScanlineEffect'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-dark-950 noise-overlay">
          <ScanlineEffect />
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
