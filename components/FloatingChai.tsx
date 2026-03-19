"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { RefObject } from "react";

interface FloatingChaiProps {
  scrollTargetRef: RefObject<HTMLDivElement>;
}

export default function FloatingChai({ scrollTargetRef }: FloatingChaiProps) {
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 1]);

  return (
    <motion.div
      className="pointer-events-none fixed left-1/2 top-[20vh] z-40 -translate-x-1/2"
      style={{ y, scale }}
    >
      <div className="relative flex items-center justify-center">
        <div className="drop-shadow-[0_14px_28px_rgba(0,0,0,0.18)]">
          <Image
            src="/assests/Hero-plate.png"
            alt="Chai plate with spices"
            width={520}
            height={320}
            className="select-none w-[520px] h-auto"
            priority
          />
        </div>

        <div className="absolute -top-[24%] left-1/2 -translate-x-1/2 drop-shadow-[0_28px_60px_rgba(0,0,0,0.3)]">
          <Image
            src="/assests/Hero-cup.png"
            alt="Clay kulhad of chai"
            width={280}
            height={340}
            className="select-none w-[280px] h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}

