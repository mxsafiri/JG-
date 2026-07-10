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

## Content editing (CMS)

Case studies are editable by the client through Sanity (free tier), with the
editor embedded at **`/studio`**. Until Sanity is connected the site serves
the built-in content from `src/data/caseStudies.ts` — nothing breaks.

One-time setup (~10 minutes):

1. Create a project at [sanity.io](https://www.sanity.io/) (free plan) —
   note the **Project ID**, create a dataset named `production`
2. In Vercel → Project → Settings → Environment Variables, add
   `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project id (and optionally
   `NEXT_PUBLIC_SANITY_DATASET` = `production`), then redeploy
3. In [sanity.io/manage](https://www.sanity.io/manage) → API → CORS origins,
   add the site URL (e.g. `https://jg-one.vercel.app`) with credentials
4. Import the existing 11 case studies (repo root):
   `npx sanity dataset import sanity-seed.ndjson production --project <PROJECT_ID>`
5. Invite Jackson Group editors under Members (role: Editor)

The client then edits at `https://<site>/studio` — text, tags, results,
images, ordering, and homepage flags. Changes go live within a minute of
pressing Publish (ISR revalidate: 60s), no redeploy needed.

## Deploying

Push to Vercel (zero config) — or `npm run build && npm start` on any Node host.
