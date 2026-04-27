import type { Metadata } from "next";
import Link from "next/link";
import { TrackTabs, type Track } from "@/components/track-tabs";

export const metadata: Metadata = {
  title: "Services \u2014 AI Consulting Across Four Tracks",
  description:
    "Discovery, data readiness, enablement, infrastructure. Four AI consulting tracks designed for mid-market organizations. Start where your problem actually is.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Services \u2014 AI Consulting Across Four Tracks",
    description:
      "Four AI consulting tracks designed for mid-market organizations. Start where your problem actually is.",
    url: "/services/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 AI Consulting Across Four Tracks",
      },
    ],
  },
  twitter: {
    title: "Services \u2014 AI Consulting Across Four Tracks",
    description:
      "Four AI consulting tracks designed for mid-market organizations. Start where your problem actually is.",
    images: ["/og/default.png"],
  },
};

const servicesTracks: Track[] = [
  {
    number: "01",
    label: "Discovery",
    question: "What should our AI strategy be?",
    trackHeader: "TRACK 01 \u00b7 DISCOVERY",
    heading: "Discovery",
    body: "Before you invest in AI, you need to know what\u2019s worth investing in. Discovery is a focused, time-boxed engagement \u2014 stakeholder workshops, use case prioritization, and a roadmap you leave with. No vague recommendations.",
    rightForYou:
      "No prior AI investment. Leadership curious but wants the case before committing budget.",
    cta: { label: "Get started \u2192", href: "/services/discovery/" },
    pills: [
      "Up to 10 stakeholder workshops",
      "Use case development \u00d73",
      "Gap analysis",
      "Findings & roadmap",
    ],
  },
  {
    number: "02",
    label: "Data Readiness",
    question: "Is our data ready for AI?",
    trackHeader: "TRACK 02 \u00b7 DATA READINESS",
    heading: "Data Readiness",
    body: "Most AI projects don\u2019t fail because of the model. They fail because the data feeding it is inconsistent or ungoverned. Finding that out six months into a build is expensive. Finding it in week two is not.",
    rightForYou:
      "Regulated industry, uncertain data quality, or about to begin agent or integration work.",
    cta: { label: "Get started \u2192", href: "/services/data/" },
    pills: [
      "Data quality audit",
      "Governance assessment",
      "AI readiness scorecard",
      "Remediation pathway",
    ],
  },
  {
    number: "03",
    label: "Enablement \u2605",
    question: "How do our people use AI?",
    trackHeader: "TRACK 03 \u00b7 ENABLEMENT \u2605",
    heading: "Enablement",
    body: "The fastest ROI in AI isn\u2019t a system. It\u2019s a person who knows what they\u2019re doing. Two paths: an Executive Productivity Suite for leadership, and Citizen Dev Enablement for teams already using AI informally.",
    rightForYou:
      "Leadership wants a fast visible win, or teams are using Claude informally.",
    cta: { label: "Get started \u2192", href: "/services/enablement/" },
    pills: [
      "Custom Claude environment",
      "Knowledgebases & skills",
      "SDLC plugin",
      "Guardrails & graduation playbook",
    ],
  },
  {
    number: "04",
    label: "Infrastructure",
    question: "How do our systems use AI?",
    trackHeader: "TRACK 04 \u00b7 INFRASTRUCTURE",
    heading: "Infrastructure",
    body: "Where AI stops being a productivity tool and starts being operational infrastructure. Custom MCP servers, autonomous agents, on-premise LLMs. Built in production, not in demos.",
    rightForYou:
      "Ready to connect AI to live systems, or data sovereignty rules out cloud AI.",
    cta: { label: "Get started \u2192", href: "/services/infrastructure/" },
    pills: [
      "Custom MCP servers",
      "AI agents & Command Centre",
      "On-premise LLM",
      "Fine-tuned custom LLMs",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-canvas px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
              Services
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-6">
              Most organizations don&rsquo;t have an{" "}
              <span className="text-alphabyte-blue">AI problem</span>. They
              have a clarity problem.
            </h1>
            <p className="text-body text-foreground max-w-[60ch]">
              We work across four tracks. You don&rsquo;t need all of them. You
              need the right one, in the right order, for where you actually
              are.
            </p>
          </div>
        </div>
      </section>

      <TrackTabs tracks={servicesTracks} />

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
              Not Sure Where to Start
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-alphabyte-blue bg-white p-6 md:p-8">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-4">
                Discovery
              </p>
              <h3 className="text-body font-bold mb-3">Strategy Sprint</h3>
              <p className="text-body-sm text-muted-foreground mb-4">
                Fixed-price, time-boxed. Three to five weeks to answer: where
                do we actually start?
              </p>
              <Link
                href="/services/discovery/"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                Get started &rarr;
              </Link>
            </div>

            <div className="rounded-lg border border-border-default bg-white p-6 md:p-8">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-4">
                Enablement
              </p>
              <h3 className="text-body font-bold mb-3">Executive Quick Win</h3>
              <p className="text-body-sm text-muted-foreground mb-4">
                Custom Claude environment for leadership, delivered in two to
                four weeks.
              </p>
              <Link
                href="/services/enablement/"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                Get started &rarr;
              </Link>
            </div>

            <div className="rounded-lg border border-border-default bg-white p-6 md:p-8">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-4">
                Data + Enablement + MCP
              </p>
              <h3 className="text-body font-bold mb-3">Sprawl Fix</h3>
              <p className="text-body-sm text-muted-foreground mb-4">
                Turn informal AI usage across departments into a governed,
                compounding capability.
              </p>
              <Link
                href="/services/discovery/"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                Get started &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
