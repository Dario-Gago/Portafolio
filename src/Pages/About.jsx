import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('story')
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const tabs = {
    inspiration: {
      label: 'Inspiración',
      icon: ''
    },
    story: {
      label: 'Mi Historia',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      )
    },
    values: {
      label: 'Mis Valores',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      )
    },
    goals: {
      label: 'Objetivos',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    }
  }

  const experience = [
    {
      year: '2025',
      title: 'Desarrollador Full Stack',
      description:
        'Desarrollo de aplicaciones web modernas con React y Node.js',
      status: 'actual'
    },
    {
      year: '2024',
      title: 'Aprendizaje Autodidacta',
      description:
        'Formación intensiva en tecnologías web y desarrollo de proyectos personales',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'Inicio en Programación',
      description: 'Primeros pasos en el mundo del desarrollo web',
      status: 'completed'
    }
  ]

  const interests = [
    { name: 'Código Limpio', icon: '🧹' },
    { name: 'UX/UI Design', icon: '🎨' },
    { name: 'Tecnologías Emergentes', icon: '🚀' },
    { name: 'Open Source', icon: '💻' },
    { name: 'Optimización', icon: '⚡' },
    { name: 'Aprendizaje Continuo', icon: '📚' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'inspiration':
        return (
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Mi inspiración proviene de Steve Jobs, Elon Musk, Bill Gates y
              más. Estos personajes me han ayudado en mi desarrollo personal y
              en la industria de la informatica. El talento y la dedicación que
              han demostrado me motivan a seguir aprendiendo y creciendo.
            </p>
          </div>
        )
      case 'story':
        return (
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Mi viaje en el desarrollo web comenzó hace más de un año cuando
              descubrí la magia de crear aplicaciones que pueden impactar la
              vida de las personas. Lo que empezó como curiosidad se convirtió
              rápidamente en una pasión por resolver problemas complejos a
              través del código.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Me especializo en el desarrollo{' '}
              <span className="text-green-500 font-medium">Full Stack</span>,
              con un enfoque particular en crear experiencias de usuario
              excepcionales y arquitecturas backend robustas. Cada proyecto es
              una oportunidad de aprender algo nuevo y mejorar mis habilidades.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cuando no estoy programando, me gusta mantenerme actualizado con
              las últimas tendencias tecnológicas, contribuir a proyectos open
              source y explorar nuevas formas de hacer que la web sea más
              accesible y eficiente.
            </p>
          </div>
        )
      case 'values':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Calidad sobre Cantidad',
                description:
                  'Prefiero entregar menos funciones pero bien hechas, que muchas a medias.',
                icon: '⭐'
              },
              {
                title: 'Aprendizaje Continuo',
                description:
                  'El mundo tech evoluciona rápido, y yo evoluciono con él.',
                icon: '🌱'
              },
              {
                title: 'Colaboración',
                description:
                  'Los mejores proyectos surgen del trabajo en equipo y la comunicación.',
                icon: '🤝'
              },
              {
                title: 'Innovación',
                description:
                  'Busco siempre nuevas formas de resolver problemas antiguos.',
                icon: '💡'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-green-500/20"
              >
                <div className="text-2xl mb-3">{value.icon}</div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        )
      case 'goals':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-500 font-semibold mb-4">
                  Corto Plazo
                </h4>
                <ul className="space-y-3">
                  {[
                    'Dominar TypeScript completamente',
                    'Aprender arquitecturas de microservicios',
                    'Contribuir más a proyectos open source',
                    'Obtener certificaciones relevantes'
                  ].map((goal, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-green-500 font-semibold mb-4">
                  Largo Plazo
                </h4>
                <ul className="space-y-3">
                  {[
                    'Liderar equipos de desarrollo',
                    'Crear productos que impacten millones',
                    'Mentorizar nuevos desarrolladores',
                    'Especializarme en AI/ML aplicado'
                  ].map((goal, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen bg-black py-20 relative overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-green-500">Mí</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conoce más sobre mi historia, valores y lo que me motiva cada día
          </p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Columna izquierda - Foto y datos personales */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Foto */}
            <div className="relative mb-8">
              <div className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96">
                <img
                  src="/Yo.jpeg"
                  alt="Darío Gago"
                  className="w-full h-full object-cover rounded-2xl border-4 border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                />
                {/* Decoración */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/10 rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
              </div>
            </div>

            {/* Información personal */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                Información Personal
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Nombre', value: 'Darío Gago', icon: '👨‍💻' },
                  { label: 'Ubicación', value: 'Chile, Santiago', icon: '📍' },
                  { label: 'Email', value: 'gagodario1@gmail.com', icon: '✉️' },
                  { label: 'Disponibilidad', value: 'Disponible', icon: '✅' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span className="text-gray-400">{item.label}</span>
                    </div>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Intereses */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Intereses
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/50 text-white px-3 py-2 rounded-lg text-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-default"
                  >
                    {interest.icon} {interest.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Contenido principal */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900/50 rounded-xl border border-green-500/20">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex-1 justify-center sm:flex-none sm:justify-start ${
                    activeTab === key
                      ? 'bg-green-500 text-black'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Contenido del tab */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-green-500/20 min-h-[400px]">
              {renderTabContent()}
            </div>

            {/* Timeline de experiencia */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Mi Trayectoria
              </h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          item.status === 'actual'
                            ? 'bg-green-500'
                            : 'bg-green-400'
                        }`}
                      ></div>
                      {index < experience.length - 1 && (
                        <div className="w-px h-12 bg-green-500/30 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-green-500 font-semibold">
                          {item.year}
                        </span>
                        {item.status === 'actual' && (
                          <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs">
                            Actual
                          </span>
                        )}
                      </div>
                      <h4 className="text-white font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
