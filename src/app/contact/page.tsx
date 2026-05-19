import type { Metadata } from "next";
import Link from "next/link";
import {
  Chevron,
  EyebrowChip,
  HardRule,
  HexgridSection,
  SectionLabel,
  TypedHero,
} from "@/components/operator";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Alphabyte AI - Book a Free Discovery Call",
  description:
    "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation. Describe your situation and we tell you candidly what we would do.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Alphabyte AI - Book a Free Discovery Call",
    description:
      "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation.",
    url: "/contact/",
    images: [
      {
        url: "/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Contact Us",
      },
    ],
  },
  twitter: {
    title: "Contact Alphabyte AI - Book a Free Discovery Call",
    description:
      "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation.",
    images: ["/og/contact.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Alphabyte",
              description:
                "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation.",
              url: "https://alphabyte.ai/contact/",
              isPartOf: {
                "@type": "WebSite",
                name: "Alphabyte",
                url: "https://alphabyte.ai",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://alphabyte.ai/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact Us",
                  item: "https://alphabyte.ai/contact/",
                },
              ],
            },
          ]),
        }}
      />
      <main>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* 01 HERO */}
        <HexgridSection className="relative pt-14 pb-[64px]">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="01 / CONTACT / DISCOVERY" />

            <div className="mb-7">
              <EyebrowChip>Contact · Get In Touch</EyebrowChip>
            </div>

            <TypedHero
              pre="A discovery conversation takes "
              word="45 minutes"
              post="."
            />

            <HardRule className="mb-7" />

            <div className="max-w-[60ch] space-y-4">
              <p className="text-[17px] leading-[1.55] text-ink">
                No cost. No obligation. You describe your situation. We tell
                you candidly whether there is an engagement worth having,
                which service is the right entry point, and what you would
                have in your hands at day 30.
              </p>
            </div>
          </div>
        </HexgridSection>

        {/* 02 FORM + DETAILS */}
        <section className="bg-white border-y border-border-default pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="02 / FORM / BOOK A CALL" />

            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="max-w-[60ch]">
                <ContactForm />
              </div>

              <aside className="border border-border-default bg-canvas">
                <div className="px-5 py-5 border-b border-border-default">
                  <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2 flex items-center">
                    <Chevron />
                    Email
                  </div>
                  <a
                    href="mailto:contact@alphabyte.ai"
                    className="font-mono text-[13.5px] text-alphabyte-blue hover:text-ink transition-colors"
                  >
                    contact@alphabyte.ai
                  </a>
                </div>

                <div className="px-5 py-5 border-b border-border-default">
                  <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2 flex items-center">
                    <Chevron />
                    Office
                  </div>
                  <p className="font-mono text-[12.5px] text-ink leading-[1.55]">
                    155 Winges Road, Unit 1,
                    <br />
                    Vaughan, Ontario, Canada L4L 6C7
                  </p>
                </div>

                <div className="px-5 py-5">
                  <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2 flex items-center">
                    <Chevron />
                    Follow Us
                  </div>
                  <a
                    href="https://www.linkedin.com/company/alphabyte-solutions-inc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[13px] text-alphabyte-blue hover:text-ink transition-colors flex items-center gap-1.5"
                  >
                    Alphabyte AI on LinkedIn
                    <span className="text-brand-live">→</span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border-default bg-canvas"
    >
      <ol className="mx-auto max-w-[1400px] flex items-center gap-2 px-8 py-3 font-mono text-[11px] tracking-[0.04em] uppercase">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-muted-foreground">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-alphabyte-blue transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
