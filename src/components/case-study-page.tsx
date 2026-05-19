import type { ReactNode } from "react";
import Link from "next/link";
import {
  Chevron,
  EyebrowChip,
  HardRule,
  HexgridSection,
  PullQuote,
  SectionLabel,
  StatCard,
} from "@/components/operator";
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

export interface CaseStudyFigure {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyPageProps {
  slug: string;
  caseLabel: string;
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
  figure?: CaseStudyFigure;
}

export function CaseStudyPage({
  caseLabel,
  breadcrumb,
  eyebrow,
  h1,
  subhead,
  tagPills,
  stats,
  body,
  sidebar,
  closingCta,
  figure,
}: CaseStudyPageProps) {
  const eyebrowChips = eyebrow.split(" · ").map((s) => s.trim()).filter(Boolean);

  return (
    <main>
      <Breadcrumb items={breadcrumb} />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text={`01 / CASE / ${caseLabel.toUpperCase()}`} />

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <div className="mb-7 flex flex-wrap items-center gap-2">
                {eyebrowChips.map((chip, i) => (
                  <EyebrowChip key={i} star={i === 0}>
                    {chip}
                  </EyebrowChip>
                ))}
              </div>

              <h1
                className={
                  "font-sans font-black text-display text-ink mb-7 min-h-[1.95em] text-balance tracking-[-0.02em] leading-[0.98]"
                }
              >
                {h1}
                <span className="text-alphabyte-blue">.</span>
              </h1>

              <HardRule className="mb-7" />

              <p className="mb-7 max-w-[60ch] text-[22px] leading-[1.35] tracking-[-0.01em] text-ink font-medium">
                {subhead}
              </p>

              <div className="flex flex-wrap gap-2">
                {tagPills.map((pill, i) => (
                  <span
                    key={i}
                    className="font-mono text-[12px] px-3 py-1.5 bg-canvas border border-border-default text-ink flex items-center gap-2 before:content-[''] before:w-[7px] before:h-[7px] before:bg-brand-live before:shrink-0"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Client meta sidebar */}
            <aside className="border border-border-default bg-white">
              <div className="border-b border-border-default px-5 py-5">
                <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-1.5 flex items-center">
                  <Chevron />
                  Client
                </div>
                <p className="text-[14.5px] font-bold text-ink">
                  {sidebar.client.name}
                </p>
                <p className="mt-1 font-mono text-[11.5px] text-muted-foreground">
                  {sidebar.client.meta}
                </p>
              </div>

              <SidebarList
                label="Services Delivered"
                items={sidebar.servicesDelivered}
              />

              <SidebarList
                label="Technology"
                items={sidebar.technology}
                last
              />
            </aside>
          </div>
        </div>
      </HexgridSection>

      {/* 02 WHAT WE BUILT */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / NARRATIVE / WHAT WE BUILT" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            The shape of the engagement, top to bottom.
          </p>

          <div className="max-w-[70ch] space-y-5">
            <BodyRenderer sections={body} />
          </div>
        </div>
      </section>

      {/* 03 OUTCOMES */}
      {stats.length > 0 && (
        <section className="bg-canvas pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="03 / OUTCOMES / WHAT IT PRODUCED" />

            <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
              <Chevron />
              Real measurements, no rounding.
            </p>

            <div
              className={`grid gap-4 ${
                stats.length === 4
                  ? "grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1"
                  : stats.length === 3
                    ? "grid-cols-3 max-lg:grid-cols-1"
                    : "grid-cols-2 max-md:grid-cols-1"
              }`}
            >
              {stats.map((s, i) => (
                <StatCard key={i} num={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 IN THEIR WORDS */}
      {sidebar.pullQuote && (
        <HexgridSection className="bg-white border-y border-border-default pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="04 / VOICE / IN THEIR WORDS" />

            <PullQuote quote={sidebar.pullQuote} />
          </div>
        </HexgridSection>
      )}

      {/* 05 FIGURE (optional) */}
      {figure && (
        <section className="bg-canvas pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="05 / FIGURE / REFERENCE" />

            <figure className="border border-border-default bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={figure.src}
                alt={figure.alt}
                className="w-full block"
                width={1200}
                height={800}
                loading="lazy"
              />
              {figure.caption && (
                <figcaption className="border-t border-border-default px-5 py-3 font-mono text-[12px] text-muted-foreground tracking-[0.02em]">
                  {figure.caption}
                </figcaption>
              )}
            </figure>
          </div>
        </section>
      )}

      {/* 06 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="06 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[24ch]">
              {closingCta.heading}
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              {closingCta.subhead}
            </p>
            <DiscoveryCallButton variant="dark" size="lg">
              {closingCta.cta.label}
            </DiscoveryCallButton>
          </div>
        </div>
      </HexgridSection>
    </main>
  );
}

function SidebarList({
  label,
  items,
  last = false,
}: {
  label: string;
  items: string[];
  last?: boolean;
}) {
  return (
    <div className={last ? "px-5 py-5" : "px-5 py-5 border-b border-border-default"}>
      <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-3 flex items-center">
        <Chevron />
        {label}
      </div>
      <ul className="space-y-2 font-mono text-[12.5px]">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-ink flex items-center gap-2 before:content-[''] before:w-[6px] before:h-[6px] before:bg-brand-live before:shrink-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BodyRenderer({ sections }: { sections: BodySection[] }) {
  const elements: ReactNode[] = [];
  let i = 0;
  while (i < sections.length) {
    if (sections[i].indent) {
      const group: BodySection[] = [];
      const startIndex = i;
      while (i < sections.length && sections[i].indent) {
        group.push(sections[i]);
        i += 1;
      }
      elements.push(
        <div
          key={`indent-${startIndex}`}
          className="border-l-2 border-brand-live pl-6 my-2 space-y-4"
        >
          {group.map((section, j) => renderSection(section, j))}
        </div>,
      );
    } else {
      elements.push(renderSection(sections[i], i));
      i += 1;
    }
  }
  return <>{elements}</>;
}

function renderSection(section: BodySection, key: number) {
  switch (section.type) {
    case "heading":
      return (
        <h3
          key={key}
          className="pt-3 first:pt-0 font-mono text-[12px] tracking-[0.08em] uppercase text-alphabyte-blue flex items-center"
        >
          <Chevron />
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={key} className="text-[16.5px] leading-[1.65] text-ink">
          {section.text}
        </p>
      );
    case "callout":
      return (
        <blockquote
          key={key}
          className="border-l-2 border-ink pl-6 py-1 font-mono italic text-[15px] leading-[1.6] text-ink"
        >
          {section.text}
        </blockquote>
      );
  }
}

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border-default bg-canvas"
    >
      <ol className="mx-auto max-w-[1400px] flex items-center gap-2 px-8 py-3 font-mono text-[11px] tracking-[0.04em] uppercase">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-muted-foreground">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-alphabyte-blue transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
