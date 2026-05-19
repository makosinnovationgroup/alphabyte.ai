import type { Metadata } from "next";
import Link from "next/link";
import {
  Chevron,
  EyebrowChip,
  HardRule,
  HexgridSection,
  Manifest2x2,
  SectionLabel,
  StatCard,
  TypedHero,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "AI Tools - Claude, MCP, Agents, On-Premise LLM",
  description:
    "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty. Built to ship, not demo.",
  alternates: {
    canonical: "/tools/",
  },
  openGraph: {
    title: "AI Tools - Claude, MCP, Agents, On-Premise LLM",
    description:
      "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty.",
    url: "/tools/",
    images: [
      {
        url: "/og/tools.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - AI Tools - Claude, MCP, Agents, On-Premise LLM",
      },
    ],
  },
  twitter: {
    title: "AI Tools - Claude, MCP, Agents, On-Premise LLM",
    description:
      "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty.",
    images: ["/og/tools.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabyte.ai/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://alphabyte.ai/tools/" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Tools - Claude, MCP, Agents, On-Premise LLM",
  description:
    "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty.",
  url: "https://alphabyte.ai/tools/",
  isPartOf: { "@id": "https://alphabyte.ai/#website" },
};

const stats = [
  {
    headline: "Anthropic Claude Certified",
    description: "Certified delivery team — exclusively Claude",
  },
  {
    headline: "Every engagement",
    description: "Uses Claude as the primary intelligence layer",
  },
  {
    headline: "Production-grade",
    description: "Every agent and MCP server built to ship, not demo",
  },
];

const tools = [
  {
    title: "Claude",
    subtitle: "Reasoning, writing, and analysis.",
    body: "The intelligence layer across every engagement we deliver. Not a generic assistant — a purpose-configured system built around your organizational data, your team's workflows, and your operational context.",
    bullets: [
      "Custom knowledgebases",
      "Custom skills",
      "Prompt libraries",
      "SDLC plugins",
      "Agent development",
    ],
    footerLeft: "Used across all five services",
    href: "/tools/claude/",
  },
  {
    title: "MCP",
    subtitle: "Connect models to your tools.",
    body: "Model Context Protocol is the open standard from Anthropic that defines how AI models communicate securely with external systems. A custom MCP server gives Claude governed, auditable, real-time access to your CRM, ERP, data warehouses, and APIs — without data leaving your environment.",
    bullets: [
      "Custom MCP servers",
      "OAuth 2.0 security",
      "Cloud infrastructure",
      "Full audit logging",
      "Tool and API integration",
    ],
    footerLeft: "Required for any live data connectivity",
    href: "/tools/mcp/",
  },
  {
    title: "Custom AI Agents",
    subtitle: "Purpose-built task automation.",
    body: "Production systems that execute defined operational workflows end-to-end without continuous human intervention. Each agent connects to your data through MCP, operates in an isolated cloud sandbox, and routes through human-in-the-loop approval gates at the decision points you define.",
    bullets: [
      "Agent sandbox + runtime",
      "CI/CD pipelines",
      "Agent Command Centre",
      "HITL approval workflows",
      "Self-improvement feedback",
    ],
    footerLeft: "Built to production engineering standards",
    href: "/tools/custom-ai-agents/",
  },
  {
    title: "On-Premise LLM",
    subtitle: "Private, self-hosted models.",
    body: "For organizations that cannot send their data to a cloud AI provider. We deploy capable open-source language models — Llama, Mistral — on your own infrastructure. The model runs inside your environment. Your data never leaves your control.",
    bullets: [
      "Model selection",
      "Infrastructure provisioning",
      "Installation + validation",
      "API access",
      "MLOps and governance",
    ],
    footerLeft: "For data sovereignty requirements",
    href: "/tools/on-premise-llm/",
  },
];

const layers = [
  {
    num: "01",
    tag: "Layer 1 · Claude",
    body: "Intelligence — reasons, writes, analyzes, and builds against your operational context",
  },
  {
    num: "02",
    tag: "Layer 2 · MCP",
    body: "Connectivity — governs secure real-time access between Claude and your internal systems",
  },
  {
    num: "03",
    tag: "Layer 3 · Agents",
    body: "Automation — executes defined workflows end-to-end with human oversight gates",
  },
  {
    num: "04",
    tag: "Layer 4 · On-Premise LLM",
    body: "Sovereignty — runs the full stack inside your own infrastructure when cloud AI is not an option",
  },
];

export default function ToolsPage() {
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
          { label: "Tools" },
        ]}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / INDEX / TOOLS" />

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <div className="mb-7">
                <EyebrowChip>Tools · A Deliberate Stack</EyebrowChip>
              </div>

              <TypedHero
                pre="We don't sell platforms. We build with "
                word="what actually works"
                post="."
              />

              <HardRule className="mb-7" />

              <div className="mb-9 max-w-[60ch] space-y-4">
                <p className="text-[17px] leading-[1.55] text-ink">
                  A deliberate stack. Claude as the intelligence layer. MCP is
                  the connective tissue between Claude and your internal
                  systems. Custom agents as the operational layer. On-premise
                  LLMs for clients where cloud AI is not an option.
                </p>
                <p className="text-[17px] leading-[1.55] text-ink">
                  Not because we are obligated to use them &mdash; because they
                  are the best tools available for what we are building.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {stats.map((s, i) => (
                <StatCard key={i} num={s.headline} label={s.description} />
              ))}
            </div>
          </div>
        </div>
      </HexgridSection>

      {/* 02 LAYERS */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / STACK / FOUR LAYERS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            How the stack fits together.
          </p>

          <Manifest2x2
            cells={[
              { num: layers[0].num, tag: layers[0].tag, body: layers[0].body },
              { num: layers[1].num, tag: layers[1].tag, body: layers[1].body },
              { num: layers[2].num, tag: layers[2].tag, body: layers[2].body },
              { num: layers[3].num, tag: layers[3].tag, body: layers[3].body },
            ]}
          />
        </div>
      </section>

      {/* 03 TOOLS LIST */}
      <section className="bg-canvas pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / TOOLS / WHAT WE CONFIGURE" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            Four tools. Each engagement uses one or more.
          </p>

          <div className="grid gap-px bg-border-default border border-border-default lg:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group bg-white px-7 py-7 flex flex-col transition-colors hover:bg-alphabyte-blue/[0.04]"
              >
                <h2 className="text-[24px] font-bold text-ink mb-1 tracking-[-0.015em]">
                  {tool.title}
                </h2>
                <p className="font-mono text-[12px] text-alphabyte-blue tracking-[0.02em] mb-5">
                  {tool.subtitle}
                </p>
                <p className="text-[14.5px] leading-[1.55] text-ink/85 mb-5 flex-1">
                  {tool.body}
                </p>
                <ul className="space-y-2 font-mono text-[12px] mb-5">
                  {tool.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-ink flex items-center gap-2 before:content-[''] before:w-[6px] before:h-[6px] before:bg-brand-live before:shrink-0"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border-default pt-4 flex items-center justify-between mt-auto">
                  <p className="font-mono text-[11.5px] text-muted-foreground tracking-[0.02em]">
                    {tool.footerLeft}
                  </p>
                  <span className="font-mono text-[12px] text-alphabyte-blue group-hover:text-ink transition-colors flex items-center gap-1.5">
                    Learn more
                    <span className="text-brand-live">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="04 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[24ch]">
              Want to see how the stack applies to your situation?
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
