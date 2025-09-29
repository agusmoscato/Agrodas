'use client'

import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-primary-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Agrodas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Agroservicios del Sur
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Representantes de <strong>Nidera</strong>, miembros de la <strong>Red.in</strong>
          </p>
        </div>

        <div className="mb-12">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comercializamos todos los productos que un productor agropecuario pueda necesitar.
            <br />
            Contamos con sistema de guarda y logística homologado por <strong>Casafe</strong>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contactar Ahora
          </button>
          <button
            onClick={() => scrollToSection('quienes-somos')}
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Conocer Más
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Phone className="h-5 w-5 text-green-600" />
            <span>+54 9 11 1234-5678</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Mail className="h-5 w-5 text-green-600" />
            <span>info@agrodas.com.ar</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5 text-green-600" />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('quienes-somos')}
          className="animate-bounce text-gray-400 hover:text-green-600 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
