import type { Metadata } from "next";

export const siteUrl = "https://snltechnology.ng";

export const defaultSeo = {
  title: "SNL Technology | Fluid Systems & Enterprise Software Services in Nigeria",
  description:
    "SNL Technology delivers Swagelok fluid system solutions, monitoring systems, and IFS enterprise software services for upstream, industrial, and critical operations in Nigeria.",
  image: "/images/hero-field-operations.png",
};

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = defaultSeo.image,
}: SeoConfig): Metadata {
  const canonical = path;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "SNL Technology",
      type: "website",
      locale: "en_NG",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "SNL Technology fluid systems and enterprise software services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
