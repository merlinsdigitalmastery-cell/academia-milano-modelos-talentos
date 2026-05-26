import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Talentos from "@/components/talentos"
import Gallery from "@/components/gallery"
import Postula from "@/components/postula"
import Equipo from "@/components/equipo"
import Contacto from "@/components/contacto"
import FloatingButtons from "@/components/floating-buttons"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Talentos />
      <Gallery />
      <Postula />
      <Equipo />
      <Contacto />
      <FloatingButtons />
      <Footer />
    </main>
  )
}
