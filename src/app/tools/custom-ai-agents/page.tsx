import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Custom AI Agents — Autonomous Workflows with HITL Gates",
  description:
    "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates where stakes require it.",
  alternates: {
    canonical: "/tools/custom-ai-agents/",
  },
  openGraph: {
    title: "Custom AI Agents — Autonomous Workflows with HITL Gates",
    description:
      "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates.",
    url: "/tools/custom-ai-agents/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Custom AI Agents: Autonomous Workflows with HITL Gates",
      },
    ],
  },
  twitter: {
    title: "Custom AI Agents — Autonomous Workflows with HITL Gates",
    description:
      "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom AI Agents & Systems",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Agent Development",
  description:
    "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates where stakes require it.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/tools/custom-ai-agents/",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Custom AI Agents",
      item: "https://alphabyte.ai/tools/custom-ai-agents/",
    },
  ],
};

export default function CustomAiAgentsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />

      <nav aria-label="Breadcrumb" className="bg-canvas px-6 pt-8">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 text-body-sm text-muted-foreground">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-alphabyte-blue"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/tools/"
              className="transition-colors hover:text-alphabyte-blue"
            >
              Tools
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Custom AI Agents</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Tools &middot; Custom AI Agents
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Custom AI Agents
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              Autonomous workflows with human-in-the-loop approval gates.
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Agents that handle defined workflows end-to-end. Command Centre
              dashboard for visibility. Human-in-the-loop gates where the stakes
              require it.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
              <Link
                href="/tools/"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                &larr; Back to all tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-16 md:py-24 border-t border-border-default">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-4">
              Coming Soon
            </p>
            <p className="text-body text-muted-foreground max-w-[55ch]">
              This tool has a fuller page in development. Workflow automation,
              the Command Centre dashboard, HITL gate architecture, and CI/CD
              pipeline integration &mdash; all covered in depth. To talk through
              how custom agents fit your engagement, book a Discovery Call or
              get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
