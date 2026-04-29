import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "AI Tools — Claude, MCP, Agents, On-Premise LLM",
  description:
    "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty. Built to ship, not demo.",
  alternates: {
    canonical: "/tools/",
  },
  openGraph: {
    title: "AI Tools — Claude, MCP, Agents, On-Premise LLM",
    description:
      "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty.",
    url: "/tools/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — AI Tools: Claude, MCP, Agents, On-Premise LLM",
      },
    ],
  },
  twitter: {
    title: "AI Tools — Claude, MCP, Agents, On-Premise LLM",
    description:
      "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty.",
    images: ["/og/default.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://alphabyte.ai/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tools",
      item: "https://alphabyte.ai/tools/",
    },
  ],
};

const stats = [
  {
    headline: "Anthropic Claude Partner",
    description: "Certified delivery team \u2014 exclusively Claude",
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
    body: "The intelligence layer across every engagement we deliver. Not a generic assistant \u2014 a purpose-configured system built around your organizational data, your team\u2019s workflows, and your operational context.",
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
    body: "Model Context Protocol is the open standard from Anthropic that defines how AI models communicate securely with external systems. A custom MCP server gives Claude governed, auditable, real-time access to your CRM, ERP, data warehouses, and APIs \u2014 without data leaving your environment.",
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
    body: "For organizations that cannot send their data to a cloud AI provider. We deploy capable open-source language models \u2014 Llama, Mistral \u2014 on your own infrastructure. The model runs inside your environment. Your data never leaves your control.",
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
    label: "Layer 1",
    title: "Claude",
    body: "Intelligence \u2014 reasons, writes, analyzes, and builds against your operational context",
  },
  {
    label: "Layer 2",
    title: "MCP",
    body: "Connectivity \u2014 governs secure real-time access between Claude and your internal systems",
  },
  {
    label: "Layer 3",
    title: "Agents",
    body: "Automation \u2014 executes defined workflows end-to-end with human oversight gates",
  },
  {
    label: "Layer 4",
    title: "On-premise LLM",
    body: "Sovereignty \u2014 runs the full stack inside your own infrastructure when cloud AI is not an option",
  },
];

export default function ToolsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border-default px-6 py-4 md:px-10 lg:px-16"
      >
        <ol className="mx-auto flex max-w-[1600px] items-center gap-2 text-body-sm">
          <li className="flex items-center gap-2">
            <Link
              href="/"
              className="text-alphabyte-blue transition-colors hover:text-foreground"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="text-muted-foreground">
              /
            </span>
            <span className="text-muted-foreground">Tools</span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-canvas px-6 pt-10 pb-10 md:pt-14 md:pb-12">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-4">
            Our Tools
          </p>
          <h1 className="text-headline tracking-brand-snug mb-6 max-w-2xl">
            We don&rsquo;t sell platforms.
            <br />
            <span className="text-alphabyte-blue">
              We build with what actually works.
            </span>
          </h1>
          <div className="max-w-2xl space-y-4">
            <p className="text-body text-foreground">
              A deliberate stack. Claude as the intelligence layer. MCP is the
              connective tissue between Claude and your internal systems. Custom
              agents as the operational layer. On-premise LLMs for clients where
              cloud AI is not an option.
            </p>
            <p className="text-body text-foreground">
              Not because we are obligated to use them &mdash; because they are
              the best tools available for what we are building.
            </p>
          </div>
        </div>
      </section>

      {/* Three-stat bar */}
      <section className="bg-foreground">
        <div className="mx-auto flex max-w-[1600px] flex-col md:flex-row">
          {stats.map((stat, i) => (
            <div
              key={stat.headline}
              className={`flex-1 px-6 py-6 md:py-8 md:px-8 first:md:pl-6 last:md:pr-6 ${
                i > 0 ? "border-t border-white/[0.08] md:border-t-0 md:border-l" : ""
              }`}
            >
              <p className="text-body font-bold text-alphabyte-green mb-1">
                {stat.headline}
              </p>
              <p className="text-body-sm text-white/50">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Full Stack — 2×2 tool card grid */}
      <section className="bg-canvas px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center gap-3 mb-8">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue shrink-0">
              The Full Stack
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="flex flex-col rounded-md border border-border-default bg-white p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-body font-bold text-foreground">
                  {tool.title}
                </h2>
                <p className="text-body-sm font-bold text-alphabyte-blue mt-1 mb-4">
                  {tool.subtitle}
                </p>

                <p className="text-body-sm text-foreground mb-6">{tool.body}</p>

                <ul className="mb-6">
                  {tool.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 border-b border-border-default py-2.5 text-body-sm text-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alphabyte-blue"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-border-default pt-4">
                  <p className="text-body-sm text-muted-foreground italic">
                    {tool.footerLeft}
                  </p>
                  <Link
                    href={tool.href}
                    className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Stack Fits Together */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center gap-3 mb-8">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue shrink-0">
              How the Stack Fits Together
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-md border border-border-default overflow-hidden">
            {layers.map((layer, i) => (
              <div
                key={layer.label}
                className={`p-6 ${
                  i > 0 ? "border-t sm:border-t-0 sm:border-l border-border-default" : ""
                } ${i >= 2 ? "lg:border-t-0" : i >= 1 ? "sm:border-t-0" : ""}`}
              >
                <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-2">
                  {layer.label}
                </p>
                <h3 className="text-body font-bold text-foreground mb-2">
                  {layer.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-b border-border-default bg-canvas px-6 py-12 md:py-16">
        <div className="mx-auto max-w-[1600px] text-center">
          <h2 className="text-headline tracking-brand-snug text-foreground mb-3">
            Want to see how the stack applies to your situation?
          </h2>
          <p className="text-body text-muted-foreground mb-8">
            45 minutes. No cost. No obligation.
          </p>
          <DiscoveryCallButton variant="dark" size="lg">
            Book a Discovery Call
          </DiscoveryCallButton>
        </div>
      </section>
    </main>
  );
}
