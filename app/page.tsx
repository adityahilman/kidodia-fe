'use client'
import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex w-screen flex-col">

      <div id="section-top-promo" className="flex justify-center items-center w-screen bg-[#3F9AAE]">
        <p className="text-white p-2 text-xs lg:text-base tracking-wider" id="top-promo-link">Klik Disini untuk Lihat Promo!</p>
      </div>

      <div className="flex" id="carousel-banner">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]} 
          className="w-screen relative overflow-visible">
          <CarouselContent className="gap-0">
            <CarouselItem className="h-60 lg:h-100 w-full p-0 m-0">
              <a href="/products/sample-1">
                <img id="banner_1" src="https://placehold.co/600x400?text=Banner 1" alt="Sample 1" className="w-full h-full object-cover" />
              </a>
            </CarouselItem>
            <CarouselItem className="h-60 lg:h-100 w-full p-0 m-0">
              <a href="/products/sample-2">
                <img id="banner_2" src="https://placehold.co/600x400?text=Banner 2" alt="Sample 2" className="w-full h-full object-cover" />
              </a>
            </CarouselItem>
            <CarouselItem className="h-60 lg:h-100 w-full p-0 m-0">
              <a href="/products/sample-3">
                <img id="banner_3" src="https://placehold.co/600x400?text=Banner 3" alt="Sample 3" className="w-full h-full object-cover" />
              </a>
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselNext className="z-20 bg-white absolute right-4 top-1/2 -translate-y-1/2" />
          <CarouselPrevious className="z-20 bg-white absolute left-4 top-1/2 -translate-y-1/2" /> */}
        </Carousel>
      </div>

      <div id="section-products" className="w-screen p-10">
        <div className="">
          <h2 className="text-lg text-center font-semibold tracking-wider mb-4">Daftar Produk</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border p-4">
                <img src={`https://placehold.co/200x200?text=Product+${item}`} alt={`Product ${item}`} className="w-full h-auto mb-2" />
                <h3 className="font-semibold">Produk {item}</h3>
                <p className="text-gray-600 text-xs mb-4">Deskripsi singkat produk {item}.</p>
                <Button id={`btn-product-${item}`} className="mt-2 w-full bg-[#3F9AAE] rounded-xs">Lihat Detail</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="section-footer">
        <Footer />

      </div>
      
    </div>
  );
}
