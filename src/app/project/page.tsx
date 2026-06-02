import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects | Energy Sector Fluid System Delivery in Nigeria",
  description:
    "Explore SNL Technology project experience across Kaduna Refinery, ANOH, Chevron EGTL, WRPC, OFON Phase 2, fluid systems, monitoring systems, and IFS software delivery.",
  path: "/project",
});

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

const deliveredProjects = [
  {
    title: "Kaduna Refinery Rehabilitation Project",
    year: "2024",
    description:
      "Delivered high-performance fluid system components for the rehabilitation of the Kaduna Refining and Petrochemical Company, supporting the integrity and reliability of critical process systems.",
  },
  {
    title: "Assa North-Ohaji South (ANOH) SPDC Project",
    year: "2024",
    description:
      "Supported the ANOH development project by supplying high-quality tubing and fittings that contributed to the integrity, reliability, and performance of critical fluid control systems for the Shell Petroleum Development Company.",
  },
  {
    title: "ANOH Gas Transportation Pipeline Project",
    year: "2023",
    description:
      "Supplied precision-engineered ball valves for the ANOH Gas Transportation Pipeline project executed by Oilserv Limited, supporting safe and reliable flow control across critical gas infrastructure.",
  },
  {
    title: "Chevron Escravos Gas-to-Liquids (EGTL) Project",
    year: "2022",
    description:
      "Delivered tubing, fittings, and valves for Chevron Corporation's EGTL project, supporting efficient and dependable fluid system performance.",
  },
  {
    title: "WRPC Facility Upgrade Project",
    year: "2020",
    description:
      "Supplied ball valves for the facility upgrade project executed by Reliant Overseas Limited at the Warri Refining and Petrochemical Company, contributing to improved operational efficiency and reliability.",
  },
  {
    title: "Nigerdock OFON Phase 2 Project",
    year: "2014",
    description:
      "Provided manifolds, tubing, fittings, valves, and gauges for instrumentation and fluid control applications on the OFON Phase 2 project, supporting safe, reliable, and efficient operations.",
  },
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
        eyebrow="Projects"
        title="Delivering performance across Nigeria's energy sector"
        description="For over two decades, SNL Technology has supported major energy projects with world-class fluid system solutions and enterprise software capabilities that enhance safety, reliability, and operational performance.">
        <div className="grid gap-5 md:grid-cols-2">
          {deliveredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-bold text-navy">
                  {project.title}
                </h2>
                <span className="shrink-0 rounded-md bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {project.year}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Technology & software solutions"
        title="Enterprise software for operational visibility"
        description="As the local partner of IFS in Nigeria, SNL Technology delivers enterprise software solutions that help upstream energy operators optimize production, improve asset performance, strengthen operational visibility, and make faster, data-driven decisions across their operations.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Production optimization",
            "Asset performance",
            "Operational intelligence",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold leading-7 text-slate-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

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
