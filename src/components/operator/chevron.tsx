import { cn } from "@/lib/utils";

interface ChevronProps {
  className?: string;
}

export function Chevron({ className }: ChevronProps) {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("inline-block shrink-0 mr-2 -translate-y-[1px]", className)}
    >
      <polyline points="2,1 6,4.5 2,8" />
    </svg>
  );
}
