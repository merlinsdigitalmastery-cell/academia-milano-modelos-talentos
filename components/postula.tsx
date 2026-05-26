"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Upload, CheckCircle, Loader2 } from "lucide-react"

const areasInteres = [
  "Bailarin/a",
  "Actor/Actriz",
  "Cantante",
  "Extra de Cine y TV",
  "Anfitrion/a",
  "Team",
  "Promotor/a",
  "Modelo",
]

export default function Postula() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    ciudad: "",
    area: "",
    instagram: "",
    linkBook: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate SQL submission
    // TODO: Integrate with actual SQL database
    // INSERT INTO postulaciones (nombre, edad, ciudad, area, instagram, link_book, fecha)
    // VALUES (?, ?, ?, ?, ?, ?, NOW())
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="postula" ref={ref} className="py-16 md:py-24 bg-[#f5f0e8] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent" />
      <div className="absolute top-20 right-10 w-32 h-32 border border-[#d4af37]/20 rotate-45 hidden md:block" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-[#c41e3a]/20 -rotate-12 hidden md:block" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Se Parte de Nosotros
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-light text-black mt-4 tracking-wide"
          >
            POSTULA A NUESTRA AGENCIA
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
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Si quieres ser parte de Agencia Milano Talento, completa tu postulacion y envianos tu material. 
            Buscamos talentos con proyeccion para el mercado profesional en distintas areas artisticas y de entretenimiento.
          </motion.p>
        </motion.div>

        {/* Form */}
        {!isSubmitted ? (
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-10 shadow-xl border border-[#d4af37]/20"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nombre */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-black"
                  placeholder="Tu nombre"
                />
              </motion.div>

              {/* Edad */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.85 }}
              >
                <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">
                  Edad *
                </label>
                <input
                  type="number"
                  name="edad"
                  required
                  min="7"
                  max="99"
                  value={formData.edad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-black"
                  placeholder="Tu edad"
                />
              </motion.div>

              {/* Ciudad */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  name="ciudad"
                  required
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-black"
                  placeholder="Tu ciudad"
                />
              </motion.div>

              {/* Area de interes */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.95 }}
              >
                <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">
                  Area de Interes *
                </label>
                <select
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-black"
                >
                  <option value="">Selecciona un area</option>
                  {areasInteres.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </motion.div>

              {/* Instagram */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-black"
                  placeholder="@tuinstagram"
                />
              </motion.div>

              {/* Link Book/Reel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.05 }}
              >
                <label className="block text-xs tracking-widest text-gray-500 uppercase mb-2">
                  Link a Book o Reel
                </label>
                <input
                  type="url"
                  name="linkBook"
                  value={formData.linkBook}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all text-black"
                  placeholder="https://..."
                />
              </motion.div>
            </div>

            {/* Video Upload Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-8 p-6 bg-gray-50 border border-dashed border-[#d4af37]/50 text-center"
            >
              <Upload className="mx-auto text-[#d4af37] mb-3" size={32} />
              <p className="text-gray-600 text-sm">
                Puedes incluir un link a tu video reel o presentacion en el campo anterior
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Formatos aceptados: YouTube, Vimeo, Google Drive, Dropbox
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-8 text-center"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(196, 30, 58, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#c41e3a] to-[#8b0000] text-white tracking-widest text-sm uppercase hover:from-[#8b0000] hover:to-[#c41e3a] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Postulacion
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 shadow-xl border border-[#d4af37]/20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <CheckCircle className="mx-auto text-[#25d366]" size={64} />
            </motion.div>
            <h3 className="text-2xl text-black mt-6 font-light">Postulacion Enviada</h3>
            <p className="text-gray-600 mt-4">
              Gracias por tu interes en Milano Talento. Revisaremos tu postulacion y te contactaremos pronto.
            </p>
            <motion.button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ nombre: "", edad: "", ciudad: "", area: "", instagram: "", linkBook: "" })
              }}
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-6 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all text-sm tracking-wider"
            >
              Nueva Postulacion
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
