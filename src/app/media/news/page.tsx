import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PostCardGrid } from "@/components/sections/cms/post-card-grid";
import {
  fallbackNewsPosts,
  getCollection,
  getPageMetadata,
} from "@/sanity/cms";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("mediaPage", {
    title: "News | SNL Technology, IFS Partnership & Energy Updates",
    description:
      "Read SNL Technology news, external media coverage, partner updates, and announcements about IFS digital operations, energy-sector transformation, and company milestones.",
    path: "/media/news",
  });
}

export default async function NewsPage() {
  const posts = await getCollection("newsPost", fallbackNewsPosts);

  return (
    <>
      {/* <PageIntro
        eyebrow="Media / News"
        title="News that keeps customers and partners current"
        description="A clean newsroom for approved announcements, partner updates, and operational milestones from SNL Technology."
      /> */}
      <div className="mt-24"></div>

      <Section
        eyebrow="News"
        title="SNL Technology in the news"
        description="External coverage and partner stories about SNL Technology's work in software, digital operations, and energy-sector transformation.">
        <PostCardGrid
          posts={posts}
          emptyMessage="No news posts have been published yet."
          internalBasePath="/media/news"
        />
      </Section>

      {/* <Section
        title="Newsroom structure"
        description="Use this page for timely, factual updates that help customers understand what has changed and why it matters.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-5">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6">
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
      </Section> */}
    </>
  );
}
