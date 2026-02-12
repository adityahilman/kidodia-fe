import CarouselWithAutoplay from "@/components/carousel"
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getProducts } from "@/lib/api/products"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Cetak Photobook untuk Semua Momen Bahagia | Kidodia",
  description: "Ubah foto-foto terbaikmu menjadi photobook berkualitas tinggi untuk liburan, pernikahan, ulang tahun, dan keluarga.",
  openGraph: {
    title: "Cetak Photobook untuk Semua Momen Bahagia | Kidodia",
    description: "Ubah foto-foto terbaikmu menjadi photobook berkualitas tinggi untuk liburan, pernikahan, ulang tahun, dan keluarga.",
    images: ["https://ik.imagekit.io/lovisha/assets/banner/banner_1.jpg"],
  },
};

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-stone-50">
      <Header />

      {/* ================= HERO / BANNER ================= */}
      <section className="mt-12">
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
      <section className="py-20 text-center bg-[#00947e]/10">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold tracking-tight text-stone-700">
            Cetak Photobook untuk Semua Momen Bahagia
          </h1>
          <p className="mt-4 text-gray-700">
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
        <section className="py-20 bg-stone-50 text-center">
          
          <div data-aos="fade-up" className="container mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold">
              Dipercaya untuk Mengabadikan Banyak Momen Berharga
            </h2>
            <p className="mt-3 text-gray-600">
              Ribuan pelanggan di Indonesia mempercayakan kenangan mereka ke Kidodia.
            </p>

            <CarouselWithAutoplay delay={2500} className="mt-12">
              <CarouselContent className="gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <CarouselItem key={item} className="basis-1/2 md:basis-1/4">
                    <Image
                      src={`https://ik.imagekit.io/kidodia/assets/review/${item}.jpg?updatedAt=1770765351197`}
                      className="mx-auto rounded-md shadow-md"
                      alt={`Customer Review ${item}`}
                      width={200}
                      height={200}
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Customer Review
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </CarouselWithAutoplay>
          </div>
        </section>
      

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
              <h2 className="text-xl font-semibold">Bahan Premium & Tahan Lama</h2>
              <p className="mt-3 text-gray-600">
                Menggunakan bahan berkualitas tinggi agar kenanganmu awet
                dan tampil maksimal.
              </p>
            </div>
          </div>
      
          <div className="grid lg:grid-cols-2 gap-10 items-center" data-aos="fade-up">
            
            <Image src="https://ik.imagekit.io/lovisha/assets/banner/banner_1.jpg?updatedAt=1770386200913" className="rounded-xl" alt="Cover Elegan" width={1200} height={400} />
            <div>
              <h2 className="text-xl font-semibold">Cover Elegan</h2>
              <p className="mt-3 text-gray-600">
                Desain cover modern yang cocok untuk semua momen.
              </p>
            </div>
          </div>

        </div>
      </section>
      
      {/* ================= PRODUCT LIST ================= */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-2xl font-semibold" data-aos="fade-up">
            Daftar Produk
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products
              .filter((product: any) => product.is_active) // Only show active products
              .map((product: any) => (
                <div data-aos="fade-up" key={product.slug} className="rounded-md border p-4 hover:scale-110 transition-all duration-500 cursor-pointer">
                  <Image
                    src={product.image_main_url}
                    className="mb-3 rounded-md"
                    alt={product.main_title}
                    width={400}
                    height={400}
                  />
                  <h3 className="font-semibold">{product.main_title}</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {product.main_description}
                  </p>
                  <div className="mb-3">
                    {product.discount_amount > 0 ? (
                      <div className="flex flex-col">
                        <span className="text-gray-400 line-through mr-2">
                          Rp{product.price.toLocaleString("id-ID")}
                        </span>
                        <span className="text-green-600 font-semibold">
                          Rp{product.final_price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    ) : (
                      <span className="text-blue-600 font-semibold">
                        Rp{product.price.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>
                  <Link href={`/products/${product.slug}`}>
                  <Button
                    id={`btn-product-${product.slug}`}
                    className="w-full rounded bg-[#0095a0] hover:bg-[#2f4858] cursor-pointer hover:scale-110 transition-all duration-300"
                  >
                    Lihat Detail
                  </Button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center" data-aos="fade-up">
            <Link href="/products"  >
          
            <Button id="btn-list-products" className="mt-8 px-14 py-6 text-lg rounded bg-[#0095a0] hover:bg-[#2f4858] cursor-pointer hover:scale-110 transition-all duration-300">
              Buat Photobookmu Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-gray-100 py-20">
        <div data-aos="fade-up" className="mx-auto max-w-4xl px-4">
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
                Berapa lama batas waktu upload foto setelah order?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Batas waktu upload foto adalah 30 hari setelah melakukan pemesanan.
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
            <details className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">
                Kalau saya ada kendala, bagaimana cara menghubungi customer service?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Silahkan hubungi customer service kami melalui WhatsApp di <span className="text-blue-600"><a href="https://wa.me/6281586575295">6281586575295</a></span> untuk bantuan lebih lanjut.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
