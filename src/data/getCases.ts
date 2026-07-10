import cases from "../../content/cases.json";
import type { CaseStudy } from "@/data/caseStudies";

// Content source: content/cases.json, committed to the repo by the /admin
// portal. Every save triggers a Vercel rebuild, so pages stay fully static.

export async function getCases(): Promise<CaseStudy[]> {
  return cases as CaseStudy[];
}

export async function getCase(slug: string): Promise<CaseStudy | undefined> {
  return (cases as CaseStudy[]).find((c) => c.slug === slug);
}
