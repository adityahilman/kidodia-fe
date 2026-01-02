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
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <Header />

      {/* <div id="section-top-promo" className="flex justify-center items-center w-screen bg-[#3F9AAE]">
        <p className="text-white p-2 text-xs lg:text-base tracking-wider" id="top-promo-link">Klik Disini untuk Lihat Promo!</p>
      </div> */}

      <div className="flex" id="carousel-banner">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]} 
          className="w-screen relative overflow-visible">
          <CarouselContent className="gap-0">
            <CarouselItem className="h-full w-full p-0 m-0">
              <a href="/products/sample-1" id="banner_1">
                <img id="image_banner_1" src="https://placehold.co/1024x300?text=Banner-1+1024x300" alt="Sample 1" className="w-full object-cover" />
              </a>
            </CarouselItem>
            <CarouselItem className="h-full w-full p-0 m-0">
              <a href="/products/sample-2" id="banner_2">
                <img id="image_banner_2" src="https://placehold.co/1024x300?text=Banner-2+1024x300" alt="Sample 2" className="w-full object-cover" />
              </a>
            </CarouselItem>
            <CarouselItem className="h-full w-full p-0 m-0">
              <a href="/products/sample-3" id="banner_3">
                <img id="image_banner_3" src="https://placehold.co/1024x300?text=Banner-3+1024x300" alt="Sample 3" className="w-full object-cover" />
              </a>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="z-20 bg-white absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
          <CarouselPrevious className="z-20 bg-white absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
        </Carousel>
      </div>

      <div id="section-order-flow" className="w-screen text-center px-20 bg-neutral-100 py-10">
        <div>
          <h2 className="text-lg text-[#F875AA] font-semibold">Abadikan Momen Kamu Dengan Mudah!</h2>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-10">
          <div id="section-order-step-1">
            <div>
              <img src="https://placehold.co/200x200?text=200x200" alt="Step 1" className="mx-auto" />
            </div>
            <div>
              <h3 className="font-semibold mt-2">Pilih Produk</h3>
              <p className="text-xs text-gray-600 mt-1">Pilih produk favoritmu dari katalog kami yang beragam.</p>
            </div>
          </div>

          <div id="section-order-step-2">
            <div>
              <img src="https://placehold.co/200x200?text=200x200" alt="Step 2" className="mx-auto" />
            </div>
            <div>
              <h3 className="font-semibold mt-2">Checkout</h3>
              <p className="text-xs text-gray-600 mt-1">Lakukan pembayaran dan konfirmasi pesananmu dengan mudah.</p>
            </div>
          </div>

          <div id="section-order-step-3">
            <div>
              <img src="https://placehold.co/200x200?text=200x200" alt="Step 3" className="mx-auto" />
            </div>
            <div>
              <h3 className="font-semibold mt-2">Upload Foto</h3>
              <p className="text-xs text-gray-600 mt-1">Upload foto favoritmu.</p>
            </div>
          </div>

          <div id="section-order-step-4">
            <div>
              <img src="https://placehold.co/200x200?text=200x200" alt="Step 4" className="mx-auto" />
            </div>
            <div>
              <h3 className="font-semibold mt-2">Proses Produksi</h3>
              <p className="text-xs text-gray-600 mt-1">Kamu tinggal menunggu produk jadi dan dikirim ke alamatmu. Proses pembuatannya membutuhkan waktu 7-14 hari kerja ya.</p>
            </div>
          </div>

        </div>

      </div>

      <div id="section-product-knowledge" className="mt-10 max-w-screen mx-auto">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 p-2">
          <div className="flex justify-end">
            <img src="https://placehold.co/600x400?text=600x400" alt="Product Knowledge Banner" className="object-cover" />
          </div>
          <div className="max-w-md  flex flex-col justify-center">
            <div>
              <h2>Bahan Premium dan Tahan Lama</h2>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate magni consectetur itaque animi fugit officiis cum ad, quia excepturi eum ex dolore. Est aliquid blanditiis provident aliquam, veritatis saepe?
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 p-2 mt-10">
          <div className="max-w-md flex flex-col justify-center ">
            <div>
              <h2>Cover</h2>
            </div>
            <div className="mt-2">
              <p className=" text-gray-600 items-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate magni consectetur itaque animi fugit officiis cum ad, quia excepturi eum ex dolore. Est aliquid blanditiis provident aliquam, veritatis saepe?
              </p>
            </div>
          </div>
          <div className="flex justify-start border">
            <img src="https://placehold.co/600x400?text=600x400" alt="Product Knowledge Banner" className="object-cover" />
          </div>
        </div>

      </div>

      <div id="section-products" className="w-screen p-10">
        <div className="">
          <h2 className="text-lg text-center font-semibold tracking-wider mb-4">Daftar Produk</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-4">
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
