import { useRef, useState } from 'react'
import { Expand, X } from 'lucide-react'

const corteModules = import.meta.glob('/public/cortes/*.{jpeg,jpg,png,webp}')
const otrosModules = import.meta.glob('/public/otros/*.{jpeg,jpg,png,webp}')

const toImages = (modules: Record<string, unknown>) =>
  Object.keys(modules)
    .sort()
    .map((path) => ({
      src: path.replace('/public', ''),
      alt: 'Trabajo en Clapton Barbería',
    }))

const images = [...toImages(corteModules), ...toImages(otrosModules)]

export default function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollerRef.current
    if (!el) return
    const amount = el.clientWidth * 0.7
    if (dir === 'right') {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: amount, behavior: 'smooth' })
      }
    } else {
      if (el.scrollLeft <= 0) {
        el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: -amount, behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="galeria" className="w-full py-24 bg-dark overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-3">
          Nuestro trabajo
        </p>
        <h2
          className="font-bebas text-5xl md:text-7xl text-cream mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Galería
        </h2>
        <div className="section-divider mx-auto" />
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollerRef}
          className="carousel-scroller flex gap-4 px-6"
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="carousel-slide w-72 md:w-96 h-80 md:h-112 rounded-2xl overflow-hidden shrink-0 border border-gold/10 hover:border-gold/30 transition-all duration-400 group relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading={i === 0 ? undefined : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
              <button
                onClick={() => setLightbox(img)}
                aria-label="Ampliar imagen"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-dark/70 border border-gold/30 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-dark"
              >
                <Expand className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-3 w-full max-w-6xl mx-auto px-6 mt-6">
          <button
            id="gallery-prev-btn"
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="gallery-next-btn"
            onClick={() => scroll('right')}
            aria-label="Siguiente"
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-dark/80 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain border border-gold/20 shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}
