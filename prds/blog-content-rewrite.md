# Blog Content Rewrite

## Status
Shipped

## Type
Cross-cutting (infrastructure + content)

## Summary
The current blog reads like internal documentation: long unbroken paragraphs, zero external citations, insufficient internal links, no FAQ sections, US English spelling, and no structured hooks or direct answers. A content guidelines audit (`reqs/alphabyte-content-guidelines.html`) defines two standards every post must meet: a 12-point pre-publish checklist and a default post structure. None of the 10 existing posts fully comply. This PRD covers both the infrastructure to support the new standard (FAQPage schema, FAQ UI, frontmatter schema updates) and the rewrite of all 10 posts to meet it.

Source: `reqs/alphabyte-content-guidelines.html`

## Gap Analysis

Auditing the 10 existing posts against the checklist:

| Requirement | Current state | Gap |
|---|---|---|
| Hook in first two sentences | Some posts open with context/definitions | 6-7 posts need rewrite |
| 3+ external citations | **0 external links across all 10 posts** | All 10 |
| 5+ internal links | Average 2.9 per post (range 2-4) | All 10 |
| FAQ section + FAQPage schema | **No FAQ infrastructure exists** | All 10 + code |
| Title 50-55 chars | Range 38-68, avg 55.4 | 4 posts out of range |
| Meta description 140-155 chars | Range 147-169, avg 161 (uses `excerpt` field) | 5 posts out of range |
| No paragraph over 4 sentences | Not audited per-paragraph, likely mixed | All 10 need review |
| H2/H3 as questions or positions | Mixed; some use labels like "Background" | Most posts need review |
| Section answers heading in first 1-2 sentences | Mixed | All 10 need review |
| "What we have seen" passage | Some posts have this, not consistent | ~6 posts missing |
| No em dashes | **0 em dashes found** | Already compliant |
| Canadian English spelling | **All posts use US English** (~46 instances total) | All 10 |
| Image alt text + captions | Blog hero images exist, no captions in body | All 10 if images added |

Word counts: 873-1,234 words (target 1,200-2,200). **8 of 10 posts are under the minimum.** Most need 200-800 additional words, primarily from FAQ sections (250-450 words) and expanded body sections.

## Decided
- **FAQ data goes in frontmatter** as a structured `faq` array of `{ question, answer }` objects. This keeps the data accessible for JSON-LD schema generation while the blog post component renders it as a visible section. FAQ content also appears in the MDX body for reader flow, but the structured data comes from frontmatter.
- **No separate `description` frontmatter field.** The `excerpt` field continues to serve as both the card description and the meta description. Adjust excerpt lengths to 140-155 characters to comply with the guidelines (tighter than the SEO skill's 140-160 range).
- **Canadian English is the standard going forward.** All posts switch to `-ise`/`-isation` spellings, "behaviour", "colour", etc. This aligns with Alphabyte being a Canadian company (Vaughan, Ontario).
- **External citations must be to real, verifiable sources.** Do not fabricate statistics or citations. Use Anthropic docs, Gartner/Forrester/McKinsey published research, Government of Canada data, and peer-reviewed papers. If a credible source cannot be found for a claim, rewrite the claim.
- **"What we have seen" passages draw on real Alphabyte engagement experience** from the `alphabyte-services` skill's `proof-points.md`. Do not invent client stories. Frame as pattern-level observations ("In our engagements with mid-market teams...") not specific client claims unless they match public-safe framings.
- **Post structure is a scaffold, not a straitjacket.** Posts that naturally deviate (e.g., the MCP server build guide is more tutorial-shaped) can adapt the structure, but must still pass the checklist.
- **Target word count per post: 1,400-2,000 words.** Most growth comes from FAQ sections (250-450 words), expanded body sections with citations, and "what we have seen" passages. Do not pad.

## Open Questions
None.

## Scope

### In scope

**Infrastructure (code changes)**

1. **Add `faq` field to blog frontmatter schema**
   - Array of `{ question: string, answer: string }` objects
   - Document in `content/README.md`

2. **Add FAQPage JSON-LD generation to `src/app/blog/[slug]/page.tsx`**
   - Read `faq` array from frontmatter
   - Generate FAQPage schema per `seo/structured-data.md` patterns
   - Emit alongside existing BlogPosting + BreadcrumbList schemas
   - Only emit if `faq` array is non-empty

3. **Add FAQ section UI to `src/components/blog-post-page.tsx`**
   - New `faq` prop: `Array<{ question: string; answer: string }>`
   - Render as a visible section after the body content, before the author bio
   - H2 heading: "Frequently Asked Questions"
   - Each question as an H3, answer as paragraph text
   - Styling follows existing body typography (text-body, text-foreground, etc.)

**Content rewrites (all 10 posts)**

Each post is rewritten to comply with the pre-publish checklist and default structure:

4. **Restructure all 10 posts** to follow the default post structure:
   - Hook (2 sentences) + direct answer (1 paragraph) at top
   - "Why now" section with external citation
   - 3-4 body H2 sections (200-350 words each)
   - FAQ section (3-5 questions)
   - Closing paragraph (ties to hook, points to service)

5. **Add 3+ external citations per post** to named, reputable sources. Link and name each source in body text.

6. **Add 5+ internal links per post** to Alphabyte service, tool, case study, blog, or team pages. Descriptive anchor text.

7. **Add FAQ section to each post** with 3-5 real questions. Populate the `faq` frontmatter field.

8. **Rewrite all H2/H3 headings** as questions or complete-sentence positions. No label headings ("Background", "Context", "Conclusion").

9. **Break long paragraphs.** No paragraph over 4 sentences. Most should be 2-3.

10. **Each section answers its heading** in the first 1-2 sentences. Reasoning and examples follow.

11. **Add at least one "what we have seen" passage per post** drawing on real engagement experience.

12. **Switch all posts to Canadian English** spelling ("optimise", "organisation", "behaviour", etc.).

13. **Fix title and excerpt lengths:**
    - Titles: 50-55 characters
    - Excerpts (meta descriptions): 140-155 characters
    - Primary keyword in first 40 chars of title and first 90 chars of excerpt

14. **Update `tableOfContents` frontmatter** to match rewritten H2 headings.

### Out of scope
- Writing new blog posts (this is a rewrite of the existing 10)
- Adding images or captions to post bodies (hero images already exist; body images are a separate effort)
- Blog index page changes (no layout changes needed)
- RSS feed
- Blog search or filtering
- Comment system

## Pages & Components

### Modifying
- `src/app/blog/[slug]/page.tsx` — Add FAQPage schema generation, pass `faq` prop
- `src/components/blog-post-page.tsx` — Add FAQ section UI, accept `faq` prop
- `content/README.md` — Document `faq` frontmatter field
- `content/blog/ai-governance-framework-mid-market.mdx` — Full rewrite
- `content/blog/ai-readiness-assessment.mdx` — Full rewrite
- `content/blog/citizen-developer-enablement-playbook.mdx` — Full rewrite
- `content/blog/claude-for-finance-teams.mdx` — Full rewrite
- `content/blog/claude-vs-chatgpt-enterprise.mdx` — Full rewrite
- `content/blog/claude-vs-microsoft-copilot.mdx` — Full rewrite
- `content/blog/how-to-build-a-custom-mcp-server.mdx` — Full rewrite
- `content/blog/private-llm-vs-claude-enterprise.mdx` — Full rewrite
- `content/blog/shadow-ai-governance.mdx` — Full rewrite
- `content/blog/why-ai-pilots-stall.mdx` — Full rewrite

### Not modifying
- `src/app/blog/page.tsx` — Blog index, no changes needed
- `src/app/sitemap.ts` — Posts already registered
- Any non-blog pages

## Content

### Verbatim copy
None. All content is drafted at implement time per the guidelines and brand voice.

### Drafted at implement-time
- All post body rewrites (following the structure table and checklist)
- All FAQ questions and answers (sourced from topic-relevant "People Also Ask" queries and real discovery call patterns)
- All H2/H3 rewrites (questions or positions)
- All "what we have seen" passages (sourced from `alphabyte-services/proof-points.md`)
- Title and excerpt adjustments for length compliance
- External citation selection and integration

### Content rules for implementer
1. **External citations must be real.** Do not invent statistics. Acceptable sources: Anthropic documentation and blog, Gartner, Forrester, McKinsey, Deloitte Insights, Statista, Government of Canada (.gc.ca), Search Engine Land, peer-reviewed papers, official vendor documentation (Microsoft, AWS, Google Cloud). If you cannot find a real source for a claim, rewrite the claim to not require one.
2. **Internal links use descriptive anchor text.** Not "click here" or "learn more". The anchor text is the keyword phrase that describes the destination page.
3. **Canadian English spelling.** Key conversions: optimize→optimise, organization→organisation, behavior→behaviour, recognize→recognise, customize→customise, utilize→utilise, centralize→centralise, prioritize→prioritise, modernize→modernise, standardize→standardise, color→colour, favor→favour, center→centre, defense→defence, analyze→analyse, catalog→catalogue, program→programme (except "computer program").
4. **No em dashes.** Already compliant, but maintain this during rewrites. Use periods, commas, colons, or parentheses.
5. **"What we have seen" passages** must be plausible and grounded in Alphabyte's actual service areas (Claude platform engineering, MCP integration, citizen development, executive enablement, data readiness, infrastructure). Do not reference specific clients by name unless using the anonymised case study names from `proof-points.md`.
6. **FAQ questions should be real questions people ask.** Source from: "People Also Ask" boxes for the post's target keyword, common discovery call questions per topic area, and logical follow-ups from the post's content.
7. **Preserve existing internal links** that are correct. Add new ones to reach the 5+ target.
8. **Do not change the slug** of any post. Slugs are part of the URL structure and are linked from elsewhere.

## Search Intent & SEO
No new routes. All changes improve existing post quality signals:
- FAQPage schema enables FAQ rich results in Google SERPs
- External citations improve E-E-A-T signals
- Internal links strengthen site-wide link equity distribution
- Structured hooks and direct answers improve AI engine extractability (ChatGPT, Perplexity, Google AI Overviews)
- Canadian English matches the company's jurisdiction and audience

## Design Notes
- FAQ section follows existing body typography. No new design tokens needed.
- FAQ questions rendered as H3 elements under an H2 "Frequently Asked Questions" heading.
- FAQ section sits after the main body content, before the author bio card.
- No accordion/expand behaviour. Questions and answers are fully visible (better for SEO crawlability and AI extraction).

## Motion & Interactivity
None.

## Acceptance Criteria

### Infrastructure
- [ ] `faq` field documented in `content/README.md` with schema definition
- [ ] `src/app/blog/[slug]/page.tsx` generates FAQPage JSON-LD when `faq` is present in frontmatter
- [ ] FAQPage schema validates against schema.org spec (correct `@type`, `mainEntity` array with Question/Answer pairs)
- [ ] `src/components/blog-post-page.tsx` renders FAQ section when `faq` prop is provided
- [ ] FAQ section is visually consistent with existing body typography
- [ ] FAQ section does not render when `faq` is empty or absent (no empty heading)

### Per-post checklist (all 10 posts must pass every item)
- [ ] Hook in first two sentences; direct answer in first paragraph
- [ ] 3+ external citations to named, reputable, real sources (linked in body text)
- [ ] 5+ internal links to Alphabyte pages (descriptive anchor text)
- [ ] FAQ section with 3-5 questions, populated in `faq` frontmatter field
- [ ] Title 50-55 characters
- [ ] Excerpt 140-155 characters
- [ ] Primary keyword in first 40 chars of title and first 90 chars of excerpt
- [ ] No paragraph over 4 sentences
- [ ] Every H2/H3 is a question or complete-sentence position
- [ ] Each section answers its heading in first 1-2 sentences
- [ ] At least one "what we have seen" passage
- [ ] Zero em dashes
- [ ] Canadian English spelling throughout
- [ ] `tableOfContents` frontmatter matches actual H2 headings
- [ ] Total word count 1,400-2,000

### Cross-cutting
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds
- [ ] No broken internal links (all `/blog/`, `/services/`, `/tools/`, `/our-work/`, `/team/` paths resolve)
- [ ] All external links are to real, accessible URLs
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks (no forbidden vocabulary)
- [ ] No confidential information from `alphabyte-services/pricing.md` exposed

## Implementation Order

1. **Infrastructure first** (code changes):
   - Update `content/README.md` with `faq` schema
   - Add FAQPage schema to `blog/[slug]/page.tsx`
   - Add FAQ section to `blog-post-page.tsx`
   - Verify with a test FAQ on one post

2. **Content rewrites** (one post at a time, in this order):
   1. `claude-vs-chatgpt-enterprise` — highest traffic topic, sets the template
   2. `claude-vs-microsoft-copilot` — similar comparison format
   3. `ai-governance-framework-mid-market` — establishes the governance voice
   4. `shadow-ai-governance` — related governance topic
   5. `citizen-developer-enablement-playbook` — core service topic
   6. `claude-for-finance-teams` — use-case focused
   7. `ai-readiness-assessment` — service entry point
   8. `why-ai-pilots-stall` — awareness stage
   9. `how-to-build-a-custom-mcp-server` — technical/tutorial (may deviate from structure)
   10. `private-llm-vs-claude-enterprise` — comparison format

3. **Final verification pass**: Run the pre-publish checklist against all 10 posts.

Estimated effort: Infrastructure = 1-2 hours. Content = 3-5 hours per post (30-50 hours total). This is a multi-session effort.

## Related
- `reqs/alphabyte-content-guidelines.html` — Source guidelines document
- `reqs/alphabyte-blog-research.html` — Blog research document (if topic/keyword research is needed)
- `.claude/skills/seo/structured-data.md` — FAQPage schema pattern
- `.claude/skills/seo/metadata-patterns.md` — Title and description guidelines
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — Brand voice rules
- `.claude/skills/alphabyte-services/proof-points.md` — Source for "what we have seen" passages
- `content/README.md` — Blog frontmatter schema documentation
- `prds/blog-launch-10-posts.md` — Original PRD that created the 10 posts

## Notes
- **This is primarily a content effort.** The infrastructure changes are small (FAQ schema + UI). The bulk of the work is rewriting 10 posts to meet a higher editorial standard. Plan for this to span multiple sessions.
- **External citations require real research.** The implementer must find actual published sources that support the claims in each post. Do not fabricate Gartner statistics or McKinsey percentages. If a commonly cited stat cannot be traced to a real source, either find the real source or rewrite the sentence.
- **Canadian English is a deliberate brand choice.** Alphabyte is a Canadian company. The spelling convention signals this to readers and search engines. It also differentiates the content from US-centric competitors.
- **The MCP server post is an outlier.** It is more tutorial-shaped than the other posts. Apply the checklist (citations, internal links, FAQ, Canadian English, paragraph length) but allow the structure to be tutorial-appropriate rather than forcing the default scaffold.
- **Word count growth should be organic.** Posts grow from FAQ sections (~300 words), expanded sections with citations and examples (~100-200 words per section), and "what we have seen" passages (~100-150 words). Do not pad with filler.

---
*Created: 2026-05-05*
*Last updated: 2026-05-05 (shipped)*
