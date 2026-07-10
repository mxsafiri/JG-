# Jackson Group — Website

New website for [Jackson Group](https://jacksongrouptz.com), a boutique Pan-African
marketing & growth consultancy based in Dar es Salaam, Tanzania.

Built with Next.js (App Router) + Tailwind CSS v4. Design direction follows the
approved inspiration (dark charcoal `#191917` / ember orange `#EF6A25`,
Instrument Sans + Anton + Space Mono) — see `JG web/Inspo/`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Contact details, nav, services, stats |
| `src/data/caseStudies.ts` | Case study copy (verbatim from the client's 2025 deck) |
| `src/data/clients.ts` | Logo wall entries |
| `src/app/` | Pages: Home, About Us, Our Work (+ per-case pages), The Company We Keep, Contact |
| `public/logos/` | 24 client logos (transparent PNG) |
| `public/media/` | Campaign assets supplied by the client |
| `JG web/` | Original client brief: feedback doc, inspiration, logos, content |

Navigation is exactly as requested in the client's feedback document:
**About Us · Our Work · The Company We Keep · Contact**.

## Awaiting from client

- [ ] Official Jackson Group logo files (SVG/PNG) — the wordmark is recreated
      typographically in `src/components/Logo.tsx` from the lockup the client
      shared; swap in the real file when available
- [x] Phone confirmed by client: +255 768 500 999
- [x] Address confirmed: Chole Plaza, 1st Floor, 26 Chole Rd, Dar es Salaam
- [ ] Email still from public listings (`src/data/site.ts`) — confirm
- [ ] Contact form fields to collect ("we will share the info to be collected")
- [ ] The remaining 10 of 22 case studies, if wanted on the site
- [ ] Photography per `IMAGE_SPECS.md`

## Content editing portal (/admin)

Jackson Group edits case studies at **`/admin`** — no third-party CMS, no
extra platform, no fees. Content lives in `content/cases.json`; the portal
commits edits (and uploaded images) straight to this repo via the GitHub
API, and Vercel redeploys automatically (~2 min to live).

They can edit: story text, tags, region, results ("the numbers"), the
campaign image, display order (↑↓), homepage tile/gallery flags, and add or
remove case studies.

One-time setup — two Vercel environment variables:

1. `ADMIN_PASSWORD` — the password you share with Jackson Group's editors
2. `GITHUB_TOKEN` — a fine-grained personal access token
   (github.com → Settings → Developer settings → Fine-grained tokens):
   Repository access = only this repo, Permissions → Contents =
   **Read and write**. Nothing else.

Optional: `GITHUB_REPO` (default `mxsafiri/JG-`), `GITHUB_BRANCH`
(default `main`). Redeploy after setting the variables, then share
`https://<site>/admin` and the password.

## Deploying

Push to Vercel (zero config) — or `npm run build && npm start` on any Node host.
