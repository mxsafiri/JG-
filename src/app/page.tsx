import Image from "next/image";
import Link from "next/link";
import { featuredCases } from "@/data/caseStudies";
import { clients } from "@/data/clients";
import { services, site, stats } from "@/data/site";
import CaseCard from "@/components/CaseCard";
import CtaBanner from "@/components/CtaBanner";
import Marquee from "@/components/anim/Marquee";
import MaskReveal from "@/components/anim/MaskReveal";
import Reveal from "@/components/anim/Reveal";
import { Stagger, StaggerItem } from "@/components/anim/Stagger";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

// Zoom-parallax showcase: real campaign assets first; branded placeholder
// tiles hold the remaining slots until the client sends more visuals
// (specs in IMAGE_SPECS.md).
const showcase = [
  { src: "/media/rumble-in-dar.jpeg", alt: "Rumble in Dar — boxing series created by Jackson Group" },
  { src: "/media/showmax-hatma.jpeg", alt: "HATMA on Showmax — Tanzania launch campaign" },
  { src: "/media/pigabet-shinda-ndinga.jpeg", alt: "PigaBet Shinda Ndinga campaign" },
  { src: "/media/yanga-unicef.jpeg", alt: "Yanga and UNICEF partnership unveiling" },
  { src: "/media/placeholders/absa-epl.svg", alt: "ABSA EPL matchday activations" },
  { src: "/media/10bet-dodoma.png", alt: "10bet Dodoma Jiji sponsorship campaign" },
  { src: "/media/placeholders/tamgo-rebrand.svg", alt: "TAMGO rebrand launch" },
];

export default function Home() {
  return (
    <>
      {/* Hero — charcoal-to-ember gradient with numbered services, per inspo */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <Stagger className="hidden md:block font-mono text-sm space-y-1.5" step={0.06}>
            {services.map((s, i) => (
              <StaggerItem key={s.n}>
                <Link
                  href="/about#services"
                  className={`transition-colors hover:text-white ${i === 0 ? "text-white" : "text-white/35"}`}
                >
                  <span className="mr-3">{s.n}</span>
                  {s.title}
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 md:mt-20 text-center">
            <h1 className="display text-[17vw] md:text-[9.5rem] lg:text-[11rem]">
              <MaskReveal delay={0.1}>Jackson</MaskReveal>
              <MaskReveal delay={0.22} className="md:ml-40">
                Group
              </MaskReveal>
            </h1>
            <Reveal delay={0.5} y={12}>
              <Link
                href="/contact"
                className="mt-8 inline-block font-mono text-sm underline underline-offset-8 hover:text-ink transition-colors"
              >
                Start a project
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.35} className="mt-16 md:mt-24 max-w-md">
            <p className="font-mono text-sm leading-relaxed text-white/90">
              {site.tagline}. We help brands enter markets, scale faster, and
              drive measurable impact across Africa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Merged intro section — one block, per the feedback document */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="label-mono">[Who we are]</span>
          </Reveal>
          <div>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl max-w-3xl">
              <MaskReveal>Independent. Boutique.</MaskReveal>
              <MaskReveal delay={0.12}>Africa-first.</MaskReveal>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-white/80 max-w-2xl leading-relaxed">
                We are a senior-led marketing and growth consultancy with over 20
                years of experience building brands across Africa. We work with a
                focused portfolio of clients — and when you work with us, you get
                our full attention.
              </p>
            </Reveal>
            <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <p className="display text-4xl md:text-5xl text-ember">{s.value}</p>
                  <p className="mt-2 font-mono text-xs text-ash">{s.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Featured work — zoom-parallax showcase, then the three tiles the
          client requested */}
      <section className="bg-coal border-y border-white/10">
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
                className="hidden sm:inline-block font-mono text-sm text-white/70 hover:text-ember transition-colors shrink-0"
              >
                All case studies →
              </Link>
            </Reveal>
          </div>
        </div>

        <ZoomParallax images={showcase} />

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
            className="sm:hidden mt-8 inline-block font-mono text-sm text-white/70 hover:text-ember transition-colors"
          >
            All case studies →
          </Link>
        </div>
      </section>

      {/* Services — ghosted list, active line lights up ember (inspo pattern) */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="label-mono">[What we do]</span>
          </Reveal>
          <Stagger step={0.1}>
            {services.map((s) => (
              <StaggerItem key={s.n}>
                <div className="group border-b border-white/10 py-7">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-ash">{s.n}</span>
                    <div>
                      <h3 className="display text-3xl sm:text-4xl md:text-5xl text-white/30 group-hover:text-ember group-hover:translate-x-2 transition-all duration-300">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm text-ash max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {s.blurb}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* The Company We Keep — borderless logo marquee on white */}
      <section className="bg-white text-ink">
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
