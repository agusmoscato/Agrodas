import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Catalog from '@/components/Catalog'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Reports from '@/components/Reports'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Catalog />
      <Services />
      <Testimonials />
      <Reports />
      <Contact />
      <Footer />
    </main>
  )
}
