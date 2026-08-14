"use client"

import { motion } from "framer-motion"
import { FileText, Database, Receipt, MessageSquareCode } from "lucide-react"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
}

const FEATURES = [
  {
    icon: FileText,
    title: "Digital Job Cards",
    description: "Ditch paperwork. Log visual inspections with vehicle photographs, generate instant estimation cards, and assign mechanics with a single tap.",
  },
  {
    icon: Database,
    title: "Spare Parts Inventory",
    description: "Real-time stock ledger with low-stock alerts, procurement billing, and automated parts consumption tracking linked directly to active jobs.",
  },
  {
    icon: Receipt,
    title: "GST & Split Billing",
    description: "Generate professional tax-compliant invoices. Seamlessly split bills between mechanical labor, detailing packages, and spare parts.",
  },
  {
    icon: MessageSquareCode,
    title: "WhatsApp CRM & Reminders",
    description: "Boost customer retention. Auto-send inspection cards, quotes for approval, payment links, and scheduled service reminder notifications.",
  },
]

export function FeaturesList() {
  return (
    <section 
      id="features" 
      className="relative w-full bg-background px-6 py-16 md:py-24 overflow-hidden border-t border-white/[0.04]"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(10,10,12,0.98) 0%, rgba(10,10,12,0.94) 50%, rgba(10,10,12,0.98) 100%), url(/features-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
      
      {/* Subtle Glow */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex flex-col rounded-lg border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-center mb-6">
            <span className="text-primary">Product Modules</span>
            <span className="text-white mt-0.5">SaaS Features</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl font-display uppercase">
            BUILT TO <span className="text-primary">AUTOMATE</span> YOUR WORKSHOP
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
            Eliminate operational leaks, increase mechanic efficiency, and provide a premium digital experience to your customers with our comprehensive module suite.
          </p>
        </motion.div>

        {/* Features Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {FEATURES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -5, borderColor: "oklch(0.8 0.16 78 / 0.3)" }}
              className="group relative flex gap-5 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/85 p-6 md:p-8 backdrop-blur shadow-lg transition-all duration-300"
            >
              {/* Circular Icon badge */}
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.1)] transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-6 stroke-[2]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white/90">{title}</h3>
                <p className="text-sm text-muted-foreground/75 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
