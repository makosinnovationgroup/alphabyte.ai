import Link from "next/link";
import { cn } from "@/lib/utils";

export interface DeliveryStripChip {
  name: string;
  href: string;
}

interface DeliveryStripProps {
  label?: string;
  chips: (string | DeliveryStripChip)[];
  className?: string;
}

const CHIP_CLASS = cn(
  "inline-flex items-center gap-2 border border-white/[0.18] px-2.5 py-1 text-white",
  "before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full",
  "before:bg-brand-live before:shadow-[0_0_0_2px_rgba(51,188,247,0.2)]",
);

export function DeliveryStrip({
  label = "CURRENTLY IN DELIVERY",
  chips,
  className,
}: DeliveryStripProps) {
  return (
    <section
      aria-label="Active deployments"
      className={cn("bg-ink text-white py-[18px] font-mono overflow-hidden", className)}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center gap-[18px] flex-wrap text-[12px] tracking-[0.02em]">
        <span className="text-white/55">{label}</span>
        {chips.map((chip) => {
          if (typeof chip === "string") {
            return (
              <span key={chip} className={CHIP_CLASS}>
                {chip}
              </span>
            );
          }
          return (
            <Link
              key={chip.name}
              href={chip.href}
              className={cn(CHIP_CLASS, "transition-colors duration-[120ms] hover:bg-white/[0.06]")}
            >
              {chip.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
