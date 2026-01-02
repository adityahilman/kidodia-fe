'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug;
  return (
    <div>
      <Header />
      <div id="section-product-detail" className="w-full max-w-4xl mx-auto mt-16 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="shrink-0">
            <img
              src={`https://placehold.co/600x400?text=${slug}`}
              alt="Product Detail Banner"
              className="w-full max-w-md rounded shadow"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2 tracking-wider">Product Title</h1>
            <div className="flex flex-col text-lg mb-4">
              <span className="line-through text-gray-400">Rp 159.000</span>
              <span className="text-2xl text-primary font-semibold">Rp 99.000</span>
            </div>
            <p className="mb-4 text-gray-700">
              Photobook premium dengan kualitas cetak terbaik. Cocok untuk mengabadikan momen spesial seperti liburan, pernikahan, ulang tahun, dan keluarga.
            </p>
            <ul className="mb-4 list-disc list-inside text-gray-600">
              <li>Kertas tebal dan tahan lama</li>
              <li>Warna tajam dan detail</li>
              <li>Desain layout simpel dan elegan</li>
              <li>Bisa upload foto langsung dari HP</li>
            </ul>
           
            <Button className="mt-4 rounded-none py-6">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}