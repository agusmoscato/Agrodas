import { Truck, Warehouse, Phone, FileText, Users, Shield } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Logística y Distribución",
      description: "Sistema de distribución homologado por Casafe con cobertura nacional",
      features: [
        "Entrega a campo",
        "Seguimiento en tiempo real",
        "Almacenamiento temporal",
        "Distribución just-in-time"
      ]
    },
    {
      icon: Warehouse,
      title: "Sistema de Guarda",
      description: "Almacenamiento seguro y controlado de productos agropecuarios",
      features: [
        "Control de temperatura",
        "Seguimiento de lotes",
        "Certificación de calidad",
        "Seguro de mercadería"
      ]
    },
    {
      icon: Phone,
      title: "Asesoramiento Técnico",
      description: "Soporte especializado para optimizar el rendimiento de tus cultivos",
      features: [
        "Consultas agronómicas",
        "Planificación de cultivos",
        "Análisis de suelos",
        "Recomendaciones personalizadas"
      ]
    },
    {
      icon: FileText,
      title: "Documentación y Certificaciones",
      description: "Toda la documentación necesaria para el comercio agropecuario",
      features: [
        "Certificados fitosanitarios",
        "Documentación de origen",
        "Trazabilidad completa",
        "Cumplimiento normativo"
      ]
    },
    {
      icon: Users,
      title: "Capacitación",
      description: "Programas de formación para productores y técnicos",
      features: [
        "Cursos de aplicación",
        "Buenas prácticas",
        "Nuevas tecnologías",
        "Certificaciones técnicas"
      ]
    },
    {
      icon: Shield,
      title: "Seguro y Garantías",
      description: "Protección integral para tus inversiones",
      features: [
        "Garantía de productos",
        "Seguro de responsabilidad",
        "Cobertura de riesgos",
        "Soporte post-venta"
      ]
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Servicios Adicionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que productos, ofrecemos soluciones integrales para el éxito de tu producción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300">
                Más Información
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestros servicios?
            </h3>
            <p className="text-lg text-gray-600">
              Combinamos experiencia, tecnología y compromiso para brindarte el mejor servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Certificación Casafe</h4>
              <p className="text-sm text-gray-600">Sistema homologado y certificado</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cobertura Nacional</h4>
              <p className="text-sm text-gray-600">Llegamos a todo el país</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Soporte 24/7</h4>
              <p className="text-sm text-gray-600">Disponibles cuando nos necesites</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Equipo Especializado</h4>
              <p className="text-sm text-gray-600">Profesionales con experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
