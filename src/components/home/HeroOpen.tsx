"use server";

import { getSchedule } from '@/lib/schedule';
import { isOpenNow } from '@/utils/schedule';

export default async function HeroOpen() {
  const openStatus = isOpenNow(await getSchedule());
  return (
    <div>
      {openStatus.isOpen &&
        <span className="bg-[#1d1d1d]/40 font-semibold text-green-500 px-2 py-1 rounded-full border-green-500/60 border">ABIERTO</span>
      }

      {!openStatus.isOpen &&
        <span className="bg-[#1d1d1d]/40 font-semibold text-red-500 px-2 py-1 rounded-full border-red-500/60 border">CERRADO</span>
      }
    </div>
  );
}