import { NextResponse } from "next/server";
import Midtrans from 'midtrans-client';

export async function POST(
  req: Request,
  context: { params: { orderId: string } }
) {
  const { orderId } = await context.params;

  // TODO: fetch order from DB & validate ownership + status
  // const order = await db.order.findUnique(...)

  const snap = new Midtrans.Snap({
    isProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
    serverKey: process.env.MIDTRANS_SERVER_KEY!,
  });

  const transaction = {
    transaction_details: {
      order_id: orderId,
      gross_amount: 150000,
    },
    customer_details: {
      email: "customer@example.com",
    },
  };

  const snapToken = await snap.createTransactionToken(transaction);

  return NextResponse.json({ snapToken });
}