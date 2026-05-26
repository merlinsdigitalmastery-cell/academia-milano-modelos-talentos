"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react"

export default function Contacto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Integrate with SQL database
    // INSERT INTO contactos (nombre, email, mensaje, fecha)
    // VALUES (?, ?, ?, NOW())
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefono Fijo",
      value: "22 695 6184",
      href: "tel:+56226956184",
    },
    {
      icon: Phone,
      label: "WhatsApp Martin Diaz",
      value: "+56 9 2192 1474",
      href: "https://wa.me/56921921474",
      sublabel: "Gerente de Agencia",
    },
    {
      icon: MapPin,
      label: "Direccion",
      value: "Paseo Bulnes 80, Oficina 94",
      sublabel: "Santiago Centro, Chile",
    },
  ]

  return (
    <section id="contacto" ref={ref} className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-40 h-40 border border-[#d4af37] rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-[#c41e3a] -rotate-12" />
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
            Hablemos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl font-light text-white mt-4 tracking-wide"
          >
            CONTACTANOS
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-[2px] bg-[#d4af37] mx-auto mt-6"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl text-white font-light mb-8">Informacion de Contacto</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-[#d4af37]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs tracking-wider uppercase">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-[#d4af37] transition-colors text-lg"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-lg">{info.value}</p>
                    )}
                    {info.sublabel && (
                      <p className="text-gray-500 text-sm">{info.sublabel}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <h4 className="text-lg text-white font-light mb-4 flex items-center gap-2">
                <MapPin className="text-[#d4af37]" size={18} />
                Donde Estamos Ubicados
              </h4>
              <div className="relative border-2 border-[#d4af37] p-1 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4!2d-70.6506!3d-33.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a5d4c8f8f7%3A0x1234567890abcdef!2sPaseo%20Bulnes%2080%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-[#0a0a0a] p-6 md:p-8 border border-[#2a2a2a]">
                <h3 className="text-2xl text-white font-light mb-8">Envianos un Mensaje</h3>
                
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-xs tracking-widest text-gray-400 uppercase mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#2a2a2a] focus:border-[#d4af37] outline-none transition-all text-white"
                      placeholder="Tu nombre"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.75 }}
                  >
                    <label className="block text-xs tracking-widest text-gray-400 uppercase mb-2">
                      Correo Electronico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#2a2a2a] focus:border-[#d4af37] outline-none transition-all text-white"
                      placeholder="tu@email.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-xs tracking-widest text-gray-400 uppercase mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#2a2a2a] focus:border-[#d4af37] outline-none transition-all text-white resize-none"
                      placeholder="Tu mensaje..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.85 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#d4af37] text-black tracking-widest text-sm uppercase hover:bg-[#f4d47c] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a0a0a] p-10 border border-[#2a2a2a] text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle className="mx-auto text-[#25d366]" size={64} />
                </motion.div>
                <h3 className="text-2xl text-white mt-6 font-light">Mensaje Enviado</h3>
                <p className="text-gray-400 mt-4">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
                <motion.button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ nombre: "", email: "", mensaje: "" })
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 px-6 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all text-sm tracking-wider"
                >
                  Nuevo Mensaje
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
