import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical insights from SNL Technology on fluid systems, operational intelligence, and enterprise software for energy operations.",
};

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
