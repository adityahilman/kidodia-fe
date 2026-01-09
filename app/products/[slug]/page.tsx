'use client'

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { v6 as uuidv6 } from "uuid";

function generateOrderId() {
  const date = new Date();
  const dateStr = date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
  const randomStr = Math.floor(1000 + Math.random() * 900000);
  return `PB-${dateStr}-${randomStr}`;
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const handleOrder = () => {
    const orderId = generateOrderId();
    router.push(`/checkout/create?orderId=${orderId}&product=${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* ================= HERO ================= */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative group">
            <span className="absolute top-4 left-4 z-10 rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white">
              Promo
            </span>

            <img
              src={`https://placehold.co/800x600?text=${slug}`}
              alt="Photobook Preview"
              className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Photobook Premium
            </h1>

            <p className="mt-3 text-gray-500 max-w-md">
              Abadikan momen spesial Anda dalam photobook berkualitas tinggi,
              dicetak dengan standar premium.
            </p>

            {/* Price Card */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-end gap-4">
                <span className="text-3xl font-semibold text-blue-600">
                  Rp 99.000
                </span>
                <span className="text-lg text-gray-400 line-through">
                  Rp 159.000
                </span>
                <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-700">
                  Hemat 38%
                </span>
              </div>

              <Button
                onClick={handleOrder}
                className="mt-6 w-full rounded-xl py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition"
              >
                Pesan Sekarang
              </Button>

              <p className="mt-3 text-center text-sm text-gray-500">
                * Proses mudah, cukup dari HP
              </p>
            </div>

            {/* Features */}
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              {[
                "Kertas tebal & tahan lama",
                "Warna tajam & detail",
                "Desain simpel & elegan",
                "Upload foto langsung dari HP",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* ================= DETAIL SECTION ================= */}
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6 space-y-32">

          {/* Cover Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://placehold.co/600x400?text=Cover+Detail"
              alt="Cover Detail"
              className="rounded-2xl shadow-md"
            />
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold text-gray-900">
                Cover Elegan & Kokoh
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Menggunakan material cover premium yang kuat dan tahan lama,
                memberikan kesan eksklusif sekaligus melindungi kenangan Anda.
              </p>
            </div>
          </div>

          {/* Printing Quality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-md order-2 lg:order-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                Kualitas Cetak Tajam
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Dicetak dengan teknologi high-resolution printing untuk warna
                yang hidup, detail tajam, dan hasil yang konsisten di setiap halaman.
              </p>
            </div>
            <img
              src="https://placehold.co/600x400?text=Printing+Quality"
              alt="Printing Quality"
              className="rounded-2xl shadow-md order-1 lg:order-2"
            />
          </div>

          {/* CTA Again */}
          <div className="text-center pt-10">
            <Button
              onClick={handleOrder}
              className="px-14 py-7 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            >
              Pesan Photobook Sekarang
            </Button>

            <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
              <span>✔ Cetak Premium</span>
              <span>✔ Mudah dari HP</span>
              <span>✔ Kirim ke Seluruh Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
