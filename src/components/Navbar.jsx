import { useState } from 'react'

export default function Navbar({ onOpenEnrollModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: '¿Qué es?', href: '#que-es' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Temario', href: '#temario' },
    { label: 'Herramientas', href: '#herramientas' },
    { label: 'Calculadora', href: '#calculadora' },
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="navbar-wrapper">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="url(#logo-grad)" stroke="url(#logo-grad)" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-title">
            Vibe<span className="gradient-text">Coding</span>
          </span>
          <span className="logo-badge">React 19</span>
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="btn-glow"
            onClick={onOpenEnrollModal}
          >
            <span>Inscribirme Gratis</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Abrir menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn-glow mobile-btn"
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenEnrollModal()
            }}
          >
            <span>Inscribirme al Curso</span>
          </button>
        </div>
      )}
    </header>
  )
}

