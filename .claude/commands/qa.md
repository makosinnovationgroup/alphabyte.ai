---
description: Compare a built page against its PDF design source using Playwright. Runs visual + structural + SEO checks against the seo skill page-checklist. Produces a findings report classified by severity.
argument-hint: <logical-name>
---

# /qa

Renders a live page in a headless browser, captures a full-page screenshot at desktop viewport, extracts structural and SEO data, and compares the result against:

1. The rasterized PDF page from `design/Alphabyte_AI_Site_V7.pdf` (visual + copy + structure)
2. The `seo` skill's `page-checklist.md` rules (metadata, structured data, indexability)

Produces a findings report at `qa-reports/qa-<logical-name>-<timestamp>.md` with three severity levels: Blocker, Significant, Cosmetic.

Used standalone for ad-hoc design + SEO review, or invoked automatically by `/page` after implementation.

## Usage

```
/qa <logical-name>
```

Example: `/qa homepage`

## Prerequisites

- `pnpm dev` running on `localhost:3000`. The command does not start the dev server. If `localhost:3000` is unreachable, abort and tell the user to start it.
- Playwright installed in the project (`pnpm add -D playwright` if not present).
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

This is the **reference image** for visual comparison.

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

### 7. Fetch the sitemap

Fetch `http://localhost:3000/sitemap.xml`. Parse it. Record whether `<route>` (with trailing slash matching `next.config.mjs`) is present. Used in step 9 (SEO checks).

If the sitemap is unavailable or returns non-200, record this as a finding but continue — sitemap absence is itself a Blocker.

### 8. Structural comparison (vs PDF)

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

### 9. SEO compliance check

Run the SEO checks against the extracted `seo` object from step 6 and the sitemap data from step 7. The rubric below applies the seo skill's `page-checklist.md` to live page data.

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

### 10. Visual comparison (vs PDF)

Use the `view` tool to open both images in turn:
- Reference: `/tmp/page-<logical-name>-<n>.png`
- Live: `qa-reports/screenshots/live-<logical-name>-<timestamp>.png`

Compare them holistically. For each visible difference, classify by severity:

| Visual difference | Severity |
|---|---|
| Section missing or in wrong position | Blocker |
| Wrong column structure (single-col vs two-col, etc.) | Blocker |
| Wrong CTA text or placement | Blocker |
| Wrong color on brand elements (teal accent missing, wrong button color) | Significant |
| Wrong typographic hierarchy (h1 too small, h2 looks like h3) | Significant |
| Missing component (stat block, badge, eyebrow rule) | Significant |
| Card grid layout differs (3-col vs 2-col) | Significant |
| Spacing rhythm visibly different across sections | Significant |
| Spacing off by < ~16px | Cosmetic |
| Hairline rule color slightly different | Cosmetic |
| Border radius differs by 2-4px | Cosmetic |
| Hover state, focus state, animation difference | Cosmetic |
| Anti-aliasing, font hinting, sub-pixel rendering differences | Ignore |

For each finding, capture: what's wrong, expected (from PDF), actual (from live), section of the page, severity.

### 11. Write the findings report

Write `qa-reports/qa-<logical-name>-<timestamp>.md`:

```markdown
# QA Report - <logical-name>

**Generated:** <ISO timestamp>
**Route:** <route>
**Reference:** /tmp/page-<logical-name>-<n>.png (PDF page <pdf-page>)
**Live screenshot:** qa-reports/screenshots/live-<logical-name>-<timestamp>.png
**Structural data:** qa-reports/.structural/live-<logical-name>-<timestamp>.json

## Summary

- Blockers: <count>
- Significant: <count>
- Cosmetic: <count>

Breakdown by category:
- Visual / structural (vs PDF): <blockers> blockers, <significant> significant, <cosmetic> cosmetic
- SEO (vs page-checklist.md): <blockers> blockers, <significant> significant, <cosmetic> cosmetic

<one-paragraph overall assessment>

## Blockers

<for each blocker, grouped by category (Visual/Structural, SEO):>

### <short title> [<category>]

- **What's wrong:** <description>
- **Expected:** <verbatim string from PDF, or rule from page-checklist.md>
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

Visual comparison: full-page screenshot at 1440x900 viewport compared against PDF page <pdf-page> rasterized at 200 DPI.

SEO comparison: live page metadata, structured data, and sitemap presence checked against `.claude/skills/seo/page-checklist.md`.
```

### 12. Print summary to stdout

```
QA complete: <logical-name>

  Blockers:    <count>  (<visual-count> visual, <seo-count> SEO)
  Significant: <count>  (<visual-count> visual, <seo-count> SEO)
  Cosmetic:    <count>

Report: qa-reports/qa-<logical-name>-<timestamp>.md
Live:   qa-reports/screenshots/live-<logical-name>-<timestamp>.png
```

If invoked from `/page`, the calling command reads the report and the counts to decide whether to dispatch a fix loop.

## Rules

- Never modify page code from inside `/qa`. This is read-only.
- Never count anti-aliasing, font hinting, or sub-pixel rendering differences as findings. They are noise.
- Never escalate Cosmetic findings. Cosmetic does not auto-trigger a fix loop.
- Never invent SEO rules beyond `page-checklist.md`. The skill is source of truth; this command implements it.
- Always check the dev server is reachable before launching Playwright.
- Always include the file paths to the live screenshot and structural JSON in the report so a human can verify findings.
- Always categorize each finding as Visual/Structural or SEO so the fix PRD can scope appropriately.

## Examples

### Standalone QA

```
/qa homepage
```

Captures live homepage, runs visual + SEO checks, writes report. No fix loop.

### Invoked from /page

`/page` runs `/qa <logical-name>` after `/implement` finishes. If the report shows blockers or significant findings (visual or SEO), `/page` generates a fix PRD and re-runs implement once. Cosmetic findings are logged but not acted on.

### Dev server not running

```
/qa homepage
```

`localhost:3000` unreachable. Abort with: "Dev server not running. Run `pnpm dev` and retry."

### No PDF reference

```
/qa case-study-housing-services-corp
```

INDEX.md lists pdf-page as `(missing)`. Abort. Nothing to compare against visually. (SEO checks alone are not a sufficient QA pass without a visual reference.)
