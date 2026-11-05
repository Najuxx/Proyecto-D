import { useState } from 'react'

export default function EnrollModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [level, setLevel] = useState('Intermedio')
  const [goal, setGoal] = useState('Crear mi propio producto / SaaS')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleResetAndClose = () => {
    setIsSubmitted(false)
    setName('')
    setEmail('')
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div
        className="modal-card glass-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleResetAndClose}
          aria-label="Cerrar ventana"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <div>
            <div className="modal-header">
              <span className="badge">INSCRIPCIÓN ABIERTA</span>
              <h3 className="modal-title">
                Comienza tu viaje en <span className="gradient-text">Vibe Coding</span>
              </h3>
              <p className="modal-sub">
                Asegura tu cupo en la próxima cohorte con acceso a la comunidad privada, plantillas de React 19 y guías de prompts.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="studentName">Nombre completo</label>
                <input
                  id="studentName"
                  type="text"
                  required
                  placeholder="Tu nombre o alias"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="studentEmail">Correo electrónico</label>
                <input
                  id="studentEmail"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div className="form-group">
                <label>Tu nivel actual en React / Programación</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="modal-select"
                >
                  <option value="Principiante">Principiante (sé algo básico de HTML/JS)</option>
                  <option value="Intermedio">Intermedio (uso React pero quiero velocidad con IA)</option>
                  <option value="Avanzado">Avanzado / Senior (quiero optimizar mi flujo al máximo)</option>
                  <option value="No-coder">Diseñador / Founder sin código previo</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tu objetivo principal</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="modal-select"
                >
                  <option value="Crear mi propio producto / SaaS">Crear mi propio producto o SaaS</option>
                  <option value="Multiplicar mi velocidad en mi trabajo actual">Multiplicar mi velocidad en mi trabajo actual</option>
                  <option value="Aprender React 19 moderno con IA">Aprender React 19 moderno con IA</option>
                  <option value="Validar ideas de negocio rápido">Validar ideas de negocio rápido</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-glow modal-submit-btn"
              >
                {loading ? 'Preparando tu acceso...' : '🚀 Confirmar Inscripción Inmediata'}
              </button>

              <span className="modal-disclaimer">
                🔒 Sin spam. Acceso 100% gratuito a la masterclass de bienvenida y recursos iniciales.
              </span>
            </form>
          </div>
        ) : (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <span className="success-icon">🎉</span>
            </div>
            <h3 className="success-title">¡Bienvenido a la revolución Vibe!</h3>
            <p className="success-text">
              Hola <strong>{name}</strong>, hemos registrado tu cupo exitosamente. Te enviamos los detalles de acceso y el paquete de inicio con prompts de React 19 a <strong>{email}</strong>.
            </p>
            <div className="success-steps-box">
              <h4>Próximos pasos inmediatos:</h4>
              <ol>
                <li>Revisa tu bandeja de entrada o spam.</li>
                <li>Únete a nuestro canal exclusivo de Discord para builders.</li>
                <li>Instala los plugins recomendados en el correo antes del inicio.</li>
              </ol>
            </div>
            <button
              type="button"
              className="btn-glow modal-submit-btn"
              onClick={handleResetAndClose}
            >
              Entendido, ¡vamos a codear!
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

