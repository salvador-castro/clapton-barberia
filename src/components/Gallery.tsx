import { useRef } from 'react'

const images = [
  { src: '/cortes/IMG_0140.jpeg', alt: 'Corte clásico con degradé' },
  { src: '/cortes/IMG_0182.jpeg', alt: 'Trabajo de barba' },
  { src: '/cortes/IMG_1443.jpeg', alt: 'Corte moderno con textura' },
  { src: '/cortes/IMG_2866.jpeg', alt: 'Fade profesional' },
  { src: '/cortes/IMG_4913.jpeg', alt: 'Diseño de barba' },
  { src: '/cortes/IMG_8046.jpeg', alt: 'Corte clásico' },
  { src: '/otros/IMG_0074.jpeg', alt: 'Ambiente de la barbería' },
  { src: '/otros/IMG_2142.jpeg', alt: 'Trabajo terminado' },
  { src: '/otros/IMG_9589.jpeg', alt: 'Detalle del corte' },
]

export default function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null)

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
          className="carousel-scroller flex gap-4 px-6 md:px-[max(1.5rem,calc(50vw-36rem))]"
          style={{ paddingRight: '1.5rem' }}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="carousel-slide w-72 md:w-96 h-80 md:h-112 rounded-2xl overflow-hidden shrink-0 border border-gold/10 hover:border-gold/30 transition-all duration-400 group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading={i === 0 ? undefined : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
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

      {/* Tarifa de servicios */}
      <div className="w-full max-w-xl mx-auto mt-16 px-6">
        <div className="glass-card rounded-2xl border border-gold/20 shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-gold to-gold-light px-8 py-5 text-center">
            <p className="text-dark text-xs font-bold tracking-[0.3em] uppercase">
              Tarifa de Servicios
            </p>
            <p className="text-dark/70 text-xs font-semibold tracking-widest mt-0.5">
              Junio 2026
            </p>
          </div>
          {/* Items */}
          <div className="divide-y divide-gold/10">
            {[
              { name: 'Corte de caballero & niño', price: '$23.000' },
              { name: 'Corte & barba', price: '$25.000' },
              { name: 'Corte cada 10 días o menos', price: '$20.000' },
              { name: 'Pelada y barba', price: '$23.000' },
              { name: 'Solo barba o pelada', price: '$15.000' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between px-8 py-4 hover:bg-gold/5 transition-colors duration-200">
                <span className="text-cream/80 text-sm">{item.name}</span>
                <span className="text-gold font-bold text-sm tabular-nums">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
