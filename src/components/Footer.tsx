import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] p-6 text-sm text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold">© {new Date().getFullYear()} Ciclos Melilla CB</p>
          <p>Distribuidor oficial Specialized</p>
          <p>Ctra. Huerta Cabo, 1, Local 2, Melilla</p>
          <p>Tel. 639 12 12 50</p>
        </div>

        <div>
          <Image
            className="h-[100px] w-auto select-none mx-auto"
            width={600}
            height={159}
            src="https://res.cloudinary.com/doaywtxph/image/upload/v1753745297/CIclosMelillaCB/logo_full_transparent.webp"
            alt="Ciclos Melilla Logo"
          />
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2 sm:gap-3">
          <div><a href="/aviso-legal" className="hover:underline">Aviso Legal</a></div>
          <div><a href="/privacidad" className="hover:underline">Política de Privacidad</a></div>
          <div><a href="/cookies" className="hover:underline">Política de Cookies</a></div>
        </div>
      </div>

      <div className="text-center text-base text-blue-400 hover:underline mt-4">
        <a href="/dash">Panel de control</a>
      </div>
    </footer>
  );
};

export default Footer;
