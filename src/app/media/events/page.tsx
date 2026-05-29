import type { Metadata } from "next";
import Image from "next/image";
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
