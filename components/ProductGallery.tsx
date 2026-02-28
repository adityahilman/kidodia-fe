import Image from "next/image";
export default function ProductGallery({ images }: { images: string[] }) {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4" data-aos="fade-right">Galeri Produk</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((url, index) => (
                    <div key={index} className="relative group">
                        <Image
                            src={url}
                            alt={`Galeri produk ${index + 1}`}
                            layout="responsive"
                            width={500}
                            height={500}
                            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                            data-aos="fade-right"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}