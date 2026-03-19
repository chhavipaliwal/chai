/**
 * Cinematic kulhad scroll animation.
 *
 * The kulhad (clay chai cup) is a fixed-position element that GSAP controls.
 * On load it rises smoothly into place on the plate. On scroll it lifts off
 * and travels through 4 rest stages — pausing intentionally at each before
 * moving to the next. The plate never moves.
 *
 * Layout assumption: the page uses 200vh sticky-section wrappers so the total
 * scrollable distance is ~700vh. The timeline divides that into 6 equal phases
 * (3 rest + 3 movement), giving 4 rest positions total.
 */

export function initScrollAnimation(kulhadEl: HTMLElement): () => void {
  let ctx: { revert: () => void } | undefined;

  const setup = async () => {
    const gsapModule = await import("gsap");
    const gsap = gsapModule.gsap ?? gsapModule.default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      /*
       * Stage positions — expressed as pixel offsets from viewport centre
       * (the kulhad's CSS anchor is top:50% left:50%).
       */
      const stages = [
        { x: vw * 0.13, y: vh * -0.08, scale: 1, rotate: 0 },
        { x: 0, y: vh * 0.06, scale: 0.92, rotate: -1 },
        { x: vw * 0.08, y: vh * 0.08, scale: 0.87, rotate: 0 },
        { x: vw * -0.2, y: 0, scale: 0.92, rotate: 1 },
      ];

      /* -------- entry animation -------- */
      gsap.set(kulhadEl, {
        x: stages[0].x,
        y: stages[0].y + vh * 0.14,
        opacity: 0,
        scale: 0.78,
        rotate: 6,
      });

      gsap.to(kulhadEl, {
        x: stages[0].x,
        y: stages[0].y,
        opacity: 1,
        scale: stages[0].scale,
        rotate: stages[0].rotate,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.35,
        onComplete: buildScrollTimeline,
      });

      /* -------- scroll-linked timeline -------- */
      function buildScrollTimeline() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".scroll-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.6,
          },
        });

        // Phase 1 — rest at Hero (kulhad on plate)
        tl.to(kulhadEl, {
          x: stages[0].x,
          y: stages[0].y,
          scale: stages[0].scale,
          rotate: stages[0].rotate,
          duration: 1,
          ease: "none",
        });

        // Phase 2 — lift off plate, glide to Section 2 (table)
        tl.to(kulhadEl, {
          x: stages[1].x,
          y: stages[1].y,
          scale: stages[1].scale,
          rotate: stages[1].rotate,
          duration: 1,
          ease: "power2.inOut",
        });

        // Phase 3 — rest at Section 2
        tl.to(kulhadEl, {
          x: stages[1].x,
          y: stages[1].y,
          scale: stages[1].scale,
          rotate: stages[1].rotate,
          duration: 1,
          ease: "none",
        });

        // Phase 4 — glide to Collection
        tl.to(kulhadEl, {
          x: stages[2].x,
          y: stages[2].y,
          scale: stages[2].scale,
          rotate: stages[2].rotate,
          duration: 1,
          ease: "power2.inOut",
        });

        // Phase 5 — rest at Collection
        tl.to(kulhadEl, {
          x: stages[2].x,
          y: stages[2].y,
          scale: stages[2].scale,
          rotate: stages[2].rotate,
          duration: 1,
          ease: "none",
        });

        // Phase 6 — glide to Story
        tl.to(kulhadEl, {
          x: stages[3].x,
          y: stages[3].y,
          scale: stages[3].scale,
          rotate: stages[3].rotate,
          duration: 1,
          ease: "power2.inOut",
        });
      }
    });
  };

  setup();
  return () => ctx?.revert();
}
