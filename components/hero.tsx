"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight, Car, Wrench, Package, Users, BarChart3 } from "lucide-react"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
}

const FEATURES = [
  { icon: Car, label: "Car & Bike", sublabel: "Management" },
  { icon: Wrench, label: "Service", sublabel: "Tracking" },
  { icon: Package, label: "Inventory", sublabel: "Management" },
  { icon: Users, label: "Staff", sublabel: "Management" },
  { icon: BarChart3, label: "Reports &", sublabel: "Analytics" },
]

export function Hero() {
  return (
    <section className="relative w-full bg-background pt-32 pb-8 md:pt-40 md:pb-10 overflow-hidden">
      {/* Full-bleed Hero Background Image with gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[length:auto_130%] bg-right bg-no-repeat opacity-[0.98]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(10,10,12,0.98) 40%, rgba(10,10,12,0.5) 100%), url(/hero-car.png)",
          maskImage: "linear-gradient(to left, black 65%, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black 65%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Grid tread mesh backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] mix-blend-luminosity"
        style={{
          backgroundImage: "url(/textures/tread-mesh.png)",
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />
      
      {/* Amber light glow */}
      <div className="pointer-events-none absolute left-[15%] top-[10%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" aria-hidden="true" />

      {/* Main Wrapper */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6">

        {/* Hero content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text details */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            {/* Badge capsule */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="self-start inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-6"
            >
              <span className="text-primary font-bold">⚙️</span>
              <span>Built for Garages, Made for Growth</span>
            </motion.div>

            {/* Main Header */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-tight uppercase"
            >
              We Handle The <br />
              System, You <br />
              Focus On <span className="text-primary">Service</span>
            </motion.h1>

            {/* Description Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-sm sm:text-base text-muted-foreground/80 max-w-md leading-relaxed"
            >
              Everything you need to run your garage smarter, faster and better.
            </motion.p>

            {/* Interactive Actions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-black shadow-[0_8px_24px_-8px_oklch(0.8_0.16_78_/_0.8)] transition-all hover:shadow-[0_12px_32px_-6px_oklch(0.8_0.16_78_/_0.95)] cursor-pointer"
              >
                Get Started Free <ArrowRight className="size-4 stroke-[2.5]" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.02] cursor-pointer"
              >
                View Demo <Play className="size-4 fill-primary text-primary" />
              </motion.button>
            </motion.div>
          </div>

        </div>

        {/* Feature Cards Grid (at the bottom of the hero section) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-5 mt-16 lg:mt-24 max-w-5xl w-full z-10 relative"
        >
          {FEATURES.map(({ icon: Icon, label, sublabel }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ y: -6, borderColor: "oklch(0.8 0.16 78 / 0.4)" }}
              className="group flex flex-col items-center justify-center text-center rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 p-5 backdrop-blur shadow-lg transition-all duration-300 w-full"
            >
              {/* Circular yellow icon container */}
              <div className="grid size-11 place-items-center rounded-full bg-primary/10 border border-primary/20 text-primary mb-3.5 shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.15)] transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-5" />
              </div>
              
              <span className="text-sm font-bold text-white/90">{label}</span>
              <span className="text-xs text-muted-foreground/60 mt-0.5">{sublabel}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
