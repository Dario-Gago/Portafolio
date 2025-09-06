import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Solo actualiza si el estado cambia
      setIsScrolled(window.scrollY > 50)

      // Si el menú está abierto y se hace scroll, ciérralo
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      // Cierra el menú en pantallas grandes
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Limpia los listeners
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen]) // El array de dependencias es importante para que el efecto se vuelva a ejecutar cuando isMenuOpen cambie.

  useEffect(() => {
    // Previene el scroll del body solo cuando es necesario
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    // La función de limpieza se encarga de restaurar el estado original
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Proyectos', href: '/projects' },
    { name: '¿Qué busco?', href: '/search' }
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-green-500/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Nombre */}
            <div className="flex items-center z-60">
              <Link to="/" className="group flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black text-xl group-hover:rotate-12 transition-transform duration-300">
                    DG
                  </div>
                  <div className="absolute -inset-1 bg-green-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
                </div>
                <span className="text-white font-bold text-xl group-hover:text-green-500 transition-colors duration-300">
                  Darío Gago
                </span>
              </Link>
            </div>

            {/* Navegación Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-white hover:text-green-500 transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Botón CTA Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/56926281762"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                Contrátame
              </a>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={handleMenuToggle}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group z-60 relative"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen} // Indica si el menú está expandido
              aria-controls="mobile-menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen
                    ? 'rotate-45 translate-y-2 bg-green-500'
                    : 'group-hover:bg-green-500'
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'group-hover:bg-green-500'
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen
                    ? '-rotate-45 -translate-y-2 bg-green-500'
                    : 'group-hover:bg-green-500'
                }`}
              ></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Menú móvil - Overlay completo */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleMenuItemClick}
        ></div>

        {/* Contenido del menú */}
        <div
          className={`relative z-50 h-full flex flex-col justify-center items-center transition-transform duration-500 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="text-center space-y-8 px-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-700 ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms'
                }}
              >
                <Link
                  to={item.href}
                  onClick={handleMenuItemClick}
                  className="block text-white hover:text-green-500 transition-colors duration-300 font-medium text-2xl sm:text-3xl py-2 hover:scale-110 transform"
                >
                  {item.name}
                </Link>
              </div>
            ))}

            {/* Botón CTA en móvil */}
            <div
              className={`transform transition-all duration-700 pt-8 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${(navItems.length + 1) * 100}ms`
                  : '0ms'
              }}
            >
              <a
                href="#contact"
                onClick={handleMenuItemClick}
                className="inline-block bg-green-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 text-lg hover:scale-110 transform hover:shadow-lg hover:shadow-green-500/25"
              >
                Contrátame
              </a>
            </div>

            {/* Indicador visual */}
            <div
              className={`w-16 h-0.5 bg-green-500 mx-auto mt-12 transform transition-all duration-700 ${
                isMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${(navItems.length + 2) * 100}ms`
                  : '0ms'
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
