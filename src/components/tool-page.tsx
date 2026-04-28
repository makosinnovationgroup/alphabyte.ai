"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ToolPageProps {
  breadcrumb: BreadcrumbItem[];
  eyebrow: string;
  h1: string;
  subhead: string;
  body: string[];
  primaryCta: {
    label: string;
    action: "modal" | "link";
    href?: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  partnerCard?: {
    eyebrow: string;
    body: string;
  };
  usedAcrossServices?: {
    label: string;
    href: string;
  }[];
  deliverablesSectionTitle: string;
  deliverablesLayout: "grid" | "list";
  deliverables: {
    icon: string;
    title: string;
    body: string;
  }[];
  inActiveUseSectionTitle?: string;
  inActiveUse?: {
    eyebrow: string;
    title: string;
    body: string;
  }[];
  rightForYou?: string[];
  notRightForYou?: string[];
  closingCta?: {
    heading: string;
    subhead: string;
    cta: { label: string; action: "modal" };
  };
}

export function ToolPage({
  breadcrumb,
  eyebrow,
  h1,
  subhead,
  body,
  primaryCta,
  secondaryCta,
  partnerCard,
  usedAcrossServices,
  deliverablesSectionTitle,
  deliverablesLayout,
  deliverables,
  inActiveUseSectionTitle,
  inActiveUse,
  rightForYou,
  notRightForYou,
  closingCta,
}: ToolPageProps) {
  const hasSidebar = !!partnerCard;

  return (
    <main>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border-default px-6 py-4 md:px-10 lg:px-16"
      >
        <ol className="mx-auto flex max-w-[1600px] items-center gap-2 text-body-sm">
          {breadcrumb.map((item, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-muted-foreground">
                    /
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-alphabyte-blue transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* 1. Hero */}
      <section className="border-b border-border-default px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:px-16">
        <div
          className={`mx-auto max-w-[1600px]${
            hasSidebar
              ? " grid grid-cols-1 gap-10 md:grid-cols-[1fr_280px] md:gap-12"
              : ""
          }`}
        >
          {/* Left / main column */}
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-display tracking-brand-tight">{h1}</h1>
            <p className="mt-3 text-2xl text-muted-foreground">
              {subhead}
            </p>
            <div className="mt-6 max-w-[55ch] space-y-4">
              {body.map((paragraph, i) => (
                <p key={i} className="text-lg text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {primaryCta.action === "modal" ? (
                <DiscoveryCallButton variant="dark" size="md">
                  {primaryCta.label}
                </DiscoveryCallButton>
              ) : (
                <Button variant="dark" size="md" asChild>
                  <Link href={primaryCta.href!}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                >
                  &larr; {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Right sidebar (Claude only) */}
          {hasSidebar && (
            <div className="flex flex-col gap-6">
              <div className="rounded-md bg-foreground p-6">
                <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-green">
                  ★ {partnerCard!.eyebrow}
                </p>
                <p className="mt-3 text-body text-white">
                  {partnerCard!.body}
                </p>
              </div>
              {usedAcrossServices && usedAcrossServices.length > 0 && (
                <div className="rounded-md border border-border-default p-6">
                  <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                    Used across all services
                  </p>
                  <ul className="mt-3 divide-y divide-border-default">
                    {usedAcrossServices.map((service, i) => (
                      <li key={i} className="py-2 first:pt-0 last:pb-0">
                        <Link
                          href={service.href}
                          className="text-body text-foreground transition-colors hover:text-alphabyte-blue"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 2. Deliverables */}
      <section className="px-6 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center gap-4">
            <h2 className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
              {deliverablesSectionTitle}
            </h2>
            <div className="h-px flex-1 bg-border-default" />
          </div>

          {deliverablesLayout === "grid" ? (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]" style={{ gridTemplateRows: `repeat(${Math.ceil(deliverables.length / 2)}, auto)` }}>
              {/* Vertical divider (hidden on mobile) */}
              <div className="col-start-2 hidden bg-border-default md:block" style={{ gridRow: `1 / ${Math.ceil(deliverables.length / 2) + 1}` }} />
              {deliverables.map((item, i) => {
                const isLeft = i % 2 === 0;
                const rowIdx = Math.floor(i / 2);
                return (
                  <div
                    key={i}
                    className={isLeft ? "md:col-start-1 md:pr-12" : "md:col-start-3 md:pl-12"}
                    style={{ gridRow: rowIdx + 1 }}
                  >
                    <div className={`flex gap-4 py-8 border-b border-border-default${rowIdx > 0 ? " border-t" : ""}`}>
                      <span
                        className="mt-0.5 shrink-0 text-2xl"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-body font-bold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-body text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-8 divide-y divide-border-default">
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4${i > 0 ? " pt-8" : ""} pb-8 last:pb-0`}
                >
                  <span
                    className="mt-0.5 shrink-0 text-2xl"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-body font-bold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-body text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. In active use today */}
      {inActiveUse && inActiveUse.length > 0 && (
        <section className="bg-alphabyte-grey/50">
          <div className="px-6 py-12 md:px-10 md:py-16 lg:px-16">
            <div className="mx-auto max-w-[1600px]">
              <div className="flex items-center gap-4">
                <h2 className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                  {inActiveUseSectionTitle ?? "In active use today"}
                </h2>
                <div className="h-px flex-1 bg-border-default" />
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                {inActiveUse.map((card, i) => (
                  <div key={i} className="rounded-lg border border-border-default bg-white p-6">
                    <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                      {card.eyebrow}
                    </p>
                    <p className="mt-3 text-body font-bold text-foreground">
                      {card.title}
                    </p>
                    <p className="mt-2 text-body text-muted-foreground">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Right for you / Not right for you */}
      {rightForYou && notRightForYou && (
        <section className="bg-alphabyte-grey/50 px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                    Right for you if
                  </h2>
                  <div className="h-px flex-1 bg-border-default" />
                </div>
                <div className="rounded-md bg-emerald-50 p-6 md:p-8">
                  <ul className="divide-y divide-emerald-200/60">
                    {rightForYou.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 py-4 text-body text-foreground first:pt-0 last:pb-0"
                      >
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                    Not right for you if
                  </h2>
                  <div className="h-px flex-1 bg-border-default" />
                </div>
                <div className="rounded-md bg-red-50 p-6 md:p-8">
                  <ul className="divide-y divide-red-200/60">
                    {notRightForYou.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 py-4 text-body text-foreground first:pt-0 last:pb-0"
                      >
                        <X
                          className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Closing CTA */}
      {closingCta && (
        <section className="border-t border-border-default px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mx-auto max-w-[1600px] text-center">
            <h2 className="text-headline tracking-brand-snug text-foreground">
              {closingCta.heading}
            </h2>
            <p className="mt-3 text-body text-muted-foreground">
              {closingCta.subhead}
            </p>
            <div className="mt-8">
              <DiscoveryCallButton variant="dark" size="md">
                {closingCta.cta.label}
              </DiscoveryCallButton>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
