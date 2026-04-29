# Contact Page

## Status
Shipped

## Type
New page

## Summary
The Contact Us page at `/contact` gives visitors two ways to reach Alphabyte: a contact form to book a discovery call, and direct contact details (email, phone, office address). The page follows a two-column layout with editorial copy on the left and a structured form on the right.

## Decided
- Route: `/contact/`
- Breadcrumb: Home / Contact Us
- Layout: two-column — left column has editorial content and contact details, right column has the discovery call form
- "Contact Us" is the nav label (matches the 7-item nav defined in MIGRATION.md)
- Form is static HTML (no server-side handling) — the form action will need to be wired to an external service post-ship
- The "45 minutes" in the H1 is accented in Alphabyte Blue, matching the teal accent pattern used on other pages (e.g. "compounds" on homepage)
- Contact details: Email (hello@alphabyte.ai), Phone (+1 (647) 204-4581), Office (155 Winges Road, Unit 1, Vaughan, Ontario, Canada L4L 6C7)
- Social link: "Alphabyte AI on LinkedIn" under a "FOLLOW US" eyebrow, preceded by a hairline rule
- Form fields: First name, Last name (side-by-side), Work email, Company, Job title, "What are you most interested in?" (radio group: Citizen Development, Executive Enablement, Discovery, Data Readiness, Infrastructure, Not sure yet), "Tell us about your situation" (optional, textarea), submit button "Book a Discovery Call →"
- Below the submit button: "We typically respond within one business day. Your information is never shared with third parties."
- Contact info icons use Alphabyte Blue circular icon treatments (email icon, phone icon, map pin icon)

## Open Questions
None

## Scope

### In scope
- New route at `/contact/` with full page implementation
- Breadcrumb: Home / Contact Us
- Left column: eyebrow "GET IN TOUCH", H1 with blue-accented "45 minutes.", body paragraph, three contact info rows (Email, Phone, Office) with icon treatments, hairline rule, "FOLLOW US" eyebrow with LinkedIn link
- Right column: "BOOK A DISCOVERY CALL" eyebrow, form with all specified fields, submit button, reassurance microcopy
- Sitemap entry
- Structured data (ContactPage BreadcrumbList)
- Page metadata and OG tags

### Out of scope
- Form submission backend / API integration (form renders but does not submit anywhere yet)
- Form validation beyond native HTML5 validation
- Success/thank-you state after submission
- Map embed or interactive map
- Additional social links beyond LinkedIn

## Pages & Components

### Modifying
- `src/app/sitemap.ts` — add `/contact/` entry

### Creating
- `src/app/contact/page.tsx` — Contact Us page

## Content

### Verbatim copy
- Breadcrumb: "Home" (linked), "Contact Us"
- Eyebrow (left): "GET IN TOUCH"
- H1: "A discovery conversation takes 45 minutes." (where "45 minutes." is in Alphabyte Blue)
- Body paragraph: "No cost. No obligation. You describe your situation. We tell you candidly whether there is an engagement worth having, which service is the right entry point, and what you would have in your hands at day 30."
- Email label: "Email"
- Email value: "hello@alphabyte.ai"
- Phone label: "Phone"
- Phone value: "+1 (647) 204-4581"
- Office label: "Office"
- Office value: "155 Winges Road, Unit 1, Vaughan, Ontario, Canada L4L 6C7"
- Follow section eyebrow: "FOLLOW US"
- LinkedIn link: "Alphabyte AI on LinkedIn"
- Form eyebrow: "BOOK A DISCOVERY CALL"
- Field label: "First name" (placeholder: "Jane")
- Field label: "Last name" (placeholder: "Smith")
- Field label: "Work email" (placeholder: "jane@company.com")
- Field label: "Company" (placeholder: "Acme Corp")
- Field label: "Job title" (placeholder: "VP of Operations")
- Radio group label: "What are you most interested in?"
- Radio options: "Citizen Development", "Executive Enablement", "Discovery", "Data Readiness", "Infrastructure", "Not sure yet"
- Textarea label: "Tell us about your situation" with "(optional)" in muted text
- Textarea placeholder: "What are you trying to solve? What have you tried?"
- Submit button: "Book a Discovery Call →"
- Reassurance text: "We typically respond within one business day. Your information is never shared with third parties."

### Drafted at implement-time
None — all copy is specified verbatim from the PDF.

## Search Intent & SEO

- **Target query:** "contact alphabyte ai", "alphabyte consulting contact", "book ai consulting call"
- **URL slug:** `/contact/`
- **Meta title:** "Contact Us" (renders as "Contact Us — Alphabyte")
- **Meta description:** "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation. Describe your situation and we tell you candidly whether there is an engagement worth having."
- **Structured data:** BreadcrumbList (Home → Contact Us)
- **OG image:** `/og/default.png` (use existing default until a dedicated OG image is created)

## Design Notes
- Two-column layout: left column ~45% width with editorial content and contact details, right column ~55% width with the form. The right column has a subtle left border or visual separation (the PDF shows a vertical divider line between the two columns).
- Eyebrows ("GET IN TOUCH", "BOOK A DISCOVERY CALL", "FOLLOW US") use all-caps, `tracking-brand-wide`, `text-body-sm`, Alphabyte Blue text — matching the eyebrow pattern used on other pages.
- H1 uses `text-display` / `tracking-brand-tight`. The words "45 minutes." are in `text-alphabyte-blue`.
- Body paragraph below H1 uses `text-body` in `text-muted-foreground`.
- Contact info rows: each has a circular icon container (Alphabyte Blue background with white icon, or outlined — match PDF), bold label, muted value on the line below.
- Hairline rule (`border-border-default`) separates contact info from the "FOLLOW US" section.
- LinkedIn link uses Alphabyte Blue text with a small LinkedIn icon to the left.
- Form inputs: bordered (`border-border-default`), `rounded-md`, comfortable internal padding. Labels are `text-body-sm font-medium`.
- Radio group renders as a bordered container with radio options separated by hairline rules.
- Submit button: full-width, black background, white text (primary CTA per Option C rules).
- Reassurance text below submit: `text-body-sm text-muted-foreground`, centered.
- Page background: `bg-canvas`.

## Motion & Interactivity
- Form inputs: standard focus states with Alphabyte Blue focus ring.
- Submit button: darken on hover (10–20% per component-rules.md).
- LinkedIn link: underline on hover.
- No scroll animations — this is a utility page; keep it static and functional.

## Acceptance Criteria
- [ ] Page renders at `/contact/` without console errors
- [ ] Breadcrumb shows "Home / Contact Us" with Home linked to `/`
- [ ] H1 matches PDF verbatim with "45 minutes." in Alphabyte Blue
- [ ] All contact details (email, phone, office) render with icon treatments
- [ ] "FOLLOW US" section with LinkedIn link renders below a hairline rule
- [ ] Form renders all fields: first name, last name, work email, company, job title, interest radio group, situation textarea, submit button
- [ ] Radio group contains all six options in PDF order
- [ ] Textarea is marked as optional
- [ ] Submit button uses primary CTA styling (black bg, white text)
- [ ] Reassurance microcopy renders below submit button
- [ ] All form inputs have proper labels and HTML5 attributes (type="email" for email, etc.)
- [ ] Form does NOT submit (no action configured yet) — prevent default on submit
- [ ] Page is responsive (stacks to single column on mobile)
- [ ] Sitemap updated with `/contact/` entry
- [ ] Passes seo/page-checklist.md
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Visuals pass alphabyte-brand/component-rules.md review
- [ ] `pnpm build` and `pnpm typecheck` pass

## Related
- `design/Alphabyte_AI_Site_V8.pdf` page 19
- `design/MIGRATION.md` — route decision and nav order
- `prds/nav-clickthrough-and-stub-pages.md` — original stub page reference
- `src/components/discovery-call-modal.tsx` — the site-wide discovery call modal (this page has its own inline form rather than using the modal)

## Notes
- The contact page has its own inline form rather than using the site-wide DiscoveryCallButton/DiscoveryCallModal pattern. This is intentional — the contact page IS the form destination, so opening a modal would be redundant.
- Form submission backend is deferred. The form should `preventDefault` on submit for now. A follow-up will wire it to an external service (e.g., Formspree, Netlify Forms, or a custom endpoint).
- The LinkedIn icon can use `lucide-react`'s Linkedin icon or a simple SVG. Match the PDF's treatment (small blue square icon).

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
