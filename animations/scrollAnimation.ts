"use client";

export async function initScrollAnimation() {
  if (typeof window === "undefined") return;

  // Wait briefly for the hero + chai cup to hydrate
  let chai: HTMLElement | null = null;
  for (let i = 0; i < 5 && !chai; i += 1) {
    chai = document.querySelector<HTMLElement>(".section1 .chai");
    if (!chai) {
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
  }

  if (!chai) return;

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  gsap.registerPlugin(ScrollTrigger);

  // Initial entrance animation on load
  gsap.from(chai, {
    y: 120,
    opacity: 0,
    scale: 0.9,
    rotate: 3,
    duration: 1,
    ease: "power3.out",
  });

  // Scroll-driven movement from hero to table
  const viewportHeight = window.innerHeight || 800;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section1",
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
    },
  });

  // Step 1: gentle lift from plate
  tl.to(
    chai,
    {
      y: -80,
      scale: 1.06,
      rotate: 5,
      ease: "power2.out",
    },
    0
  );

  // Step 2: travel straight down toward table in section 2
  tl.to(chai, {
    y: viewportHeight * 0.85,
    x: 0,
    scale: 1,
    rotate: -3,
    ease: "power2.inOut",
  });

  // Step 3: subtle landing bounce
  tl.to(chai, {
    scale: 0.95,
    duration: 0.25,
    ease: "power2.inOut",
  }).to(chai, {
    scale: 1,
    duration: 0.25,
    ease: "power2.out",
  });

  // Steam looping (subtle)
  const steamEls = gsap.utils.toArray<HTMLElement>(".chai-steam");
  steamEls.forEach((el, index) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 10 },
      {
        opacity: 0.6,
        y: -20,
        duration: 3.2,
        repeat: -1,
        ease: "power1.out",
        delay: index * 0.6,
      }
    );
  });
}

