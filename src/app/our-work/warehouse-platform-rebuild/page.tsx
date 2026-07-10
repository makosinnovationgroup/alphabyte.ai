import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "3PL Operator - Warehouse Platform Rebuild",
  description:
    "Application rebuild of an operations-critical warehouse platform for a North American 3PL. 46,066 rows migrated with zero downtime, handed back to the operations lead with a full Claude Code configuration.",
  alternates: {
    canonical: "/our-work/warehouse-platform-rebuild/",
  },
  openGraph: {
    type: "article",
    title: "3PL Operator - Warehouse Platform Rebuild",
    description:
      "Six weeks from architecture lock to production. 46,066 rows migrated in a single transactional run. Operations lead kept full ownership of the codebase.",
    url: "/our-work/warehouse-platform-rebuild/",
    images: [
      {
        url: "/og/our-work-warehouse-platform-rebuild.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - 3PL Operator - Warehouse Platform Rebuild",
      },
    ],
  },
  twitter: {
    title: "3PL Operator - Warehouse Platform Rebuild",
    description:
      "Six weeks from architecture lock to production. 46,066 rows migrated in a single transactional run. Operations lead kept full ownership of the codebase.",
    images: ["/og/our-work-warehouse-platform-rebuild.png"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "3PL Operator - Warehouse Platform Rebuild",
  description:
    "How Alphabyte rebuilt an operations-critical warehouse platform for a North American 3PL onto the company's standard TypeScript, Next.js, and Postgres stack. 46,066 rows migrated in a single transactional run, 261 stranded photo assets recovered, and the operations lead handed back a codebase with a complete Claude Code configuration.",
  url: "https://alphabyte.ai/our-work/warehouse-platform-rebuild/",
  image: "https://alphabyte.ai/our-work/warehouse-platform-rebuild-hero.webp",
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
  articleSection: "Case Studies",
  keywords: [
    "application rebuild",
    "warehouse platform",
    "3PL operations",
    "data migration",
    "Claude Code",
    "citizen development",
    "TypeScript Next.js Postgres",
  ],
  author: {
    "@id": "https://alphabyte.ai/#organization",
  },
  publisher: {
    "@id": "https://alphabyte.ai/#organization",
  },
  about: {
    "@type": "Service",
    name: "Application Rebuild and Citizen Development Enablement",
    provider: { "@id": "https://alphabyte.ai/#organization" },
  },
  isPartOf: {
    "@id": "https://alphabyte.ai/#website",
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
      name: "Our Work",
      item: "https://alphabyte.ai/our-work/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "3PL Operator: Warehouse Platform Rebuild",
      item: "https://alphabyte.ai/our-work/warehouse-platform-rebuild/",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "A North American third-party logistics operator runs a warehouse floor that moves high volumes of refurbished electronics daily. The platform their operations lead built herself, in a Claude chat, had become the system her team depended on for shipment verification, pick-and-pack, vendor reconciliation, and receive-and-triage. It worked. Warehouse staff used it every day.",
  },
  {
    type: "paragraph",
    text: "The codebase behind it was a 14,000-line single HTML file. Python Flask on external hosting, outside the company's standard Node and Next.js stack. SQLite with JSON blobs in columns that should have been relational. Plaintext credentials in the database. Six undocumented data-repair endpoints baked into production. No tests, no CI, no review process.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "Working production software and an unmaintainable codebase occupied the same system. The hard part was not the engineering. It was ownership. The only person who fully understood what the platform needed to do was the operations lead who built it, and any fix that took the application away from her would turn Engineering into a permanent bottleneck and slow the floor down.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Two obvious paths were both wrong. Cleaning it up in place would take months and change nothing structurally. Rebuilding it without the operations team would solve the code and break the thing that made it work. The real objective was to keep the right person in control of the application while moving it onto infrastructure Engineering could review and maintain.",
  },
  { type: "heading", text: "Solution" },
  {
    type: "paragraph",
    text: "Alphabyte rebuilt the platform as the first run of a company-wide citizen development pipeline, treating the engagement as a system rather than a one-off project.",
  },
  {
    type: "paragraph",
    text: "Six operational modules were ported onto the new stack: Shipment Check with IMEI scanning and vendor CSV parsing across seven formats; Pick and Pack with operator-concurrent writes and a client-side label generator; vendor reconciliation with automated Slack and email alerts; Receive and Triage with scan-priority routing and contextual triage by device type; Settings and user management with full activity logging; and Reports and exports with PDF packing lists, CSV outputs, and vendor-specific Ship Advice panels.",
  },
  {
    type: "paragraph",
    text: "The legacy application stayed live throughout. On migration day, 46,066 rows of production data were ported into the new Postgres database in a single transactional run with zero downtime on the legacy side. Legacy passwords were transparently rehashed to bcrypt on first login. A recovery pass then surfaced 261 of 440 stranded photo assets by joining on the content-addressable identifiers the legacy app had used.",
  },
  {
    type: "paragraph",
    text: "The codebase was handed back to its owner with a complete Claude Code configuration. A root CLAUDE.md documented the stack, workflows, environment inventory, and hard rules. A committed project memory directory held the full specification, architecture document, every recorded decision with rationale, and the live backlog. Her Claude opens the project already oriented. She does not have to brief it. She continues iterating from the same chat interface she always used, now backed by a codebase Engineering can review.",
  },
  {
    type: "callout",
    text: "The operations lead keeps control of the platform she built. Engineering gets a codebase it can review. The floor never noticed the cutover.",
  },
  { type: "heading", text: "Results", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "Six weeks from architecture lock to handover-ready production. 46,066 rows migrated in a single transactional run with zero downtime on the legacy side. 261 stranded photo assets recovered post-migration, a set the client had written off.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "The platform now runs on the company's standard stack, with the same hosting, source control, build gates, and review patterns as the rest of Engineering. Warehouse staff kept working through the cutover with no retraining, and the operations lead kept shipping features throughout.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "She continues to own and evolve the platform, with full project memory committed alongside the code.",
  },
];

export default function WarehousePlatformRebuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([caseStudySchema, breadcrumbSchema]),
        }}
      />
      <CaseStudyPage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work/" },
          { label: "3PL Operator: Warehouse Platform Rebuild" },
        ]}
        eyebrow="CASE STUDY · THIRD-PARTY LOGISTICS · WAREHOUSE OPERATIONS · NORTH AMERICA"
        h1="Operations-Critical Warehouse Platform Rebuild"
        subhead="North American 3PL Operator"
        tagPills={[
          "TypeScript",
          "Next.js",
          "Postgres",
          "Railway",
          "Claude Code",
          "Data Migration",
        ]}
        stats={[
          {
            value: "6 weeks",
            label: "Architecture lock to handover-ready production",
          },
          {
            value: "46,066 rows",
            label: "Migrated in a single transactional run",
          },
          {
            value: "Zero downtime",
            label: "On the legacy side during cutover",
          },
          {
            value: "261 assets",
            label: "Stranded photos recovered post-migration",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "North American 3PL Operator",
            meta: "Third-Party Logistics · Warehouse Operations · North America",
          },
          servicesDelivered: [
            "Application Rebuild",
            "Data Migration",
            "Claude Code Configuration",
            "Production Deployment",
          ],
          technology: [
            "TypeScript",
            "Next.js",
            "Node.js",
            "Postgres",
            "Prisma",
            "Railway",
            "GitHub",
            "Anthropic Claude",
            "Claude Code",
          ],
          pullQuote:
            "The operations lead continues to own and evolve the platform, with full project memory committed alongside the code, on infrastructure Engineering can now review and maintain.",
        }}
        figure={{
          src: "/our-work/warehouse-platform-rebuild-hero.webp",
          alt: "Warehouse platform rebuild: legacy application migrated onto TypeScript, Next.js, Postgres, GitHub, and Railway with 46,066 rows ported in a single transactional run",
          caption: "Figure 1. The legacy warehouse platform ported onto the company's standard stack: TypeScript, Next.js, Postgres, GitHub, and Railway, with a full Claude Code configuration handed back to the operations lead.",
        }}
        closingCta={{
          heading: "Want to explore what we could build for your operations?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
