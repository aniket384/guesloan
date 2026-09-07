"use client";

import { useEffect } from "react";

/**
 * Renders nothing — on mount it wires up the same reveal-on-scroll behavior
 * the original vanilla-JS site used: elements with class="reveal" fade/slide
 * in once they cross into the viewport, staggered by a 55ms delay cycling
 * through 3 steps. Falls back to revealing everything immediately if
 * IntersectionObserver isn't available.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("on");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      els.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 55}ms`;
        io.observe(el);
      });
      return () => io.disconnect();
    } else {
      els.forEach((el) => el.classList.add("on"));
    }
  }, []);

  return null;
}
