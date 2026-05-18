import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Chevron } from "./chevron";

interface SpecCardProps {
  label: string;
  price: string;
  items: string[];
  cta: ReactNode;
  className?: string;
}

export function SpecCard({ label, price, items, cta, className }: SpecCardProps) {
  return (
    <div className={cn("border border-ink bg-canvas p-6", className)}>
      <div className="font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase mb-3 flex items-center">
        <Chevron />
        {label}
      </div>
      <div className="font-mono text-[26px] text-ink font-semibold mb-1.5 tracking-[-0.02em]">
        {price}
      </div>
      <ul className="font-mono text-[12px] text-muted-foreground mb-[18px] list-none">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "py-1 flex items-center gap-2.5",
              "before:content-[''] before:w-[7px] before:h-[7px] before:bg-brand-live before:shrink-0",
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      {cta}
    </div>
  );
}
