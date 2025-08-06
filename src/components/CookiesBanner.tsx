"use client";

import { useEffect, useState } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie.includes('cookiesAccepted=true');
    if (!cookiesAccepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `cookiesAccepted=true; expires=${expires.toUTCString()}; path=/`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-backdrop"
      className="fixed inset-0 z-40 bg-black/70"
      onClick={(e) => {
        if (e.currentTarget.id === 'cookie-backdrop') {
          acceptCookies();
        }
      }}
    >
      <div
        id="cookie-banner"
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-gray-800 text-white rounded-md p-5
          flex flex-col md:flex-row items-center justify-between gap-4
          max-w-3xl w-[90vw]
        "
      >
        <p className="text-lg text-center md:text-left">
          Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra
          <a href="/cookies" className="underline ml-1">Política de Cookies</a>.
        </p>
        <button
          id="accept-btn"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-4 py-2 rounded cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            acceptCookies();
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
