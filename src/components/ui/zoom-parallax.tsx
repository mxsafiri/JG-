"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

// Adapted from 21st.dev's ZoomParallax:
// - motion/react instead of framer-motion (same API, already a dependency)
// - Lenis smooth scroll comes from the global <SmoothScroll/>, not re-inited here
// - per-image layout is a typed array instead of Tailwind v3 `!important`
//   arbitrary variants, which don't parse under Tailwind v4

interface ParallaxImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Up to 7 images; the first sits center stage and zooms slowest. */
  images: ParallaxImage[];
}

// Offsets of each satellite tile from the centered default slot.
const layouts: Array<React.CSSProperties | undefined> = [
  undefined, // 0: center stage
  { top: "-30vh", left: "5vw", height: "30vh", width: "35vw" },
  { top: "-10vh", left: "-25vw", height: "45vh", width: "20vw" },
  { top: "0vh", left: "27.5vw", height: "25vh", width: "25vw" },
  { top: "27.5vh", left: "5vw", height: "25vh", width: "20vw" },
  { top: "27.5vh", left: "-22.5vw", height: "25vh", width: "30vw" },
  { top: "22.5vh", left: "25vw", height: "15vh", width: "15vw" },
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div
                className="relative h-[25vh] w-[25vw]"
                style={layouts[index]}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt ?? `Work showcase ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
