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
      // ----- Colour (Brand Guide §3.0 + Corporate Terminal extensions) -----
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
          ink: "#000000",      // body text on light bg (legacy — pre-corporate-terminal)
          // Corporate Terminal additions:
          live: "#33BCF7",     // secondary live accent — caret arrows, blink dots, list bullets, status pips, active-row marker
          green: "#00FFA6",    // CURSORS ONLY — typing cursor, post-type pulse, footer prompt cursor
        },

        // Surface system (Option C — light theme)
        canvas: "#fafafa",           // page-level background
        foreground: "#171717",       // primary text on light surfaces
        "muted-foreground": "#737373", // secondary / muted text
        "border-default": "#e5e5e5", // dividers and card borders

        // Corporate Terminal: ink (distinct from legacy brand.ink black)
        ink: "#171717",              // primary text, dark sections, hard rule, primary CTA bg
      },

      // ----- Typography (Brand Guide §4.0 + Corporate Terminal) -----
      // Display + UI face: Aeonik (self-hosted via next/font/local, weights 400/500/700/900).
      // Mono companion: Geist Mono (Google Fonts via next/font/google, weights 400/500/600).
      fontFamily: {
        sans: [
          "var(--font-aeonik)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },

      // Type scale: brand guide §4.0 + Corporate Terminal additions for labels/stats.
      fontSize: {
        // Display — H1 hero, spec: clamp(2.75rem, 5.5vw, 5.25rem), 0.95 lh, -0.04em
        display: ["clamp(2.75rem, 5.5vw, 5.25rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        // Sub-header — large H2s
        headline: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        // Body sizes
        body: ["1rem", { lineHeight: "1.55", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55", letterSpacing: "0" }],
        // Pull quote per §4.0 — +10 tracking
        quote: ["1rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],

        // Corporate Terminal additions:
        "section-label": ["11px", { lineHeight: "1", letterSpacing: "0.04em" }],
        eyebrow: ["12px", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        "stat-num": ["38px", { lineHeight: "1", letterSpacing: "-0.03em" }],
        pill: ["12px", { lineHeight: "1.4", letterSpacing: "0" }],
        "micro-label": ["11px", { lineHeight: "1.4", letterSpacing: "0.04em" }],
        "status-pip": ["11px", { lineHeight: "1", letterSpacing: "0.04em" }],
      },

      // Brand-guide tracking values (units of 1/1000 em per Illustrator convention).
      letterSpacing: {
        "brand-tight": "-0.02em",     // -20
        "brand-snug": "-0.01em",      // -10
        "brand-normal": "0",
        "brand-wide": "0.01em",       // +10 (pull quote)
        "brand-tracked": "0.04em",    // +40 (uppercase mono labels)
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
        // Corporate Terminal hexgrid — 3 layered linear-gradients at 28×48px
        hexgrid:
          "linear-gradient(60deg, transparent 49.5%, rgba(23,23,23,0.04) 49.5%, rgba(23,23,23,0.04) 50.5%, transparent 50.5%), linear-gradient(-60deg, transparent 49.5%, rgba(23,23,23,0.04) 49.5%, rgba(23,23,23,0.04) 50.5%, transparent 50.5%), linear-gradient(0deg, transparent 49.5%, rgba(23,23,23,0.03) 49.5%, rgba(23,23,23,0.03) 50.5%, transparent 50.5%)",
      },
      backgroundSize: {
        hexgrid: "28px 48px",
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
        // Corporate Terminal — single keyframe drives all blink animations
        // (cursors, post-type pulse, section-label dot). Differ via duration.
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0.2" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
        "fade-in": "fade-in 400ms ease-out",
        // Cursors blink fast (0.7s typing tip, 0.9s post-type pulse, 0.9s footer prompt).
        // Section-label dot pulses slower (1.2s).
        "blink-cursor-tip": "blink 0.7s steps(2, start) infinite",
        "blink-pulse": "blink 0.9s steps(2, start) infinite",
        "blink-dot": "blink 1.2s steps(2, start) infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
