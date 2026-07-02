import Link from "next/link";

// The closing section requested in the client's feedback document:
// only "Let's Grow Your Business Together" + "Get in Touch".
export default function CtaBanner() {
  return (
    <section className="cta-gradient">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-32 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div>
          <h2 className="display text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            Let&rsquo;s Grow Your Business Together
          </h2>
          <p className="mt-5 text-white/80 text-lg max-w-xl">
            Tell us about your goals and we&rsquo;ll help you achieve them.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-3 bg-ember text-white font-mono text-sm px-8 py-4 hover:bg-white hover:text-ink transition-colors"
        >
          Get in Touch <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
