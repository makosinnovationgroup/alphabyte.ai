import type { Metadata } from "next";
import { Target, Server, CheckCircle, Plug, Wrench } from "lucide-react";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "On-Premise LLM - Self-Hosted AI",
  description:
    "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security policy.",
  alternates: {
    canonical: "/tools/on-premise-llm/",
  },
  openGraph: {
    type: "website",
    title: "On-Premise LLM - Self-Hosted AI",
    description:
      "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For data sovereignty and security.",
    url: "/tools/on-premise-llm/",
    images: [
      {
        url: "/og/tools-on-premise-llm.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - On-Premise LLM - Self-Hosted AI",
      },
    ],
  },
  twitter: {
    title: "On-Premise LLM - Self-Hosted AI",
    description:
      "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For data sovereignty and security.",
    images: ["/og/tools-on-premise-llm.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "On-Premise LLM Deployment",
  provider: {
    "@id": "https://alphabyte.ai/#organization",
  },
  serviceType: "On-Premise LLM Deployment",
  description:
    "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security policy.",
  areaServed: {
    "@type": "Place",
    name: "North America",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which open-source models do you deploy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Llama and Mistral are our defaults. The specific model depends on your use cases, compute budget, and accuracy requirements. We benchmark candidates against your actual data before recommending.",
      },
    },
    {
      "@type": "Question",
      name: "What hardware do we need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 7B-parameter model can run on a single high-memory GPU server. Larger models or higher concurrency need multi-GPU infrastructure. We scope hardware requirements during the engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Can an on-premise LLM connect to MCP like Claude does?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MCP servers expose a standard interface that works with both Claude in the cloud and Llama on your hardware. You can run sensitive workflows on-premise and less restricted workflows through Claude using the same MCP infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How does fine-tuning work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fine-tuning adapts a base model to your specific domain. We prepare training datasets from your existing data, run the pipeline on your infrastructure, and validate against accuracy benchmarks. The fine-tuned model and training data never leave your environment.",
      },
    },
    {
      "@type": "Question",
      name: "Is on-premise always the right choice for regulated industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Claude Enterprise provides strong data handling commitments. On-premise is the right choice when regulations explicitly prohibit data transmission to any third party, or when your security posture requires air-gapped infrastructure.",
      },
    },
  ],
};

export default function OnPremiseLlmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
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
          "Some organizations cannot send their data to a cloud AI provider. Data sovereignty requirements, security classifications, regulatory mandates, and institutional risk posture all create situations where cloud AI is not viable. For those clients, we deploy capable open-source language models on their own infrastructure.",
          "The model runs inside your environment. Your team interacts with it through a standard API. Your data never leaves your control. Production deployment covers compute, MLOps, observability, and governance from the start.",
          "We deploy Llama and Mistral as defaults, proven and well-documented models with strong performance across enterprise use cases. The choice depends on your compute constraints, accuracy requirements, and regulatory environment. We benchmark candidates against your actual data and use cases before selecting a model, not after.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all tools", href: "/tools/" }}
        deliverablesSectionTitle="What we build"
        deliverablesLayout="list"
        deliverables={[
          {
            icon: <Target className="h-5 w-5" />,
            title: "Model selection",
            body: "Optimal model for your use cases, infrastructure, and compliance constraints. Llama and Mistral are our defaults. The decision depends on performance, memory, and regulatory requirements, not which model is trending.",
          },
          {
            icon: <Server className="h-5 w-5" />,
            title: "Infrastructure provisioning",
            body: "Compute, storage, and networking for your workload requirements. GPU or high-memory CPU as required. Network segmentation appropriate to your security posture.",
          },
          {
            icon: <CheckCircle className="h-5 w-5" />,
            title: "Installation, configuration, and validation",
            body: "Comprehensive validation before production traffic routes to the model. Performance benchmarks, accuracy tests against your actual use cases, latency measurements under representative load.",
          },
          {
            icon: <Plug className="h-5 w-5" />,
            title: "API access and service connectivity",
            body: "Standard API interface so your internal applications, agents, and MCP-connected systems communicate with the hosted model the same way they would a cloud-hosted model.",
          },
          {
            icon: <Wrench className="h-5 w-5" />,
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
          "You are not yet clear on your use cases. On-premise deployment without a defined application is significant compute investment with no return.",
          "Cloud AI is available to you. On-premise adds infrastructure overhead that cloud deployments do not carry.",
        ]}
        faq={[
          {
            question: "Which open-source models do you deploy?",
            answer: "Llama and Mistral are our defaults. The specific model and parameter count depend on your use cases, compute budget, and accuracy requirements. We benchmark two to three candidates against your actual data before recommending a model — not based on benchmarks from someone else's dataset.",
          },
          {
            question: "What hardware do we need?",
            answer: "It depends on the model size and expected throughput. A 7B-parameter model for internal use cases can run on a single high-memory GPU server. Larger models or higher concurrency requirements need multi-GPU infrastructure. We scope hardware requirements during the engagement and provision accordingly — you are not buying GPUs before you know what you need.",
          },
          {
            question: "Can an on-premise LLM connect to MCP like Claude does?",
            answer: "Yes. The MCP servers we build expose a standard interface. Whether the model calling them is Claude in the cloud or Llama on your hardware, the integration pattern is the same. This means you can run sensitive workflows on-premise and less restricted workflows through Claude — same MCP infrastructure for both.",
          },
          {
            question: "How does fine-tuning work?",
            answer: "Fine-tuning adapts a base model to your specific domain — your terminology, your document formats, your decision patterns. We prepare training datasets from your existing data, run the fine-tuning pipeline on your infrastructure, and validate the results against accuracy benchmarks. The fine-tuned model stays on your hardware. We never remove training data from your environment.",
          },
          {
            question: "Is on-premise always the right choice for regulated industries?",
            answer: "Not always. Claude Enterprise provides strong data handling commitments — conversations are not used for training, and Anthropic offers contractual data protection. For many regulated clients, Claude Enterprise with MCP is sufficient. On-premise is the right choice when regulations explicitly prohibit data transmission to any third party, or when your security posture requires air-gapped infrastructure.",
          },
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
