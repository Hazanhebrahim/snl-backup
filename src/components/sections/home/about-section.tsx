import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const focusAreas = [
  {
    label: "Upstream exploration & production",
    detail:
      "Instrumentation, monitoring, fluid systems, and software services for upstream sites.",
  },
  {
    label: "Midstream & infrastructure",
    detail:
      "Pipeline instrumentation, fluid transfer systems, and software services.",
  },
  {
    label: "EPC & industrial projects",
    detail:
      "Engineering support, monitoring systems, and fluid systems for oil, gas, and industrial projects.",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* ── Narrative ──────────────────────────────────────────── */}
          <FadeIn>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              About SNL Technology
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Two decades of upstream and industrial experience
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Founded in 2005 in response to Nigeria&apos;s local content drive,
              SNL Technology has grown into a trusted partner to IOCs,
              indigenous oil companies, EPCs, and industrial businesses.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Our teams combine technical expertise with field experience,
              designing and delivering solutions that perform under real
              high-pressure operating environments.
            </p>
            <div className="mt-8">
              <Button href="/about" label="Our story" variant="secondary" />
            </div>
          </FadeIn>

          {/* ── Focus area list ─────────────────────────────────────── */}
          <FadeIn delay={0.12}>
            <div className="rounded-2xl bg-white p-8 ring-1 ring-muted shadow-lg shadow-primary/5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                Industry focus
              </p>
              <ul className="mt-6 space-y-5">
                {focusAreas.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(245,167,0,0.6)]"
                    />
                    <div>
                      <p className="text-sm font-bold text-navy">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
