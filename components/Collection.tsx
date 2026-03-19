import Image from "next/image";

export default function Collection() {
  return (
    <section className="relative h-screen flex items-center bg-[#fdf7f0]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#f3e0cd] via-transparent to-transparent opacity-70" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-6 lg:px-10">
        <div className="items-center">
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
                is crafted to hold a memory, a feeling, a moment worth steeping
                in.
              </p>
            </div>
          </div>

          {/* Grid of chai types — the 3rd slot is left open for the travelling kulhad */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-linear-to-b from-transparent via-[#f0decb] to-transparent opacity-70 blur-3xl" />
            </div>

            <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                {
                  image: "/assests/floating-chai.png",
                  name: "Masala Chai",
                  note: "Bold, spiced, unapologetically warm.",
                },
                {
                  image: "/assests/masala-chai.png",
                  name: "Rose Chai",
                  note: "Soft florals over creamy sweetness.",
                },
                { empty: true },
                {
                  image: "/assests/rose-chai.png",
                  name: "Tulsi Chai",
                  note: "Herbaceous calm with quiet depth.",
                },
              ].map((chai, index) => {
                if ("empty" in chai && chai.empty) {
                  return (
                    <div
                      key={index}
                      data-collection-slot
                      className="relative flex items-center justify-center"
                    >
                      <div className="h-32 w-32 rounded-full bg-[#f0decb] opacity-60 blur-2xl" />
                      <div className="absolute h-24 w-24 rounded-full border-2 border-dashed border-[#d4a373]/40" />
                    </div>
                  );
                }

                return (
                  <div key={"name" in chai ? chai.name : index}>
                    <Image
                      src={"image" in chai ? chai.image! : ""}
                      alt={"name" in chai ? chai.name! : ""}
                      width={300}
                      height={360}
                      className="mx-auto w-full h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
