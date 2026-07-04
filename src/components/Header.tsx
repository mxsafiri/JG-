"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import Logo from "@/components/Logo";
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  // Hide on scroll down, reappear on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bone/95 backdrop-blur border-b border-ink/10 transition-transform duration-300 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
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
                    active ? "text-ember" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm text-ash hover:text-ink transition-colors"
            >
              {site.email}
            </a>
            <AnimatedThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <AnimatedThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center gap-1.5 h-10 w-10 items-center"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-ink ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-bone px-5 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-base text-ink hover:text-ember transition-colors"
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
