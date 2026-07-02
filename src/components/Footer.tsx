import Link from "next/link";
import { nav, site } from "@/data/site";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-ash max-w-xs leading-relaxed">
              {site.tagline}. Based in Dar es Salaam, working across Africa.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="label-mono">[Navigate]</span>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-ember transition-colors w-fit"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="label-mono">[Contact]</span>
            <a href={`mailto:${site.email}`} className="text-sm text-white/80 hover:text-ember transition-colors w-fit">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm text-white/80 hover:text-ember transition-colors w-fit">
              {site.phone}
            </a>
            <p className="text-sm text-ash">{site.address}</p>
            <div className="flex gap-4 mt-1">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-ash hover:text-ember transition-colors">
                Facebook
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-ash hover:text-ember transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-mono text-xs text-ash">
            © {new Date().getFullYear()} Jackson Group. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ash">Making every move count.</p>
        </div>
      </div>
    </footer>
  );
}
