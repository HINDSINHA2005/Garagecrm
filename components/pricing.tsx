"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ShieldAlert } from "lucide-react"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
}

const PLANS = [
  {
    name: "Starter",
    priceMonthly: "₹499",
    priceYearly: "₹399",
    description: "Best for independent mechanics and single-bay workshops.",
    features: [
      "Digital Job Cards",
      "Standard Service Checklists",
      "Tax & GST Billing",
      "1 Active User Account",
      "Offline Database Backups",
    ],
    buttonText: "Start Free Trial",
    recommended: false,
  },
  {
    name: "Pro",
    priceMonthly: "₹1,499",
    priceYearly: "₹1,199",
    description: "Perfect for growing multi-bay garages and detailing centers.",
    features: [
      "Everything in Starter",
      "Live Inventory Control",
      "WhatsApp & SMS CRM Alerts",
      "Split Invoicing & Labor Packages",
      "Staff Commissions Tracker",
      "Up to 5 Active Accounts",
    ],
    buttonText: "Upgrade to Pro",
    recommended: true,
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "Designed for multi-outlet chains and franchise networks.",
    features: [
      "Everything in Pro",
      "Centralized Multi-Store Inventory",
      "Branch-to-Branch Stock Transfers",
      "Advanced Financial Reports",
      "Unlimited User Accounts",
      "Dedicated 24/7 Account Support Manager",
    ],
    buttonText: "Contact Sales",
    recommended: false,
  },
]

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  return (
    <section 
      id="pricing" 
      className="relative w-full bg-background px-6 py-16 md:py-24 overflow-hidden border-t border-white/[0.04]"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(10,10,12,0.98) 0%, rgba(10,10,12,0.94) 50%, rgba(10,10,12,0.98) 100%), url(/pricing-bg.jpg)",
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
      <div className="pointer-events-none absolute left-[10%] top-[30%] h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex flex-col rounded-lg border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-center mb-6">
            <span className="text-primary">Plan Pricing</span>
            <span className="text-white mt-0.5">Subscriptions</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl font-display uppercase">
            FLEXIBLE PLANS FOR <span className="text-primary">EVERY</span> GARAGE
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
            Choose the subscription plan that matches your business scale. Upgrade, downgrade, or cancel at any time.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                billingPeriod === "yearly"
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly <span className="text-[10px] font-bold text-red-500 ml-1">(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch"
        >
          {PLANS.map((plan) => {
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly
            const isCustom = price === "Custom"

            return (
              <motion.div
                key={plan.name}
                variants={item}
                whileHover={{ y: -5 }}
                className={`relative flex flex-col rounded-3xl border bg-[#0c0c0e]/85 p-6 md:p-8 backdrop-blur shadow-lg transition-all duration-300 ${
                  plan.recommended
                    ? "border-primary shadow-[0_12px_36px_-12px_oklch(0.8_0.16_78_/_0.2)]"
                    : "border-white/[0.08] hover:border-white/20"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-[9px] font-extrabold uppercase tracking-widest text-black shadow-[0_4px_12px_oklch(0.8_0.16_78_/_0.3)]">
                    Most Popular
                  </span>
                )}

                <div className="mb-6 space-y-2">
                  <h3 className="text-xl font-extrabold font-display text-white">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground/60 min-h-[32px]">{plan.description}</p>
                </div>

                <div className="mb-6 flex items-baseline gap-1 border-b border-white/[0.06] pb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
                    {price}
                  </span>
                  {!isCustom && (
                    <span className="text-xs text-muted-foreground/50 font-semibold tracking-wider uppercase ml-1">
                      / {billingPeriod === "monthly" ? "month" : "month, billed yearly"}
                    </span>
                  )}
                </div>

                <ul className="mb-8 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                      <Check className="size-4 text-primary shrink-0 mt-0.5 stroke-[3]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer ${
                    plan.recommended
                      ? "bg-primary text-black shadow-[0_6px_20px_-6px_oklch(0.8_0.16_78_/_0.8)]"
                      : "border border-white/10 bg-black/40 hover:bg-white/[0.02] text-white"
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
