---
name: alphabyte-services
description: Authoritative reference for Alphabyte's AI consulting offerings — the four-track model, signature offerings, entry bundles, case studies, pricing structure, and engagement methodology. Use whenever (1) writing copy for Services pages, Tools pages, Case Studies, or About pages, (2) describing what Alphabyte does, costs, or delivers, (3) drafting pricing or packaging copy, (4) referencing client work or proof points, (5) writing CTAs, headlines, or value propositions tied to specific offerings. Source of truth is reference-doc.docx (v3.0, April 2026); the markdown files are derived public-facing extracts. CRITICAL: this skill contains confidential internal data alongside public-shareable content. Read the public/private rules in this file before writing any copy that touches pricing, rates, effort estimates, or competitive positioning.
---

# Alphabyte AI Services Reference

Authoritative source for what Alphabyte offers, how it's priced, who it's for, and how it's positioned. The full document at `reference-doc.docx` is internal sales/delivery reference (v3.0, April 2026, marked Confidential). Markdown files in this skill are derived extracts organized by what's safe for public-facing marketing copy vs. what stays internal.

## How this skill is organized

- **`service-tracks.md`** — the four-track model (Discovery, Data Readiness, Enablement, Infrastructure), client scenarios, signature productized offerings, entry bundles. Read when writing Services or Tools page copy.
- **`pricing.md`** — what can and cannot be published about pricing. Public-facing investment ranges, internal rate card, packaging guidance. Read when writing any copy that touches cost.
- **`proof-points.md`** — case studies (Sprinklermatic, RecirQ, Housing Services Corp.), what's live, what's claimable. Read when writing case study or About content.
- **`reference-doc.docx`** — the original v3.0 document. Authoritative when the markdown extracts are ambiguous or silent. **This file contains confidential content — do not surface it verbatim in user-facing output.**

## Critical: public vs. private content

This skill mixes content that can go on the public marketing site with content that absolutely cannot. Failing to honor that distinction would publish internal pricing, competitive positioning, and effort estimates that Alphabyte has not chosen to make public.

### Safe for public copy

- The four-track model and the "question" framing for each track ("What should our AI strategy be?", etc.)
- Track names, signature offering names, entry bundle names (Strategy Sprint, Executive Quick Win, Sprawl Fix, Intelligent Enterprise)
- High-level descriptions of what each track or offering does
- Investment **ranges** ($14K–$22.5K) or "starting at" framing ("starting at $7K")
- Timeline ranges (3–5 weeks, 8–16 weeks)
- Case study client names (Sprinklermatic, RecirQ, Housing Services Corp.) and high-level outcomes
- The five-phase engagement lifecycle (Setup → Discovery & Design → Build & Iterate → Deployment & Validation → Enablement & Handoff)
- Mid-market positioning — Canadian mid-market focus, target revenue range as a high-level statement (e.g., "we work with mid-market companies"), industries served at a category level
- Anthropic Claude Partner status (a marketable credential)
- The fact that engagements use senior teams (no junior bench)

### NEVER publish — internal only

- **The rate card by role.** No hourly rates ($350 AI Developer, $225 Senior Consultant, etc.) on any public surface. Ever.
- **After-hours / emergency rate multipliers** (1.5×, 2×).
- **Specific effort estimates in hours** (64–90 hrs, 200–400 hrs). These are internal scoping numbers — reference timelines in weeks instead.
- **The qualifying indicators framework** ("strong candidate if 3+ apply"). This is internal sales qualification.
- **The competitive positioning table.** Never name competitors on the public site or compare Alphabyte's offering to theirs. Brand voice principle: state what we do, don't put down others.
- **Specific government incentive references** (IRAP, CDAP, NSERC). These are sales conversation points, not website content.
- **Internal client scenario language** ("AI-curious, no prior investment") — the framework is useful for organizing public copy, but the specific qualifier phrases stay internal.
- **Specific deliverable counts** ("up to 10 stakeholder workshops, use case dev ×3") — these are scoping commitments for SOW negotiation, not marketing detail.

### Transform-and-use (acceptable with rephrasing)

- Client scenario framings can be **rephrased** for public copy: "AI-curious, no prior investment" becomes "Leadership exploring AI for the first time."
- Case study deliverables can be **described at a level the client has approved** — surface as an Open Question in any PRD that wants to publish specific engagement details, since client permission may be needed.
- Entry bundle pricing can show as a **range or starting point**, not the precise band.

## Hard rules (never violate)

1. **Never publish hourly rates from the rate card.** This is non-negotiable. If a feature wants to show "what does this cost?", use ranges or "starting at" framing pulled from the public-safe pricing tier (see `pricing.md`).
2. **Never name competitors** in copy. Don't write "unlike Deloitte" or "better than [firm]". State Alphabyte's positioning directly without comparison.
3. **Never publish effort hours.** "200–400 hrs" is internal; "20–36 weeks" is the public translation.
4. **Always use the four-track names exactly:** Discovery, Data Readiness, Enablement, Infrastructure. Don't paraphrase to "Discover" or "Data Prep" or "Enable" — these are productized track names.
5. **Always use signature offering names exactly:** Executive Productivity Suite (not "Exec Suite" in public copy, though that's fine internally), Team Citizen Dev Enablement, Strategy Sprint, Executive Quick Win, Sprawl Fix, Intelligent Enterprise. These are branded.
6. **Case study client names are publishable** — Sprinklermatic, RecirQ, Housing Services Corp. — but specific engagement details may not be. When in doubt, surface as an Open Question.

## Voice integration

All copy drawn from this skill must still pass `alphabyte-brand/voice-and-tone.md` checks. The reference doc uses some sales language that wouldn't pass voice review verbatim ("highest-converting entry point", "compounds"). When pulling content from this skill into public copy:

- Strip sales-internal qualifiers ("hero offer", "highest-converting") — these are for sales orientation, not customer reading
- Keep specific, concrete language ("custom MCP servers", "human-in-the-loop approval gates")
- Don't introduce hype vocabulary even when paraphrasing — no "transform," "unlock," "leverage"

## Workflow cues

| When the task is… | Load first |
| --- | --- |
| Writing the Services page or any track page | `service-tracks.md` |
| Writing the Tools page | `service-tracks.md` (Track 4 detail) plus the brand skill for visual direction |
| Writing copy about pricing or packages | `pricing.md` first, always — confidentiality rules live there |
| Writing a case study page | `proof-points.md` |
| Writing the About page or company narrative | All three, plus brand skill `voice-and-tone.md` |
| Writing CTAs ("Book a Strategy Sprint", "Start with Discovery") | `service-tracks.md` for offering names, brand skill for CTA voice |
| Anything where pricing might be tempting to mention | Stop, load `pricing.md`, follow it strictly |

## Document versioning

The reference document carries a version stamp (currently `v3.0 · April 2026`). When Alphabyte's offerings evolve — new tracks, new pricing, new case studies, new packages — the source-of-truth version updates and the markdown extracts should be regenerated.

**Update protocol:**

1. New version of the reference document is delivered (typically as a new `.docx` file).
2. The `reference-doc.docx` in this skill is replaced with the new version.
3. The current skill files (`service-tracks.md`, `pricing.md`, `proof-points.md`) are regenerated against the new content via a focused prompt to Claude Code.
4. The version line below is updated to match the new document.
5. Any PRDs in flight that reference services pricing or content are flagged for review.

**Current source-of-truth version: v3.0 · April 2026**

When in doubt about whether the markdown extracts are current, consult `reference-doc.docx` — it is authoritative within its version. If the doc itself feels outdated, ask Mitchell before publishing copy that depends on it.

## Red flags — stop if you catch yourself

- About to write a specific dollar amount that looks like an hourly rate
- About to name a competitor
- About to copy a specific number of hours from the reference doc into public copy
- About to use sales-internal qualifier language ("hero offer", "highest-converting", "fastest ROI") verbatim in public copy
- About to publish a specific deliverable count ("up to 10 workshops") without confirming client commitment context
- About to credit a specific client outcome that hasn't been confirmed for public sharing
- About to use one of the four track names paraphrased ("Discover" instead of "Discovery") — they're productized

## When unsure

Pricing, competitive positioning, and specific engagement details are the high-risk surfaces. When you're not sure whether a piece of content is publishable:

1. Default to *not* publishing the specific detail
2. Ask Mitchell to confirm before shipping
3. Surface the question as an Open Question in the PRD if it's a feature being planned

The cost of holding back a detail until confirmation is small (one extra question). The cost of publishing internal pricing or competitive language is large (sales process disruption, awkward client conversations, hard to walk back). Default to the cheap mistake.
