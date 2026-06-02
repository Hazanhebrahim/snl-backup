"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trustStats } from "@/content/site";
import { cn } from "@/lib/utils";

const heroImages = [
  "/images/hero-field-operations.png",
  "/images/software-operations-center.png",
];

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy pb-0 pt-32">
      {/* ── Background Slider ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out",
              idx === currentIdx ? "opacity-30 scale-100" : "opacity-0",
            )}
            style={{ backgroundImage: `url('${src}')` }}>
            <div
              className={cn(
                "absolute inset-0 w-full h-full bg-navy mix-blend-multiply opacity-40",
                idx === currentIdx && "animate-ken-burns",
              )}
            />
          </div>
        ))}
      </div>

      {/* Radial primary glow + dot-grid texture — purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 130% 60% at 50% -10%, rgba(0,137,247,0.3) 0%, transparent 58%)",
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "100% 100%, 28px 28px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          {/* ── Headline column ─────────────────────────────────────── */}
          <div className="relative z-10">
            <p className="animate-fade-up text-[11px] font-bold uppercase tracking-[0.2em] text-accent drop-shadow-md">
              We are SNL Technology
            </p>

            <h1 className="animate-fade-up-delay-1 mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem]">
              A technical and operational performance partner.
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Authorised Reseller of Swagelok Products for Swagelok
              Sub-Saharan Africa and Partner of IFS in Nigeria.
            </p>
            <p className="animate-fade-up-delay-2 mt-4 max-w-2xl text-sm font-bold uppercase leading-7 tracking-[0.12em] text-white">
              Fluid systems, software services and value-added services for
              upstream, industrial and critical operations
            </p>

            <div
              className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "0.26s" }}>
              <Button href="/contact" label="Book a consultation" size="lg" />
              <Button
                href="/project"
                label="View project capability"
                variant="ghost"
                size="lg"
                className="text-white ring-slate-700 hover:bg-slate-800 hover:text-white focus-visible:ring-slate-500"
              />
            </div>
          </div>

          {/* ── At-a-glance card ─────────────────────────────────────── */}
          <aside
            className="animate-fade-up relative z-10 rounded-2xl border border-white/10 bg-navy-light/80 p-7 shadow-[0_0_40px_-10px_rgba(0,137,247,0.3)] backdrop-blur-md lg:mt-2"
            style={{ animationDelay: "0.32s" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              Company profile
            </p>

            <dl className="mt-5 divide-y divide-white/10">
              {[
                ...trustStats,
                { label: "Focus", value: "Oil & Gas and Industrial" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-xs text-slate-300">{item.label}</dt>
                  <dd className="text-sm font-bold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-xl bg-primary/20 px-4 py-3 ring-1 ring-primary/40">
              <p className="text-xs font-medium leading-6 text-white drop-shadow-md">
                Authorised reseller of Swagelok products for Swagelok
                Sub-Saharan Africa and partner of IFS in Nigeria.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <div
        className="animate-fade-up relative mt-16 border-t border-slate-800/80"
        style={{ animationDelay: "0.42s" }}>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-y divide-slate-800/80 px-6 md:grid-cols-4 md:divide-y-0">
          {[
            { value: "2005", label: "Established" },
            { value: "20+", label: "Years in upstream and industrial sectors" },
            { value: "Oil & Gas", label: "Primary industry focus" },
            { value: "Fluid + Software", label: "Products and services" },
          ].map((stat) => (
            <div key={stat.value} className="px-4 py-6 sm:px-8">
              <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
