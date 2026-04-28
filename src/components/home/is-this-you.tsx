const scenarios = [
  "Your team is already using Claude informally — prompts in Slack threads, personal workflows nobody else can replicate, data exports running through tools IT has not reviewed.",
  "Leadership has been asked about AI strategy and the honest answer is: we do not have one yet. The board wants something. A competitor announced something.",
  "You have already invested in AI. A pilot ran. Something was delivered. Not much is actually being used. You want to understand what went wrong before spending again.",
  "You are in a regulated industry or the Canadian public sector. You need an AI programme that can survive a compliance conversation, not just a demo.",
];

export function IsThisYou() {
  return (
    <section className="bg-canvas px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-10">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
            Is This You?
          </p>
          <span className="flex-1 border-t border-border-default" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {scenarios.map((text, i) => (
            <div
              key={i}
              className="rounded-md border border-border-default bg-white p-6 md:p-8"
            >
              <p className="text-body-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-md bg-alphabyte-blue/10 px-6 py-4">
          <p className="text-body italic text-muted-foreground">
            Whatever your situation — we have been here before. The discovery call is where we figure out which path fits.
          </p>
        </div>
      </div>
    </section>
  );
}
