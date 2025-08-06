"use server";

import type { ResourceApiResponse } from "cloudinary";
import cloudinary from "./cloudinary";

export async function deleteCarouselImage(index: number) {
  const res: ResourceApiResponse = await cloudinary.api.resources({
    type: "upload",
    prefix: "CiclosMelillaCB/carrusel",
  });

  const toDelete = res.resources.find((res) => {
    const split = res.public_id.split("_");
    const idx = parseInt(split[split.length - 1]);
    return idx === index;
  });

  if (!toDelete) {
    throw new Error(`No se encontró la imagen con índice ${index}`);
  }

  await cloudinary.uploader.destroy(toDelete.public_id, { invalidate: true });

  const remaining = res.resources
    .filter((res) => res.public_id !== toDelete.public_id)
    .sort((a, b) => {
      const aSplit = a.public_id.split("_");
      const bSplit = b.public_id.split("_");
      const aIndex = parseInt(aSplit[aSplit.length - 1]);
      const bIndex = parseInt(bSplit[bSplit.length - 1]);
      return aIndex - bIndex;
    });

  await Promise.all(
    remaining.map(async (res, newIndex) => {
      const split = res.public_id.split("_");
      split[split.length - 1] = `${newIndex}`;
      const newPublicId = split.join("_");

      if (res.public_id !== newPublicId) {
        await cloudinary.uploader.rename(res.public_id, newPublicId, {
          overwrite: true,
        });
      }
    })
  );

  const finalRes: ResourceApiResponse = await cloudinary.api.resources({
    type: "upload",
    prefix: "CiclosMelillaCB/carrusel",
  });

  return finalRes.resources
    .sort((a, b) => {
      const aSplit = a.public_id.split("_");
      const bSplit = b.public_id.split("_");
      const aIndex = parseInt(aSplit[aSplit.length - 1]);
      const bIndex = parseInt(bSplit[bSplit.length - 1]);
      return aIndex - bIndex;
    })
    .map((resource) => resource.secure_url);
}
