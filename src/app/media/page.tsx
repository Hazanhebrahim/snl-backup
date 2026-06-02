import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Media | SNL Technology News, Events & Articles",
  description:
    "Explore SNL Technology media updates, news coverage, events, LinkedIn updates, and technical articles on fluid systems, monitoring, enterprise software, and community impact.",
  path: "/media",
});

const mediaChannels = [
  {
    title: "News",
    href: "/media/news",
    image: "/images/service-monitoring-systems-generated.jpg",
    description:
      "Company announcements, partner updates, project milestones, and operational notices.",
  },
  {
    title: "Events",
    href: "/media/events",
    image: "/images/service-training-generated.jpg",
    description:
      "Training sessions, technical workshops, partner events, and industry appearances.",
  },
  {
    title: "Articles",
    href: "/media/articles",
    image: "/images/service-swagelok-fluid-systems-generated.jpg",
    description:
      "Practical insight on fluid systems, monitoring, reliability, and digital operations.",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Media"
        title="Stories, updates, and technical perspective"
        description="A focused publishing hub for SNL Technology news, events, and articles. Each channel is structured so the business can add approved stories, photos, and field updates over time."
      />

      <Section
        title="Media channels"
        description="Choose the right lane for announcements, event coverage, and technical thought leadership.">
        <div className="grid gap-6 lg:grid-cols-3">
          {mediaChannels.map((channel) => (
            <Link
              key={channel.href}
              href={channel.href}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <Image
                  src={channel.image}
                  alt=""
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-bold text-navy group-hover:text-primary">
                  {channel.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {channel.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Editorial focus"
        title="What belongs in media"
        description="The strongest media section will make SNL Technology feel active, credible, and technically useful without overpromising unpublished details.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Field delivery updates with approved project context",
            "Training recaps and upcoming technical sessions",
            "Short articles that explain reliability, visibility, and maintenance decisions",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold leading-7 text-slate-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
