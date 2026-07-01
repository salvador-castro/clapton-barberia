export default function AboutUs() {
  return (
    <section id="nosotros" className="w-full py-24 bg-dark">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-3">
            Quiénes somos
          </p>
          <h2
            className="font-bebas text-5xl md:text-7xl text-cream mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Sobre Nosotros
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="space-y-6 text-cream/70 text-base md:text-lg leading-relaxed">
          <p>
            Desde 2014, <span className="text-gold font-semibold">Clapton BarberShop</span> se ha
            convertido en un referente de estilo y barbería masculina. Con más de una década de
            experiencia, construimos un espacio único donde la calidad, la atención personalizada y
            el espíritu del rock and roll se combinan para brindar una experiencia diferente.
          </p>

          <p>
            Contamos con un equipo de{' '}
            <span className="text-gold font-semibold">6 barberos profesionales</span>, una
            recepcionista dedicada a que cada visita sea cómoda y organizada, y servicios{' '}
            <span className="text-gold font-semibold">PREMIUM</span> diseñados para quienes valoran
            los detalles. También está incluida la posibilidad de disfrutar un café o una gaseosa de
            cortesía en un ambiente relajado y con identidad propia.
          </p>

          <p>
            Además, contamos con{' '}
            <span className="text-gold font-semibold">Gentleman!</span>, nuestro espacio de indumentaria
            masculina, pensado para que puedas completar tu estilo en un solo lugar.
          </p>

          <p>
            Más que un corte de cabello, ofrecemos una experiencia. Desde 2014, seguimos creciendo
            junto a nuestros clientes, manteniendo la misma pasión por el oficio y el compromiso con
            la excelencia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '+10', label: 'Años de experiencia' },
            { value: '6', label: 'Barberos profesionales' },
            { value: 'PREMIUM', label: 'Servicios con café' },
            { value: 'Gentleman', label: 'Indumentaria masculina' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-gold/20 rounded-2xl p-5 hover:border-gold/40 transition-colors duration-300"
            >
              <p
                className="font-bebas text-3xl md:text-4xl text-gold mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-cream/50 text-xs tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
