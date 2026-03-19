"use client";

export default function ChaiCup() {
  return (
    <div className="chai fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative pointer-events-none">
        {/* Plate */}
        <div className="absolute inset-x-[-40%] bottom-[-18%] h-8 rounded-full bg-linear-to-r from-[#f2e4d4] via-[#e6d2bf] to-[#d1b59b] shadow-[0_18px_45px_rgba(62,39,35,0.45)]" />

        {/* Cup body */}
        <div className="relative mx-auto flex h-32 w-32 items-end justify-center rounded-[55%] bg-linear-to-b from-[#fdf6ee] via-[#f1d1a5] to-[#d4a373] shadow-[0_18px_40px_rgba(62,39,35,0.35)] border border-white/60">
          {/* Chai surface */}
          <div className="absolute -top-3 left-1/2 h-8 w-[82%] -translate-x-1/2 rounded-[999px] bg-linear-to-b from-[#f3cf9f] via-[#e3a969] to-[#c0763c] shadow-inner border border-white/50" />

          {/* Cup rim highlight */}
          <div className="absolute -top-4 left-1/2 h-9 w-[86%] -translate-x-1/2 rounded-[999px] border border-white/60 bg-white/5 backdrop-blur-[2px]" />

          {/* Cup base */}
          <div className="mb-2 h-3 w-16 rounded-full bg-linear-to-r from-[#f5e4d2] to-[#e2c5a8] shadow-[0_6px_12px_rgba(62,39,35,0.35)]" />
        </div>

        {/* Handle */}
        <div className="absolute right-[-18px] top-6 h-14 w-10 rounded-full border-2 border-[#f2d9bd] bg-linear-to-b from-[#fdf6ef] to-[#eacdac] shadow-[0_6px_12px_rgba(62,39,35,0.25)]" />

        {/* Steam */}
        <div className="absolute -top-10 left-1/2 flex -translate-x-1/2 gap-2">
          <div className="steam h-10 w-2 rounded-full bg-linear-to-b from-white/80 via-white/40 to-transparent blur-[2px]" />
          <div className="steam steam-delay-1 h-12 w-2 rounded-full bg-linear-to-b from-white/80 via-white/40 to-transparent blur-[3px]" />
          <div className="steam steam-delay-2 h-11 w-2 rounded-full bg-linear-to-b from-white/80 via-white/40 to-transparent blur-[2px]" />
        </div>
      </div>
    </div>
  );
}
