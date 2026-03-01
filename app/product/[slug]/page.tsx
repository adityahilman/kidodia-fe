import Header from "@/components/header";
import { products } from "@/lib/product";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import ButtonOrderWA from "@/components/ButtonOrderWA";
import ProductGallery from "@/components/ProductGallery";
import CustomerReview from "@/components/CustomerReview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const resolvedParams = await params;
    const product = products.find((p) => p.slug === resolvedParams.slug);

    if (!product) {
        return {
            title: "Photobook Premium",
            description: "Abadikan momen spesial Anda dalam photobook berkualitas tinggi, dicetak dengan standar premium.",
        };
    }

    return {
        title: product.title,
        description: product.feature_description,
    };
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
    const resolvedParams = await params;
    const product = products.find((p) => p.slug === resolvedParams.slug);

    if (!product) {
        notFound();
    } 

    return (
        <div>
            <Header />
            {/* ==== Hero Section ==== */}
            <main className="max-w-5xl mx-auto px-6 py-20">
                <div className="flex flex-col gap-16 items-center">
                    {/* Image */}
                    <div className="relative group">
                        {product.is_promo ? (
                            <span className="absolute top-4 left-4 z-10 rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white">
                                Promo
                            </span>
                        ) : null}

                        <Image
                            src={product.image_main_url}
                            alt={product.title}
                            className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                            width={800}
                            height={600}
                            loading="eager"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="mt-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            {product.title}
                        </h1>
                    </div>
                    <div className="mt-2">
                        <h2 className=" text-gray-700 max-w-md">
                            {product.tagline}
                        </h2>
                    </div>
                </div>

                {/* Price Card */}
                <div className="rounded-lg bg-white border p-5 shadow-md mt-5">
                    <div className="space-y-2">
                        <p>
                            Promo Hemat, Beli 1
                        </p>
                        <div className="flex items-center gap-4">
                            <p className="text-gray-500 font-medium text-lg line-through">
                                Rp {product?.price?.toLocaleString("id-ID") || "129.000"}
                            </p>
                             <p className="text-blue-600 text-2xl font-semibold">
                                Rp {product?.final_price?.toLocaleString("id-ID") || "99.000"}{" "}
                            </p>
                            
                        </div>
                       
                    </div>
                    <div className="border-t my-4"></div>
                    <div className="space-y-2 bg-blue-50 p-4 rounded-lg border border-blue-200 relative">

                        {/* Badge */}
                        <span className="absolute -top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                            BEST DEAL 🔥
                        </span>

                        <p className="text-sm font-semibold text-gray-700">
                            Promo SUPER, Beli 2
                        </p>

                        <div className="flex items-center gap-4">
                            <p className="text-gray-500 font-medium text-lg line-through">
                                Rp {product?.price_promo_double?.toLocaleString("id-ID") || "258.000"}
                            </p>
                            <p className="text-blue-700 text-3xl font-bold">
                                Rp {product?.final_price_promo_double?.toLocaleString("id-ID") || "179.000"}
                            </p>
                     
                        </div>
                        <p className="text-gray-500 text-sm">
                            *Potongan diskon lebih banyak untuk pembelian 2 photobook
                        </p>

                      
                    </div>




                    <div className="flex flex-col space-y-2 mt-4">
                        <ButtonOrderWA phoneNumber="6281585675295" message={`Halo, saya mau pesan photobook ${product.title}, Apakah masih ada promonya?`} />
                        <p className="text-sm text-gray-500">
                            * Proses mudah, cukup dari HP
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <p>
                        Spesifikasi photobook <span className="font-semibold">{product.title}</span>:
                    </p>
                    <ul className="mt-1 text-gray-700 list-disc list-inside">
                        {JSON.parse(product.specifications).map((spec: string, idx: number) => (
                            <li key={idx}>{spec}</li>
                        ))}
                    </ul>
                </div>
            </main>

            {/* Product Details */}
            <section className="bg-white space-y-10">
                <div className="max-w-5xl mx-auto px-6">
                    <div data-aos="fade-right">
                        <h2 className="text-2xl font-semibold">
                            {product?.highlight}
                        </h2>
                    </div>
                    
                    <div data-aos="fade-right">
                        <Image
                            src={product?.image_secondary_url || `https://placehold.co/800x600?text=${resolvedParams.slug}`}
                            alt="Highlight Image"
                            className="rounded-2xl shadow-md mt-4"
                            width={800}
                            height={600}
                        />
                    </div>
                    <p data-aos="fade-right" className="mt-4 text-gray-700">
                        {product?.highlight_description}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto px-6">
                    <div data-aos="fade-right">
                        <h2 className="text-2xl font-semibold">
                            {product?.feature}
                        </h2>
                    </div>
                    <div data-aos="fade-right">
                        <Image
                            src={product?.image_tertiary_url || `https://placehold.co/800x600?text=${resolvedParams.slug}`}
                            alt="Feature Image"
                            className="rounded-2xl shadow-md mt-4"
                            width={800}
                            height={600}
                        />
                    </div>
                    <p data-aos="fade-right" className="mt-4 text-gray-700">
                        {product?.feature_description}
                    </p>
                    
                </div>

                <div className="max-w-5xl mx-auto px-6">
                    <ProductGallery images={product?.product_images || []} /> 
                    <div className="mt-6 flex justify-center" data-aos="fade-right">
                        <ButtonOrderWA phoneNumber="6281585675295" message={`Halo, saya mau pesan photobook ${product.title}, Apakah masih ada promonya?`} />
                    </div>  
                </div>
                <div className="mb-10 max-w-5xl mx-auto px-6 text-center">
                    <CustomerReview />
                    <div className="mt-6 flex justify-center" data-aos="fade-right">
                        <ButtonOrderWA phoneNumber="6281585675295" message={`Halo, saya mau pesan photobook ${product.title}, Apakah masih ada promonya?`} />
                    </div>  
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />
            <Footer />
        </div>
    );
}