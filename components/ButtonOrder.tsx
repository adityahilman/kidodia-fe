"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createInitialOrder } from "@/lib/api/orders";

function generateOrderId() {
  const date = new Date();
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
  const randomStr = Math.floor(1000 + Math.random() * 900000);
  return `PB-${dateStr}-${randomStr}`;
}

export default function OrderButtonComponent({ slug, className, children }: { slug: string, className?: string, children: React.ReactNode }) {
  const router = useRouter();

  const handleOrder = async () => {
    const orderId = generateOrderId();
    try {
      await createInitialOrder(orderId, slug);
      router.push(`/checkout/create?orderNumber=${orderId}&product=${slug}`);
    } catch (err) {
      console.error('Error creating initial order:', err);
      // Optionally show error to user
    }
  };

  return (
    <Button onClick={handleOrder} className={className}>
      {children}
    </Button>
  );
}