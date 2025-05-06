import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

interface ImageCarouselProps {
  imageUrls: string[];
  name: string;
}

function ImageCarousel({ imageUrls, name }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % imageUrls.length;
    setActiveIndex(nextIndex);
  }, [activeIndex, imageUrls.length]);

  const goToPrevious = useCallback(() => {
    const prevIndex = (activeIndex - 1 + imageUrls.length) % imageUrls.length;
    setActiveIndex(prevIndex);
  }, [activeIndex, imageUrls.length]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!isHovered && imageUrls.length > 1) {
      intervalId = setInterval(goToNext, 5000);
    }
    return () => clearInterval(intervalId);
  }, [goToNext, isHovered, imageUrls.length]);

  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="relative h-[300px] w-full overflow-hidden">
        <div
          className="h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="h-full w-full relative">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className={`absolute h-full w-full transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="h-full w-full flex items-center justify-center bg-black">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={url}
                    alt={`${name} screenshot ${index + 1}`}
                    className="h-full w-full object-contain"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2029] to-transparent opacity-60"></div>
              </div>
            ))}
          </div>

          {imageUrls.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition"
                onClick={goToPrevious}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition"
                onClick={goToNext}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center">
            {imageUrls.length > 1 &&
              imageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`mx-1 h-2 w-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
