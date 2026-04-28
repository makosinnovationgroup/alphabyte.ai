interface ProofPoint {
  eyebrow: string;
  title: string;
  body: string;
}

const proofPoints: ProofPoint[] = [
  {
    eyebrow: "SPRINKLERMATIC / EJ CAPITAL \u00b7 FIRE PROTECTION \u00b7 GLOBAL NATIONAL",
    title: "Automated NFPA compliance review",
    body: "Eliminates 40+ hours per week of manual fire codes lookup. Live in production.",
  },
  {
    eyebrow: "RECIRQ / REVENTORY \u00b7 CIRCULAR ECONOMY \u00b7 GLOBAL",
    title: "Real-time sales intelligence dashboard",
    body: "Claude analyses every WhatsApp sales conversation and feeds structured output into a live BigQuery dashboard.",
  },
  {
    eyebrow: "HOUSING SERVICES CORP. \u00b7 PUBLIC SECTOR HOUSING \u00b7 CANADA",
    title: "AI enablement roadmap",
    body: "Six actionable recommendations including automated cross-program reporting previously requiring a team of analysts.",
  },
];

export function ProofPoints() {
  return (
    <section className="bg-alphabyte-grey px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue whitespace-nowrap">
            Proof — What We Built. What It Produced
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
