import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCase } from "@/data/caseStudies";
import CtaBanner from "@/components/CtaBanner";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCase(slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — Case Study`,
    description: cs.summary.slice(0, 155),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCase(slug);
  if (!cs) notFound();

  const i = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex items-center gap-4 font-mono text-sm text-ash">
            <Link href="/work" className="hover:text-ember transition-colors">
              ← Our Work
            </Link>
            <span>{cs.index}</span>
          </div>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl mt-6">{cs.client}</h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-ember">
            {cs.tags.join(" · ")} · {cs.region}
          </p>
        </div>
      </section>

      <section className="bg-coal border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <span className="label-mono">[The story]</span>
          <div>
            <p className="text-xl md:text-2xl text-white/85 leading-relaxed max-w-3xl">
              {cs.summary}
            </p>
            {cs.image && (
              <div className="mt-14 relative max-w-2xl">
                <Image
                  src={cs.image}
                  alt={`${cs.client} campaign creative`}
                  width={1350}
                  height={1688}
                  className="w-full h-auto"
                />
                <p className="mt-3 font-mono text-xs text-ash">[Campaign creative — {cs.client}]</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-ink border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex justify-between font-mono text-sm">
          <Link href={`/work/${prev.slug}`} className="text-white/70 hover:text-ember transition-colors">
            ← {prev.client}
          </Link>
          <Link href={`/work/${next.slug}`} className="text-white/70 hover:text-ember transition-colors text-right">
            {next.client} →
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
