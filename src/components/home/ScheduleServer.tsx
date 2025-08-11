"use server";

import { getSchedule } from "@/lib/schedule";
import Schedule from "./Schedule";

export const ScheduleServer = async () => {
  const schedule = await getSchedule();
  console.log(schedule);
  return (
    <Schedule schedule={schedule} />
  );
}