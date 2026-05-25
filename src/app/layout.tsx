import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageShell } from "@/components/layout/page-shell";
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
  metadataBase: new URL("https://snltechnology.ng"),
  title: {
    default: "SNL Technology",
    template: "%s | SNL Technology",
  },
  description:
    "Fluid system solutions, monitoring systems, and enterprise software services for upstream, industrial, and critical operations.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://snltechnology.ng",
    siteName: "SNL Technology",
  },
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
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
