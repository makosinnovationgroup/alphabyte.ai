import { Chevron, CommitRow, SectionLabel } from "@/components/operator";

interface ProofPoint {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
}

const proofPoints: ProofPoint[] = [
  {
    eyebrow: "CONSTRUCTION FIRM \u00b7 MULTI-ENTITY \u00b7 NORTH AMERICA",
    title: "AI compliance intelligence agent",
    body: "Custom MCP server and knowledge graph navigating a full regulatory code library with citation-grade accuracy. Live in production.",
    href: "/our-work/fire-protection-compliance/",
  },
  {
    eyebrow: "MAJOR SUPPLIER \u00b7 REVERSE LOGISTICS \u00b7 GLOBAL",
    title: "Executive productivity suite",
    body: "Custom Claude plugin giving leadership a single command surface across GSuite, Slack, Power BI, and Fireflies. Automated morning briefs and on-demand workflows.",
    href: "/our-work/circular-economy-platform/",
  },
  {
    eyebrow: "DTC E-COMMERCE \u00b7 PAID MEDIA \u00b7 NORTH AMERICA",
    title: "Media buy analytics agent",
    body: "Custom Power BI MCP server connecting Claude to Microsoft Fabric. Media buyers ask plain-English questions and get auditable, DAX-grounded answers in seconds.",
    href: "/our-work/media-buy-analytics/",
  },
  {
    eyebrow: "COMMUNITY HOUSING \u00b7 PUBLIC SECTOR \u00b7 CANADA",
    title: "AI enablement roadmap",
    body: "Seven-recommendation roadmap from data governance to five purpose-built Claude agents, executable within 90 days.",
    href: "/our-work/community-housing-organisation/",
  },
];

export function ProofPoints() {
  return (
    <section className="bg-canvas pt-20 pb-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <SectionLabel text="04 / PROOF / IN PRODUCTION" />

        <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-black tracking-[-0.025em] mb-2">
          What we built. What it produced.
        </h2>
        <p className="font-mono text-[12px] text-muted-foreground mb-7 flex items-center">
          <Chevron />
          Four live production systems. No lab demos.
        </p>
        <div className="h-px bg-ink mb-9" />

        <div className="flex flex-col border-t border-border-default">
          {proofPoints.map((p) => (
            <CommitRow
              key={p.href}
              title={p.title}
              body={p.body}
              tag={p.eyebrow}
              href={p.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
