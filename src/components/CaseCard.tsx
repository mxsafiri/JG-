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
      className="group relative flex h-full flex-col justify-between overflow-hidden bg-white border border-ink/10 hover:border-ember transition-colors duration-300 min-h-72 p-6"
    >
      {cs.image && (
        <>
          <Image
            src={cs.image}
            alt={cs.client}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </>
      )}

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs text-ash">{cs.index}</span>
        <span
          aria-hidden
          className="font-mono text-sm text-ember opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        >
          →
        </span>
      </div>

      <div className="relative mt-16">
        <h3 className="display text-2xl sm:text-3xl group-hover:text-ember transition-colors duration-300">
          {cs.client}
        </h3>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ash leading-relaxed">
          {cs.tags.join(" · ")} · {cs.region}
        </p>
      </div>
    </Link>
  );
}
