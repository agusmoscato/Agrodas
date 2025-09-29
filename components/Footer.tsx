'use client'

import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Agrodas</h3>
            <p className="text-gray-300 mb-4">
              Agroservicios del Sur - Representantes de Nidera, miembros de la Red.in
            </p>
            <p className="text-gray-300 text-sm">
              Comercializamos todos los productos que un productor agropecuario pueda necesitar.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">info@agrodas.com.ar</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Redes sociales y WhatsApp */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4">Certificaciones y Afiliaciones</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 mb-2">
                  <span className="text-gray-900 font-bold text-lg">Nidera</span>
                </div>
                <p className="text-sm text-gray-300">Representantes Oficiales</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 mb-2">
                  <span className="text-gray-900 font-bold text-lg">Red.in</span>
                </div>
                <p className="text-sm text-gray-300">Miembros Activos</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 mb-2">
                  <span className="text-gray-900 font-bold text-lg">Casafe</span>
                </div>
                <p className="text-sm text-gray-300">Sistema Homologado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Agrodas - Agroservicios del Sur. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
