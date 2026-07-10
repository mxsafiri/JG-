import { defineField, defineType } from "sanity";

// The "Business Case" content type — everything Jackson Group can edit
// themselves: text, tags, results, and the campaign image.
export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client / Project name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "client" },
      validation: (r) => r.required(),
      description: "Becomes the page address, e.g. /work/absa-bank",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first. Strategic work first, sports last.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Media Buying · Brand Strategy",
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      description: "e.g. Tanzania, 9 Markets, East Africa",
    }),
    defineField({
      name: "summary",
      title: "Story",
      type: "text",
      rows: 6,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "results",
      title: "The numbers (results)",
      type: "array",
      of: [{ type: "string" }],
      description: "Measurable outcomes, one per line",
    }),
    defineField({
      name: "image",
      title: "Campaign image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage (tile)",
      type: "boolean",
      initialValue: false,
      description: "Shown as one of the three tiles under the gallery",
    }),
    defineField({
      name: "showcase",
      title: "Show in homepage gallery",
      type: "boolean",
      initialValue: false,
      description: "Appears as a panel in the expanding gallery",
    }),
    defineField({
      name: "galleryLabel",
      title: "Gallery label",
      type: "string",
      description: "Short line under the name in the gallery, e.g. 'Fintech · 360 marketing'",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "client", subtitle: "region", media: "image" },
  },
});

export const schemaTypes = [caseStudy];
