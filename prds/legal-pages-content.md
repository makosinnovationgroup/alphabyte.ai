# Legal Pages Content

## Status
Shipped

## Type
Content change

## Summary
Populate the three legal stub pages — Terms of Service, Privacy Policy, and Cookies Policy — with the finalized copy provided by the business. The pages are already scaffolded with correct routes, metadata, and layout containers; this feature replaces the placeholder text with production content and applies clean typographic styling.

## Decided
- All copy is verbatim — provided by the business, not to be edited for voice or tone.
- Existing page routes stay as-is: `/terms/`, `/privacy/`, `/cookies/`.
- Existing `robots: { index: false, follow: true }` metadata stays — legal pages should not be indexed.
- Layout container stays: `max-w-3xl`, `px-6`, `py-16 md:py-24` (matches existing scaffold).
- Cross-link the Privacy Policy from the Terms page where the copy references it ("Please review the Privacy Policy…").
- Cross-link the Cookies Policy from the Privacy page where the copy references cookies.

## Open Questions
None

## Scope

### In scope
- Replace placeholder content on `/terms/` with full Terms of Service copy
- Replace placeholder content on `/privacy/` with full Privacy Policy copy
- Replace placeholder content on `/cookies/` with full Cookies Policy copy
- Apply consistent typographic hierarchy: section headings (`h2`), sub-section headings (`h3`), body paragraphs, and bulleted lists
- Internal cross-links between the three legal pages where the copy references them

### Out of scope
- Rewriting or editing the legal copy for brand voice — this is legal text, used as-provided
- Adding structured data (JSON-LD) to legal pages
- Changing the URL slugs
- Adding a table of contents or anchor-link navigation
- Making legal pages indexable by search engines

## Pages & Components

### Modifying
- `src/app/terms/page.tsx` — replace placeholder with full Terms of Service content
- `src/app/privacy/page.tsx` — replace placeholder with full Privacy Policy content
- `src/app/cookies/page.tsx` — replace placeholder with full Cookies Policy content

### Creating
None

## Content

### Verbatim copy

All copy below is verbatim and must be used exactly as written.

#### Terms of Service (`/terms/`)

**Page heading:** "Terms of Service"

**Intro:**
By using this Website, you are agreeing to these Terms of Use. If you do not agree to these Terms of Use, then you are not allowed to use this Website and should immediately terminate such usage.

The entity within the Alphabyte Network that is providing this Website is referred to in these Terms of Use as "we", "us", or "our". Although parts of these Terms of Use may reference other entities in the Alphabyte Network, these Terms of Use are only between you and us and not with any of those other entities.

**Section: Use of Content; Restrictions; Privacy Statement**

Unless otherwise indicated in the relevant content, and on the condition that you comply with all of your obligations under these Terms of Use, you are authorized to view, copy, print, and distribute (but not modify) the content on this Website; provided that (i) such use is for informational, non-commercial purposes only, and (ii) any copy of the content that you make must include the copyright notice or other attribution associated with the content.

You are not authorized to copy or use any software, proprietary processes, or technology embodied or described in this Website.

You will comply with all applicable laws in accessing and using this Website.

Please review the Privacy Policy for more information regarding the ways in which your personal information is collected in connection with your use of this Website, the purposes for which your personal information is used, and how it is shared.

**Section: Intellectual Property Rights; No use of Alphabyte names or logos**

Unless otherwise indicated, the content on this Website is provided by us or another entity within the Alphabyte Network.

This Website and its contents are protected by copyright, trademark, and other laws of the United States, Canada and/or foreign countries. We and our licensors reserve all rights not expressly granted in these Terms of Use.

"Alphabyte", "Alphabyte Solutions", "Alphabyte Canada", & "Alphabyte USA", the Alphabyte logo, and local language variants of the foregoing trademarks, and certain product names that appear on this Website (collectively, the "Alphabyte Marks"), are trademarks or registered trademarks of entities within the Alphabyte Network. Except as expressly provided in these Terms of Use or as expressly authorized in writing by the relevant trademark owner, you shall not use any Alphabyte Marks either alone or in combination with other words or design elements, including in any press release, advertisement, or other promotional or marketing material or media, whether in written, oral, electronic, visual or any other form.

References to other parties' trademarks on this Website are for identification purposes only and do not indicate that such parties have approved this Website or any of its contents. These Terms of Use do not grant you any right to use the trademarks of other parties.

**Section: Disclaimers and Limitations of Liability**

THIS WEBSITE (INCLUDING WITHOUT LIMITATION ANY CONTENT OR OTHER PART THEREOF) CONTAINS GENERAL INFORMATION ONLY, AND WE ARE NOT, BY MEANS OF THIS WEBSITE, RENDERING PROFESSIONAL ADVICE OR SERVICES. BEFORE MAKING ANY DECISION OR TAKING ANY ACTION THAT MIGHT AFFECT YOUR FINANCES OR BUSINESS, YOU SHOULD CONSULT A QUALIFIED PROFESSIONAL ADVISOR.

THIS WEBSITE IS PROVIDED AS IS, AND WE MAKE NO EXPRESS OR IMPLIED REPRESENTATIONS OR WARRANTIES REGARDING IT. WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT THAT THIS WEBSITE WILL BE SECURE, ERROR-FREE, FREE FROM VIRUSES OR MALICIOUS CODE, OR WILL MEET ANY PARTICULAR CRITERIA OF PERFORMANCE OR QUALITY. WE EXPRESSLY DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, COMPATIBILITY, SECURITY, AND ACCURACY.

YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK AND YOU ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR USAGE, INCLUDING, WITHOUT LIMITATION, WITH RESPECT TO LOSS OF SERVICE OR DATA. WE WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OR ANY OTHER DAMAGES WHATSOEVER, WHETHER IN AN ACTION OF CONTRACT, STATUTE, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE), OR OTHERWISE, RELATING TO OR ARISING OUT OF THE USE OF THIS WEBSITE, EVEN IF WE KNEW, OR SHOULD HAVE KNOWN, OF THE POSSIBILITY OF SUCH DAMAGES.

CERTAIN LINKS ON THIS WEBSITE MAY LEAD TO WEBSITES, RESOURCES OR TOOLS MAINTAINED BY THIRD PARTIES OVER WHOM WE HAVE NO CONTROL, INCLUDING, WITHOUT LIMITATION, THOSE MAINTAINED BY OTHER ENTITIES WITHIN THE ALPHABYTE NETWORK OR INDIVIDUAL PERSONNEL OF SUCH ENTITIES. WITHOUT LIMITING ANY OF THE FOREGOING, WE MAKE NO EXPRESS OR IMPLIED REPRESENTATIONS OR WARRANTIES WHATSOEVER REGARDING SUCH WEBSITES, RESOURCES AND TOOLS, AND LINKS TO ANY SUCH WEBSITES, RESOURCES AND TOOLS SHOULD NOT BE CONSTRUED AS AN ENDORSEMENT OF THEM OR THEIR CONTENT BY US.

THE ABOVE DISCLAIMERS AND LIMITATIONS OF LIABILITY SHALL BE APPLICABLE NOT ONLY TO US BUT ALSO TO EACH OTHER ENTITY WITHIN THE ALPHABYTE NETWORK AND TO OUR AND THEIR RESPECTIVE PERSONNEL.

THE ABOVE DISCLAIMERS AND LIMITATIONS OF LIABILITY ARE APPLICABLE TO THE FULLEST EXTENT PERMITTED BY LAW, WHETHER IN CONTRACT, STATUTE, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE) OR OTHERWISE.

**Section: Additional Terms**

If any portion of these Terms of Use is invalid or unenforceable in any jurisdiction, then (i) in that jurisdiction it shall be re-construed to the maximum effect permitted by law in order to effect its intent as nearly as possible, and the remainder of these Terms of Use shall remain in full force and effect, and (ii) in every other jurisdiction, all of these Terms of Use shall remain in full force and effect.

We may revise these Terms of Use at any time in our sole discretion by posting such revised Terms of Use at the Terms of Use link (i.e., this webpage that you are currently viewing) or elsewhere in this Website. Such revisions shall be effective as to you upon posting, unless explicitly stated by us. It is your responsibility to be aware of any such revised Terms of Use by checking this webpage. Your continued use of this Website following changes to these Terms of Use constitutes your agreement to the revised Terms of Use.

---

#### Privacy Policy (`/privacy/`)

**Page heading:** "Privacy Policy"

**Sub-heading:** "Your Privacy Is Important to Alphabyte"

In the course of serving you as an individual client or as someone associated with a corporate client, Alphabyte may obtain personal information about you. Obtaining this information is important to our ability to deliver the highest level of service to you, but we also recognize that you expect us to treat this information appropriately.

This policy describes the types of personal information we may collect about you, the purposes for which we use the information, the circumstances in which we may share the information and the steps that we take to safeguard the information to protect your privacy. As used throughout this policy, the term "Alphabyte" refers to Alphabyte Solutions, Inc

**Section: Information Security: How We Protect Your Data and Privacy**

Alphabyte is committed to protecting the privacy and confidentiality of your personal information. We limit access to your personal information to authorized Alphabyte employees, our service providers are held to stringent standards of privacy. We also maintain physical, electronic and procedural safeguards to protect the information against loss, misuse, damage or modification and unauthorized access or disclosure. Some of the other central features of our information security program are:

- A dedicated agent that designs, implements and provides oversight to our information security;
- The use of specialized technology such as firewalls;
- Testing of the security and operability of products and services before they are introduced to the Internet, as well as ongoing scanning for publicly known vulnerabilities in the technology;
- Internal and external reviews of our Internet sites and services;
- Monitoring of our systems infrastructure to detect weaknesses and potential intrusions;
- Implementing controls to identify, authenticate and authorize access to various systems or sites;
- Protecting information during transmission through various means including, where appropriate, encryption; and
- Providing Alphabyte personnel with relevant training and continually updating our security practices in light of new risks and developments in technology.

**Section: The Sources of Information**

In the course of using the Service, we may ask you to provide us with, or grant us access to, or permission to obtain, certain personally identifiable information that can be used to contact or identify you; personally identifiable information may include, but is not limited to, your name, company name, email address, postal address and phone number ("Personal Information")

**Section: Our Use of Your Personal Information**

- Administer, operate, facilitate and manage your relationship and/or account with Alphabyte. This may include sharing such information internally, as described in the following two sections, respectively;
- Contact you or, if applicable, your designated representative(s) by post, telephone, electronic mail, etc., in connection with your relationship and/or account;
- Provide you with information (such as new technology), recommendations, or advice concerning products and services offered by Alphabyte; and
- Facilitate our internal business operations, including assessing and managing technical requirements and fulfilling our legal and regulatory requirements.

**Section: Disclosures of Your Personal Information to Third Parties**

Alphabyte does not under any circumstances disclose your personal information to third parties, except as under limited circumstances, your personal information may be disclosed to third parties as permitted by, or to comply with, applicable laws and regulations; for instance, when responding to a subpoena or similar legal process, to protect against fraud and to otherwise cooperate with law enforcement or regulatory authorities.

You should know that Alphabyte will not sell your personal information.

**Section: Privacy and the Internet**

The following additional information will be of interest to you as a visitor to this site:

"Cookies" are small text files that may be placed on your Web browser when you visit our Web sites or when you view advertisements we have placed on other Web sites.

**Section: Other Privacy Policies or Statements; Changes to Policy**

This policy provides a general statement of the ways in which Alphabyte protects your personal information. You may, however, in connection with specific products or services offered by Alphabyte, be provided with privacy policies or statements that supplement this policy. This policy may be changed from time to time to reflect changes in our practices concerning the collection and use of personal information. The revised policy will be effective immediately upon posting to our Web site. This version of the Policy is effective January 5, 2016.

---

#### Cookies Policy (`/cookies/`)

**Page heading:** "Cookies Policy"

**Intro:**
Alphabyte's websites and online services may use "cookies." Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches, and give us insights into user behavior so we can improve our communications and products.

If you want to disable cookies, check with your web browser provider to find out how to disable cookies.

Because cookies are used throughout our websites, disabling them may prevent you from using certain parts of the sites.

The cookies used on our websites have been categorized based on the guidelines found in the ICC UK Cookie guide. We use the following categories on our websites and other online services:

**Section: Strictly Necessary Cookies**

These cookies are essential to enable you to browse around our websites and use their features. Without these cookies, services like shopping baskets and e-billing cannot be provided.

**Section: Performance Cookies**

These cookies collect information about how you use our websites — for instance, which pages you go to most. This data may be used to help optimize our websites and make them easier for you to navigate. These cookies are also used to let affiliates know if you came to one of our websites from an affiliate and if your visit resulted in the use or purchase of a product or service from us, including details of the product or service purchased. These cookies don't collect information that identifies you. All information these cookies collect is aggregated and therefore anonymous.

**Section: Functionality Cookies**

These cookies allow our websites to remember choices you make while browsing. For instance, we may store your geographic location in a cookie to ensure that we show you our website localized for your area. We may also remember preferences such as text size, fonts, and other customizable site elements. They may also be used to keep track of what featured products or videos have been viewed to avoid repetition. The information these cookies collect will not personally identify you, and they cannot track your browsing activity on non-Alphabyte websites.

### Drafted at implement-time
None — all copy is verbatim.

## Search Intent & SEO
N/A (no new routes, metadata unchanged — legal pages remain noindex)

## Design Notes
- Maintain the existing scaffold layout: `max-w-3xl`, `px-6`, `py-16 md:py-24`
- Section headings as `h2` with `text-headline` or a slightly smaller heading size, `font-sans`, `tracking-brand-snug`
- Sub-section headings as `h3` with `font-medium`
- Body text as `text-body text-brand-ink/70` (matching existing paragraph style)
- Bulleted lists styled with standard Tailwind list utilities (`list-disc`, `pl-6`, spacing)
- The all-caps disclaimers section in Terms should remain all-caps as provided (legal convention) but rendered in `text-body-sm` to reduce visual weight
- Adequate vertical spacing between sections (`space-y-8` or similar on the section container)
- Internal links styled with `text-alphabyte-blue hover:underline`

## Motion & Interactivity
None

## Acceptance Criteria
- [ ] `/terms/` renders the full Terms of Service copy with no placeholder text
- [ ] `/privacy/` renders the full Privacy Policy copy with no placeholder text
- [ ] `/cookies/` renders the full Cookies Policy copy with no placeholder text
- [ ] All three pages have clear section headings forming a readable hierarchy (h1 > h2 > h3)
- [ ] Bulleted lists render as actual `<ul>` / `<li>` elements, not inline text
- [ ] "Privacy Policy" mention in Terms page links to `/privacy/`
- [ ] "Cookies" mention in Privacy page links to `/cookies/`
- [ ] All-caps disclaimer section in Terms is visually de-emphasized (smaller text size)
- [ ] Pages remain `robots: { index: false, follow: true }`
- [ ] `pnpm build` succeeds with no errors
- [ ] `pnpm typecheck` passes

## Related
None

## Notes
The copy references "Alphabyte Solutions, Inc" and "Alphabyte Network" — these are legal entity names from the provided text, not marketing names. They appear only on legal pages and are not subject to the brand guide's naming rules for marketing copy.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27 (shipped)*
