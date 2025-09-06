import React, { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Nunoa Dental',
      subtitle: 'Clínica Dental Moderna',
      description:
        'Sitio web profesional para clínica dental con diseño moderno y funcional. Incluye información de servicios, equipo médico, formularios de contacto y sistema de citas online.',
      technologies: [
        'React',
        'Tailwind CSS',
        'JavaScript',
        'Responsive Design'
      ],
      category: 'Website Corporativo',
      url: 'https://nunoa-dental.vercel.app/',
      image: '/Nunoa.png',
      features: [
        'Diseño responsive y moderno',
        'Sistema de información de servicios',
        'Formularios de contacto integrados',
        'Optimizado para SEO',
        'Interfaz intuitiva y profesional'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/40'
    },
    {
      id: 2,
      title: 'TechZone',
      subtitle: 'E-commerce Gaming',
      description:
        'Plataforma completa de e-commerce especializada en productos gaming. Incluye sistema de administración, gestión de inventario, carrito de compras y panel de control para administradores.',
      technologies: ['React', 'Node.js', 'Postgres', 'Express', 'JWT'],
      category: 'E-commerce Full Stack',
      url: 'https://techzone-1.onrender.com/',
      image: '/Tech.png',
      features: [
        'Sistema completo de e-commerce',
        'Panel de administración avanzado',
        'Gestión de productos en tiempo real',
        'Carrito de compras funcional',
        'Autenticación segura con JWT',
        'Base de datos MongoDB'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/40'
    }
  ]

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen bg-black py-20 relative overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mis <span className="text-green-500">Proyectos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre algunos de los proyectos que he desarrollado, desde sitios
            web corporativos hasta aplicaciones full stack
          </p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>

        {/* Proyectos Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-1000 delay-${
                index * 200
              } transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${project.borderColor} ${project.hoverBorder} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Imagen del proyecto */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0  opacity-20`}>
                    <img src={project.image} alt="" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        {project.id === 1 ? (
                          <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-80">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Overlay de hover */}
                  <div
                    className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <button
                        onClick={() => window.open(project.url, '_blank')}
                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                      >
                        <span>Ver Proyecto</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="p-8">
                  {/* Categoría */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${project.bgColor} text-white border ${project.borderColor}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Título y descripción */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Características */}
                  <div className="mb-6">
                    <h4 className="text-green-500 font-semibold mb-3">
                      Características principales:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Tecnologías utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => window.open(project.url, '_blank')}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Ver Proyecto</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Efecto de brillo en hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${project.color} mix-blend-overlay`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
