"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trustStats } from "@/content/site";
import { cn } from "@/lib/utils";

const heroImages = [
  "/images/hero-field-operations.png",
  "/images/software-operations-center.png",
];

const heroBlue = "#1478FF";
const heroOverlay = "#FF9A1F";

const heroMessages = [
  {
    title: ["We are", "SNL Technology"],
    description:
      "A technical and operational performance partner helping upstream, industrial, and critical teams improve reliability, visibility, and execution.",
  },
  {
    title: ["Authorised", "Swagelok Reseller"],
    description:
      "Serving Swagelok Sub-Saharan Africa with trusted fluid system products and support.",
  },
  {
    // title: ["Partner of IFS", "in Nigeria"],
    title: ["IFS Solutions", "Partner in Nigeria"],
    description:
      "Delivering software services and operational solutions for upstream, industrial, and critical operations.",
  },
];

const titleTextStyles =
  "max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]";

const descriptionTextStyles =
  "mt-6 max-w-2xl text-base font-medium leading-8 text-white/90 [text-wrap:pretty] sm:text-lg sm:leading-9";

export function HeroSection() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const currentSlide = heroMessages[currentMessageIdx];
  const currentTitle = currentSlide.title.join("\n");
  const currentMessage = [currentTitle, currentSlide.description]
    .filter(Boolean)
    .join("\n");
  const displayedMessage = prefersReducedMotion
    ? currentMessage
    : currentMessage.slice(0, typedLength);
  const displayedTitle = displayedMessage.slice(0, currentTitle.length);
  const displayedDescription =
    currentSlide.description && displayedMessage.length > currentTitle.length
      ? displayedMessage.slice(currentTitle.length + 1)
      : "";
  const displayedTitleLines = displayedTitle.split("\n");
  const showDescription =
    Boolean(currentSlide.description) &&
    (prefersReducedMotion || displayedDescription.length > 0);
  const showCursorInDescription =
    Boolean(currentSlide.description) && displayedDescription.length > 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const isFullyTyped = typedLength === currentMessage.length;
    const isFullyDeleted = typedLength === 0;
    const delay = isFullyTyped && !isDeleting ? 2200 : isDeleting ? 28 : 42;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isFullyTyped) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isFullyDeleted) {
        setIsDeleting(false);
        setCurrentMessageIdx((prev) => (prev + 1) % heroMessages.length);
        return;
      }

      setTypedLength((prev) => prev + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentMessage.length, isDeleting, prefersReducedMotion, typedLength]);

  return (
    <section
      className="relative flex flex-col overflow-hidden pb-0 pt-28 sm:pt-32 lg:min-h-[100svh]"
      style={{ backgroundColor: heroBlue }}>
      {/* ── Background Slider ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out",
              idx === currentImageIdx ? "opacity-30 scale-100" : "opacity-0",
            )}
            style={{ backgroundImage: `url('${src}')` }}>
            <div
              className={cn(
                "absolute inset-0 h-full w-full mix-blend-multiply opacity-45",
                idx === currentImageIdx && "animate-ken-burns",
              )}
              style={{ backgroundColor: heroOverlay }}
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
            "radial-gradient(ellipse 130% 60% at 50% -10%, rgba(255,154,31,0.3) 0%, transparent 58%)",
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "100% 100%, 28px 28px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-12 sm:py-16 lg:py-10">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-center">
          {/* ── Headline column ─────────────────────────────────────── */}
          <div className="relative z-10">
            <div className="animate-fade-up grid max-w-4xl border-l-2 border-white pl-5 sm:pl-7">
              <div
                aria-hidden
                className="pointer-events-none invisible col-start-1 row-start-1 grid">
                {heroMessages.map((slide) => (
                  <div
                    key={slide.title.join(" ")}
                    className="col-start-1 row-start-1">
                    <div className={titleTextStyles}>
                      {slide.title.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                    {slide.description && (
                      <div className={descriptionTextStyles}>
                        {slide.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="col-start-1 row-start-1">
                <h1 aria-live="polite" className={titleTextStyles}>
                  {displayedTitleLines.map((line, idx) => (
                    <span key={`${currentMessageIdx}-${idx}`} className="block">
                      {line}
                      {!prefersReducedMotion &&
                        !showCursorInDescription &&
                        idx === displayedTitleLines.length - 1 && (
                          <span
                            aria-hidden
                            className="ml-1 inline-block h-[0.9em] w-1 translate-y-1 bg-white align-baseline animate-type-cursor"
                          />
                        )}
                    </span>
                  ))}
                </h1>

                {showDescription && (
                  <p className={descriptionTextStyles}>
                    {displayedDescription}
                    {!prefersReducedMotion && showCursorInDescription && (
                      <span
                        aria-hidden
                        className="ml-1 inline-block h-[0.9em] w-1 translate-y-0.5 bg-white align-baseline animate-type-cursor"
                      />
                    )}
                  </p>
                )}
              </div>
            </div>

            <div
              className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3 pl-5 sm:pl-7"
              style={{ animationDelay: "0.26s" }}>
              <Button
                href="/contact"
                label="Contact Us"
                size="lg"
                className="bg-white text-[#1478FF] shadow-none lg:w-50 hover:bg-white/90 focus-visible:ring-white"
              />
            </div>
          </div>

          {/* ── At-a-glance card ─────────────────────────────────────── */}
          <aside
            className="animate-fade-up relative z-10 rounded-2xl border border-white/25 bg-black/25 p-6 shadow-[0_0_40px_-10px_rgba(255,255,255,0.45)] backdrop-blur-md sm:p-7 lg:mt-2"
            style={{ animationDelay: "0.32s" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              Company profile
            </p>

            <dl className="mt-5 divide-y divide-white/20">
              {[
                ...trustStats,
                { label: "Focus", value: "Oil & Gas and Industrial" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-xs text-white/75">{item.label}</dt>
                  <dd className="text-sm font-bold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/25">
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
        className="animate-fade-up relative mt-auto border-t border-white/20"
        style={{ animationDelay: "0.42s" }}>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-y divide-white/20 px-6 md:grid-cols-4 md:divide-y-0">
          {[
            { value: "2005", label: "Established" },
            { value: "20+", label: "Years in upstream and industrial sectors" },
            { value: "Oil & Gas", label: "Primary industry focus" },
            {
              value: "Fluid Systems + Software",
              label: "Products and services",
            },
          ].map((stat) => (
            <div key={stat.value} className="px-4 py-6 sm:px-8">
              <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
