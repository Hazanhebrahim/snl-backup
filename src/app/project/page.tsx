import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Project",
  description:
    "SNL Technology project capability across fluid systems, monitoring systems, enterprise software, and field engineering.",
};

const projectTracks = [
  {
    title: "Fluid system delivery",
    description:
      "Swagelok product supply, tube fitting selection, manifolds, regulators, valves, and custom assemblies for critical environments.",
  },
  {
    title: "Monitoring systems",
    description:
      "Instrumentation, field-ready monitoring hardware, and visibility solutions for upstream, midstream, and industrial sites.",
  },
  {
    title: "Software enablement",
    description:
      "IFS-aligned asset management, production data, operational intelligence, maintenance, and ERP support.",
  },
  {
    title: "Field support",
    description:
      "Installation guidance, commissioning support, diagnostics, technical training, and operational handover assistance.",
  },
];

const proofPoints = [
  "Upstream and industrial experience since 2005",
  "Authorized Swagelok product support",
  "IFS partnership in Nigeria",
  "Local engineering and delivery presence",
];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Project"
        title="Delivery support for critical operating environments"
        description="SNL Technology supports project teams with practical engineering capability across fluid systems, monitoring, enterprise software, and field execution."
        primaryCta={{ href: "/contact", label: "Discuss a project" }}
      />

      <Section
        title="How project work is organized"
        description="The page now focuses on the work customers need to evaluate: what SNL Technology can deliver, where it fits, and what evidence belongs in future case studies.">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Image
            src="/images/hero-field-operations.png"
            alt="Field engineers inspecting industrial process equipment"
            width={1774}
            height={887}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {projectTracks.map((track) => (
              <article key={track.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold text-navy">{track.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {track.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Project evidence"
        title="What customers should see next"
        description="As approved project information becomes available, this section should carry client sector, scope, products or systems supplied, dates, photos, safety notes, and measurable results.">
        <div className="grid gap-5 md:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold leading-7 text-slate-800">
                {point}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Have a project requirement?"
        description="Share the operating context, project scope, and constraints. Our team will help map the right fluid system, monitoring, or software pathway."
        primaryCta={{ href: "/contact", label: "Contact our team" }}
      />
    </>
  );
}
