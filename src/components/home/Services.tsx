"use client";

import { useEffect } from "react";
import { Bike, Wrench, Hammer, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    const section = document.querySelector("#services");
    if (!section) return;

    gsap.from(section, {
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
  }, []);

  return (
    <section className="mb-30" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">NUESTROS SERVICIOS</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5">
          <ServiceCard
            icon={<Bike className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />}
            title="Venta de bicicletas"
            description="Modelos urbanos, de montaña y ruta. Para todos los niveles."
          />
          <ServiceCard
            icon={<Wrench className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />}
            title="Taller"
            description="Reparaciones, ajustes, mantenimiento preventivo y correctivo."
          />
          <ServiceCard
            icon={<Hammer className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />}
            title="Personalización"
            description="Armado a medida según tus necesidades y estilo de pedaleo."
          />
          <ServiceCard
            icon={<HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />}
            title="Asesoría especializada"
            description="Te ayudamos a elegir la bicicleta y equipamiento ideal para ti."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-white/20 rounded-lg hover:shadow-lg hover:shadow-white/10 transition">
      {icon}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
