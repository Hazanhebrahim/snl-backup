import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import {
  fluidSystemProducts,
  softwareServices,
  solutionCards,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Outcome-driven solution pathways for upstream, midstream, EPC, and industrial operations.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Built around operational realities"
        description="Our solution architecture is aligned to fluid system integrity, asset reliability, production visibility, and data-driven decision support."
        primaryCta={{ href: "/contact", label: "Discuss your challenges" }}
      />

      <Section
        title="Application tracks"
        description="Each track combines field engineering, fluid systems, monitoring, and software enablement to support measurable improvement.">
        <div className="grid gap-6 md:grid-cols-3">
          {solutionCards.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Product systems"
        title="Swagelok-enabled fluid system reliability"
        description="Product families and assemblies that support safe isolation, regulation, transfer, and measurement in demanding field conditions.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Image
            src="/images/fluid-systems-closeup.png"
            alt="Close-up of stainless steel fluid system valves, tubing, regulators, and manifolds"
            width={1792}
            height={1024}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {fluidSystemProducts.slice(0, 6).map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Digital operations"
        title="IFS-enabled enterprise performance"
        description="Software services that help asset-intensive businesses improve maintenance, reporting, operational intelligence, and business process visibility.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {softwareServices.slice(0, 6).map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <Image
            src="/images/software-operations-center.png"
            alt="Operations center with engineers monitoring production, asset, and reliability dashboards"
            width={1792}
            height={1024}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
        </div>
      </Section>

      <CtaBand
        title="Ready to map your operational challenges to outcomes?"
        description="Let us review your current environment and identify the highest-leverage improvements."
        primaryCta={{ href: "/contact", label: "Start the conversation" }}
        secondaryCta={{ href: "/project", label: "View project capability" }}
      />
    </>
  );
}
