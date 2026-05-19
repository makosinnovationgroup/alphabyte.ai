import { cn } from "@/lib/utils";
import { Chevron } from "./chevron";

interface FitColumnsProps {
  rightForYou: string[];
  notRightForYou: string[];
  className?: string;
}

export function FitColumns({
  rightForYou,
  notRightForYou,
  className,
}: FitColumnsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-12 max-lg:grid-cols-1 max-lg:gap-9",
        className,
      )}
    >
      <FitColumn variant="right" label="Right for you if" items={rightForYou} />
      <FitColumn
        variant="not-right"
        label="Not right for you if"
        items={notRightForYou}
      />
    </div>
  );
}

function FitColumn({
  variant,
  label,
  items,
}: {
  variant: "right" | "not-right";
  label: string;
  items: string[];
}) {
  return (
    <div className="border-t border-ink pt-6">
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase mb-5 flex items-center text-alphabyte-blue">
        <Chevron />
        {label}
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-[15px] leading-[1.6] text-ink"
          >
            <Glyph variant={variant} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Glyph({ variant }: { variant: "right" | "not-right" }) {
  if (variant === "right") {
    return (
      <span
        aria-hidden
        className="mt-[7px] inline-block w-[8px] h-[8px] shrink-0 bg-brand-live"
      />
    );
  }
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden
      className="mt-[6px] shrink-0 text-muted-foreground"
    >
      <path
        d="M1 1 L9 9 M9 1 L1 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
