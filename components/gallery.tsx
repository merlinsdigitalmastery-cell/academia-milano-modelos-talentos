"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { X } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-eKEHxBvj8bLSRZloKykT7IhSEPDuFJ.jpg",
    alt: "Modelos vestido rojo pasarela",
    category: "Pasarela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.29-vUKOOI1oO38veYG2kLpHI3B2lWT7yT.jpeg",
    alt: "Miss Mundo Chile",
    category: "Concursos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.30%20%281%29-vwfQypvtv8pPRiAWhjZZj6slUlMDe7.jpeg",
    alt: "Modelo vestido blanco elegante",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%2004.29.11-H1ZpHcutWPkYk8Wi3whx5Z3gRhlJfJ.jpeg",
    alt: "Modelo masculino elegante",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.30-RtkRNNOwlQHisjo0I66wd1bxS7Lg8Q.jpeg",
    alt: "Modelo cabello rizado",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.30.44-ZeaOCJdhW9lKHTNOdwHrZePBCWkJtM.jpeg",
    alt: "Trio de modelos artistico",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-13%20at%2011.29.30%20%282%29-ZyunDpLTrPBJ20vqPJUAkS1j1ClzRb.jpeg",
    alt: "Modelo fashion",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-3jFpkxzf0jA85ammgynodMXppgUUGP.jpg",
    alt: "Pasarela Milano Models",
    category: "Pasarela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-vFeKGSwEnKhCEnbaPxZXnImIOvAr0O.jpg",
    alt: "Modelo en pasarela azul",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-UO6ti5t2RcgoHiz8SQ7t5jvcMvJGwa.jpg",
    alt: "Modelo con vestido rojo",
    category: "Pasarela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-g4YInYSm7sSzKlDR3ymmDWKX5eRVcH.jpg",
    alt: "Fashion artistico",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FERIA%20TEXTIL%20HOTEL%20W%20%281%29%20-%20copia-1Ki2xrfJnxd7bvGXZO5JvpyuqnEi6X.jpeg",
    alt: "Feria textil",
    category: "Eventos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-KLcGbjN2w9fwljjArP3bQxG5Bx0qPK.jpg",
    alt: "Modelo en pasarela plateada",
    category: "Pasarela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29%20%281%29-iqBL2eLYdQe7uu3OHN6FQN5Uu0iKk6.jpg",
    alt: "Modelos juveniles",
    category: "Editorial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIEGO%20-3NMh50pzOm1JamddMiJYKFtTgQ5F4V.jpg",
    alt: "Ganadoras con trofeo",
    category: "Eventos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-LFsxyZuaBDT2U0TYVsHBWtPGlBo6aP.jpg",
    alt: "Grupo de modelos",
    category: "Editorial",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-0 w-96 h-96 border border-[#d4af37]/10 rounded-full"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-0 w-72 h-72 border border-[#c41e3a]/10 rounded-full"
      />
      
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
            className="text-[#d4af37] tracking-[0.3em] uppercase text-xs sm:text-sm"
          >
            Nuestro Trabajo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-4 mb-6"
          >
            <span className="text-[#d4af37]">Galeria</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-[2px] bg-[#c41e3a] mx-auto" 
          />
        </motion.div>

        {/* Desktop Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                zIndex: 10,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 || index === 5 ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-6"
                >
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-[#d4af37] text-sm tracking-widest uppercase mb-2"
                  >
                    {image.category}
                  </motion.span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-8 h-[1px] bg-[#c41e3a]" 
                  />
                </motion.div>
                
                {/* Border animation */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-2 border-2 border-[#d4af37]" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={12}
            slidesPerView={1.15}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !w-2 !h-2 !bg-white/30",
              bulletActiveClass: "!bg-[#d4af37] !w-4",
            }}
            loop={false}
            className="pb-12"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedImage(image.src)}
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-active:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
                    <motion.span 
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-[#d4af37] text-xs tracking-widest uppercase block mb-1"
                    >
                      {image.category}
                    </motion.span>
                    <div className="w-8 h-[1px] bg-[#c41e3a]" />
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-[#d4af37]/50" />
                  <div className="absolute bottom-14 right-3 w-4 h-4 border-r-2 border-b-2 border-[#c41e3a]/50" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-4xl w-full aspect-[3/4] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain"
              />
              <motion.button
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 border border-[#d4af37] text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-colors"
              >
                <X size={20} />
              </motion.button>
              
              {/* Frame corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#d4af37]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#d4af37]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#c41e3a]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#c41e3a]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
