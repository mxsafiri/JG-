import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

// Typographic-first tiles: the client rejected generic stock imagery on the
// draft site, so tiles without a real campaign asset stay type-led, and real
// assets (PigaBet, Rumble in Dar) render as the tile background.
export default function CaseCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/work/${cs.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden bg-coal border border-white/10 hover:border-ember transition-colors min-h-72 p-6"
    >
      {cs.image && (
        <>
          <Image
            src={cs.image}
            alt={cs.client}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-40 group-hover:opacity-25 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/40 to-transparent" />
        </>
      )}

      <span className="relative font-mono text-xs text-ash">{cs.index}</span>

      <div className="relative mt-16">
        <h3 className="display text-2xl sm:text-3xl group-hover:text-ember transition-colors">
          {cs.client}
        </h3>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ash leading-relaxed">
          {cs.tags.join(" · ")} · {cs.region}
        </p>
      </div>
    </Link>
  );
}
