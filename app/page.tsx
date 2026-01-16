'use client'

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getProducts } from "@/lib/api/products"

export default function Home() {
  const router = useRouter()
  const [products, setProducts] = useState<any[]>([])

  const btnProductDetail = (id: number) => {
    router.push(`/products/${id}`)
  }

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    })
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-stone-50">
      <Header />

      {/* ================= HERO / BANNER ================= */}
      <section className="mt-12">
        <Carousel plugins={[Autoplay({ delay: 3000 })]}>
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item} className="p-0">
                <a href={`/products/sample-${item}`}>
                  <img
                    src={`https://placehold.co/1440x420?text=Banner+${item}`}
                    alt={`Banner ${item}`}
                    className="h-60 md:h-95 w-full object-cover"
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* ================= TITLE & CTA ================= */}
      <section className="py-20 text-center bg-[#00947e]/10">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold tracking-tight text-stone-700">
            Cetak Photobook untuk Semua Momen Bahagia
          </h1>
          <p className="mt-4 text-gray-700">
            Ubah foto-foto terbaikmu menjadi photobook berkualitas tinggi
            untuk liburan, pernikahan, ulang tahun, dan keluarga.
          </p>
          <Button id="btn-list-products" className="mt-8 px-14 py-6 text-lg rounded bg-[#0095a0] hover:bg-[#2f4858] cursor-pointer hover:scale-110 transition-all duration-300" onClick={() => router.push('/products')}>
            Buat Photobook Sekarang
          </Button>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-20 bg-stone-50 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-semibold">
            Dipercaya untuk Mengabadikan Banyak Momen Berharga
          </h2>
          <p className="mt-3 text-gray-600">
            Ribuan pelanggan di Indonesia mempercayakan kenangan mereka ke Kidodia.
          </p>

          <Carousel plugins={[Autoplay({ delay: 2500 })]} className="mt-12">
            <CarouselContent className="gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <CarouselItem key={item} className="basis-1/2 md:basis-1/4">
                  <img
                    src={`https://placehold.co/220x360?text=Review+${item}`}
                    className="mx-auto rounded-lg shadow-md"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Customer Review
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </section>

      {/* ================= WHY KIDODIA ================= */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
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
          <h2 className="text-2xl font-semibold">
            Abadikan Momen Kamu dengan Mudah
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pilih Produk", "Tentukan photobook favoritmu"],
              ["Checkout", "Bayar & konfirmasi pesanan"],
              ["Upload Foto", "Upload foto terbaikmu"],
              ["Produksi & Kirim", "Dicetak & dikirim ke rumah"],
            ].map(([title, desc], i) => (
              <div key={i}>
                <img src="https://placehold.co/180x180" className="mx-auto" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCT KNOWLEDGE ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 space-y-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <img src="https://placehold.co/600x400" className="rounded-xl" />
            <div>
              <h2 className="text-xl font-semibold">Bahan Premium & Tahan Lama</h2>
              <p className="mt-3 text-gray-600">
                Menggunakan bahan berkualitas tinggi agar kenanganmu awet
                dan tampil maksimal.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl font-semibold">Cover Elegan</h2>
              <p className="mt-3 text-gray-600">
                Desain cover modern yang cocok untuk semua momen.
              </p>
            </div>
            <img src="https://placehold.co/600x400" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* ================= PRODUCT LIST ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-2xl font-semibold">
            Daftar Produk
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products
              .filter((product: any) => product.is_active) // Only show active products
              .map((product: any) => (
                <div key={product.slug} className="rounded-md border p-4 hover:scale-110 transition-all duration-500 cursor-pointer" onClick={() => btnProductDetail(product.slug)}>
                  <img
                    src={product.image_main_url}
                    className="mb-3 rounded-md"
                    alt={product.main_title}
                  />
                  <h3 className="font-semibold">{product.main_title}</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {product.main_description}
                  </p>
                  <div className="mb-3">
                    {product.discount_amount > 0 ? (
                      <div>
                        <span className="text-gray-400 line-through mr-2">
                          Rp{product.price.toLocaleString("id-ID")}
                        </span>
                        <span className="text-green-600 ">
                          Rp{product.final_price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    ) : (
                      <span className="text-blue-600">
                        Rp{product.price.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>
                  <Button
                    className="w-full rounded bg-[#0095a0] hover:bg-[#2f4858] cursor-pointer hover:scale-110 transition-all duration-300"
                    onClick={() => btnProductDetail(product.slug)}
                  >
                    Lihat Detail
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-2xl font-semibold">
            Pertanyaan Seputar Photobook
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">
                Photobook cocok untuk momen apa saja?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Cocok untuk semua momen bahagia seperti liburan, pernikahan, dan keluarga.
              </p>
            </details>
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">
                Bisa order dari HP?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Bisa, semua proses bisa dilakukan langsung dari handphone.
              </p>
            </details>
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">
                Berapa lama proses cetak?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Rata-rata 7–14 hari kerja.
              </p>
            </details>
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">
                Saya sudah pernah pesan, tapi belum upload fotonya, bagaimana caranya ya?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Untuk upload foto, silahkan klik link ini lalu masukkan nomor order dan email yang digunakan saat pemesanan: <span className="text-blue-600"><a href={`${process.env.NEXT_PUBLIC_BASE_URL}/order`}>https://kidodia.com/order</a></span>
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
