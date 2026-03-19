"use client";

import Image from "next/image";

export default function HeroChai() {
  return (
    <div className="relative flex h-[520px] items-center justify-center">
      {/* Plate – responsive and larger */}
      <div className="plate relative z-10 drop-shadow-[0_14px_28px_rgba(0,0,0,0.18)]">
        <Image
          src="/assests/Hero-plate.png" // ✅ fixed path
          alt="Chai plate with spices"
          width={1200}
          height={500}
          className="select-none w-[90vw] max-w-[1000px] h-auto"
          priority
        />
      </div>

      {/* Kulhad – animated only */}
      <div
        className="chai absolute z-20 left-1/2 -translate-x-1/2 drop-shadow-[0_28px_60px_rgba(0,0,0,0.3)]"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/assests/Hero-cup.png"
          alt="Kulhad chai"
          width={300}
          height={360}
          className="w-[180px] md:w-[220px] h-auto"
        />

        {/* Steam */}
        <div className="pointer-events-none absolute -top-10 left-1/2 flex -translate-x-1/2 gap-3">
          <div className="chai-steam h-14 w-3 rounded-full bg-linear-to-b from-white/85 via-white/45 to-transparent blur-[3px]" />
          <div className="chai-steam h-16 w-3 rounded-full bg-linear-to-b from-white/85 via-white/45 to-transparent blur-[3px]" />
          <div className="chai-steam h-15 w-3 rounded-full bg-linear-to-b from-white/80 via-white/40 to-transparent blur-[3px]" />
        </div>
      </div>
    </div>
  );
}
