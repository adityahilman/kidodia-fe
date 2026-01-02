import { Button } from "@/components/ui/button";

export default function ProductsListPage() {
    return (
        <div>
             <div id="section-products" className="w-screen p-10">
                <div className="">
                <h2 className="text-lg text-center font-semibold tracking-wider mb-4">Daftar Produk</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="border p-4">
                        <img src={`https://placehold.co/200x200?text=Product+${item}`} alt={`Product ${item}`} className="w-full h-auto mb-2" />
                        <h3 className="font-semibold">Produk {item}</h3>
                        <p className="text-gray-600 text-xs mb-4">Deskripsi singkat produk {item}.</p>
                        <Button id={`btn-product-${item}`} className="mt-2 w-full bg-[#3F9AAE] rounded-xs">Lihat Detail</Button>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}