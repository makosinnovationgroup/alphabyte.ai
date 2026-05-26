import type { Metadata } from "next";
import Link from "next/link";
import {
  Chevron,
  CommitRow,
  EyebrowChip,
  HardRule,
  HexgridSection,
  SectionLabel,
  TypedHero,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Our Work - AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing. Real deployments, not POCs.",
  alternates: {
    canonical: "/our-work/",
  },
  openGraph: {
    title: "Our Work - AI Consulting Case Studies",
    description:
      "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing.",
    url: "/our-work/",
    images: [
      {
        url: "/og/our-work.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Our Work - AI Consulting Case Studies",
      },
    ],
  },
  twitter: {
    title: "Our Work - AI Consulting Case Studies",
    description:
      "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing.",
    images: ["/og/our-work.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Work - AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing. Real deployments, not proofs-of-concept.",
  url: "https://alphabyte.ai/our-work/",
  isPartOf: { "@id": "https://alphabyte.ai/#website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabyte.ai/" },
    { "@type": "ListItem", position: 2, name: "Our Work", item: "https://alphabyte.ai/our-work/" },
  ],
};

const caseStudies = [
  {
    headerTags: "DTC E-COMMERCE · PAID MEDIA · NORTH AMERICA",
    clientName: "DTC E-Commerce Brand",
    projectTitle: "AI-Powered Media Buy Analytics Agent",
    body: "Custom Power BI MCP server connecting Claude to Microsoft Fabric semantic models. Media buyers ask plain-English questions and get auditable, DAX-grounded answers in seconds.",
    href: "/our-work/media-buy-analytics/",
  },
  {
    headerTags: "REVERSE LOGISTICS · ELECTRONICS · GLOBAL",
    clientName: "Major Supplier",
    projectTitle: "AI-Powered Executive Productivity Suite",
    body: "Custom Claude plugin giving leadership a single command surface across GSuite, Slack, Power BI, Fireflies, and more. Purpose-built agents delivering automated morning briefs, spend reports, and post-call summaries.",
    href: "/our-work/circular-economy-platform/",
  },
  {
    headerTags: "CONSTRUCTION · MULTI-ENTITY · NORTH AMERICA",
    clientName: "Construction Firm",
    projectTitle: "AI-Powered Compliance Intelligence Agent",
    body: "Custom AI compliance agent that navigates the firm's full regulatory code library with citation-grade accuracy. Knowledge graph architecture integrated into a custom MCP server with org-wide Claude Desktop access.",
    href: "/our-work/fire-protection-compliance/",
  },
  {
    headerTags: "PUBLIC SECTOR · COMMUNITY HOUSING · CANADA",
    clientName: "Community Housing Organisation",
    projectTitle: "AI Enablement: Foundation for an Intelligent Organisation",
    body: "End-to-end Data and AI readiness assessment with a seven-recommendation roadmap. Data governance, workflow documentation, and a shared analytical foundation leading to five purpose-built Claude agents.",
    href: "/our-work/community-housing-organisation/",
  },
];

export default function OurWorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, breadcrumbSchema]),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Work" },
        ]}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / INDEX / OUR WORK" />

          <div className="mb-7">
            <EyebrowChip>Our Work · In Production</EyebrowChip>
          </div>

          <TypedHero
            pre="The most credible proof is the work we are "
            word="shipping today."
            post=""
          />

          <HardRule className="mb-7" />

          <div className="max-w-[60ch] space-y-4">
            <p className="text-[17px] leading-[1.55] text-ink">
              The following engagements are in active delivery. References can
              be arranged on request, subject to client approval.
            </p>
          </div>
        </div>
      </HexgridSection>

      {/* 02 CASE STUDIES */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / WORK / ENGAGEMENTS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            Four live deployments. Pick a path to dig in.
          </p>

          <div className="border-t border-ink">
            {caseStudies.map((study) => (
              <CommitRow
                key={study.clientName}
                author={`${study.headerTags} · ${study.clientName}`}
                title={study.projectTitle}
                body={study.body}
                tag="→ READ CASE"
                href={study.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 03 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[24ch]">
              Want to talk through what we could build for you?
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              45 minutes. No cost. No obligation.
            </p>
            <DiscoveryCallButton variant="dark" size="lg">
              Book a Discovery Call
            </DiscoveryCallButton>
          </div>
        </div>
      </HexgridSection>
    </main>
  );
}

function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
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
