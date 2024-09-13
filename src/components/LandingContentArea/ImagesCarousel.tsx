import img1 from "/landingImg1.png";
import img2 from "/landingImg2.png";
import img3 from "/landingImg3.png";
import { Card, CardHeader } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Assuming you're using Lucide icons

const images = [
  { id: 3, src: img3, alt: "landing img3" },
  { id: 1, src: img1, alt: "landing img1" },
  { id: 2, src: img2, alt: "landing img2" },
];

function ImagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[30vh] xs:h-[40vh] md:h-[80vh] overflow-hidden">
      {/* Arrows stay fixed here */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 z-30"
      >
        <ChevronLeft className="w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw]" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 z-30"
      >
        <ChevronRight className="w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw]" />
      </button>

      {/* Images container */}
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Card className="h-full w-full">
            <CardHeader className="!p-0">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[30vh] xs:h-[40vh] md:h-[80vh] object-cover"
                />
              </AspectRatio>
            </CardHeader>
          </Card>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImagesCarousel;
