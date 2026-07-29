import Link from "next/link";
import type { CmsPost } from "@/sanity/cms";

type PostCardGridProps = {
  posts: CmsPost[];
  emptyMessage: string;
  internalBasePath: string;
  actionLabel?: string;
};

export function PostCardGrid({
  posts,
  emptyMessage,
  internalBasePath,
  actionLabel = "Read story",
}: PostCardGridProps) {
  if (!posts.length) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm leading-7 text-slate-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {posts.map((item) => {
        const href = item.externalUrl || `${internalBasePath}/${item.slug}`;
        const isExternal = Boolean(item.externalUrl);

        return (
          <Link
            key={item._id}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
            {item.source ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-eyebrow">
                {item.source}
              </p>
            ) : null}
            <h2 className="mt-3 text-lg font-bold leading-7 text-navy group-hover:text-primary">
              {item.title}
            </h2>
            {item.excerpt ? (
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.excerpt}
              </p>
            ) : null}
            <p className="mt-5 text-sm font-semibold text-eyebrow underline">
              {isExternal ? actionLabel : "Read more"}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
