'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

export default function OrderPage() {

    const btnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Check Your Order
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Enter your valid order number and email address
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

                           
                            <Button className="w-full rounded-lg py-3 text-sm font-medium bg-blue-600 hover:bg-blue-700" type="submit">
                                Continue
                            </Button>
                        </div>

                    </form>
                    
                   
                </div>
            </main>

            <Footer />
        </div>
    );
}