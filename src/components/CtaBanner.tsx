import Link from "next/link";
import MaskReveal from "@/components/anim/MaskReveal";
import Reveal from "@/components/anim/Reveal";

// The closing section requested in the client's feedback document:
// only "Let's Grow Your Business Together" + "Get in Touch".
export default function CtaBanner() {
  return (
    <section className="cta-gradient">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div>
          <h2 className="display text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            <MaskReveal>Let&rsquo;s Grow Your</MaskReveal>
            <MaskReveal delay={0.12}>Business Together</MaskReveal>
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Tell us about your goals and we&rsquo;ll help you achieve them.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.3} y={16}>
          <Link
            href="/contact"
            className="group shrink-0 inline-flex items-center gap-3 bg-ember text-white font-mono text-sm px-8 py-4 hover:bg-white hover:text-ink transition-colors duration-300"
          >
            Get in Touch{" "}
            <span aria-hidden className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
