"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Phone, MapPin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/milanotalento", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/milanotalento", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/milanotalento", label: "YouTube" },
]

const contacts = [
  { 
    name: "Henry", 
    phone: "+56912345678", 
    role: "Director",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HENRRY-x2PWhkby99cMXiDF2ENW3NcnjWVuwJ.jpeg"
  },
  { 
    name: "Martin", 
    phone: "+56987654321", 
    role: "Coordinador",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MARTIN-tzkOv09JWYMpPR3D5hTanxXMSwzHnU.jpeg"
  },
]

const magazineImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.29-vUKOOI1oO38veYG2kLpHI3B2lWT7yT.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.30%20%281%29-vwfQypvtv8pPRiAWhjZZj6slUlMDe7.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2013.13.14-2dd2TgWxe8kRrXbhU4VEbrokECeLs2.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.30-RtkRNNOwlQHisjo0I66wd1bxS7Lg8Q.jpeg",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Magazine Style Section - Red Background */}
      <div className="bg-gradient-to-br from-[#c41e3a] via-[#a01830] to-[#8b0000] py-10 sm:py-12 relative">
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-64 h-64 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-48 h-48 border border-[#d4af37]/20 rounded-full translate-y-1/2 -translate-x-1/2"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <motion.h3 
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white text-xl sm:text-2xl md:text-3xl font-serif italic tracking-wide"
            >
              Milano Talento Magazine
            </motion.h3>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 sm:w-20 h-[2px] bg-[#d4af37] mx-auto mt-3 sm:mt-4" 
            />
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="col-span-2 sm:col-span-1 flex justify-center order-first sm:order-none"
            >
              <div className="bg-black p-3 sm:p-4 rounded-lg border-2 border-[#d4af37] shadow-xl shadow-black/30">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-03%20at%207.23.13%20AM-GXy0ncJNiAUUMKI05DyMnXdzChLGu2.jpeg"
                  alt="Milano Talento"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </div>
            </motion.div>
            
            {/* 4 Magazine Photos */}
            {magazineImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08, 
                  rotate: index % 2 === 0 ? 3 : -3,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative aspect-[3/4] overflow-hidden border-2 sm:border-4 border-white shadow-2xl cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Milano Talento ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" 
                />
                <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 right-1.5 sm:right-2">
                  <div className="h-[1px] sm:h-[2px] bg-[#d4af37]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold Line with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b]" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-03%20at%207.23.13%20AM-GXy0ncJNiAUUMKI05DyMnXdzChLGu2.jpeg"
                alt="Milano Talento"
                width={200}
                height={70}
                className="h-12 sm:h-16 w-auto object-contain mb-4 sm:mb-6"
              />
            </motion.div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
              Agencia internacional de modelos y talentos que representa y proyecta profesionales en Chile y el mundo. 
              Bailarines, actores, cantantes, modelos y mas. Tu carrera empieza aqui.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.15, backgroundColor: "#d4af37", rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 border border-[#d4af37] flex items-center justify-center text-[#d4af37] hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#d4af37] tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-6">Enlaces</h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Inicio", "Nosotros", "Servicios", "Galeria", "Casting"].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 8, color: "#d4af37" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2"
                  >
                    <motion.span 
                      whileHover={{ width: 12 }}
                      className="w-2 h-[1px] bg-[#d4af37] transition-all" 
                    />
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact with Photos */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[#d4af37] tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-6">Contacto</h3>
            <div className="space-y-3 sm:space-y-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={`https://wa.me/${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 sm:gap-3 p-2 rounded-lg hover:bg-[#1a1a1a] transition-all group border border-transparent hover:border-[#d4af37]/30"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#d4af37] flex-shrink-0 shadow-lg shadow-[#d4af37]/20"
                  >
                    <Image
                      src={contact.image}
                      alt={contact.name}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                  <div className="min-w-0">
                    <span className="text-white font-medium block text-sm sm:text-base">{contact.name}</span>
                    <span className="text-[#d4af37] text-xs">{contact.role}</span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                      <Phone size={9} className="text-[#25d366]" />
                      <span className="text-[#25d366]">WhatsApp</span>
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#2a2a2a]"
            >
              <div className="flex items-start gap-2 text-gray-500 text-xs sm:text-sm mb-2">
                <MapPin size={14} className="text-[#d4af37] mt-0.5 flex-shrink-0" />
                <div>
                  <p>Bulnes 80, Piso 9</p>
                  <p>Santiago, Chile</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <Mail size={14} className="text-[#d4af37] flex-shrink-0" />
                <p>info@milanotalento.cl</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Milano Talento. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center sm:text-left">
            Web desarrollada por <a href="https://merlinsmkt.com" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">Agencia MerlinsMKT</a>
          </p>
          <div className="flex gap-4 sm:gap-6">
            <motion.a 
              href="#" 
              whileHover={{ color: "#d4af37" }}
              className="text-gray-500 hover:text-[#d4af37] text-xs sm:text-sm transition-colors"
            >
              Politica de Privacidad
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ color: "#d4af37" }}
              className="text-gray-500 hover:text-[#d4af37] text-xs sm:text-sm transition-colors"
            >
              Terminos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
