"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import { LogIn, CalendarCheck, Menu, X } from "lucide-react"
import { Logo } from "./logo"

const LINKS = [
  "Home",
  "Features",
  "Pricing",
  "About Us",
]

function ActiveFrame() {
  return (
    <span className="pointer-events-none absolute inset-0">
      {/* glow halo */}
      <span className="absolute inset-0 rounded-[10px] bg-primary/10 shadow-[0_0_18px_-2px_oklch(0.8_0.16_78_/_0.55),inset_0_0_12px_-4px_oklch(0.8_0.16_78_/_0.5)]" />
      {/* inner thin double border */}
      <span className="absolute inset-[3px] rounded-[7px] border border-primary/40" />
      {/* main amber border with mid notches carved via clip */}
      <span className="absolute inset-0 rounded-[10px] border-[1.5px] border-primary" />
      {/* corner brackets */}
      {[
        "left-0 top-0 border-l-2 border-t-2 rounded-tl-[10px]",
        "right-0 top-0 border-r-2 border-t-2 rounded-tr-[10px]",
        "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-[10px]",
        "right-0 bottom-0 border-r-2 border-b-2 rounded-br-[10px]",
      ].map((c) => (
        <span key={c} className={`absolute size-3 border-primary ${c}`} />
      ))}
      {/* mid-edge notch accents */}
      <span className="absolute left-1/2 top-[-1px] h-[2px] w-6 -translate-x-1/2 rounded-full bg-primary/70" />
      <span className="absolute bottom-[-1px] left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-primary/70" />
    </span>
  )
}

export function Navbar() {
  const [active, setActive] = useState("Home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24)
  })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolled ? "oklch(0.19 0.008 60 / 0.85)" : "oklch(0.18 0.008 60 / 0.4)",
        borderColor: scrolled ? "oklch(0.8 0.16 78 / 0.12)" : "oklch(0.32 0.008 60 / 0.15)",
      }}
      transition={{
        y: { type: "spring", stiffness: 90, damping: 18, delay: 0.1 },
        opacity: { duration: 0.3, delay: 0.1 },
        backgroundColor: { duration: 0.3 },
        borderColor: { duration: 0.3 },
      }}
      className="fixed inset-x-0 top-0 z-50 w-full border-b backdrop-blur-xl"
    >
      {/* diamond tread mesh tiled across the full navbar background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.15] mix-blend-luminosity"
        style={{
          backgroundImage: "url(/textures/tread-mesh.png)",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />
      {/* stronger diagonal tread accent bleeding in from the right */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-64 opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage: "url(/textures/tire-tread.png)",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          maskImage: "linear-gradient(to left, black 30%, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black 30%, transparent)",
        }}
        aria-hidden
      />

      {/* subtle garage background on the left and middle side */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-3/4 opacity-[0.22] mix-blend-luminosity"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(12,12,14,0.96) 0%, rgba(12,12,14,0.2) 50%, rgba(12,12,14,0.96) 100%), url(/navbar-garage-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          maskImage: "linear-gradient(to right, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black 60%, transparent)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4.5 sm:px-8">
        <a href="/" className="cursor-pointer">
          <Logo />
        </a>

        {/* desktop links */}
        <ul className="relative z-10 hidden items-center gap-0.5 xl:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className="relative whitespace-nowrap px-3 py-2 text-sm font-semibold transition-colors"
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <ActiveFrame />
                  </motion.span>
                )}
                <span
                  className={`relative z-10 tracking-wide ${
                    active === link
                      ? "text-primary [text-shadow:0_0_12px_oklch(0.8_0.16_78_/_0.6)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* actions */}
        <div className="relative z-10 flex shrink-0 items-center gap-2">
          <button className="hidden items-center gap-2 whitespace-nowrap rounded-xl border border-border bg-surface/60 px-3.5 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary sm:flex">
            <LogIn className="size-4 shrink-0" />
            Login
          </button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 whitespace-nowrap rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.8_0.16_78_/_0.8)] transition-shadow hover:shadow-[0_10px_30px_-6px_oklch(0.8_0.16_78_/_0.95)] sm:flex"
          >
            <CalendarCheck className="size-4 shrink-0" />
            Book Service
          </motion.button>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-xl border border-border bg-surface/60 text-foreground xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute inset-x-4 top-16 rounded-2xl border border-border bg-surface/95 p-4 backdrop-blur-xl xl:hidden"
          >
            <ul className="grid gap-1">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => {
                      setActive(link)
                      setOpen(false)
                    }}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                    }`}
                  >
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-3">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium">
                <LogIn className="size-4" /> Login
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                <CalendarCheck className="size-4" /> Book
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
