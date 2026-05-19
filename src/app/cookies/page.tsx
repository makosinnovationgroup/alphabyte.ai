import type { Metadata } from "next";
import Link from "next/link";
import {
  EyebrowChip,
  HardRule,
  HexgridSection,
  SectionLabel,
} from "@/components/operator";

export const metadata: Metadata = {
  title: "Cookies Policy",
  alternates: {
    canonical: "/cookies/",
  },
  robots: { index: false, follow: true },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cookies Policy",
  url: "https://alphabyte.ai/cookies/",
  description:
    "How Alphabyte uses cookies on its websites and online services.",
  isPartOf: {
    "@id": "https://alphabyte.ai/#website",
  },
};

export default function CookiesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cookies" },
        ]}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[64px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / LEGAL / COOKIES POLICY" />

          <div className="mb-7">
            <EyebrowChip>Legal · Cookies</EyebrowChip>
          </div>

          <h1 className="font-sans font-black text-display text-ink mb-7 text-balance tracking-[-0.02em] leading-[0.98]">
            Cookies Policy<span className="text-alphabyte-blue">.</span>
          </h1>

          <HardRule className="mb-7" />
        </div>
      </HexgridSection>

      {/* 02 BODY */}
      <section className="bg-white border-y border-border-default pt-16 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="blog-prose">
            <p>
              Alphabyte&rsquo;s websites and online services may use
              &ldquo;cookies.&rdquo; Cookies enable you to use shopping carts
              and to personalize your experience on our sites, tell us which
              parts of our websites people have visited, help us measure the
              effectiveness of ads and web searches, and give us insights into
              user behavior so we can improve our communications and products.
            </p>
            <p>
              If you want to disable cookies, check with your web browser
              provider to find out how to disable cookies.
            </p>
            <p>
              Because cookies are used throughout our websites, disabling them
              may prevent you from using certain parts of the sites.
            </p>
            <p>
              The cookies used on our websites have been categorized based on
              the guidelines found in the ICC UK Cookie guide. We use the
              following categories on our websites and other online services:
            </p>

            <h2>Strictly Necessary Cookies</h2>
            <p>
              These cookies are essential to enable you to browse around our
              websites and use their features. Without these cookies, services
              like shopping baskets and e-billing cannot be provided.
            </p>

            <h2>Performance Cookies</h2>
            <p>
              These cookies collect information about how you use our websites
              — for instance, which pages you go to most. This data may be
              used to help optimize our websites and make them easier for you
              to navigate. These cookies are also used to let affiliates know
              if you came to one of our websites from an affiliate and if your
              visit resulted in the use or purchase of a product or service
              from us, including details of the product or service purchased.
              These cookies don&rsquo;t collect information that identifies
              you. All information these cookies collect is aggregated and
              therefore anonymous.
            </p>

            <h2>Functionality Cookies</h2>
            <p>
              These cookies allow our websites to remember choices you make
              while browsing. For instance, we may store your geographic
              location in a cookie to ensure that we show you our website
              localized for your area. We may also remember preferences such
              as text size, fonts, and other customizable site elements. They
              may also be used to keep track of what featured products or
              videos have been viewed to avoid repetition. The information
              these cookies collect will not personally identify you, and they
              cannot track your browsing activity on non-Alphabyte websites.
            </p>
          </div>
        </div>
      </section>
    </main>
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
