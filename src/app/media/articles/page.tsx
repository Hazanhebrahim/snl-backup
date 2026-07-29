import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PostCardGrid } from "@/components/sections/cms/post-card-grid";
import {
  fallbackArticlePosts,
  getCollection,
  getPageMetadata,
} from "@/sanity/cms";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("mediaPage", {
    title: "Articles | Fluid Systems, Monitoring & Digital Operations",
    description:
      "Read SNL Technology technical articles on fluid system reliability, operational visibility, monitoring, maintenance, enterprise asset management, and digital operations.",
    path: "/media/articles",
  });
}

export default async function ArticlesPage() {
  const posts = await getCollection("articlePost", fallbackArticlePosts);

  return (
    <>
      {/* <PageIntro
        eyebrow="Media / Articles"
        title="Useful technical insight for asset-intensive teams"
        description="Articles give SNL Technology a place to explain problems, solutions, and practical decision points across its service portfolio."
      /> */}
      <div className="mt-24"></div>

      <Section
        eyebrow="Articles"
        title="Technical articles coming soon"
        description="This section is reserved for approved SNL Technology articles on fluid systems, monitoring, reliability, enterprise software, and digital operations.">
        <PostCardGrid
          posts={posts}
          emptyMessage="No articles have been published yet."
          internalBasePath="/media/articles"
        />
      </Section>

      {/* <Section
        title="Article lanes"
        description="These editorial lanes keep future content close to the company’s commercial strengths and customer questions.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-5">
            {articleTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-xl border border-slate-200 bg-white p-6">
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
      </Section> */}
    </>
  );
}
