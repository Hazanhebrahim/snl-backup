import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/ui/fade-in";
import { fluidSystemProducts, softwareServices } from "@/content/site";

export function ServicesSection() {
  return (
    <section className="border-y border-muted bg-primary/5 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-eyebrow">
              Products & Services
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Fluid systems and enterprise software services
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-muted-foreground">
              SNL Technology provides fluid systems from Swagelok Sub-Saharan
              Africa and enterprise software services from IFS for upstream,
              industrial, and critical operations.
            </p>
          </div>
          <Button
            href="/services"
            label="Projects"
            variant="ghost"
            size="sm"
            className="shrink-0"
          />
        </FadeIn>

        <ServiceGroup
          eyebrow="Fluid systems from Swagelok Sub-Saharan Africa"
          title="Leak-tight products for demanding operating environments"
          image="/images/service-swagelok-fluid-systems-generated.jpg"
          imageAlt="Swagelok fluid system components with valves and tubing"
          items={fluidSystemProducts}
        />

        <ServiceGroup
          eyebrow="Enterprise software services from IFS"
          title="Digital systems for performance, visibility, and control"
          image="/images/software-operations-center.png"
          imageAlt="Enterprise software operations center dashboard"
          items={softwareServices}
          reverse
        />
      </div>
    </section>
  );
}

type ServiceGroupProps = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  items: { title: string; description: string }[];
  reverse?: boolean;
};

function ServiceGroup({
  eyebrow,
  title,
  image,
  imageAlt,
  items,
  reverse = false,
}: ServiceGroupProps) {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <FadeIn className={reverse ? "lg:order-2" : undefined}>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-primary/5">
          <Image
            src={image}
            alt={imageAlt}
            width={1400}
            height={950}
            className="aspect-4/3 w-full object-cover"
          />
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-eyebrow">
              {eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-navy">{title}</h3>
          </div>
        </div>
      </FadeIn>

      <FadeInStagger className="grid gap-4 sm:grid-cols-2" stagger={0.06}>
        {items.map((item, index) => (
          <FadeInItem key={item.title}>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
              <p className="text-xs font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-3 text-base font-bold text-navy">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </div>
  );
}
