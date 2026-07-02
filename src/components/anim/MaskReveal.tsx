"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

// Editorial masked text reveal: the line slides up from behind an invisible
// ledge (overflow-hidden), à la Bureau Alexandra Jubé.
// Visibility is observed on the OUTER wrapper — the inner span starts fully
// clipped, so observing it directly would never trigger.
export default function MaskReveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount: 0.5 });
  const reduce = useReducedMotion();

  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={reduce || inView ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
