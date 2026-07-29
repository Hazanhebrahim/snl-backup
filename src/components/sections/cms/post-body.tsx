import { PortableText } from "@portabletext/react";
import type { CmsPost } from "@/sanity/cms";

type PostBodyProps = {
  post: CmsPost;
};

export function PostBody({ post }: PostBodyProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      {post.source ? (
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-eyebrow">
          {post.source}
        </p>
      ) : null}
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy">
        {post.title}
      </h1>
      {post.excerpt ? (
        <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>
      ) : null}
      <div className="prose prose-slate mt-10 max-w-none">
        {post.body?.length ? (
          <PortableText value={post.body} />
        ) : (
          <p>No body content has been added yet.</p>
        )}
      </div>
    </article>
  );
}
