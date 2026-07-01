"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/content/site";

type MobileNavProps = {
  pathname: string;
};

export function MobileNav({ pathname }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(
    pathname.startsWith("/media") ? "/media" : null,
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-white/10">
        {isOpen ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden>
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden>
            <path
              d="M2 4h12M2 8h12M2 12h12"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isOpen ? (
        <div className="fixed inset-x-0 top-16 z-30 border-b border-slate-200 bg-white px-4 py-3 shadow-lg">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              const hasChildren = "children" in link && link.children;

              return hasChildren ? (
                <div key={link.href}>
                  <button
                    type="button"
                    aria-expanded={openDropdown === link.href}
                    aria-haspopup="menu"
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === link.href ? null : link.href,
                      )
                    }
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                    )}>
                    <span className="flex items-center gap-2">
                      {link.label === "Media" ? <MediaIcon /> : null}
                      {link.label}
                    </span>
                    <span
                      className={cn(
                        "transition-transform",
                        openDropdown === link.href && "rotate-180",
                      )}
                      aria-hidden>
                      v
                    </span>
                  </button>
                  {openDropdown === link.href ? (
                    <div role="menu" className="ml-3 mt-1 border-l border-slate-200 pl-3">
                      {link.children.map((child) => {
                        const childActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm transition-colors",
                              childActive
                                ? "bg-primary text-white"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                            )}>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  )}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}

function MediaIcon() {
  return (
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect
        x="2.25"
        y="3.25"
        width="11.5"
        height="9.5"
        rx="1.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.75 6.1v3.8l3.3-1.9-3.3-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
