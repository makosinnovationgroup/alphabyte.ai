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
  title: "About Alphabyte AI - Claude-Native Consulting",
  description:
    "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench. Operating across North America since 2016.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Alphabyte AI - Claude-Native Consulting",
    description:
      "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench.",
    url: "/about/",
    images: [
      {
        url: "/og/about.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - About Alphabyte AI - Claude-Native Consulting",
      },
    ],
  },
  twitter: {
    title: "About Alphabyte AI - Claude-Native Consulting",
    description:
      "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench.",
    images: ["/og/about.png"],
  },
};

const pillars = [
  {
    heading: "Bottom-up by design",
    body: "Every mid-market organization has someone who has quietly built something extraordinary with Claude. We find that person, understand what was built, and install the infrastructure that makes her capability visible, scalable, and available to the entire team. Then the next person. Until AI is compounding across the organization.",
  },
  {
    heading: "Claude is the entire practice",
    body: "Not a tool we use alongside others. The foundation every engagement is built on. Every engineer works exclusively with Claude. That focus is what makes us faster, more consistent, and more capable than a firm dividing its attention across ten platforms.",
  },
  {
    heading: "No junior bench",
    body: "The senior engineer who designs your solution builds it. The consultant who runs your initial discovery personally delivers your sprint. Two dedicated Claude engineers backed by a twenty-person delivery organization — but the people who show up for your engagement own it.",
  },
];

const activeDelivery = [
  {
    tag: "CONSTRUCTION FIRM · MULTI-ENTITY · NORTH AMERICA",
    title: "AI-Powered Compliance Intelligence Agent",
    body: "Custom MCP server and knowledge graph navigating a full regulatory code library with citation-grade accuracy. Integrated into Claude Desktop with org-wide access. Modular architecture for expansion into estimating and operations.",
    href: "/our-work/fire-protection-compliance/",
  },
  {
    tag: "MAJOR SUPPLIER · REVERSE LOGISTICS · GLOBAL",
    title: "AI-Powered Executive Productivity Suite",
    body: "Custom Claude plugin giving leadership a single command surface across GSuite, Slack, Power BI, and Fireflies. Purpose-built agents delivering automated briefs and on-demand workflows org-wide.",
    href: "/our-work/circular-economy-platform/",
  },
  {
    tag: "HOUSING SERVICES CORP. · PUBLIC SECTOR · CANADA",
    title: "AI Enablement Roadmap",
    body: "Six strategic recommendations including automated cross-program reporting delivered within federal data governance requirements.",
    href: "/our-work/community-housing-organisation/",
  },
];

const certifications = [
  "Microsoft Solutions Partner · Data & AI",
  "Anthropic Academy · Claude Certified",
  "SOC 2 Type II · In progress",
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Alphabyte AI",
  description:
    "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench. Operating across North America since 2016.",
  url: "https://alphabyte.ai/about/",
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / ABOUT / ALPHABYTE AI" />

          <div className="mb-7">
            <EyebrowChip>About · Practitioner-Led</EyebrowChip>
          </div>

          <TypedHero
            pre="Practitioner-led. "
            word="Claude-native."
            post=" Bottom-up by design."
          />

          <HardRule className="mb-7" />

          <div className="max-w-[60ch] space-y-4">
            <p className="text-[17px] leading-[1.55] text-ink">
              Alphabyte AI is the Claude-focused practice of Alphabyte
              Solutions, operating across North America since 2016.
            </p>
            <p className="text-[17px] leading-[1.55] text-ink">
              We are not a generalist AI consultancy with a Claude
              competency. Claude is the entire practice &mdash; every
              engagement, every engineer, every methodology built specifically
              for Claude deployment in mid-market organizations.
            </p>
          </div>
        </div>
      </HexgridSection>

      {/* 02 PILLARS */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / PRINCIPLES / THREE PILLARS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            What makes the practice coherent across every engagement.
          </p>

          <div className="grid gap-px bg-border-default border border-border-default lg:grid-cols-3 grid-cols-1">
            {pillars.map((p, i) => (
              <div key={p.heading} className="bg-white px-7 py-7">
                <div className="font-mono text-[11px] font-medium text-alphabyte-blue tracking-[0.06em] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="text-[18px] font-bold tracking-[-0.01em] mb-3 leading-[1.25]">
                  {p.heading}
                </h2>
                <p className="text-[14.5px] leading-[1.6] text-ink/85">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 PRACTICE + TEAM */}
      <section className="bg-canvas pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / PRACTICE / HERITAGE & TEAM" />

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-5">
              <p className="text-[17px] leading-[1.65] text-ink max-w-[60ch]">
                Our parent practice has delivered data warehousing, reporting
                and analytics, business intelligence, and custom application
                development to Canada&rsquo;s largest mechanical contractor, a
                provincial government, a professional regulatory body, a
                national public sector housing organization, multiple Canadian
                municipalities, and a substantial roster of mid-market
                operators across e-commerce, manufacturing, industrial
                services, and financial services.
              </p>
              <p className="text-[17px] leading-[1.65] text-ink max-w-[60ch]">
                That heritage is what allows us to engage credibly on the full
                technology stack beneath an AI deployment. The AI practice is
                built on that foundation &mdash; not grafted onto it.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border border-border-default bg-white px-5 py-5">
                <div className="font-mono text-[10.5px] tracking-[0.08em] text-alphabyte-blue uppercase mb-2 flex items-center">
                  <Chevron />
                  Claude engineering
                </div>
                <p className="text-[16px] font-bold text-ink mb-1.5">
                  Two dedicated Claude engineers
                </p>
                <p className="text-[14px] leading-[1.55] text-ink/80">
                  Full-time, exclusively Claude &mdash; MCP server
                  development, context engineering, agentic system design, and
                  Claude Code delivery. Both trained through Anthropic
                  Academy.
                </p>
              </div>
              <div className="border border-border-default bg-white px-5 py-5">
                <div className="font-mono text-[10.5px] tracking-[0.08em] text-alphabyte-blue uppercase mb-2 flex items-center">
                  <Chevron />
                  Delivery bench
                </div>
                <p className="text-[16px] font-bold text-ink mb-1.5">
                  Backed by a twenty-person delivery organization
                </p>
                <p className="text-[14px] leading-[1.55] text-ink/80">
                  Senior data engineers, solutions architects, technical
                  consultants, project managers, and adoption specialists from
                  ten years of mid-market and public sector delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 ACTIVE DELIVERY */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="04 / ACTIVE / WHAT WE'RE DELIVERING" />

          <div className="border-t border-ink">
            {activeDelivery.map((d) => (
              <CommitRow
                key={d.title}
                author={d.tag}
                title={d.title}
                body={d.body}
                tag="→ READ CASE"
                href={d.href}
              />
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/our-work/"
              className="font-mono text-[12px] text-alphabyte-blue hover:text-ink transition-colors flex items-center gap-1.5"
            >
              See all active work
              <span className="text-brand-live">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 05 CERTIFICATIONS */}
      <section className="bg-canvas pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="05 / CERTIFICATIONS / PARTNERSHIPS" />

          <ul className="grid gap-3 lg:grid-cols-3 grid-cols-1 max-w-[80ch]">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="font-mono text-[13px] text-ink bg-white border border-border-default px-4 py-3 flex items-center gap-2.5 before:content-[''] before:w-[7px] before:h-[7px] before:bg-brand-live before:shrink-0"
              >
                {cert}
              </li>
            ))}
          </ul>
          <p className="font-mono text-[12px] text-muted-foreground mt-6 flex items-center max-w-[80ch]">
            <Chevron />
            We are one of the only Claude Certified teams explicitly focused
            on mid-market — not enterprise, not startups.
          </p>
        </div>
      </section>

      {/* 06 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="06 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[24ch]">
              A discovery conversation takes 45 minutes.
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              No cost, no obligation. You describe your situation. We tell you
              candidly whether there is an engagement worth having and what you
              would have at day 30.
            </p>
            <DiscoveryCallButton variant="dark" size="lg">
              Book a Discovery Call
            </DiscoveryCallButton>
            <p className="font-mono text-[12px] text-muted-foreground mt-7 tracking-[0.02em]">
              contact@alphabyte.ai &middot; 155 Winges Road, Unit 1, Vaughan,
              Ontario
            </p>
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
