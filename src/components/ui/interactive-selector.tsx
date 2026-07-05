"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Adapted from 21st.dev's InteractiveSelector:
// - typed, no react-icons (the icon bubble shows the case index instead),
//   no styled-jsx (entry stagger via state + inline transitions)
// - themed to the JG palette; active border is ember
// - horizontal accordion on md+, vertical stack on mobile (the original
//   demanded min-w 600px and broke on phones)
// - clicking the active panel navigates to its case study

export interface SelectorOption {
  title: string;
  description: string;
  image: string;
  index: string; // e.g. "14 / 22"
  href: string;
}

export function InteractiveSelector({ options }: { options: SelectorOption[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [entered, setEntered] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    const timers = options.map((_, i) =>
      setTimeout(() => setEntered((prev) => [...prev, i]), 140 * i),
    );
    return () => timers.forEach(clearTimeout);
  }, [options]);

  return (
    <div className="flex flex-col md:flex-row w-full h-[560px] md:h-[440px] items-stretch overflow-hidden">
      {options.map((option, index) => {
        const active = activeIndex === index;
        return (
          <div
            key={option.href}
            role="button"
            tabIndex={0}
            aria-expanded={active}
            aria-label={`${option.title} — ${active ? "open case study" : "expand"}`}
            onClick={() => (active ? router.push(option.href) : setActiveIndex(index))}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (active) router.push(option.href);
                else setActiveIndex(index);
              }
            }}
            className={`group relative flex flex-col justify-end overflow-hidden cursor-pointer border transition-all duration-700 ease-in-out ${
              active ? "border-ember" : "border-ink/10 hover:border-ink/30"
            }`}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#18181b",
              opacity: entered.includes(index) ? 1 : 0,
              transform: entered.includes(index) ? "translateX(0)" : "translateX(-60px)",
              flex: active ? "7 1 0%" : "1 1 0%",
              zIndex: active ? 10 : 1,
              minHeight: "56px",
              minWidth: "56px",
              willChange: "flex, box-shadow",
              boxShadow: active
                ? "0 20px 60px rgba(15,15,14,0.35)"
                : "0 10px 30px rgba(15,15,14,0.15)",
            }}
          >
            {/* legibility gradient over the lower edge */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 transition-opacity duration-700"
              style={{
                background: "linear-gradient(to top, rgba(10,10,9,0.85), rgba(10,10,9,0))",
                opacity: active ? 1 : 0.55,
              }}
            />

            <div className="relative z-10 flex items-center gap-3 p-4 md:p-5">
              <div className="flex h-11 min-w-11 items-center justify-center rounded-full border border-white/25 bg-[rgba(20,20,19,0.75)] px-2 backdrop-blur">
                <span className="font-mono text-[10px] text-white whitespace-nowrap">
                  {option.index}
                </span>
              </div>
              <div
                className="text-white transition-all duration-700 ease-in-out"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateX(0)" : "translateX(25px)",
                }}
              >
                <p className="display text-xl md:text-2xl leading-tight whitespace-nowrap">
                  {option.title}
                </p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-white/70 whitespace-nowrap">
                  {option.description}
                  <span className="ml-2 text-ember">View case →</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
