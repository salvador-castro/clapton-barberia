const services = [
  {
    id: 'corte',
    icon: '✂️',
    name: 'Corte de Cabello',
    description: 'Desde el clásico hasta el más moderno. Cada corte adaptado a tu estilo y tipo de rostro.',
  },
  {
    id: 'barba',
    icon: '🪒',
    name: 'Arreglo de Barba',
    description: 'Perfilado, delineado y acabado perfecto. Tu barba, definida con precisión milimétrica.',
  },
  {
    id: 'combo',
    icon: '💈',
    name: 'Combo Corte + Barba',
    description: 'El combo completo para salir renovado. Corte y arreglo de barba en una sola sesión.',
  },
  {
    id: 'fade',
    icon: '🎨',
    name: 'Fade / Degradé',
    description: 'Degradés perfectos a máquina. Skin fade, mid fade, high fade — lo que quieras.',
  },
  {
    id: 'cejas',
    icon: '👁️',
    name: 'Diseño de Cejas',
    description: 'Depilado y diseño de cejas para un look completo y prolijo.',
  },
  {
    id: 'keratina',
    icon: '✨',
    name: 'Tratamientos',
    description: 'Hidratación, keratina y tratamientos especiales para el cuidado del cabello y barba.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="w-full pt-32 pb-24 bg-dark-2">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-semibold tracking-[0.35em] uppercase mb-3">
            Lo que hacemos
          </p>
          <h2
            className="font-bebas text-5xl md:text-7xl text-cream mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Servicios
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              id={`service-${s.id}`}
              className="glass-card service-card rounded-2xl p-10 border border-gold/10 cursor-default text-center flex flex-col items-center"
            >
              <span className="text-5xl mb-5 block">{s.icon}</span>
              <h3
                className="font-bebas text-3xl text-gold mb-3 tracking-wider"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {s.name}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
