import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
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
        title="A technical and operational performance partner"
        description="SNL Technology supports Nigeria's upstream and industrial sectors with Swagelok fluid system solutions, IFS software services, monitoring systems, and practical field execution."
        primaryCta={{ href: "/contact", label: "Speak with our team" }}
      />

      <Section
        eyebrow="Who we are"
        title="Built for reliable execution in demanding environments"
        description="Established in 2005, SNL Technology has supported significant upstream and industrial projects by helping operators, EPCs, and industrial clients improve reliability, visibility, and operational performance.">
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
        eyebrow="Our story"
        title="Two decades of upstream and industrial experience"
        description="SNL Technology was founded in response to Nigeria's local content drive in the upstream oil and gas sector. Over the decades, the company has become a trusted partner to IOCs, indigenous oil companies, EPCs, and industrial businesses.">
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
        eyebrow="Leadership"
        title="Management"
        description="The leadership team combines petroleum engineering, mechanical engineering, supply chain, operational execution, and technology transformation experience.">
        <div className="grid gap-6 lg:grid-cols-2">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-xl font-bold tracking-tight text-navy">
                {leader.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-primary">
                {leader.role}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {leader.bio}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want to understand the scope of our work?"
        description="Speak with our engineering team about your specific operational context."
        primaryCta={{ href: "/contact", label: "Get in touch" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
      />
    </>
  );
}
