"use server";

import type { ResourceApiResponse } from "cloudinary";
import cloudinary from "./cloudinary";

export async function sortCarousel(fromIndex: number, toIndex: number) {
  const res: ResourceApiResponse = await cloudinary.api.resources({
    type: "upload",
    prefix: "CiclosMelillaCB/carrusel",
  });

  const fromResource = res.resources.find((res) => {
    const splited = res.public_id.split("_");
    const index = parseInt(splited[splited.length - 1]);
    return index === fromIndex;
  });

  const toResource = res.resources.find((res) => {
    const splited = res.public_id.split("_");
    const index = parseInt(splited[splited.length - 1]);
    return index === toIndex;
  });

  if (!fromResource || !toResource) {
    throw new Error("No se pudo encontrar el recurso.");
  }

  const fromResourcePublicIdSplited = fromResource.public_id.split("_");
  const toResourcePublicIdSplited = toResource.public_id.split("_");

  fromResourcePublicIdSplited[fromResourcePublicIdSplited.length - 1] = `${toIndex}`;
  toResourcePublicIdSplited[toResourcePublicIdSplited.length - 1] = `${fromIndex}`;

  const fromResourcePublicId = fromResourcePublicIdSplited.join("_");
  const toResourcePublicId = toResourcePublicIdSplited.join("_");

  try {
    await cloudinary.uploader.rename(fromResource.public_id, fromResourcePublicId, { overwrite: true });
    await cloudinary.uploader.rename(toResource.public_id, toResourcePublicId, { overwrite: true });

    const newRes: ResourceApiResponse = await cloudinary.api.resources({
      type: "upload",
      prefix: "CiclosMelillaCB/carrusel",
    });

    return newRes.resources
      .sort((a, b) => {
        const aSplited = a.public_id.split("_");
        const bSplited = b.public_id.split("_");
        const aIndex = parseInt(aSplited[aSplited.length - 1]);
        const bIndex = parseInt(bSplited[bSplited.length - 1]);
        return aIndex - bIndex;
      })
      .map((resource) => resource.secure_url);
  } catch (err) {
    console.error(err);
    throw new Error(`Error renombrando a final: ${fromResource.public_id} → ${fromResourcePublicId}`);
  }
}
