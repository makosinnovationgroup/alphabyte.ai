import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "MCP Servers — Model Context Protocol Integration",
  description:
    "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured. You own the connection, we build the server.",
  alternates: {
    canonical: "/tools/mcp/",
  },
  openGraph: {
    title: "MCP Servers — Model Context Protocol Integration",
    description:
      "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured.",
    url: "/tools/mcp/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — MCP Servers: Model Context Protocol Integration",
      },
    ],
  },
  twitter: {
    title: "MCP Servers — Model Context Protocol Integration",
    description:
      "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom MCP Servers",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "MCP Server Development",
  description:
    "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured. You own the connection, we build the server.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/tools/mcp/",
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
      name: "MCP",
      item: "https://alphabyte.ai/tools/mcp/",
    },
  ],
};

export default function McpPage() {
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
          <li className="text-foreground">MCP</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Tools &middot; MCP
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              MCP Servers
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              Governed, secure access to your systems via Model Context
              Protocol.
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              We build custom MCP servers that connect Claude to your databases,
              APIs, CRM, and ERP. OAuth 2.0 secured on every connection. You own
              the server.
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
              This tool has a fuller page in development. SQL databases, CRM and
              ERP integrations, REST APIs, internal tools &mdash; all covered
              with architecture patterns and security detail. To talk through
              how MCP fits your engagement, book a Discovery Call or get in
              touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
