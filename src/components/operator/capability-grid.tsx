import { cn } from "@/lib/utils";

export interface Capability {
  title: string;
  body: string;
}

interface CapabilityGridProps {
  capabilities: Capability[];
  className?: string;
}

export function CapabilityGrid({ capabilities, className }: CapabilityGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-px bg-border-default border border-border-default",
        "max-xl:grid-cols-2 max-md:grid-cols-1",
        className,
      )}
    >
      {capabilities.map((c, i) => (
        <div key={i} className="bg-white px-7 py-7">
          <div className="flex items-baseline gap-3 mb-3.5">
            <span className="font-mono text-[11px] font-medium text-alphabyte-blue tracking-[0.06em]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.06em] uppercase">
              Capability
            </span>
          </div>
          <h3 className="text-[17px] font-bold tracking-[-0.01em] mb-2 leading-[1.25]">
            {c.title}
          </h3>
          <p className="text-[14.5px] leading-[1.55] text-ink/85">{c.body}</p>
        </div>
      ))}
    </div>
  );
}
