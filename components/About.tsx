import { CheckCircle, Shield, Truck, Users } from 'lucide-react'

export default function About() {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una empresa comprometida con el desarrollo agropecuario argentino
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Agrodas</strong> nació con la visión de ser el puente entre los productores 
              agropecuarios y las mejores soluciones del mercado. Como representantes oficiales 
              de <strong>Nidera</strong> y miembros activos de la <strong>Red.in</strong>, 
              ofrecemos un servicio integral que combina experiencia, confianza y tecnología.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro compromiso se refleja en cada producto que comercializamos y en cada 
              servicio que brindamos, siempre pensando en el éxito de nuestros clientes.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-primary-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Red.in</h4>
                <p className="text-sm text-gray-600">Miembros activos</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Nidera</h4>
                <p className="text-sm text-gray-600">Representantes oficiales</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Logística</h4>
                <p className="text-sm text-gray-600">Sistema homologado</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Casafe</h4>
                <p className="text-sm text-gray-600">Certificación</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nuestro Compromiso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Calidad Garantizada</h4>
              <p className="text-gray-600">
                Todos nuestros productos cumplen con los más altos estándares de calidad
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Atención Personalizada</h4>
              <p className="text-gray-600">
                Cada cliente recibe un servicio adaptado a sus necesidades específicas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Logística Confiable</h4>
              <p className="text-gray-600">
                Sistema de distribución eficiente y homologado por Casafe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
