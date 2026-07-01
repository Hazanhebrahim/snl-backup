import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { AboutSection } from "@/components/sections/home/about-section";
import { ServicesSection } from "@/components/sections/home/services-section";
import { SolutionsSection } from "@/components/sections/home/solutions-section";
import { TrustSection } from "@/components/sections/home/trust-section";
import { PartnersSection } from "@/components/sections/home/partners-section";
import { ClientsLogoSection } from "@/components/sections/home/clients-logo-section";
import { CtaBand } from "@/components/sections/cta-band";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Fluid Systems & Enterprise Software Services in Nigeria",
  description:
    "SNL Technology is an authorised Swagelok reseller and IFS partner delivering fluid system solutions, monitoring systems, and enterprise software services for Nigeria's upstream and industrial sectors.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <SolutionsSection /> */}
      <TrustSection />
      <PartnersSection />
      <ClientsLogoSection />
      <CtaBand
        title="Ready to improve reliability, visibility, or performance?"
        description="Talk to our team about your fluid system requirements, software priorities, or operational constraints. We'll help define a practical delivery path."
        primaryCta={{ href: "/contact", label: "Contact Us" }}
      />
    </>
  );
}
