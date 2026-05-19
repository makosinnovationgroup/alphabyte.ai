import { cn } from "@/lib/utils";
import { Chevron } from "./chevron";

interface TocEntry {
  label: string;
  anchorId: string;
}

interface TableOfContentsProps {
  items: TocEntry[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  return (
    <nav
      aria-label="On this page"
      className={cn("border border-border-default bg-canvas", className)}
    >
      <div className="px-4 py-3 border-b border-border-default font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground flex items-center">
        <Chevron />
        On this page
      </div>
      <ol className="py-2 px-4">
        {items.map((entry, i) => (
          <li
            key={entry.anchorId}
            className="py-1.5 flex gap-3 items-baseline"
          >
            <span className="font-mono text-[10.5px] text-muted-foreground tracking-[0.04em] shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${entry.anchorId}`}
              className="font-mono text-[12.5px] text-ink leading-[1.4] transition-colors hover:text-alphabyte-blue"
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
