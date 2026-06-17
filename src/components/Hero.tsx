export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/otros/IMG_5767.webp"
          alt="Clapton Barbershop interior"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-dark/70 via-dark/50 to-dark" />
        {/* Gold vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo circular */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gold/40 p-1 shadow-[0_0_40px_rgba(201,168,76,0.2)]">
            <img
              src="/logos/logoCircular.webp"
              alt="Logo Clapton"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        <p
          className="text-gold text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Villa María · Córdoba
        </p>

        <h1
          className="font-bebas text-7xl md:text-[10rem] leading-none tracking-wider mb-4 animate-fade-in-up text-gold-gradient"
          style={{ fontFamily: "'Bebas Neue', sans-serif", animationDelay: '0.2s' }}
        >
          CLAPTON
          <span className="sr-only"> Barbershop - Barbería en Villa María, Córdoba</span>
        </h1>

        <p
          className="font-bebas text-2xl md:text-4xl tracking-[0.5em] text-cream/60 mb-8 animate-fade-in-up"
          style={{ fontFamily: "'Bebas Neue', sans-serif", animationDelay: '0.35s' }}
        >
          BARBERSHOP
        </p>

        <p
          className="text-cream/60 text-base md:text-lg max-w-md mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          Precisión, estilo y tradición en cada corte.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="https://wa.me/5493535653313?text=Hola!%20quisiera%20reservar%20un%20turno"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-reservar"
            className="bg-linear-to-r from-gold to-gold-light text-dark font-semibold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_rgba(201,168,76,0.3)]"
          >
            Reservar turno
          </a>
          <a
            href="#equipo"
            id="hero-cta-barberos"
            className="border border-gold/40 text-cream font-medium px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Seleccionar barbero
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gold/50 text-xs tracking-widest uppercase">BAJAR</span>
        <svg className="w-4 h-4 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
