interface ProofPoint {
  eyebrow: string;
  title: string;
  body: string;
}

const proofPoints: ProofPoint[] = [
  {
    eyebrow: "SPRINKLERMATIC / EJ CAPITAL",
    title: "Nine-initiative AI Command System",
    body: "Azure warehouse, custom MCP server (OAuth 2.0), Claude Desktop plugin, HITL gate for five autonomous agents. NFPA compliance agent live.",
  },
  {
    eyebrow: "RECIRQ / REVENTORY",
    title: "WhatsApp Sales Command Center",
    body: "Claude-powered semantic analysis feeding real-time BigQuery dashboard. Citizen dev SDLC plugin deployed org-wide.",
  },
  {
    eyebrow: "HOUSING SERVICES CORP.",
    title: "Data Strategy & AI Roadmap",
    body: "AI enablement roadmap delivered. Claude-based agents recommended for cross-program reporting and anomaly detection.",
  },
];

export function ProofPoints() {
  return (
    <section className="bg-canvas px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
            Proof Points
          </p>
          <span className="flex-1 border-t border-border-default" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proofPoints.map((pp) => (
            <div
              key={pp.title}
              className="rounded-md border border-border-default bg-white p-6 md:p-8"
            >
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-4">
                {pp.eyebrow}
              </p>
              <h3 className="text-body font-bold mb-3">
                {pp.title}
              </h3>
              <p className="text-body-sm text-muted-foreground">{pp.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
