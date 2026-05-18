import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  num: string;
  label: ReactNode;
  className?: string;
}

export function StatCard({ num, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "border border-border-default bg-white px-5 py-[18px]",
        className,
      )}
    >
      <div className="font-mono font-semibold text-stat-num text-alphabyte-blue mb-1.5">
        {num}
      </div>
      <div className="text-[12.5px] text-muted-foreground leading-[1.4]">
        {label}
      </div>
    </div>
  );
}
