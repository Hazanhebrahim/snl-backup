"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { footerLinks, navLinks, siteConfig } from "@/content/site";

type PageShellProps = {
  children: React.ReactNode;
  settings?: typeof siteConfig;
  headerLinks?: typeof navLinks;
  footerNavLinks?: typeof footerLinks;
};

export function PageShell({
  children,
  settings,
  headerLinks,
  footerNavLinks,
}: PageShellProps) {
  const pathname = usePathname();

  return (
    <>
      <SiteHeader pathname={pathname} links={headerLinks} />
      <main className="flex-1">{children}</main>
      <SiteFooter settings={settings} links={footerNavLinks} />
    </>
  );
}
