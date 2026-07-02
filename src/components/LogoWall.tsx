import Image from "next/image";
import type { Client } from "@/data/clients";

// Borderless logo grid on white, exactly as the feedback document asked
// ("remove the borders on the logos").
export default function LogoWall({ items }: { items: Client[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
      {items.map((c) => (
        <div key={c.name} className="flex h-24 items-center justify-center" title={c.name}>
          <Image
            src={c.logo}
            alt={c.name}
            width={320}
            height={320}
            className={`max-h-16 w-auto max-w-[160px] object-contain ${
              c.light ? "[filter:invert(1)_hue-rotate(180deg)]" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}
