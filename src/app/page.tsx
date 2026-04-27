import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { TrackTabs } from "@/components/track-tabs";
import { ProofPoints } from "@/components/home/proof-points";
import { ClosingCta } from "@/components/home/closing-cta";

export const metadata: Metadata = {
  title: "AI Consulting for Canadian Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Consulting for Canadian Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada.",
    url: "/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — AI Consulting for Canadian Mid-Market Organizations",
      },
    ],
  },
  twitter: {
    title: "AI Consulting for Canadian Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada.",
    images: ["/og/default.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Consulting for Canadian Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench.",
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
    "AI and data consulting for mid-market organizations across Canada.",
  serviceType: "AI and Data Consulting",
  areaServed: {
    "@type": "Country",
    name: "Canada",
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
      <TrustedBy />
      <TrackTabs />
      <ProofPoints />
      <ClosingCta />
    </main>
  );
}
