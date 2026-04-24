# Design Tokens

All values sourced from the Alphabyte Brand Standards Manual v1.0 (March 2021).
The project's `tailwind.config.ts` is the code-level source of truth — consume tokens via utilities.

## Quick reference

| Thing | Token / Utility | Value |
| --- | --- | --- |
| Primary color | `bg-alphabyte-blue` | `#00abf0` |
| Surface grey | `bg-alphabyte-grey` | `#ebebeb` |
| Accent green | `bg-alphabyte-green` | `#00ffa6` |
| Display type | `text-display` | clamp to ~5.5rem, -0.02em |
| Sub-headline | `text-headline` | clamp to ~2.5rem, -0.01em |
| Body | `text-body` | 1rem / 1.55 |
| Small body | `text-body-sm` | 0.875rem / 1.55 |
| Pull quote | `text-quote` | 1rem / +0.01em |
| Tight tracking | `tracking-brand-tight` | -0.02em (headers) |
| Snug tracking | `tracking-brand-snug` | -0.01em (sub-headers) |
| Wide tracking | `tracking-brand-wide` | +0.01em (pull quotes) |
| Brand gradient (linear) | `bg-alphabyte-gradient-linear` | blue → blue → grey → green |
| Brand gradient (conic) | `bg-alphabyte-gradient` | free-form, heavy blue |
| Primary font | `font-sans` | Geist → system-ui → sans-serif |

## Colors

### Alphabyte Blue — primary

| Format | Value |
| --- | --- |
| HEX | `#00abf0` |
| RGB | `0, 171, 240` |
| CMYK | `C69 M16 Y0 K0` |
| Pantone coated | `2995 CP` |
| Pantone uncoated | `2202 UP` |
| Tailwind | `alphabyte-blue` |
| Semantic alias | `brand` (= `brand.DEFAULT`) |

**Usage:** the dominant brand color. Use it confidently and frequently — buttons, links, headlines on white, backgrounds for hero sections, photo overlays. Per §3.0, Alphabyte Blue should be the visual anchor.

### Analytical Grey — secondary

| Format | Value |
| --- | --- |
| HEX | `#ebebeb` |
| RGB | `235, 235, 235` |
| CMYK | `C7 M5 Y5 K0` |
| Pantone | `Cool Grey 1 CP` / `Cool Grey 1 UP` |
| Tailwind | `alphabyte-grey` |
| Semantic alias | `brand-muted` |

**Usage:** subdued surfaces, dividers, muted backgrounds. Use for visual rest between blue-heavy sections. Not for body text (contrast too low on white).

### Code Green — secondary accent

| Format | Value |
| --- | --- |
| HEX | `#00ffa6` |
| RGB | `0, 255, 166` |
| CMYK | `C57 M0 Y58 K0` |
| Pantone | `2412 CP` / `2412 UP` |
| Tailwind | `alphabyte-green` |
| Semantic alias | `brand-accent` |

**Usage:** accents only — a highlighted word, a small UI element (notebook spine elastic, bookmark marker), a gradient endpoint. Per §3.0 color hierarchy, green gets the smallest share of visual real estate. Never a background for the logo. Never a primary background.

### Black & white

Black (`#000000`) and white (`#ffffff`) are used freely for text and surfaces. Black is the default body text color on white; white is the default text color on Alphabyte Blue.

## Typography

### Web typeface: Geist

- Origin: open-source from Vercel
- Weights in use: Regular (400), Regular Italic, Medium (500), Bold (700), Bold Italic
- Loaded via `next/font/local` in `src/app/layout.tsx`
- Accessed via the `font-sans` Tailwind utility or the `--font-geist` CSS variable

### Print typeface: Aeonik

- Foundry: Cotype Foundry (<https://cotypefoundry.com/our-fonts/aeonik/>)
- Retained per brand guide §4.0 for all print collateral (business cards, letterheads, brochures, etc.)
- Source files are `.otf` only (desktop format). If an Aeonik webfont license (`.woff2`) is obtained later, it's a drop-in swap — replace the Geist `localFont` block in `layout.tsx` and update the CSS variable from `--font-geist` to `--font-aeonik`

### Fallback

`system-ui` if Geist fails to load. This is rare since the fonts are self-hosted as `.woff2` files in `public/fonts/`.

### Type hierarchy

Exact specs from §4.0. Tailwind utilities already implement these.

| Level | Weight | Tracking | Case | Tailwind |
| --- | --- | --- | --- | --- |
| Header | Regular | -0.02em (-20) | Title Case | `text-display tracking-brand-tight` |
| Sub-header | Regular | -0.01em (-10) | Sentence case | `text-headline tracking-brand-snug` |
| Body | Regular | 0 | Sentence case | `text-body` |
| Pull Quote | **Bold** | +0.01em (+10) | Sentence case | `text-quote font-bold tracking-brand-wide` |
| Highlight | *Regular Italic* | 0 | Sentence case | `text-body italic` |
| Link | Regular | 0 | Sentence case | `text-body underline` (brand blue) |

**Note:** The type hierarchy tracking values (-0.02em for headers, etc.) were originally specced for Aeonik. They work well with Geist too since both are geometric sans-serifs, but visual review is wise if anything looks off.

**Leading rule:** Headers and sub-headers should use `line-height: 1` (leading matches font size). Body text uses `1.55`. Both are built into the `text-*` tokens.

**Word count guidance from the guide:**

- Headers: short word count (keep ≤ 8 words where possible)
- Sub-headers: short/medium
- Body: medium/large
- Pull quotes: medium

### When to use each weight

- **Regular (400)** is the workhorse for everything — headers, sub-headers, body, links.
- **Medium (500)** is available for UI elements where you need a step between regular and bold (nav items, labels).
- **Bold (700)** is reserved for pull quotes / highlights. Don't use Bold for regular body emphasis; use Italic instead.
- **Italic** is for inline emphasis within body copy.

## Minimum sizes (§2.0)

| Element | Print | Digital | Tailwind |
| --- | --- | --- | --- |
| Primary logo | 1.25" | 120px | `min-w-logo-min` |
| Primary icon (alone) | 0.20" | 20px | `min-w-icon-min` |

**Clearspace rule:** one square unit of the Alphabyte icon's interior square on all sides. In practice, this is roughly ~0.25× the logo's height — when in doubt, leave more breathing room, not less.

## Gradient specification (§3.0)

The brand gradient is a *free-form* blend of the three brand colors, not a fixed direction or stop pattern. Rules:

1. **Only the three brand colors.** No purple, no teal bleed, no additional hues added.
2. **Three or four distinct areas of color.** Not two (too flat), not five+ (too busy).
3. **Large presence of Alphabyte Blue.** Blue must dominate; green is an accent; grey is a rest area.
4. Natural blending between colors is fine — when blue meets green, it'll pass through a cyan region; when blue meets grey, it'll soften. That's the intended effect.

**In Tailwind:**

- `bg-alphabyte-gradient-linear` — a simple 135° gradient for predictable backgrounds (hero sections, cards).
- `bg-alphabyte-gradient` — a conic gradient approximating the "free-form" guide samples. More visually interesting; use for feature backgrounds.
- For bespoke gradients, add new utilities to `tailwind.config.ts` under `backgroundImage` rather than inlining.

**Hard limits on gradient usage** (enforced in `component-rules.md`):

- Overlays: only on B&W images with contrast, `mix-blend-mode: screen`.
- Backgrounds: only hero / landing / break sections, never body content areas.
- Inside the logo: only on black background, by special approval.

## Spacing & rhythm

The brand guide doesn't prescribe a spacing scale, so use Tailwind's default scale. Prefer generous whitespace — the brand tone is "calm" and "composed," which translates visually to breathing room.

General guidance:

- Section vertical padding: `py-16 md:py-24` minimum
- Headline → body gap: `mb-6` to `mb-8`
- Between sections: visual rest, not decorative dividers

## Radius & shadows

The brand guide doesn't prescribe these either, so the Tailwind config defaults apply (`rounded-md` = 0.375rem, etc.). Use shadows sparingly — the brand aesthetic is flat and confident, not soft/shadowed.

## Do not

- Hardcode hex values (`bg-[#00abf0]`) — use `bg-alphabyte-blue`.
- Introduce tokens that aren't in the brand guide (new colors, new font sizes for no reason).
- Use Tailwind's default `blue-500`, `gray-200`, etc. — they're not our blue or our grey.
- Mix tracking systems — always use `tracking-brand-*` from the config, not Tailwind's defaults.
