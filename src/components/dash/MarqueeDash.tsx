"use client";

import { useState } from "react";
import { MarqueePreview } from "./MarqueePreview";
import { ArrowLeft, ArrowRight, Loader, Trash2 } from "lucide-react";
import Image from "next/image";
import { MarqueeDashUpload } from "./MarqueeDashUpload";

export const MarqueeDash = (props: { images: string[] }) => {
  const [images, setImages] = useState(props.images);
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const moveImage = (fromIndex: number, toIndex: number, update = true) => {
    setImages(prev => {
      const updated = [...prev];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      return updated;
    });

    if (update) {
      setLoading(true);
      fetch("/api/marquee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ fromIndex, toIndex }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.error(data);
            moveImage(fromIndex, toIndex, false);
            alert("Error al actualizar el orden de las imágenes. Por favor, inténtalo de nuevo.");
          }
        })
        .catch((err) => {
          console.error(err);
          moveImage(fromIndex, toIndex, false);
          alert("Error al actualizar el orden de las imágenes. Por favor, inténtalo de nuevo.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const moveImageLeft = (index: number) => {
    if (index > 0) {
      moveImage(index, index - 1);
    }
  };

  const moveImageRight = (index: number) => {
    if (index < images.length - 1) {
      moveImage(index, index + 1);
    }
  };

  const deleteImage = (indx: number) => {
    setLoading(true);
    fetch("/api/marquee", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ index: indx }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error(data);
          alert("Error al borrar la imagen. Por favor, inténtalo de nuevo.");
          return;
        }
        setImages(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error al borrar la imagen. Por favor, inténtalo de nuevo.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="max-w-6xl mx-auto mt-10">
      {loading &&
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Loader className="h-20 w-20 animate-spin" />
        </div>
      }

      <div
        style={loading ? {
          opacity: 0.5,
          pointerEvents: "none",
          userSelect: "none",
          touchAction: "none",
          cursor: "wait",
        } : {}}
      >
        <h1 className="text-3xl font-semibold mb-3">Carrusel</h1>
        <div className="flex gap-2 border-b boreder-gray-700 pb-3">
          <button
            className={`
              py-1 px-2 text-center font-semibold rounded-lg cursor-pointer hover:bg-gray-800/80 
              transition-all duration-300 ease-in-out
              ${tab === 0 ? "!bg-gray-800" : ""}
            `}
            onClick={() => setTab(0)}
          >
            Imágenes
          </button>

          <button
            className={`
              py-1 px-2 text-center font-semibold rounded-lg cursor-pointer hover:bg-gray-800/80 
              transition-all duration-300 ease-in-out
              ${tab === 1 ? "!bg-gray-800" : ""}
            `}
            onClick={() => setTab(1)}
          >
            Previsualización
          </button>
        </div>

        {tab === 0 &&
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 select-none w-full">
            {images.map((image, i) =>
              <div
                key={i}
                className="w-fit h-fit rounded-lg relative group overflow-hidden"
              >
                <Image
                  src={image}
                  className="w-full aspect-square object-cover rounded-lg flex-shrink-0"
                  draggable="false"
                  alt={"Imagen " + i}
                  width={240}
                  height={240}
                />

                <div
                  className="
                    absolute top-0 left-0 w-full h-full 
                    flex items-center justify-center gap-5
                    bg-black/50 backdrop-blur-sm
                    opacity-0 group-hover:opacity-100
                  "
                >
                  {i !== 0 &&
                    <ArrowLeft className="h-8 w-8 cursor-pointer" onClick={() => moveImageLeft(i)} />
                  }

                  {i !== images.length - 1 &&
                    <ArrowRight className="h-8 w-8 cursor-pointer" onClick={() => moveImageRight(i)} />
                  }

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-red-500">
                    <Trash2 className="h-6 w-6 cursor-pointer" onClick={() => deleteImage(i)} />
                  </div>
                </div>
              </div>
            )}

            <MarqueeDashUpload setLoading={setLoading} setImages={setImages} />
          </div>
        }

        {tab === 1 &&
          <div className="pt-5">
            <MarqueePreview images={images} />
          </div>
        }
      </div>
    </div>
  )
}
