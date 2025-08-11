"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader } from "lucide-react";
import ScheduleEditor from "./SheduleEditor";
import { getSchedule, Schedule } from "@/lib/schedule";

export const ScheduleDash = () => {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [schedule, setSchedule] = useState<Schedule | null>(null);

  const memoizedSchedule = useMemo(() => schedule, [schedule]);

  useEffect(() => {
    setLoading(true);
    getSchedule()
      .then((data) => {
        setSchedule(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      {loading &&
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Loader className="h-20 w-20 animate-spin" />
        </div>
      }

      <div
        style={loading ? {
          opacity: 0.5,
          pointerEvents: "none",
          userSelect: "none",
          touchAction: "none",
          cursor: "wait",
        } : {}}
      >
        <h1 className="text-3xl font-semibold mb-3">Horario</h1>
        <div className="flex gap-2 border-b boreder-gray-700 pb-3">
          <button
            className={`
                py-1 px-2 text-center font-semibold rounded-lg cursor-pointer hover:bg-gray-800/80 
                transition-all duration-300 ease-in-out
                ${tab === 0 ? "!bg-gray-800" : ""}
              `}
            onClick={() => setTab(0)}
          >
            Configuración
          </button>

          <button
            className={`
                py-1 px-2 text-center font-semibold rounded-lg cursor-pointer hover:bg-gray-800/80 
                transition-all duration-300 ease-in-out
                ${tab === 1 ? "!bg-gray-800" : ""}
              `}
            onClick={() => setTab(1)}
          >
            Previsualización
          </button>
        </div>
      </div>

      {tab === 0 && memoizedSchedule &&
        <div>
          <ScheduleEditor defaultSchedule={memoizedSchedule} />
        </div>
      }
    </div>
  )
}
