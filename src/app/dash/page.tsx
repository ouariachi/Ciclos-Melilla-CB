"use server";

import { MarqueeDash } from "@/components/dash/MarqueeDash";
import { getCarousel } from "@/lib/getCarousel";

export default async function Dash() {
  const images = await getCarousel();
  return (
    <MarqueeDash images={images} />
  );
}