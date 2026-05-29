import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Technical articles from SNL Technology on fluid systems, monitoring, reliability, and operational software.",
};

const articleTopics = [
  {
    title: "Fluid system reliability",
    description:
      "Practical guidance on fittings, valves, regulators, tube routing, and system integrity.",
  },
  {
    title: "Operational visibility",
    description:
      "How monitoring, instrumentation, and data workflows improve maintenance and production decisions.",
  },
  {
    title: "Digital operations",
    description:
      "Asset management, maintenance planning, production data, and business application perspectives.",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Media / Articles"
        title="Useful technical insight for asset-intensive teams"
        description="Articles give SNL Technology a place to explain problems, solutions, and practical decision points across its service portfolio."
      />

      <Section
        title="Article lanes"
        description="These editorial lanes keep future content close to the company’s commercial strengths and customer questions.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-5">
            {articleTopics.map((topic) => (
              <article key={topic.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold text-navy">{topic.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
          <Image
            src="/images/service-swagelok-fluid-systems-generated.jpg"
            alt="Stainless steel fluid-system manifold with valves and gauge"
            width={1536}
            height={1024}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
        </div>
      </Section>
    </>
  );
}
