import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ActiveDelivery } from "@/components/home/trusted-by";
import { IsThisYou } from "@/components/home/is-this-you";
import { ProofPoints } from "@/components/home/proof-points";
import { ClosingCta } from "@/components/home/closing-cta";

export const metadata: Metadata = {
  title: "Alphabyte AI - Consulting for Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations. Four tracks. Real deployments. No junior bench.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Consulting for Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations.",
    url: "/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 AI Consulting for Mid-Market Organizations",
      },
    ],
  },
  twitter: {
    title: "AI Consulting for Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations.",
    images: ["/og/default.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Consulting for Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations. Four tracks. Real deployments. No junior bench.",
  url: "https://alphabyte.ai/",
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alphabyte",
  url: "https://alphabyte.ai",
  description:
    "AI and data consulting for mid-market organizations.",
  serviceType: "AI and Data Consulting",
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "155 Winges Road, Unit 1",
    addressLocality: "Vaughan",
    addressRegion: "ON",
    postalCode: "L4L 6C7",
    addressCountry: "CA",
  },
  priceRange: "$$$",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, professionalServiceSchema]),
        }}
      />
      <Hero />
      <ActiveDelivery />
      <IsThisYou />
      <ProofPoints />
      <ClosingCta />
    </main>
  );
}
