import { User, Award, Phone, Mail } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      name: "Carlos Mendoza",
      position: "Director General",
      experience: "15 años en el sector agropecuario",
      phone: "+54 9 11 1234-5678",
      email: "carlos@agrodas.com.ar",
      image: "/api/placeholder/300/300"
    },
    {
      name: "María González",
      position: "Gerente Comercial",
      experience: "12 años en ventas agropecuarias",
      phone: "+54 9 11 2345-6789",
      email: "maria@agrodas.com.ar",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Roberto Silva",
      position: "Asesor Técnico",
      experience: "20 años en agronomía",
      phone: "+54 9 11 3456-7890",
      email: "roberto@agrodas.com.ar",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Ana Rodríguez",
      position: "Coordinadora Logística",
      experience: "10 años en logística agropecuaria",
      phone: "+54 9 11 4567-8901",
      email: "ana@agrodas.com.ar",
      image: "/api/placeholder/300/300"
    }
  ]

  return (
    <section id="nuestro-equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales con amplia experiencia en el sector agropecuario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-primary-100 flex items-center justify-center">
                <User className="h-24 w-24 text-green-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4 text-green-600" />
                    <span className="truncate">{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experiencia Colectiva
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro equipo cuenta con más de <strong>50 años de experiencia combinada</strong> 
              en el sector agropecuario, lo que nos permite ofrecer soluciones integrales 
              y asesoramiento especializado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Años de experiencia promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Productores atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Disponibilidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
