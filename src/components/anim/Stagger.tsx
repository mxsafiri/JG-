"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Staggers direct children in as they scroll into view (grids, lists).
export function Stagger({
  children,
  className = "",
  step = 0.08,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      // amount must stay tiny: for tall containers (a one-column grid of 17
      // case cards on mobile) a 15% threshold can exceed the viewport height
      // and never fire, leaving every child invisible
      viewport={{ once: true, amount: 0.02 }}
      transition={{ staggerChildren: step }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
