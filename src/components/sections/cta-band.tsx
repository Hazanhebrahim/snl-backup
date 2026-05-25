import { Button } from "@/components/ui/button";

type CtaBandProps = {
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function CtaBand({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CtaBandProps) {
  return (
    <section className="bg-primary py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/90 drop-shadow-sm">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href={primaryCta.href} label={primaryCta.label} size="lg" />
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                label={secondaryCta.label}
                variant="ghost"
                size="lg"
                className="text-white ring-white/20 hover:bg-white/10 hover:text-white"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
