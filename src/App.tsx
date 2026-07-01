import './index.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Barbers from './components/Barbers'
import Info from './components/Info'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

function SectionDivider() {
  return (
    <div className="w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />
  )
}

function App() {
  return (
    <div className="w-full min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <SectionDivider />
      <AboutUs />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Barbers />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Info />
      <Footer />
      <WhatsAppFab />
      <Analytics />
    </div>
  )
}

export default App
