import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Services — AI & Data Consulting",
  description:
    "Five AI consulting services for mid-market organizations. Start where your situation actually is — citizen development, executive enablement, discovery, data readiness, or infrastructure.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Services — AI & Data Consulting",
    description:
      "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
    url: "/services/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — AI & Data Consulting Services",
      },
    ],
  },
  twitter: {
    title: "Services — AI & Data Consulting",
    description:
      "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
    images: ["/og/default.png"],
  },
};

const decisionRows = [
  {
    situation:
      "Team using Claude informally — Slack prompts, personal workflows, unreviewed data access",
    startHere: "Citizen Development ★",
    href: "/services/citizen-development/",
    next: "Data Readiness → Infrastructure",
  },
  {
    situation:
      "Leadership needs a visible AI win before committing to a broader programme",
    startHere: "Executive Enablement",
    href: "/services/executive-enablement/",
    next: "Citizen Development → Infrastructure",
  },
  {
    situation:
      "No AI investment yet — want a plan you can execute, not a deck",
    startHere: "Discovery",
    href: "/services/discovery/",
    next: "Data Readiness or Citizen Development",
  },
  {
    situation: "Regulated industry or uncertain data quality",
    startHere: "Data Readiness",
    href: "/services/data-readiness/",
    next: "Citizen Development or Infrastructure",
  },
  {
    situation:
      "Team enabled, data validated — ready to connect AI to live systems",
    startHere: "Infrastructure",
    href: "/services/infrastructure/",
    next: "Ongoing agent expansion",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-canvas px-6 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14">
        <div className="mx-auto max-w-[1340px]">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Our Services
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-6">
              AI that <span className="text-alphabyte-blue">compounds.</span>{" "}
              Not pilots that stall.
            </h1>
            <div className="space-y-4 max-w-[60ch]">
              <p className="text-body text-foreground">
                We are not a generalist AI consultancy. Claude is our entire
                practice &mdash; every engagement, every engineer, every
                methodology built specifically for Claude deployment in
                mid-market organizations.
              </p>
              <p className="text-body text-foreground">
                Citizen Developer Enablement is our flagship. Everything else is
                either preparation for it or what comes after it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision table */}
      <section className="bg-canvas px-6 py-10 md:py-14">
        <div className="mx-auto max-w-[1340px]">
          <div className="flex items-center gap-3 mb-6">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue whitespace-nowrap">
              Where Do You Start?
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>

          <p className="text-body text-muted-foreground mb-8 max-w-[70ch]">
            All five services are available at any time. This is where you
            enter, based on where you actually are.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-body-sm">
              <thead>
                <tr className="border-b-2 border-foreground">
                  <th className="text-left py-3 pr-6 font-bold text-foreground">
                    Your situation
                  </th>
                  <th className="text-left py-3 pr-6 font-bold text-foreground">
                    Start here
                  </th>
                  <th className="text-left py-3 font-bold text-foreground">
                    What comes next
                  </th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr
                    key={row.startHere}
                    className="border-b border-border-default"
                  >
                    <td className="py-4 pr-6 text-muted-foreground align-top">
                      {row.situation}
                    </td>
                    <td className="py-4 pr-6 align-top whitespace-nowrap">
                      <Link
                        href={row.href}
                        className="font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                      >
                        {row.startHere}
                      </Link>
                    </td>
                    <td className="py-4 text-muted-foreground align-top">
                      {row.next}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-body-sm italic text-muted-foreground max-w-[80ch]">
            These are entry points, not a mandatory sequence. Most clients start
            with Citizen Dev or Executive Enablement, see the return, and
            expand.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-alphabyte-grey border-t border-border-default px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1340px] text-center">
          <h2 className="text-headline tracking-brand-snug text-foreground mb-4">
            Not sure which fits?
          </h2>
          <p className="text-body text-muted-foreground mb-10 mx-auto max-w-[50ch]">
            The discovery call is where we work that out. 45 minutes, no cost,
            no obligation.
          </p>
          <DiscoveryCallButton variant="dark" size="lg">
            Book a Discovery Call
          </DiscoveryCallButton>
        </div>
      </section>
    </main>
  );
}
