import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
        This page doesn&apos;t exist or may have moved. Let&apos;s get you back
        on track.
      </p>
      <div className="mt-8">
        <Button href="/" label="Back to home" />
      </div>
    </section>
  );
}
