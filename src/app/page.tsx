import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { PartnersSection } from "@/components/sections/PartnersSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <PortfolioSection />
      <PartnersSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
