import WhatsApp from "@/components/icons/WhatsApp";
import Facebook from "@/components/icons/Facebook";
import HeroCarousel from "@/components/home/HeroCarousel";
import MainMenu from "@/components/MainMenu";
import Instagram from "@/components/icons/Instagram";
import HeroOpen from "@/components/home/HeroOpen";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="h-screen relative">
      <div className="fixed top-4 right-5 z-20 transition-all">
        <MainMenu />
      </div>

      <div className="absolute top-2 left-1/2 z-10 opacity-80 -translate-x-1/2">
        <Image
          className="h-[100px] w-auto select-none"
          width={600}
          height={159}
          src="https://res.cloudinary.com/doaywtxph/image/upload/v1753745297/CIclosMelillaCB/logo_full_transparent.webp"
          alt="Ciclos Melilla Logo"
          draggable={false}
        />
      </div>

      <HeroCarousel />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <HeroOpen />
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold animate-fade-in-translate-up opacity-0">
          Diseñadas para ganar
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold animate-fade-in-translate-up-2 opacity-0">
          Construidas para disfrutar
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium animate-fade-in-translate-up-3 opacity-0">
          Distribuidor oficial de Specialized en Melilla
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

        <div className="mt-10">
          <Link
            href="/#contact"
            className="text-xl font-bold bg-red-500 px-3 py-2 rounded-full"
          >
            VISÍTANOS
          </Link>
        </div>
      </div>
    </section>
  );
}
