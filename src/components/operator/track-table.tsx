"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Chevron } from "./chevron";

export interface Track {
  slug: string;
  label: string;
  flagship?: boolean;
  question: string;
  heading: string;
  body: ReactNode;
  rightForYou: ReactNode;
  pills: string[];
  timeline: string;
  cta: { label: string; href: string };
}

interface TrackTableProps {
  tracks: Track[];
  className?: string;
}

export function TrackTable({ tracks, className }: TrackTableProps) {
  const [active, setActive] = useState(0);
  const t = tracks[active];

  return (
    <div className={className}>
      <div
        className={cn(
          "grid gap-4 py-2.5 border-b border-border-default",
          "grid-cols-[32px_1fr_100px_1.6fr_90px]",
          "max-lg:grid-cols-[28px_1fr_80px_60px]",
          "font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase",
        )}
      >
        <span aria-hidden />
        <span>Name</span>
        <span>Timeline</span>
        <span>Question</span>
        <span className="max-lg:hidden">Status</span>
      </div>

      {tracks.map((tr, i) => {
        const isActive = active === i;
        return (
          <div
            key={tr.label}
            role="tab"
            aria-selected={isActive}
            tabIndex={0}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(i);
              }
            }}
            className={cn(
              "grid gap-4 py-3.5 border-b border-border-default items-center",
              "grid-cols-[32px_1fr_100px_1.6fr_90px]",
              "max-lg:grid-cols-[28px_1fr_80px_60px]",
              "font-mono text-[13.5px] text-ink cursor-pointer",
              "transition-colors duration-[120ms]",
              "hover:bg-alphabyte-blue/[0.04]",
              isActive && "bg-brand-live/[0.08]",
            )}
          >
            <span
              className={cn(
                "inline-flex items-center justify-center",
                isActive
                  ? "text-brand-live opacity-100 [filter:drop-shadow(0_0_6px_rgba(51,188,247,0.55))]"
                  : "text-ink opacity-40",
              )}
              aria-hidden
            >
              {isActive ? (
                <svg width="11" height="11" viewBox="0 0 11 11">
                  <rect
                    x="0"
                    y="0"
                    width="11"
                    height="11"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg width="11" height="11" viewBox="0 0 11 11">
                  <rect
                    x="0.75"
                    y="0.75"
                    width="9.5"
                    height="9.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              )}
            </span>
            <span className="font-medium text-ink">
              {tr.label}
              {tr.flagship && (
                <span className="text-alphabyte-blue ml-1">★</span>
              )}
            </span>
            <span className="text-muted-foreground text-[12px]">
              {tr.timeline}
            </span>
            <span className="text-muted-foreground text-[12px]">
              {tr.question}
            </span>
            <span
              className={cn(
                "text-[11px] max-lg:hidden",
                isActive
                  ? "text-brand-live font-medium"
                  : "text-muted-foreground",
              )}
            >
              {isActive ? "● RUNNING" : "○ READY"}
            </span>
          </div>
        );
      })}

      <TrackPanel track={t} />
    </div>
  );
}

interface TrackPanelProps {
  track: Track;
  className?: string;
}

function TrackPanel({ track, className }: TrackPanelProps) {
  return (
    <div
      role="tabpanel"
      className={cn(
        "mt-9 border border-border-default bg-canvas",
        "grid grid-cols-[1fr_360px] max-lg:grid-cols-1",
        className,
      )}
    >
      <div className="px-10 py-9 border-r border-border-default max-lg:border-r-0 max-lg:border-b">
        <div className="font-mono text-muted-foreground text-[13px] mb-[18px]">
          &ldquo;{track.question}&rdquo;
        </div>
        <h3 className="text-[32px] font-bold tracking-[-0.02em] mb-5">
          {track.heading}
          {track.flagship && (
            <span className="text-alphabyte-blue ml-1.5">★</span>
          )}
        </h3>
        <p className="text-[15.5px] leading-[1.6] text-ink mb-[18px] max-w-[60ch]">
          {track.body}
        </p>
        <div className="text-[14.5px] leading-[1.55] text-ink mb-7 py-3 border-y border-dashed border-border-default">
          <strong className="font-mono text-[11px] tracking-[0.08em] uppercase text-alphabyte-blue block mb-1.5 flex items-center font-normal">
            <Chevron />
            Right for you if
          </strong>
          {track.rightForYou}
        </div>
        <a
          href={track.cta.href}
          className={cn(
            "inline-flex items-center gap-2 bg-ink text-white px-3.5 py-2.5",
            "text-[13px] font-bold tracking-[-0.01em] rounded-sm",
            "transition-colors duration-[120ms] hover:bg-[#2a2a2a]",
          )}
        >
          {track.cta.label.replace(/\s*→\s*$/, "")}{" "}
          <span className="font-mono text-brand-live text-[12px]">→</span>
        </a>
      </div>
      <div className="px-8 py-9 bg-white">
        <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-3.5 flex items-center">
          <Chevron />
          what&rsquo;s included
        </div>
        <div className="flex flex-col gap-2 font-mono text-[13px] mb-7">
          {track.pills.map((p) => (
            <span
              key={p}
              className={cn(
                "text-ink bg-canvas border border-border-default px-3 py-2",
                "flex items-center gap-2.5",
                "before:content-[''] before:w-[7px] before:h-[7px] before:bg-brand-live before:shrink-0",
              )}
            >
              {p}
            </span>
          ))}
        </div>
        <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-3.5 flex items-center">
          <Chevron />
          timeline
        </div>
        <div className="font-mono text-[18px] text-ink font-medium tracking-[-0.01em]">
          {track.timeline}
        </div>
      </div>
    </div>
  );
}
