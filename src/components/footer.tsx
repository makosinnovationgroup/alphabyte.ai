"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/navigation";
import { companyLinks, legalLinks, contact } from "@/lib/footer-data";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

const linkClasses = "text-body-sm text-foreground transition-colors hover:text-alphabyte-blue";

const servicesNav = navigation.find((item) => item.label === "Services");
const toolsNav = navigation.find((item) => item.label === "Tools");
const ourWorkNav = navigation.find((item) => item.label === "Our Work");

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-border-default">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:py-24">
        {/* Wordmark */}
        <div className="mb-10">
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

        {/* CTA */}
        <div className="mb-16">
          <DiscoveryCallButton variant="dark" size="sm">
            Book a Discovery Call
          </DiscoveryCallButton>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Contact */}
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
              Contact
            </p>
            <address className="not-italic text-body-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-body-sm text-muted-foreground transition-colors hover:text-alphabyte-blue"
                >
                  {contact.email}
                </a>
              </p>
              <p>
                <a
                  href={contact.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(linkClasses, "inline-flex items-center gap-2 text-muted-foreground")}
                >
                  <Linkedin className="h-4 w-4" />
                  {contact.linkedin.label}
                </a>
              </p>
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

          {/* Our Work */}
          {ourWorkNav?.children && (
            <div>
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-4">
                Our Work
              </p>
              <ul className="space-y-3">
                {ourWorkNav.children.map((child) => (
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
