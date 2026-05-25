import Link from "next/link";
import { footerLinks, siteConfig } from "@/content/site";

const socialLinks = [
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M6.94 8.98H3.74v10.27h3.2V8.98ZM5.34 4.75a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.91 8.6c0-3.1-1.65-4.54-3.85-4.54a3.32 3.32 0 0 0-3 1.65h-.04V8.98H9.3v10.27h3.2v-5.08c0-1.34.25-2.63 1.91-2.63 1.64 0 1.66 1.53 1.66 2.72v4.99h3.18v-5.9Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="m13.83 10.59 5.76-6.67h-1.36l-5 5.79-4-5.79H4.63l6.04 8.74-6.04 7h1.36l5.29-6.12 4.22 6.12h4.6l-6.27-9.07Zm-1.87 2.17-.61-.87-4.87-6.95h2.1l3.94 5.62.61.87 5.1 7.29h-2.1l-4.17-5.96Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M21.58 7.19a2.67 2.67 0 0 0-1.88-1.88C18.04 4.87 12 4.87 12 4.87s-6.04 0-7.7.44a2.67 2.67 0 0 0-1.88 1.88A27.8 27.8 0 0 0 1.98 12c0 1.68.15 3.36.44 4.81.25.91.97 1.63 1.88 1.88 1.66.44 7.7.44 7.7.44s6.04 0 7.7-.44a2.67 2.67 0 0 0 1.88-1.88c.29-1.45.44-3.13.44-4.81 0-1.68-.15-3.36-.44-4.81ZM9.99 15.08V8.92L15.25 12l-5.26 3.08Z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300">
            {siteConfig.name}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300">
            Navigation
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300">
            Contact
          </p>
          <p className="mt-4 text-sm text-slate-300">{siteConfig.phone}</p>
          <p className="mt-2 text-sm text-slate-300">{siteConfig.email}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-slate-300 transition-colors hover:border-cyan-300 hover:text-white">
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Copyright {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
