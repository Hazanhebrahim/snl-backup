import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { serviceCards } from "@/content/site";

export function ServicesSection() {
  return (
    <section className="border-y border-muted bg-primary/5 py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        {/* Section header */}
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Fluid systems, software services, and field support
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-7 text-muted-foreground">
              A practical portfolio for upstream, midstream, EPC, and
              industrial teams that need reliable technology backed by local
              execution.
            </p>
          </div>
          <Button
            href="/project"
            label="Project capability"
            variant="ghost"
            size="sm"
            className="shrink-0"
          />
        </FadeIn>

        {/* Cards grid — staggered entrance. 5 items → 3+2 on large screens */}
        <FadeInStagger
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}>
          {serviceCards.map((item) => (
            <FadeInItem key={item.title}>
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-muted bg-white shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="aspect-4/3 w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
