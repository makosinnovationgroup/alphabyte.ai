import { cn } from "@/lib/utils";

interface HardRuleProps {
  className?: string;
}

export function HardRule({ className }: HardRuleProps) {
  return <div role="separator" className={cn("h-px bg-ink w-full", className)} />;
}
