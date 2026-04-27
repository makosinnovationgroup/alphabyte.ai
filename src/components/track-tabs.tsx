"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface Track {
  number: string;
  label: string;
  question: string;
  heading: string;
  body: string;
  rightForYou: string;
  cta: { label: string; href: string };
  pills: string[];
  trackHeader?: string;
  investment?: string;
}

export function TrackTabs({ tracks }: { tracks: Track[] }) {
  const [active, setActive] = React.useState(0);
  const track = tracks[active];
  const isDetailed = !!track.investment;

  return (
    <>
      {/* Tab bar — full viewport width, dark background */}
      <div
        role="tablist"
        aria-label="Service tracks"
        className="relative z-10 grid grid-cols-2 lg:grid-cols-4 bg-foreground"
      >
        {tracks.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.number}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="track-panel"
              id={`track-tab-${i}`}
              onClick={() => setActive(i)}
              className={cn(
                "flex flex-col items-start gap-1 px-5 py-4 text-left transition-colors cursor-pointer",
                "shadow-[inset_-1px_0_0_rgba(255,255,255,0.1)]",
                "last:shadow-none",
                isActive
                  ? "bg-alphabyte-blue/10 text-alphabyte-blue"
                  : "text-white/50 hover:text-white/80",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alphabyte-blue focus-visible:ring-inset",
              )}
            >
              <span className="text-body-sm font-medium text-white/50">
                {t.number}
              </span>
              <span className="text-body-sm font-medium">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Track detail */}
      <section
        id="track-panel"
        role="tabpanel"
        aria-labelledby={`track-tab-${active}`}
        className="bg-canvas px-6 py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-body italic text-muted-foreground mb-4">
              &ldquo;{track.question}&rdquo;
            </p>
            {track.trackHeader && (
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-3">
                {track.trackHeader}
              </p>
            )}
            <h2 className="text-headline tracking-brand-snug mb-6">
              {track.heading}
            </h2>
            <p className="text-body text-foreground mb-6 max-w-[55ch]">
              {track.body}
            </p>
            {isDetailed ? (
              <>
                <p className="text-body text-foreground mb-4 max-w-[55ch]">
                  <span className="font-bold italic">Right for you if:</span>{" "}
                  <span className="text-muted-foreground">
                    {track.rightForYou}
                  </span>
                </p>
                <p className="text-body-sm text-muted-foreground">
                  {track.investment}
                </p>
              </>
            ) : (
              <>
                <p className="text-body text-foreground mb-8 max-w-[55ch]">
                  <span className="font-bold">Right for you if:</span>{" "}
                  {track.rightForYou}
                </p>
                <Button variant="dark" size="sm" asChild>
                  <Link href={track.cta.href}>{track.cta.label}</Link>
                </Button>
              </>
            )}
          </div>

          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-5">
              What&rsquo;s Included
            </p>
            <div className="flex flex-wrap gap-3">
              {track.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border-default bg-white px-4 py-2 text-body-sm text-muted-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>
            {isDetailed && (
              <div className="mt-8">
                <Button variant="dark" size="sm" asChild>
                  <Link href={track.cta.href}>{track.cta.label}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
