import Image from "next/image";

export default function Section2() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#f5e4d4]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#e7cdb3] via-transparent to-transparent opacity-70" />

      <div className="relative z-10 flex flex-col items-center px-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[#a27757]">
          The table
        </p>
        <h2 className="mt-3 font-serif text-3xl text-[#3e2723] sm:text-4xl">
          Where the ritual lands.
        </h2>
        <p className="mt-3 max-w-md text-center text-sm leading-relaxed text-[#6b4a3b] sm:text-base">
          A warm wooden surface waiting for the moment the kulhad settles, steam
          still rising as the world quiets for a sip.
        </p>

        <div className="mt-10 flex items-center justify-center" data-table-center>
          <Image
            src="/assests/table.png"
            alt="Table plate"
            width={520}
            height={320}
            className="select-none w-[800px] max-w-full h-auto drop-shadow-[0_22px_60px_rgba(0,0,0,0.28)]"
          />
        </div>

        <p className="mt-4 text-xs text-[#92725b]">
          Scroll slowly — the chai finds its place here.
        </p>
      </div>
    </section>
  );
}
