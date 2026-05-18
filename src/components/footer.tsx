import Link from "next/link";
import { cn } from "@/lib/utils";
import { contact, legalLinks } from "@/lib/footer-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white font-mono text-[13px] pt-9 pb-8">
      <div className="mx-auto max-w-[1400px] px-8 flex flex-col gap-4">
        {/* Footer logo */}
        <Link
          href="/"
          aria-label="Alphabyte AI"
          className="inline-flex items-center font-sans text-[18px] font-medium text-white"
        >
          <img
            src="/logos/alphabyte-logo-white.svg"
            alt="Alphabyte"
            className="h-[22px] w-auto block"
          />
          <span className="text-white/45 mx-1 -translate-y-px">&middot;</span>
          <span className="text-alphabyte-blue -translate-y-px">AI</span>
        </Link>

        {/* Prompt line */}
        <div className="flex items-center gap-2.5 text-white/85">
          <span>Book a discovery call &middot; 45 minutes &middot; No cost</span>
          <span
            aria-hidden
            className="inline-block w-2 h-3.5 bg-brand-green animate-blink-pulse ml-0.5"
          />
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-[18px] gap-y-2 pt-3.5 border-t border-white/10 text-white/45 text-[11px]">
          <span>
            <span className="text-alphabyte-blue">contact:</span>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-white"
            >
              {contact.email}
            </a>
          </span>
          <span>
            <span className="text-alphabyte-blue">hq:</span>{" "}
            {contact.address.line1}, {contact.address.line2}
          </span>
          <span>
            <span className="text-alphabyte-blue">linkedin:</span>{" "}
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              /company/alphabyte-solutions-inc
            </a>
          </span>
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-white",
                "text-white/45",
              )}
            >
              {link.label.toLowerCase()}
            </Link>
          ))}
          <span className="ml-auto uppercase tracking-[0.04em]">
            &copy; ALPHABYTE {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
