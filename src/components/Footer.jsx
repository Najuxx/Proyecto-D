const currentYear = new Date().getFullYear()

export default function Footer({ onOpenEnrollModal }) {
  return (
    <footer className="footer-wrapper">
      {/* Pre-footer CTA Box */}
      <div className="container">
        <div className="pre-footer-cta glass-card">
          <div className="cta-glow-decor"></div>
          <span className="badge">¿LISTO PARA ENTRAR EN EL FLOW?</span>
          <h2 className="cta-headline">
            Deja atrás la frustración sintáctica. <br />
            Construye software en <span className="gradient-text">modo Vibe</span>.
          </h2>
          <p className="cta-sub">
            Únete a la nueva generación de desarrolladores y builders que crean productos completos en horas, no meses.
          </p>
          <button
            type="button"
            className="btn-glow cta-action-btn"
            onClick={onOpenEnrollModal}
          >
            <span>Reservar Mi Lugar en el Curso</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-cols-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="url(#logo-grad-f)" stroke="url(#logo-grad-f)" />
                  <defs>
                    <linearGradient id="logo-grad-f" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="logo-title">
                Vibe<span className="gradient-text">Coding</span>
              </span>
            </div>
            <p className="footer-desc">
              El curso definitivo para dominar React 19 y el desarrollo acelerado con Inteligencia Artificial.
            </p>
            <div className="footer-social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6h0a14.5 14.5 0 0 0-4-1.2 12.6 12.6 0 0 0-.5 1.2 14.2 14.2 0 0 0-3 0 12.6 12.6 0 0 0-.5-1.2A14.5 14.5 0 0 0 6 6a15.4 15.4 0 0 0-3.3 9.4A15 15 0 0 0 7 18.5a11 11 0 0 0 1-1.6 9.8 9.8 0 0 1-1.6-.8l.3-.3a11.9 11.9 0 0 0 10.6 0l.3.3a9.8 9.8 0 0 1-1.6.8 11 11 0 0 0 1 1.6 15 15 0 0 0 4.3-3.1A15.4 15.4 0 0 0 18 6z"></path>
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title">Navegación</h4>
            <ul>
              <li><a href="#que-es">¿Qué es Vibe Coding?</a></li>
              <li><a href="#simulador">Simulador Interactivo</a></li>
              <li><a href="#temario">Plan de Estudios</a></li>
              <li><a href="#herramientas">Stack y Herramientas</a></li>
              <li><a href="#calculadora">Calculadora de ROI</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title">Recursos Gratuitos</h4>
            <ul>
              <li><a href="#simulador">Cheat Sheet de Prompts React 19</a></li>
              <li><a href="#simulador">Plantilla Base Vite + Tailwind</a></li>
              <li><a href="#simulador">Configuración .cursorrules recomendada</a></li>
              <li><a href="#simulador">Guía de Migración React 18 a 19</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title">Comunidad</h4>
            <ul>
              <li><a href="https://discord.com" target="_blank" rel="noreferrer">Canal de Discord</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">Repositorio de Ejemplos</a></li>
              <li><a href="#temario">Sesiones de Vibe Coding en Vivo</a></li>
              <li><a href="#temario">Hackathons de Builders</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {currentYear} Curso Vibe Coding con React. Desarrollado con React 19 & Vite.</p>
          <div className="footer-extra-links">
            <span>Diseñado para builders de la nueva era</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
