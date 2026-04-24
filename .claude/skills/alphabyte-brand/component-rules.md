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

**Acceptable pairings:**

| Background | Logo color |
| --- | --- |
| Alphabyte Blue | White |
| White | Alphabyte Blue *or* Black |
| Analytical Grey | Alphabyte Blue *or* Black |
| Black | White *or* Alphabyte Blue *or* gradient |
| Brand gradient | White |

**Never pair:**

- Logo on **Code Green** — low contrast, illegible. No variant of the logo works on green.
- Any brand gradient with the logo *not* on black (gradient logo on white, blue, or green is forbidden).
- Faded / low-opacity logo on any background.
- Black logo on blue or black background (contrast failure).
- White logo on grey or white background (contrast failure).

## Color usage hierarchy (§3.0)

The guide shows this as a proportion bar: Alphabyte Blue is the largest share, then white/grey, then Code Green is the smallest accent. Translate this into any design:

- **Blue** should be the anchor color of any brand surface.
- **Grey** is for rest — surfaces, dividers, muted states.
- **Green** is for punctuation — a highlighted word, a small UI element, one icon. If your design has lots of green, rework it.

Bad: a whole page in green with blue accents. Good: a predominantly blue/white page with a green underline on one keyword.

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

## Gradient applications (§3.0)

### 1. As an image overlay

- Source image must be **black & white** with good contrast.
- Gradient sits as a layer on top with `mix-blend-mode: screen`.
- If the source image is too dark or too light, pick a different image — don't adjust the gradient.
- In CSS/Tailwind: layer a div with the gradient over a greyscale image using `mix-blend-screen`.

### 2. As a background

- Only for hero sections, landing pages, section break slides.
- When the logo appears on the gradient, use **white** logo, and ensure the gradient section has black or dark enough areas for contrast.
- Text on gradient should be **black**, limited to headlines and short sub-heads. **Never** lay large paragraphs of body copy over the gradient.

### 3. Inside the logo

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

### Color overlays on photos (§6.0)

The **only** color overlay allowed on photography is Alphabyte Blue. Process:

1. Start with a color image.
2. Convert to **greyscale** (ensure decent contrast — not too dark, not too flat).
3. Add a layer of Alphabyte Blue with `mix-blend-mode: multiply`.

In Tailwind/CSS, this is typically done with a pseudo-element or layered div:

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

## Backgrounds and surfaces — practical guidance

For the web, most surfaces should be:

- **White** (default)
- **Alphabyte Blue** (hero sections, feature highlights — used with conviction)
- **Black** (moody sections, footer, testimonial sections)
- **Analytical Grey** (muted rest surfaces, borders, dividers)
- **Brand gradient** (hero sections or major section breaks — not more than once or twice per page)

Avoid a "color of the week" approach where every section has a different tinted background. The brand is **blue + white + restraint**.

## Buttons and interactive elements

Brand tokens from `button.tsx` variants:

- **Primary CTA** — Alphabyte Blue background, white text. Uses `tracking-brand-snug`. Use for the primary action in any section.
- **Inverse** — white background, Alphabyte Blue text. Use when the surface is Alphabyte Blue.
- **Outline** — blue border, blue text, transparent background. Use beside a primary for secondary actions.
- **Ghost** — no border, no fill. Use for tertiary actions in dense UI.
- **Link** — underlined inline link per §4.0 link spec.

Hover states: darken by 10–20%, never change hue. Focus rings use Alphabyte Blue with offset.

## Headlines and text placement

From §4.0 and the sample applications:

- Headers are **Title Case**, short, and tight-tracked (`tracking-brand-tight`).
- Sub-headers are Sentence case, slightly tighter than body (`tracking-brand-snug`).
- Never lay more than headline + short sub-head on top of a gradient or color-overlaid image.
- Body paragraphs go on white or grey surfaces — not on gradients, not on photography.

## Reviewing existing work

When auditing an existing page or component against these rules, walk the checklist:

1. Are all colors from the brand palette? (No stray blues, greys, or greens.)
2. Is the font Aeonik (or Arial fallback)? (No Inter, no system default sneaking in.)
3. Is the logo used correctly, at correct size, with correct clearspace, on an approved background?
4. Are any gradients compliant (three colors, blue-dominant, brand-only)?
5. Is photography either human-element or abstract-data, and any overlay is Alphabyte Blue only?
6. Are buttons and links using the defined variants?
7. Does the type hierarchy use the brand-specific tracking values?
8. Is the copy in the Alphabyte voice (see `voice-and-tone.md`)?

Flag violations with their brand-guide section number when possible, so Mitchell can trace decisions back to the source.
