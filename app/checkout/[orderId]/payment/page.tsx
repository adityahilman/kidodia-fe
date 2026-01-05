'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    snap: any;
  }
}

interface OrderSummary {
  orderId: string;
  productName: string;
  price: number;
  email: string;
  status: string;
}

export default function PaymentPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<OrderSummary | null>(null);

  // Simulate fetching order summary (replace with real API call)
  useEffect(() => {
    // TODO: Replace with real fetch
    setOrder({
      orderId: orderId || "",
      productName: "Photobook Premium",
      price: 150000,
      email: "customer@example.com",
      status: "pending",
    });
  }, [orderId]);

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
              Order Summary
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Review your order before payment
            </p>
          </div>
          {order ? (
            <div className="mb-6 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Order ID</span>
                <span>{order.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Product</span>
                <span>{order.productName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email</span>
                <span>{order.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status</span>
                <span className="capitalize">{order.status}</span>
              </div>
              <div className="flex justify-between border-t pt-3 font-semibold text-base">
                <span>Total</span>
                <span>Rp {order.price.toLocaleString("id-ID")}</span>
              </div>
            </div>
          ) : (
            <div className="mb-6 text-center text-gray-400">Loading...</div>
          )}
          <Button onClick={payNow} className="w-full mt-4 bg-blue-600 hover:bg-blue-700" disabled={!order}>
            Pay Now
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}