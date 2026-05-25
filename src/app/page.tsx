import { HeroSection } from "@/components/sections/home/hero-section";
import { AboutSection } from "@/components/sections/home/about-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { SolutionsSection } from "@/components/sections/home/solutions-section";
import { TrustSection } from "@/components/sections/home/trust-section";
import { PartnersSection } from "@/components/sections/home/partners-section";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <TrustSection />
      <PartnersSection />
      <CtaBand
        title="Ready to improve reliability, visibility, or performance?"
        description="Talk to our team about your fluid system requirements, software priorities, or operational constraints. We'll help define a practical delivery path."
        primaryCta={{ href: "/contact", label: "Book a consultation" }}
        secondaryCta={{ href: "/services", label: "View all services" }}
      />
    </>
  );
}
