"use client";

import { useEffect } from "react";
import { Star } from "lucide-react";
import { timeSince } from "../../utils/timeSince";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

const reviews: Review[] = [
  {
    author: "adrii ii",
    rating: 5,
    text: "Primeras marcas, un trato genial, se nota que tienen un buen conocimiento sobre las bicicletas, la recomiendo al 100% son profesionales.",
    time: "2023-06-01",
  },
  {
    author: "Carlos Herrero",
    rating: 5,
    text: "Buen servicio, muy buen material y un trato amigable, muy recomendable. La mejor tienda de bicis de Melilla sin lugar a dudas.",
    time: "2018-06-01",
  },
  {
    author: "francisco muñoz sanchez",
    rating: 5,
    text: "Espectacular como nos tratan y es increíble la calidad 100/10",
    time: "2024-06-01",
  },
  {
    author: "F.J.R",
    rating: 5,
    text: "Una buena tienda de bicis.. artículos variados. Buena calidad.. y sobre todo un buen trato.. muy recomendable",
    time: "2021-06-01",
  },
  {
    author: "Psiquiatra de Canosa",
    rating: 5,
    text: "Viven la bici, ponen mucha pasión en todo lo que hacen, son bellisimas personas y profesionales.",
    time: "2020-06-01",
  },
  {
    author: "Riduan Castro",
    rating: 5,
    text: "Me encanta, cuidan las bicicletas como si fuesen tesoros, desde la más cara hasta la más humilde, para ellos cada tornillo cuenta. Sin duda mi tienda preferida.",
    time: "2025-07-31",
  },
];

export default function Reviews() {
  useEffect(() => {
    const cards = document.querySelectorAll(".review-card");
    const h1 = document.querySelector("#reviews h1");
    const p = document.querySelector("#reviews p");

    cards.forEach((card) => animate(card));
    animate(h1, 85);
    animate(p, 85);
  }, []);

  const animate = (el: Element | null, start = 65) => {
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: el,
          start: `top ${start}%`,
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }
    );
  };

  return (
    <section id="reviews" className="relative overflow-hidden my-5 z-5">
      <h1 className="text-3xl font-bold text-center mb-3">OPINIONES</h1>
      <p className="text-center text-xl">Algunas de las opiniones de nuestros clientes</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[95vw] w-[1200px] mx-auto mt-4">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="review-card bg-[#1d1d1d] p-6 rounded-lg shadow-md border border-gray-900"
          >
            <div className="flex items-center mb-2">
              <div className="font-semibold text-lg">{review.author}</div>
              <div className="ml-auto flex">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                    fill={j < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
            <p className="italic mb-2">&quot;{review.text}&quot;</p>
            <p className="text-sm text-gray-400">{timeSince(review.time)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
