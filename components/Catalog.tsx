import { Crop, Droplets, Shield, Zap, Wheat, Carrot } from 'lucide-react'

export default function Catalog() {
  const categories = [
    {
      icon: Crop,
      title: "Semillas",
      description: "Variedades de alta calidad para todos los cultivos",
      products: ["Soja", "Maíz", "Trigo", "Girasol", "Sorgo"],
      color: "green"
    },
    {
      icon: Droplets,
      title: "Fertilizantes",
      description: "Nutrientes para maximizar el rendimiento",
      products: ["Urea", "Fosfato", "Potasio", "Micronutrientes", "Bioestimulantes"],
      color: "blue"
    },
    {
      icon: Shield,
      title: "Agroquímicos",
      description: "Protección integral para tus cultivos",
      products: ["Herbicidas", "Fungicidas", "Insecticidas", "Adyuvantes", "Coadyuvantes"],
      color: "red"
    },
    {
      icon: Zap,
      title: "Tecnología",
      description: "Soluciones digitales para agricultura de precisión",
      products: ["Sensores", "Drones", "Software", "GPS", "IoT"],
      color: "purple"
    },
    {
      icon: Wheat,
      title: "Cereales",
      description: "Granos y cereales de primera calidad",
      products: ["Trigo", "Cebada", "Avena", "Centeno", "Arroz"],
      color: "yellow"
    },
    {
      icon: Carrot,
      title: "Horticultura",
      description: "Productos especializados para horticultura",
      products: ["Tomates", "Pimientos", "Lechuga", "Zanahorias", "Cebollas"],
      color: "orange"
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      red: "bg-red-100 text-red-600",
      purple: "bg-purple-100 text-purple-600",
      yellow: "bg-yellow-100 text-yellow-600",
      orange: "bg-orange-100 text-orange-600"
    }
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600"
  }

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Catálogo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos los productos que un productor agropecuario pueda necesitar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getColorClasses(category.color)}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Productos destacados:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, productIndex) => (
                      <span 
                        key={productIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300">
                  Consultar Disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro catálogo se actualiza constantemente. Si necesitás un producto específico, 
              no dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Solicitar Producto
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Descargar Catálogo Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
