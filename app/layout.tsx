import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agrodas - Agroservicios del Sur',
  description: 'Representantes de Nidera, miembros de la Red.in. Comercializamos todos los productos que un productor agropecuario pueda necesitar.',
  keywords: 'agropecuario, nidera, red.in, semillas, fertilizantes, agroquímicos, logística, guarda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
