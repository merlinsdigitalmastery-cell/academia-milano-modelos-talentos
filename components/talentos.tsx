"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"

const categories = [
  {
    name: "Modelos",
    talents: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.29-vUKOOI1oO38veYG2kLpHI3B2lWT7yT.jpeg", name: "Miss Mundo Chile" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.30%20%281%29-vwfQypvtv8pPRiAWhjZZj6slUlMDe7.jpeg", name: "Modelo Editorial" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2013.13.14-2dd2TgWxe8kRrXbhU4VEbrokECeLs2.jpeg", name: "Modelo Masculino" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.30-RtkRNNOwlQHisjo0I66wd1bxS7Lg8Q.jpeg", name: "Modelo Comercial" },
    ]
  },
  {
    name: "Actores",
    talents: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.30.44-ZeaOCJdhW9lKHTNOdwHrZePBCWkJtM.jpeg", name: "Elenco Artistico" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29%20%281%29-iqBL2eLYdQe7uu3OHN6FQN5Uu0iKk6.jpg", name: "Actores Juveniles" },
    ]
  },
  {
    name: "Bailarines",
    talents: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-KLcGbjN2w9fwljjArP3bQxG5Bx0qPK.jpg", name: "Bailarina Profesional" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-3jFpkxzf0jA85ammgynodMXppgUUGP.jpg", name: "Pasarela Dance" },
    ]
  },
  {
    name: "Promotores & Anfitriones",
    talents: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-LFsxyZuaBDT2U0TYVsHBWtPGlBo6aP.jpg", name: "Equipo Promocional" },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FERIA%20TEXTIL%20HOTEL%20W%20%281%29%20-%20copia-1Ki2xrfJnxd7bvGXZO5JvpyuqnEi6X.jpeg", name: "Anfitriones Eventos" },
    ]
  },
]

const allCategories = ["Todos", "Modelos", "Actores", "Bailarines", "Cantantes", "Extras TV/Cine", "Anfitriones", "Teams", "Promotores"]

export default function Talentos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("Todos")

  return (
    <section id="talentos" ref={ref} className="py-16 md:py-24 bg-[#f5f0e8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#c41e3a] tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            Nuestro Talento
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-light text-black mt-4 tracking-wide"
          >
            TALENTOS
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-[2px] bg-[#d4af37] mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base"
          >
            Ofrecemos talentos en: bailarines, actores, cantantes, extras de cine y TV, 
            anfitriones, teams, promotores y modelos.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {allCategories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.05 }}
              className={`px-3 md:px-6 py-2 text-xs md:text-sm tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-black text-[#d4af37] border-[#d4af37]"
                  : "bg-transparent text-black border-black/30 hover:border-[#d4af37] hover:text-[#d4af37]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Talent Categories */}
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 + catIndex * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl md:text-2xl font-light text-black mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              {category.name}
              <span className="flex-1 h-[1px] bg-black/10" />
            </h3>
            
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.5}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000 + catIndex * 500,
                disableOnInteraction: false,
              }}
              loop={false}
              className="py-8"
            >
              {category.talents.map((talent, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-black">
                      <Image
                        src={talent.src}
                        alt={talent.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Gold border on hover */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      {/* Name */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <p className="text-white text-sm tracking-wider">{talent.name}</p>
                        <p className="text-[#d4af37] text-xs tracking-widest uppercase mt-1">{category.name}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#postula"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-black text-[#d4af37] border border-[#d4af37] tracking-widest text-sm uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          >
            Postula como Talento
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
