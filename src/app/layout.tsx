import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DiscoveryCallProvider } from "@/lib/discovery-call-context";
import { DiscoveryCallModal } from "@/components/discovery-call-modal";
import "./globals.css";

const aeonik = localFont({
  src: [
    { path: "../../public/fonts/Aeonik-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Aeonik-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/Aeonik-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Aeonik-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Aeonik-BoldItalic.woff2", weight: "700", style: "italic" },
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
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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

export const viewport: Viewport = {
  themeColor: "#00ABF0",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alphabyte",
  legalName: "Alphabyte Solutions Inc.",
  url: "https://alphabyte.ai",
  logo: "https://alphabyte.ai/logos/alphabyte-logo-blue.svg",
  description:
    "Alphabyte is an AI and data consultancy. We work with companies that have real data problems and want production systems, not prototypes.",
  sameAs: [
    "https://www.linkedin.com/company/alphabyte-solutions-inc",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "155 Winges Road, Unit 1",
    addressLocality: "Vaughan",
    addressRegion: "ON",
    postalCode: "L4L 6C7",
    addressCountry: "CA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contact@alphabyte.ai",
    availableLanguage: ["English"],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alphabyte.ai/#website",
  name: "Alphabyte",
  url: "https://alphabyte.ai",
  publisher: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={aeonik.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, webSiteSchema]),
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
