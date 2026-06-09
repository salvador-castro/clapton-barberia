import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gold/10'
        : 'bg-transparent'
        }`}
    >
      <nav className="w-full max-w-6xl mx-auto px-6 flex items-center h-16 md:h-20">
        {/* Logo – left */}
        <div className="flex-1">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logos/logoHorizontal.PNG"
              alt="Clapton Barbershop"
              className="h-8 md:h-10 object-contain"
              fetchPriority="high"
            />
          </a>
        </div>

        {/* Desktop links – center */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile burger – right */}
        <div className="flex-1 flex items-center justify-end">
          <a
            href="https://wa.me/5493535653313?text=Hola!%20quisiera%20reservar%20un%20turno"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-linear-to-r from-gold to-gold-light text-dark text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Reservar turno
          </a>

          <button
            id="nav-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } bg-dark/98 backdrop-blur-md border-b border-gold/10`}
      >
        <ul className="flex flex-col items-center px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium tracking-widest uppercase text-cream/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5493535653313?text=Hola!%20quisiera%20reservar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-linear-to-r from-gold to-gold-light text-dark text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Reservar turno
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
