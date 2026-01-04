'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function VerifyOtpPage() {

    const btnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle OTP verification logic here
    }   

    const btnResend = () => {
        console.log("Resend OTP");
        // Handle resend OTP logic here
    }
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Verify OTP
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Check your email for the OTP code to continue your order.
                        </p>
                    </div>

                    <form id="form-verify-otp" onSubmit={btnSubmit}>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-black focus:outline-none"
                            />

                            <button className="w-full rounded-lg bg-black py-3 text-sm font-medium text-white hover:bg-gray-800">
                                Verify
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <button
                            className="text-sm text-gray-500 hover:text-black p-0 cursor-pointer hover:underline"
                            onClick={btnResend}
                        >
                            Didn't receive the code? Click here to resend
                        </button>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </div>
    );
}