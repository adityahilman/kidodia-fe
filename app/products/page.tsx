
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/api/products";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Daftar Produk",
    description: "Berbagai macam produk photobook berkualitas dari Kidodia.",
};

export default async function ProductsListPage() {

    const products = await getProducts();
    
    return (
        <div>
            <Header />
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-4">
                <h2 className="mb-10 text-center text-2xl font-semibold">
                    Daftar Produk
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {products
                    .filter((product: any) => product.is_active) // Only show active products
                    .map((product: any) => (
                        <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="rounded-md border p-4 hover:scale-110 transition-all duration-500 cursor-pointer block"
                        >
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
                                id={`btn-detail-${product.slug}`}
                            >
                                Lihat Detail
                            </Button>
                        </Link>
                    ))}
                </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}