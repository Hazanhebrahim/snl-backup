import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.9 },
  { path: "/services", priority: 0.9 },
  { path: "/solutions", priority: 0.85 },
  { path: "/partners", priority: 0.85 },
  { path: "/project", priority: 0.85 },
  { path: "/media", priority: 0.65 },
  { path: "/media/news", priority: 0.65 },
  { path: "/media/events", priority: 0.6 },
  { path: "/media/articles", priority: 0.6 },
  { path: "/community-impact", priority: 0.6 },
  { path: "/blog", priority: 0.5 },
  { path: "/contact", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
