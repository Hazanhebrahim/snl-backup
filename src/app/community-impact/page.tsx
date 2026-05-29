import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "SNL Technology community impact, capability development, local content, and social responsibility initiatives.",
};

const impactAreas = [
  {
    title: "Career development",
    description:
      "Programmes that help young professionals understand technical careers, workplace readiness, and industry expectations.",
  },
  {
    title: "Business empowerment",
    description:
      "Support for enterprise thinking, local capability, and practical pathways into industrial value chains.",
  },
  {
    title: "Technical exposure",
    description:
      "Training-led initiatives that connect community development with engineering, safety, and operational discipline.",
  },
];

const metrics = [
  { label: "Impact anchor", value: "Innovate" },
  { label: "Focus", value: "Youth capability" },
  { label: "Scope", value: "Career + business" },
];

export default function CommunityImpactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Community Impact"
        title="Investing in people, capability, and local opportunity"
        description="SNL Technology’s community impact work should show how the business contributes beyond operations through career development, business empowerment, and technical exposure."
        primaryCta={{ href: "/contact", label: "Partner with us" }}
      />

      <Section
        title="Impact platform"
        description="The business content references Innovate, a non-profit initiative focused on career development and business empowerment for young Nigerians. This page now gives that story a clearer structure.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-xl font-bold text-navy">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                Community impact should connect the company’s technical
                credibility with practical outcomes for people and local
                enterprise.
              </p>
              <p>
                Future updates can add programme dates, beneficiary numbers,
                partners, photos, and measured outcomes as soon as they are
                approved.
              </p>
            </div>
          </div>
          <Image
            src="/images/IMG_8647.jpg"
            alt="SNL Technology team member in safety gear"
            width={1080}
            height={1080}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
        </div>
      </Section>

      <Section
        eyebrow="Focus areas"
        title="Where impact work can show up"
        description="These lanes make it easier to publish real stories while keeping the page aligned with SNL Technology’s operational credibility.">
        <div className="grid gap-5 md:grid-cols-3">
          {impactAreas.map((area) => (
            <article key={area.title} className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-navy">{area.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Have an impact partnership idea?"
        description="Talk to SNL Technology about community, capability, or local-content initiatives that fit our technical mission."
        primaryCta={{ href: "/contact", label: "Start a conversation" }}
      />
    </>
  );
}
