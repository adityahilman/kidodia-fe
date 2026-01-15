import { NextResponse } from "next/server";
import Midtrans from 'midtrans-client';

export async function POST(
  req: Request,
  context: { params: Promise<{ orderNumber?: string }> }
) {
  const { orderNumber = '' } = await context.params;
  if (!orderNumber) {
    return NextResponse.json({ error: "orderNumber is required" }, { status: 400 });
  }
  const body = await req.json();

  const snap = new Midtrans.Snap({
    isProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
    serverKey: process.env.MIDTRANS_SERVER_KEY!,
  });

  const transaction = {
    transaction_details: {
      order_id: orderNumber,
      gross_amount: body.productFinalPrice,
    },
    item_details: [
      {
        id: orderNumber,
        price: body.productFinalPrice,
        quantity: 1,
        name: body.productTitle,
      },
    ],
    customer_details: {
      email: body.email,
      phone: body.phoneNumber,
      shipping_address: {
        address: body.address,
      },
    },
  };

  const snapToken = await snap.createTransactionToken(transaction);

  return NextResponse.json({ snapToken });
}