"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/mobile-nav";

type SiteHeaderProps = {
  pathname: string;
};

export function SiteHeader({ pathname }: SiteHeaderProps) {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4 sm:px-10">
      <nav className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-navy/90 pl-6 pr-3 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/30">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-80">
          <Image
            src="/images/logo.png"
            alt="SNL Technology Logo"
            width={160}
            height={48}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 md:flex lg:gap-4">
          <div className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200",
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  )}>
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 z-0 rounded-full bg-primary"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Nav area */}
        <div className="flex items-center md:hidden">
          <MobileNav pathname={pathname} />
        </div>
      </nav>
    </header>
  );
}
