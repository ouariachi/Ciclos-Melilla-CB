import { useCallback, useEffect, useRef, useState } from "react";

interface MarqueeDashUploadProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export const MarqueeDashUpload = ({ setLoading, setImages }: MarqueeDashUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const dragCounter = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = useCallback(async () => {
    if (files.length === 0) return;
    setLoading(true);

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const res = await fetch("/api/marquee", {
        method: "PUT",
        credentials: "include",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error al subir la imagen.");
      }

      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      }
    } catch (err) {
      console.error(err);
      alert("Error al subir las imágenes. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
      setFiles([]);
    }
  }, [files, setLoading, setImages])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles(fileArray);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCounter.current++;
      setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounter.current--;
      if (dragCounter.current === 0) {
        setIsDragging(false);
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dragCounter.current = 0;
      setIsDragging(false);
      const fileArray = Array.from(e.dataTransfer?.files || []);
      setFiles(fileArray);
    };

    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("drop", handleDrop);
    };
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      upload();
    }
  }, [files, upload]);

  return (
    <div className="relative w-full h-full">
      <div
        className="
          w-full aspect-square rounded-lg flex-shrink-0 text-sm text-blue-300 text-center
          bg-blue-500/30 backdrop-blur-sm border-2 border-blue-500
          flex flex-col items-center justify-center cursor-pointer
        "
        onClick={handleClick}
      >
        <div>Arrastra y suelta una imagen</div>
        <div>o</div>
        <div>Haz click aquí</div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {isDragging && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="w-full max-w-4xl h-full max-h-[500px] bg-blue-500/30 border-2 border-dotted border-blue-500 rounded-lg flex flex-col items-center justify-center">
            Suelta tu imagen aquí
          </div>
        </div>
      )}
    </div>
  );
};
