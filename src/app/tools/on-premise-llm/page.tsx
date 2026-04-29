import type { Metadata } from "next";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "On-Premise LLM — Self-Hosted AI",
  description:
    "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security policy.",
  alternates: {
    canonical: "/tools/on-premise-llm/",
  },
  openGraph: {
    title: "On-Premise LLM — Self-Hosted AI",
    description:
      "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For data sovereignty and security.",
    url: "/tools/on-premise-llm/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — On-Premise LLM: Self-Hosted AI",
      },
    ],
  },
  twitter: {
    title: "On-Premise LLM — Self-Hosted AI",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />
      <ToolPage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools/" },
          { label: "On-Premise LLM" },
        ]}
        eyebrow="Tools \u00b7 On-Premise LLM"
        h1="On-Premise LLM"
        subhead="Private, self-hosted models."
        body={[
          "Some organizations cannot send their data to a cloud AI provider. Data sovereignty requirements. Security classifications. Regulatory mandates. Institutional risk posture. For those clients, we deploy capable open-source language models on their own infrastructure.",
          "The model runs inside your environment. Your team interacts with it through a standard API. Your data never leaves your control. Production deployment \u2014 compute, MLOps, observability, and governance from the start.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all tools", href: "/tools/" }}
        deliverablesSectionTitle="What we build"
        deliverablesLayout="list"
        deliverables={[
          {
            icon: "\ud83c\udfaf",
            title: "Model selection",
            body: "Optimal model for your use cases, infrastructure, and compliance constraints. Llama and Mistral are our defaults. The decision depends on performance, memory, and regulatory requirements \u2014 not which model is trending.",
          },
          {
            icon: "\ud83d\udda5\ufe0f",
            title: "Infrastructure provisioning",
            body: "Compute, storage, and networking for your workload requirements. GPU or high-memory CPU as required. Network segmentation appropriate to your security posture.",
          },
          {
            icon: "\u2705",
            title: "Installation, configuration, and validation",
            body: "Comprehensive validation before production traffic routes to the model. Performance benchmarks, accuracy tests against your actual use cases, latency measurements under representative load.",
          },
          {
            icon: "\ud83d\udd0c",
            title: "API access and service connectivity",
            body: "Standard API interface so your internal applications, agents, and MCP-connected systems communicate with the hosted model the same way they would a cloud-hosted model.",
          },
          {
            icon: "\ud83d\udd27",
            title: "MLOps and governance",
            body: "Versioning, deployment, and retraining pipelines. Logs, monitoring, metrics, role-based access, audit logging, and data handling policies aligned to your regulatory environment.",
          },
        ]}
        rightForYou={[
          "Data sovereignty requirements prohibit transmission to cloud AI providers",
          "Security classifications require air-gapped or on-premise infrastructure",
          "Regulatory environment mandates AI outputs be generated from within your own environment",
        ]}
        notRightForYou={[
          "You are not yet clear on your use cases \u2014 on-premise deployment without a defined application is significant compute investment with no return",
          "Cloud AI is available to you \u2014 on-premise adds infrastructure overhead that cloud deployments do not carry",
        ]}
        closingCta={{
          heading: "Want to see what this looks like for your business?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
