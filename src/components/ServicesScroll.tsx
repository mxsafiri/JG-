"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

// Scroll-driven services list: each headline starts ghosted, then fills
// left-to-right with ember→white as the row travels up the viewport
// (background-clip:text over the ghost color). The number ignites and the
// blurb fades in as the fill completes. Progress is tied to scroll position,
// so scrubbing back and forth "un-inks" the lines — feels alive with Lenis.

type Service = { n: string; title: string; blurb: string };

function Row({ s }: { s: Service }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // starts filling when the row enters the lower quarter of the screen,
    // completes just above the middle
    offset: ["start 0.92", "start 0.42"],
  });

  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"],
  );
  const x = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const blurbOpacity = useTransform(scrollYProgress, [0.65, 1], [0, 1]);
  const blurbY = useTransform(scrollYProgress, [0.65, 1], [8, 0]);
  const numColor = useTransform(
    scrollYProgress,
    [0.75, 1],
    ["#535351", "#ef6a25"],
  );

  return (
    <li ref={ref} className="border-b border-white/10 py-7">
      <div className="flex items-baseline gap-6">
        <motion.span
          className="font-mono text-sm"
          style={reduce ? { color: "#ef6a25" } : { color: numColor }}
        >
          {s.n}
        </motion.span>
        <div>
          <motion.h3
            className="display text-3xl sm:text-4xl md:text-5xl w-fit text-white/15 bg-no-repeat [background-image:linear-gradient(90deg,var(--color-ember)_0%,var(--color-ember)_55%,#ffffff_100%)]"
            style={
              reduce
                ? { color: "#ffffff" }
                : {
                    backgroundSize,
                    x,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }
            }
          >
            {s.title}
          </motion.h3>
          <motion.p
            className="mt-3 text-sm text-ash max-w-xl"
            style={reduce ? undefined : { opacity: blurbOpacity, y: blurbY }}
          >
            {s.blurb}
          </motion.p>
        </div>
      </div>
    </li>
  );
}

export default function ServicesScroll({ services }: { services: Service[] }) {
  return (
    <ul>
      {services.map((s) => (
        <Row key={s.n} s={s} />
      ))}
    </ul>
  );
}
