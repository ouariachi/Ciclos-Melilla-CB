"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Location from "./Location";
import WhatsApp from "../icons/WhatsApp";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animation = gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.inOut",
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative mb-20 mt-10 pt-10 z-5 space-y-5"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-center mb-3">VISÍTANOS</h1>
        <p className="text-lg">Ctra. Huerta Cabo, 1, Local 2, 52006 Melilla</p>
        <p className="text-lg">
          Teléfono:{" "}
          <a
            href="tel:+34639121250"
            className="text-blue-500 hover:underline"
          >
            639121250
          </a>
        </p>

        <div className="mt-4 flex justify-center items-center gap-4">
          <a
            href="https://wa.me/34639121250"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsApp />
          </a>

          <a
            href="https://www.facebook.com/p/Ciclos-Melilla-CB-100009821748049/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Facebook"
          >
            <Facebook />
          </a>

          <a
            href="https://www.instagram.com/ciclosmelilla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Instagram"
          >
            <Instagram />
          </a>
        </div>
      </div>

      <div>
        <Location />
      </div>

      <ContactForm />
    </section>
  );
}
