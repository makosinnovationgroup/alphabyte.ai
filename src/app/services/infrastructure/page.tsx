import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
  description:
    "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models. AI as operational infrastructure, not a demo.",
  alternates: {
    canonical: "/services/infrastructure/",
  },
  openGraph: {
    title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
    description:
      "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models.",
    url: "/services/infrastructure/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 Infrastructure: Custom MCP, AI Agents, On-Premise LLMs",
      },
    ],
  },
  twitter: {
    title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
    description:
      "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Infrastructure",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Infrastructure Consulting",
  description:
    "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models. AI as operational infrastructure, not a demo.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/services/infrastructure/",
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
      name: "Services",
      item: "https://alphabyte.ai/services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Infrastructure",
      item: "https://alphabyte.ai/services/infrastructure/",
    },
  ],
};

export default function InfrastructurePage() {
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
              href="/services/"
              className="transition-colors hover:text-alphabyte-blue"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Infrastructure</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Track 04 &middot; Infrastructure
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Infrastructure
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              How do our systems use AI?
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Custom MCP servers, autonomous agents, on-premise LLM
              deployments, fine-tuned models. Where AI stops being a
              productivity tool and becomes operational infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
              <Link
                href="/services/"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                &larr; Back to all services
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
              The full Infrastructure page is in development. It will cover
              custom MCP servers, AI agents, on-premise LLM deployment, and
              fine-tuned model work. To talk through whether this track fits
              your situation, book a Discovery Call or get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
