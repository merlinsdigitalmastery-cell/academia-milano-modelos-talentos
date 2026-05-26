"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#talentos", label: "Talentos" },
  { href: "#galeria", label: "Galería" },
  { href: "#postula", label: "Postula" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20" 
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-32 lg:h-36">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                y: [0, -6, 0]
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }
              }}
              className="relative"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden border-[3px] border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.5),0_0_50px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7),0_0_80px_rgba(212,175,55,0.3)] transition-shadow duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-03%20at%207.23.13%20AM-GXy0ncJNiAUUMKI05DyMnXdzChLGu2.jpeg"
                  alt="Milano Talento"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Anillo dorado animado */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#d4af37]/50"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                whileHover={{ 
                  scale: 1.1, 
                  color: "#d4af37",
                  textShadow: "0 0 8px rgba(212, 175, 55, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-[#d4af37] transition-all duration-300 text-xs lg:text-sm tracking-widest uppercase font-light relative group"
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c41e3a] group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#d4af37] relative"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Red Line with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent" 
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-black/98 backdrop-blur-md border-t border-[#2a2a2a] overflow-hidden"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={mobileItemVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 text-white/80 hover:text-[#d4af37] transition-colors duration-300 text-sm tracking-widest uppercase flex items-center gap-3 border-b border-[#1a1a1a]"
                >
                  <motion.span 
                    className="w-2 h-2 bg-[#c41e3a] rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                  />
                  {link.label}
                </motion.a>
              ))}
            </nav>
            
            {/* Mobile menu footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-4 border-t border-[#d4af37]/20"
            >
              <p className="text-[#d4af37] text-xs tracking-widest text-center">
                AGENCIA INTERNACIONAL
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
