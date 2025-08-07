"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (error === "AccessDenied") {
      setMessage("No tienes permisos para acceder a esta página.");
    }
  }, [error]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete("error");
        window.history.replaceState({}, document.title, url.pathname + url.search);
      }, 100);
    }
  }, [error]);

  return (
    <div>
      <div className="w-md max-w-[95dvw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center">
        <div>
          <Image
            className="h-[50px] w-auto select-none mx-auto mb-5"
            src="https://res.cloudinary.com/doaywtxph/image/upload/v1753745297/CIclosMelillaCB/logo_full_transparent.webp"
            width={600}
            height={159}
            alt="Logo"
          />
        </div>

        <button
          id="signin-button"
          className="flex items-center justify-center gap-5 w-full py-2 px-4 bg-white font-semibold text-lg text-black rounded-full hover:opacity-80 cursor-pointer"
          onClick={() => signIn("google", { callbackUrl: "/dash" })}
        >
          <Image
            src="/google-logo.webp"
            alt="Google"
            width={96}
            height={96}
            className="h-8 w-8"
          />
          Iniciar sesión con Google
        </button>

        <div className="mt-5">
          <Link href="/" className="text-lg text-blue-400 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      <style jsx>{`
        .toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #ee3838;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.5s ease;
          max-width: 400px;
          font-weight: 600;
          animation: fadeInTranslateUp 1s ease-in-out forwards;
        }

        @keyframes fadeInTranslateUp {
          from {
            transform: translateY(40%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
