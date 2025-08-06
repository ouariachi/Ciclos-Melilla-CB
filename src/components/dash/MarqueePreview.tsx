
export const MarqueePreview = ({ images }: { images: string[] }) => {
  return (
    <div className="relative overflow-hidden w-6xl max-w-[99dvw] mx-auto">
      <div className="w-4 h-full bg-gradient-to-r from-black to-transparent absolute left-0 top-0 z-10 pointer-events-none"></div>
      <div className="w-4 h-full bg-gradient-to-l from-black to-transparent absolute right-0 top-0 z-10 pointer-events-none"></div>

      <div id="images-wrapper" className="relative h-60 flex gap-4 select-none w-max">
        <div className="absolute flex gap-4 select-none w-max">
          {
            images.map((image, i) => (
              <img
                src={image}
                className="w-60 h-60 object-cover rounded-lg flex-shrink-0"
                draggable="false"
                alt={"Imagen " + i}
                key={i}
              />
            ))
          }
        </div>
        <div className="absolute flex gap-4 select-none w-max left-[1024px]">
          {
            images.map((image, i) => (
              <img
                src={image}
                className="w-60 h-60 object-cover rounded-lg flex-shrink-0"
                draggable="false"
                alt={"Imagen " + i}
                key={i}
              />
            ))
          }
        </div>
        <div className="absolute flex gap-4 select-none w-max left-[2048px]">
          {
            images.map((image, i) => (
              <img
                src={image}
                className="w-60 h-60 object-cover rounded-lg flex-shrink-0"
                draggable="false"
                alt={"Imagen " + i}
                key={i}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
