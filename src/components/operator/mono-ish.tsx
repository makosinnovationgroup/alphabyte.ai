import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MonoIshProps {
  children: ReactNode;
  className?: string;
}

export function MonoIsh({ children, className }: MonoIshProps) {
  return (
    <span
      className={cn(
        "font-mono text-[0.92em] tracking-normal",
        "bg-ink/[0.05] px-1.5 py-px rounded-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
