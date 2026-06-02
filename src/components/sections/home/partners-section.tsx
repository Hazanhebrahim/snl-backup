import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

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

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-muted bg-white shadow-xl shadow-primary/5">
            <div className="border-b border-muted bg-primary/5 px-6 py-6 text-center sm:px-8">
              <p className="text-base font-bold text-navy">Swagelok + IFS</p>
              <p className="mt-1 text-xs font-medium text-accent">
                Fluid systems and enterprise software partnerships
              </p>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              <div className="flex min-h-40 items-center justify-center border-b border-muted bg-white px-8 py-10 sm:border-b-0 sm:border-r">
                <Image
                  src="/images/swagelok.jpg"
                  alt="Swagelok logo"
                  width={300}
                  height={140}
                  className="max-h-20 w-auto max-w-full object-contain"
                />
              </div>
              <div className="flex min-h-40 items-center justify-center bg-white px-8 py-10">
                <Image
                  src="/images/IFS.png"
                  alt="IFS logo"
                  width={300}
                  height={140}
                  className="max-h-20 w-auto max-w-full object-contain"
                />
              </div>
            </div>

            <div className="grid gap-5 border-t border-muted px-6 py-6 sm:grid-cols-2 sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  Authorised reseller
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  SNL Technology is the authorised reseller of Swagelok
                  products for Swagelok Sub-Saharan Africa.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  Nigeria partner
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  SNL Technology is the partner of IFS in Nigeria, supporting
                  enterprise software services for upstream and industrial
                  operators.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.18} className="mt-8 text-center">
          <Button
            href="/about"
            label="About the company"
            variant="ghost"
          />
        </FadeIn>
      </div>
    </section>
  );
}
