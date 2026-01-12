'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { getOrderStatus } from "@/lib/api/orders";
import { useRouter } from "next/navigation";

export default function OrderPage() {
    const router = useRouter();

    const btnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const orderNumber = formData.get('orderNumber') as string;
        const email = formData.get('email') as string;

        await getOrderStatus(orderNumber, email)
            .then((res) => {
                console.log('Order status retrieved:', res);
                // Handle displaying order status to the user
            })
            .catch((err) => {
                console.error('Error retrieving order status:', err);
            });
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Cek Status Pesanan
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Masukkan nomor pesanan dan email yang Anda gunakan saat pemesanan.
                        </p>
                    </div>

                    <form id="form-input-email" onSubmit={btnSubmit}>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Order Number (PB-XXXX-XXXXXX)"
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-black focus:outline-none"
                                required 
                            />

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-black focus:outline-none"
                                required
                            />

                           
                            <Button className="w-full rounded py-3 text-sm font-medium bg-[#0095a0] hover:bg-[#00796b] cursor-pointer" type="submit">
                                Submit
                            </Button>
                        </div>

                    </form>
                    
                   
                </div>
            </main>

            <Footer />
        </div>
    );
}