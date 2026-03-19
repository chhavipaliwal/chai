import HeroChai from "./HeroChai";

export default function Hero() {
  return (
    <section className="section1 relative h-screen flex items-center bg-linear-to-b from-[#f8f1e9] via-[#fdf7f0] to-[#f1e2d2] overflow-hidden">
      {/* Background organic shapes */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-80 w-80 rounded-full bg-[#f0dac0] blur-3xl opacity-50" />
      <div className="pointer-events-none absolute right-[-80px] top-24 h-72 w-72 rounded-full bg-[#e2c3a0] blur-3xl opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[55%] bg-linear-to-t from-[#e3c3a2] via-transparent to-transparent opacity-80" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-6 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Left: text */}
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9b7b62]">
              Slow-crafted Indian chai
            </p>
            <div className="space-y-4">
              <h1 className="font-serif text-5xl leading-tight text-[#3e2723] sm:text-5xl md:text-6xl">
                The Taste of Chai
              </h1>
              <p className="max-w-lg text-sm leading-relaxed text-[#6b4a3b] sm:text-base">
                Terracotta warmth between your palms, cardamom and ginger rising
                with the first curl of steam. A familiar street-side kulhad,
                reimagined as a quiet, modern ritual.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="group inline-flex items-center rounded-full bg-[#3e2723] px-6 py-3 text-sm font-medium text-[#f8f1e9] shadow-[0_18px_40px_rgba(62,39,35,0.35)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(62,39,35,0.45)]">
                <span>Explore Chai</span>
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#d4a373] text-[11px] text-[#3e2723] transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
              <span className="text-xs text-[#8b6b55]">
                A premium kulhad experience, brewed for stillness.
              </span>
            </div>
          </div>

          {/* Right: premium kulhad presentation, animation-ready */}
          <div className="relative flex h-[420px] items-center justify-center">
            <HeroChai />
          </div>
        </div>
      </div>
    </section>
  );
}
