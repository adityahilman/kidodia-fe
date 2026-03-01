import CarouselWithAutoplay from "@/components/carousel"
import {
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import ProductList from "@/components/ProductList"
import FAQ from "@/components/FAQ"
import CustomerReview from "@/components/CustomerReview"

export const metadata = {
  title: "Karena Momen Bahagia Layak Dicetak, Bukan Hanya Disimpan | Kidodia",
  description: "Ubah foto-foto terbaikmu menjadi photobook berkualitas tinggi untuk liburan, pernikahan, ulang tahun, dan keluarga.",
  openGraph: {
    title: "Karena Momen Bahagia Layak Dicetak, Bukan Hanya Disimpan | Kidodia",
    description: "Ubah foto-foto terbaikmu menjadi photobook berkualitas tinggi untuk liburan, pernikahan, ulang tahun, dan keluarga.",
    images: ["https://ik.imagekit.io/lovisha/assets/banner/banner_1.jpg"],
  },
};

export default async function Home() {


  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-stone-50">
      <Header />

      {/* ================= HERO / BANNER ================= */}
      <section className="mt-12 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 bg-black/40">
          <h1 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg text-center">
            Karena Momen Bahagia Layak Dicetak, Bukan Hanya Disimpan
          </h1>
          
        </div>
        <CarouselWithAutoplay delay={3000}>
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item} className="p-0">
                <a href={`/products/sample-${item}`}>
                  <Image
                    src={`https://ik.imagekit.io/kidodia/assets/banner/banner_${item}.jpg`}
                    alt={`Banner ${item}`}
                    className="h-[40vw] min-h-40 max-h-96 md:h-96 w-full object-cover"
                    width={1200}
                    height={400}
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselWithAutoplay>
      </section>

      {/* ================= TITLE & CTA ================= */}
      <section className="py-10 text-center bg-[#00947e]/10">
        <div className="container mx-auto max-w-3xl px-4">
          <p className=" text-gray-700">
            Ubah foto-foto terbaikmu menjadi photobook berkualitas tinggi
            untuk liburan, pernikahan, ulang tahun, dan keluarga.
          </p>
          <Link href="/products"  >
            <Button id="btn-list-products" className="mt-8 px-14 py-6 text-lg rounded bg-[#0095a0] hover:bg-[#2f4858] cursor-pointer hover:scale-110 transition-all duration-300">
              Buat Photobook Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <div className="px-6">
        <CustomerReview />
      </div>

      {/* ================= WHY KIDODIA ================= */}
      
        <section className="bg-gray-100 py-20">
          <div data-aos="fade-up" className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-2xl font-semibold">
              Kenanganmu Layak Dicetak dengan Baik
            </h2>
            <p className="mt-2 text-gray-600">
              Semua proses dibuat simpel, cepat, dan berkualitas.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Upload dari HP", "Tanpa ribet, langsung dari handphone"],
                ["Desain Rapi", "Layout elegan untuk semua momen"],
                ["Kualitas Premium", "Warna tajam & kertas tebal"],
                ["Kirim ke Rumah", "Pengiriman ke seluruh Indonesia"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      

      {/* ================= ORDER FLOW ================= */}
      
      <section className="py-20 text-center">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 data-aos="fade-up" className="text-2xl font-semibold">
            Abadikan Momen Kamu dengan Mudah
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pilih Photobook", "Pilih photobook yang sesuai dengan kebutuhanmu", `/icons/select-product.png`],
              ["Checkout", "Selesaikan pembayaran dengan cepat dan aman, kemudian pesananmu langsung kami proses", `/icons/checkout.png`],
              ["Upload Foto", "Unggah foto-foto terbaikmu, biarkan kami mengubahnya jadi kenangan yang indah", `/icons/upload-photos.png`],
              ["Produksi & Kirim", "Photobook dicetak dengan penuh perhatian lalu dikirim hingga ke alamatmu", `/icons/package-done.png`],
            ].map(([title, desc, image], i) => (
                <div key={i} data-aos="fade-up">
                <Image src={image || "https://placehold.co/180x180"} className="mx-auto h-20 w-20" alt={title} width={80} height={80} />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCT KNOWLEDGE ================= */}
      <section className="py-20 bg-white">
        <div  className="container mx-auto max-w-6xl px-4 space-y-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center"  data-aos="fade-up">
            <Image src="https://ik.imagekit.io/lovisha/assets/banner/banner_3.jpg?updatedAt=1770386200913" className="rounded-xl" alt="Bahan Premium & Tahan Lama" width={1200} height={400} />
            <div>
              <h2 className="text-xl font-semibold">Kualitas yang Terasa di Setiap Sentuhan</h2>
              <p className="mt-3 text-gray-600">
                Kenangan berharga pantas disimpan dalam kualitas terbaik. Dari cover yang kokoh hingga halaman yang halus dan nyaman disentuh, setiap detail dirancang untuk membuat momen bahagiamu terasa lebih nyata. Karena ketika kamu membukanya kembali, yang ingin kamu rasakan bukan hanya melihat foto tapi menghidupkan kembali ceritanya.
              </p>
            </div>
          </div>
      
          <div className="grid lg:grid-cols-2 gap-10 items-center" data-aos="fade-up">
            
            <Image src="https://ik.imagekit.io/lovisha/assets/banner/banner_1.jpg?updatedAt=1770386200913" className="rounded-xl" alt="Cover Elegan" width={1200} height={400} />
            <div>
              <h2 className="text-xl font-semibold">Elegan, Modern, dan Tak Lekang Waktu</h2>
              <p className="mt-3 text-gray-600">
                Desain cover dibuat simpel namun berkelas, dengan detail rapi dan tampilan yang tetap terlihat mewah. Cocok untuk berbagai momen spesial, dan tetap indah meski dilihat bertahun-tahun kemudian.
              </p>
            </div>
          </div>

        </div>
      </section>
      
      <ProductList />
      
      <FAQ />

      <Footer />
    </div>
  )
}
