export default function ToolsGrid() {
  const tools = [
    {
      name: 'React 19',
      role: 'UI Library Moderna',
      tag: 'Core',
      desc: 'El estándar de la web con el nuevo React Compiler, Server Actions, use() y manejo optimista de estado.',
      icon: '⚛️',
      color: '#61dafb',
    },
    {
      name: 'Vite 6+',
      role: 'Build Tool Ultra Veloz',
      tag: 'Bundler',
      desc: 'Arranque en milisegundos y Hot Module Replacement (HMR) instantáneo para ver tus cambios de IA en tiempo real.',
      icon: '⚡',
      color: '#bd34fe',
    },
    {
      name: 'Claude 3.7 Sonnet',
      role: 'Modelo de Razonamiento',
      tag: 'AI Model',
      desc: 'Capacidades de razonamiento híbrido y generación de código frontend sin fallas de sintaxis ni alucinaciones.',
      icon: '🧠',
      color: '#d97706',
    },
    {
      name: 'Cursor & Antigravity',
      role: 'Entornos de Desarrollo con IA',
      tag: 'IDE & Agents',
      desc: 'Herramientas con agentes autónomos capaces de leer todo tu repositorio y editar múltiples archivos simultáneamente.',
      icon: '🪄',
      color: '#a855f7',
    },
    {
      name: 'Tailwind CSS & Radix',
      role: 'Sistema de Diseño',
      tag: 'Estilos',
      desc: 'Construcción estética y responsiva guiada por tokens de diseño que la IA entiende con precisión milimétrica.',
      icon: '🎨',
      color: '#06b6d4',
    },
    {
      name: 'Vercel & Supabase',
      role: 'Backend & Despliegue',
      tag: 'Producción',
      desc: 'Base de datos en tiempo real y despliegue continuo con un solo comando para llevar tus creaciones al público.',
      icon: '🚀',
      color: '#10b981',
    },
  ]

  return (
    <section id="herramientas" className="section tools-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">EL STACK DEFINITIVO</span>
          <h2 className="section-title">
            Herramientas que dominarás en el curso
          </h2>
          <p className="section-subtitle">
            No enseñamos herramientas obsoletas. Te capacitamos en el stack moderno que utilizan los creadores más rápidos de Silicon Valley.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, i) => (
            <div key={i} className="tool-card glass-card">
              <div className="tool-card-top">
                <div className="tool-icon-wrapper" style={{ borderColor: `${tool.color}40` }}>
                  <span className="tool-icon">{tool.icon}</span>
                </div>
                <span className="tool-tag">{tool.tag}</span>
              </div>
              <h3 className="tool-name">{tool.name}</h3>
              <span className="tool-role">{tool.role}</span>
              <p className="tool-desc">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

