export default function Comparison() {
  const comparisonRows = [
    {
      feature: 'Punto de partida',
      traditional: 'Escribir manualmente archivos, configs, imports y boilerplate durante horas.',
      vibe: 'Describir la intención y requerimientos funcionales en lenguaje natural guiado.',
    },
    {
      feature: 'Construcción de componentes',
      traditional: 'Recordar sintaxis exacta de hooks, closures, sintaxis JSX y reglas CSS.',
      vibe: 'El agente genera componentes modulares y listos con estilos modernos en segundos.',
    },
    {
      feature: 'Resolución de bugs y errores',
      traditional: 'Buscar en foros, revisar stack traces criptográficos y perder horas.',
      vibe: 'Copiar el error al agente para diagnóstico inmediato y solución automatizada.',
    },
    {
      feature: 'Tiempo hasta el MVP funcional',
      traditional: 'Semanas o meses para una primera versión interactiva.',
      vibe: 'Tardes o minutos para validar ideas reales en producción.',
    },
    {
      feature: 'Estado mental del desarrollador',
      traditional: 'Frustración por detalles técnicos menores y parálisis por análisis.',
      vibe: 'Estado de flujo constante ("Flow State"), creatividad y diversión al construir.',
    },
  ]

  const pillars = [
    {
      icon: '🎯',
      title: 'El Rol de Director',
      desc: 'Dejas de escribir código rutinario para convertirte en el líder que define experiencia, estética, arquitectura y reglas de negocio.',
    },
    {
      icon: '⚡',
      title: 'Contexto de Alta Precisión',
      desc: 'Aprende a estructurar prompts, system rules y especificaciones que eliminan alucinaciones y producen código de calidad senior.',
    },
    {
      icon: '🔄',
      title: 'Iteración en Tiempo Real',
      desc: 'Combinando Vite 6+ con HMR instantáneo y agentes de IA, ves tus ideas cobrar vida y evolucionar en bucles de menos de 5 segundos.',
    },
  ]

  return (
    <section id="que-es" className="section comparison-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">EL NUEVO PARADIGMA</span>
          <h2 className="section-title">
            ¿Por qué <span className="gradient-text">Vibe Coding</span> lo cambia todo?
          </h2>
          <p className="section-subtitle">
            Término acuñado en la era de los LLMs: programar guiado por intuición, visión y retroalimentación visual, delegando la carga sintáctica a la inteligencia artificial.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, i) => (
            <div key={i} className="pillar-card glass-card">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Tab switch */}
        <div className="comparison-table-wrapper glass-card">
          <div className="table-header-custom">
            <h3 className="table-heading">Comparativa Cara a Cara</h3>
            <span className="table-subheading">Desarrollo Tradicional vs. Flujo Vibe Coding con React 19</span>
          </div>

          <div className="comparison-table">
            <div className="comparison-row comparison-head-row">
              <div className="col-aspect">Aspecto</div>
              <div className="col-trad">Programación Tradicional ❌</div>
              <div className="col-vibe">Vibe Coding con React 19 🚀</div>
            </div>

            {comparisonRows.map((row, index) => (
              <div key={index} className="comparison-row">
                <div className="col-aspect">
                  <strong>{row.feature}</strong>
                </div>
                <div className="col-trad">
                  <span className="mob-label">Tradicional: </span>
                  {row.traditional}
                </div>
                <div className="col-vibe">
                  <span className="mob-label">Vibe Coding: </span>
                  <div className="vibe-text-highlight">
                    <span className="check-icon">✓</span>
                    {row.vibe}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
