"use server";

import { createClient } from "redis";

export interface TimeSlot {
  start: string; // Format: "HH:mm"
  end: string;   // Format: "HH:mm"
}

export interface Schedule {
  closed?: "permanent" | "temporary";
  reopenDate?: string; // Format: "YYYY-MM-DD"
  days: Record<string, TimeSlot[]>;
}

export interface OpenStatus {
  day: string;
  slots: TimeSlot[];
  isOpen: boolean;
}

const defaultSchedule: Schedule = {
  days: {
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
  }
};

const client = await createClient({
  url: process.env.REDIS_URL as string,
}).connect();

export const getSchedule = async () => {
  const scheduleStr: string | null = await client.get("schedule");
  if (!scheduleStr) {
    return defaultSchedule;
  }
  const schedule: Schedule = JSON.parse(scheduleStr);
  if (!schedule.days) {
    throw new Error("No se ha podido cargar el horario.");
  }
  return schedule;
};

export const saveSchedule = async (schedule: Schedule) => {
  await client.set("schedule", JSON.stringify(schedule));
};