"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ServicePageProps {
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
  stats: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
  ];
  thirtyDays: {
    weeks: { label: string; body: string }[];
    dayThirty: { label: string; body: string };
  };
  deliverables: {
    icon: ReactNode;
    title: string;
    body: string;
  }[];
  rightForYou: string[];
  notRightForYou: string[];
  timeline: string;
}

export function ServicePage({
  breadcrumb,
  eyebrow,
  h1,
  subhead,
  body,
  primaryCta,
  secondaryCta,
  stats,
  thirtyDays,
  deliverables,
  rightForYou,
  notRightForYou,
  timeline,
}: ServicePageProps) {
  return (
    <main>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border-default bg-canvas px-6 py-4 md:px-10 lg:px-16">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 text-body-sm">
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
      <section className="px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-display tracking-brand-tight">{h1}</h1>
          <p className="mt-3 text-headline tracking-brand-snug text-muted-foreground">
            {subhead}
          </p>
          <div className="mt-6 max-w-[55ch] space-y-4">
            {body.map((paragraph, i) => (
              <p key={i} className="text-body text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 2. CTA row */}
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
      </section>

      {/* 3. Stat bar */}
      <section className="bg-foreground">
        <div className="flex flex-col sm:flex-row">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex-1 px-6 py-10 md:px-10 md:py-14${
                i > 0
                  ? " border-t border-white/20 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="text-headline tracking-brand-snug text-alphabyte-green">
                {stat.value}
              </p>
              <p className="mt-1 text-body-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 30-days box */}
      <section className="px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-md border border-border-default bg-alphabyte-grey/50 p-6 md:p-10">
            <h2 className="mb-6 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue md:mb-8">
              What the first 30 days look like
            </h2>
            {thirtyDays.weeks.map((week, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 gap-2 py-6 md:grid-cols-[160px_1fr] md:gap-8 ${
                  i > 0 ? "border-t border-border-default" : ""
                }`}
              >
                <p className="text-body font-bold text-foreground">
                  {week.label}
                </p>
                <p className="text-body text-foreground">{week.body}</p>
              </div>
            ))}
            <div className="grid grid-cols-1 gap-2 border-t border-border-default py-6 md:grid-cols-[160px_1fr] md:gap-8">
              <p className="text-body font-bold text-alphabyte-blue">
                {thirtyDays.dayThirty.label}
              </p>
              <p className="text-body text-foreground">
                {thirtyDays.dayThirty.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deliverables */}
      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <h2 className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
              What we deliver
            </h2>
            <div className="h-px flex-1 bg-border-default" />
          </div>
          <div className="mt-8 divide-y divide-border-default">
            {deliverables.map((item, i) => (
              <div key={i} className={`flex gap-4${i > 0 ? " pt-8" : ""} pb-8 last:pb-0`}>
                <span className="mt-0.5 shrink-0 text-2xl" aria-hidden="true">
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
        </div>
      </section>

      {/* 6. Right / Not-right panels */}
      <section className="bg-alphabyte-grey/50 px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Right for you */}
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
                    <li key={i} className="flex gap-3 py-4 text-body text-foreground first:pt-0 last:pb-0">
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

            {/* Not right for you */}
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
                    <li key={i} className="flex gap-3 py-4 text-body text-foreground first:pt-0 last:pb-0">
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

      {/* 7. Timeline footer */}
      <section className="border-t border-border-default">
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-8 md:px-10 md:py-12 lg:px-16">
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
              Timeline
            </p>
            <p className="mt-1 text-body text-foreground">
              {timeline}
            </p>
          </div>
          <DiscoveryCallButton variant="dark" size="md">
            Book a Discovery Call
          </DiscoveryCallButton>
        </div>
      </section>
    </main>
  );
}
