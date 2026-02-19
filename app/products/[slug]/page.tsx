import Header from "@/components/header";
import Footer from "@/components/footer";

import { getProductBySlug } from "@/lib/api/products";

import OrderButtonComponent from "@/components/ButtonOrder";
import Image from "next/image";
import Link from "next/link";


export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* ================= HERO ================= */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative group">
            {product?.is_promo ? (
              <span className="absolute top-4 left-4 z-10 rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white">
                Promo
              </span>
            ) : null}

            <Image
              src={product?.image_main_url || `https://placehold.co/800x600?text=${resolvedParams.slug}`}
              alt={product?.main_title || "Photobook Preview"}
              className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              width={800}
              height={600}
              loading="eager"
            />
            
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {product?.main_title || "Photobook Premium"}
            </h1>

            <h2 className="mt-3 text-gray-700 max-w-md">
              {product?.main_description || "Abadikan momen spesial Anda dalam photobook berkualitas tinggi, dicetak dengan standar premium."}
            </h2>

            <p className="mt-6 text-sm">
              Spesifikasi photobook {product?.main_title}:
            </p>

            {product?.specifications && (
              <ul className="mt-1 mb-2 text-sm text-gray-700 list-disc list-inside">
                {JSON.parse(product.specifications).map((spec: string, idx: number) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            )}

            {/* Price Card */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-end gap-4">
                <span className="text-3xl font-semibold text-blue-600">
                  Rp {product?.final_price?.toLocaleString("id-ID") || "99.000"}
                </span>
                {product?.discount_amount > 0 && (
                  <span className="text-lg text-gray-400 line-through">
                    Rp {product?.price?.toLocaleString("id-ID")}
                  </span>
                )}
                {product?.discount_amount > 0 && (
                  <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-700">
                    Hemat {Math.round((product.discount_amount / product.price) * 100)}%
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <OrderButtonComponent
                  slug={resolvedParams.slug}
                  className="mt-6 w-full rounded py-6 text-lg font-semibold bg-[#0095a0] hover:bg-[#2f4858] transition"
                  id={`btn-order-${resolvedParams.slug}`}
                >
                  Pesan Sekarang
                </OrderButtonComponent>
                <Link
                  href={`https://wa.me/6281585675295/?text=Halo%2C%20saya%20mau%20pesan%20photobook%20${encodeURIComponent(resolvedParams.slug)}%2C%20bagaimana%20caranya%3F`}
                  className="rounded w-full bg-green-600 text-white py-2 hover:bg-green-800 text-center"
                  id="btn_wa"
                >
                  Pesan via Whatsapp
                </Link>
              </div>

              <p className="mt-3 text-center text-sm text-gray-500">
                * Proses mudah, cukup dari HP
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ================= DETAIL SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-20">

          {/* Cover Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" data-aos="fade-up">
           
            <Image 
              src={product?.image_secondary_url || `https://placehold.co/800x600?text=${resolvedParams.slug}`}
              alt="Cover Detail"
              className="rounded-2xl shadow-md"
              width={800}
              height={600}
            />
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold text-gray-900">
                {product?.second_title}
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {product?.second_description}
              </p>
            </div>
          </div>

          {/* Printing Quality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" data-aos="fade-up">
            <div className="max-w-md order-2 lg:order-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                {product?.third_title}
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {product?.third_description}
              </p>
            </div>
            <Image 
              src={product?.image_tertiary_url || `https://placehold.co/800x600?text=${resolvedParams.slug}`}
              alt="Cover Detail"
              className="rounded-2xl shadow-md"
              width={800}
              height={600}
            />
          </div>

          {/* CTA Again */}
          <div className="text-center" data-aos="fade-up">
            <OrderButtonComponent
              slug={resolvedParams.slug}
              className="px-14 py-7 text-lg font-semibold rounded bg-[#0095a0] hover:bg-[#2f4858] transition"
              id={`btn-order-${resolvedParams.slug}`}
            >
              Pesan Photobook Sekarang
            </OrderButtonComponent>

            <div className="my-6 flex justify-center gap-6 text-sm text-gray-500">
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
