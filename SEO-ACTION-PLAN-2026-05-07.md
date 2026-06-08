# SEO Action Plan: alphabyte.ai

**Generated:** May 7, 2026
**Current Score:** 82/100
**Target Score:** 90/100

---

## Critical (fix immediately)

### 1. Fix duplicate H1 tags on Tools and About pages
**Impact:** On-Page SEO +5 points
**Effort:** 10 minutes
**Files:**
- `src/app/tools/page.tsx` -- demote subtitle H1 to H2
- `src/app/about/page.tsx` -- demote subtitle H1 to H2

### 2. Remove legacy image assets from production
**Impact:** Performance, crawl efficiency
**Effort:** 5 minutes
**Action:** Delete or `.gitignore` the `/public/team/old/` directory (7MB of unused JPEG/PNG files)

---

## High (fix within 1 week)

### 3. Add llms.txt for AI search readiness
**Impact:** AI Search Readiness +15 points
**Effort:** 30 minutes
**Action:** Create `/public/llms.txt` with structured site overview and `/public/llms-full.txt` with expanded content.

### 4. Compress OG images
**Impact:** Performance, social sharing speed
**Effort:** 1-2 hours
**Action:** Convert 28 OG PNG images (570-990KB each) to optimized PNG or WebP. Target <200KB per image. Total savings: ~15MB.

### 5. Add Person schema to team member pages
**Impact:** Schema +3 points, potential knowledge panel
**Effort:** 30 minutes
**File:** `src/app/team/[slug]/page.tsx`
**Schema:** Add `Person` type with `name`, `jobTitle`, `worksFor`, `url`, `image`, `sameAs`

### 6. Add SearchAction to WebSite schema
**Impact:** Schema +2 points, sitelinks search box eligibility
**Effort:** 15 minutes
**File:** `src/app/layout.tsx`
**Note:** Requires implementing a search feature for this to be valid.

---

## Medium (fix within 1 month)

### 7. Improve contact page title tag
**Impact:** On-Page SEO, CTR
**Effort:** 5 minutes
**Current:** "Contact Us - Alphabyte" (22 chars)
**Recommended:** "Contact Alphabyte AI - Book a Free Discovery Call" (50 chars)

### 8. Add image priority hints for above-fold content
**Impact:** Performance (LCP)
**Effort:** 30 minutes
**Action:** Add `fetchpriority="high"` to featured blog hero image and above-fold homepage images.

### 9. Add quantified metrics to case studies
**Impact:** Content Quality +5 points, citability
**Effort:** 2-4 hours (requires client data)
**Action:** Add specific ROI metrics: time saved, cost reduction, compliance improvement percentages.

### 10. Add testimonials or client quotes
**Impact:** Content Quality, E-E-A-T trust signals
**Effort:** 2-4 hours (requires client approval)
**Action:** Add 2-3 client quotes. Implement `Review` schema.

### 11. Add responsive images (srcset)
**Impact:** Performance on mobile
**Effort:** 2-3 hours
**Action:** Generate multiple image sizes for blog heroes and team photos. Add `srcset` and `sizes` attributes.

### 12. Enrich Organization schema
**Impact:** Schema completeness
**Effort:** 10 minutes
**File:** `src/app/layout.tsx`
**Add:** `foundingDate: "2016"`, `numberOfEmployees: { @type: "QuantitativeValue", value: 20 }`

---

## Low (backlog)

### 13. Expand social presence metadata
**Action:** Add Twitter/X account. Add `sameAs` entries for additional platforms.

### 14. Create a glossary/resource hub
**Action:** Build `/resources/` or `/glossary/` page for AI/MCP/SDLC terminology. Good long-tail keyword opportunity.

### 15. Add video content
**Action:** Create explainer videos for service pages. Implement `VideoObject` schema.

### 16. Strengthen blog cross-linking
**Action:** Link comparison posts to each other. Build pillar/cluster content architecture.

### 17. Add visible breadcrumb navigation
**Action:** Breadcrumb schemas exist but no visible UI breadcrumbs. Consider adding for user navigation and CTR improvement.

---

## Score Projection

| Action | Category Impact | Score Delta |
|--------|----------------|-------------|
| Fix H1s (#1) | On-Page | +2 |
| Remove legacy images (#2) | Images | +1 |
| Add llms.txt (#3) | AI Readiness | +3 |
| Compress OG images (#4) | Images, Performance | +2 |
| Person schema (#5) | Schema | +1 |
| Contact title (#7) | On-Page | +0.5 |
| Case study metrics (#9) | Content | +1.5 |
| Testimonials (#10) | Content | +1 |
| **Projected total** | | **~94/100** |
