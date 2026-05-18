import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-section-label text-muted-foreground",
        "uppercase pt-3.5 pb-3 border-b border-border-default mb-8",
        className,
      )}
    >
      <span className="text-ink/[0.45]">{"//"}</span>
      <span>{text}</span>
      <span className="ml-auto block w-[5px] h-[5px] rounded-full bg-brand-live animate-blink-dot" />
    </div>
  );
}
