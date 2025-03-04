import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import AIShowcase from './components/AIShowcase'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Integrations from './components/Integrations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <AIShowcase />
        <Benefits />
        <Testimonials />
        <Integrations />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
