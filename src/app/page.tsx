import Image from "next/image";
import Link from "next/link";
import { featuredCases } from "@/data/caseStudies";
import { clients } from "@/data/clients";
import { services, site, stats } from "@/data/site";
import CaseCard from "@/components/CaseCard";
import CtaBanner from "@/components/CtaBanner";
import ServicesScroll from "@/components/ServicesScroll";
import Marquee from "@/components/anim/Marquee";
import MaskReveal from "@/components/anim/MaskReveal";
import Reveal from "@/components/anim/Reveal";
import { Stagger, StaggerItem } from "@/components/anim/Stagger";
import { InteractiveSelector } from "@/components/ui/interactive-selector";

// Expanding-panel showcase: real campaign assets where supplied; branded
// placeholder tiles hold the rest until the client sends more visuals
// (specs in IMAGE_SPECS.md).
const showcase = [
  { title: "Rumble in Dar", description: "Sports IP · Boxing", image: "/media/rumble-in-dar.jpeg", index: "14 / 22", href: "/work/rumble-in-dar" },
  { title: "Showmax", description: "Market entry", image: "/media/showmax-hatma.jpeg", index: "04 / 22", href: "/work/showmax" },
  { title: "PigaBet", description: "360 marketing", image: "/media/pigabet-shinda-ndinga.jpeg", index: "22 / 22", href: "/work/pigabet" },
  { title: "Yanga × UNICEF", description: "Behaviour change", image: "/media/yanga-unicef.jpeg", index: "13 / 22", href: "/work/yanga" },
  { title: "ABSA Bank", description: "EPL activation", image: "/media/placeholders/absa-epl.svg", index: "05 / 22", href: "/work/absa-bank" },
  { title: "10bet Africa", description: "Pan-African GTM", image: "/media/10bet-dodoma.png", index: "11 / 22", href: "/work/10bet-africa" },
  { title: "TAMGO", description: "Rebrand · PR", image: "/media/placeholders/tamgo-rebrand.svg", index: "18 / 22", href: "/work/tamgo-tanzania" },
];

export default function Home() {
  return (
    <>
      {/* Hero — light greyscale canvas with the client's B&W Dar es Salaam
          skyline ghosted into the background */}
      <section className="hero-gradient relative overflow-hidden">
        <Image
          src="/media/dar-es-salaam-sobecki-01.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Keep the left text zone readable, let the skyline emerge on the
            right; light veils top (nav) and bottom (stats) */}
        <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-bone/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-bone/35 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-16 md:pt-36 md:pb-20">
          <Reveal>
            <span className="label-mono">
              [{site.tagline}]
            </span>
          </Reveal>

          <h1 className="[font-family:var(--font-archivo)] font-thin uppercase leading-[1.04] tracking-[0.02em] text-5xl sm:text-7xl md:text-8xl mt-8 max-w-5xl">
            <MaskReveal delay={0.1}>Independent.</MaskReveal>
            <MaskReveal delay={0.2}>Boutique.</MaskReveal>
            <MaskReveal delay={0.3}>Africa-first.</MaskReveal>
          </h1>

          <Reveal delay={0.45}>
            <p className="mt-8 text-lg text-ink/80 max-w-2xl leading-relaxed">
              We are a senior-led marketing and growth consultancy with over 20
              years of experience building brands across Africa. We work with a
              focused portfolio of clients — and when you work with us, you get
              our full attention.
            </p>
          </Reveal>

          <Reveal delay={0.55} y={16}>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-3 bg-ember text-white font-mono text-sm px-8 py-4 hover:bg-ink hover:text-white transition-colors duration-300"
            >
              Start a project{" "}
              <span aria-hidden className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </Reveal>

          <Stagger className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-ink/15">
            {stats.map((s, i) => (
              <StaggerItem
                key={s.label}
                className={`pt-6 pb-2 pr-6 ${i > 0 ? "md:border-l md:border-ink/15 md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-ink/15 pl-6 md:pl-8" : ""}`}
              >
                <p className="display text-4xl md:text-5xl text-ember">{s.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-ink/70 whitespace-nowrap">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured work — zoom-parallax showcase, then the three tiles the
          client requested */}
      <section className="border-y border-ink/10 bg-[#f1efea] dark:bg-[#1a1918]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-24 md:pt-32">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Reveal>
                <span className="label-mono">[Our Work]</span>
              </Reveal>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl mt-4">
                <MaskReveal>Work that moves markets</MaskReveal>
              </h2>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/work"
                className="hidden sm:inline-block font-mono text-sm text-ink/60 hover:text-ember transition-colors shrink-0"
              >
                All case studies →
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-12">
          <InteractiveSelector options={showcase} />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-24 md:pb-32">
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3" step={0.12}>
            {featuredCases.map((cs) => (
              <StaggerItem key={cs.slug} className="h-full">
                <CaseCard cs={cs} />
              </StaggerItem>
            ))}
          </Stagger>

          <Link
            href="/work"
            className="sm:hidden mt-8 inline-block font-mono text-sm text-ink/60 hover:text-ember transition-colors"
          >
            All case studies →
          </Link>
        </div>
      </section>

      {/* Services — scroll-driven: each line inks in with ember as it
          travels up the viewport */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="label-mono">[What we do]</span>
          </Reveal>
          <ServicesScroll services={services} />
        </div>
      </section>

      {/* The Company We Keep — borderless logo marquee, white in both themes */}
      <section className="bg-white theme-light border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-24 md:pt-32 pb-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Reveal>
                <span className="label-mono">[The Company We Keep]</span>
              </Reveal>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl mt-4 text-ink">
                <MaskReveal>Trusted across industries</MaskReveal>
              </h2>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/company-we-keep"
                className="hidden sm:inline-block font-mono text-sm text-ash hover:text-ember transition-colors shrink-0"
              >
                See them all →
              </Link>
            </Reveal>
          </div>
        </div>
        <Reveal y={20} className="pb-24 md:pb-32">
          <Marquee className="py-6">
            {clients.map((c) => (
              <Image
                key={c.name}
                src={c.logo}
                alt={c.name}
                width={240}
                height={240}
                className={`h-12 md:h-14 w-auto max-w-[150px] object-contain ${
                  c.light ? "[filter:invert(1)_hue-rotate(180deg)]" : ""
                }`}
              />
            ))}
          </Marquee>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
