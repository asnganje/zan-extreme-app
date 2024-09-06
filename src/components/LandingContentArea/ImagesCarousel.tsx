import img1 from "/landingImg1.png";
import img2 from "/landingImg2.png";
import img3 from "/landingImg3.png";
import { Card, CardHeader } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { useEffect, useState } from "react";

const images = [
  { id: 1, src: img1, alt: "landing img1" },
  { id: 2, src: img2, alt: "landing img2" },
  { id: 3, src: img3, alt: "landing img3" },
];

function ImagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative w-full h-[30vh] xs:h-[40vh] md:h-[80vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0  transition-transform duration-1000 ease-in-out ${
            currentIndex === index
              ? "transform translate-x-0 z-10"
              : "transform translate-x-full z-0"
          } ${
            currentIndex === (index + 1) % images.length
              ? "transform -translate-x-1/2 z-20"
              : ""
          }`}
        >
          <Card className="h-full w-full">
            <CardHeader className="!p-0 ">
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
    </div>
  );
}
export default ImagesCarousel;
