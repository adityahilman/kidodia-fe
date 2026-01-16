'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { getOrderDetails } from "@/lib/api/orders";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankyouPage() {
    const router = useRouter();
    const { orderNumber } = useParams<{ orderNumber: string }>();
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        async function checkOrderStatus() {
            if (orderNumber) {
                const data = await getOrderDetails(orderNumber);

                if (data.status === 'PAID') {
                    setShowMessage(true);
                    setTimeout(() => {
                        setShowMessage(false);
                        router.push(`/order`);
                    }, 5000);
                } else {
                    console.log('Order not paid yet, redirecting to summary page.');
                    router.push(`/checkout/${orderNumber}/summary`);
                }

            }
        }
        checkOrderStatus();
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-linear-to-b from-gray-50 to-gray-100">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md border text-center">
                    {showMessage ? (
                        <div className="space-y-4">
                            {/* Success Icon */}
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                <svg
                                    className="h-8 w-8 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            <h2 className="text-2xl font-semibold text-gray-900">
                                Pembayaran Berhasil
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Terima kasih telah melakukan pembayaran.
                                <br />
                                Kamu akan diarahkan ke dashboard dalam beberapa detik.
                            </p>

                            <p className="text-xs text-gray-400">
                                Mohon jangan menutup halaman ini
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* Loading Spinner */}
                            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

                            <h2 className="text-xl font-medium text-gray-900">
                                Memeriksa Status Pembayaran
                            </h2>

                            <p className="text-gray-600">
                                Mohon tunggu sebentar…
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )

}