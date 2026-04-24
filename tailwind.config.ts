import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Alphabyte Design Tokens — Single Source of Truth
 *
 * Derived from the Alphabyte Brand Standards Manual v1.0 (March 2021).
 * This config is authoritative: components, pages, and utilities should
 * consume these tokens rather than hardcoding values.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ----- Colour (Brand Guide §3.0) -----
      colors: {
        // Raw brand palette
        alphabyte: {
          // Primary — Alphabyte Blue
          blue: "#00abf0",
          // Secondary — Analytical Grey
          grey: "#ebebeb",
          // Secondary — Code Green
          green: "#00ffa6",
        },
        // Semantic aliases so components can speak in intent
        // rather than colour names.
        brand: {
          DEFAULT: "#00abf0",
          fg: "#ffffff",       // text on brand
          muted: "#ebebeb",    // subdued surfaces
          accent: "#00ffa6",   // sparingly — per guide, accents only
          ink: "#000000",      // body text on light bg
        },
      },

      // ----- Typography (Brand Guide §4.0) -----
      // Primary typeface is Aeonik (Cotype Foundry, paid licence).
      // System fallback is Arial per guide §4.0 System Fonts.
      // Load Aeonik via next/font/local in app/layout.tsx once the
      // licensed .woff2 files are placed in /public/fonts.
      fontFamily: {
        sans: [
          "var(--font-aeonik)",
          "Arial",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },

      // Type scale approximated from the brand guide's Header /
      // Sub-header / Body / Pull Quote hierarchy (§4.0).
      fontSize: {
        // "Header — large font size, leading matches font size, title case"
        display: ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        // "Sub-header — medium font size, leading matches font size"
        headline: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        // Body sizes
        body: ["1rem", { lineHeight: "1.55", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55", letterSpacing: "0" }],
        // Pull quote per §4.0 — +10 tracking
        quote: ["1rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },

      // Brand-guide tracking values (units of 1/1000 em per Illustrator convention).
      letterSpacing: {
        "brand-tight": "-0.02em",   // -20
        "brand-snug": "-0.01em",    // -10
        "brand-normal": "0",
        "brand-wide": "0.01em",     // +10 (pull quote)
      },

      // ----- Minimum sizes (Brand Guide §2.0) -----
      // Logo: 120px min digital. Icon: 20px min digital.
      minWidth: {
        "logo-min": "120px",
        "icon-min": "20px",
      },

      // ----- Gradient (Brand Guide §3.0) -----
      // "Minimum of 3 or maximum of 4 areas of different colour.
      // There should always be a large presence of Alphabyte Blue."
      backgroundImage: {
        "alphabyte-gradient":
          "conic-gradient(from 210deg at 30% 40%, #00abf0 0deg, #00abf0 140deg, #ebebeb 220deg, #00ffa6 320deg, #00abf0 360deg)",
        "alphabyte-gradient-linear":
          "linear-gradient(135deg, #00abf0 0%, #00abf0 45%, #ebebeb 70%, #00ffa6 100%)",
      },

      // Radius — unopinionated default, Radix components expect this
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },

      // Motion — tone & manner is "calm, composed" (§1.0) so keep subtle
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
        "fade-in": "fade-in 400ms ease-out",
      },
    },
  },
  plugins: [animate],
};

export default config;
