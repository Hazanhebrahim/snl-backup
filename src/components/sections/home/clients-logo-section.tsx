import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

const clientLogos = [
  {
    name: "Shell",
    src: "/images/clients-logo/shell.png",
  },
  {
    name: "Renaissance",
    src: "/images/clients-logo/renaissance.png",
  },
  {
    name: "Chevron",
    src: "/images/clients-logo/chevron.png",
  },
  {
    name: "TotalEnergies",
    src: "/images/clients-logo/total.png",
  },
  {
    name: "ExxonMobil",
    src: "/images/clients-logo/exon-mobile.png",
  },
  {
    name: "Aradel",
    src: "/images/clients-logo/aradel.png",
  },
  {
    name: "Indorama",
    src: "/images/clients-logo/indorama.jpg",
  },
  {
    name: "NLNG",
    src: "/images/clients-logo/nlng.jpg",
  },
  {
    name: "Baker Hughes",
    src: "/images/clients-logo/baker-hughes.png",
  },
  {
    name: "Seplat",
    src: "/images/clients-logo/seplat.png",
  },
];

export function ClientsLogoSection() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Client Experience
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Trusted across Nigeria&apos;s energy sector
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            SNL Technology has supported operators, industrial companies, and
            project teams across upstream, industrial, and critical operations.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 overflow-hidden">
          <div className="group relative rounded-xl border border-slate-200 bg-slate-50 py-6 shadow-lg shadow-primary/5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-slate-50 to-transparent" />
            <div className="client-logo-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-32 w-64 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 shadow-sm">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={260}
                    height={130}
                    className="max-h-20 w-auto max-w-48 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
