import { cn } from "@/lib/utils";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export function PullQuote({ quote, attribution, className }: PullQuoteProps) {
  return (
    <figure
      className={cn(
        "border-t border-b border-ink py-12 max-w-[68ch] mx-auto text-center",
        className,
      )}
    >
      <span
        aria-hidden
        className="block font-sans text-[64px] leading-none text-alphabyte-blue mb-4 select-none"
      >
        {"“"}
      </span>
      <blockquote className="font-mono italic text-[22px] leading-[1.5] text-ink tracking-[-0.005em]">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-7 font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
