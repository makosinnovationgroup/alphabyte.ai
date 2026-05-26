import Link from "next/link";
import {
  Chevron,
  EyebrowChip,
  FitColumns,
  HardRule,
  HexgridSection,
  QAGrid,
  SectionLabel,
  StatCard,
  TrackTableCompact,
  TypedHero,
} from "@/components/operator";
import { Button } from "@/components/ui/button";
import { DiscoveryCallButton } from "@/components/discovery-call-button";
import { tracks } from "@/lib/tracks";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ServiceFaqEntry {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  slug: string;
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
  stats: { value: string; label: string }[];
  thirtyDays: {
    weeks: { label: string; body: string }[];
    dayThirty: { label: string; body: string };
  };
  deliverables: {
    title: string;
    body: string;
  }[];
  rightForYou: string[];
  notRightForYou: string[];
  timeline: string;
  faq?: ServiceFaqEntry[];
}

export function ServicePage({
  slug,
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
  faq,
}: ServicePageProps) {
  const currentTrack = tracks.find((t) => t.slug === slug);
  const trackLabel = (currentTrack?.label ?? h1).toUpperCase();
  const relatedTracks = tracks.filter((t) => t.slug !== slug);

  const methodSteps = [
    ...thirtyDays.weeks.map((w) => ({ label: w.label, body: w.body })),
    { label: thirtyDays.dayThirty.label, body: thirtyDays.dayThirty.body },
  ];

  return (
    <main>
      <Breadcrumb items={breadcrumb} />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text={`01 / SERVICE / ${trackLabel}`} />

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <div className="mb-7">
                <EyebrowChip>{eyebrow}</EyebrowChip>
              </div>

              <TypedHero pre="" word={`${h1}.`} post="" />

              <HardRule className="mb-7" />

              <p className="mb-6 max-w-[60ch] text-[22px] leading-[1.35] tracking-[-0.01em] text-ink font-medium">
                {subhead}
              </p>

              <div className="mb-9 max-w-[60ch] space-y-4">
                {body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[17px] leading-[1.55] text-ink"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {primaryCta.action === "modal" ? (
                  <DiscoveryCallButton variant="dark" size="md">
                    {primaryCta.label}
                  </DiscoveryCallButton>
                ) : (
                  <Button variant="dark" size="md" caret="↵" asChild>
                    <Link href={primaryCta.href!}>{primaryCta.label}</Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="font-mono text-[13px] text-alphabyte-blue transition-colors hover:text-ink"
                  >
                    ← {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {stats.map((stat, i) => (
                <StatCard key={i} num={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </HexgridSection>

      {/* 02 METHOD / FIRST 30 DAYS */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / METHOD / FIRST 30 DAYS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            Three weeks to running. Day 30 to operating.
          </p>

          <div className="border-t border-ink">
            {methodSteps.map((step, i) => (
              <div
                key={i}
                className="grid gap-8 py-8 border-b border-border-default grid-cols-[180px_1fr] max-lg:grid-cols-1 max-lg:gap-3"
              >
                <div className="font-mono text-[14px] tracking-[0.04em] uppercase text-alphabyte-blue pt-1">
                  {step.label}
                </div>
                <p className="text-[16px] leading-[1.6] text-ink max-w-[65ch]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 DELIVERABLES */}
      <section className="bg-canvas pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / DELIVERABLES / WHAT'S INCLUDED" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            Every engagement ships these. No upsells, no add-ons.
          </p>

          <div className="border-t border-ink">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="grid gap-8 py-7 border-b border-border-default grid-cols-[60px_1fr] max-lg:grid-cols-[40px_1fr] max-lg:gap-4"
              >
                <div className="font-mono text-[12px] tracking-[0.08em] uppercase text-muted-foreground pt-[6px]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold tracking-[-0.01em] mb-2 leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-ink/85 max-w-[65ch]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 FIT */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="04 / FIT / IS THIS YOU?" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            Where this engagement compounds. Where it does not.
          </p>

          <FitColumns
            rightForYou={rightForYou}
            notRightForYou={notRightForYou}
          />
        </div>
      </section>

      {/* 05 Q&A */}
      {faq && faq.length > 0 && (
        <section className="bg-canvas pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="05 / Q&A / WHAT WE GET ASKED" />

            <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
              <Chevron />
              Direct answers. No qualifiers.
            </p>

            <QAGrid items={faq} />
          </div>
        </section>
      )}

      {/* 06 RELATED TRACKS */}
      {relatedTracks.length > 0 && (
        <section className="bg-white border-y border-border-default pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="06 / RELATED / OTHER PATHS" />

            <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
              <Chevron />
              All tracks deploy on the same governed substrate. Pick a different
              entry point.
            </p>

            <TrackTableCompact tracks={relatedTracks} />
          </div>
        </section>
      )}

      {/* 07 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="07 / CTA / DISCOVERY CALL" />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="max-w-[60ch]">
              <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[22ch]">
                Ready to start?
              </h2>
              <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
                The discovery call is where we work out what this track looks
                like inside your organization. 45 minutes, no cost, no
                obligation.
              </p>
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
            </div>

            <div className="border border-ink bg-canvas p-6 lg:max-w-[360px]">
              <div className="font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase mb-3 flex items-center">
                <Chevron />
                Timeline
              </div>
              <p className="font-mono text-[15px] text-ink leading-[1.5]">
                {timeline}
              </p>
            </div>
          </div>
        </div>
      </HexgridSection>
    </main>
  );
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
