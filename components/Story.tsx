import Image from "next/image";

export default function Story() {
  return (
    <section className="relative h-screen flex items-center bg-linear-to-t from-[#f3dac4] via-[#f8f1e9] to-[#fdf8f2] overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -bottom-40 h-96 w-96 rounded-full bg-[#eac7a4] blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-6 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {/* Left: layered imagery — kulhad lands visually in this zone */}
          <div className="relative h-[360px]" data-story-target>
            <Image
              src="/assests/holding-had.png"
              alt="Story Image"
              width={1000}
              height={1000}
            />
          </div>

          {/* Right: story copy */}
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
