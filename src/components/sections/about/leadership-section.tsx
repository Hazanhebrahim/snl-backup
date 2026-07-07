"use client";

import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useId, useState } from "react";

type Leader = {
  name: string;
  role: string;
  summary: string;
  bio: string[];
  image?: string;
  imageClassName?: string;
  linkedin?: string;
};

type LeadershipSectionProps = {
  leaders: Leader[];
};

export function LeadershipSection({ leaders }: LeadershipSectionProps) {
  const [activeLeader, setActiveLeader] = useState<Leader | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const titleId = useId();

  useEffect(() => {
    if (!activeLeader) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveLeader(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeLeader]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {leaders.map((leader) => (
          <article
            key={leader.name}
            className="flex min-h-96 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
            <ProfileImage
              leader={leader}
              failedImages={failedImages}
              setFailedImages={setFailedImages}
              className="aspect-4/3 w-full"
            />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-bold tracking-tight text-navy">
                    {leader.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {leader.role}
                  </p>
                </div>
                {leader.linkedin ? (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${leader.name} LinkedIn profile`}
                    className="flex size-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-sm font-bold text-primary transition-colors hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    in
                  </a>
                ) : null}
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                {leader.summary}
              </p>
              <button
                type="button"
                onClick={() => setActiveLeader(leader)}
                className="mt-6 inline-flex h-10 w-fit items-center justify-center rounded-md bg-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2">
                Read full profile
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeLeader ? (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-end bg-navy/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={() => setActiveLeader(null)}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="mx-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-lg bg-white p-6 shadow-2xl sm:rounded-lg sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}>
            <div className="grid gap-6 border-b border-slate-200 pb-6 sm:grid-cols-[180px_1fr]">
              <ProfileImage
                leader={activeLeader}
                failedImages={failedImages}
                setFailedImages={setFailedImages}
                className="aspect-square w-full max-w-44 rounded-lg"
              />
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3
                    id={titleId}
                    className="text-2xl font-bold tracking-tight text-navy">
                    {activeLeader.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {activeLeader.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveLeader(null)}
                  aria-label="Close profile"
                  className="flex size-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-2xl leading-none text-slate-500 transition-colors hover:border-primary/30 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  &times;
                </button>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {activeLeader.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {activeLeader.linkedin ? (
              <a
                href={activeLeader.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                View LinkedIn
              </a>
            ) : null}
          </section>
        </div>
      ) : null}
    </>
  );
}

type ProfileImageProps = {
  leader: Leader;
  failedImages: Record<string, boolean>;
  setFailedImages: Dispatch<SetStateAction<Record<string, boolean>>>;
  className: string;
};

function ProfileImage({
  leader,
  failedImages,
  setFailedImages,
  className,
}: ProfileImageProps) {
  const initials = leader.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  const imageSrc =
    leader.image && !failedImages[leader.image] ? leader.image : null;

  return (
    <div
      className={`relative overflow-hidden bg-muted ${className}`}
      aria-hidden={!imageSrc}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${leader.name} portrait`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={`object-cover ${leader.imageClassName ?? "object-top"}`}
          onError={() =>
            setFailedImages((current) => ({
              ...current,
              [imageSrc]: true,
            }))
          }
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-3xl font-bold text-primary">
          {initials}
        </div>
      )}
    </div>
  );
}
