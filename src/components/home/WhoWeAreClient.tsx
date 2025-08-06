"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAreClient() {
  useEffect(() => {
    const section = document.querySelector("#who-we-are");
    const sectionText = document.querySelector("#who-we-are-text");
    const passion = document.querySelector("#passion");

    function animate(el: Element | null, start?: number) {
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: `top ${start || 85}%`,
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.inOut",
      });
    }

    animate(section);
    animate(sectionText, 95);
    animate(passion);
  }, []);

  return null;
}
