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
        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              const hasChildren = "children" in link && link.children;

              return hasChildren ? (
                <div key={link.href} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isActive}
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 lg:px-4 lg:text-[11px] lg:tracking-[0.16em]",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white",
                    )}>
                    {link.label === "Media" ? <MediaIcon /> : null}
                    <span className="relative z-10">{link.label}</span>

                    {isActive && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 z-0 rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </button>
                  <div
                    role="menu"
                    className="pointer-events-none absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="rounded-xl border border-white/10 bg-navy/95 p-2 shadow-2xl backdrop-blur-xl">
                      {link.children.map((child) => {
                        const childActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className={cn(
                              "block rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white",
                              childActive && "bg-primary text-white",
                            )}>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 lg:px-4 lg:text-[11px] lg:tracking-[0.16em]",
                    isActive ? "text-white" : "text-slate-400 hover:text-white",
                  )}>
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 z-0 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.5,
                      }}
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

function MediaIcon() {
  return (
    <svg
      className="relative z-10 size-3.5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden>
      <rect
        x="2.25"
        y="3.25"
        width="11.5"
        height="9.5"
        rx="1.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M6.75 6.1v3.8l3.3-1.9-3.3-1.9Z" fill="currentColor" />
    </svg>
  );
}
