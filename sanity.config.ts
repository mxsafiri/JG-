"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes/caseStudy";
import { projectId, dataset } from "./src/sanity/env";

export default defineConfig({
  name: "jackson-group",
  title: "Jackson Group — Website Content",
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
