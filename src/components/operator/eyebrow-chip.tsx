import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowChipProps {
  children: ReactNode;
  star?: boolean;
  className?: string;
}

export function EyebrowChip({ children, star = false, className }: EyebrowChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-eyebrow text-alphabyte-blue",
        "bg-alphabyte-blue/[0.08] border border-alphabyte-blue/[0.32] rounded-full",
        "px-3 py-1.5",
        className,
      )}
    >
      {star && <span className="text-[11px]">★</span>}
      {children}
    </span>
  );
}
