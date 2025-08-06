import { isOpenNow, getNextOpening } from '../../utils/schedule';
import type { OpenStatus } from '../../utils/schedule';

interface NextOpening {
  day: string;
  time: string;
}

export default function Schedule() {
  const openStatus: OpenStatus = isOpenNow();
  const nextOpening: NextOpening | null = !openStatus.isOpen ? getNextOpening() : null;

  return (
    <section id="schedule" className="mb-20">
      <h1 className="text-3xl font-bold text-center mb-3">HORARIO</h1>

      <div className="border border-white p-10 bg-transparent text-white text-center relative max-w-[600px] w-[90dvw] mx-auto rounded-xl">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>

        <h1
          className={`relative text-4xl sm:text-7xl font-bold mb-6 ${openStatus.isOpen ? 'text-green-500' : 'text-red-500'}`}
        >
          {openStatus.isOpen ? 'ABIERTO' : 'CERRADO'}
          <span className="shade !h-10 !-mt-10">&nbsp;</span>
        </h1>

        {!openStatus.isOpen && nextOpening && (
          <p className="mb-6 text-lg sm:text-xl text-white font-medium">
            Próxima apertura:{' '}
            <span className="font-semibold">
              {nextOpening.day} {nextOpening.time}
            </span>
          </p>
        )}

        <div className="mb-4">
          <p className="text-xl sm:text-2xl uppercase font-bold">Lunes - Viernes</p>
          <p className="text-lg sm:text-xl font-medium">10:00 - 13:30</p>
          <p className="text-lg sm:text-xl font-medium">17:30 - 20:30</p>
        </div>

        <div className="border-t border-white my-4"></div>

        <div>
          <p className="text-xl sm:text-2xl uppercase font-bold">Sábados y Domingos</p>
          <p className="text-lg sm:text-xl font-medium">Cerrado</p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
      </div>
    </section>
  );
}
