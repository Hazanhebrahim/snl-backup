import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "News",
  description:
    "Company news, announcements, and partner updates from SNL Technology.",
};

const newsItems = [
  {
    title: "Company announcements",
    description:
      "Leadership updates, new partnerships, certifications, and business milestones.",
  },
  {
    title: "Operational updates",
    description:
      "Approved project highlights, delivery notes, and service capability announcements.",
  },
  {
    title: "Partner news",
    description:
      "Swagelok and IFS-aligned updates relevant to Nigerian upstream and industrial teams.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Media / News"
        title="News that keeps customers and partners current"
        description="A clean newsroom for approved announcements, partner updates, and operational milestones from SNL Technology."
      />

      <Section
        title="Newsroom structure"
        description="Use this page for timely, factual updates that help customers understand what has changed and why it matters.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-5">
            {newsItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <Image
            src="/images/service-monitoring-systems-generated.jpg"
            alt="Industrial monitoring instrumentation at a process facility"
            width={1536}
            height={1024}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
        </div>
      </Section>
    </>
  );
}
