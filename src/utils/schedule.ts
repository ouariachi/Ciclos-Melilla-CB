export interface TimeSlot {
  start: string; // Format: "HH:mm"
  end: string;   // Format: "HH:mm"
}

export interface Schedule {
  [day: string]: TimeSlot[];
}

export interface OpenStatus {
  day: string;
  slots: TimeSlot[];
  isOpen: boolean;
}

const schedule: Schedule = {
  monday: [
    { start: "10:00", end: "13:30" },
    { start: "17:30", end: "20:30" }
  ],
  tuesday: [
    { start: "10:00", end: "13:30" },
    { start: "17:30", end: "20:30" }
  ],
  wednesday: [
    { start: "10:00", end: "13:30" },
    { start: "17:30", end: "20:30" }
  ],
  thursday: [
    { start: "10:00", end: "13:30" },
    { start: "17:30", end: "20:30" }
  ],
  friday: [
    { start: "10:00", end: "13:30" },
    { start: "17:30", end: "20:30" }
  ],
  saturday: [],
  sunday: []
};

const dayTranslations: Record<string, string> = {
  sunday: "Domingo",
  monday: "Lunes",
  tuesday: "Martes",
  wednesday: "Miércoles",
  thursday: "Jueves",
  friday: "Viernes",
  saturday: "Sábado"
};

function getMadridDate(): Date {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Madrid",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const parts = formatter.formatToParts(new Date());
  const get = (type: string) => parts.find(p => p.type === type)?.value || "00";

  const year = get("year");
  const month = get("month");
  const day = get("day");
  const hour = get("hour");
  const minute = get("minute");
  const second = get("second");

  return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
}

export function isOpenNow(): OpenStatus {
  const daysOfWeek = [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
  ];

  const now = getMadridDate();
  const currentDay: string = daysOfWeek[now.getDay()];
  const currentTime: number = now.getHours() + now.getMinutes() / 60;

  const todaySlots: TimeSlot[] = schedule[currentDay] || [];

  const isOpen: boolean = todaySlots.some(({ start, end }) => {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    const startTime = startHour + startMinute / 60;
    const endTime = endHour + endMinute / 60;
    return currentTime >= startTime && currentTime <= endTime;
  });

  return {
    day: dayTranslations[currentDay],
    slots: todaySlots,
    isOpen
  };
}

export function getNextOpening(): { day: string; time: string } | null {
  const daysOfWeek = [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
  ];

  const now = getMadridDate();
  const nowDayIndex = now.getDay();
  const currentTime = now.getHours() + now.getMinutes() / 60;

  for (let offset = 0; offset < 7; offset++) {
    const dayIndex = (nowDayIndex + offset) % 7;
    const engDay = daysOfWeek[dayIndex];
    const slots = schedule[engDay] || [];

    for (const slot of slots) {
      const [startHour, startMinute] = slot.start.split(":").map(Number);
      const startTime = startHour + startMinute / 60;

      if (offset === 0 && startTime <= currentTime) continue;

      return {
        day: dayTranslations[engDay],
        time: slot.start
      };
    }
  }

  return null;
}
