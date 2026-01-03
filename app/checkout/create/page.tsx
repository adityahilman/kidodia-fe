'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation"

export default function CreateCheckoutPage() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const productSlug = searchParams.get('product');
    console.log('orderId', orderId);
    return (
        <div>
            <Header />
            <div className="">
                <div className="flex min-h-screen flex-col justify-center w-full px-4 ">
                    <div>
                        <h2>Input your valid email address to continue the order.</h2>
                    </div>
                    <div>
                        <p>Order id: {orderId}</p>
                        <p>Product: {productSlug}</p>

                    </div>
                    <div className="flex gap-1 w-full items-center">
                        <input type="email" placeholder="your email address" className="border p-2 rounded mt-4 max-w-md mx-auto w-full"/>
                        <Button className="mt-4 rounded-none py-5 px-6">
                            Submit
                        </Button>
                    </div>
                  
                </div>
                
                
            </div>
            <Footer />

        </div>
    )
}