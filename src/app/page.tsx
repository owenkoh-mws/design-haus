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
      <div id="services">
        <ServicesSection />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="partners">
        <PartnersSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  )
}
