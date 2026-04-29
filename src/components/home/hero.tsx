"use client";

import { DiscoveryCallButton } from "@/components/discovery-call-button";

const stats = [
  { value: "10×", label: "Workforce output multiplier from governed citizen dev" },
  { value: "2 wks", label: "Fastest time to a live Claude environment" },
  { value: "3", label: "Active North American deployments in delivery today" },
];

export function Hero() {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Left column */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-alphabyte-blue/30 bg-alphabyte-blue/10 px-4 py-1.5 text-body-sm font-medium text-alphabyte-blue mb-8">
              &#9733; Claude Partner &middot; Mid-market
            </span>

            <h1 className="text-display font-sans tracking-brand-tight mb-6">
              AI that <span className="text-alphabyte-blue">compounds</span>. Not
              pilots that stall.
            </h1>

            <div className="space-y-4 mb-10 max-w-[60ch]">
              <p className="text-lg text-foreground">
                The models are ready. The tools are here. The window to get ahead
                of your competition is open right now — and it is not going to
                stay open.
              </p>
              <p className="text-lg text-foreground">
                Our flagship offering is Citizen Developer Enablement. Every
                employee, now an AI developer.
              </p>
              <p className="text-lg text-foreground">
                We are not a generalist AI consultancy. Claude is our entire
                practice — not a competency we added to a service menu.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
              <a
                href="#tracks"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                See How it Works &rarr;
              </a>
            </div>
          </div>

          {/* Right column — stats */}
          <div className="flex flex-row gap-4 lg:flex-col lg:gap-4 lg:pt-16">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl border border-border-default bg-white p-5 shadow-sm"
              >
                <p className="text-headline font-bold tracking-brand-tight text-alphabyte-blue">
                  {stat.value}
                </p>
                <p className="text-body-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
