import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ManifestCell {
  num: string;
  tag: string;
  body: ReactNode;
}

interface Manifest2x2Props {
  cells: [ManifestCell, ManifestCell, ManifestCell, ManifestCell];
  className?: string;
}

export function Manifest2x2({ cells, className }: Manifest2x2Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px bg-border-default border border-border-default",
        "max-lg:grid-cols-1",
        className,
      )}
    >
      {cells.map((cell) => (
        <div key={cell.num} className="bg-white px-8 py-7 relative">
          <div className="flex items-baseline gap-3 mb-3.5">
            <span className="font-mono text-[11px] font-medium text-alphabyte-blue tracking-[0.06em]">
              {cell.num}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.06em] uppercase">
              {cell.tag}
            </span>
          </div>
          <p className="text-[15.5px] leading-[1.55] text-ink">{cell.body}</p>
        </div>
      ))}
    </div>
  );
}
