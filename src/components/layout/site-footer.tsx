import Link from "next/link";
import { footerLinks, siteConfig } from "@/content/site";

const socialLinks = [
  {
    href: "https://ng.linkedin.com/company/snl-technology",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M6.94 8.98H3.74v10.27h3.2V8.98ZM5.34 4.75a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.91 8.6c0-3.1-1.65-4.54-3.85-4.54a3.32 3.32 0 0 0-3 1.65h-.04V8.98H9.3v10.27h3.2v-5.08c0-1.34.25-2.63 1.91-2.63 1.64 0 1.66 1.53 1.66 2.72v4.99h3.18v-5.9Z" />
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
                target="_blank"
                rel="noreferrer"
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
