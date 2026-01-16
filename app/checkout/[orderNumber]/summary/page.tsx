'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getOrderDetails } from "@/lib/api/orders";

declare global {
  interface Window {
    snap: any;
  }
}

interface OrderSummary {
  orderNumber: string;
  productTitle: string;
  productPrice: number;
  productDiscountAmount: number;
  productFinalPrice: number;
  email: string;
  phoneNumber: number;
  address: string;
}

export default function PaymentPage() {
  const router = useRouter();
  const { orderNumber } = useParams<{ orderNumber: string }>();
  const [order, setOrder] = useState<OrderSummary | null>(null);

  useEffect(() => {
    async function fetchOrder() {
      if (orderNumber) {
        const data = await getOrderDetails(orderNumber);

        if (data.status === 'PAID') {
          console.log('Order already paid, redirecting to order page.');
          setTimeout(() => {
            router.push('/order')
          }, 1000);
          return;
        }
        
        setOrder({
          orderNumber: data.order_number,
          productTitle: data.product_title,
          productPrice: data.product_price,
          productDiscountAmount: data.product_discount,
          productFinalPrice: data.product_final_price,
          email: data.email,
          phoneNumber: data.phone,
          address: data.address,
        });
      }
    }
    fetchOrder();
  }, [orderNumber]);

  const payNow = async () => {
    if (!order) return;

    const res = await fetch(`/api/checkout/${orderNumber}/snap`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderNumber: order.orderNumber,
        productTitle: order.productTitle,
        productPrice: order.productPrice,
        productDiscountAmount: order.productDiscountAmount,
        productFinalPrice: order.productFinalPrice,
        email: order.email,
        phoneNumber: order.phoneNumber,
        address: order.address,
      }),
    });

    const { snapToken } = await res.json();

    window.snap.pay(snapToken, {
      onSuccess: (result: any) => {
        if (process.env.NODE_ENV === 'development') {
          console.log("SUCCESS", result);
        }
        router.push(`/checkout/${orderNumber}/thank-you`)
      },
      onPending: (result: any) => {
        if (process.env.NODE_ENV === 'development') {
          console.log("PENDING", result);
        }
        router.push(`/`)

      },
      onError: (result: any) => {
        if (process.env.NODE_ENV === 'development') {
          console.log("ERROR", result);
        }
        router.push(`/`)
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
              Ringkasan Pemesanan
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Silahkan cek kembali detail pesanan Anda
            </p>
          </div>
          {order ? (
            <div className="mb-6 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Order Number</span>
                <span>{order.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span>{order.productTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email</span>
                <span>{order.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone Number</span>
                <span>{order.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Address</span>
                <span>{order.address}</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span>Product Price</span>
                <span>Rp {order.productPrice.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">- Rp {order.productDiscountAmount.toLocaleString("id-ID")}</span>
              </div>
            
              <div className="flex justify-between border-t pt-3 font-semibold text-base">
                <span className="text-xl text-blue-600">Total</span>
                <span className="text-xl text-blue-600">Rp {order.productFinalPrice.toLocaleString("id-ID")}</span>
              </div>
            </div>
          ) : (
            <div className="mb-6 text-center text-gray-400">Loading...</div>
          )}
          <Button onClick={payNow} className="w-full mt-4 bg-[#0095a0] hover:bg-[#00796b] rounded" disabled={!order}>
            Submit
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}