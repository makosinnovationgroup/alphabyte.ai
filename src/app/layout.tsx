import type { Metadata } from "next";
import localFont from "next/font/local";
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
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
