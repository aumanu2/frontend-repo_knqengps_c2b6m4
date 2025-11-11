import { useRef } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { About, Services, Portfolio, Testimonials, Contact, Footer } from './components/Sections'

function App() {
  const workRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      <Hero onExplore={() => scrollTo('#work')} onContact={() => scrollTo('#contact')} />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
