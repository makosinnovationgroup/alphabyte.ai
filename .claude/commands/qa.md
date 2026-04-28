---
description: Compare a built page against its PDF design source using Playwright. Composes a side-by-side image for visual diff, runs structural + SEO checks, produces a findings report classified by severity.
argument-hint: <logical-name>
---

# /qa

Renders a live page in a headless browser, captures a full-page screenshot at desktop viewport, extracts structural and SEO data, **composes a side-by-side comparison image** with the PDF reference, and compares the result against:

1. The rasterized PDF page from `design/Alphabyte_AI_Site_V7.pdf` (visual + copy + structure)
2. The `seo` skill's `page-checklist.md` rules (metadata, structured data, indexability)

Produces a findings report at `qa-reports/qa-<logical-name>-<timestamp>.md` with three severity levels: Blocker, Significant, Cosmetic.

Used standalone for ad-hoc design + SEO review, or invoked automatically by `/page` after implementation.

## Why side-by-side

The previous version of `/qa` opened the live screenshot and the PDF reference in turn and asked the model to spot differences from memory. That's vibes-based comparison and it misses obvious layout issues (column width, container alignment, spacing rhythm).

This version composes both images into a single combined image (PDF on left, live render on right, with a vertical separator) and asks the model to view that one image. Side-by-side comparison is dramatically more accurate than holding one image in memory while looking at the other.

## Usage

```
/qa <logical-name>
```

Example: `/qa homepage`

## Prerequisites

- `pnpm dev` running on `localhost:3000`. The command does not start the dev server. If `localhost:3000` is unreachable, abort and tell the user to start it.
- Playwright installed in the project (`pnpm add -D playwright` if not present).
- `sharp` installed (`pnpm add -D sharp`) — used for image composition.
- `design/INDEX.md`, `design/MIGRATION.md`, `design/Alphabyte_AI_Site_V7.pdf` present at project root.
- `pdftoppm` available (poppler-utils).
- `.claude/skills/seo/page-checklist.md` present (used as the SEO compliance source of truth).

If any prerequisite is missing, abort with a clear message naming what is missing and how to install it.

## Steps

### 1. Validate input

`$ARGUMENTS` must be a non-empty logical name matching a row in `design/INDEX.md`. If empty or unmatched, list available names from INDEX.md and exit.

### 2. Look up the page

Read `design/INDEX.md`. Capture for the matching row:
- pdf-page (integer)
- route
- action

If pdf-page is `(missing)`, abort. There is nothing to compare against.

### 3. Confirm reference rasterization exists

Look for `/tmp/page-<logical-name>-<n>.png` (the file produced by `/page`). If absent, regenerate it:

```
pdftoppm -r 200 -f <pdf-page> -l <pdf-page> -png design/Alphabyte_AI_Site_V7.pdf /tmp/page-<logical-name>
```

This is the **reference image** for comparison.

### 4. Load the SEO checklist

Read `.claude/skills/seo/page-checklist.md`. Capture every checklist item that can be verified from a live page (anything observable via DOM, head tags, response headers, or sitemap inspection). The checklist is the authoritative source — do not invent rules beyond what it specifies.

### 5. Confirm dev server is reachable

`curl -sI http://localhost:3000 -o /dev/null -w "%{http_code}"` must return `200` or `30x`. If not, abort and tell the user to run `pnpm dev`.

### 6. Capture the live page

Write a Playwright script to `qa-reports/.scripts/capture-<logical-name>.mjs` and run it. The script must:

- Launch chromium headless.
- Set viewport to 1440x900.
- Navigate to `http://localhost:3000<route>` (use the route from INDEX.md, append trailing slash if `next.config.mjs` has `trailingSlash: true`).
- Wait for `networkidle`.
- Run `await page.evaluate(() => document.fonts.ready)` to wait for web fonts.
- Scroll the full page to trigger any lazy-loaded content, then scroll back to top.
- Capture a full-page screenshot to `qa-reports/screenshots/live-<logical-name>-<timestamp>.png`.
- Extract structural and SEO data and write to `qa-reports/.structural/live-<logical-name>-<timestamp>.json`.

Boilerplate template for the script:

```javascript
import { chromium } from 'playwright';
import fs from 'fs';

const route = process.argv[2];
const slug = process.argv[3];
const ts = process.argv[4];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const response = await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
const status = response?.status() ?? 0;

await page.evaluate(() => document.fonts.ready);

await page.evaluate(async () => {
  await new Promise(resolve => {
    let total = 0;
    const distance = 200;
    const timer = setInterval(() => {
      window.scrollBy(0, distance);
      total += distance;
      if (total >= document.body.scrollHeight) {
        clearInterval(timer);
        window.scrollTo(0, 0);
        setTimeout(resolve, 300);
      }
    }, 50);
  });
});

await page.screenshot({
  path: `qa-reports/screenshots/live-${slug}-${ts}.png`,
  fullPage: true,
});

const structural = await page.evaluate(() => {
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => ({
    level: parseInt(h.tagName[1]),
    text: h.textContent.trim(),
  }));
  const nav = [...document.querySelectorAll('header nav a')].map(a => a.textContent.trim()).filter(Boolean);
  const ctas = [...document.querySelectorAll('button, a')]
    .filter(el => /book a discovery call|get started/i.test(el.textContent))
    .map(el => ({ text: el.textContent.trim(), tag: el.tagName.toLowerCase() }));
  const sections = [...document.querySelectorAll('main section, main [role="region"]')].map(s => {
    const firstHeading = s.querySelector('h1,h2,h3,h4');
    return { heading: firstHeading?.textContent.trim() ?? null };
  });
  const bodyText = document.querySelector('main')?.innerText.replace(/\s+/g, ' ').trim() ?? '';
  const images = [...document.querySelectorAll('main img')].map(img => ({ alt: img.alt, src: img.src }));

  // SEO extraction
  const head = document.head;
  const getMeta = (name, attr = 'name') => {
    const el = head.querySelector(`meta[${attr}="${name}"]`);
    return el?.getAttribute('content') ?? null;
  };
  const seo = {
    title: document.title,
    description: getMeta('description'),
    canonical: head.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
    robots: getMeta('robots'),
    ogTitle: getMeta('og:title', 'property'),
    ogDescription: getMeta('og:description', 'property'),
    ogImage: getMeta('og:image', 'property'),
    ogUrl: getMeta('og:url', 'property'),
    ogType: getMeta('og:type', 'property'),
    twitterCard: getMeta('twitter:card'),
    twitterTitle: getMeta('twitter:title'),
    twitterDescription: getMeta('twitter:description'),
    twitterImage: getMeta('twitter:image'),
    h1Count: document.querySelectorAll('h1').length,
    h1Text: document.querySelector('h1')?.textContent.trim() ?? null,
    jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => {
      try { return JSON.parse(s.textContent); } catch { return { _parseError: true, raw: s.textContent.slice(0, 200) }; }
    }),
    lang: document.documentElement.lang ?? null,
  };

  return { headings, nav, ctas, sections, bodyText, images, seo };
});

structural.responseStatus = status;

fs.writeFileSync(
  `qa-reports/.structural/live-${slug}-${ts}.json`,
  JSON.stringify(structural, null, 2)
);

await browser.close();
```

Invoke: `node qa-reports/.scripts/capture-<logical-name>.mjs "<route>" "<logical-name>" "<timestamp>"`

If the script fails (network error, timeout, route 404), abort and surface the error.

### 7. Compose side-by-side comparison image

Write a Node script to `qa-reports/.scripts/compose-<logical-name>.mjs` that uses `sharp` to:

1. Read both images: the PDF rasterization (`/tmp/page-<logical-name>-<n>.png`) and the live screenshot.
2. Resize both to the same width (1200px). Maintain aspect ratio when resizing.
3. Pad the shorter image with white at the bottom so both have equal height.
4. Compose them horizontally with a 20px white gutter and a 2px gray vertical line between them.
5. Add a 60px banner above each side: "DESIGN (PDF page <pdf-page>)" on the left, "LIVE (<route>)" on the right. Banner background dark gray, text white.
6. Save the composed image to `qa-reports/screenshots/compare-<logical-name>-<timestamp>.png`.

Boilerplate:

```javascript
import sharp from 'sharp';
import fs from 'fs';

const pdfPath = process.argv[2];
const livePath = process.argv[3];
const outPath = process.argv[4];
const pdfPage = process.argv[5];
const route = process.argv[6];

const TARGET_WIDTH = 1200;
const GUTTER = 20;
const SEPARATOR = 2;
const BANNER_HEIGHT = 60;

// Resize both to target width, keep aspect ratio
const [pdfBuf, liveBuf] = await Promise.all([
  sharp(pdfPath).resize({ width: TARGET_WIDTH }).png().toBuffer(),
  sharp(livePath).resize({ width: TARGET_WIDTH }).png().toBuffer(),
]);

const pdfMeta = await sharp(pdfBuf).metadata();
const liveMeta = await sharp(liveBuf).metadata();
const maxHeight = Math.max(pdfMeta.height, liveMeta.height);

// Pad both to same height
const pdfPadded = await sharp(pdfBuf)
  .extend({ bottom: maxHeight - pdfMeta.height, background: '#ffffff' })
  .toBuffer();
const livePadded = await sharp(liveBuf)
  .extend({ bottom: maxHeight - liveMeta.height, background: '#ffffff' })
  .toBuffer();

// Build banners as SVG
const banner = (text, width) => Buffer.from(
  `<svg width="${width}" height="${BANNER_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${BANNER_HEIGHT}" fill="#1a1a1a"/>
    <text x="20" y="38" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ffffff">${text}</text>
  </svg>`
);

const pdfBanner = banner(`DESIGN (PDF page ${pdfPage})`, TARGET_WIDTH);
const liveBanner = banner(`LIVE (${route})`, TARGET_WIDTH);

// Stack banner over each image
const [pdfWithBanner, liveWithBanner] = await Promise.all([
  sharp({
    create: { width: TARGET_WIDTH, height: maxHeight + BANNER_HEIGHT, channels: 3, background: '#ffffff' },
  })
    .composite([
      { input: pdfBanner, top: 0, left: 0 },
      { input: pdfPadded, top: BANNER_HEIGHT, left: 0 },
    ])
    .png()
    .toBuffer(),
  sharp({
    create: { width: TARGET_WIDTH, height: maxHeight + BANNER_HEIGHT, channels: 3, background: '#ffffff' },
  })
    .composite([
      { input: liveBanner, top: 0, left: 0 },
      { input: livePadded, top: BANNER_HEIGHT, left: 0 },
    ])
    .png()
    .toBuffer(),
]);

// Compose side by side with gutter and separator line
const totalWidth = TARGET_WIDTH * 2 + GUTTER + SEPARATOR;
const totalHeight = maxHeight + BANNER_HEIGHT;

const separator = Buffer.from(
  `<svg width="${SEPARATOR}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${SEPARATOR}" height="${totalHeight}" fill="#888888"/>
  </svg>`
);

await sharp({
  create: { width: totalWidth, height: totalHeight, channels: 3, background: '#ffffff' },
})
  .composite([
    { input: pdfWithBanner, top: 0, left: 0 },
    { input: separator, top: 0, left: TARGET_WIDTH + GUTTER / 2 },
    { input: liveWithBanner, top: 0, left: TARGET_WIDTH + GUTTER + SEPARATOR },
  ])
  .png()
  .toFile(outPath);

console.log(`Composed: ${outPath}`);
```

Invoke:

```
node qa-reports/.scripts/compose-<logical-name>.mjs \
  "/tmp/page-<logical-name>-<n>.png" \
  "qa-reports/screenshots/live-<logical-name>-<timestamp>.png" \
  "qa-reports/screenshots/compare-<logical-name>-<timestamp>.png" \
  "<pdf-page>" \
  "<route>"
```

If `sharp` is not installed, tell the user to run `pnpm add -D sharp` and abort.

### 8. Fetch the sitemap

Fetch `http://localhost:3000/sitemap.xml`. Parse it. Record whether `<route>` (with trailing slash matching `next.config.mjs`) is present. Used in step 11 (SEO checks).

If the sitemap is unavailable or returns non-200, record this as a finding but continue — sitemap absence is itself a Blocker.

### 9. Structural comparison (vs PDF)

Open the rasterized PDF reference image with the `view` tool and read every visible string. Build a list of expected structural elements:

- Expected headings (h1, every visible h2 / h3 in PDF order)
- Expected nav items (always the 7 from MIGRATION.md Section 2)
- Expected CTAs (every "Book a Discovery Call" or "Get started" button visible in PDF)
- Expected section count and order
- Expected verbatim copy strings (every paragraph of body text visible in PDF)

Compare to the structural JSON from step 6. Generate findings:

| Mismatch type | Severity |
|---|---|
| h1 text differs from PDF | Blocker |
| Verbatim copy string from PDF missing in `bodyText` | Blocker |
| Nav item missing or out of order | Blocker |
| Route wrong, page 404, page errored (responseStatus != 200) | Blocker |
| Wrong section count or order | Significant |
| CTA missing | Significant |
| h2 text differs from PDF | Significant |
| Image missing alt text on a content image | Significant |
| Heading hierarchy skip (h1 → h3) | Significant |
| Extra section not in PDF | Cosmetic |
| Extra CTA not in PDF | Cosmetic |

### 10. Visual comparison via side-by-side image

Open the composed comparison image with the `view` tool: `qa-reports/screenshots/compare-<logical-name>-<timestamp>.png`.

Both images are visible at the same scale, side by side. Walk through the page top to bottom. For each section visible in the PDF, compare the equivalent section in the live render and note differences.

**Layout fidelity checks (these are common misses — explicitly verify each):**

| Layout check | Severity if mismatched |
|---|---|
| Hero / main content width matches PDF (constrained vs full-width) | Significant |
| Body text wraps at roughly the same column width as PDF | Significant |
| Breadcrumb has the same container styling (banded background vs plain) | Significant |
| Breadcrumb is in the same position (top of page band, inside content area, etc.) | Significant |
| Section padding rhythm (vertical gaps between sections) feels comparable | Significant |
| Two-column sections are two-column, single-column sections are single-column | Blocker |
| Cards / stat blocks render in the same grid configuration | Blocker |
| Background color regions match (dark stat bars are dark, light cards are light) | Significant |
| Container has visible borders / hairlines where the PDF shows them | Significant |
| Eyebrow labels appear in the correct position above their headings | Significant |
| CTAs are inline / stacked / separated as the PDF shows | Significant |

**Other visual differences:**

| Visual difference | Severity |
|---|---|
| Section missing or in wrong position | Blocker |
| Wrong CTA text or placement | Blocker |
| Wrong color on brand elements (teal accent missing, wrong button color) | Significant |
| Wrong typographic hierarchy (h1 too small, h2 looks like h3) | Significant |
| Missing component (stat block, badge, eyebrow rule) | Significant |
| Card grid layout differs (3-col vs 2-col) | Significant |
| Hairline rule color slightly different | Cosmetic |
| Border radius differs by 2-4px | Cosmetic |
| Hover state, focus state, animation difference | Cosmetic |
| Anti-aliasing, font hinting, sub-pixel rendering differences | Ignore |
| Text appears slightly larger / smaller due to side-by-side scaling | Ignore |

For each finding, capture: what's wrong, expected (from PDF side), actual (from live side), section of the page, severity.

**Important:** the side-by-side image scales both images to the same width. If the live render appears to "fill more space" with the same content, that is a real layout difference (the live page is using a wider column or lacks a content max-width). Do not dismiss it as a scaling artifact.

### 11. SEO compliance check

Run the SEO checks against the extracted `seo` object from step 6 and the sitemap data from step 8. The rubric below applies the seo skill's `page-checklist.md` to live page data.

| Check | Severity if fails |
|---|---|
| `<title>` present and non-empty | Blocker |
| `<title>` length ≤ 60 characters | Significant |
| Meta description present and non-empty | Significant |
| Meta description length 50–160 characters | Significant if outside, Cosmetic if 161–180 |
| Canonical link present | Blocker |
| Canonical URL matches the route (canonical href ends with `<route>` after origin) | Blocker |
| Exactly one h1 on the page | Blocker (0 h1 or >1 h1) |
| h1 text aligns with `<title>` (substantial overlap, not necessarily identical) | Significant |
| `og:title` present | Significant |
| `og:description` present | Significant |
| `og:image` present | Significant |
| `og:url` present and matches canonical | Significant |
| `og:type` present | Cosmetic |
| `twitter:card` present | Cosmetic |
| All JSON-LD blocks parse as valid JSON | Blocker (any `_parseError: true`) |
| At least one applicable JSON-LD schema present (per page-checklist.md guidance for the page type) | Significant |
| `<html lang>` attribute set | Significant |
| Robots meta does NOT include `noindex` (unless intentional per PRD) | Blocker if unintentional |
| Route registered in `/sitemap.xml` | Blocker |
| Heading hierarchy sequential (no h1 → h3 skips) | already covered in structural — Significant |

When the page-checklist.md specifies a check this rubric does not cover, add it as a finding with severity matching the checklist's emphasis. The skill is the source of truth; this rubric is the implementation.

### 12. Write the findings report

Write `qa-reports/qa-<logical-name>-<timestamp>.md`:

```markdown
# QA Report - <logical-name>

**Generated:** <ISO timestamp>
**Route:** <route>
**Reference (PDF):** /tmp/page-<logical-name>-<n>.png (PDF page <pdf-page>)
**Live screenshot:** qa-reports/screenshots/live-<logical-name>-<timestamp>.png
**Side-by-side comparison:** qa-reports/screenshots/compare-<logical-name>-<timestamp>.png
**Structural data:** qa-reports/.structural/live-<logical-name>-<timestamp>.json

## Summary

- Blockers: <count>
- Significant: <count>
- Cosmetic: <count>

Breakdown by category:
- Visual / layout (vs PDF): <blockers> blockers, <significant> significant, <cosmetic> cosmetic
- Structural (vs PDF): <blockers> blockers, <significant> significant, <cosmetic> cosmetic
- SEO (vs page-checklist.md): <blockers> blockers, <significant> significant, <cosmetic> cosmetic

<one-paragraph overall assessment>

## Blockers

<for each blocker, grouped by category (Visual, Structural, SEO):>

### <short title> [<category>]

- **What's wrong:** <description>
- **Expected:** <verbatim string from PDF, or rule from page-checklist.md, or layout description from PDF>
- **Actual:** <description from live page>
- **Section:** <which part of the page, or "head/metadata">

<or "None.">

## Significant

<same structure as Blockers, or "None.">

## Cosmetic

<same structure, or "None.">

## SEO snapshot

Captured for the record:
- Title: "<title>"  (<length> chars)
- Description: "<description>"  (<length> chars)
- Canonical: <canonical>
- H1 count: <count>
- H1 text: "<h1>"
- OG image: <og:image or "missing">
- JSON-LD schemas: <list of @type values, or "none">
- Lang: <lang or "missing">
- In sitemap: <yes/no>
- Robots: <robots meta value or "default">

## Methodology

Structural comparison: <count> headings, <count> nav items, <count> CTAs checked. Verbatim copy presence verified for <count> strings from PDF.

Visual comparison: side-by-side composed image at 1200px per side. PDF reference (page <pdf-page>) on left, live render at 1440x900 viewport on right. Walked top-to-bottom checking layout fidelity (column width, container styling, section padding, grid configurations).

SEO comparison: live page metadata, structured data, and sitemap presence checked against `.claude/skills/seo/page-checklist.md`.
```

### 13. Print summary to stdout

```
QA complete: <logical-name>

  Blockers:    <count>  (<visual>+<structural> visual/structural, <seo> SEO)
  Significant: <count>  (<visual>+<structural> visual/structural, <seo> SEO)
  Cosmetic:    <count>

Report: qa-reports/qa-<logical-name>-<timestamp>.md
Side-by-side: qa-reports/screenshots/compare-<logical-name>-<timestamp>.png
Live: qa-reports/screenshots/live-<logical-name>-<timestamp>.png
```

If invoked from `/page`, the calling command reads the report and the counts to decide whether to dispatch a fix loop.

## Rules

- Never modify page code from inside `/qa`. This is read-only.
- Never count anti-aliasing, font hinting, or sub-pixel rendering differences as findings. They are noise.
- Never count side-by-side scaling as a finding. Do count column-width and container-width differences as findings — those are real even if scaling makes them more visible.
- Never escalate Cosmetic findings. Cosmetic does not auto-trigger a fix loop.
- Never invent SEO rules beyond `page-checklist.md`. The skill is source of truth; this command implements it.
- Always check the dev server is reachable before launching Playwright.
- Always include the file paths to the live screenshot, side-by-side comparison, and structural JSON in the report so a human can verify findings.
- Always categorize each finding as Visual, Structural, or SEO so the fix PRD can scope appropriately.
- Always use the side-by-side comparison image (step 10) as the primary visual diff input. Do not skip it and revert to comparing the two images separately.

## Examples

### Standalone QA

```
/qa homepage
```

Captures live homepage, composes side-by-side with PDF, runs visual + structural + SEO checks, writes report. No fix loop.

### Invoked from /page

`/page` runs `/qa <logical-name>` after `/implement` finishes. If the report shows blockers or significant findings (visual, structural, or SEO), `/page` generates a fix PRD and re-runs implement once. Cosmetic findings are logged but not acted on.

### Dev server not running

```
/qa homepage
```

`localhost:3000` unreachable. Abort with: "Dev server not running. Run `pnpm dev` and retry."

### No PDF reference

```
/qa case-study-housing-services-corp
```

INDEX.md lists pdf-page as `(missing)`. Abort. Nothing to compare against visually.