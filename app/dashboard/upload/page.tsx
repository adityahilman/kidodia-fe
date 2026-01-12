'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";


export default function DashboardUploadPage() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Upload Photos for Your Photobook
                    </h2>
                    {/* Upload form or component goes here */}
                </div>
            </main>

            <Footer />
        </div>
    );
}