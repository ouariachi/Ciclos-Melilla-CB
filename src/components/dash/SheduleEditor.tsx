import { Schedule } from "@/lib/schedule";
import { dayNames } from "@/utils/groupDays";
import { useState } from "react";
import { Input } from "@/components/Input";
import { Plus, Trash2 } from "lucide-react";

export default function ScheduleEditor({ defaultSchedule }: { defaultSchedule: Schedule }) {
  const [schedule, setSchedule] = useState<Schedule>(() => defaultSchedule);
  const [selectedDay, setSelectedDay] = useState<keyof Schedule["days"]>("monday");

  const handleChange = (day: keyof Schedule["days"], index: number, field: "start" | "end", value: string) => {
    setSchedule(prev => {
      return {
        ...prev,
        days: {
          ...prev.days,
          [day]: prev.days[day].map((range, i) =>
            i === index ? { ...range, [field]: value } : range
          )
        }
      };
    });
  };

  const addRange = (day: keyof Schedule["days"]) => {
    setSchedule(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: [...prev.days[day], { start: "09:00", end: "12:00" }]
      }
    }));
  };

  const removeRange = (day: keyof Schedule["days"], index: number) => {
    setSchedule(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: prev.days[day].filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <div className="mt-5">
      <div className="mb-10">
        <label className="block text-lg font-semibold mb-2 cursor-pointer">
          Seleccionar día:
          <select
            value={selectedDay}
            onChange={e => setSelectedDay(e.target.value as keyof Schedule["days"])}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-lg"
          >
            {Object.keys(schedule.days).map(day => (
              <option key={day} value={day} className="text-black">
                {dayNames[day]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="border-b border-gray-300 pb-4 mb-4">
        {schedule.days[selectedDay].map((range, idx) => (
          <div key={`${range.start}-${range.end}-${idx}`} className="flex gap-3 items-center mb-3">
            <Input
              type="time"
              value={range.start}
              onChange={e => handleChange(selectedDay, idx, "start", e.target.value)}
              className="p-2 text-lg"
            />
            <span className="text-lg font-medium">-</span>
            <Input
              type="time"
              value={range.end}
              onChange={e => handleChange(selectedDay, idx, "end", e.target.value)}
              className="p-2 text-lg"
            />
            <button
              onClick={() => removeRange(selectedDay, idx)}
              className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => addRange(selectedDay)}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-lg cursor-pointer"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}
