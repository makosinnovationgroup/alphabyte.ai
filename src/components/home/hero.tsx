import {
  EyebrowChip,
  HardRule,
  HexgridSection,
  MonoIsh,
  SectionLabel,
  StatCard,
  TypedHero,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

const stats: { num: string; label: string }[] = [
  {
    num: "10×",
    label: "Workforce output multiplier from governed citizen dev.",
  },
  {
    num: "2 wks",
    label: "Fastest time to a live Claude environment.",
  },
  {
    num: "4",
    label: "Active North American deployments in delivery today.",
  },
];

export function Hero() {
  return (
    <HexgridSection className="relative pt-14 pb-[84px]">
      <div className="mx-auto max-w-[1400px] px-8">
        <SectionLabel text="01 / HERO / ENTRY" />

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-2">
              <EyebrowChip star>Claude Certified</EyebrowChip>
              <EyebrowChip>Microsoft Partner</EyebrowChip>
              <EyebrowChip>Mid-Market</EyebrowChip>
            </div>

            <TypedHero
              pre="AI that "
              word="compounds."
              post={
                <>
                  {" "}Not pilots that stall.
                </>
              }
            />

            <HardRule className="mb-7" />

            <div className="mb-9 max-w-[60ch] space-y-4">
              <p className="text-[17px] leading-[1.55] text-ink">
                The models are ready. The tools are here. The window to get ahead
                of your competition is open right now &mdash; and it is not going
                to stay open.
              </p>
              <p className="text-[17px] leading-[1.55] text-ink">
                Our flagship offering is Citizen Developer Enablement. Every
                employee, now an AI developer.
              </p>
              <p className="text-[17px] leading-[1.55] text-ink">
                We are not a generalist AI consultancy.{" "}
                <MonoIsh>Claude</MonoIsh> is our flagship practice. Not a
                checkbox on a service menu.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-7">
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
              <a
                href="/services/"
                className="font-mono text-[13px] font-medium text-alphabyte-blue transition-colors duration-[120ms] hover:text-ink"
              >
                See how it works &rarr;
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 lg:pt-[60px]">
            {stats.map((s) => (
              <StatCard key={s.num} num={s.num} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </HexgridSection>
  );
}
