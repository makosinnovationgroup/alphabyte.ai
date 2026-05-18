"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypedHeroProps {
  pre: ReactNode;
  word: string;
  post: ReactNode;
  className?: string;
}

export function TypedHero({ pre, word, post, className }: TypedHeroProps) {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(word.slice(0, i));
      if (i >= word.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(id);
  }, [word]);

  return (
    <h1
      className={cn(
        "font-sans font-black text-display text-ink mb-7",
        "min-h-[1.95em]",
        className,
      )}
    >
      {pre}
      <span
        className={cn(
          "text-alphabyte-blue",
          done &&
            "after:content-[''] after:inline-block after:w-[0.5ch] after:h-[0.85em] after:bg-brand-green after:ml-1.5 after:align-baseline after:translate-y-[0.04em] after:animate-blink-pulse",
        )}
      >
        {typed}
      </span>
      {!done && (
        <span className="inline-block w-[0.5ch] h-[0.85em] bg-brand-green ml-1 align-baseline translate-y-[0.04em] animate-blink-cursor-tip" />
      )}
      {post}
    </h1>
  );
}
