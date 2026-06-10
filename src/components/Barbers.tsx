const barbers = [
  {
    id: 'leo-merindol',
    name: 'Leo Merindol',
    role: 'Barbero & Colorista',
    photo: '/equipo/leoMerindol.jpeg',
    description: 'Leandro es el fundador y alma de Clapton. Con más de 18 años de experiencia en el rubro, ha construido una barbería con identidad propia, cuidando cada detalle para que cada visita se convierta en una experiencia. Su pasión por el oficio y su visión fueron clave para darle a Clapton la personalidad que la distingue hoy.',
    schedule: 'Lun–Vie: 9 a 20 h · Sáb: 10 a 16 h',
    wa: 'Leo+Merindol',
  },
  {
    id: 'agus-sanchez',
    name: 'Agus Sánchez',
    role: 'Barbero Senior',
    photo: '/equipo/agusSanchez.jpeg',
    description: 'Agustín es parte fundamental de Clapton BarberShop con más de 6 años de experiencia. Con su compromiso y una gran dedicación por su trabajo, se destaca por brindar atención personalizada y lograr que cada cliente se sienta cómodo y bien asesorado. Su profesionalismo y pasión por la barbería lo han convertido en una referencia dentro de nuestro equipo.',
    schedule: 'Lun–Vie: 9 a 20 h · Sáb: 10 a 16 h',
    wa: 'Agus+S%C3%A1nchez',
  },
  {
    id: 'juan-fernandez',
    name: 'Juan Fernández',
    role: 'Barbero Especialista',
    photo: '/equipo/juanFernandez.jpeg',
    description: 'Juan forma parte del equipo desde hace más de 4 años. Se destaca por su compromiso, atención al detalle y trato cercano con cada cliente. Su experiencia y pasión por la barbería hacen que cada servicio sea una experiencia de calidad, siempre buscando que cada persona se vaya conforme y con su mejor versión.',
    schedule: 'Lun–Vie: 9 a 20 h · Sáb: 10 a 16 h',
    wa: 'Juan+Fern%C3%A1ndez',
  },
  {
    id: 'gena-rainero',
    name: 'Gena Rainero',
    role: 'Barbero & Diseñador',
    photo: '/equipo/genaRainero.jpeg',
    description: 'Genaro forma parte de Clapton desde hace más de 3 años. Con su buena onda, amabilidad y trato cordial, se ganó rápidamente el cariño y la confianza de los clientes. Es un profesional atento, agradable y cercano, capaz de hacer sentir cómodo a cualquier persona que pase por el sillón.',
    schedule: 'Lun–Vie: 9 a 20 h · Sáb: 10 a 16 h',
    wa: 'Gena+Rainero',
  },
  {
    id: 'maxi-rubiolo',
    name: 'Maxi Rubiolo',
    role: 'Barbero Senior',
    photo: '/equipo/maxiRubiolo.jpeg',
    description: 'Maximiliano forma parte de Clapton desde hace más de 2 años. Es el más joven del equipo y se destaca por su buena onda, su personalidad divertida y su pasión por los cortes modernos. Especialista en fades prolijos y precisos, siempre está atento a las últimas tendencias, lo que lo convierte en una gran opción para quienes buscan un estilo actual y fresco.',
    schedule: 'Lun–Vie: 9 a 20 h · Sáb: 10 a 16 h',
    wa: 'Maxi+Rubiolo',
  },
]

const recepcionista = [
  {
    id: 'mayra-burgos',
    name: 'Mayra Burgos',
    role: 'Recepcionista',
    photo: '/equipo/mayraBurgos.jpeg',
    description: 'Mayra es la primera sonrisa que te recibe al llegar. Siempre atenta, cordial y predispuesta, se encarga de que cada cliente se sienta cómodo desde el primer momento. Su calidez y buena energía hacen que la experiencia en Clapton BarberShop y Gentleman sea aún más especial, brindando una atención cercana y personalizada tanto en la barbería como en el local de indumentaria.',
    schedule: 'Lun–Vie: 9 a 20 h · Sáb: 10 a 16 h',
  },
]

export default function Barbers() {
  return (
    <section id="equipo" className="w-full pt-32 pb-24 bg-dark">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-3">
            Nuestro equipo
          </p>
          <h2
            className="font-bebas text-5xl md:text-7xl text-cream mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Los Barberos
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Cards — flex-wrap justify-center con anchuras responsivas */}
        <div className="flex flex-wrap justify-center gap-6">
          {barbers.map((b) => (
            <div
              key={b.id}
              id={`barber-${b.id}`}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] glass-card rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:-translate-y-2 transition-all duration-400 group flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={b.photo}
                  alt={b.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent" />
              </div>

              {/* Content — centered text */}
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <div className="mb-3">
                  <h3
                    className="font-bebas text-2xl text-cream tracking-wider"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {b.name}
                  </h3>
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase">
                    {b.role}
                  </p>
                </div>

                <p className="text-cream/55 text-sm leading-relaxed mb-4 flex-1 text-justify">
                  {b.description}
                </p>

                {/* Schedule */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-cream/45 text-xs">{b.schedule}</span>
                </div>

                {/* Book button */}
                <a
                  href={`https://wa.me/5493535653313?text=Hola%20Clapton!%20Quisiera%20sacar%20un%20turno%20con%20${b.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`book-${b.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-gold to-gold-light text-dark font-semibold text-sm tracking-widest uppercase py-3 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Reservar turno
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mt-20 mb-16">
          <h2
            className="font-bebas text-5xl md:text-7xl text-cream mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            NUESTRA RECEPCIONISTA
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Cards — flex-wrap justify-center con anchuras responsivas */}
        <div className="flex flex-wrap justify-center gap-6">
          {recepcionista.map((b) => (
            <div
              key={b.id}
              id={`barber-${b.id}`}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] glass-card rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:-translate-y-2 transition-all duration-400 group flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={b.photo}
                  alt={b.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent" />
              </div>

              {/* Content — centered text */}
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <div className="mb-3">
                  <h3
                    className="font-bebas text-2xl text-cream tracking-wider"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {b.name}
                  </h3>
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase">
                    {b.role}
                  </p>
                </div>

                <p className="text-cream/55 text-sm leading-relaxed mb-4 flex-1 text-justify">
                  {b.description}
                </p>

                {/* Schedule */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-cream/45 text-xs">{b.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
