import Image from "next/image";
import { products } from "@/lib/product";
import Link from "next/link";

export default function ProductList() {

    return (
        <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-right">
                Pilihan Photobook
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Product Card */}
                {products.map((product) => (
                    <div key={product.slug} className="bg-white rounded-lg shadow-md h-full flex flex-col hover:scale-110 transition-transform duration-300" data-aos="fade-right">
                        <Link href={`/product/${product.slug}`} className="flex flex-col flex-1">
                            <div className="p-4 flex flex-col flex-1 justify-between">
                                <div>
                                    {product.is_best_seller ? (
                                        <span className="absolute top-2 left-1 px-4 py-1 rounded-xl bg-red-600 text-white z-10">
                                            Best Seller
                                        </span>
                                    ) : null}
                                    <Image
                                        src={product.image_main_url}
                                        alt={product.title}
                                        className="object-cover w-full"
                                        width={400}
                                        height={400}
                                    />
                                    <div className="flex flex-col">
                                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                            {product.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {product.tagline}
                                        </p>
                                        <p className="mt-4 text-sm text-gray-500 line-through">
                                            Rp {product.price.toLocaleString("id-ID")}
                                        </p>
                                        <p className="mt-1 text-lg font-bold text-blue-600">
                                            Rp {product.final_price.toLocaleString("id-ID")}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 flex">
                                    <p className="px-2 py-2 bg-[#0095a0] text-white text-center rounded text-sm w-full">
                                        Lihat Detail
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}