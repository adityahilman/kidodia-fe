'use client'
import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <div className="flex justify-center items-center w-screen bg-blue-400">
        <h1 className="text-white">Welcome to Kidodia</h1>
      </div>
      <div className="flex">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]} 
          className="w-screen relative overflow-visible">
          <CarouselContent>
            <CarouselItem className="h-60 w-full">
              <img src="https://placehold.co/600x400?text=Image1" alt="Sample 1" className="w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="h-60 w-full">
              <img src="https://placehold.co/600x400?text=Image2" alt="Sample 2" className="w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="h-60 w-full">
              <img src="https://placehold.co/600x400?text=Image3" alt="Sample 3" className="w-full h-full object-cover" />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="z-20 bg-white absolute right-4 top-1/2 -translate-y-1/2" />
          <CarouselPrevious className="z-20 bg-white absolute left-4 top-1/2 -translate-y-1/2" />
        </Carousel>

      </div>
      
    </div>
  );
}
