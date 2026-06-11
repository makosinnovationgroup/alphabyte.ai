import Link from "next/link";

interface ProofPoint {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
}

const proofPoints: ProofPoint[] = [
  {
    eyebrow: "CONSTRUCTION FIRM · MULTI-ENTITY · NORTH AMERICA",
    title: "AI compliance intelligence agent",
    body: "Custom MCP server and knowledge graph navigating a full regulatory code library with citation-grade accuracy. Live in production.",
    href: "/our-work/construction-compliance-agent/",
  },
  {
    eyebrow: "MAJOR SUPPLIER · REVERSE LOGISTICS · GLOBAL",
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
    <section className="bg-alphabyte-grey px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-center gap-3 mb-10">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue whitespace-nowrap">
            Proof, What We Built. What It Produced
          </p>
          <span className="flex-1 border-t border-border-default" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {proofPoints.map((pp) => (
            <Link
              key={pp.title}
              href={pp.href}
              className="rounded-md border border-border-default bg-white p-6 md:p-8 transition-colors hover:border-alphabyte-blue"
            >
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-4">
                {pp.eyebrow}
              </p>
              <h3 className="text-body font-bold mb-3">
                {pp.title}
              </h3>
              <p className="text-body-sm text-muted-foreground">{pp.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
