import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";

const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
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

  return (
    <div className="flex flex-col items-center space-y-6 w-full max-w-sm mx-auto px-8 py-8">
      <div className="relative w-full max-w-64 sm:max-w-72 aspect-square">
        <Carousel 
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {portfolioImages.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="w-full h-full aspect-square overflow-hidden rounded-lg bg-card border border-border shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <img
                    src={image}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md"
            onClick={() => api?.scrollPrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-12 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md"
            onClick={() => api?.scrollNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
          </Button>
        </Carousel>
      </div>
      
      <div className="flex space-x-2">
        {portfolioImages.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};