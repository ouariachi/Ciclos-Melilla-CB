"use server";

import type { ResourceApiResponse } from "cloudinary";
import cloudinary from "./cloudinary";

export async function getCarousel(): Promise<string[]> {
  const res: ResourceApiResponse = await cloudinary.api.resources(
    {
      type: "upload",
      prefix: "CiclosMelillaCB/carrusel",
    },
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );

  // The files are named as "[filename]_X" where X is the index of the file
  return res.resources
    .sort((a, b) => {
      const aSplited = a.public_id.split("_");
      const bSplited = b.public_id.split("_");
      const aIndex = parseInt(aSplited[aSplited.length - 1]);
      const bIndex = parseInt(bSplited[bSplited.length - 1]);
      return aIndex - bIndex;
    })
    .map((resource) => resource.secure_url);
}


