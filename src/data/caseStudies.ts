// Case-study content lives in content/cases.json — editable by Jackson
// Group through the /admin portal (saves commit to GitHub and auto-deploy).

export type CaseStudy = {
  slug: string;
  client: string;
  index: string; // display order, strategic work first
  tags: string[];
  region: string;
  summary: string;
  image?: string; // campaign asset in /public/media
  results?: string[]; // measurable outcomes
  featured?: boolean; // one of the three homepage tiles under the gallery
  showcase?: boolean; // appears as a panel in the homepage gallery
  galleryLabel?: string; // short line under the name in the gallery
};
