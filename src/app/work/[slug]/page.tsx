import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCases, getCase } from "@/data/getCases";
import CtaBanner from "@/components/CtaBanner";
import MaskReveal from "@/components/anim/MaskReveal";
import Reveal from "@/components/anim/Reveal";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const cases = await getCases();
  return cases.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCase(slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — Case Study`,
    description: cs.summary.slice(0, 155),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudies = await getCases();
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const i = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <Reveal>
            <div className="flex items-center gap-4 font-mono text-sm text-ash">
              <Link href="/work" className="hover:text-ember transition-colors">
                ← Our Work
              </Link>
              <span>{cs.index}</span>
            </div>
          </Reveal>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl mt-6">
            <MaskReveal delay={0.1}>{cs.client}</MaskReveal>
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-6 font-mono text-xs uppercase tracking-wide text-ember">
              {cs.tags.join(" · ")} · {cs.region}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f1efea] dark:bg-[#1a1918] border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="label-mono">[The story]</span>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-ink/85 leading-relaxed max-w-3xl">
                {cs.summary}
              </p>
            </Reveal>
            {cs.results && (
              <Reveal delay={0.15} className="mt-12">
                <span className="label-mono">[The numbers]</span>
                <ul className="mt-5 max-w-2xl space-y-0">
                  {cs.results.map((r) => (
                    <li key={r} className="flex gap-4 border-b border-ink/10 py-3.5">
                      <span aria-hidden className="text-ember shrink-0">→</span>
                      <span className="text-ink/85">{r}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {cs.image && (
              <Reveal y={48} className="mt-14 relative max-w-2xl">
                <Image
                  src={cs.image}
                  alt={`${cs.client} campaign creative`}
                  width={1350}
                  height={1688}
                  className="w-full h-auto"
                />
                <p className="mt-3 font-mono text-xs text-ash">[Campaign creative — {cs.client}]</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex justify-between font-mono text-sm">
          <Link href={`/work/${prev.slug}`} className="text-ink/60 hover:text-ember transition-colors">
            ← {prev.client}
          </Link>
          <Link href={`/work/${next.slug}`} className="text-ink/60 hover:text-ember transition-colors text-right">
            {next.client} →
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
