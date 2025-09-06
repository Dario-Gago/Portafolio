import React, { useState, useEffect, useRef } from 'react'
import {
  Search,
  Heart,
  Code,
  BookOpen,
  MapPin,
  Users,
  Award,
  Monitor,
  Database,
  Layers,
  Calendar,
  Mail,
  Phone,
  Download
} from 'lucide-react'

const JobSearchPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (pageRef.current) {
      observer.observe(pageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        ref={pageRef}
        className="min-h-screen bg-black py-20 relative overflow-hidden flex items-center"
      >
        {/* Fondo animado */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Me gusta{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                enseñar
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Docente apasionado por el desarrollo web y las tecnologías
              modernas
            </p>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-6"></div>
          </div>

          {/* Contenido principal */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-4 mb-8">
                <Heart className="text-green-500 animate-pulse" size={24} />
                <span className="text-xl sm:text-2xl text-gray-200 font-semibold">
                  Docente Fullstack JavaScript
                </span>
                <Heart className="text-green-500 animate-pulse" size={24} />
              </div>

              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Quiero trabajar como docente, siempre me ha gustado enseñar y
                más ahora que he aprendido más cosas sobre el desarrollo web.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-gray-400 mb-12">
                <div className="flex items-center gap-3">
                  <Code size={24} className="text-green-500" />
                  <span className="text-base sm:text-lg">
                    React • Node.js • PostgreSQL
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen size={24} className="text-green-500" />
                  <span className="text-base sm:text-lg">
                    Educación Tecnológica
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-green-500" />
                  <span className="text-base sm:text-lg">Santiago, Chile</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/PDF-Dario-Gago.pdf"
                  download="Darío-Gago-CV.pdf"
                  className="border-2 border-green-500 text-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base inline-block text-center no-underline"
                >
                  <Download className="inline mr-2" size={20} />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobSearchPage
