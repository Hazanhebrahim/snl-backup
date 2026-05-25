import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected SNL Technology project capabilities across upstream, midstream, EPC, and industrial operations.",
};

const projectAreas = [
  {
    title: "Upstream Operations",
    description:
      "Instrumentation, monitoring, fluid systems, and software support for production sites and asset teams.",
  },
  {
    title: "Industrial Fluid Systems",
    description:
      "Product selection, assemblies, installation support, and reliability-focused fluid system delivery.",
  },
  {
    title: "Enterprise Software Enablement",
    description:
      "IFS-aligned asset management, production data, operational intelligence, and maintenance workflows.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Project experience across critical operations"
        description="SNL Technology has supported upstream and industrial work for operators, EPCs, and asset-intensive businesses. This page is structured for case studies, approved client references, certifications, and delivery highlights."
        primaryCta={{ href: "/contact", label: "Discuss a project" }}
      />

      <Section
        title="Project capability areas"
        description="Use these tracks to organize approved project summaries as business clears names, images, and measurable outcomes.">
        <div className="grid gap-6 md:grid-cols-3">
          {projectAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof to add"
        title="Recommended project evidence"
        description="The strongest version of this page should include approved client sectors, project dates, scope, supplied products or implemented systems, photos, certifications, safety records, and measurable results.">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Image
            src="/images/hero-field-operations.png"
            alt="Engineers inspecting offshore process instrumentation and fluid systems"
            width={1792}
            height={1024}
            className="aspect-21/9 w-full object-cover"
          />
        </div>
      </Section>

      <CtaBand
        title="Have a project requirement?"
        description="Share the asset context, scope, and operational constraints. Our team will help map the right fluid system, monitoring, or software pathway."
        primaryCta={{ href: "/contact", label: "Contact our team" }}
      />
    </>
  );
}
