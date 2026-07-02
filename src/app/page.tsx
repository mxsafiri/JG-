import Link from "next/link";
import { featuredCases } from "@/data/caseStudies";
import { clients } from "@/data/clients";
import { services, site, stats } from "@/data/site";
import CaseCard from "@/components/CaseCard";
import CtaBanner from "@/components/CtaBanner";
import LogoWall from "@/components/LogoWall";

export default function Home() {
  return (
    <>
      {/* Hero — charcoal-to-ember gradient with numbered services, per inspo */}
      <section className="hero-gradient">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <ol className="hidden md:block font-mono text-sm space-y-1.5">
            {services.map((s, i) => (
              <li key={s.n}>
                <Link
                  href="/about#services"
                  className={`transition-colors hover:text-white ${i === 0 ? "text-white" : "text-white/35"}`}
                >
                  <span className="mr-3">{s.n}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-10 md:mt-20 text-center">
            <h1 className="display text-[17vw] md:text-[9.5rem] lg:text-[11rem]">
              Jackson
              <br />
              <span className="md:ml-40">Group</span>
            </h1>
            <Link
              href="/contact"
              className="mt-8 inline-block font-mono text-sm underline underline-offset-8 hover:text-ink transition-colors"
            >
              Start a project
            </Link>
          </div>

          <div className="mt-16 md:mt-24 max-w-md">
            <p className="font-mono text-sm leading-relaxed text-white/90">
              {site.tagline}. We help brands enter markets, scale faster, and
              drive measurable impact across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Merged intro section — one block, per the feedback document */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <span className="label-mono">[Who we are]</span>
          <div>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl max-w-3xl">
              Independent. Boutique. Africa-first.
            </h2>
            <p className="mt-8 text-lg text-white/80 max-w-2xl leading-relaxed">
              We are a senior-led marketing and growth consultancy with over 20
              years of experience building brands across Africa. We work with a
              focused portfolio of clients — and when you work with us, you get
              our full attention.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-4xl md:text-5xl text-ember">{s.value}</p>
                  <p className="mt-2 font-mono text-xs text-ash">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured work — exactly the three tiles the client requested */}
      <section className="bg-coal border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="label-mono">[Our Work]</span>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl mt-4">
                Work that moves markets
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden sm:inline-block font-mono text-sm text-white/70 hover:text-ember transition-colors shrink-0"
            >
              All case studies →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredCases.map((cs) => (
              <CaseCard key={cs.slug} cs={cs} />
            ))}
          </div>

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
          <span className="label-mono">[What we do]</span>
          <ul>
            {services.map((s) => (
              <li key={s.n} className="group border-b border-white/10 py-7">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-sm text-ash">{s.n}</span>
                  <div>
                    <h3 className="display text-3xl sm:text-4xl md:text-5xl text-white/30 group-hover:text-ember transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-ash max-w-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Company We Keep — borderless logos on white */}
      <section className="bg-white text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div>
              <span className="label-mono">[The Company We Keep]</span>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl mt-4 text-ink">
                Trusted across industries
              </h2>
            </div>
            <Link
              href="/company-we-keep"
              className="hidden sm:inline-block font-mono text-sm text-ash hover:text-ember transition-colors shrink-0"
            >
              See them all →
            </Link>
          </div>
          <LogoWall items={clients.slice(0, 12)} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
