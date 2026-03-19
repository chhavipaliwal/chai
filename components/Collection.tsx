export default function Collection() {
  return (
    <section className="section-collection relative h-screen flex items-center bg-[#fdf7f0]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#f3e0cd] via-transparent to-transparent opacity-70" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-6 lg:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* Left copy */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[#a07c5f]">
              Signature collection
            </p>
            <div className="space-y-3">
              <h2 className="font-serif text-3xl text-[#3e2723] sm:text-4xl">
                Curated chais for every mood.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[#6b4a3b] sm:text-base">
                From monsoon-soaked streets to slow, amber evenings—each blend
                is crafted to hold a memory, a feeling, a moment worth
                steeping in.
              </p>
            </div>
          </div>

          {/* Right grid of chai types, leaving visual space through the center for the moving cup */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-linear-to-b from-transparent via-[#f0decb] to-transparent opacity-70 blur-3xl" />
            </div>

            <div className="relative grid gap-5 sm:grid-cols-2">
              {[
                {
                  name: "Masala Chai",
                  note: "Bold, spiced, unapologetically warm.",
                },
                {
                  name: "Rose Chai",
                  note: "Soft florals over creamy sweetness.",
                },
                {
                  name: "Tulsi Chai",
                  note: "Herbaceous calm with quiet depth.",
                },
                {
                  name: "Kesar Chai",
                  note: "Saffron threads, golden and decadent.",
                },
              ].map((chai) => (
                <div
                  key={chai.name}
                  className="group rounded-2xl border border-white/70 bg-linear-to-b from-white/80 via-[#fbf1e6] to-[#f4dfc8] px-5 py-6 text-left shadow-[0_14px_35px_rgba(62,39,35,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(62,39,35,0.28)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#b18a68]">
                    Chai
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-[#3e2723]">
                    {chai.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b4a3b] sm:text-sm">
                    {chai.note}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-[#a37d5b]">
                    <span>Small-batch leaves</span>
                    <span className="rounded-full bg-[#f0decf] px-2 py-1 text-[10px] font-medium text-[#7c5235]">
                      Slow brewed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

