"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypedHeroProps {
  pre: ReactNode;
  word: string;
  post: ReactNode;
  className?: string;
}

const TYPE_INTERVAL_MS = 60;

export function TypedHero({ pre, word, post, className }: TypedHeroProps) {
  const chars = [...word];
  const [revealed, setRevealed] = useState(0);
  const done = revealed >= chars.length;

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setRevealed(word.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= word.length) clearInterval(id);
    }, TYPE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [word]);

  return (
    <h1
      className={cn(
        "font-sans font-black text-display text-ink mb-7",
        "min-h-[1.95em] text-balance",
        className,
      )}
    >
      {pre}
      <span className="text-alphabyte-blue whitespace-nowrap">
        {chars.map((ch, i) => (
          <Fragment key={i}>
            {i === revealed && !done && <Cursor variant="typing" />}
            <span className={i < revealed ? undefined : "text-transparent"}>
              {ch}
            </span>
          </Fragment>
        ))}
        {done && <Cursor variant="pulsing" />}
      </span>
      {post}
    </h1>
  );
}

function Cursor({ variant }: { variant: "typing" | "pulsing" }) {
  return (
    <span aria-hidden className="relative inline-block w-0 align-baseline">
      <span
        className={cn(
          "absolute bottom-0 left-[2px] block w-[0.5ch] h-[0.85em] bg-brand-green translate-y-[0.04em]",
          variant === "typing"
            ? "animate-blink-cursor-tip"
            : "animate-blink-pulse",
        )}
      />
    </span>
  );
}
