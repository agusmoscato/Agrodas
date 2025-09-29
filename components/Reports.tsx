import { FileText, Download, Calendar, TrendingUp, BarChart3, Globe } from 'lucide-react'

export default function Reports() {
  const reports = [
    {
      title: "Reporte de Mercado - Diciembre 2024",
      description: "Análisis completo del mercado agropecuario, tendencias de precios y proyecciones para el próximo trimestre",
      date: "15 de Diciembre, 2024",
      type: "Mercado",
      downloads: 234,
      icon: TrendingUp
    },
    {
      title: "Guía de Aplicación de Fertilizantes",
      description: "Manual técnico con recomendaciones para la aplicación eficiente de fertilizantes en diferentes cultivos",
      date: "10 de Diciembre, 2024",
      type: "Técnico",
      downloads: 189,
      icon: FileText
    },
    {
      title: "Análisis de Rendimientos 2024",
      description: "Estadísticas comparativas de rendimientos por región y cultivo, con recomendaciones para 2025",
      date: "5 de Diciembre, 2024",
      type: "Análisis",
      downloads: 156,
      icon: BarChart3
    },
    {
      title: "Boletín Climático - Noviembre",
      description: "Pronóstico climático y recomendaciones para el manejo de cultivos según las condiciones meteorológicas",
      date: "28 de Noviembre, 2024",
      type: "Clima",
      downloads: 278,
      icon: Globe
    },
    {
      title: "Catálogo de Semillas 2025",
      description: "Nuevas variedades de semillas Nidera disponibles para la próxima campaña con características técnicas",
      date: "20 de Noviembre, 2024",
      type: "Catálogo",
      downloads: 312,
      icon: FileText
    },
    {
      title: "Reporte de Precios Internacionales",
      description: "Análisis de precios de commodities en mercados internacionales y su impacto en el mercado local",
      date: "15 de Noviembre, 2024",
      type: "Internacional",
      downloads: 198,
      icon: TrendingUp
    }
  ]

  const getTypeColor = (type: string) => {
    const colorMap = {
      "Mercado": "bg-blue-100 text-blue-600",
      "Técnico": "bg-green-100 text-green-600",
      "Análisis": "bg-purple-100 text-purple-600",
      "Clima": "bg-yellow-100 text-yellow-600",
      "Catálogo": "bg-red-100 text-red-600",
      "Internacional": "bg-indigo-100 text-indigo-600"
    }
    return colorMap[type as keyof typeof colorMap] || "bg-gray-100 text-gray-600"
  }

  return (
    <section id="informacion-reportes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Información y Reportes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado con nuestros reportes técnicos y análisis de mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <report.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(report.type)}`}>
                    {report.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {report.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {report.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{report.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{report.downloads} descargas</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Suscríbete a nuestro boletín
            </h3>
            <p className="text-lg text-gray-600">
              Recibe nuestros reportes y análisis directamente en tu correo
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Suscribirse
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              No compartimos tu información. Puedes cancelar la suscripción en cualquier momento.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Reportes Mensuales</h4>
            <p className="text-gray-600">Análisis detallados del mercado agropecuario</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Tendencias de Precios</h4>
            <p className="text-gray-600">Seguimiento de precios de commodities</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Análisis Global</h4>
            <p className="text-gray-600">Perspectivas del mercado internacional</p>
          </div>
        </div>
      </div>
    </section>
  )
}
