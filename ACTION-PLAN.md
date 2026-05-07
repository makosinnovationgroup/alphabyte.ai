# SEO Action Plan — alphabyte.ai

**Generated:** 2026-05-07
**Current Score:** 81 / 100
**Target Score:** 90+ / 100

---

## Critical — Fix Immediately

### 1. Compress blog hero images
**Impact:** Performance +15 pts | Current: 1.1–1.3 MB each | Target: <200 KB each
**Files:** `public/blog/*-hero.webp` (10 images)
**Action:** Re-export at quality 75–80, max width 1600px. Consider generating responsive variants (800px, 1200px, 1600px) with `srcset`.
**Estimated savings:** ~10 MB

### 2. Convert team headshots from PNG to WebP
**Impact:** Performance +10 pts | Current: 888 KB–2.1 MB each | Target: <150 KB each
**Files:** `public/team/*.png` (8 images)
**Action:** Convert to WebP, resize to max 600x600px, quality 80. Update all `<img>` `src` references from `.png` to `.webp`.
**Estimated savings:** ~12 MB

---

## High — Fix Within 1 Week

### 3. Generate page-specific OG images
**Impact:** Social CTR, brand differentiation
**Current:** 40+ pages share `/og/default.png` (948 KB)
**Action:** Create unique OG images for at minimum:
- 5 service pages
- 4 tool pages
- 3 case study pages
- About, Contact, Team, Blog index pages

Use WebP or compressed PNG, target <300 KB each at 1200x630px.

### 4. Compress or replace default OG image
**Impact:** Social preview load speed
**Current:** `/og/default.png` at 948 KB
**Action:** Compress to <300 KB or convert to WebP.

### 5. Add security headers via Cloudflare Pages `_headers` file
**Impact:** Security score, browser trust signals
**Action:** Create `public/_headers` with:
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 6. Expand tool page content
**Impact:** Content quality +5 pts, keyword rankings
**Pages:** `/tools/claude/`, `/tools/mcp/`, `/tools/custom-ai-agents/`, `/tools/on-premise-llm/`
**Current:** ~500 words each | **Target:** 1,000+ words
**Add:** Use cases, configuration examples, integration architecture, FAQ section
**Priority:** `/tools/claude/` and `/tools/mcp/` first

---

## Medium — Fix Within 1 Month

### 7. Add quantifiable metrics to case studies
**Impact:** E-E-A-T, AI citability, conversion
**Pages:** All 3 case study pages
**Action:** Add specific numbers: time saved, error reduction, users enabled.

### 8. Remove unused Geist font files
**Impact:** Reduced deploy size (~220 KB)
**Files to remove:** `public/fonts/Geist-Bold.woff2`, `Geist-BoldItalic.woff2`, `Geist-Medium.woff2`, `Geist-Regular.woff2`, `Geist-RegularItalic.woff2`

### 9. Add responsive image markup
**Impact:** Mobile performance, LCP
**Action:** Add `srcset` and `sizes` attributes to hero images and team photos with 2–3 size variants.

### 10. Add `loading="lazy"` to below-fold images
**Impact:** Initial page load performance
**Action:** Audit all `<img>` tags. Hero images = eager. Below-fold = lazy.

### 11. Add `modifiedDate` to all blog frontmatter
**Impact:** Content freshness signals
**Action:** Add `modifiedDate` field to blog posts where missing.

### 12. Create `llms-full.txt` with expanded descriptions
**Impact:** AI search depth
**Action:** Extended `llms.txt` with 2–3 sentence descriptions per page.

---

## Low — Backlog

### 13. Add `SiteNavigationElement` schema
### 14. Use `CreativeWork` schema for case studies
### 15. Add `HowTo` schema to service pages
### 16. Add Organization `telephone` property
### 17. Create custom 404 page
### 18. Optimize H1 keyword targeting on Tools and About pages

---

## Progress Tracker

| # | Priority | Task | Status |
|---|---|---|---|
| 1 | Critical | Compress blog hero images | ⬜ |
| 2 | Critical | Convert team PNGs to WebP | ⬜ |
| 3 | High | Generate page-specific OG images | ⬜ |
| 4 | High | Compress default OG image | ⬜ |
| 5 | High | Add security headers | ⬜ |
| 6 | High | Expand tool page content | ⬜ |
| 7 | Medium | Add metrics to case studies | ⬜ |
| 8 | Medium | Remove unused Geist fonts | ⬜ |
| 9 | Medium | Add responsive image markup | ⬜ |
| 10 | Medium | Add lazy loading to below-fold images | ⬜ |
| 11 | Medium | Add modifiedDate to blog posts | ⬜ |
| 12 | Medium | Create llms-full.txt | ⬜ |
| 13 | Low | SiteNavigationElement schema | ⬜ |
| 14 | Low | CreativeWork for case studies | ⬜ |
| 15 | Low | HowTo schema for services | ⬜ |
| 16 | Low | Organization telephone | ⬜ |
| 17 | Low | Custom 404 page | ⬜ |
| 18 | Low | H1 keyword optimization | ⬜ |
