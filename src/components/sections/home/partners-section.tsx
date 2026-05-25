import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const partnerCapabilities = [
  {
    label: "Swagelok",
    detail:
      "Authorized product resale and technical support for fluid system components, assemblies, and training.",
  },
  {
    label: "IFS",
    detail:
      "Enterprise software services for asset management, production data, operational intelligence, and ERP.",
  },
  {
    label: "SNL delivery",
    detail:
      "Local engineering, implementation, procurement, and long-term support for Nigerian operations.",
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Section header — centred for visual balance */}
        <FadeIn className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Technology Partners
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Global standards, local execution
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
            SNL Technology connects global industrial technology with the local
            engineering and operational discipline required to execute in
            Nigeria and across Africa.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-muted bg-white shadow-xl shadow-primary/5">
            <div className="flex items-center gap-5 border-b border-muted bg-primary/5 px-7 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-white">
                <span className="text-xs font-black tracking-widest text-primary">
                  SNL
                </span>
              </div>
              <div>
                <p className="text-base font-bold text-navy">
                  Swagelok + IFS
                </p>
                <p className="text-xs font-medium text-accent">
                  Fluid systems and enterprise software partnerships
                </p>
              </div>
            </div>

            <div className="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {partnerCapabilities.map((cap) => (
                <div key={cap.label} className="px-6 py-5">
                  <p className="text-xs font-semibold text-slate-900">
                    {cap.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.18} className="mt-8 text-center">
          <Button
            href="/partners"
            label="About our partnerships"
            variant="ghost"
          />
        </FadeIn>
      </div>
    </section>
  );
}
