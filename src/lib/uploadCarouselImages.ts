import cloudinary from "./cloudinary";
import { getCarousel } from "./getCarousel";
import { randomUUID } from "crypto";

export async function uploadCarouselImages(files: File[]): Promise<string[]> {
  const images = await getCarousel();
  let index = images.length;

  await Promise.all(
    files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());

      return new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "CiclosMelillaCB/carrusel",
            use_filename: true,
            public_id: `${randomUUID()}_${index++}`,
            overwrite: true,
            resource_type: "image",
            invalidate: true,
          },
          (error, result) => {
            if (error || !result) {
              return reject(error);
            }
            resolve(result.public_id);
          }
        );

        uploadStream.end(buffer);
      });
    })
  );

  return await getCarousel();
}
