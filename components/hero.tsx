"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Pagination } from "swiper/modules"
import { useState } from "react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const slides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-3jFpkxzf0jA85ammgynodMXppgUUGP.jpg",
    title: "Pasarela",
    subtitle: "Tu talento merece un escenario.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-LFsxyZuaBDT2U0TYVsHBWtPGlBo6aP.jpg",
    title: "Backstage",
    subtitle: "Representacion profesional integral.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-03%20at%207.23.14%20AM-0c9nkdmhc6KaudK5gNOkp08aps0XvF.jpeg",
    title: "Casting",
    subtitle: "Representacion internacional.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-KLcGbjN2w9fwljjArP3bQxG5Bx0qPK.jpg",
    title: "Editorial",
    subtitle: "Conectamos talentos con marcas.",
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !w-3 !h-3 !bg-white/30 !opacity-100",
          bulletActiveClass: "!bg-[#d4af37] !w-8 !rounded-full",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image with Ken Burns effect */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: activeIndex === index ? 1 : 1.1 }}
                transition={{ duration: 8, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Animated Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" 
              />
              
              {/* Side decorative lines */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "30%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-4 sm:left-8 top-1/3 w-[1px] bg-gradient-to-b from-[#d4af37] to-transparent"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "30%" }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute right-4 sm:right-8 bottom-1/3 w-[1px] bg-gradient-to-t from-[#c41e3a] to-transparent"
              />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
                <motion.div
                  key={`content-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-4xl"
                >
                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-block mb-4 sm:mb-6"
                  >
                    <span className="px-4 sm:px-6 py-2 border border-[#d4af37] text-[#d4af37] text-xs sm:text-sm tracking-[0.3em] uppercase backdrop-blur-sm">
                      {slide.title}
                    </span>
                  </motion.div>
                  
                  {/* Main title with staggered letters */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight px-2"
                  >
                    {slide.subtitle}
                  </motion.h1>
                  
                  {/* Animated line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="w-16 sm:w-24 h-[2px] bg-[#c41e3a] mx-auto mb-6 sm:mb-8"
                  />
                  
                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4"
                  >
                    <motion.a
                      href="#servicios"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 tracking-wider uppercase text-xs"
                    >
                      Ver Servicios
                    </motion.a>
                    <motion.a
                      href="#talentos"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-white/50 text-white hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 tracking-wider uppercase text-xs"
                    >
                      Ver Talentos
                    </motion.a>
                    <motion.a
                      href="#postula"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(196, 30, 58, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-[#c41e3a] text-white hover:bg-[#8b0000] transition-all duration-300 tracking-wider uppercase text-xs"
                    >
                      Postula
                    </motion.a>
                    <motion.a
                      href="#contacto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-white/30 text-white/70 hover:text-white hover:border-white transition-all duration-300 tracking-wider uppercase text-xs"
                    >
                      Contactanos
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide counter */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-4 sm:left-8 z-10 text-white/50 text-sm tracking-widest"
      >
        <span className="text-[#d4af37] text-lg sm:text-2xl font-light">0{activeIndex + 1}</span>
        <span className="mx-2">/</span>
        <span>0{slides.length}</span>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-[#d4af37] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 border-[#d4af37]/30" />
      <div className="absolute bottom-20 sm:bottom-24 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 border-[#c41e3a]/30" />
    </section>
  )
}
