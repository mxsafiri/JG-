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
- [ ] Email/address still from public listings (`src/data/site.ts`) — confirm
- [ ] Contact form fields to collect ("we will share the info to be collected")
- [ ] The remaining 10 of 22 case studies, if wanted on the site
- [ ] Photography per `IMAGE_SPECS.md`

## Deploying

Push to Vercel (zero config) — or `npm run build && npm start` on any Node host.
