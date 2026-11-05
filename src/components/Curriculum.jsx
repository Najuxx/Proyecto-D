import { useState } from 'react'

export default function Curriculum() {
  const [openModule, setOpenModule] = useState(0)

  const modules = [
    {
      id: 1,
      badge: 'Semana 1',
      title: 'El Manifiesto Vibe Coding & Setup Moderno',
      desc: 'Comprende el cambio de mentalidad, configura tu entorno con React 19 y Vite, y define tus primeras reglas de IA.',
      lessons: [
        'Filosofía Vibe Coding: De mecanógrafo de código a director de orquesta.',
        'Setup de alto rendimiento: Vite 6+, React 19 Compiler y extensiones.',
        'Cómo escribir `.cursorrules` y reglas de contexto que eliminan alucinaciones.',
        'Reto práctico: Tu primer componente interactivo en menos de 8 minutos.',
      ],
      project: '⚡ Portafolio personal autogenerado e interactivo con modo oscuro.',
    },
    {
      id: 2,
      badge: 'Semana 2',
      title: 'Prompt Engineering de Alta Fidelidad para UI',
      desc: 'Aprende a describir interfaces, interacciones complejas, microanimaciones y sistemas de diseño sin escribir CSS manual.',
      lessons: [
        'Anatomía del prompt perfecto para componentes React.',
        'Integración asistida de Tailwind CSS, Glassmorphism y temas de color.',
        'Desglose jerárquico: cómo pedir componentes padre e hijos sin romper dependencias.',
        'Generación de iconos, SVGs dinámicos y estados de carga (skeletons).',
      ],
      project: '🎨 Dashboard para Creadores de Contenido con métricas y gráficos en vivo.',
    },
    {
      id: 3,
      badge: 'Semana 3',
      title: 'React 19 Hooks, Estado y Conexión a Datos',
      desc: 'Domina las nuevas capacidades de React 19 guiadas por IA: use(), Actions, transiciones y manejo de datos externos.',
      lessons: [
        'React 19 en acción: useOptimistic y useActionState para formularios sin lag.',
        'Conexión a APIs públicas y privadas con prompts estructurados.',
        'Manejo de estado global ligero con Zustand guiado por asistentes de IA.',
        'Validación automática de esquemas de datos con Zod.',
      ],
      project: '📊 Aplicación de Gestión de Finanzas Personales conectada a APIs.',
    },
    {
      id: 4,
      badge: 'Semana 4',
      title: 'Debugging, Refactorización y Auditoría Asistida',
      desc: 'Qué hacer cuando la IA se equivoca. Técnicas avanzadas de corrección rápida, optimización de render y tests.',
      lessons: [
        'Diagnóstico inmediato: Cómo pasar errores de consola al agente para resolverlos al primer intento.',
        'Limpieza de código: Transformar código generado en arquitectura limpia y reutilizable.',
        'Oxlint y ESLint: Asegurando calidad y buenas prácticas sin esfuerzo.',
        'Generación de tests unitarios automáticos con Vitest.',
      ],
      project: '🛠️ Auditoría de rendimiento y corrección guiada de una app con 5 bugs intencionales.',
    },
    {
      id: 5,
      badge: 'Semana 5 & 6',
      title: 'Proyecto Final: De Idea a SaaS Real en Producción',
      desc: 'Construye un producto completo con base de datos, autenticación y despliegue para compartir con el mundo.',
      lessons: [
        'Integración de Base de datos serverless (Supabase / Neon Postgres).',
        'Flujo de usuarios: Login social y protección de rutas.',
        'Despliegue automatizado en Vercel con CI/CD.',
        'Monitoreo, feedback de usuarios reales y cómo iterar tu producto con Vibe Coding.',
      ],
      project: '🚀 Un Micro-SaaS funcional listo para monetizar y compartir con usuarios reales.',
    },
  ]

  return (
    <section id="temario" className="section curriculum-section">
      <div className="container">
        <div className="text-center">
          <span className="badge">PLAN DE ESTUDIOS PRÁCTICO</span>
          <h2 className="section-title">
            Temario del Curso: <span className="gradient-text">6 Semanas Intensivas</span>
          </h2>
          <p className="section-subtitle">
            Un recorrido 100% orientado a proyectos reales. Sin teoría aburrida: cada semana terminas con una aplicación lista para tu portafolio.
          </p>
        </div>

        <div className="curriculum-list">
          {modules.map((m, index) => {
            const isOpen = openModule === index
            return (
              <div
                key={m.id}
                className={`curriculum-card glass-card ${isOpen ? 'active-module' : ''}`}
              >
                <div
                  className="curriculum-header"
                  onClick={() => setOpenModule(isOpen ? -1 : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setOpenModule(isOpen ? -1 : index)
                    }
                  }}
                >
                  <div className="module-title-group">
                    <span className="module-week-badge">{m.badge}</span>
                    <h3 className="module-title">
                      Módulo {m.id}: {m.title}
                    </h3>
                  </div>
                  <div className="accordion-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <p className="module-summary">{m.desc}</p>

                {isOpen && (
                  <div className="module-body">
                    <div className="lessons-container">
                      <span className="lessons-heading">Lecciones incluidas:</span>
                      <ul className="lessons-list">
                        {m.lessons.map((lesson, idx) => (
                          <li key={idx} className="lesson-item">
                            <span className="lesson-check">✓</span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="module-project-box">
                      <span className="project-badge">PROYECTO FINAL DEL MÓDULO</span>
                      <p className="project-text">{m.project}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

