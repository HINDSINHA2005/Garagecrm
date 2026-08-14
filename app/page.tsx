import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesList } from "@/components/features-list"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <FeaturesList />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
