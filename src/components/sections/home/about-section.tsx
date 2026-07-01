import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { values } from "@/content/site";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* ── Narrative ──────────────────────────────────────────── */}
          <FadeIn>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-eyebrow">
              Our story
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Two decades of upstream and industrial experience
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              SNL Technology was founded in 2005, in response to the drive for
              local content in Nigeria&apos;s upstream oil and gas sector. The
              company over the decades, has been a trusted partner to IOCs,
              Indigenous Oil Companies, EPCs and industrial companies, providing
              its clients with reliable fluid system and software solutions.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Our teams combine deep technical expertise with field experience,
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
                Vision, mission and values
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-bold text-navy">Vision</p>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    To be the preferred partner in empowering upstream and
                    industrial companies with reliable fluid and software
                    solutions.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Mission</p>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    To be an industry leader in providing cutting-edge fluid
                    system products and software services to upstream and
                    industrial companies in Nigeria.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Core values</p>
                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    {values.join(", ")}.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
