import type { Metadata } from "next";
import {
  Chevron,
  EyebrowChip,
  HardRule,
  HexgridSection,
  MonoIsh,
  SectionLabel,
  TrackTable,
  TypedHero,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";
import { tracks } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Services - AI & Data Consulting",
  description:
    "Five AI consulting services for mid-market organizations. Start where your situation actually is — citizen dev, executive enablement, discovery, and more.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Services - AI & Data Consulting",
    description:
      "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
    url: "/services/",
    images: [
      {
        url: "/og/services.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Services - AI & Data Consulting",
      },
    ],
  },
  twitter: {
    title: "Services - AI & Data Consulting",
    description:
      "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
    images: ["/og/services.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Consulting Services for Mid-Market Organizations",
  description:
    "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
  url: "https://alphabyte.ai/services/",
  isPartOf: { "@id": "https://alphabyte.ai/#website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabyte.ai/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://alphabyte.ai/services/" },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, breadcrumbSchema]),
        }}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / INDEX / SERVICES" />

          <div className="mb-7">
            <EyebrowChip>Services &middot; 5 Tracks</EyebrowChip>
          </div>

          <TypedHero
            pre="Five tracks. "
            word="One methodology"
            post=". We start where you are today."
          />

          <HardRule className="mb-7" />

          <div className="max-w-[60ch] space-y-4">
            <p className="text-[17px] leading-[1.55] text-ink">
              We are not a generalist AI consultancy.{" "}
              <MonoIsh>Claude</MonoIsh> is our entire practice &mdash; every
              engagement, every engineer, every methodology built specifically
              for Claude deployment in mid-market organizations.
            </p>
            <p className="text-[17px] leading-[1.55] text-ink">
              Citizen Developer Enablement is our flagship. Everything else is
              either preparation for it or what comes after it.
            </p>
          </div>
        </div>
      </HexgridSection>

      {/* 02 TRACKS */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / TRACKS / FIVE PATHS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-7 flex items-center">
            <Chevron />
            All tracks deploy on the same governed Claude substrate. Pick the
            entry point that matches the question on your desk.
          </p>
          <div className="h-px bg-ink mb-9" />

          <TrackTable tracks={tracks} />
        </div>
      </section>

      {/* 03 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[22ch]">
              Not sure which fits?
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-[60ch]">
              The discovery call is where we work that out. 45 minutes, no cost,
              no obligation.
            </p>
            <DiscoveryCallButton variant="dark" size="lg">
              Book a Discovery Call
            </DiscoveryCallButton>
          </div>
        </div>
      </HexgridSection>
    </main>
  );
}
