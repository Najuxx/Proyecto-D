import { useState } from 'react'

export default function Hero({ onOpenEnrollModal }) {
  const [demoMetric, setDemoMetric] = useState(14820)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyPrompt = () => {
    navigator.clipboard?.writeText(
      'Crea un dashboard financiero en React 19 con métricas de MRR, gráfica de barras interactiva y estética dark neon.'
    )
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section className="hero-section">
      <div className="hero-glow-bg"></div>
      
      <div className="container hero-content">
        <div className="hero-badge-wrap">
          <span className="badge">
            <span className="badge-pulse"></span>
            NUEVA ERA DEL DESARROLLO • REACT 19 + IA
          </span>
        </div>

        <h1 className="hero-title">
          Programa a la velocidad <br />
          de tu <span className="gradient-text">imaginación</span> con <br />
          <span className="hero-highlight">Vibe Coding en React</span>
        </h1>

        <p className="hero-description">
          Olvídate de la fatiga sintáctica y el boilerplate infinito. Con el paradigma <strong>Vibe Coding</strong>,
          tú tomas el rol de arquitecto y director creativo, mientras los agentes de IA generan componentes React listos para producción en segundos.
        </p>

        <div className="hero-cta-group">
          <button
            type="button"
            className="btn-glow hero-btn-main"
            onClick={onOpenEnrollModal}
          >
            <span>Unirme al Curso Gratis</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>

          <a href="#simulador" className="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Ver Simulador en Vivo</span>
          </a>
        </div>

        {/* Interactive Mockup Window */}
        <div className="hero-ide-window glass-card">
          <div className="ide-header">
            <div className="ide-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="ide-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>VibeStudio — App.jsx</span>
            </div>
            <div className="ide-status">
              <span className="status-indicator"></span>
              <span>AI Agent: Conectado</span>
            </div>
          </div>

          <div className="ide-body">
            {/* Prompt bar */}
            <div className="ide-prompt-box">
              <div className="prompt-label">
                <span className="ai-sparkle">✨ Prompt</span>
                <span className="prompt-time">Tiempo de generación: 1.4s</span>
              </div>
              <div className="prompt-text">
                "Genera un componente React 19 de tarjeta financiera con MRR en tiempo real, incremento interactivo y estilo dark glass."
              </div>
              <button
                type="button"
                className="btn-copy-prompt"
                onClick={handleCopyPrompt}
              >
                {isCopied ? '¡Copiado!' : 'Copiar prompt'}
              </button>
            </div>

            {/* Generated Result Preview */}
            <div className="ide-preview-area">
              <div className="preview-mini-card">
                <div className="mini-card-header">
                  <div>
                    <span className="mini-card-sub">Ingreso Mensual Recurrente</span>
                    <h3 className="mini-card-value">${demoMetric.toLocaleString()} USD</h3>
                  </div>
                  <span className="growth-badge">+28.4% ↗</span>
                </div>
                
                <div className="mini-chart-bars">
                  <div className="bar" style={{ height: '40%' }}></div>
                  <div className="bar" style={{ height: '65%' }}></div>
                  <div className="bar" style={{ height: '50%' }}></div>
                  <div className="bar" style={{ height: '85%' }}></div>
                  <div className="bar bar-active" style={{ height: '100%' }}></div>
                </div>

                <div className="mini-card-actions">
                  <button
                    type="button"
                    className="btn-interact"
                    onClick={() => setDemoMetric((m) => m + 350)}
                  >
                    Simular nuevo cliente (+$350)
                  </button>
                  <span className="interactive-hint">👈 ¡Haz clic para interactuar!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <span className="stat-number gradient-text">10x</span>
            <span className="stat-label">Velocidad de creación de UI</span>
          </div>
          <div className="stat-card">
            <span className="stat-number gradient-cyan-text">100%</span>
            <span className="stat-label">Enfoque en Producto y Arquitectura</span>
          </div>
          <div className="stat-card">
            <span className="stat-number gradient-text">React 19</span>
            <span className="stat-label">Actions, use(), Compiler & Vite</span>
          </div>
          <div className="stat-card">
            <span className="stat-number gradient-cyan-text">+1,850</span>
            <span className="stat-label">Desarrolladores transformados</span>
          </div>
        </div>
      </div>
    </section>
  )
}

