"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.2,
        type: "spring",
        stiffness: 100
      }
    })
  }

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Creative Logo Section with Lightning Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Logo with Lightning/Flash Effect */}
            <div className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-black p-6 sm:p-8 rounded-lg overflow-hidden">
              {/* Animated lightning flash lines */}
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={isInView ? { 
                  opacity: [0, 1, 0.5, 1, 0],
                  height: "100%"
                } : {}}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute top-0 left-1/4 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { 
                  opacity: [0, 0.8, 0.3, 0.8, 0]
                } : {}}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
                className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { 
                  opacity: [0, 0.6, 0.2, 0.6, 0]
                } : {}}
                transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
                className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#c41e3a] to-transparent"
              />
              
              {/* Logo */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                className="relative z-10 flex justify-center"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-03%20at%207.23.13%20AM-GXy0ncJNiAUUMKI05DyMnXdzChLGu2.jpeg"
                  alt="Milano Talento Logo"
                  width={280}
                  height={280}
                  className="w-40 sm:w-56 h-40 sm:h-56 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                />
              </motion.div>
              
              {/* Pulsing glow effect behind logo */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-40 sm:w-48 h-40 sm:h-48 bg-[#d4af37]/20 rounded-full blur-3xl" />
              </motion.div>
              
              {/* Small info text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-center mt-4 relative z-10"
              >
                <motion.p 
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[#d4af37] text-xs tracking-[0.3em] uppercase"
                >
                  Agencia Internacional
                </motion.p>
                <p className="text-gray-400 text-xs mt-1">Santiago, Chile</p>
              </motion.div>
              
              {/* Red accent line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent" 
              />
            </div>
            
            {/* Two small photos below */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: 0.7, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="relative aspect-square overflow-hidden border-2 border-[#d4af37] rounded shadow-lg"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29%20%281%29-iqBL2eLYdQe7uu3OHN6FQN5Uu0iKk6.jpg"
                  alt="Modelos Milano Talento"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative aspect-square overflow-hidden border-2 border-[#d4af37] rounded shadow-lg"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-LFsxyZuaBDT2U0TYVsHBWtPGlBo6aP.jpg"
                  alt="Grupo de modelos"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[#d4af37] tracking-[0.3em] uppercase text-xs sm:text-sm inline-block"
            >
              Quienes Somos
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-black mt-4 mb-6"
            >
              Milano <span className="text-[#d4af37]">Talento</span>
            </motion.h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-16 h-[2px] bg-[#c41e3a] mb-6 sm:mb-8 origin-left" 
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg"
            >
              En Agencia Milano Talento formamos y proyectamos talentos desde infantes hasta adultos, 
              preparandolos para el mercado profesional en distintas areas artisticas y de entretenimiento.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg"
            >
              La agencia ya ofrece talentos al mercado y recibe postulaciones de nuevos talentos 
              que buscan oportunidades reales de trabajo y desarrollo en la industria.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg"
            >
              Representamos bailarines, actores, cantantes, extras de cine y TV, anfitriones, 
              teams, promotores y modelos, dandoles oportunidades reales para desarrollarse 
              y proyectarse en la industria.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#postula"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(196, 30, 58, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-[#c41e3a] text-white hover:bg-[#8b0000] transition-all duration-300 tracking-wider uppercase text-sm"
            >
              Postula Ahora
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent" 
      />
    </section>
  )
}
