'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { v6 } from "uuid";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  const btnOrder = () => {
    const orderId = v6();
    router.push(`/checkout/create?orderId=${orderId}&product=${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
              Promo
            </div>
            <img
              src={`https://placehold.co/800x600?text=${slug}`}
              alt="Product Detail Banner"
              className="w-full rounded-2xl shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Photobook Premium
            </h1>

            <p className="mt-2 text-gray-500">
              Abadikan momen spesial Anda dalam photobook berkualitas tinggi
            </p>

            {/* Price */}
            <div className="mt-6 flex items-end gap-4">
              <span className="text-3xl font-semibold text-primary">
                Rp 99.000
              </span>
              <span className="text-lg text-gray-400 line-through">
                Rp 159.000
              </span>
              <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-700">
                Hemat 38%
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-700 leading-relaxed">
              Photobook premium dengan kualitas cetak terbaik. Cocok untuk
              mengabadikan berbagai momen bahagia seperti liburan, pernikahan,
              ulang tahun, dan keluarga.
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Kertas tebal & tahan lama
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Warna tajam dan detail
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Desain layout simpel & elegan
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Upload foto langsung dari HP
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                className="rounded-xl py-6 text-base font-semibold w-full sm:w-auto px-10"
                onClick={btnOrder}
              >
                Pesan Sekarang
              </Button>
              <Button
                variant="outline"
                className="rounded-xl py-6 text-base w-full sm:w-auto px-10"
              >
                Tanya Admin
              </Button>
            </div>

            {/* Trust Note */}
            <p className="mt-4 mb-10 text-sm text-gray-500">
              * Proses mudah, cukup dari HP Anda.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
