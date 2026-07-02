import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseCard from "@/components/CaseCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "22 client stories. Measurable impact across Africa. Case studies from Jackson Group.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <span className="label-mono">[Our Work]</span>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl mt-4 max-w-4xl">
            22 client stories. Measurable impact across Africa.
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl">
            A selection of the work — from market entries and rebrands to
            sports properties we built from scratch.
          </p>
        </div>
      </section>

      <section className="bg-coal border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
