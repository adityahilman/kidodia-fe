'use client'

import Footer from "@/components/footer"
import Header from "@/components/header"


export default function OrderDetailsPage() {
    

    return (
        <div>
            <Header />
            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Order Details Page</h1>
                <p className="text-lg">This is where the order details will be displayed.</p>
            </main>


            <Footer />
        </div>
    )
}