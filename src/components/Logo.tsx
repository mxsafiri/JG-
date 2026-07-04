import Link from "next/link";

// Wordmark recreated from the official lockup the client shared: geometric
// sans (Century Gothic-style — Questrial), orange JACKSON, white GROUP on
// dark. Swap for the official SVG file if/when supplied.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`text-xl tracking-[0.04em] [font-family:var(--font-questrial)] ${className}`}
      aria-label="Jackson Group — home"
    >
      <span className="text-ember">JACKSON</span>
      <span className="text-white">GROUP</span>
    </Link>
  );
}
