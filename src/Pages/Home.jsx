import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTech, setCurrentTech] = useState('')
  const [techIndex, setTechIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const technologies = [
    'React',
    'Node.js',
    'JavaScript',
    'MongoDB',
    'Express',
    'PostgreSQL'
  ]

  const skills = [
    {
      name: 'Frontend',
      techs: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind']
    },
    {
      name: 'Backend',
      techs: ['Node.js', 'Express', 'PostgreSQL', 'APIs REST']
    },
    {
      name: 'Herramientas',
      techs: ['Git', 'VS Code', 'Postman', 'PG Admin']
    }
  ]

  useEffect(() => {
    setIsVisible(true)

    // Efecto de rotación de tecnologías
    const interval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % technologies.length)
    }, 3000) // Aumenté el tiempo para mejor legibilidad

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let timeout
    const tech = technologies[techIndex]
    let index = 0

    setCurrentTech('')
    setIsTyping(true)

    const typeWriter = () => {
      if (index < tech.length) {
        setCurrentTech(tech.slice(0, index + 1))
        index++
        timeout = setTimeout(typeWriter, 100)
      } else {
        // Pausa antes de empezar a borrar
        setTimeout(() => setIsTyping(false), 1500)
      }
    }

    const startTyping = setTimeout(typeWriter, 500)

    return () => {
      clearTimeout(timeout)
      clearTimeout(startTyping)
    }
  }, [techIndex, technologies])

  return (
    <section
      id="home"
      className="min-h-screen bg-black relative overflow-hidden flex items-center py-20 sm:py-0"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 hidden sm:block">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationName: 'float',
              animationDuration: '6s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido principal */}
          <div
            className={`transition-all duration-1000 transform text-center lg:text-left ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Saludo */}
            <div className="mb-4 sm:mb-6">
              <span className="text-green-500 text-base sm:text-lg font-light tracking-wide animate-fade-in">
                ¡Hola! 👋 Soy
              </span>
            </div>

            {/* Nombre */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Darío Gago
              </span>
            </h1>

            {/* Título dinámico */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4">
                Desarrollador{' '}
                <span className="text-green-500 font-bold">Full Stack</span>
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Desarrollador apasionado especializado en crear aplicaciones web
              modernas y escalables. Domino el stack completo desde el frontend
              con <span className="text-green-500 font-medium">React</span>{' '}
              hasta el backend con{' '}
              <span className="text-green-500 font-medium">Node.js</span>,
              siempre enfocado en escribir código limpio y ofrecer las mejores
              experiencias de usuario.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 items-center lg:items-start">
              <Link
                to="/projects"
                className="group bg-green-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base">Ver mis proyectos</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <button className="border-2 border-green-500 text-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
                Descargar CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { number: '1+', label: 'Años de experiencia' },
                { number: '4+', label: 'Proyectos completados' },
                { number: '6+', label: 'Tecnologías dominadas' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-500">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel de tecnologías */}
          <div
            className={`transition-all duration-1000 delay-300 transform order-first lg:order-last ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 sm:p-8 hover:border-green-500/40 transition-all duration-300 mx-4 sm:mx-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
                Stack Tecnológico
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {skills.map((category, categoryIndex) => (
                  <div key={category.name}>
                    <h4 className="text-green-500 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.techs.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="bg-black/50 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm border border-green-500/20 hover:border-green-500/60 hover:bg-green-500/10 transition-all duration-300 cursor-default animate-fade-in"
                          style={{
                            animationDelay: `${
                              categoryIndex * 100 + techIndex * 50
                            }ms`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicador de aprendizaje continuo */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-green-500/20">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-center">
                    Siempre aprendiendo nuevas tecnologías
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation-name: blob;
          animation-duration: 7s;
          animation-iteration-count: infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation-name: fade-in;
          animation-duration: 1s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  )
}

export default Home
