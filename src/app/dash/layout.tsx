"use client";

import { useEffect, useState } from "react";
import { LogOut, MenuIcon } from "lucide-react";
import Image from "next/image";
import { getSession, signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function DashLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
    });
  }, []);

  if (!session) {
    return null;
  }

  return (
    <div>
      <div className="flex min-h-screen relative">
        <aside
          id="sidebar"
          className={`
            fixed md:static top-0 left-0 w-[100vw] h-[100vh] transform
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:w-[280px] md:translate-x-0
            transition-transform duration-200 ease-in-out z-50 md:z-auto
            bg-background border-r border-gray-700 px-2
          `}
        >
          <div className="p-6 text-center border-b border-gray-700">
            <Image
              src={session.user!.image as string}
              alt="Foto de perfil"
              width={80}
              height={80}
              className="mx-auto rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold">{session.user!.name}</h3>
            <p className="text-sm text-gray-400 max-w-full overflow-hidden text-ellipsis">
              {session.user!.email}
            </p>

            <button
              onClick={() => signOut()}
              className="mt-4 text-sm flex items-center justify-between gap-2 mx-auto cursor-pointer hover:bg-slate-800 px-3 py-1 rounded-full transition-all duration-200 ease-in-out"
            >
              <LogOut className="h-5 w-5" />
              Cerrar sesión
            </button>
          </div>

          <nav className="mt-6">
            <ul className="flex flex-col gap-4 px-6 items-center">
              {/* <li>
                <a href="/dash/" className="text-medium text-lg hover:text-gray-300">
                  Carrusel
                </a>
              </li> */}
              {/* <li><a href="/dash/eventos" className="text-medium text-lg hover:text-gray-300">Eventos</a></li> */}
              {/* <li><a href="/dash/galeria" className="text-medium text-lg hover:text-gray-300">Galería</a></li> */}
              {/* <li>
                <a href="/dash/horario" className="text-medium text-lg hover:text-gray-300">
                  Horario
                </a>
              </li> */}
            </ul>
          </nav>
        </aside>

        <main className="p-3 grow">{children}</main>
      </div>

      <button
        id="toggle-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden absolute top-4 right-4 z-50 p-2 rounded"
        aria-label="Toggle sidebar"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
