"use client";

import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faq = [
  {
    question: "¿Qué ventajas ofrece comprar una bicicleta Specialized en una tienda distribuidora oficial?",
    answer:
      "Al comprar en una tienda distribuidora oficial de Specialized, accedes a garantía directa del fabricante, servicio técnico certificado y acceso a los últimos modelos y componentes originales.",
  },
  {
    question: "¿Venden bicicletas Specialized eléctricas y de montaña?",
    answer:
      "Sí, contamos con una amplia variedad de bicicletas eléctricas Specialized y modelos de montaña como la Stumpjumper y la Epic, ideales para trail, XC y enduro.",
  },
  {
    question: "¿La tienda ofrece servicio técnico autorizado para bicicletas Specialized?",
    answer:
      "Sí, ofrecemos servicio técnico especializado y mantenimiento con repuestos originales de Specialized, garantizando el mejor rendimiento de tu bici.",
  },
  {
    question: "¿Puedo financiar la compra de mi bicicleta Specialized?",
    answer:
      "Sí, ofrecemos opciones de financiamiento flexibles para bicicletas Specialized, incluyendo pagos en cuotas con tarjetas bancarias y convenios con entidades financieras.",
  },
  {
    question: "¿Tienen stock de bicicletas Specialized en diferentes tallas y modelos?",
    answer:
      "Disponemos de stock actualizado de bicicletas Specialized en tallas y modelos variados. Consulta disponibilidad o realiza tu reserva anticipada.",
  },
];

export default function FAQ() {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach((item) => {
      const header = item.querySelector(".accordion-header") as HTMLDivElement;
      const body = item.querySelector(".accordion-body") as HTMLDivElement;

      header.addEventListener("click", () => {
        const isOpen = body.style.height && body.style.height !== "0px";

        // Cierra todos
        document.querySelectorAll(".accordion-body").forEach((el) => {
          (el as HTMLElement).style.height = "0px";
        });

        if (!isOpen) {
          body.style.height = body.scrollHeight + "px";
        } else {
          body.style.height = "0px";
        }
      });
    });

    const section = document.querySelector("#faq");
    if (section) {
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
    }
  }, []);

  return (
    <section id="faq" className="relative overflow-hidden my-5 z-5 mt-20">
      <div className="max-w-[99vw] w-[1000px] shadow-lg rounded-lg p-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">PREGUNTAS FRECUENTES</h2>

        <div className="accordion space-y-4">
          {faq.map((item, i) => (
            <div key={i} className="accordion-item space-y-4">
              <button
                type="button"
                className="accordion-header border rounded-md w-full flex items-center justify-between p-4 font-medium hover:bg-white/10 cursor-pointer focus:outline-none text-left text-base sm:text-lg md:text-xl"
              >
                <div className="flex-1">{item.question}</div>
                <ChevronDown className="inline ml-2 w-5" />
              </button>
              <div
                className="accordion-body text-balance text-base md:text-lg font-medium h-0 overflow-hidden transition-all duration-300 ease-in-out"
                style={{ height: 0 }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
