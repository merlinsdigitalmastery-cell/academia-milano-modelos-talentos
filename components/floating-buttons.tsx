"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, UserPlus, ChevronUp } from "lucide-react"
import Image from "next/image"

const contacts = [
  {
    name: "Henry",
    role: "Director",
    phone: "+56912345678",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HENRRY-x2PWhkby99cMXiDF2ENW3NcnjWVuwJ.jpeg",
  },
  {
    name: "Martin",
    role: "Coordinador",
    phone: "+56987654321",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MARTIN-tzkOv09JWYMpPR3D5hTanxXMSwzHnU.jpeg",
  },
]

export default function FloatingButtons() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    const element = document.getElementById("casting")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Main floating buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3 sm:gap-4">
        {/* Scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 border border-[#d4af37] rounded-full flex items-center justify-center text-[#d4af37] shadow-lg backdrop-blur-sm"
              aria-label="Volver arriba"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Register Button */}
        <motion.button
          onClick={scrollToForm}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#c41e3a] to-[#8b0000] rounded-full flex items-center justify-center text-white shadow-lg red-glow border border-[#d4af37] relative overflow-hidden"
          aria-label="Inscribirme"
        >
          <UserPlus size={20} className="sm:w-6 sm:h-6 relative z-10" />
          {/* Shine effect */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </motion.button>

        {/* WhatsApp Button */}
        <div className="relative">
          <AnimatePresence>
            {isWhatsAppOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute bottom-14 sm:bottom-16 right-0 bg-black/95 backdrop-blur-md border border-[#d4af37] rounded-xl shadow-2xl overflow-hidden w-64 sm:w-72"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] px-4 py-3 border-b border-[#2a2a2a]"
                >
                  <p className="text-[#d4af37] text-xs sm:text-sm tracking-wider uppercase font-medium">Contactar por WhatsApp</p>
                </motion.div>
                <div className="p-2">
                  {contacts.map((contact, index) => (
                    <motion.a
                      key={contact.name}
                      href={`https://wa.me/${contact.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 p-2.5 sm:p-3 hover:bg-[#1a1a1a] rounded-lg transition-all border border-transparent hover:border-[#d4af37]/30"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#d4af37] relative shadow-lg shadow-[#d4af37]/20"
                      >
                        <Image
                          src={contact.image}
                          alt={contact.name}
                          fill
                          className="object-cover object-top"
                        />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm sm:text-base">{contact.name}</p>
                        <p className="text-[#d4af37] text-xs sm:text-sm">{contact.role}</p>
                        <p className="text-gray-400 text-xs flex items-center gap-1.5 mt-0.5">
                          <motion.span 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 bg-[#25d366] rounded-full"
                          />
                          Disponible
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-lg border border-[#d4af37] relative overflow-hidden"
            aria-label="WhatsApp"
          >
            <motion.div
              animate={isWhatsAppOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isWhatsAppOpen ? <X size={22} /> : <MessageCircle size={22} />}
            </motion.div>
            
            {/* Pulse animation */}
            {!isWhatsAppOpen && (
              <motion.span
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-[#25d366]"
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile bottom navigation hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c41e3a] via-[#d4af37] to-[#c41e3a] sm:hidden z-30"
      />
    </>
  )
}
