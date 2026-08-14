"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section 
      id="contact" 
      className="relative w-full border-t border-b border-white/[0.08] bg-[#0c0c0e]/95 text-foreground overflow-hidden min-h-[520px] flex items-center pt-10 pb-16 md:pt-12 md:pb-24"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(12,12,14,0.96) 35%, rgba(12,12,14,0.7) 65%, rgba(12,12,14,0.2) 100%), url(/contact-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative Grid tread mesh backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-luminosity"
        style={{
          backgroundImage: "url(/textures/tread-mesh.png)",
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8">
        {/* Card Inner Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full z-10 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Badge Capsule */}
            <div className="self-start inline-flex flex-col rounded-lg border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em]">
              <span className="text-primary">Contact Us</span>
              <span className="text-white mt-0.5">Mechanic Shed</span>
            </div>

            {/* Title & Subtext */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display leading-tight">
                Drop By Our <span className="text-primary">Garage</span>
              </h2>
              <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-md">
                We&apos;d love to hear from you. Visit our garage or send us a message.
              </p>
            </div>

            {/* Contact Information List */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-black shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.3)]">
                  <Phone className="size-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-white/90">+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-black shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.3)]">
                  <Mail className="size-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-white/90">support@garagecrm.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-black shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.3)]">
                  <Globe className="size-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-white/90">www.garagecrm.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-black shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.3)]">
                  <MapPin className="size-4 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-white/90">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex items-center justify-end">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-6 md:p-8 backdrop-blur-md shadow-2xl w-full max-w-[400px]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="grid size-12 place-items-center rounded-full bg-primary/10 border border-primary text-primary mb-4 shadow-[0_0_10px_oklch(0.8_0.16_78_/_0.2)]">
                    <Send className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">Message Sent!</h3>
                  <p className="text-xs text-muted-foreground/80 mt-2">
                    Thanks for getting in touch. We will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary/40 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-primary hover:bg-primary/95 text-black font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_6px_20px_-6px_oklch(0.8_0.16_78_/_0.8)] cursor-pointer mt-2 text-sm"
                  >
                    <span>Send Message</span>
                    <Send className="size-4 stroke-[2.5]" />
                  </motion.button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
