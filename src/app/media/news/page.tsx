import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "News | SNL Technology, IFS Partnership & Energy Updates",
  description:
    "Read SNL Technology news, external media coverage, partner updates, and announcements about IFS digital operations, energy-sector transformation, and company milestones.",
  path: "/media/news",
});

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

const externalNews = [
  {
    title:
      "SNL Technology Services CEO, Ladi Soyombo, Shares Insights on SNL and IFS Partnership",
    source: "THISDAYLIVE",
    href: "https://www.thisdaylive.com/2023/05/27/snl-technology-services-ceo-ladi-soyombo-shares-insights-on-snl-and-ifs-partnership/",
  },
  {
    title:
      "Digitizing Nigeria's Oil and Gas Sector: SNL Technology Services and IFS Partner to Transform Upstream Operations Through Digital Technology",
    source: "Nairametrics",
    href: "https://nairametrics.com/2023/05/27/digitizing-nigerias-oil-and-gas-sector-snl-technology-services-and-ifs-partner-to-transform-upstream-operations-through-digital-technology/",
  },
  {
    title:
      "SNL Technology partners with IFS to revolutionise Nigeria's energy landscape",
    source: "APIE Project",
    href: "https://appsaf.apieproject.com/news/2023/05/29/snl-technology-partners-with-ifs-to-revolutionise-nigerias-energy-landscape-an-exclusive-interview-with-snl-techs-ceo-ladi-soyombo/",
  },
  {
    title:
      "SNL Technology partners with IFS to revolutionise Nigeria's energy landscape - An exclusive interview with SNL Tech's CEO, Ladi Soyombo",
    source: "Business Insider Africa",
    href: "https://africa.businessinsider.com/local/markets/an-exclusive-interview-with-snl-techs-ceo-ladi-soyombo/7cgxxp3",
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
        eyebrow="News"
        title="SNL Technology in the media"
        description="External coverage and partner stories about SNL Technology's work in software, digital operations, and energy-sector transformation.">
        <div className="grid gap-5 md:grid-cols-2">
          {externalNews.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {item.source}
              </p>
              <h2 className="mt-3 text-lg font-bold leading-7 text-navy group-hover:text-primary">
                {item.title}
              </h2>
              <p className="mt-5 text-sm font-semibold text-primary">
                Read story
              </p>
            </Link>
          ))}
        </div>
      </Section>

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
