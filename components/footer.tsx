"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShieldCheck, 
  Cloud, 
  Headphones, 
  Heart, 
  Send, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Smile, 
  Users, 
  Layers, 
  Database, 
  FileText, 
  RefreshCw, 
  ChevronUp 
} from "lucide-react"
import { Logo } from "@/components/logo"

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.86.24-1.45 1.48-1.45H17V3.98A21 21 0 0 0 14.7 3.9c-2.3 0-3.9 1.4-3.9 4v2.1H8v3h2.8v8h2.7z" />
    </svg>
  )
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
function IconLinkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21h-4V9z" />
    </svg>
  )
}

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Features", "How It Works", "Pricing", "Dashboard", "Updates"] },
  { title: "Modules", links: ["Job Cards", "Live Tracker", "Inventory Control", "GST Billing", "WhatsApp CRM"] },
  { title: "Company", links: ["About Us", "Our Team", "Careers", "Blog", "Contact Us"] },
  { title: "Resources", links: ["Help Center", "Documentation", "Privacy Policy", "Terms & Conditions", "Sitemap"] },
]

const SOCIALS = [
  { icon: IconFacebook, label: "Facebook" },
  { icon: IconInstagram, label: "Instagram" },
  { icon: IconYoutube, label: "YouTube" },
  { icon: IconLinkedin, label: "LinkedIn" },
]

const BADGES = [
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: Cloud, label: "Cloud Based" },
  { icon: Headphones, label: "24/7 Support" },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 26 } },
}

function CheckerStrip() {
  return (
    <div className="flex items-center gap-[3px] opacity-75" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-2 grid-rows-2 size-2.5 shrink-0 overflow-hidden"
        >
          <div className="bg-white" />
          <div className="bg-transparent" />
          <div className="bg-transparent" />
          <div className="bg-white" />
        </div>
      ))}
    </div>
  )
}

function CheckeredFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true" {...props}>
      <defs>
        <pattern id="checkers" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="currentColor" />
          <rect x="3" y="3" width="3" height="3" fill="currentColor" />
        </pattern>
      </defs>
      {/* Background waving flag path (white) */}
      <path
        d="M4 4c3 0 4 2 8 2s5-2 8-2v9c-3 0-5 2-8 2s-5-2-8-2V4z"
        fill="white"
      />
      {/* Checkered pattern path (black squares) */}
      <path
        d="M4 4c3 0 4 2 8 2s5-2 8-2v9c-3 0-5 2-8 2s-5-2-8-2V4z"
        fill="url(#checkers)"
        className="text-black"
      />
      {/* Flagpole */}
      <path d="M4 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const COLUMN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Product: Layers,
  Modules: Database,
  Company: Users,
  Resources: FileText,
}

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <footer className="w-full relative overflow-hidden border-t border-white/[0.08] bg-[#0c0c0e]/95 text-foreground pt-0">
      
      {/* vertical text strip on left side */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-1.5 z-10 [writing-mode:vertical-lr] text-[9px] font-extrabold uppercase tracking-[0.35em] text-primary/30 select-none">
        <span className="size-1 rounded-full bg-primary/30 mb-2" />
        Built For Growth
        <span className="size-1 rounded-full bg-primary/30 mt-2" />
      </div>

      {/* tread mesh wash */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-luminosity"
        style={{ backgroundImage: "url(/textures/tread-mesh.png)", backgroundSize: "200px", backgroundRepeat: "repeat" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto">
        {/* car accent positioned inside max-w-7xl to keep it next to resources/newsletter but bleeding right */}
        <div
          className="pointer-events-none absolute right-[-10rem] top-0 bottom-0 z-0 hidden w-[48rem] bg-cover bg-right bg-no-repeat opacity-[0.98] lg:block"
          style={{
            backgroundImage: "url(/footer-car.png)",
            maskImage: "linear-gradient(to left, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black 88%, transparent)",
          }}
          aria-hidden
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto grid grid-cols-1 gap-10 px-8 pt-8 pb-14 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_2.5fr]"
        >
          {/* brand */}
          <motion.div variants={item} className="space-y-5">
            <a href="/" className="cursor-pointer">
              <Logo />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground/80">
              The complete CRM solution to manage your garage operations efficiently and grow your business faster.
            </p>
            
            {/* Explore GarageCRM button */}
            <div className="pt-1">
              <button className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-primary transition-all duration-300">
                Explore GarageCRM
                <ArrowRight className="size-3.5 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* link columns */}
          {COLUMNS.map((col) => {
            const Icon = COLUMN_ICONS[col.title]
            return (
              <motion.nav key={col.title} variants={item} aria-label={col.title} className="space-y-4">
                <h3 className="font-display text-xs font-800 uppercase tracking-[0.18em] text-white/90 flex items-center gap-2">
                  {Icon && <Icon className="size-4 text-primary shrink-0 stroke-[2.5]" />}
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={link === "Contact Us" ? "#contact" : "#"}
                        className="group flex items-center justify-between w-full text-sm text-muted-foreground transition-colors hover:text-foreground py-0.5"
                      >
                        <span className="flex items-center">
                          <span className="mr-0 h-px w-0 bg-primary transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                          {link}
                        </span>
                        <ChevronRight className="size-3.5 text-muted-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-primary stroke-[2.5]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )
          })}

          {/* stay ahead and rating card */}
          <motion.div variants={item} className="space-y-4 md:col-span-2 xl:col-span-1 z-10 w-full flex flex-col md:flex-row md:items-start gap-6 justify-between xl:col-span-1 xl:ml-auto max-w-[480px]">
            {/* newsletter */}
            <div className="space-y-4 flex-1">
              <h3 className="font-display text-sm font-800 uppercase tracking-wider text-foreground">Stay Ahead</h3>
              <p className="text-sm leading-relaxed text-muted-foreground/80">
                Subscribe to get latest updates and garage management tips.
              </p>
              <form
                className="relative flex items-center w-full max-w-sm rounded-xl border border-white/10 bg-black/60 focus-within:border-primary/40 transition-colors p-1"
                onSubmit={(e: React.FormEvent) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  defaultValue="hindsinha222@gmail.com"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/50"
                />
                <motion.button
                  type="submit"
                  aria-label="Subscribe"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-black transition-transform cursor-pointer"
                >
                  <Send className="size-4" />
                </motion.button>
              </form>
            </div>

            {/* trusted by card */}
            <div className="rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur shadow-md flex flex-col items-center text-center space-y-1.5 shrink-0 w-36 self-stretch md:self-start">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground/80">Trusted By</span>
              <span className="text-2xl font-extrabold font-display text-primary tracking-tight">5000+</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Garages</span>
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-current stroke-none" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-7xl px-8 my-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/50 p-6 md:p-8 backdrop-blur shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5)] items-center">
            {[
              { value: "5000+", label: "Happy Garages", sub: "", icon: Users },
              { value: "2M+", label: "Job Cards", sub: "Created", icon: TrendingUp },
              { value: "98.7%", label: "Customer", sub: "Satisfaction", icon: Smile },
              { value: "24/7", label: "Support", sub: "Available", icon: Headphones },
              { value: "100%", label: "Secure &", sub: "Reliable", icon: ShieldCheck },
            ].map(({ value, label, sub, icon: StatIcon }) => (
              <div key={value + label} className="flex items-center gap-3.5">
                <div className="grid size-10 place-items-center rounded-full bg-primary/10 border border-primary/20 text-primary shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.15)] shrink-0">
                  <StatIcon className="size-5 stroke-[2.5]" />
                </div>
                <div className="leading-tight">
                  <div className="text-xl font-extrabold font-display text-white">{value}</div>
                  <div className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider mt-0.5">{label}</div>
                  {sub && <div className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider leading-none">{sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features & CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-7xl px-8 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Engine Graphic */}
            <div className="lg:col-span-3 flex justify-center">
              <img 
                src="/engine-block.jpg" 
                alt="Futuristic Engine Block" 
                className="w-44 h-44 object-contain rounded-2xl border border-white/10 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] bg-black/40"
              />
            </div>

            {/* Middle: 4 Feature Columns */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              {[
                { title: "Cloud Based", desc: "Access your data anytime, anywhere with secure cloud infrastructure.", icon: Cloud },
                { title: "Auto Backups", desc: "Automatic daily backups to keep your data safe and secure.", icon: ShieldCheck },
                { title: "Real-time Sync", desc: "All your data synchronizes in real-time across all devices.", icon: RefreshCw },
                { title: "Easy Integration", desc: "Seamlessly integrate with existing tools and third-party applications.", icon: Layers },
              ].map(({ title, desc, icon: FeatIcon }) => (
                <div key={title} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <FeatIcon className="size-4 text-primary stroke-[2.5]" />
                    <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">{title}</h4>
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted-foreground/80">{desc}</p>
                </div>
              ))}
            </div>

            {/* Right: CTA Card */}
            <div className="lg:col-span-4">
              <div 
                className="relative rounded-2xl border border-primary/20 bg-black/80 p-6 overflow-hidden min-h-[160px] flex flex-col justify-between shadow-[0_12px_36px_-12px_oklch(0.8_0.16_78_/_0.2)]"
                style={{
                  backgroundImage: "linear-gradient(to right, rgba(12,12,14,0.96) 55%, rgba(12,12,14,0.3) 100%), url(/car-headlights.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="space-y-1.5 relative z-10 max-w-[70%]">
                  <h4 className="text-[11px] font-extrabold text-white uppercase tracking-widest leading-tight">
                    Ready to Transform Your Garage Business?
                  </h4>
                  <p className="text-[10px] text-muted-foreground/80 leading-relaxed">
                    Join thousands of garages already growing with GarageCRM.
                  </p>
                </div>
                <button className="self-start inline-flex items-center gap-1.5 rounded-lg border border-primary bg-primary/10 hover:bg-primary text-primary hover:text-black px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 mt-4 cursor-pointer relative z-10">
                  Start Free Trial
                  <ArrowRight className="size-3 stroke-[2.5]" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* bottom bar */}
      <div className="relative z-10 border-t border-white/[0.06] bg-white/[0.01] py-6">
        <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground/60">
          
          {/* Left: copyright & G Logo */}
          <div className="flex items-center gap-3">
            <div className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.7_0.17_60)] text-black font-extrabold text-xs shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.3)]">
              G
            </div>
            <span>© 2025 GarageCRM. All rights reserved.</span>
          </div>

          {/* Center: Made with heart */}
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="size-3.5 fill-red-600 text-red-600 animate-pulse" />
            <span>for Garages</span>
            <CheckeredFlag className="size-4 text-muted-foreground/80" />
          </div>

          {/* Right: Security badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["ISO 27001 Certified", "GDPR Compliant", "SOC 2 Type II"].map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground/80">
                {badge}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 grid size-10 place-items-center rounded-full bg-primary text-black shadow-[0_6px_20px_oklch(0.8_0.16_78_/_0.4)] hover:scale-105 transition-all cursor-pointer border border-primary/20"
          >
            <ChevronUp className="size-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  )
}
