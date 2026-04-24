import type { Metadata } from "next";
import "./globals.css";

/*
 * Aeonik is the brand primary typeface (Brand Guide §4.0).
 * It is a commercial font from Cotype Foundry and must be licensed
 * from https://cotypefoundry.com/our-fonts/aeonik/.
 *
 * Once the licensed .woff2 files are available, drop them in
 * `public/fonts/` and uncomment the block below to wire them up
 * via next/font/local. The Tailwind `font-sans` utility already
 * points at `var(--font-aeonik)` with an Arial fallback (per the
 * guide's System Fonts section).
 *
 * import localFont from "next/font/local";
 *
 * const aeonik = localFont({
 *   src: [
 *     { path: "../../public/fonts/Aeonik-Regular.woff2", weight: "400", style: "normal" },
 *     { path: "../../public/fonts/Aeonik-RegularItalic.woff2", weight: "400", style: "italic" },
 *     { path: "../../public/fonts/Aeonik-Bold.woff2", weight: "700", style: "normal" },
 *     { path: "../../public/fonts/Aeonik-BoldItalic.woff2", weight: "700", style: "italic" },
 *   ],
 *   variable: "--font-aeonik",
 *   display: "swap",
 * });
 */

export const metadata: Metadata = {
  title: "Alphabyte — AI Consulting",
  description:
    "Alphabyte applies deep technological expertise, data science methodologies and specialised know-how to ignite meaningful change for clients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" /* className={aeonik.variable} */>
      <body>{children}</body>
    </html>
  );
}
