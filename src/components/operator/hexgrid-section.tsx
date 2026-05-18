import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HexgridSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export function HexgridSection({
  children,
  className,
  ...rest
}: HexgridSectionProps) {
  return (
    <section
      {...rest}
      className={cn("bg-hexgrid bg-[length:28px_48px]", className)}
    >
      {children}
    </section>
  );
}
