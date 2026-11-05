import { useState } from 'react'

export default function RoiCalculator({ onOpenEnrollModal }) {
  const [weeklyHours, setWeeklyHours] = useState(20)
  const [experienceLevel, setExperienceLevel] = useState('mid') // 'junior', 'mid', 'senior'

  // Estimate: Vibe Coding speeds up coding & boilerplate tasks by ~65%
  const monthlyHoursSaved = Math.round(weeklyHours * 4.3 * 0.65)
  const yearlyHoursSaved = Math.round(weeklyHours * 52 * 0.65)
  const extraProjectsPerYear = Math.max(1, Math.round(yearlyHoursSaved / 30))

  return (
    <section id="calculadora" className="section calculator-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">CALCULADORA DE IMPACTO</span>
          <h2 className="section-title">
            ¿Cuánto tiempo ganarás con <span className="gradient-text">Vibe Coding</span>?
          </h2>
          <p className="section-subtitle">
            Descubre cuántas horas de trabajo repetitivo puedes eliminar al mes cambiando la forma en que construyes aplicaciones React.
          </p>
        </div>

        <div className="calculator-box glass-card">
          <div className="calc-inputs-col">
            <div className="calc-input-group">
              <div className="slider-label-row">
                <label htmlFor="weeklyHours">Horas dedicadas a programar por semana:</label>
                <span className="slider-value-display">{weeklyHours} horas/semana</span>
              </div>
              <input
                id="weeklyHours"
                type="range"
                min="5"
                max="50"
                step="1"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="calc-slider"
              />
              <div className="slider-markers">
                <span>5h (Part-time)</span>
                <span>20h (Promedio)</span>
                <span>50h (Full builder)</span>
              </div>
            </div>

            <div className="calc-input-group">
              <label>Tu rol o nivel actual:</label>
              <div className="role-selector">
                {[
                  { id: 'junior', label: 'Junior / Principiante' },
                  { id: 'mid', label: 'Desarrollador Mid' },
                  { id: 'senior', label: 'Senior / Tech Lead' },
                  { id: 'founder', label: 'Founder / Emprendedor' },
                ].map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    className={`role-btn ${experienceLevel === role.id ? 'active' : ''}`}
                    onClick={() => setExperienceLevel(role.id)}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-tip">
              <span className="tip-icon">💡</span>
              <p>
                Al delegar el 65% de las tareas operativas a agentes de IA, pasas de picar código repetitivo a validar productos y crear valor real.
              </p>
            </div>
          </div>

          <div className="calc-results-col">
            <h3 className="results-title">Tu Retorno de Inversión</h3>

            <div className="result-stat-card">
              <span className="result-metric gradient-text">+{monthlyHoursSaved} hrs</span>
              <span className="result-label">Horas liberadas al mes para ti</span>
            </div>

            <div className="result-stat-card">
              <span className="result-metric gradient-cyan-text">+{yearlyHoursSaved} hrs</span>
              <span className="result-label">Horas ganadas al año (~{Math.round(yearlyHoursSaved / 8)} días laborables)</span>
            </div>

            <div className="result-stat-card">
              <span className="result-metric gradient-text">+{extraProjectsPerYear}</span>
              <span className="result-label">Nuevos proyectos o MVPs que puedes lanzar al año</span>
            </div>

            <button
              type="button"
              className="btn-glow calc-cta"
              onClick={onOpenEnrollModal}
            >
              <span>Aprender a multiplicar mi velocidad</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

