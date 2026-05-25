import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SNL Technology. Book a technical consultation or ask about our services.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start the conversation"
        description="Tell us your operational goals and constraints. Our team will respond with a practical path to execution."
      />

      <Section title="Send us a message">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Lagos office
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                15a Ladipo Omotesho Cole Avenue, Lekki 1<br />
                Lagos, Nigeria
              </p>
              <p className="mt-2 text-sm text-slate-600">{siteConfig.email}</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Port Harcourt office
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Plot 174 Circular Road, Rumuogba Estate
                <br />
                River State, Nigeria
              </p>
              <p className="mt-2 text-sm text-slate-600">{siteConfig.phone}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
