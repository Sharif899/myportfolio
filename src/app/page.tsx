import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import CaseStudies from '@/components/sections/CaseStudies'
import Method from '@/components/sections/Method'
import Engagements from '@/components/sections/Engagements'
import Experience from '@/components/sections/Experience'
import Expertise from '@/components/sections/Expertise'
import Credentials from '@/components/sections/Credentials'
import Writing from '@/components/sections/Writing'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main id="main">
        <Hero />
        <CaseStudies />
        <Method />
        <Engagements />
        <Experience />
        <Expertise />
        <Credentials />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
