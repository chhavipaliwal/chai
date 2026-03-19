"use client";

import { useEffect } from "react";
import { initScrollAnimation } from "../animations/scrollAnimation";

export default function ScrollAnimationController() {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return null;
}
