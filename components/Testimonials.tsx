import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Juan Carlos Pérez",
      role: "Productor de Soja",
      location: "Córdoba",
      rating: 5,
      text: "Agrodas ha sido fundamental para el crecimiento de mi producción. Su asesoramiento técnico y la calidad de los productos Nidera me han permitido aumentar significativamente mis rendimientos.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "María Elena Rodríguez",
      role: "Ingeniera Agrónoma",
      location: "Santa Fe",
      rating: 5,
      text: "La logística de Agrodas es impecable. Siempre llegan a tiempo y con toda la documentación en orden. Su sistema de guarda homologado por Casafe me da total tranquilidad.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Roberto Silva",
      role: "Contratista",
      location: "Buenos Aires",
      rating: 5,
      text: "Llevo años trabajando con Agrodas y nunca me han fallado. Su catálogo completo y el servicio personalizado hacen que sea mi proveedor de confianza para todos mis clientes.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Ana González",
      role: "Productora de Maíz",
      location: "Entre Ríos",
      rating: 5,
      text: "El equipo de Agrodas es excepcional. Su conocimiento del mercado y las recomendaciones técnicas me han ayudado a optimizar mis cultivos y reducir costos.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Carlos Mendoza",
      role: "Dueño de Campo",
      location: "La Pampa",
      rating: 5,
      text: "La representación de Nidera a través de Agrodas me ha dado acceso a las mejores semillas del mercado. Su servicio post-venta es excelente y siempre están disponibles para consultas.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Laura Fernández",
      role: "Productora de Trigo",
      location: "San Luis",
      rating: 5,
      text: "Agrodas no solo vende productos, sino que brinda soluciones integrales. Su sistema de capacitación me ha permitido implementar mejores prácticas en mi campo.",
      image: "/api/placeholder/80/80"
    }
  ]

  return (
    <section id="testimoniales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de los productores agropecuarios es nuestro mayor logro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Quote className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-green-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Únete a nuestros clientes satisfechos
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Más de <strong>500 productores</strong> confían en nosotros para sus necesidades agropecuarias
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Soporte disponible</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Ser Cliente
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Ver Más Testimonios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
