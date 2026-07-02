import type { Metadata } from "next";
import { clients } from "@/data/clients";
import LogoWall from "@/components/LogoWall";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Company We Keep",
  description:
    "Jackson Group works with leading brands across finance, telecoms, iGaming, government, and sports.",
};

export default function CompanyWeKeepPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <span className="label-mono">[The Company We Keep]</span>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl mt-4 max-w-4xl">
            The company we keep
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
            We work with leading brands across finance, telecoms, iGaming,
            government, and sports.
          </p>
        </div>
      </section>

      <section className="bg-white text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <LogoWall items={clients} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
