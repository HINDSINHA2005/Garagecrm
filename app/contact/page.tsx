"use client"

import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background pt-24 overflow-hidden">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
