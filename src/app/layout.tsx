import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DiscoveryCallProvider } from "@/lib/discovery-call-context";
import { DiscoveryCallModal } from "@/components/discovery-call-modal";
import "./globals.css";

/**
 * Geist is the web typeface. Aeonik is the print typeface per brand guide
 * §4.0; if a webfont license for Aeonik is obtained later, swap this block.
 */
const geist = localFont({
  src: [
    { path: "../../public/fonts/Geist-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Geist-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/Geist-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Geist-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphabyte.ai"),
  title: {
    default: "Alphabyte — AI & Data Consulting",
    template: "%s — Alphabyte",
  },
  description:
    "Alphabyte is an AI and data consultancy. We work with companies that have real data problems and want production systems, not prototypes.",
  openGraph: {
    type: "website",
    siteName: "Alphabyte",
    locale: "en_US",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — AI & Data Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alphabyte",
  legalName: "Alphabyte",
  url: "https://alphabyte.ai",
  logo: "https://alphabyte.ai/logos/alphabyte-logo-blue.svg",
  description:
    "Alphabyte is an AI and data consultancy. We work with companies that have real data problems and want production systems, not prototypes.",
  // Fill in LinkedIn and GitHub profile URLs when those profiles exist
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <DiscoveryCallProvider>
          <Header />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <Footer />
          <DiscoveryCallModal />
        </DiscoveryCallProvider>
      </body>
    </html>
  );
}
