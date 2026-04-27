import Link from "next/link";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/navigation";
import { companyLinks, socialLinks, legalLinks, address } from "@/lib/footer-data";

function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.59 3.501 6.158 3.186-4.41.538-7.843 2.517-2.607 8.553C9.247 27.27 11.202 22.2 12 19.57c.798 2.63 2.753 7.7 7.825 2.416 5.236-6.036 1.803-8.015-2.607-8.553 2.568.315 5.373-.559 6.158-3.186C23.622 9.418 24 4.458 24 3.768c0-.69-.139-1.861-.902-2.203-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  );
}

const socialIcons = {
  linkedin: Linkedin,
  bluesky: BlueskyIcon,
} as const;

const linkClasses = "text-body-sm text-foreground transition-colors hover:text-alphabyte-blue";

const servicesNav = navigation.find((item) => item.label === "Services");
const toolsNav = navigation.find((item) => item.label === "Tools");
const caseStudiesNav = navigation.find((item) => item.label === "Case Studies");

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-border-default">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Wordmark */}
        <div className="mb-16">
          <Link
            href="/"
            aria-label="Alphabyte AI"
            className="shrink-0 text-xl font-medium tracking-brand-snug"
          >
            <span className="text-foreground">Alphabyte</span>
            <span className="mx-1.5 text-muted-foreground">&middot;</span>
            <span className="text-alphabyte-blue">AI</span>
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Address */}
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
              Address
            </p>
            <address className="not-italic text-body-sm text-muted-foreground leading-relaxed">
              {address.street}
              <br />
              {address.city}
            </address>
          </div>

          {/* Services */}
          {servicesNav?.children && (
            <div>
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
                Services
              </p>
              <ul className="space-y-3">
                {servicesNav.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className={linkClasses}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools */}
          {toolsNav?.children && (
            <div>
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
                Tools
              </p>
              <ul className="space-y-3">
                {toolsNav.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className={linkClasses}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Case Studies */}
          {caseStudiesNav?.children && (
            <div>
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
                Case Studies
              </p>
              <ul className="space-y-3">
                {caseStudiesNav.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className={linkClasses}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company */}
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect (socials) */}
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(linkClasses, "inline-flex items-center gap-2")}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border-default pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-muted-foreground">
            &copy; Alphabyte {new Date().getFullYear()}
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm text-muted-foreground transition-colors hover:text-alphabyte-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
