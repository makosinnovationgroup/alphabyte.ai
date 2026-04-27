import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "On-Premise LLMs — Self-Hosted AI for Data Sovereignty",
  description:
    "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security policy.",
  alternates: {
    canonical: "/tools/on-premise-llm/",
  },
  openGraph: {
    title: "On-Premise LLMs — Self-Hosted AI for Data Sovereignty",
    description:
      "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For data sovereignty and security.",
    url: "/tools/on-premise-llm/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — On-Premise LLMs: Self-Hosted AI for Data Sovereignty",
      },
    ],
  },
  twitter: {
    title: "On-Premise LLMs — Self-Hosted AI for Data Sovereignty",
    description:
      "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For data sovereignty and security.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "On-Premise LLM Deployment",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "On-Premise LLM Deployment",
  description:
    "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security policy.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/tools/on-premise-llm/",
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
      name: "On-Premise LLM",
      item: "https://alphabyte.ai/tools/on-premise-llm/",
    },
  ],
};

export default function OnPremiseLlmPage() {
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
          <li className="text-foreground">On-Premise LLM</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Tools &middot; On-Premise LLM
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              On-Premise LLMs
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              Self-hosted AI for data sovereignty and security policy.
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Llama, Mistral, and other open-source models deployed on your
              infrastructure. For clients where cloud AI is ruled out by data
              sovereignty or security requirements.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="dark" size="lg" asChild>
                <Link href="/services/discovery/">
                  Book a Strategy Sprint
                </Link>
              </Button>
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
              This tool has a fuller page in development. Model selection,
              MLOps, data sovereignty architecture, and API access patterns
              &mdash; all covered in depth. To talk through how on-premise LLMs
              fit your engagement, book a Strategy Sprint or get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
