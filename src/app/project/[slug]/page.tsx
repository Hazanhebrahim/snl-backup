import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/sections/cms/post-body";
import { getPost } from "@/sanity/cms";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost("project", slug);

  return createMetadata({
    title: post?.seo?.title || post?.title || "Project",
    description: post?.seo?.description || post?.excerpt || "",
    path: `/project/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost("project", slug);

  if (!post) {
    notFound();
  }

  return <PostBody post={post} />;
}
