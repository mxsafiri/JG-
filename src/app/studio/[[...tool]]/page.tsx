"use client";

// Embedded Sanity Studio — Jackson Group's editing interface, at /studio.
// Renders a setup notice until the Sanity project is connected via env vars.

import dynamic from "next/dynamic";
import config from "../../../../sanity.config";
import { cmsEnabled } from "@/sanity/env";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false },
);

export default function StudioPage() {
  if (!cmsEnabled) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24">
        <span className="label-mono">[Studio]</span>
        <h1 className="display text-4xl mt-4">CMS not connected yet</h1>
        <p className="mt-6 text-ink/80 leading-relaxed">
          Set <code className="font-mono text-ember">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
          (and optionally <code className="font-mono text-ember">NEXT_PUBLIC_SANITY_DATASET</code>)
          in the environment, then redeploy. Full setup steps are in the README
          under &ldquo;Content editing (CMS)&rdquo;.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
