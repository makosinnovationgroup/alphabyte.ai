"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Track {
  number: string;
  label: string;
  question: string;
  heading: string;
  body: string;
  rightForYou: string;
  cta: { label: string; href: string };
  pills: string[];
}

const tracks: Track[] = [
  {
    number: "01",
    label: "Discovery",
    question: "What should our AI strategy be?",
    heading: "Discovery",
    body: "Before you invest in AI, you need to know what\u2019s worth investing in. Stakeholder workshops, use case prioritization, and a roadmap you leave with. No vague recommendations. No padded slide decks.",
    rightForYou: "No prior AI investment. Leadership is curious but wants to see the case before committing budget.",
    cta: { label: "Get started \u2192", href: "/services/discovery/" },
    pills: [
      "Up to 10 stakeholder workshops",
      "Use case development \u00d73",
      "Feasibility & gap analysis",
      "Findings & roadmap",
    ],
  },
  {
    number: "02",
    label: "Data Readiness",
    question: "Is our data ready for AI?",
    heading: "Data Readiness",
    body: "AI projects fail more often because of data than because of models. Data quality audit, governance assessment, AI readiness scorecard, and a remediation pathway. Protects everything downstream.",
    rightForYou: "Data quality is unknown or suspect. Regulated industry with compliance requirements. About to begin agent or integration work.",
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
    heading: "Enablement",
    body: "Custom Claude environment for leadership, plus citizen-dev enablement for teams. Deployed in weeks, not quarters. The fastest path to visible ROI.",
    rightForYou: "Leadership wants a fast, visible AI win. Teams already using Claude in scattered or ungoverned ways.",
    cta: { label: "Get started \u2192", href: "/services/enablement/" },
    pills: [
      "Executive Productivity Suite",
      "Team Citizen Dev",
      "Custom skills",
      "Hypercare",
    ],
  },
  {
    number: "04",
    label: "Infrastructure",
    question: "How do our systems use AI?",
    heading: "Infrastructure",
    body: "Custom MCP servers, autonomous agents, on-premise LLMs, fine-tuned models. Where AI stops being a productivity tool and becomes operational infrastructure.",
    rightForYou: "Ready to connect AI to live internal systems. Operations that need autonomous workflow handling. Data sovereignty rules out cloud AI.",
    cta: { label: "Get started \u2192", href: "/services/infrastructure/" },
    pills: [
      "Custom MCP servers",
      "AI agents",
      "On-premise LLM",
      "Fine-tuned LLMs",
    ],
  },
];

export function TrackTabs() {
  const [active, setActive] = React.useState(0);
  const track = tracks[active];

  return (
    <>
      {/* Tab bar — full viewport width, dark background */}
      <div
        role="tablist"
        aria-label="Service tracks"
        className="relative z-10 grid grid-cols-2 lg:grid-cols-4 bg-foreground"
      >
        {tracks.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.number}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="track-panel"
              id={`track-tab-${i}`}
              onClick={() => setActive(i)}
              className={cn(
                "flex flex-col items-start gap-1 px-5 py-4 text-left transition-colors cursor-pointer",
                "shadow-[inset_-1px_0_0_rgba(255,255,255,0.1)]",
                "last:shadow-none",
                isActive
                  ? "bg-alphabyte-blue/10 text-alphabyte-blue"
                  : "text-white/50 hover:text-white/80",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alphabyte-blue focus-visible:ring-inset",
              )}
            >
              <span className="text-body-sm font-medium text-white/50">
                {t.number}
              </span>
              <span className="text-body-sm font-medium">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Track detail */}
      <section
        id="track-panel"
        role="tabpanel"
        aria-labelledby={`track-tab-${active}`}
        className="bg-canvas px-6 py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: question, heading, body, CTA */}
          <div>
            <p className="text-body italic text-muted-foreground mb-4">
              &ldquo;{track.question}&rdquo;
            </p>
            <h2 className="text-headline tracking-brand-snug mb-6">
              {track.heading}
            </h2>
            <p className="text-body text-foreground mb-6 max-w-[55ch]">
              {track.body}
            </p>
            <p className="text-body text-foreground mb-8 max-w-[55ch]">
              <span className="font-bold">Right for you if:</span>{" "}
              {track.rightForYou}
            </p>
            <Button variant="dark" size="sm" asChild>
              <Link href={track.cta.href}>{track.cta.label}</Link>
            </Button>
          </div>

          {/* Right: what's included */}
          <div>
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-5">
              What&rsquo;s Included
            </p>
            <div className="flex flex-wrap gap-3">
              {track.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border-default bg-white px-4 py-2 text-body-sm text-muted-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
