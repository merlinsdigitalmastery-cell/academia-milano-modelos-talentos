"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Camera, Users, Globe, Star, Building2, Clapperboard, Megaphone } from "lucide-react"

const services = [
  {
    icon: Star,
    title: "Talentos que Representamos",
    description: "Bailarines, actores, cantantes, extras de cine y TV, anfitriones, teams, promotores y modelos profesionales.",
  },
  {
    icon: Building2,
    title: "Servicios para Empresas",
    description: "Proveemos talentos para eventos, activaciones de marca, teams, mineras, marcas retail, cine y medios de comunicacion.",
  },
  {
    icon: Clapperboard,
    title: "Casting y Seleccion",
    description: "Casting y seleccion profesional para campanas, producciones audiovisuales, eventos y proyectos comerciales.",
  },
  {
    icon: Megaphone,
    title: "Agencias de Publicidad",
    description: "Trabajamos con agencias de publicidad proporcionando talentos para campanas ATL, BTL y digitales.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c41e3a]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.3em] uppercase text-xs sm:text-sm inline-block"
          >
            Lo Que Ofrecemos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-4 mb-6"
          >
            Nuestros <span className="text-[#d4af37]">Servicios</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-[2px] bg-[#c41e3a] mx-auto mb-6 sm:mb-8" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4"
          >
            La agencia ya ofrece talentos al mercado y recibe postulaciones. 
            Ofrecemos servicios de talentos para eventos, marcas, teams, mineras, 
            marcas retail, cine, medios de comunicacion y agencias de publicidad.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-[#0a0a0a] p-6 sm:p-8 border border-[#2a2a2a] hover:border-[#d4af37] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#c41e3a]/10"
              />
              
              {/* Top accent line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#c41e3a] via-[#d4af37] to-[#c41e3a]" 
              />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6 flex items-center justify-center border border-[#d4af37] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300"
              >
                <service.icon size={24} className="sm:w-7 sm:h-7" />
              </motion.div>
              
              {/* Content */}
              <h3 className="relative text-lg sm:text-xl font-light text-white mb-3 sm:mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
              
              {/* Bottom corner accent */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#c41e3a]" 
              />
              
              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 shadow-[inset_0_0_30px_rgba(212,175,55,0.1)] pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
