import { createClient } from "next-sanity";
import { caseStudies as fallback, type CaseStudy } from "@/data/caseStudies";
import { projectId, dataset, apiVersion, cmsEnabled } from "@/sanity/env";

// Single source of truth for case-study content.
// With Sanity connected (env vars set) content comes from the CMS and
// updates within a minute of publishing — no redeploy needed.
// Without it, the built-in content ships, so the site never breaks.

const client = cmsEnabled
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const QUERY = `*[_type == "caseStudy"] | order(order asc){
  client,
  "slug": slug.current,
  order,
  tags,
  region,
  summary,
  results,
  "image": image.asset->url,
  featured,
  showcase,
  galleryLabel
}`;

type SanityCase = {
  client: string;
  slug: string;
  order: number;
  tags?: string[];
  region?: string;
  summary: string;
  results?: string[];
  image?: string;
  featured?: boolean;
  showcase?: boolean;
  galleryLabel?: string;
};

export async function getCases(): Promise<CaseStudy[]> {
  if (client) {
    try {
      const rows = await client.fetch<SanityCase[]>(QUERY);
      if (rows?.length) {
        return rows.map((r, i) => ({
          slug: r.slug,
          client: r.client,
          index: String(i + 1).padStart(2, "0"),
          tags: r.tags ?? [],
          region: r.region ?? "",
          summary: r.summary,
          results: r.results,
          image: r.image,
          featured: r.featured,
          showcase: r.showcase,
          galleryLabel: r.galleryLabel,
        }));
      }
    } catch {
      // CMS unreachable — serve the built-in content rather than a broken page
    }
  }
  return fallback;
}

export async function getCase(slug: string): Promise<CaseStudy | undefined> {
  const all = await getCases();
  return all.find((c) => c.slug === slug);
}
