import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog | Fluid Systems, Reliability & Energy Software Insights",
  description:
    "Read SNL Technology insights on fluid system reliability, asset maintenance, production data management, operational intelligence, hydrocarbon accounting, and local capability building.",
  path: "/blog",
});

const topics = [
  "Fluid system reliability",
  "Asset maintenance and reliability",
  "Production data management",
  "Operational intelligence",
  "Hydrocarbon accounting",
  "Local content and capability building",
];

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Technical insight for energy operations"
        description="A practical publishing area for explainers, project lessons, product guidance, and software operations insight."
      />

      <Section
        title="Recommended topics"
        description="These topic lanes align with the Swagelok and IFS positioning and can support search visibility once the business starts publishing.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic}
              className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">{topic}</h3>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
