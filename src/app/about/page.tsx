import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { LeadershipSection } from "@/components/sections/about/leadership-section";
import { differentiators, leadership, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SNL Technology — 20+ years delivering fluid systems, monitoring systems, and enterprise software services for upstream and industrial operations in Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="The Company"
        title="Technology and fluid system solutions for demanding operations"
        description="SNL Technology supports Nigeria's upstream and industrial sectors with monitoring systems, Swagelok fluid system solutions, IFS software services, and practical field execution."
        primaryCta={{ href: "/contact", label: "Speak with our team" }}
      />

      <Section
        eyebrow="Who we are"
        title="Built for reliable execution in demanding environments"
        description="SNL Technology is a leading provider of monitoring systems, fluid system solutions, and software services to Nigeria's upstream and industrial sectors. As an authorised reseller for Swagelok Sub-Saharan Africa and partner of IFS in Nigeria, the company has supported some of the country's largest and most significant upstream and industrial projects.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Vision</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              To be the preferred partner in empowering upstream and industrial
              companies with reliable fluid and software solutions.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Mission</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              To be an industry leader in providing cutting-edge fluid system
              products and software services to upstream and industrial
              companies in Nigeria.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Core values</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {values.join(", ")}.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Our history"
        title="Two decades of upstream and industrial experience"
        description="Over the decades, SNL Technology has been a trusted partner to IOCs, indigenous oil companies, EPCs, and industrial companies across Nigeria's upstream oil and gas sector.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <Image
              src="/images/hero-field-operations.png"
              alt="Engineers inspecting fluid system instrumentation on an offshore facility"
              width={1792}
              height={1024}
              className="aspect-4/3 h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              The company combines deep technical expertise with field
              experience, designing and delivering solutions that perform under
              real high-pressure operating environments.
            </p>
            <p>
              Today, SNL Technology works across physical fluid systems,
              monitoring systems, and enterprise software services, bringing
              practical execution to complex operational requirements.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Credentials"
        title="Experience and partnerships"
        description="The depth and trust that underpin every engagement.">
        <div className="grid gap-5 sm:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 p-6">
              <p className="text-xl font-semibold tracking-tight text-cyan-700">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Our people"
        title="Management"
        description="The leadership team combines petroleum engineering, mechanical engineering, supply chain, operational execution, and technology transformation experience.">
        <LeadershipSection leaders={leadership} />
      </Section>

      <CtaBand
        title="Want to understand the scope of our work?"
        description="Speak with our engineering team about your specific operational context."
        primaryCta={{ href: "/contact", label: "Get in touch" }}
        secondaryCta={{ href: "/project", label: "View project capability" }}
      />
    </>
  );
}
