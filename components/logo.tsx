"use client"

import { motion } from "framer-motion"

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        className="relative grid size-11 place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.7_0.17_60)] shadow-[0_6px_20px_-6px_oklch(0.8_0.16_78_/_0.7)] overflow-visible"
        whileHover={{ rotate: 90 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        aria-hidden
      >
        {/* gear teeth */}
        <div className="absolute inset-0 rounded-full overflow-visible">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-1.5 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-primary-foreground/80"
              style={{ transform: `rotate(${i * 45}deg) translateY(-20px)` }}
            />
          ))}
        </div>
        {/* car glyph */}
        <svg viewBox="0 0 24 24" className="relative size-6 text-primary-foreground" fill="currentColor">
          <path d="M4 13l1.2-3.2A3 3 0 0 1 8 8h8a3 3 0 0 1 2.8 1.8L20 13h.5a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H4a1 1 0 0 1-1-1v-2.5A1.5 1.5 0 0 1 4.5 13H4zm2.2-1h11.6l-.8-2.1a1 1 0 0 0-1-.7H8a1 1 0 0 0-1 .7L6.2 12z" />
        </svg>
      </motion.div>
      {!compact && (
        <div className="leading-none">
          <p className="font-display text-lg font-800 tracking-tight text-foreground">
            Garage<span className="text-primary">CRM</span>
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap">
            Manage. Service. Grow.
          </p>
        </div>
      )}
    </div>
  )
}
