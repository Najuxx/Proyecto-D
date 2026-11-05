export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sofía Ramos',
      role: 'Product Designer → Builder',
      avatar: '👩‍💻',
      text: 'Antes necesitaba semanas para ver mis diseños de Figma convertidos en código real. Con Vibe Coding y React 19 pude construir mi propio SaaS y validar mis ideas sin intermediarios en solo 12 días.',
      badge: 'Lanzó su SaaS',
    },
    {
      name: 'Lucas Morales',
      role: 'Senior Frontend Developer',
      avatar: '🧑‍💻',
      text: 'Era escéptico con el término "Vibe Coding", pero el curso enseña a usarlo con rigor técnico y buenas prácticas. Dejé de perder horas en boilerplate y ahora dirijo agentes con prompts quirúrgicos. Mi velocidad es 3x.',
      badge: '3x Velocidad',
    },
    {
      name: 'Mariana Castro',
      role: 'Emprendedora Tech',
      avatar: '🚀',
      text: 'El módulo de debugging y refactorización asistida por IA es oro puro. Aprendí a no frustrarme cuando hay errores y a guiar al modelo para resolverlos en segundos. Es el mejor curso que he tomado este año.',
      badge: 'Alumna Destacada',
    },
  ]

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">TESTIMONIOS REALES</span>
          <h2 className="section-title">
            Lo que dicen quienes ya están en el <span className="gradient-text">Flow</span>
          </h2>
          <p className="section-subtitle">
            Desarrolladores, diseñadores y creadores que transformaron su forma de construir productos digitales.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass-card">
              <div className="testimonial-top">
                <div className="avatar-circle">{t.avatar}</div>
                <div>
                  <h4 className="user-name">{t.name}</h4>
                  <span className="user-role">{t.role}</span>
                </div>
                <span className="test-badge">{t.badge}</span>
              </div>
              <p className="testimonial-quote">"{t.text}"</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

