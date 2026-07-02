import Link from "next/link";

// Text-based wordmark matching the current brand lockup (orange JACKSON,
// white GROUP). Swap in the official SVG/PNG when the client supplies it —
// see README: "Awaiting from client".
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-mono text-lg font-bold tracking-tight ${className}`}
      aria-label="Jackson Group — home"
    >
      <span className="text-ember">JACKSON</span>
      <span className="text-white">GROUP</span>
    </Link>
  );
}
