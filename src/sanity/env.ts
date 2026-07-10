// Sanity connection settings. The site runs fine without them — it falls
// back to the built-in content in src/data/caseStudies.ts (see getCases.ts).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-07-01";
export const cmsEnabled = projectId.length > 0;
