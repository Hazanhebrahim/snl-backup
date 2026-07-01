import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { challenges, differentiators } from "@/content/site";

export function TrustSection() {
  return (
    <section className="bg-black py-16 sm:py-24 relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        {/* ── Differentiators ─────────────────────────────────────────── */}
        <FadeIn>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-eyebrow">
            Why SNL Technology
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What sets us apart
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-7 text-slate-300">
            why clients continue to work with us.
          </p>
        </FadeIn>

        <FadeInStagger
          className="mt-10 grid gap-5 sm:grid-cols-3"
          stagger={0.09}>
          {differentiators.map((item) => (
            <FadeInItem key={item.label}>
              <div className="flex flex-col rounded-2xl border border-primary/20 bg-primary/10 p-7 ring-1 ring-primary/10 transition-colors hover:bg-primary/20 shadow-[0_0_30px_-5px_rgba(0,137,247,0.15)]">
                <p className="text-2xl font-bold tracking-tight text-eyebrow drop-shadow-sm">
                  {item.label}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-200">
                  {item.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* ── Challenges → outcomes ────────────────────────────────────── */}
        <FadeIn delay={0.05} className="mt-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-eyebrow">
            Problems we solve
          </p>
          <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Built for upstream and industrial realities
          </h3>
        </FadeIn>

        <FadeInStagger
          className="mt-8 grid gap-4 sm:grid-cols-2"
          stagger={0.07}>
          {challenges.map((item) => (
            <FadeInItem key={item.challenge}>
              <div className="rounded-xl border border-white/10 bg-white/4 p-6 transition-colors hover:bg-primary/10 hover:border-primary/30">
                <p className="text-sm font-semibold text-slate-100">
                  {item.challenge}
                </p>
                <p className="mt-2 text-sm leading-7 text-eyebrow drop-shadow-sm">
                  → {item.outcome}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
