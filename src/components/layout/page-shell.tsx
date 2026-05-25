"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const pathname = usePathname();

  return (
    <>
      <SiteHeader pathname={pathname} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
