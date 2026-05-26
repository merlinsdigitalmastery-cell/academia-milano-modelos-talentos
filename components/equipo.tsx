"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"

const teamMembers = [
  {
    name: "Henrry Klosen",
    role: "Gerente General",
    description: "Visionario y lider en la representacion de talentos y modelos para el mercado profesional nacional e internacional.",
    phone: "+56 9 8259 4046",
    whatsapp: "56982594046",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HENRRY-x2PWhkby99cMXiDF2ENW3NcnjWVuwJ.jpeg",
  },
  {
    name: "Martin Diaz",
    role: "Gerente de Agencia Milano Talento",
    description: "Liderando la agencia hacia nuevas oportunidades en el mercado nacional e internacional.",
    phone: "+56 9 2192 1474",
    whatsapp: "56921921474",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%2004.29.11-H1ZpHcutWPkYk8Wi3whx5Z3gRhlJfJ.jpeg",
  },
]

export default function Equipo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="equipo" ref={ref} className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-[#d4af37] rotate-45" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#d4af37] rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#c41e3a] tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            Liderazgo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-light text-white mt-4 tracking-wide"
          >
            EQUIPO
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-[2px] bg-[#d4af37] mx-auto mt-6"
          />
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Photo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0"
                >
                  {/* Gold frame */}
                  <div className="absolute inset-0 border-2 border-[#d4af37] translate-x-3 translate-y-3 -z-10" />
                  
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-all duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Red accent */}
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#c41e3a]" />
                </motion.div>

                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className="text-2xl md:text-3xl text-white font-light tracking-wide"
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="text-[#d4af37] text-sm tracking-widest uppercase mt-2"
                  >
                    {member.role}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed"
                  >
                    {member.description}
                  </motion.p>
                  
                  {/* Contact */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.2 }}
                    className="mt-6 space-y-2"
                  >
                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-white hover:text-[#25d366] transition-colors group/link"
                    >
                      <span className="w-10 h-10 rounded-full bg-[#25d366]/20 flex items-center justify-center group-hover/link:bg-[#25d366]/30 transition-colors">
                        <Phone size={18} className="text-[#25d366]" />
                      </span>
                      <span className="text-sm">{member.phone}</span>
                      <span className="text-xs text-gray-500">(WhatsApp)</span>
                    </a>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                className="h-[1px] bg-gradient-to-r from-[#d4af37] via-[#d4af37]/50 to-transparent mt-8 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
