# Proof Points

Three active client engagements that the AI consulting practice can reference. Each has different levels of public disclosure depending on what the client has approved.

This file extracts public-safe content. Specific engagement details that haven't been confirmed for public sharing should be surfaced as Open Questions in any PRD that wants to publish them.

## Why proof points matter

For a young AI consulting practice, named client work is the highest-value trust signal — far more than testimonials or generic claims. Naming Sprinklermatic, RecirQ, and Housing Services Corp. shows specific Canadian mid-market clients with real engagements live.

The marketing site should lean on these names. They've already been published on the alphabytesolutions.com header / footer in some form, so the names themselves are not confidential.

## The three active proof points

### Sprinklermatic / EJ Capital

**Tracks engaged:** Enablement + Infrastructure

**What's live (publicly described at a high level):**
- AI Command System spanning multiple initiatives
- Custom MCP server with OAuth 2.0
- Claude Desktop plugin with chained skills
- Human-in-the-loop approval gate for autonomous agents
- NFPA compliance agent live in production
- Proprietary fire protection estimating tool in development

**Public framing options:**
- "Nine-initiative AI Command System for a Canadian fire protection firm"
- "Custom MCP server, OAuth-secured, with five autonomous agents and HITL approval gates"
- "NFPA compliance intelligence agent live in production"

**Industry / sector:** Fire protection (industrial services)

**Featured offering:** Compliance Intelligence Agent (signature productized offering)

**Open question for any PRD that wants more detail:** Has Sprinklermatic explicitly approved publishing the specific deliverable list, the "nine-initiative" framing, or the EJ Capital parent company association? Surface this if a feature wants to publish more than the high-level framing above.

### RecirQ / Reventory

**Tracks engaged:** Enablement + Infrastructure

**What's live (publicly described at a high level):**
- Three parallel engagements
- Full Claude operations environment with MCP integrations (Slack, BigQuery, Google Drive, WhatsApp, Fireflies)
- WhatsApp Sales Command Center with semantic analysis feeding real-time BigQuery dashboard
- Citizen developer enablement with custom SDLC plugin
- Governed data marts

**Public framing options:**
- "WhatsApp Sales Command Center with Claude-powered semantic analysis"
- "Full Claude ops environment connected to Slack, BigQuery, Google Drive, WhatsApp, and Fireflies via MCP"
- "Citizen dev enablement with custom SDLC plugin deployed org-wide"

**Industry / sector:** Inventory / commerce intelligence

**Featured offering:** Data Intelligence Agent (signature productized offering)

**Open question for any PRD that wants more detail:** Has RecirQ approved publishing the parent company name (Reventory), the specific MCP integrations, or the "three parallel engagements" framing?

### Housing Services Corp.

**Tracks engaged:** Discovery + Data Readiness

**What's live (publicly described at a high level):**
- Data strategy and AI enablement roadmap delivered
- Recommendations for Claude-based agents (cross-program reporting, anomaly detection, workflow automation)
- Live pipeline opportunity as data foundation matures

**Public framing options:**
- "AI enablement roadmap for a Canadian housing services organization"
- "Data strategy delivered; Claude-based agent recommendations for reporting and anomaly detection"

**Industry / sector:** Public sector / housing

**Note on stage:** This is a Discovery + Data Readiness completion, not yet an Infrastructure deployment. Public framing should reflect that the *strategy* and *roadmap* are delivered, not that production agents are live. Don't overclaim.

**Open question for any PRD that wants more detail:** Has Housing Services Corp. approved being named publicly? Public sector clients often have specific approval processes for being referenced as a vendor's case study.

## How to use proof points in marketing copy

### As trust signals on the homepage / hero
- Show client logos or names in a "Trusted by" or "Active deployments" row
- Three names is fine — small enough to feel curated, large enough to feel real
- Don't label them "case studies" yet if there isn't a full case study page; "Active deployments" or "Trusted by" reads more honestly

### As featured offerings on Services / Tools pages
- Compliance Intelligence Agent → "Live at Sprinklermatic. NFPA compliance intelligence with citation-grade accuracy."
- Data Intelligence Agent → "Powering RecirQ's WhatsApp Sales Command Center."
- Executive Productivity Suite → "Deployed at Sprinklermatic / EJ Capital."

### As dedicated case study pages
If individual case study pages are built (e.g., `/case-studies/sprinklermatic/`), each one needs:
- Client confirmation of the specific narrative being published
- A clear scope statement (what was the problem, what was built, what's live)
- Quotation of any client testimonials only if explicitly approved
- Avoidance of internal financial / scoping details (engagement size, duration, fees) unless approved

Surface the client-approval question as an Open Question on every case study PRD. Don't ship one without it.

## What NOT to publish

### Specific financial details
- Engagement sizes ("we did $200K of work for X")
- Hours billed
- Margin or efficiency metrics
- Internal effort estimates from the reference doc

### Competitive intelligence
- Why a client picked Alphabyte over a named competitor
- What other vendors were considered
- Negative framings of past or current vendors the client used

### Unverified outcomes
- ROI claims without client-signed numbers ("delivered 3× ROI in six months")
- Adoption metrics without client confirmation
- Strategic wins the client hasn't publicly attributed to AI

### Sales-internal qualifiers
The reference doc uses some language for internal sales orientation that doesn't belong in marketing:
- "Highest-converting entry point" → translate to "fastest path to visible ROI"
- "Hero offer" → just describe what the offering does
- "Live pipeline opportunity" → don't quote at all (this is sales pipeline language)

## Updating proof points

This list is current as of v3.0 of the reference doc (April 2026). When new clients land or existing engagements expand:

1. The source-of-truth reference doc is updated
2. This file is regenerated against the new content
3. Any case study PRDs in flight are reviewed to see if new proof points apply
4. The site's case study index (if one exists) is updated with the new entry

Three proof points is a reasonable count for the marketing site's current stage. As more land, the index can grow — but a curated list of 5–8 well-described case studies is more compelling than a list of 20 thin ones. Quality over count.

## Red flags

- About to publish a specific financial figure tied to a client engagement
- About to credit a specific outcome that wasn't included in the reference doc's "what's live" framing
- About to publish a client testimonial without confirmation it was approved for public use
- About to use sales-internal language ("hero offer", "highest-converting") in case study copy
- About to overclaim a Discovery / Data Readiness completion as a full Infrastructure deployment
- About to name a parent company (EJ Capital, Reventory) without confirming that association is approved for marketing

If any appear in draft copy, surface as an Open Question in the PRD before shipping.
