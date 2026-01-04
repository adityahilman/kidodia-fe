'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";

export default function CreateCheckoutPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const productSlug = searchParams.get('product');

    const btnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        router.push('/checkout/verify-otp');
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Continue Your Order
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Enter your valid email address to proceed
                        </p>
                    </div>

                    <div className="mb-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span className="font-medium">Order ID</span>
                            <span>{orderId}</span>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <span className="font-medium">Product</span>
                            <span>{productSlug}</span>
                        </div>
                    </div>

                    <form id="form-input-email" onSubmit={btnSubmit}>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-black focus:outline-none"
                            />

                            <Button className="w-full rounded-lg py-3 text-sm font-medium">
                                Continue
                            </Button>
                        </div>

                    </form>
                    
                    <div className="mt-6 text-center">
                        <Button
                            variant="link"
                            className="text-sm text-gray-500 hover:text-black p-0"
                            onClick={() => router.push('/login')}
                        >
                            Already have an account? Click here to Login
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
