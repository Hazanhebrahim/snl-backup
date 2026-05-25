import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Media",
  description:
    "News, announcements, and media updates from SNL Technology.",
};

const mediaItems = [
  "Company announcements",
  "Technology partner updates",
  "Training and event coverage",
  "Industry commentary",
];

export default function MediaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Media"
        title="News and company updates"
        description="A dedicated home for announcements, partner updates, events, and field stories from SNL Technology."
      />

      <Section
        title="Media categories"
        description="These categories give the business a clean publishing structure once approved posts, photos, and videos are available.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mediaItems.map((item) => (
            <article
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">{item}</h3>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
