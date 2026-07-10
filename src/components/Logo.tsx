import Image from "next/image";
import Link from "next/link";

// Official Jackson Group lockup (client-supplied files):
// color version on light surfaces, orange+white version in dark mode.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`block ${className}`} aria-label="Jackson Group — home">
      <Image
        src="/logos/jg-logo-color.png"
        alt="Jackson Group"
        width={1076}
        height={486}
        priority
        className="h-9 w-auto dark:hidden"
      />
      <Image
        src="/logos/jg-logo-orange-white.png"
        alt="Jackson Group"
        width={1078}
        height={486}
        priority
        className="hidden h-9 w-auto dark:block"
      />
    </Link>
  );
}
