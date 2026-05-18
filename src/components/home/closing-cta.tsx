import { HexgridSection, SectionLabel, SpecCard } from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

// Spec card items derived directly from the existing closing CTA body copy
// ("45 minutes. No cost. No obligation. You describe your situation. We tell
// you what we would do, in what order, and what you would have at day 30.").
// Reorganized into slots; no new copy invented.
const specItems = [
  "No cost",
  "No obligation",
  "You describe your situation",
  "We say what we would do, in what order",
  "Day-30 deliverable described",
];

export function ClosingCta() {
  return (
    <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
      <div className="mx-auto max-w-[1400px] px-8">
        <SectionLabel text="05 / CTA / DISCOVERY CALL" />

        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[22ch]">
              The window is open. Let&rsquo;s find out if there is an engagement
              worth having.
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-[60ch]">
              45 minutes. No cost. No obligation. You describe your situation.
              We tell you what we would do, in what order, and what you would
              have at day 30.
            </p>
            <DiscoveryCallButton variant="dark" size="lg">
              Book a Discovery Call
            </DiscoveryCallButton>
          </div>

          <SpecCard
            label="discovery call \u00b7 spec"
            price="45 min"
            items={specItems}
            cta={
              <DiscoveryCallButton variant="dark" size="sm" className="w-full">
                Book the Call
              </DiscoveryCallButton>
            }
          />
        </div>
      </div>
    </HexgridSection>
  );
}
