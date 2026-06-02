import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { solutionCards } from "@/content/site";

/* Accent colors cycle across cards to provide gentle visual variation */
const accentColors = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-navy/10 text-navy",
] as const;

export function SolutionsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Section header */}
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Applications
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-7 text-muted-foreground">
              SNL Technology supports upstream, midstream, EPC, and industrial
              environments where system reliability, production visibility, and
              disciplined execution matter most.
            </p>
          </div>
          <Button
            href="/project"
            label="View project fit"
            variant="ghost"
            size="sm"
            className="shrink-0"
          />
        </FadeIn>

        <FadeInStagger
          className="mt-10 grid gap-6 lg:grid-cols-3"
          stagger={0.1}>
          {solutionCards.map((item, i) => (
            <FadeInItem key={item.title}>
              <article className="group flex flex-col rounded-2xl border border-muted bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black transition-transform group-hover:scale-110 ${accentColors[i % accentColors.length]}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
