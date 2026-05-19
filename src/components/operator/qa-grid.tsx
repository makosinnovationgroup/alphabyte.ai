import { cn } from "@/lib/utils";

interface QAEntry {
  question: string;
  answer: string;
}

interface QAGridProps {
  items: QAEntry[];
  className?: string;
}

export function QAGrid({ items, className }: QAGridProps) {
  return (
    <div className={cn("border-t border-ink", className)}>
      {items.map((entry, i) => (
        <div
          key={i}
          className={cn(
            "grid grid-cols-[60px_1fr] gap-6 py-7 border-b border-border-default",
            "max-lg:grid-cols-[40px_1fr] max-lg:gap-4",
          )}
        >
          <div className="font-mono text-[12px] text-muted-foreground tracking-[0.08em] uppercase pt-1">
            Q{String(i + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.01em] mb-3 max-w-[55ch]">
              {entry.question}
            </h3>
            <p className="text-[15px] leading-[1.65] text-ink max-w-[65ch]">
              {entry.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
