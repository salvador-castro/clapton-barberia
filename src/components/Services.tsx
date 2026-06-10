const services = [
  {
    id: 'corte',
    icon: '✂️',
    name: 'Corte de Cabello',
    description: 'En Clapton cada corte tiene identidad propia. Combinamos técnica, estilo y atención a los detalles para crear un look que refleje tu personalidad. Desde cortes clásicos hasta las últimas tendencias para cada edad, siempre con la calidad y la experiencia que nos caracteriza.',
  },
  {
    id: 'barba',
    icon: '🪒',
    name: 'Combo Corte + Barba',
    description: 'El servicio más elegido de Clapton. Un trabajo completo donde combinamos corte de cabello y diseño de barba para lograr una imagen equilibrada, prolija y con personalidad. Atención a cada detalle para que salgas con tu mejor versión.',
  },
  {
    id: 'combo',
    icon: '💈',
    name: 'Corte VIP (corte cada 10 días o menos)',
    description: 'Pensado para quienes hacen del cuidado personal un hábito. Un servicio exclusivo para clientes que nos visitan semanalmente o cada 10 días, con un valor preferencial y la misma dedicación de siempre. Porque mantener el estilo también tiene sus beneficios.',
  },
  {
    id: 'fade',
    icon: '🧔🏻‍♂️',
    name: 'Arreglo de Barba',
    description: 'Una barba bien cuidada marca la diferencia. Perfilamos, definimos y damos forma respetando tu estilo y las características de tu rostro, logrando un resultado prolijo, equilibrado y con personalidad.',
  },
  {
    id: 'cejas',
    icon: '👁️',
    name: 'Solo Barba o Pelada',
    description: 'Para quienes buscan mantener su imagen impecable sin necesidad de un corte de cabello. Ya sea un perfilado de barba o el mantenimiento de la pelada, trabajamos cada detalle para lograr un acabado prolijo, limpio y a tu medida.',
  },
  {
    id: 'cejas',
    icon: '👁️',
    name: 'Productos',
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
