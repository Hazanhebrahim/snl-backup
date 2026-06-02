import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/sections/page-intro";
import { Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Events",
  description:
    "SNL Technology events, technical workshops, training sessions, and industry engagements.",
};

const eventTracks = [
  "Swagelok-focused installation and safety sessions",
  "Monitoring and instrumentation awareness workshops",
  "IFS and operational intelligence briefings",
  "Community and local-content development programmes",
];

const eventLinks = [
  {
    title: "Leadership perspective on energy, oil and gas operations",
    source: "Ladi Soyombo on LinkedIn",
    href: "https://www.linkedin.com/posts/ladi-soyombo-baa83720_energy-oilandgas-ceo-ugcPost-7306268053770506241-THZL/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAARlCPIBBq3BBXzt0yz5I0PErIDcrJ3F7FQ",
  },
  {
    title: "People of SNL Technology and life at SNL Technology update",
    source: "SNL Technology on LinkedIn",
    href: "https://www.linkedin.com/posts/snl-technology_snltechnology-peopleofsnltechnology-lifeatsnltechnology-activity-7348014416560279552-dmwZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAARlCPIBBq3BBXzt0yz5I0PErIDcrJ3F7FQ",
  },
  {
    title: "People of SNL Technology team feature",
    source: "SNL Technology on LinkedIn",
    href: "https://www.linkedin.com/posts/snl-technology_snltechnology-peopleofsnltechnology-lifeatsnltechnology-activity-7358912054780452864-8RDM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAARlCPIBBq3BBXzt0yz5I0PErIDcrJ3F7FQ",
  },
  {
    title:
      "Ladi Soyombo at Lagos Energy Week 2026: The modern energy professional",
    source: "SNL Technology on LinkedIn",
    href: "https://www.linkedin.com/posts/snl-technology_snltechnology-lagosenergyweek2026-lew2026-activity-7431631863326167041-Xwuj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAARlCPIBBq3BBXzt0yz5I0PErIDcrJ3F7FQ",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Media / Events"
        title="Technical sessions, workshops, and industry engagements"
        description="Events should help customers see where SNL Technology is teaching, demonstrating, and participating across the sectors it serves."
        primaryCta={{ href: "/contact", label: "Ask about upcoming events" }}
      />

      <Section
        eyebrow="Events"
        title="Recent event and people updates"
        description="Selected LinkedIn updates covering SNL Technology leadership, people, culture, and industry engagement.">
        <div className="grid gap-5 md:grid-cols-2">
          {eventLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {item.source}
              </p>
              <h2 className="mt-3 text-lg font-bold leading-7 text-navy group-hover:text-primary">
                {item.title}
              </h2>
              <p className="mt-5 text-sm font-semibold text-primary">
                View update
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="Event coverage framework"
        description="This page can carry upcoming sessions, post-event recaps, partner-led programmes, and registration calls when dates are approved.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Image
            src="/images/service-training-generated.jpg"
            alt="Hands-on technical training on a fluid-system manifold"
            width={1536}
            height={1024}
            className="aspect-4/3 w-full rounded-xl object-cover"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {eventTracks.map((track) => (
              <article key={track} className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold leading-7 text-slate-800">
                  {track}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Planning a technical session?"
        description="Contact SNL Technology about training, demonstrations, or partner-led events for your operations team."
        primaryCta={{ href: "/contact", label: "Contact us" }}
      />
    </>
  );
}
