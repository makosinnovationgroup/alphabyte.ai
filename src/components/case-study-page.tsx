"use client";

import type React from "react";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BodySection {
  type: "heading" | "paragraph" | "callout";
  text: string;
  indent?: boolean;
}

export interface CaseStudyPageProps {
  breadcrumb: BreadcrumbItem[];
  eyebrow: string;
  h1: string;
  subhead: string;
  tagPills: string[];
  stats: { value: string; label: string }[];
  body: BodySection[];
  sidebar: {
    client: { name: string; meta: string };
    servicesDelivered: string[];
    technology: string[];
    pullQuote: string;
  };
  closingCta: {
    heading: string;
    subhead: string;
    cta: { label: string; action: "modal" };
  };
}

export function CaseStudyPage({
  breadcrumb,
  eyebrow,
  h1,
  subhead,
  tagPills,
  stats,
  body,
  sidebar,
  closingCta,
}: CaseStudyPageProps) {
  return (
    <main>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border-default px-6 py-4 md:px-10 lg:px-16">
        <ol className="mx-auto max-w-[1600px] flex items-center gap-2 text-body-sm">
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

      {/* 1. Dark hero band */}
      <section className="bg-foreground px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-green">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-display tracking-brand-tight text-white">
            {h1}
          </h1>
          <p className="mt-3 text-2xl text-white/70">{subhead}</p>

          {/* Tag pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tagPills.map((pill, i) => (
              <span
                key={i}
                className="rounded-full border border-alphabyte-blue bg-alphabyte-blue/10 px-4 py-1.5 text-body-sm font-medium text-alphabyte-blue"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Stats grid */}
      <section className="border-b border-border-default px-6 py-10 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-lg border border-border-default bg-white px-6 py-8"
            >
              <p className="text-headline tracking-brand-snug text-alphabyte-blue">
                {stat.value}
              </p>
              <p className="mt-2 text-body-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Two-column body */}
      <section className="border-b border-border-default">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px]">
          {/* Left column — body content */}
          <div className="space-y-5 py-12 pl-6 pr-6 md:py-16 md:pl-10 md:pr-12 lg:pl-16">
            {(() => {
              const elements: React.ReactNode[] = [];
              let i = 0;
              while (i < body.length) {
                if (body[i].indent) {
                  const group: typeof body = [];
                  while (i < body.length && body[i].indent) {
                    group.push(body[i]);
                    i++;
                  }
                  elements.push(
                    <div key={`indent-${i}`} className="border-l-4 border-alphabyte-blue pl-6 space-y-4">
                      {group.map((section, j) => {
                        switch (section.type) {
                          case "heading":
                            return (
                              <h2 key={j} className="text-lg font-bold text-foreground">
                                {section.text}
                              </h2>
                            );
                          case "paragraph":
                            return (
                              <p key={j} className="text-body text-foreground">
                                {section.text}
                              </p>
                            );
                        }
                      })}
                    </div>
                  );
                } else {
                  const section = body[i];
                  switch (section.type) {
                    case "heading":
                      elements.push(
                        <h2 key={i} className="pt-4 text-lg font-bold text-foreground first:pt-0">
                          {section.text}
                        </h2>
                      );
                      break;
                    case "paragraph":
                      elements.push(
                        <p key={i} className="text-body text-foreground">
                          {section.text}
                        </p>
                      );
                      break;
                    case "callout":
                      elements.push(
                        <blockquote key={i} className="border-l-4 border-alphabyte-blue py-2 pl-6 text-body italic text-foreground">
                          {section.text}
                        </blockquote>
                      );
                      break;
                  }
                  i++;
                }
              }
              return elements;
            })()}
          </div>

          {/* Right column — sidebar */}
          <aside className="relative mt-12 border-l border-border-default bg-canvas py-12 pl-8 pr-6 md:mt-0 md:py-16 md:pr-10 lg:pr-16 after:absolute after:inset-y-0 after:left-full after:w-[50vw] after:bg-canvas">
            {/* Client */}
            <div className="pb-6">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                Client
              </p>
              <p className="mt-2 text-body font-bold text-foreground">
                {sidebar.client.name}
              </p>
              <p className="mt-1 text-body-sm text-muted-foreground">
                {sidebar.client.meta}
              </p>
            </div>

            {/* Services Delivered */}
            <div className="border-t border-border-default py-6">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                Services Delivered
              </p>
              <ul className="mt-3 divide-y divide-border-default">
                {sidebar.servicesDelivered.map((item, i) => (
                  <li key={i} className="py-2 text-body-sm text-foreground first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology */}
            <div className="border-t border-border-default py-6">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                Technology
              </p>
              <ul className="mt-3 divide-y divide-border-default">
                {sidebar.technology.map((item, i) => (
                  <li key={i} className="py-2 text-body-sm text-foreground first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pull-quote */}
            <div className="border-t border-border-default pt-6">
              <div className="rounded-md border border-border-default bg-white p-5">
                <p className="text-body-sm italic text-muted-foreground">
                  &ldquo;{sidebar.pullQuote}&rdquo;
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
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
    </main>
  );
}
