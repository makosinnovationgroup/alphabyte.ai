import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CommitRowProps {
  /** Optional client/project author line — appears as small mono tag above the title. Omit if production content has no equivalent. */
  author?: string;
  title: string;
  body: ReactNode;
  tag: string;
  href?: string;
  className?: string;
}

export function CommitRow({
  author,
  title,
  body,
  tag,
  href,
  className,
}: CommitRowProps) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        "grid grid-cols-[1fr_220px] gap-7 px-3 py-6 border-b border-border-default",
        "items-start transition-colors duration-[120ms] hover:bg-white",
        href && "cursor-pointer",
        "max-lg:grid-cols-1",
        className,
      )}
    >
      <div>
        {author && (
          <div className="font-mono text-[11px] text-ink mb-1.5 tracking-[0.02em]">
            {author}
          </div>
        )}
        <h3 className="text-[19px] font-bold tracking-[-0.015em] mb-2 leading-[1.25]">
          {title}
        </h3>
        <p className="text-[14.5px] text-muted-foreground leading-[1.55] max-w-[65ch]">
          {body}
        </p>
      </div>
      <span className="font-mono text-[11px] text-muted-foreground tracking-[0.04em] uppercase pt-1.5 text-right max-lg:hidden">
        {tag}
      </span>
    </Wrapper>
  );
}
