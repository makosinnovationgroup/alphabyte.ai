# alphabyte.ai

Marketing website for Alphabyte's AI consulting practice.

## Stack

- **Next.js 14** (App Router, `src/app/`)
- **TypeScript** (strict)
- **Tailwind CSS** — `tailwind.config.ts` is the single source of truth for brand tokens (colour, type scale, tracking, gradient) derived from the Alphabyte Brand Standards Manual v1.0
- **Radix UI** primitives wrapped in `src/components/ui/`
- **clsx + tailwind-merge** via the `cn()` helper in `src/lib/utils.ts`
- **class-variance-authority** for variant-based components (see `button.tsx`)
- **pnpm**

## Getting started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + font scaffold
│   ├── page.tsx            # Landing page
│   └── globals.css         # Tailwind directives + base layer
├── components/
│   └── ui/                 # Radix primitives wrapped with brand styling
│       ├── button.tsx
│       ├── dialog.tsx
│       └── index.ts
└── lib/
    └── utils.ts            # cn() — clsx + tailwind-merge
```

## Design tokens

All brand tokens live in **`tailwind.config.ts`**. Use the tokens via
Tailwind utilities rather than hardcoding hex values or pixel sizes.

| Token | Utility | Value |
| --- | --- | --- |
| Alphabyte Blue (primary) | `bg-alphabyte-blue` / `text-alphabyte-blue` | `#00abf0` |
| Analytical Grey | `bg-alphabyte-grey` | `#ebebeb` |
| Code Green | `bg-alphabyte-green` | `#00ffa6` |
| Brand ink (text) | `text-brand-ink` | `#000000` |
| Header type | `text-display` | clamp, -0.02em tracking |
| Sub-header | `text-headline` | clamp, -0.01em tracking |
| Body | `text-body` / `text-body-sm` | — |
| Pull quote | `text-quote` | +0.01em tracking |
| Brand gradient | `bg-alphabyte-gradient` / `bg-alphabyte-gradient-linear` | 3–4 colour blend |

## Typography — Aeonik

Aeonik is a **licensed font** from Cotype Foundry. Purchase licences at
<https://cotypefoundry.com/our-fonts/aeonik/> and drop the `.woff2` files
into `public/fonts/` — see `public/fonts/README.md`. Then uncomment the
`next/font/local` block in `src/app/layout.tsx`.

Until Aeonik is installed, the site falls back to Arial, which matches
the brand guide's System Font spec (§4.0).

## Adding new Radix primitives

Follow the pattern in `src/components/ui/dialog.tsx`:

1. `import * as Primitive from "@radix-ui/react-foo"`.
2. Re-export unstyled parts (`Root`, `Trigger`, `Portal`, `Close`) directly.
3. Wrap styled parts (`Content`, `Overlay`, etc.) with `React.forwardRef`
   and pass `className` through `cn()` so consumers can still override.
4. Use brand tokens (`alphabyte-blue`, `tracking-brand-snug`, etc.) —
   never raw hex or arbitrary values.

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Run the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run `tsc --noEmit` |

## Deployment

Target: **Cloudflare Pages** (DNS for `alphabyte.ai` is already managed by
Cloudflare). Connect this repo to a Pages project and Cloudflare will
auto-provision the DNS records for the custom domain.
