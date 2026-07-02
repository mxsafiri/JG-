import Image from "next/image";
import type { Client } from "@/data/clients";
import { Stagger, StaggerItem } from "@/components/anim/Stagger";

// Borderless logo grid on white, exactly as the feedback document asked
// ("remove the borders on the logos"). Logos stagger in on scroll.
export default function LogoWall({ items }: { items: Client[] }) {
  return (
    <Stagger
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10"
      step={0.04}
    >
      {items.map((c) => (
        <StaggerItem key={c.name} className="flex h-24 items-center justify-center">
          <Image
            src={c.logo}
            alt={c.name}
            width={320}
            height={320}
            title={c.name}
            className={`max-h-16 w-auto max-w-[160px] object-contain ${
              c.light ? "[filter:invert(1)_hue-rotate(180deg)]" : ""
            }`}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
