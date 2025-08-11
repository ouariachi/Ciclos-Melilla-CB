import { Schedule } from "@/lib/schedule";

export const dayNames: Record<string, string> = {
  monday: "Lunes",
  tuesday: "Martes",
  wednesday: "Miércoles",
  thursday: "Jueves",
  friday: "Viernes",
  saturday: "Sábado",
  sunday: "Domingo"
};

export function groupDays(schedule: Schedule["days"]) {
  const days = Object.entries(schedule);
  const groups: { label: string; times: { start: string; end: string }[] }[] = [];

  let currentTimes: { start: string; end: string }[] | null = null;
  let currentGroup: string[] = [];

  days.forEach(([dayKey, times], i) => {
    const sameAsCurrent =
      JSON.stringify(times) === JSON.stringify(currentTimes);

    if (!sameAsCurrent) {
      if (currentGroup.length > 0) {
        groups.push({
          label:
            currentGroup.length > 1
              ? `${dayNames[currentGroup[0]]} - ${dayNames[currentGroup.at(-1)!]}`
              : dayNames[currentGroup[0]],
          times: currentTimes || []
        });
      }
      currentTimes = times;
      currentGroup = [dayKey];
    } else {
      currentGroup.push(dayKey);
    }

    if (i === days.length - 1) {
      groups.push({
        label:
          currentGroup.length > 1
            ? `${dayNames[currentGroup[0]]} - ${dayNames[currentGroup.at(-1)!]}`
            : dayNames[currentGroup[0]],
        times: currentTimes || []
      });
    }
  });

  return groups;
}