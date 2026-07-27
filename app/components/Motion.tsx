"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/**
 * Motion island: Lenis smooth scrolling driven by GSAP's ticker (so ScrollTrigger
 * stays in sync), plus scroll-driven animations — masked hero intro, image
 * parallax, section reveals, and a progress bar. Gated behind the `.js` class +
 * a reduced-motion check, so no-JS / reduced-motion stays static.
 *
 * The GSAP animations run FIRST and independently of Lenis: Lenis is a
 * progressive enhancement, so even if it fails to initialise, content still
 * reveals (and scrolling falls back to native).
 */
export default function Motion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ---- Hero intro: masked lines rise, then the rest fades up ----
      // NOTE: the pre-paint hidden state is a CSS `translateY(115%)`. GSAP reads
      // that computed matrix as a pixel `y`, so we must zero `y` explicitly here —
      // otherwise animating only `yPercent` leaves the stray offset and the title
      // never comes back into its mask.
      gsap.set(".hero h1 .hl > span", { y: 0, yPercent: 115 });
      gsap.set("[data-hero]", { opacity: 0, y: 16 });
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(
          ".hero h1 .hl > span",
          { yPercent: 0, duration: 1.2, stagger: 0.12 },
          0.15
        )
        .to(
          "[data-hero]",
          { opacity: 1, y: 0, duration: 1, stagger: 0.09 },
          0.55
        );

      // ---- Section reveals (below the hero) ----
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onComplete: () => el.classList.add("is-in"),
          }
        );
      });

      // ---- Image parallax ----
      [".hero-media", ".story-media", ".visit-media"].forEach((sel) => {
        const frame = document.querySelector(sel);
        const img = frame?.querySelector("img");
        if (!frame || !img) return;
        gsap.set(img, { scale: 1.2 });
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // ---- Top scroll-progress bar ----
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });

    // ---- Lenis smooth scroll (progressive enhancement) ----
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;
    try {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    } catch {
      lenis = null;
    }

    // In-page anchor links glide via Lenis (offset clears the sticky nav);
    // fall back to native smooth scroll if Lenis isn't active.
    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      const id = a?.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.1 });
      else target.scrollIntoView({ behavior: "smooth" });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
      ctx.revert();
    };
  }, []);

  return null;
}
