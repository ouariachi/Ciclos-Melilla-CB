"use client";

import { useState, FormEvent, useRef } from "react";
import { contactForm } from "@/lib/contactForm";

export default function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const canSubmit = isChecked && !isSubmitting;

  const showToast = (message: string, type: "success" | "error" = "success") => {
    const toast = document.createElement("div");

    toast.textContent = message;
    toast.className = `toast toast-${type}`;

    Object.assign(toast.style, {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      backgroundColor: type === "success" ? "#4caf50" : "#f44336",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      zIndex: 9999,
      opacity: 1,
      transition: "opacity 0.5s ease",
    });

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
    }, 4500);

    setTimeout(() => {
      toast.remove();
    }, 5000);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    if (!formRef.current) return;

    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      await contactForm(data);
      showToast("Tu mensaje ha sido enviado con éxito. Te responderemos lo antes posible.");
    } catch (error) {
      console.error(error);
      showToast("Error enviando el mensaje, intenta más tarde.", "error");
    }

    setIsChecked(false);
    setIsSubmitting(false);
    formRef.current.reset();
  }

  return (
    <form
      method="POST"
      encType="multipart/form-data"
      className="max-w-[95dvw] w-[570px] mx-auto mt-30"
      id="contact-form"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h2 className="text-3xl font-bold text-center mb-3">CONTÁCTANOS</h2>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="name"
          type="text"
          name="name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="email"
          type="email"
          name="email"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block text-lg font-semibold mb-2" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
          id="message"
          name="message"
          rows={5}
          required
        ></textarea>
      </div>

      <label htmlFor="cbx" className="flex gap-2 cursor-pointer select-none">
        <div className="perspective-20 rounded transition-all duration-300 ease-in-out">
          <input
            id="cbx"
            type="checkbox"
            className="hidden peer"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div
            className={`relative w-5 h-5 preserve-3d transition-all duration-400 ease-in-out ${isChecked ? "rotate-y-180" : ""
              }`}
          >
            <div className="absolute top-0 left-0 w-5 h-5 rounded-sm bg-white z-10 backface-hidden"></div>
            <div className="absolute top-0 left-0 w-5 h-5 rounded-sm bg-primary text-white text-center leading-5 shadow-[0_0_0_1px_#0b76ef] rotate-y-180 backface-hidden">
              <svg
                viewBox="0 0 16 14"
                height="14"
                width="16"
                className="mx-auto mt-[3px] fill-none"
              >
                <path
                  d="M2 8.5L6 12.5L14 1.5"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <span>
          Estoy de acuerdo con la{" "}
          <a href="/privacidad" className="underline">
            Política de Privacidad
          </a>
          .
        </span>
      </label>

      <div className="flex justify-end mt-3">
        <button
          className="bg-primary/70 hover:bg-secondary/70 font-bold py-2 px-6 rounded focus:outline-none transition-all duration-200 cursor-pointer grow disabled:opacity-40 disabled:cursor-not-allowed"
          type="submit"
          id="contact-form-submit-button"
          disabled={!canSubmit}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>

      <style>{`
        .perspective-20 {
          perspective: 20px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </form>
  );
}
