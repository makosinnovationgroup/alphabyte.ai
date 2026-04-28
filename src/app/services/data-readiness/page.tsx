import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Data Readiness \u2014 AI Data Quality & Governance",
  description:
    "Data quality audits, governance assessments, and AI readiness scorecards. Make sure your data foundation supports the AI you actually want to build.",
  alternates: {
    canonical: "/services/data-readiness/",
  },
  openGraph: {
    type: "website",
    title: "Data Readiness \u2014 AI Data Quality & Governance",
    description:
      "Data quality audits, governance assessments, and AI readiness scorecards for mid-market organizations.",
    url: "/services/data-readiness/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 Data Readiness: AI Data Quality & Governance",
      },
    ],
  },
  twitter: {
    title: "Data Readiness \u2014 AI Data Quality & Governance",
    description:
      "Data quality audits, governance assessments, and AI readiness scorecards for mid-market organizations.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Readiness",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Data Quality & Governance Consulting",
  description:
    "Data quality audits, governance assessments, and AI readiness scorecards. Make sure your data foundation supports the AI you actually want to build.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/services/data-readiness/",
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
      name: "Data Readiness",
      item: "https://alphabyte.ai/services/data-readiness/",
    },
  ],
};

const timeline = [
  {
    label: "Week 1",
    description:
      "Data environment audit \u2014 we assess your operational data across every source that will feed your AI deployment. Deduplication, completeness, accuracy, consistency. We map what you have and what the gaps cost you.",
  },
  {
    label: "Week 2",
    description:
      "Governance and security review \u2014 retention policies, classification, DLP tagging, compliance alignment against SOC 2, PIPEDA, and where relevant FIPPA. Infrastructure and security reviewed for AI deployment requirements.",
  },
  {
    label: "Weeks 3 to 4",
    description:
      "AI readiness scorecard delivered across five dimensions. Where gaps exist, a specific prioritized remediation plan with your options for closing them.",
  },
  {
    label: "Day 30 \u2014 what you have",
    highlight: true,
    description:
      "A formal AI readiness scorecard you can take into a board or compliance conversation. A clear remediation pathway. No ambiguity about what needs to happen before any build can begin.",
  },
];

const deliverables = [
  {
    title: "Full data quality audit",
    description:
      "Deduplication, completeness, accuracy, consistency across every data source feeding your AI deployment. Gaps mapped, risks quantified.",
  },
  {
    title: "Data governance assessment",
    description:
      "Retention policies, DLP tagging, classification frameworks, SOC 2, PIPEDA, and FIPPA compliance alignment. Required documentation for regulated industries and the Canadian public sector.",
  },
  {
    title: "Infrastructure and security posture review",
    description:
      "A targeted review from the perspective of Claude deployment \u2014 data access patterns, credential management, network segmentation, and the controls required to operate safely.",
  },
  {
    title: "AI readiness scorecard",
    description:
      "Formal rating across five dimensions: data quality, data governance, infrastructure readiness, security posture, and integration maturity.",
  },
  {
    title: "Remediation pathway",
    description:
      "Specific, prioritized steps to close each gap. You leave with problems and the sequence of fixes \u2014 not just a list of concerns.",
  },
];

const rightForYou = [
  "You are in a regulated industry and data compliance is a hard prerequisite to any AI deployment",
  "You have been told your data is messy and want to know exactly how messy before committing to a build",
  "You are about to begin agent or MCP work and want to protect that investment",
  "A previous AI engagement underdelivered and you want to understand why",
];

const notRightForYou = [
  "You are in early-stage discovery and do not yet know which data sources your AI deployment will require \u2014 complete Discovery first",
  "You have recent, validated data documentation and just need a scoped integration \u2014 we will confirm this in the first conversation",
];

export default function DataReadinessPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />

      {/* Breadcrumb */}
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
          <li className="text-foreground">Data Readiness</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Services &middot; Data Readiness
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Data Readiness
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              Is our data ready for AI?
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-4">
              Most AI projects do not fail because of the model. They fail
              because nobody validated the data underneath it before the build
              started.
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              You do not know which of your data is clean and which is a problem
              until something breaks in &mdash; usually six months and a
              significant budget into an engagement. We find that out in week
              two, before anything is built on top of it.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
              <Link
                href="/services/"
                className="text-body-sm font-medium text-muted-foreground transition-colors hover:text-alphabyte-blue"
              >
                Back to all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the first 30 days look like */}
      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-md border border-border-default bg-white p-8 md:p-12">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-10">
              What the first 30 days look like
            </p>
            <div className="space-y-8">
              {timeline.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 md:grid-cols-[160px_1fr] md:gap-8"
                >
                  <p
                    className={`text-body font-bold ${
                      row.highlight
                        ? "text-alphabyte-blue"
                        : "text-foreground"
                    }`}
                  >
                    {row.label}
                  </p>
                  <p className="text-body text-muted-foreground">
                    {row.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-10">
            What we deliver
          </p>
          <div className="space-y-8">
            {deliverables.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1.5 h-3 w-3 shrink-0 rounded-sm bg-border-default" />
                <div>
                  <p className="text-body font-bold text-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="text-body text-muted-foreground max-w-[60ch]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right for you if / Not right for you if */}
      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-md border border-border-default bg-white p-8">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-6">
                Right for you if
              </p>
              <ul className="space-y-4">
                {rightForYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-alphabyte-blue" />
                    <span className="text-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-border-default bg-white p-8">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-foreground mb-6">
                Not right for you if
              </p>
              <ul className="space-y-4">
                {notRightForYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline bar */}
      <section className="bg-canvas px-6 py-16 md:py-24 border-t border-border-default">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-1">
              Timeline
            </p>
            <p className="text-headline tracking-brand-snug text-foreground">
              4 to 8 weeks from kickoff
            </p>
          </div>
          <DiscoveryCallButton variant="dark" size="lg">
            Book a Discovery Call
          </DiscoveryCallButton>
        </div>
      </section>
    </main>
  );
}
