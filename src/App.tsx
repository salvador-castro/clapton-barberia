import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
      <Gallery />
      <SectionDivider />
      <Barbers />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Info />
      <SectionDivider />
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default App
