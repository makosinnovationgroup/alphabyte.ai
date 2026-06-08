import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    default: "Alphabyte - AI & Data Consulting",
    template: "%s - Alphabyte",
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
        alt: "Alphabyte - AI & Data Consulting",
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
  width: "device-width",
  initialScale: 1,
  themeColor: "#00ABF0",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://alphabyte.ai/#organization",
  name: "Alphabyte",
  legalName: "Alphabyte Solutions Inc.",
  alternateName: "Alphabyte AI",
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
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 20,
  },
};

const siteNavigationSchema = [
  { "@type": "SiteNavigationElement", name: "Services", url: "https://alphabyte.ai/services/" },
  { "@type": "SiteNavigationElement", name: "Tools", url: "https://alphabyte.ai/tools/" },
  { "@type": "SiteNavigationElement", name: "Our Work", url: "https://alphabyte.ai/our-work/" },
  { "@type": "SiteNavigationElement", name: "Team", url: "https://alphabyte.ai/team/" },
  { "@type": "SiteNavigationElement", name: "About", url: "https://alphabyte.ai/about/" },
  { "@type": "SiteNavigationElement", name: "Blog", url: "https://alphabyte.ai/blog/" },
  { "@type": "SiteNavigationElement", name: "Contact", url: "https://alphabyte.ai/contact/" },
];

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alphabyte.ai/#website",
  name: "Alphabyte",
  url: "https://alphabyte.ai",
  publisher: {
    "@id": "https://alphabyte.ai/#organization",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={aeonik.variable}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Alphabyte Blog"
          href="/feed.xml"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9E4HR04ZFZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9E4HR04ZFZ');
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Kw2oYM7EjN2E2DHmo1E7CA"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, webSiteSchema, ...siteNavigationSchema]),
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
