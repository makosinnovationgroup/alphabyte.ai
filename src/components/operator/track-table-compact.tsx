import { cn } from "@/lib/utils";
import type { Track } from "./track-table";

interface TrackTableCompactProps {
  tracks: Track[];
  className?: string;
}

export function TrackTableCompact({ tracks, className }: TrackTableCompactProps) {
  return (
    <div className={className}>
      <div
        className={cn(
          "grid gap-4 py-2.5 border-b border-border-default",
          "grid-cols-[32px_1fr_120px_40px]",
          "max-lg:grid-cols-[28px_1fr_90px_32px]",
          "font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase",
        )}
      >
        <span aria-hidden />
        <span>Name</span>
        <span>Timeline</span>
        <span aria-hidden />
      </div>

      {tracks.map((t) => (
        <a
          key={t.slug}
          href={t.cta.href}
          className={cn(
            "grid gap-4 py-3.5 border-b border-border-default items-center",
            "grid-cols-[32px_1fr_120px_40px]",
            "max-lg:grid-cols-[28px_1fr_90px_32px]",
            "font-mono text-[13.5px] text-ink",
            "transition-colors duration-[120ms]",
            "hover:bg-alphabyte-blue/[0.04]",
          )}
        >
          <span
            className="inline-flex items-center justify-center text-ink opacity-40"
            aria-hidden
          >
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
          </span>
          <span className="font-medium text-ink">
            {t.label}
            {t.flagship && (
              <span className="text-alphabyte-blue ml-1">★</span>
            )}
          </span>
          <span className="text-muted-foreground text-[12px]">
            {t.timeline}
          </span>
          <span className="font-mono text-brand-live text-[14px] text-right">→</span>
        </a>
      ))}
    </div>
  );
}
