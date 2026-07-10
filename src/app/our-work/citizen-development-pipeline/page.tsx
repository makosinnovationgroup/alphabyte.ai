import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "3PL Operator - Citizen Development Pipeline",
  description:
    "Two-plugin citizen development pipeline in Claude Cowork. Non-engineers ship production applications onto the company's standard stack, in source control, under Engineering review patterns from day one.",
  alternates: {
    canonical: "/our-work/citizen-development-pipeline/",
  },
  openGraph: {
    type: "article",
    title: "3PL Operator - Citizen Development Pipeline",
    description:
      "Spec and Dev plugins that put operator-built applications onto the company's standard stack, GitHub organization, and Railway workspace on the first run.",
    url: "/our-work/citizen-development-pipeline/",
    images: [
      {
        url: "/og/our-work-citizen-development-pipeline.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - 3PL Operator - Citizen Development Pipeline",
      },
    ],
  },
  twitter: {
    title: "3PL Operator - Citizen Development Pipeline",
    description:
      "Spec and Dev plugins that put operator-built applications onto the company's standard stack, GitHub organization, and Railway workspace on the first run.",
    images: ["/og/our-work-citizen-development-pipeline.png"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "3PL Operator - Citizen Development Pipeline",
  description:
    "How Alphabyte built a two-plugin citizen development pipeline for a North American 3PL, published in the company's Claude Cowork marketplace. Non-engineers ship production applications onto the standard stack, in the company's GitHub organization and Railway workspace, with Engineering review patterns intact from day one.",
  url: "https://alphabyte.ai/our-work/citizen-development-pipeline/",
  image: "https://alphabyte.ai/our-work/citizen-development-pipeline-hero.webp",
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
  articleSection: "Case Studies",
  keywords: [
    "citizen development",
    "Claude plugins",
    "Claude Cowork",
    "scaffold pipeline",
    "Next.js Railway",
    "production applications",
    "3PL operations",
  ],
  author: {
    "@id": "https://alphabyte.ai/#organization",
  },
  publisher: {
    "@id": "https://alphabyte.ai/#organization",
  },
  about: {
    "@type": "Service",
    name: "Citizen Development Pipeline",
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
      name: "3PL Operator: Citizen Development Pipeline",
      item: "https://alphabyte.ai/our-work/citizen-development-pipeline/",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "A North American third-party logistics operator runs warehouse operations across multiple verticals. Their operations team builds the tools they need in Claude. That works to get to the first version. It had not worked for getting those applications onto infrastructure Engineering could trust or maintain.",
  },
  {
    type: "paragraph",
    text: "The gap between what a non-engineer could build and what a production application required was not a skills problem. It was an infrastructure problem. Every operator-built application started from scratch, landed outside the company's standard stack, and created a maintenance burden nobody had signed up for.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "The company needed a way for non-engineers to ship production applications without creating that burden. Generic low-code platforms were not the answer. They produce applications that live outside source control, outside the company's hosting, and outside any review pattern Engineering already uses.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "The requirement was tighter: operator-built applications needed to land on the company's standard stack, in the company's GitHub organization, under the company's Railway workspace, the first time, every time, without Engineering involvement in the build.",
  },
  { type: "heading", text: "Solution" },
  {
    type: "paragraph",
    text: "Alphabyte built a two-plugin citizen development pipeline, published in the company's Claude Cowork marketplace. The first run of the pipeline was the warehouse platform rebuild described in the companion case study.",
  },
  {
    type: "paragraph",
    text: "The Spec plugin runs in a chat tab. A non-engineer describes the problem, the users, and the features in plain language. The plugin asks the questions, cross-references the company's existing GitHub organization for prior art, and produces a schema-validated specification document. The project slug is locked from the directory name: deterministic, not user chosen.",
  },
  {
    type: "paragraph",
    text: "The Dev plugin runs in a development tab. The citizen developer says, \"build this.\" The plugin reads the specification and runs a sixteen-step idempotent scaffold: a Next.js application on Node 20, optional authentication with NextAuth and bcrypt, optional Postgres with Prisma and a per-deploy migration hook, optional Resend email, a private GitHub repository under the company's organization, a Railway deploy with Postgres provisioned and the initial migration run, and a public domain. Each step probes filesystem and remote state, skips what is already done, and picks up cleanly from any failure point.",
  },
  {
    type: "paragraph",
    text: "All subsequent development happens in natural-language conversation in the same tab. Dedicated skills handle moments that warrant structure: database schema changes and migrations, Railway deploy and log debugging, third-party API integration grounded in current documentation, the company's design language and tokens, project-memory conventions, and read-only access to the company's curated BigQuery mart layer.",
  },
  {
    type: "paragraph",
    text: "Every application ships on the company's standard stack, into the company's GitHub organization, under the company's Railway workspace, with the same conventions and review patterns Engineering already uses. Shared credentials are auto-fetched cross-projects. Governance is inherited, not configured per application.",
  },
  {
    type: "callout",
    text: "Marginal cost of the next operator-built production application is near zero in engineering time. Governance is inherited, not configured per app.",
  },
  { type: "heading", text: "Results", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "The pipeline is in production and available to the full organization. Its first run shipped a six-module warehouse application with 46,066 rows of migrated production data.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Every application lands on the company's standard stack, in source control, with Engineering review patterns intact from day one. The marginal cost of the next operator-built production application is near zero in engineering time.",
  },
];

export default function CitizenDevelopmentPipelinePage() {
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
          { label: "3PL Operator: Citizen Development Pipeline" },
        ]}
        eyebrow="CASE STUDY · THIRD-PARTY LOGISTICS · CITIZEN DEVELOPMENT · NORTH AMERICA"
        h1="Citizen Development Pipeline"
        subhead="North American 3PL Operator"
        tagPills={[
          "Claude Plugins",
          "Claude Cowork",
          "Next.js",
          "Railway",
          "GitHub",
          "Citizen Development",
        ]}
        stats={[
          {
            value: "2 plugins",
            label: "Spec and Dev, published in the company's Claude Cowork marketplace",
          },
          {
            value: "16 steps",
            label: "Idempotent scaffold that resumes cleanly from any failure",
          },
          {
            value: "First run",
            label: "Six-module warehouse platform with 46,066 rows migrated",
          },
          {
            value: "Near-zero",
            label: "Marginal engineering time for each additional production app",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "North American 3PL Operator",
            meta: "Third-Party Logistics · Warehouse Operations · North America",
          },
          servicesDelivered: [
            "Claude Plugin Development",
            "Citizen Development Pipeline",
            "Claude Cowork Deployment",
            "Scaffold Architecture",
          ],
          technology: [
            "Anthropic Claude",
            "Claude Cowork",
            "Next.js",
            "Node.js",
            "Postgres",
            "Prisma",
            "Railway",
            "GitHub",
            "BigQuery",
          ],
          pullQuote:
            "Every application ships on the company's standard stack, in source control, with Engineering review patterns intact from day one. Governance is inherited, not configured per application.",
        }}
        figure={{
          src: "/our-work/citizen-development-pipeline-hero.webp",
          alt: "Citizen development pipeline: Spec and Dev plugins in Claude Cowork feeding a sixteen-step scaffold onto Next.js, Postgres, GitHub, and Railway",
          caption: "Figure 1. The two-plugin pipeline: Spec captures the intent in a chat tab, Dev runs a sixteen-step idempotent scaffold onto the company's standard Next.js, Postgres, GitHub, and Railway stack.",
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
