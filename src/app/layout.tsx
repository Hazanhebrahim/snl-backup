import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageShell } from "@/components/layout/page-shell";
import { defaultSeo, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSeo.title,
    template: "%s | SNL Technology",
  },
  description: defaultSeo.description,
  applicationName: "SNL Technology",
  authors: [{ name: "SNL Technology" }],
  creator: "SNL Technology",
  publisher: "SNL Technology",
  keywords: [
    "SNL Technology",
    "Swagelok reseller Nigeria",
    "IFS partner Nigeria",
    "fluid system solutions Nigeria",
    "enterprise software services Nigeria",
    "monitoring systems",
    "upstream oil and gas",
    "industrial operations",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "SNL Technology",
    images: [
      {
        url: defaultSeo.image,
        width: 1200,
        height: 630,
        alt: "SNL Technology fluid systems and enterprise software services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: [defaultSeo.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SNL Technology",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  foundingDate: "2005",
  description: defaultSeo.description,
  sameAs: ["https://ng.linkedin.com/company/snl-technology"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  knowsAbout: [
    "Fluid system solutions",
    "Monitoring systems",
    "Enterprise software services",
    "Upstream oil and gas operations",
    "Industrial operations",
    "Swagelok products",
    "IFS software",
  ],
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SNL Technology",
  url: siteUrl,
  image: `${siteUrl}${defaultSeo.image}`,
  description: defaultSeo.description,
  address: organizationJsonLd.address,
  areaServed: organizationJsonLd.areaServed,
  sameAs: organizationJsonLd.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationJsonLd,
              professionalServiceJsonLd,
            ]).replace(/</g, "\\u003c"),
          }}
        />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
