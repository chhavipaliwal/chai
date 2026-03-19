"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Hero from "./Hero";
import Section2 from "./Section2";
import Collection from "./Collection";
import Story from "./Story";

export default function ScrollChaiLayout() {
  const kulhadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = kulhadRef.current;
    if (!el) return;

    let cleanup: (() => void) | undefined;

    import("../animations/scrollAnimation").then(({ initScrollAnimation }) => {
      cleanup = initScrollAnimation(el);
    });

    return () => cleanup?.();
  }, []);

  return (
    <div className="scroll-container relative">
      {/* Fixed kulhad — sole animated element, GSAP-controlled */}
      <div
        ref={kulhadRef}
        className="fixed z-50 pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assests/floating-chai.png"
            alt="Chai kulhad"
            width={300}
            height={360}
            className="kulhad-img w-[160px] md:w-[210px] h-auto drop-shadow-[0_24px_48px_rgba(62,39,35,0.35)]"
            priority
          />
          {/* Contact shadow that strengthens on rest */}
          <div className="kulhad-shadow absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[55%] h-[14px] rounded-full bg-black/20 blur-md" />
        </div>
      </div>

      {/* Section 1 — Hero (plate is static here) */}
      <div className="h-[200vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Hero />
        </div>
      </div>

      {/* Section 2 — The Table */}
      <div className="h-[200vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Section2 />
        </div>
      </div>

      {/* Section 3 — Collection */}
      <div className="h-[200vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Collection />
        </div>
      </div>

      {/* Section 4 — Story (final, no extra scroll height) */}
      <div className="relative">
        <div className="h-screen overflow-hidden">
          <Story />
        </div>
      </div>
    </div>
  );
}
