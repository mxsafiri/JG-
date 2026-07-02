"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const active =
                item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-sm transition-colors hover:text-ember ${
                    active ? "text-ember" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={`mailto:${site.email}`}
            className="hidden lg:block font-mono text-sm text-ash hover:text-white transition-colors"
          >
            {site.email}
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center gap-1.5 h-10 w-10 items-center"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-white ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-ink px-5 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-base text-white hover:text-ember transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="font-mono text-sm text-ash">
            {site.email}
          </a>
        </nav>
      )}
    </header>
  );
}
