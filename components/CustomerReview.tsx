import CarouselWithAutoplay from "@/components/carousel"
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function CustomerReview() {

    return (
        <section className="py-6 bg-stone-50 text-center">
                  
            <div data-aos="fade-up" className="container mx-auto max-w-4xl">
                <h2 className="text-2xl font-semibold px-2">
                    Semakin Banyak yang Memilih Cetak Kenangan, Bukan Sekadar Menyimpan di Galeri
                </h2>
                <p className="mt-3 text-gray-600">
                    Kidodia hadir untuk membantu mewujudkannya
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
                    
                        </CarouselItem>
                    ))}
                    </CarouselContent>

                </CarouselWithAutoplay>
            </div>
        </section>
    )
}