---
name: alphabyte-brand
description: Alphabyte brand standards — the authoritative guide to how Alphabyte looks, sounds, and shows up. Use whenever (1) building UI or components for the alphabyte.ai marketing site or any Alphabyte product, (2) writing marketing copy, headlines, page content, or any Alphabyte-authored text, (3) choosing colors, fonts, typography, spacing, or tracking, (4) using or placing the Alphabyte logo, (5) designing visuals, gradients, patterns, or photography treatments, (6) reviewing existing work for brand compliance. The source of truth is `brand-guide.pdf` in this skill folder; the markdown files are derived extracts for faster reference.
---

# Alphabyte Brand

Alphabyte is an AI and data consultancy. The brand voice is **calm, composed, and direct** — the "steady hand in the chaos." The visual system is anchored by a single blue, used with conviction.

## How this skill is organized

- **`tokens.md`** — color, type, spacing, gradient specs. Read when you need exact values.
- **`voice-and-tone.md`** — how to write for Alphabyte. Read when producing any copy.
- **`component-rules.md`** — logo rules, gradient construction, photography treatment, pattern usage. Read when making visual decisions.
- **`brand-guide.pdf`** — the original brand standards manual. Authoritative when the markdown extracts are ambiguous or silent.

Load the file that matches what you're doing. Don't load everything upfront.

## Hard rules (never violate)

These are non-negotiable. If a request would require breaking one of these, stop and flag it.

1. **Colors are fixed.** Only Alphabyte Blue `#00abf0`, Analytical Grey `#ebebeb`, and Code Green `#00ffa6`. No other brand colors exist. No substitutes, no "close enough" shades, no introducing purple/teal/orange.
2. **Type is Aeonik, fallback Arial.** Don't introduce Inter, Roboto, Space Grotesk, DM Sans, or any other typeface. If Aeonik isn't loaded yet, Arial is the correct fallback per the brand guide §4.0.
3. **The logo never goes on Code Green.** Illegible contrast. See `component-rules.md` for the full pairing matrix.
4. **The logo is never modified.** No stretching, rotating, recoloring, outlining, flipping, rearranging, adding shadows, or inserting extra elements. 12 specific violations are enumerated in `component-rules.md`.
5. **Gradients always contain a large presence of Alphabyte Blue.** No all-green gradients, no grey-dominant gradients. Per §3.0.
6. **The wordmark never appears without the icon.** The lockup is a unit.
7. **Minimum logo size: 120px digital. Minimum icon size: 20px digital.** Below these, it stops being legible.

## Use Tailwind tokens, not raw values

The project's `tailwind.config.ts` is the code-level source of truth, derived from the brand guide. Brand decisions flow from PDF → Tailwind config → components. Always consume tokens via utilities:

```tsx
// Correct
<div className="bg-alphabyte-blue text-white tracking-brand-tight">
<h1 className="text-display">
<section className="bg-alphabyte-gradient-linear">

// Wrong — bypasses the token system
<div className="bg-[#00abf0] text-white tracking-[-0.02em]">
<h1 className="text-6xl font-bold">
<section style={{ background: 'linear-gradient(...)' }}>
```

If a needed token doesn't exist in `tailwind.config.ts`, add it there rather than hardcoding in a component.

## Workflow cues

| When the task is… | Load first |
| --- | --- |
| Building a new component or section | `tokens.md`, then `component-rules.md` if visuals are non-trivial |
| Writing a headline, body copy, or page content | `voice-and-tone.md` |
| Placing, sizing, or coloring the logo | `component-rules.md` |
| Constructing a gradient or overlay | `component-rules.md` |
| Choosing or treating photography | `component-rules.md` |
| Reviewing existing work | all three, in order |
| Anything unclear or the extracts seem to conflict | `brand-guide.pdf` is authoritative |

## Red flags — stop if you catch yourself

Visual:
- Reaching for a color that isn't one of the three brand colors
- About to use a purple or purple-blue gradient (generic AI aesthetic)
- About to use Inter, Space Grotesk, or a system font other than Arial fallback
- Using `bg-[#...]` or `text-[#...]` arbitrary Tailwind values for colors
- Adding shadows or effects to the logo
- Putting the logo on a green background

Verbal:
- About to write "unlock," "leverage," "transform," "revolutionize," "harness the power of"
- Writing a headline longer than ~8 words
- Using "cutting-edge," "state-of-the-art," "next-generation," "AI-powered"
- Hyping outcomes ("10x your productivity," "unprecedented ROI")
- Writing in the passive voice when active works
- Hedging instead of stating ("we aim to help you" → "we help you")

## Authority

When the markdown extracts and the PDF disagree, the PDF wins. When the PDF is silent on something, use judgment aligned with the values in `voice-and-tone.md` — calm, composed, direct, human. When you're not sure, say so and ask Mitchell rather than guessing.
