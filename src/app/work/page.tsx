import type { Metadata } from "next";
import { getCases } from "@/data/getCases";
import CaseCard from "@/components/CaseCard";
import CtaBanner from "@/components/CtaBanner";
import MaskReveal from "@/components/anim/MaskReveal";
import Reveal from "@/components/anim/Reveal";
import { Stagger, StaggerItem } from "@/components/anim/Stagger";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "22 client stories. Measurable impact across Africa. Case studies from Jackson Group.",
};

export default async function WorkPage() {
  const caseStudies = await getCases();
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <Reveal>
            <span className="label-mono">[Our Work]</span>
          </Reveal>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl mt-4 max-w-4xl">
            <MaskReveal delay={0.1}>Selected work.</MaskReveal>
            <MaskReveal delay={0.22}>Measurable impact across Africa.</MaskReveal>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-8 text-lg text-ink/70 max-w-2xl">
              A selection of the work — from market entries and rebrands to
              sports properties we built from scratch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f1efea] dark:bg-[#1a1918] border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" step={0.07}>
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.slug} className="h-full">
                <CaseCard cs={cs} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
