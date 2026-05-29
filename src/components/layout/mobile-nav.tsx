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

              return (
                <div key={link.href}>
                  <Link
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
                  {hasChildren ? (
                    <div className="ml-3 mt-1 border-l border-slate-200 pl-3">
                      {link.children.map((child) => {
                        const childActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
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
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
