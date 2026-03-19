export default function Story() {
  return (
    <section className="section3 relative h-screen flex items-center bg-linear-to-t from-[#f3dac4] via-[#f8f1e9] to-[#fdf8f2] overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -bottom-40 h-96 w-96 rounded-full bg-[#eac7a4] blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-6 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {/* Left: layered imagery placeholder */}
          <div className="relative h-[360px]">
            <div className="absolute inset-0 rounded-[32px] bg-linear-to-br from-[#3e2723] via-[#5b362f] to-[#2b1a17] shadow-[0_28px_80px_rgba(15,6,2,0.7)]" />

            <div className="absolute left-6 top-7 h-40 w-40 -rotate-6 rounded-3xl bg-linear-to-br from-[#6b4a3b] via-[#4b3229] to-[#2c1915] shadow-[0_22px_50px_rgba(8,3,1,0.75)]">
              <div className="h-full w-full rounded-3xl bg-[radial-gradient(circle_at_20%_0,#f2e2c8,transparent_55%),radial-gradient(circle_at_80%_100%,#b77a45,transparent_55%)] opacity-80" />
              <div className="absolute inset-3 rounded-2xl border border-white/15" />
            </div>

            <div className="absolute right-4 top-16 h-48 w-44 rotate-4 rounded-3xl bg-linear-to-b from-[#4a2f28] via-[#2e1814] to-[#140909] shadow-[0_22px_60px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-3 rounded-2xl bg-[radial-gradient(circle_at_50%_0,#f0e0c8,transparent_60%),radial-gradient(circle_at_10%_90%,#c88a4b,transparent_55%)] opacity-90" />
              <div className="absolute inset-x-4 bottom-4 h-16 rounded-2xl bg-linear-to-t from-[#1a0e0b] via-[#2a1814] to-transparent opacity-90" />
            </div>

            {/* Hand with chai placeholder */}
            <div className="absolute inset-x-10 bottom-0 flex items-end justify-center">
              <div className="relative h-28 w-40 rounded-[26px] bg-linear-to-br from-[#f4d0a8] via-[#e5b488] to-[#c07a46] shadow-[0_20px_55px_rgba(62,39,35,0.65)]">
                <div className="absolute -top-7 left-1/2 h-16 w-16 -translate-x-1/2 rounded-[999px] bg-linear-to-b from-[#f4dfc6] via-[#e2b07b] to-[#b76738] shadow-[0_16px_32px_rgba(62,39,35,0.6)]" />
                <div className="absolute bottom-4 left-6 h-10 w-14 rounded-[16px] bg-linear-to-br from-[#f4d0a8] via-[#ddaa76] to-[#b66b3b] opacity-90" />
                <div className="absolute bottom-5 right-5 h-11 w-16 rounded-[16px] bg-linear-to-br from-[#f6d6b0] via-[#e1af7b] to-[#b3673a] opacity-95" />
              </div>
            </div>
          </div>

          {/* Right: story copy, aligned for cup landing */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9c7a60]">
              Origin story
            </p>
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#3e2723] sm:text-4xl">
                A ritual poured into every cup.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[#6b4a3b] sm:text-base">
                Our chai is rooted in evenings on cool stone verandas, brass
                kettles humming on the stove, and the soft rise of conversation
                over the clink of cups. Each blend traces its way back to
                families, farms, and regions that have been tending tea for
                generations.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-[#6b4a3b] sm:text-base">
                The cup that finds its way to your hands is more than a drink—
                it is light, warmth, and a reason to pause. Just long enough to
                breathe in the moment.
              </p>
            </div>

            <div className="pt-3 text-xs text-[#8d6e58]">
              Designed for a cinematic moment as the chai cup settles into the
              scene.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

