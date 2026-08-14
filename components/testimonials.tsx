"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "GarageCRM has completely changed the way we manage our garage. Everything is now organized and automated.",
    name: "Rohit Sharma",
    role: "Sharma Auto Works",
    initials: "RS",
  },
  {
    quote:
      "The service tracking and inventory management features are top-notch. Highly recommended for any workshop!",
    name: "Amit Verma",
    role: "Verma Motors",
    initials: "AV",
  },
  {
    quote:
      "Our customer satisfaction has increased and business growth is real. Great work GarageCRM team!",
    name: "Puneet Singh",
    role: "Singh Garage",
    initials: "PS",
  },
  {
    quote:
      "Booking, billing and reminders in one place. My staff picked it up in a day and customers love the updates.",
    name: "Kavya Nair",
    role: "Nair Car Care",
    initials: "KN",
  },
  {
    quote:
      "Reports give me a clear picture of revenue and pending jobs. I finally run my garage on data, not guesswork.",
    name: "Imran Khan",
    role: "Speed Fix Auto",
    initials: "IK",
  },
]

const PER_PAGE = 3

export function Testimonials() {
  const pages = Math.ceil(TESTIMONIALS.length / PER_PAGE)
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setPage((p) => (p + 1) % pages), [pages])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused])

  const start = page * PER_PAGE
  const current = TESTIMONIALS.slice(start, start + PER_PAGE)

  return (
    <section
      className="relative overflow-hidden bg-background pt-8 pb-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* tread mesh backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-luminosity"
        style={{
          backgroundImage: "url(/textures/tread-mesh.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      {/* amber glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Badge Capsule */}
          <div className="inline-flex flex-col rounded-lg border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-left mb-6">
            <span className="text-primary">Testimonial 1</span>
            <span className="text-white mt-0.5">Dark Cards</span>
          </div>

          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl font-display">
            WHAT <span className="text-primary">OUR</span> CLIENTS SAY
          </h2>
          <p className="mt-3 text-pretty text-sm text-muted-foreground/80 sm:text-base">
            Trusted by garage owners across India
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-14 min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-3"
            >
              {current.map((t, i) => (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 p-6 md:p-8 backdrop-blur transition-all duration-300 hover:border-primary/40 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5)] pt-10"
                >
                  {/* Quote badge overlapping top-left corner */}
                  <div className="absolute -top-3.5 left-6 grid size-7 place-items-center rounded-full bg-primary text-black shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.3)] transition-transform duration-300 group-hover:scale-110">
                    <Quote className="size-3.5 fill-current stroke-[2.5]" />
                  </div>
                  
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground/90">
                    {t.quote}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                    <img
                      src="/placeholder-user.jpg"
                      alt={t.name}
                      className="size-10 rounded-full border border-white/10 object-cover"
                    />
                    <span className="flex flex-col">
                      <span className="text-sm font-bold text-white/90">{t.name}</span>
                      <span className="text-xs text-muted-foreground/60">{t.role}</span>
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to testimonials page ${i + 1}`}
              className="group p-1 cursor-pointer"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
