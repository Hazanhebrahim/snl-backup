import {
  footerLinks,
  leadership,
  navLinks,
  siteConfig,
} from "@/content/site";
import { sanityFetch } from "./client";
import {
  collectionQuery,
  navigationQuery,
  pageByTypeQuery,
  postBySlugQuery,
  siteSettingsQuery,
  leadersQuery,
} from "./queries";
import { createMetadata } from "@/lib/seo";

export type CmsSeo = {
  title?: string;
  description?: string;
  path?: string;
};

export type CmsPost = {
  _id: string;
  title: string;
  slug?: string;
  excerpt?: string;
  source?: string;
  externalUrl?: string;
  publishDate?: string;
  featured?: boolean;
  image?: unknown;
  body?: unknown[];
  seo?: CmsSeo;
};

export type CmsPage = {
  seo?: CmsSeo;
  intro?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
  };
  sections?: unknown[];
  cta?: {
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export async function getSiteSettings() {
  return (
    (await sanityFetch<typeof siteConfig>(siteSettingsQuery)) || siteConfig
  );
}

export async function getNavigation() {
  return (
    (await sanityFetch<{
      headerLinks?: typeof navLinks;
      footerLinks?: typeof footerLinks;
    }>(navigationQuery)) || { headerLinks: navLinks, footerLinks }
  );
}

export async function getPage(type: string) {
  return sanityFetch<CmsPage>(pageByTypeQuery, { type });
}

export async function getPageMetadata(
  type: string,
  fallback: { title: string; description: string; path: string },
) {
  const page = await getPage(type);

  return createMetadata({
    title: page?.seo?.title || fallback.title,
    description: page?.seo?.description || fallback.description,
    path: page?.seo?.path || fallback.path,
  });
}

export async function getCollection(type: string, fallback: CmsPost[] = []) {
  return sanityFetch<CmsPost[]>(collectionQuery, { type }).then(
    (items) => (items?.length ? items : fallback),
  );
}

export async function getPost(type: string, slug: string) {
  return sanityFetch<CmsPost>(postBySlugQuery, { type, slug });
}

export async function getLeaders() {
  return sanityFetch<typeof leadership>(leadersQuery).then(
    (items) => (items?.length ? items : leadership),
  );
}

export const fallbackNewsPosts: CmsPost[] = [
  {
    _id: "thisday-ifs-partnership",
    title:
      "SNL Technology Services CEO, Ladi Soyombo, Shares Insights on SNL and IFS Partnership",
    source: "THISDAYLIVE",
    externalUrl:
      "https://www.thisdaylive.com/2023/05/27/snl-technology-services-ceo-ladi-soyombo-shares-insights-on-snl-and-ifs-partnership/",
  },
  {
    _id: "nairametrics-digital-oil-gas",
    title:
      "Digitizing Nigeria's Oil and Gas Sector: SNL Technology Services and IFS Partner to Transform Upstream Operations Through Digital Technology",
    source: "Nairametrics",
    externalUrl:
      "https://nairametrics.com/2023/05/27/digitizing-nigerias-oil-and-gas-sector-snl-technology-services-and-ifs-partner-to-transform-upstream-operations-through-digital-technology/",
  },
  {
    _id: "apie-energy-landscape",
    title:
      "SNL Technology partners with IFS to revolutionise Nigeria's energy landscape",
    source: "APIE News",
    externalUrl:
      "https://appsaf.apieproject.com/news/2023/05/29/snl-technology-partners-with-ifs-to-revolutionise-nigerias-energy-landscape-an-exclusive-interview-with-snl-techs-ceo-ladi-soyombo/",
  },
  {
    _id: "business-insider-ifs-interview",
    title:
      "SNL Technology partners with IFS to revolutionise Nigeria's energy landscape - An exclusive interview with SNL Tech's CEO, Ladi Soyombo",
    source: "Business Insider Africa",
    externalUrl:
      "https://africa.businessinsider.com/local/markets/an-exclusive-interview-with-snl-techs-ceo-ladi-soyombo/7cgxxp3",
  },
];

export const fallbackEventPosts: CmsPost[] = [
  {
    _id: "ladi-energy-operations",
    title: "Leadership perspective on energy, oil and gas operations",
    source: "Ladi Soyombo on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/ladi-soyombo-baa83720_energy-oilandgas-ceo-ugcPost-7306268053770506241-THZL/",
  },
  {
    _id: "people-life-at-snl",
    title: "People of SNL Technology and life at SNL Technology update",
    source: "SNL Technology on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/snl-technology_snltechnology-peopleofsnltechnology-lifeatsnltechnology-activity-7348014416560279552-dmwZ",
  },
  {
    _id: "people-team-feature",
    title: "People of SNL Technology team feature",
    source: "SNL Technology on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/snl-technology_snltechnology-peopleofsnltechnology-lifeatsnltechnology-activity-7358912054780452864-8RDM",
  },
  {
    _id: "lagos-energy-week-2026",
    title:
      "Ladi Soyombo at Lagos Energy Week 2026: The modern energy professional",
    source: "SNL Technology on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/snl-technology_snltechnology-lagosenergyweek2026-lew2026-activity-7431631863326167041-Xwuj",
  },
];

export const fallbackArticlePosts: CmsPost[] = [];

export const fallbackCommunityImpactPosts: CmsPost[] = [
  {
    _id: "innovate-2026-punch",
    title: "Navidyn, Tuntunre win $5,000 at Innovate 2026",
    excerpt:
      "Read the Punch coverage of Innovate 2026 and its support for entrepreneurs and emerging business builders.",
    source: "Featured coverage",
    externalUrl: "https://punchng.com/navidyn-tuntunre-win-5000-at-innovate-2026/",
  },
];

export const fallbackProjectPosts: CmsPost[] = [
  {
    _id: "kaduna-refinery-rehabilitation",
    title: "Kaduna Refinery Rehabilitation Project",
    excerpt:
      "Delivered high-performance fluid system components for the rehabilitation of the Kaduna Refining and Petrochemical Company, supporting the integrity and reliability of critical process systems.",
    source: "2024",
  },
  {
    _id: "anoh-spdc",
    title: "Assa North-Ohaji South (ANOH) SPDC Project",
    excerpt:
      "Supported the ANOH development project by supplying high-quality tubing and fittings that contributed to critical fluid control system performance.",
    source: "2024",
  },
  {
    _id: "anoh-gas-pipeline",
    title: "ANOH Gas Transportation Pipeline Project",
    excerpt:
      "Supplied precision-engineered ball valves for the ANOH Gas Transportation Pipeline project executed by Oilserv Limited.",
    source: "2023",
  },
  {
    _id: "chevron-egtl",
    title: "Chevron Escravos Gas-to-Liquids (EGTL) Project",
    excerpt:
      "Delivered tubing, fittings, and valves for Chevron Corporation's EGTL project.",
    source: "2022",
  },
  {
    _id: "wrpc-upgrade",
    title: "WRPC Facility Upgrade Project",
    excerpt:
      "Supplied ball valves for the Warri Refining and Petrochemical Company facility upgrade project.",
    source: "2020",
  },
  {
    _id: "nigerdock-ofon-phase-2",
    title: "Nigerdock OFON Phase 2 Project",
    excerpt:
      "Provided manifolds, tubing, fittings, valves, and gauges for instrumentation and fluid control applications.",
    source: "2014",
  },
];
