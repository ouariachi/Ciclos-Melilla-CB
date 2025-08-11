"use client";

import { useEffect } from "react";
import { isOpenNow, getNextOpening } from "@/utils/schedule";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Schedule as ScheduleType } from "@/lib/schedule";
import { groupDays } from "@/utils/groupDays";

gsap.registerPlugin(ScrollTrigger);

export default function Schedule({ schedule }: { schedule: ScheduleType }) {
  const openStatus = isOpenNow(schedule);
  const nextOpening = !openStatus.isOpen ? getNextOpening(schedule) : null;
  const groups = groupDays(schedule.days);

  useEffect(() => {
    const section = document.querySelector("#schedule");
    if (!section) return;

    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section id="schedule" className="mb-20">
      <h1 className="text-3xl font-bold text-center mb-3">HORARIO</h1>

      <div className="border border-white p-10 bg-transparent text-white text-center relative max-w-[600px] w-[90dvw] mx-auto rounded-xl">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full" />

        <h1
          className={`relative text-4xl sm:text-7xl font-bold mb-6 ${openStatus.isOpen ? "text-green-500" : "text-red-500"
            }`}
        >
          {openStatus.isOpen ? "ABIERTO" : "CERRADO"}
          <span className="shade !h-10 !-mt-10">&nbsp;</span>
        </h1>

        {!openStatus.isOpen && nextOpening && (
          <p className="mb-6 text-lg sm:text-xl text-white font-medium">
            Próxima apertura:{" "}
            <span className="font-semibold">
              {nextOpening.day} {nextOpening.time}
            </span>
          </p>
        )}

        <div>
          {groups.map((group, idx) => (
            <div key={idx}>
              <div className="mb-4">
                <p className="text-xl sm:text-2xl uppercase font-bold">{group.label}</p>
                {group.times.length > 0 ? (
                  group.times.map((t, i) => (
                    <p
                      key={i}
                      className="text-lg sm:text-xl font-medium"
                    >{`${t.start} - ${t.end}`}</p>
                  ))
                ) : (
                  <p className="text-lg sm:text-xl font-medium">Cerrado</p>
                )}
              </div>
              {idx !== groups.length - 1 && (
                <div className="border-t border-white my-4" />
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
      </div>
    </section>
  );
}
