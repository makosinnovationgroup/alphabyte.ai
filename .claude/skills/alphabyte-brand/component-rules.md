# Component & Visual Rules

How to execute Alphabyte visuals correctly. Sourced from Brand Guide §2.0–§6.0.

## Logo

### Which version to use

| Situation | Use |
| --- | --- |
| Default / most cases | **Primary logo** (icon + wordmark) in Alphabyte Blue on white |
| On Alphabyte Blue background | Primary logo, **white** |
| On black background | Primary logo, **white** or gradient variant (gradient only on black) |
| On grey background | Primary logo, **Alphabyte Blue** or **black** |
| Print where color isn't available | Black & white primary logo |
| After Alphabyte is already established in context | Primary icon alone |
| Apparel / merchandise (special cases) | Gradient lockup on black, approval required |

**Per §2.0:** the wordmark alone (no icon) is a violation. The lockup is a unit.

### Clearspace (§2.0)

The logo needs breathing room equal to **one interior square of the icon** on all sides. Practically: if you're not sure whether something is too close to the logo, it is.

### Minimum sizes (§2.0)

| Format | Logo | Icon alone |
| --- | --- | --- |
| Print | 1.25" | 0.20" |
| Digital | 120px | 20px |

Don't go below these. If a context demands a smaller mark (e.g. favicon), use the icon, not the full logo.

### The 12 incorrect usages (§2.0)

Do not, under any circumstances:

1. Stretch or squish the logo
2. Rotate or tilt the logo
3. Use the wordmark without the icon
4. Outline the logo
5. Alter the weight of the logo
6. Change the color of the logo (outside approved variants)
7. Flip the icon
8. Rearrange the logo (icon must stay left of wordmark)
9. Change the logo proportions
10. Add a drop shadow
11. Use a non-brand gradient within the logo
12. Add extra elements to the logo

### Logo on colored backgrounds (§3.0)

**Option C context:** pages use off-white (`bg-canvas`) and white (`bg-white`) surfaces. Blue and black are not used as section backgrounds.

**Acceptable pairings:**

| Background | Logo color | Notes |
| --- | --- | --- |
| Off-white canvas (`#fafafa`) | Alphabyte Blue *(preferred)* or Black | Blue preferred for brand presence |
| White card / panel | Alphabyte Blue *(preferred)* or Black | Same as canvas |
| Analytical Grey | Alphabyte Blue or Black | |
| Black (CTA buttons only in Option C) | N/A — logo does not appear on buttons | |
| Alphabyte Blue (accent only in Option C) | N/A — blue is not used as a background surface | |
| Brand gradient (if used) | White | |

**Never pair:**

- Logo on **Code Green** — low contrast, illegible. No variant of the logo works on green.
- Any brand gradient with the logo *not* on black (gradient logo on white, blue, or green is forbidden).
- Faded / low-opacity logo on any background.
- Black logo on blue or black background (contrast failure).
- White logo on grey or white background (contrast failure).

## Color usage hierarchy (Option C)

Option C shifts the proportion from the original guide. The dominant surface is off-white (`bg-canvas`), not Alphabyte Blue:

- **Off-white canvas** (`bg-canvas`) is the page background — the default surface.
- **White** (`bg-white`) is for elevated surfaces — cards, panels, content sections that need visual lift.
- **Alphabyte Blue** is an accent color — inline highlighted words, the "AI" tag, the Claude Partner badge, active tab indicators, links. Not a hero background.
- **Black** is for CTA buttons (filled black, white text). Not used as a section background in Option C.
- **Grey** (`border-default`) is for dividers, card borders, tab separators.
- **Green** is for punctuation — a highlighted word, a small UI element. If your design has lots of green, rework it.

Bad: a hero section with Alphabyte Blue background. Good: an off-white page with white cards and blue-accented text.

## Gradient construction (§3.0)

The gradient is *free-form* — the guide explicitly says every gradient can be different. But there are rules:

### Required

1. Only the three brand colors.
2. Three or four distinct color areas (no more, no less).
3. Alphabyte Blue must dominate visually.
4. Natural color bleed where colors meet (cyan near blue/green, soft pastels near grey) is expected — don't try to fight it.

### Forbidden

- Gradients with two colors only (too flat).
- Gradients with five or more color areas (too busy).
- Gradients with any non-brand color.
- Green-dominated gradients.
- Gradients with harsh stops or banding — aim for soft free-form blending.

### In code

Use existing Tailwind utilities first:

- `bg-alphabyte-gradient-linear` — 135° linear, good for card/hero backgrounds.
- `bg-alphabyte-gradient` — conic, more visually interesting.

For new gradient variations, add a new entry to `backgroundImage` in `tailwind.config.ts` rather than inlining `bg-[linear-gradient(...)]`. Name it semantically (`alphabyte-gradient-hero`, `alphabyte-gradient-feature`).

## Gradient applications (§3.0 — updated for Option C)

Option C does not use the brand gradient as a default hero or section background on any designed page. The gradient remains part of the brand system but is reserved for specific feature uses.

### Where gradients are appropriate

- **OG images / social cards** — the gradient is still the primary visual for meta images.
- **Distinctive section breaks** — a thin gradient strip or divider between major content sections, if used sparingly (once per page maximum).
- **Marketing collateral** — print materials, slide decks, event assets.

### Where gradients are NOT used in Option C

- Hero backgrounds (heroes use the off-white canvas with editorial typography)
- Section backgrounds on the homepage, services, or tools pages
- Card backgrounds

### As an image overlay (still valid if photography is used)

- Source image must be **black & white** with good contrast.
- Gradient sits as a layer on top with `mix-blend-mode: screen`.
- In CSS/Tailwind: layer a div with the gradient over a greyscale image using `mix-blend-screen`.

### Inside the logo

- Special-case only (apparel, merch). Requires approval.
- Only on a **black** background. Never on white, blue, green, or anything else.
- If building this into the site, don't — it's out of scope for web.

## Photography (§6.0)

### Style attributes

Photography should feel:

- **Candid** — not posed, not stock-looking
- **Dynamic** — movement, energy
- **Simple** — clean compositions, not busy
- **Interactive** — people engaged with each other or with work
- **Forward-thinking** — suggests motion, progress

### Subject matter

Two categories, used together:

1. **Human-first:** people working, collaborating, thinking. Present an element of human-ness — the guide is explicit that this keeps the brand rooted in trust. Show hands, faces, interactions.
2. **Abstract / textural:** linear elements, light trails, architectural geometry, data viz textures. Suggests "the data-driven world" — use for thematic content, product sections.

### What to avoid

- Overly staged or stock-looking imagery (fake high-fives, pointing at laptops together)
- Imagery dominated by buzzword visuals (brain illustrations, glowing blue neural nets, robot hands)
- Dark / moody imagery without purpose — brand is optimistic
- Images of competitor products or recognizable branded UI

### Photography in Option C

Option C does not feature photography prominently on the homepage, services, or tools pages. The designed pages use editorial typography and structured layouts rather than photographic heroes. Photography is not the default visual element on any standard page.

**If photography is used** (e.g., about page, case study detail, blog), the Alphabyte-Blue-multiply-on-greyscale rule still applies:

1. Start with a color image.
2. Convert to **greyscale** (ensure decent contrast — not too dark, not too flat).
3. Add a layer of Alphabyte Blue with `mix-blend-mode: multiply`.

```tsx
<div className="relative">
  <img src="..." className="w-full grayscale" />
  <div className="absolute inset-0 bg-alphabyte-blue mix-blend-multiply" />
</div>
```

### What not to do with overlays

- No green overlays, no grey overlays, no gradient overlays on photos.
- No colored overlays on color photos — source must be greyscale first.
- No partial overlays or gradient-to-transparent effects on photography.

## Pattern (§5.0)

The Alphabyte icon, tiled, forms a brand pattern.

### Rules

- Pattern fills container height equally.
- Pattern may bleed off the sides.
- Use cases: (1) solid-color pattern on a surface, (2) pattern masking an image (negative space reveals the image through the tiles), (3) pattern as a surface treatment on physical goods (emboss, spot gloss).

### In web contexts

Pattern is primarily a print/physical-goods device per the guide. On the web, use sparingly — consider an SVG pattern for a section background or a decorative footer. Don't default to tiling the icon across large web surfaces; it's better suited to apparel, notebooks, business cards.

If building a pattern in code: build it as an SVG pattern with `<pattern>` in a defs block, reference it as a `fill`. Don't use CSS `background-repeat` with a raster image — you'll lose crispness.

## Backgrounds and surfaces (Option C)

The Option C surface system is layered and light:

- **Page background:** `bg-canvas` (`#fafafa`) — the ambient off-white behind everything. This is the default, not pure white.
- **Elevated surfaces:** `bg-white` for cards, panels, content blocks that need to visually "float" above the canvas.
- **Borders:** `border-border-default` (`#e5e5e5`) — thin borders on cards and between tab items. Subtle, not heavy.
- **CTA buttons:** black fill, white text. This is the only prominent use of black in Option C.
- **Alphabyte Blue:** accent only — inline word highlights, active tab indicators, badge backgrounds, links. Not a hero background, not a section fill.
- **Brand gradient:** available for specific feature uses (e.g., a distinctive section break, OG images, marketing collateral) but not used as the default hero or section background in Option C.

Avoid reverting to the 2021 guide's blue-dominant aesthetic. The brand on the web is **off-white + white + blue accents + restraint**.

## Buttons and interactive elements (Option C)

Option C uses a different button hierarchy than the original brand guide:

- **Primary CTA** — black background, white text. Uses `tracking-brand-snug`. The main action on any page or section. (Note: `button.tsx` currently uses Alphabyte Blue for primary — this needs updating to match Option C.)
- **Secondary CTA (text + arrow)** — no background, no border, `text-foreground` with a trailing arrow (→). Used beside or below a primary CTA for softer secondary actions.
- **Accent link** — Alphabyte Blue text, underline on hover. For inline links within body copy.
- **Ghost** — no border, no fill. Use for tertiary actions in dense UI.

Hover states: darken by 10–20%, never change hue. Focus rings use Alphabyte Blue with offset.

## Tab navigation pattern (Option C)

The horizontal tab bar is the distinctive structural element of Option C, used on the homepage (for service tracks) and the services page (for track detail).

### Structure

- Tabs are horizontal, spanning the full content width.
- Individual tabs are separated by thin vertical lines (`border-border-default`).
- Each tab displays a number prefix in muted grey (01, 02, 03, 04) and a label.

### States

| State | Text color | Indicator |
| --- | --- | --- |
| Active | `text-alphabyte-blue` | Top-edge blue accent line (2–3px solid `bg-alphabyte-blue`) |
| Inactive | `text-muted-foreground` | No accent line; number prefix in muted grey |
| Hover | Transition toward active color | Subtle, no jarring change |

### Below the tabs

The active tab's content fills the same column width as the tab bar. Content switches should be instant or use a very short crossfade (100–150ms, ease-out). No slide animations — the structured layout calls for crisp transitions.

## Card with pills pattern (Option C)

A recurring component used for tools, entry bundles, and case studies.

### Structure

- **Surface:** white (`bg-white`) with thin border (`border-border-default`), comfortable internal padding (`p-6` to `p-8`).
- **Eyebrow tag** (optional): small label above the title (e.g., "Claude Partner", "DISCOVERY"). Uppercase, `text-body-sm`, `tracking-brand-wide`. May use Alphabyte Blue background with white text for badges.
- **Title:** `text-headline` weight, sentence case.
- **Description:** `text-body` in `text-foreground` or `text-muted-foreground`.
- **Pill list:** "What's included" or similar items rendered as small rounded outlined chips — thin border (`border-border-default`), `text-body-sm`, `text-muted-foreground`, `rounded-full`, horizontal padding.
- **CTA:** optional, pinned at top-right or bottom-right depending on layout context. Typically a secondary text + arrow CTA.

### Do not

- Use filled/colored pills — they should be outlined and muted.
- Omit the border on the card — the thin border is what differentiates the white card from the off-white canvas.
- Stack pills vertically — they wrap horizontally.

## Headlines and text placement

From §4.0 and the sample applications:

- Headers are **Title Case**, short, and tight-tracked (`tracking-brand-tight`).
- Sub-headers are Sentence case, slightly tighter than body (`tracking-brand-snug`).
- Never lay more than headline + short sub-head on top of a gradient or color-overlaid image.
- Body paragraphs go on white or grey surfaces — not on gradients, not on photography.

## Reviewing existing work

When auditing an existing page or component against these rules, walk the checklist:

1. Are all colors from the brand palette? (No stray blues, greys, or greens.)
2. Is the font Geist (via `font-sans`)? (No Inter, no system default sneaking in.)
3. Is the logo used correctly, at correct size, with correct clearspace, on an approved background?
4. Are any gradients compliant (three colors, blue-dominant, brand-only)?
5. Is photography either human-element or abstract-data, and any overlay is Alphabyte Blue only?
6. Are buttons and links using the defined variants?
7. Does the type hierarchy use the brand-specific tracking values?
8. Is the copy in the Alphabyte voice (see `voice-and-tone.md`)?

Flag violations with their brand-guide section number when possible, so Mitchell can trace decisions back to the source.

## Motion & Animation

Motion should match the brand's "calm, composed, intentional" tone (§1.0). Motion serves content — decorative motion for its own sake violates the brand.

### Three tiers

#### On-brand (use freely)

- Scroll fade-in / slide-up (200–400ms, ease-out)
- Hover lift on cards
- Button color transitions (200ms)
- Focus-visible rings
- Page cross-fade transitions

**Option C note:** The structured, crisp layout calls for especially restrained motion. Animations should be 200–300ms ease-out, no bounce, no flashy reveals. Tab switching is instant or a very short crossfade (100–150ms). Cards appear without fanfare.

#### Selective (use with intent)

- Subtle parallax on decorative backgrounds
- Number counters on stats

#### Off-brand (avoid)

- Jittery or bouncy animations
- Scroll-linked motion that jumps every pixel
- Decorative motion with no purpose
- Video backgrounds outside campaign pages
- Cursor-follow effects

### prefers-reduced-motion

All animations **must** respect `prefers-reduced-motion`. The `motion` library supports this natively via the `useReducedMotion` hook and `MotionConfig` component. This is a hard rule, not a nice-to-have.

### Implementation notes

- Use `motion` (the library) for React-driven scroll/hover/layout animations.
- Use Tailwind `transition-*` and `animate-*` utilities plus `tailwindcss-animate` for simple hover/focus states. Don't reach for `motion` when Tailwind will do.
- Specific animations for each feature are decided in the PRD (see `/plan`), not hardcoded in this skill.
