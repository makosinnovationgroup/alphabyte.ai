import Link from "next/link";
import {
  CapabilityGrid,
  Chevron,
  CommitRow,
  EyebrowChip,
  FitColumns,
  HardRule,
  HexgridSection,
  QAGrid,
  SectionLabel,
  TypedHero,
} from "@/components/operator";
import { Button } from "@/components/ui/button";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export interface ToolFaqEntry {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ToolPageProps {
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
  partnerCard?: {
    eyebrow: string;
    body: string;
  };
  usedAcrossServices?: {
    label: string;
    href: string;
  }[];
  deliverablesSectionTitle: string;
  /** Kept for backwards-compat with the wrapper API; the new layout always uses the grid. */
  deliverablesLayout?: "grid" | "list";
  deliverables: {
    title: string;
    body: string;
  }[];
  inActiveUseSectionTitle?: string;
  inActiveUse?: {
    eyebrow: string;
    title: string;
    body: string;
    href?: string;
  }[];
  rightForYou?: string[];
  notRightForYou?: string[];
  faq?: ToolFaqEntry[];
  closingCta?: {
    heading: string;
    subhead: string;
    cta: { label: string; action: "modal" };
  };
}

export function ToolPage({
  slug,
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
  deliverables,
  inActiveUseSectionTitle,
  inActiveUse,
  faq,
  rightForYou,
  notRightForYou,
  closingCta,
}: ToolPageProps) {
  const toolLabel = (slug ?? h1).toUpperCase().replace(/-/g, " ");

  return (
    <main>
      <Breadcrumb items={breadcrumb} />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text={`01 / TOOL / ${toolLabel}`} />

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <div className="mb-7">
                <EyebrowChip>{eyebrow}</EyebrowChip>
              </div>

              <TypedHero pre="" word={h1} post="." />

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

            <div className="flex flex-col gap-4">
              {partnerCard && (
                <div className="border border-ink bg-canvas p-5">
                  <div className="font-mono text-[10.5px] tracking-[0.08em] text-alphabyte-blue uppercase mb-2 flex items-center gap-1.5">
                    <span>★</span>
                    {partnerCard.eyebrow}
                  </div>
                  <p className="text-[14px] leading-[1.55] text-ink">
                    {partnerCard.body}
                  </p>
                </div>
              )}

              {usedAcrossServices && usedAcrossServices.length > 0 && (
                <div className="border border-border-default bg-white p-5">
                  <div className="font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase mb-3 flex items-center">
                    <Chevron />
                    Used across services
                  </div>
                  <ul className="space-y-2 font-mono text-[13px]">
                    {usedAcrossServices.map((s, i) => (
                      <li key={i}>
                        <Link
                          href={s.href}
                          className="text-ink transition-colors hover:text-alphabyte-blue flex items-center gap-2"
                        >
                          <span className="text-brand-live">›</span>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </HexgridSection>

      {/* 02 CAPABILITIES */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / CAPABILITIES / WHAT WE CONFIGURE" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            {deliverablesSectionTitle}
          </p>

          <CapabilityGrid capabilities={deliverables} />
        </div>
      </section>

      {/* 03 IN ACTIVE USE */}
      {inActiveUse && inActiveUse.length > 0 && (
        <section className="bg-canvas pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="03 / PROOF / IN ACTIVE USE" />

            <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
              <Chevron />
              {inActiveUseSectionTitle ?? "Live deployments running today."}
            </p>

            <div className="border-t border-ink">
              {inActiveUse.map((card, i) => (
                <CommitRow
                  key={i}
                  author={card.eyebrow}
                  title={card.title}
                  body={card.body}
                  tag={card.href ? "→ READ CASE" : "PRODUCTION"}
                  href={card.href}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 FIT */}
      {rightForYou && notRightForYou && (
        <section className="bg-white border-y border-border-default pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="04 / FIT / IS THIS YOU?" />

            <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
              <Chevron />
              Where this tool fits. Where it does not.
            </p>

            <FitColumns
              rightForYou={rightForYou}
              notRightForYou={notRightForYou}
            />
          </div>
        </section>
      )}

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

      {/* 06 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="06 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[22ch]">
              {closingCta?.heading ?? "Ready to deploy?"}
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              {closingCta?.subhead ??
                "45 minutes. No cost. No obligation."}
            </p>
            <DiscoveryCallButton variant="dark" size="lg">
              {closingCta?.cta.label ?? "Book a Discovery Call"}
            </DiscoveryCallButton>
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
