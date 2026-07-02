import type { Metadata } from "next";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your goals and we'll help you achieve them. Get in touch with Jackson Group.",
};

export default function ContactPage() {
  return (
    <section className="cta-gradient min-h-[80vh]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid gap-16 lg:grid-cols-2">
        <div>
          <span className="label-mono">[Contact]</span>
          <h1 className="display text-5xl sm:text-6xl md:text-7xl mt-4">
            Let&rsquo;s grow your business together
          </h1>
          <p className="mt-8 text-lg text-white/80 max-w-md leading-relaxed">
            Tell us about your goals and we&rsquo;ll help you achieve them.
            Whether you are entering a new market, repositioning a brand, or
            looking to unlock growth — our team is ready to help.
          </p>

          <div className="mt-12 space-y-4 font-mono text-sm">
            <p>
              <span className="text-ash mr-3">[Email]</span>
              <a href={`mailto:${site.email}`} className="hover:text-ember transition-colors">
                {site.email}
              </a>
            </p>
            <p>
              <span className="text-ash mr-3">[Phone]</span>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ember transition-colors">
                {site.phone}
              </a>
            </p>
            <p>
              <span className="text-ash mr-3">[Office]</span>
              {site.address}
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
