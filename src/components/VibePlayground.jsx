import { useState } from 'react'

export default function VibePlayground() {
  const [activePreset, setActivePreset] = useState(0)
  const [viewMode, setViewMode] = useState('preview') // 'preview' or 'code'
  const [isGenerating, setIsGenerating] = useState(false)

  // Internal state for interactive widgets
  // Preset 0: Analytics
  const [analyticsPeriod, setAnalyticsPeriod] = useState('30d')
  const [exported, setExported] = useState(false)

  // Preset 1: Music player
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(75)
  const [currentTrack, setCurrentTrack] = useState(0)

  // Preset 2: Pricing
  const [billingCycle, setBillingCycle] = useState('anual')
  const [selectedPlan, setSelectedPlan] = useState('pro')

  // Preset 3: Tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Definir reglas de diseño en .cursorrules', done: true, tag: 'Setup' },
    { id: 2, text: 'Construir landing con React 19 + Tailwind', done: true, tag: 'Vibe' },
    { id: 3, text: 'Integrar autenticación y pagos con Stripe', done: false, tag: 'Backend' },
    { id: 4, text: 'Desplegar a producción en Vercel', done: false, tag: 'Deploy' },
  ])
  const [newTaskInput, setNewTaskInput] = useState('')

  const presets = [
    {
      title: 'Panel Analítico SaaS',
      icon: '📊',
      prompt: 'Crea un dashboard financiero para SaaS con filtro de período, gráfica de actividad y exportación con feedback visual.',
      code: `// Generado por Vibe Coding Agent en 1.2s
import { useState } from 'react';

export function AnalyticsCard() {
  const [period, setPeriod] = useState('30d');
  const [exported, setExported] = useState(false);

  return (
    <div className="card-saas">
      <div className="header">
        <h4>Resumen de Ingresos</h4>
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="7d">Últimos 7 días</option>
          <option value="30d">Últimos 30 días</option>
        </select>
      </div>
      <div className="metric">$34,820 USD</div>
      <button onClick={() => setExported(true)}>Exportar Reporte</button>
    </div>
  );
}`
    },
    {
      title: 'Reproductor Lofi Flow',
      icon: '🎧',
      prompt: 'Diseña un widget de reproductor de música lofi con ecualizador animado, play/pause y control de volumen.',
      code: `// Generado por Vibe Coding Agent en 0.9s
import { useState } from 'react';

export function LofiPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(80);

  return (
    <div className="player-box">
      <div className="track-info">Late Night Coding • React Flow</div>
      <div className="controls">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? '⏸ Pausa' : '▶ Play'}
        </button>
        <input type="range" value={volume} onChange={(e) => setVolume(e.target.value)} />
      </div>
    </div>
  );
}`
    },
    {
      title: 'Selector de Planes SaaS',
      icon: '💎',
      prompt: 'Genera un selector de planes con switch Mensual/Anual (-20% dcto), comparativa de perks y estado activo seleccionado.',
      code: `// Generado por Vibe Coding Agent en 1.1s
import { useState } from 'react';

export function PricingToggle() {
  const [annual, setAnnual] = useState(true);
  const [plan, setPlan] = useState('pro');

  const starterPrice = annual ? '$15' : '$19';
  const proPrice = annual ? '$29' : '$39';

  return (
    <div className="pricing-container">
      <button onClick={() => setAnnual(!annual)}>
        Facturación {annual ? 'Anual (-20%)' : 'Mensual'}
      </button>
      <div className="cards-grid">
        <PlanCard active={plan === 'pro'} price={proPrice} onSelect={() => setPlan('pro')} />
      </div>
    </div>
  );
}`
    },
    {
      title: 'Kanban Tasks con IA',
      icon: '⚡',
      prompt: 'Crea una lista de tareas interactivas con estados completados, etiquetas de colores y formulario para añadir items.',
      code: `// Generado por Vibe Coding Agent en 1.4s
import { useState } from 'react';

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Añadir Tarea</button>
    </div>
  );
}`
    }
  ]

  const tracks = [
    { name: 'Deep Focus React 19', artist: 'Lo-Fi Vibe Beats', length: '2:45' },
    { name: 'Late Night Prompting', artist: 'Synth AI', length: '3:12' },
    { name: 'Zero Syntax Anxiety', artist: 'Karpathy Flow', length: '2:30' },
  ]

  const handleSelectPreset = (index) => {
    if (index === activePreset) return
    setIsGenerating(true)
    setActivePreset(index)
    setTimeout(() => {
      setIsGenerating(false)
    }, 400)
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (!newTaskInput.trim()) return
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTaskInput.trim(), done: false, tag: 'Idea' }
    ])
    setNewTaskInput('')
  }

  return (
    <section id="simulador" className="section playground-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">EXPERIENCIA EN VIVO</span>
          <h2 className="section-title">
            El <span className="gradient-text">Simulador Interactivo</span> de Vibe Coding
          </h2>
          <p className="section-subtitle">
            Elige un requerimiento o escribe una idea. Observa cómo la IA traduce la intención humana en componentes funcionales y listos para interactuar.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="preset-tabs">
          {presets.map((preset, index) => (
            <button
              key={preset.title}
              type="button"
              className={`preset-btn ${activePreset === index ? 'active' : ''}`}
              onClick={() => handleSelectPreset(index)}
            >
              <span className="preset-icon">{preset.icon}</span>
              <span className="preset-text">{preset.title}</span>
            </button>
          ))}
        </div>

        {/* Prompt Card */}
        <div className="playground-box glass-card">
          <div className="prompt-display-bar">
            <div className="prompt-meta">
              <span className="prompt-tag">⚡ Prompt enviado al agente:</span>
              <span className="prompt-model">Claude 3.7 Sonnet / Antigravity AI</span>
            </div>
            <p className="active-prompt-text">
              "{presets[activePreset].prompt}"
            </p>
          </div>

          {/* Controls Bar */}
          <div className="playground-toolbar">
            <div className="view-mode-toggle">
              <button
                type="button"
                className={`toggle-tab ${viewMode === 'preview' ? 'active' : ''}`}
                onClick={() => setViewMode('preview')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Vista Previa Interactiva</span>
              </button>
              <button
                type="button"
                className={`toggle-tab ${viewMode === 'code' ? 'active' : ''}`}
                onClick={() => setViewMode('code')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>Código React 19 Generado</span>
              </button>
            </div>
            
            <div className="generation-badge">
              <span className="pulse-dot"></span>
              <span>100% Funcional en React</span>
            </div>
          </div>

          {/* Main Stage */}
          <div className="playground-stage">
            {isGenerating ? (
              <div className="generating-overlay">
                <div className="loader-spinner"></div>
                <p>Ensamblando componentes y aplicando estilos con IA...</p>
              </div>
            ) : viewMode === 'code' ? (
              <div className="code-display">
                <pre>
                  <code>{presets[activePreset].code}</code>
                </pre>
              </div>
            ) : (
              <div className="interactive-canvas">
                {/* PRESET 0: ANALYTICS */}
                {activePreset === 0 && (
                  <div className="widget-card">
                    <div className="widget-header">
                      <div>
                        <span className="widget-sub">Métricas de Ventas & Retención</span>
                        <h3 className="widget-title">Resumen de Performance</h3>
                      </div>
                      <div className="period-pills">
                        {['7d', '30d', '90d'].map((p) => (
                          <button
                            key={p}
                            type="button"
                            className={`pill ${analyticsPeriod === p ? 'active' : ''}`}
                            onClick={() => setAnalyticsPeriod(p)}
                          >
                            {p.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="metrics-row">
                      <div className="metric-box">
                        <span className="metric-label">Ingresos Totales</span>
                        <span className="metric-number">
                          {analyticsPeriod === '7d' ? '$8,420' : analyticsPeriod === '30d' ? '$34,820' : '$118,500'} USD
                        </span>
                        <span className="metric-badge green">+32.4% vs mes anterior</span>
                      </div>
                      <div className="metric-box">
                        <span className="metric-label">Nuevos Suscriptores</span>
                        <span className="metric-number">
                          {analyticsPeriod === '7d' ? '142' : analyticsPeriod === '30d' ? '689' : '2,150'}
                        </span>
                        <span className="metric-badge green">+18.7% conversión</span>
                      </div>
                    </div>

                    <div className="chart-simulation">
                      <div className="chart-bar-group">
                        <div className="chart-bar" style={{ height: analyticsPeriod === '7d' ? '30%' : '55%' }}></div>
                        <span>Lun</span>
                      </div>
                      <div className="chart-bar-group">
                        <div className="chart-bar" style={{ height: analyticsPeriod === '7d' ? '60%' : '75%' }}></div>
                        <span>Mar</span>
                      </div>
                      <div className="chart-bar-group">
                        <div className="chart-bar" style={{ height: analyticsPeriod === '7d' ? '45%' : '60%' }}></div>
                        <span>Mié</span>
                      </div>
                      <div className="chart-bar-group">
                        <div className="chart-bar" style={{ height: analyticsPeriod === '7d' ? '85%' : '90%' }}></div>
                        <span>Jue</span>
                      </div>
                      <div className="chart-bar-group">
                        <div className="chart-bar chart-bar-active" style={{ height: '100%' }}></div>
                        <span>Vie</span>
                      </div>
                    </div>

                    <div className="widget-footer">
                      <button
                        type="button"
                        className="btn-widget-action"
                        onClick={() => {
                          setExported(true)
                          setTimeout(() => setExported(false), 2500)
                        }}
                      >
                        {exported ? '✓ Reporte CSV Descargado' : '📥 Exportar Datos en CSV'}
                      </button>
                      <span className="widget-hint">Interactúa con los filtros para cambiar la data</span>
                    </div>
                  </div>
                )}

                {/* PRESET 1: LOFI PLAYER */}
                {activePreset === 1 && (
                  <div className="widget-card lofi-widget">
                    <div className="lofi-cover">
                      <div className="lofi-art">
                        <div className={`lofi-vinyl ${isPlaying ? 'spinning' : ''}`}>
                          <div className="vinyl-center"></div>
                        </div>
                      </div>
                      <div className="lofi-info">
                        <span className="lofi-tag">CANAL OFICIAL VIBE CODING</span>
                        <h3>{tracks[currentTrack].name}</h3>
                        <p>{tracks[currentTrack].artist}</p>
                      </div>
                    </div>

                    {/* Equalizer Wave */}
                    <div className="lofi-wave">
                      {[40, 75, 50, 90, 65, 30, 85, 100, 45, 70, 95, 60, 35, 80].map((h, i) => (
                        <div
                          key={i}
                          className={`wave-bar ${isPlaying ? 'wave-active' : ''}`}
                          style={{
                            height: isPlaying ? `${h}%` : '15%',
                            animationDelay: `${i * 0.08}s`
                          }}
                        ></div>
                      ))}
                    </div>

                    <div className="lofi-controls">
                      <button
                        type="button"
                        className="btn-track-skip"
                        onClick={() => setCurrentTrack((t) => (t === 0 ? tracks.length - 1 : t - 1))}
                      >
                        ⏮
                      </button>
                      <button
                        type="button"
                        className="btn-play-pause"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? '⏸' : '▶'}
                      </button>
                      <button
                        type="button"
                        className="btn-track-skip"
                        onClick={() => setCurrentTrack((t) => (t + 1) % tracks.length)}
                      >
                        ⏭
                      </button>
                    </div>

                    <div className="volume-slider-box">
                      <span>🔈</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="volume-slider"
                      />
                      <span>🔊 {volume}%</span>
                    </div>
                  </div>
                )}

                {/* PRESET 2: PRICING */}
                {activePreset === 2 && (
                  <div className="widget-card pricing-widget">
                    <div className="pricing-billing-switch">
                      <button
                        type="button"
                        className={`cycle-btn ${billingCycle === 'mensual' ? 'active' : ''}`}
                        onClick={() => setBillingCycle('mensual')}
                      >
                        Mensual
                      </button>
                      <button
                        type="button"
                        className={`cycle-btn ${billingCycle === 'anual' ? 'active' : ''}`}
                        onClick={() => setBillingCycle('anual')}
                      >
                        Anual <span className="discount-tag">Ahorra 20%</span>
                      </button>
                    </div>

                    <div className="pricing-cards-grid">
                      <div
                        className={`plan-card ${selectedPlan === 'starter' ? 'selected' : ''}`}
                        onClick={() => setSelectedPlan('starter')}
                      >
                        <div className="plan-name">Builder Starter</div>
                        <div className="plan-price">
                          {billingCycle === 'anual' ? '$19' : '$24'}
                          <span className="price-freq">/mes</span>
                        </div>
                        <p className="plan-desc">Ideal para desarrolladores y creativos que inician su viaje en IA.</p>
                        <ul className="plan-features">
                          <li>✓ React 19 Core & Vite</li>
                          <li>✓ Prompts básicos de UI</li>
                          <li>✓ Acceso a la comunidad</li>
                        </ul>
                        <button type="button" className="btn-select-plan">
                          {selectedPlan === 'starter' ? 'Plan Seleccionado' : 'Elegir Starter'}
                        </button>
                      </div>

                      <div
                        className={`plan-card plan-featured ${selectedPlan === 'pro' ? 'selected' : ''}`}
                        onClick={() => setSelectedPlan('pro')}
                      >
                        <div className="featured-pill">RECOMENDADO</div>
                        <div className="plan-name">Vibe Coder Pro</div>
                        <div className="plan-price">
                          {billingCycle === 'anual' ? '$49' : '$59'}
                          <span className="price-freq">/mes</span>
                        </div>
                        <p className="plan-desc">Para builders que quieren construir y lanzar productos a producción.</p>
                        <ul className="plan-features">
                          <li>✓ Todo lo del plan Starter</li>
                          <li>✓ Agentes autónomos & Cursor rules</li>
                          <li>✓ Arquitectura Fullstack + DB</li>
                          <li>✓ Mentoría grupal semanal</li>
                        </ul>
                        <button type="button" className="btn-select-plan btn-plan-pro">
                          {selectedPlan === 'pro' ? 'Plan Seleccionado' : 'Elegir Vibe Pro'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* PRESET 3: TASKS WITH AI */}
                {activePreset === 3 && (
                  <div className="widget-card task-widget">
                    <div className="task-header">
                      <div>
                        <h3 className="widget-title">Checklist de Proyecto Vibe</h3>
                        <span className="widget-sub">
                          {tasks.filter(t => t.done).length} de {tasks.length} completadas
                        </span>
                      </div>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${(tasks.filter(t => t.done).length / tasks.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <form onSubmit={handleAddTask} className="add-task-form">
                      <input
                        type="text"
                        placeholder="Escribe una nueva tarea para tu agente..."
                        value={newTaskInput}
                        onChange={(e) => setNewTaskInput(e.target.value)}
                        className="task-input"
                      />
                      <button type="submit" className="btn-add-task">
                        + Añadir
                      </button>
                    </form>

                    <div className="task-list">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          className={`task-item ${task.done ? 'task-done' : ''}`}
                          onClick={() => toggleTask(task.id)}
                        >
                          <div className="task-checkbox">
                            {task.done ? '✓' : ''}
                          </div>
                          <span className="task-text">{task.text}</span>
                          <span className={`task-badge tag-${task.tag.toLowerCase()}`}>
                            {task.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

