'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
declare global {
  interface Window {
    snap: any;
  }
}


export default function PaymentPage() {
    const { orderId } = useParams<{ orderId: string }>();

    const payNow = async () => {
        const res = await fetch(`/api/checkout/${orderId}/snap`, {
        method: "POST",
        });

        const { snapToken } = await res.json();

        window.snap.pay(snapToken, {
        onSuccess: (result: any) => {
            console.log("SUCCESS", result);
        },
        onPending: (result: any) => {
            console.log("PENDING", result);
        },
        onError: (result: any) => {
            console.log("ERROR", result);
        },
        });
    };
    return (

        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Payment Page
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Order ID: {orderId}
                        </p>
                    </div>
                    <Button onClick={payNow}>Pay Now</Button>
                </div>
            </main>

            <Footer />
        </div>
    
    
    )
}