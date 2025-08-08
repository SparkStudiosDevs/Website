"use client"

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'

// Using placeholder images - replace with your actual portfolio images
const portfolioImages = [
  { src: img4, title: "Modern Interior" },
  { src: img3, title: "Contemporary Bedroom" },
  { src: img2, title: "Minimalist Kitchen" },
  { src: img1, title: "Luxury Bathroom" },
  { src: "/placeholder.svg?height=400&width=600", title: "Elegant Dining" },
  // { src: "/placeholder.svg?height=400&width=600", title: "Home Office" },
  // { src: "/placeholder.svg?height=400&width=600", title: "Stylish Balcony" },
  // { src: "/placeholder.svg?height=400&width=600", title: "Modern Entryway" },
  // { src: "/placeholder.svg?height=400&width=600", title: "Rustic Living" },
  // { src: "/placeholder.svg?height=400&width=600", title: "Industrial Loft" },
];

export const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    
    setCurrentIndex(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const getImageStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalImages = portfolioImages.length;
    
    // Handle circular positioning
    let position = diff;
    if (diff > totalImages / 2) {
      position = diff - totalImages;
    } else if (diff < -totalImages / 2) {
      position = diff + totalImages;
    }

    const absPosition = Math.abs(position);
    
    if (position === 0) {
      // Active image - center and largest
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 10,
        opacity: 1,
      };
    } else if (absPosition === 1) {
      // Adjacent images - closer to center
      return {
        transform: `translateX(${position * 35}%) scale(0.85)`,
        zIndex: 8,
        opacity: 0.9,
      };
    } else if (absPosition === 2) {
      // Outer images - brought much closer
      return {
        transform: `translateX(${position * 50}%) scale(0.7)`,
        zIndex: 6,
        opacity: 0.7,
      };
    } else {
      // Hidden images - fade in from behind center
      return {
        transform: 'translateX(0%) scale(0.4)',
        zIndex: 2,
        opacity: 0,
      };
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-6xl mx-auto px-8 py-12">
      <div className="relative w-full h-96 overflow-hidden">
        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-[#ff8638] hover:text-white hover:border-[#bd6b34] transition-all duration-300 shadow-lg z-20"
          onClick={() => api?.scrollPrev()}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-[#ff8638] hover:text-white hover:border-[#bd6b34] transition-all duration-300 shadow-lg z-20"
          onClick={() => api?.scrollNext()}
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
        </Button>

        {/* Hidden carousel for navigation */}
        <Carousel
          className="w-full h-full opacity-0 pointer-events-none"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {portfolioImages.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="w-full h-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Stacked images display */}
        <div className="absolute inset-0 flex items-center justify-center">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-out cursor-pointer"
              style={getImageStyle(index)}
              onClick={() => {
                const diff = index - currentIndex;
                if (diff > 0) {
                  api?.scrollNext();
                } else if (diff < 0) {
                  api?.scrollPrev();
                }
              }}
            >
              <div className="relative bg-white p-3 shadow-xl  drop-shadow-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-72 h-72 object-cover rounded"
                  loading="lazy"
                />
                {index === currentIndex && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-gray-600 italic text-lg font-medium">
                      {image.title}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex space-x-2 mt-8">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#ff8638]"
                : "w-2 bg-gray-400 hover:bg-gray-600"
            }`}
            onClick={() => {
              const diff = index - currentIndex;
              if (diff > 0) {
                for (let i = 0; i < diff; i++) {
                  api?.scrollNext();
                }
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) {
                  api?.scrollPrev();
                }
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
