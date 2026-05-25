import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
