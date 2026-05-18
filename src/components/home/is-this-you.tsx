import {
  Chevron,
  HexgridSection,
  Manifest2x2,
  SectionLabel,
  type ManifestCell,
} from "@/components/operator";

const cells: [ManifestCell, ManifestCell, ManifestCell, ManifestCell] = [
  {
    num: "01",
    tag: "CASE \u00b7 SHADOW IT",
    body: "Your team is already using Claude informally — prompts in Slack threads, personal workflows nobody else can replicate, data exports running through tools IT has not reviewed.",
  },
  {
    num: "02",
    tag: "CASE \u00b7 NO CLEAR STRATEGY",
    body: "Leadership has been asked about AI strategy and the honest answer is: we do not have one yet. The board wants something. A competitor announced something.",
  },
  {
    num: "03",
    tag: "CASE \u00b7 STALLED INVESTMENT",
    body: "You have already invested in AI. A pilot ran. Something was delivered. Not much is actually being used. You want to understand what went wrong before spending again.",
  },
  {
    num: "04",
    tag: "CASE \u00b7 REGULATORY PRESSURE",
    body: "You are in a regulated industry or the public sector. You need an AI programme that can survive a compliance conversation, not just a demo.",
  },
];

export function IsThisYou() {
  return (
    <HexgridSection className="bg-canvas pt-16 pb-6">
      <div className="mx-auto max-w-[1400px] px-8">
        <SectionLabel text="03 / MANIFEST / IS THIS YOU?" />

        <h2 className="text-[clamp(2rem,3.4vw,3rem)] font-black tracking-[-0.025em] mb-2">
          Common signatures.
        </h2>
        <p className="font-mono text-[12px] text-muted-foreground mb-7 flex items-center">
          <Chevron />
          If two of these match, the discovery call is already worth the time.
        </p>
        <div className="h-px bg-ink mb-9" />

        <Manifest2x2 cells={cells} />

        <div className="mt-6 px-5 py-[18px] border-l-2 border-alphabyte-blue bg-alphabyte-blue/[0.04] font-mono text-[13px] text-muted-foreground leading-[1.55]">
          Whatever your situation &mdash; we have been here before. The discovery
          call is where we figure out which path fits.
        </div>
      </div>
    </HexgridSection>
  );
}
