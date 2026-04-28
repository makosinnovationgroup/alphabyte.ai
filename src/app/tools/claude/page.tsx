import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Claude — The Intelligence Layer for AI Engagements",
  description:
    "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits — purpose-built for your team.",
  alternates: {
    canonical: "/tools/claude/",
  },
  openGraph: {
    title: "Claude — The Intelligence Layer for AI Engagements",
    description:
      "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits.",
    url: "/tools/claude/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Claude: The Intelligence Layer for AI Engagements",
      },
    ],
  },
  twitter: {
    title: "Claude — The Intelligence Layer for AI Engagements",
    description:
      "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude Configuration & Integration",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Implementation",
  description:
    "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits — purpose-built for your team.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/tools/claude/",
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
      name: "Claude",
      item: "https://alphabyte.ai/tools/claude/",
    },
  ],
};

export default function ClaudePage() {
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
          <li className="text-foreground">Claude</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Tools &middot; Claude
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Claude
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              The intelligence layer across every Alphabyte AI engagement.
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              We configure Claude with custom knowledgebases, build skills
              libraries tuned to how your team works, and connect it to your
              internal systems via MCP. Not out-of-the-box. Purpose-built for
              each client.
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
              This tool has a fuller page in development. Executive
              knowledgebases, custom skills and prompt libraries, SDLC plugins,
              compliance intelligence agents, and data intelligence agents
              &mdash; all covered in depth. To talk through how Claude fits your
              engagement, book a Discovery Call or get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
