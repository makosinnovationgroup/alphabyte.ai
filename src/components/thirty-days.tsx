import { Chevron } from "@/components/operator";

export interface ThirtyDaysProps {
  weeks: { label: string; body: string }[];
  dayThirty: { label: string; body: string };
}

export function ThirtyDays({ weeks, dayThirty }: ThirtyDaysProps) {
  const steps = [...weeks, dayThirty];
  return (
    <div className="border border-border-default bg-canvas p-6 md:p-10">
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-7 flex items-center">
        <Chevron />
        What the first 30 days look like
      </div>
      <div className="border-t border-ink">
        {steps.map((step, i) => (
          <div
            key={i}
            className="grid gap-6 py-6 border-b border-border-default grid-cols-1 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <div className="font-mono text-[13px] tracking-[0.04em] uppercase text-alphabyte-blue pt-0.5">
              {step.label}
            </div>
            <p className="text-[16px] leading-[1.6] text-ink max-w-[65ch]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
