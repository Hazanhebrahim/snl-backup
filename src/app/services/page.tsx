import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import {
  fluidSystemProducts,
  serviceCards,
  softwareServices,
} from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services | Swagelok Fluid Systems, Monitoring & IFS Software",
  description:
    "SNL Technology provides Swagelok tube fittings, valves, regulators, tubing, manifolds, custom assemblies, monitoring systems, field engineering, training, and IFS software services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Fluid systems, software services, and value-added support"
        description="From Swagelok components and assemblies to IFS implementation and operational intelligence, SNL Technology supports reliability and performance across upstream, industrial, and critical operations."
        primaryCta={{ href: "/contact", label: "Request service consultation" }}
      />

      <Section
        title="Core service portfolio"
        description="Structured offerings built for field realities, production-critical timelines, and long-term asset performance.">
        <div className="grid gap-8 lg:grid-cols-2">
          {serviceCards.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-muted bg-white shadow-xl shadow-primary/5 transition-all hover:-translate-y-1 hover:border-primary/30">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Swagelok"
        title="Fluid system solutions"
        description="Authorized Swagelok product resale and technical support for high-pressure, high-reliability operating environments.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fluidSystemProducts.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="IFS"
        title="Enterprise software services"
        description="Implementation and advisory services that help operations teams improve asset reliability, production visibility, and business workflows.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {softwareServices.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure which service fits your situation?"
        description="Our team will help you scope the right intervention based on your asset profile and production priorities."
        primaryCta={{ href: "/contact", label: "Request a consultation" }}
      />
    </>
  );
}
