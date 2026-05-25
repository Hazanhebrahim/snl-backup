import { Button } from "@/components/ui/button";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageIntro({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-muted bg-linear-to-b from-primary/5 via-white to-white py-16 mt-14 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        {eyebrow ? (
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>

        {primaryCta || secondaryCta ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta ? (
              <Button
                href={primaryCta.href}
                label={primaryCta.label}
                variant="primary"
              />
            ) : null}
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                label={secondaryCta.label}
                variant="ghost"
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
