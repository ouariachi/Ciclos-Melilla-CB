"use client"; // necesario si usas App Router

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "https://res.cloudinary.com/doaywtxph/image/upload/v1753732735/CIclosMelillaCB/specialized_epic_2021_s-works_owmnnu.webp",
    opacity: "60%",
    scale: "scale-[160%] sm:scale-100",
  },
  {
    src: "https://res.cloudinary.com/doaywtxph/image/upload/v1753795214/CIclosMelillaCB/specialized_tarmac_sl8.webp",
    opacity: "50%",
    scale: "scale-[135%] sm:scale-85",
  },
  {
    src: "https://res.cloudinary.com/doaywtxph/image/upload/v1753822799/CIclosMelillaCB/specialized_s_works_turbo_creo_2.webp",
    opacity: "60%",
    scale: "scale-[135%] sm:scale-85",
  },
  {
    src: "https://res.cloudinary.com/doaywtxph/image/upload/v1753903649/CIclosMelillaCB/specialized_turbo_vado_sl.webp",
    opacity: "60%",
    scale: "scale-[135%] sm:scale-85",
  },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <div className="absolute h-full w-full pointer-events-none overflow-hidden">
      <div className="relative w-full h-full" id="carousel">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            width={2000}
            height={2000}
            alt={`Slide ${i + 1}`}
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              select-none object-center object-contain 
              max-w-full max-h-full mx-auto 
              ${img.scale}
              transition-all duration-1000
              mask-radial-from-40% mask-radial-from-black 
              mask-radial-to-100% mask-radial-to-transparent mask-circle
              ${i === index ? "opacity-[60%] animate-zoom-fade-in" : "opacity-0"}
            `}
            style={{ opacity: i === index ? img.opacity : "0" }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
