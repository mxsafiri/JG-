import type { Metadata } from "next";
import { services, site, stats } from "@/data/site";
import CtaBanner from "@/components/CtaBanner";
import MaskReveal from "@/components/anim/MaskReveal";
import Reveal from "@/components/anim/Reveal";
import { Stagger, StaggerItem } from "@/components/anim/Stagger";

export const metadata: Metadata = {
  title: "About Us",
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <Reveal>
            <span className="label-mono">[About Us]</span>
          </Reveal>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl mt-4 max-w-5xl">
            <MaskReveal delay={0.1}>Pan-African brand, marketing</MaskReveal>
            <MaskReveal delay={0.22}>&amp; growth consultancy</MaskReveal>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-8 text-lg text-ink/80 max-w-2xl leading-relaxed">
              {site.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f1efea] dark:bg-[#1a1918] border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="label-mono">[Independent. Boutique. Africa-first.]</span>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 text-lg text-ink/80 leading-relaxed max-w-2xl">
            <p>
              We are a senior-led marketing and growth consultancy with over 20
              years of experience building brands across Africa. We work with a
              focused portfolio of clients — and when you work with us, you get
              our full attention.
            </p>
            <p>
              From Dar es Salaam we have taken brands into nine African
              markets, built go-to-market playbooks for global entrants,
              rebranded market leaders, and created sporting properties of our
              own. Africa is not one market — and we plan, buy, and build like
              we know it.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-4xl text-ember">{s.value}</p>
                  <p className="mt-2 font-mono text-xs text-ash">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="label-mono">[What we do]</span>
          </Reveal>
          <Stagger step={0.1}>
            {services.map((s) => (
              <StaggerItem key={s.n} className="border-b border-ink/10 py-8">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-sm text-ash">{s.n}</span>
                  <div>
                    <h2 className="display text-3xl sm:text-4xl">{s.title}</h2>
                    <p className="mt-3 text-ink/70 max-w-xl leading-relaxed">{s.blurb}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
