import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  className?: string;
};

export function Card({ title, description, className }: CardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border border-muted bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
        className,
      )}>
      <h3 className="text-lg font-semibold tracking-tight text-navy transition-colors group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}
