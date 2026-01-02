'use client'
import Header from "@/components/header";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug;
  return (
    <div>
      <Header />
      <div id="section-product-detail" className="w-screen p-4">
        <div className="flex md:flex-col lg:flex-row flex-col gap-4 ">
          <img src={`https://placehold.co/600x400?text=${slug}`} alt="Product Detail Banner" className="w-200 h-auto mb-4" />
          <h1 className="tracking-wider">Product Title</h1>
          <div className="flex flex-col text-sm">
            <p className="line-through text-gray-400">Rp 159.000</p>
            <p>Rp 99.000</p>
          </div>
        </div>
        

      </div>
     
    </div>
  );
}