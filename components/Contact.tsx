'use client'

import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      description: "Línea directa para consultas",
      contact: "+54 9 11 1234-5678",
      action: "tel:+5491112345678",
      color: "green"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta rápida y directa",
      contact: "+54 9 11 1234-5678",
      action: "https://wa.me/5491112345678",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Consultas detalladas por escrito",
      contact: "info@agrodas.com.ar",
      action: "mailto:info@agrodas.com.ar",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Oficina",
      description: "Visítanos en nuestras instalaciones",
      contact: "Buenos Aires, Argentina",
      action: "#",
      color: "red"
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white",
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white",
      red: "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white"
    }
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600"
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Elige la forma de contacto que prefieras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-green-200 ${getColorClasses(method.color)}`}
            >
              <div className="bg-green-100 group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <method.icon className="h-8 w-8 text-green-600 group-hover:text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {method.description}
              </p>
              
              <p className="font-semibold">
                {method.contact}
              </p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                  <p className="text-gray-600">+54 9 11 1234-5678</p>
                  <p className="text-gray-600">+54 9 11 2345-6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@agrodas.com.ar</p>
                  <p className="text-gray-600">ventas@agrodas.com.ar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dirección</h4>
                  <p className="text-gray-600">Buenos Aires, Argentina</p>
                  <p className="text-gray-600">Zona de influencia: Todo el país</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Horarios</h4>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-gray-600">Sábados: 8:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Necesitas asesoramiento inmediato?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo técnico está disponible para resolver tus consultas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+5491112345678"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Llamar Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
