import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Data Readiness — AI Data Quality & Governance",
  description:
    "Data quality audits, governance assessments, and AI readiness scorecards. Make sure your data foundation supports the AI you actually want to build.",
  alternates: {
    canonical: "/services/data-readiness/",
  },
  openGraph: {
    type: "website",
    title: "Data Readiness — AI Data Quality & Governance",
    description:
      "Data quality audits, governance assessments, and AI readiness scorecards for mid-market organizations.",
    url: "/services/data-readiness/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Data Readiness: AI Data Quality & Governance",
      },
    ],
  },
  twitter: {
    title: "Data Readiness — AI Data Quality & Governance",
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

export default function DataReadinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />

      <ServicePage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Data Readiness" },
        ]}
        eyebrow="Services · Data Readiness"
        h1="Data Readiness"
        subhead="Is our data ready for AI?"
        body={[
          "Most AI projects do not fail because of the model. They fail because nobody validated the data underneath it before the build started.",
          "You do not know which of your data is clean and which is a problem until something breaks in production \u2014 usually six months and a significant budget into an engagement. We find that out in week two, before anything is built on top of it.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all services", href: "/services/" }}
        stats={[
          {
            value: "Week 2",
            label:
              "When we find data problems \u2014 not month six",
          },
          {
            value: "5 dimensions",
            label:
              "AI readiness scorecard: quality, governance, infrastructure, security, integration",
          },
          {
            value: "Zero",
            label:
              "Surprises after your build begins",
          },
        ]}
        thirtyDays={{
          weeks: [
            {
              label: "Week 1",
              body: "Data environment audit \u2014 we assess your operational data across every source that will feed your AI deployment. Deduplication, completeness, accuracy, consistency. We map what you have and what the gaps cost you.",
            },
            {
              label: "Week 2",
              body: "Governance and security review \u2014 retention policies, classification, DLP tagging, compliance alignment against SOC 2, PIPEDA, and where relevant FIPPA. Infrastructure and security reviewed for AI deployment requirements.",
            },
            {
              label: "Weeks 3 to 4",
              body: "AI readiness scorecard delivered across five dimensions. Where gaps exist, a specific prioritized remediation plan with your options for closing them.",
            },
          ],
          dayThirty: {
            label: "Day 30 \u2014 what you have",
            body: "A formal AI readiness scorecard you can take into a board or compliance conversation. A clear remediation pathway. No ambiguity about what needs to happen before any build can begin.",
          },
        }}
        deliverables={[
          {
            icon: "\ud83d\udcca",
            title: "Full data quality audit",
            body: "Deduplication, completeness, accuracy, consistency across every data source feeding your AI deployment. Gaps mapped, risks quantified.",
          },
          {
            icon: "\ud83d\uddc2\ufe0f",
            title: "Data governance assessment",
            body: "Retention policies, DLP tagging, classification frameworks, SOC 2, PIPEDA, and FIPPA compliance alignment. Required documentation for regulated industries and the Canadian public sector.",
          },
          {
            icon: "\ud83d\udd12",
            title: "Infrastructure and security posture review",
            body: "A targeted review from the perspective of Claude deployment \u2014 data access patterns, credential management, network segmentation, and the controls required to operate safely.",
          },
          {
            icon: "\ud83d\udccb",
            title: "AI readiness scorecard",
            body: "Formal rating across five dimensions: data quality, data governance, infrastructure readiness, security posture, and integration maturity.",
          },
          {
            icon: "\ud83d\udee4\ufe0f",
            title: "Remediation pathway",
            body: "Specific, prioritized steps to close each gap. You leave with problems and the sequence of fixes \u2014 not just a list of concerns.",
          },
        ]}
        rightForYou={[
          "You are in a regulated industry and data compliance is a hard prerequisite to any AI deployment",
          "You have been told your data is messy and want to know exactly how messy before committing to a build",
          "You are about to begin agent or MCP work and want to protect that investment",
          "A previous AI engagement underdelivered and you want to understand why",
        ]}
        notRightForYou={[
          "You are in early-stage discovery and do not yet know which data sources your AI deployment will require \u2014 complete Discovery first",
          "You have recent, validated data documentation and just need a scoped integration \u2014 we will confirm this in the first conversation",
        ]}
        timeline="4 to 8 weeks from kickoff"
      />
    </>
  );
}
