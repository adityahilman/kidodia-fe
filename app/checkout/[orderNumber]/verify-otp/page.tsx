'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { verifyOtp } from "@/lib/api/auth";
import { updateInitialOrder } from "@/lib/api/orders";

export default function VerifyOtpPage() {
    const router = useRouter();
    const [otpIsValid, setOtpIsValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessageResend, setShowMessageResend] = useState(false);
    const { orderNumber } = useParams<{ orderNumber: string }>();

    const btnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const otpCode = formData.get('otpCode') as string;

        await verifyOtp(orderNumber, otpCode)
            .then((res) => {
                updateInitialOrder(orderNumber!, undefined!, "OTP_VERIFIED");
                setOtpIsValid(true);
                setShowMessage(true);
                console.log('OTP verified:', res);
                setTimeout(() => {
                    setShowMessage(false);
                    router.push(`/checkout/${orderNumber}/address`);
                }, 3000);
            })
            .catch((err) => {
                console.error('Error verifying OTP:', err);
            });
       
     
    }   

    const btnResend = () => {
        console.log("Resend OTP");
        // Handle resend OTP logic here
        setShowMessageResend(true);
        setTimeout(() => {
            setShowMessageResend(false);
        }, 3000);
    }
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Confirm Verification Code
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Please check your email for the code to continue your order.
                        </p>
                    </div>

                    <form id="form-verify-otp" onSubmit={btnSubmit}>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="otpCode"
                                placeholder="Enter OTP"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={6}
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-black focus:outline-none"
                                required
                            />

                            <button className="w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700">
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

            {showMessage && otpIsValid && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl animate-fade-up">
                
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                    OTP Verified
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                    Your OTP has been successfully verified.
                </p>

                <p className="mt-4 text-sm text-gray-500 animate-pulse">
                    Redirecting you to the next step…
                </p>
                </div>
            </div>
            )}

            {showMessageResend && (
            <div className="fixed inset-0 z-40 flex items-start justify-center pt-20">
                <div className="rounded-lg bg-emerald-100/50 border border-emerald-300 px-6 py-4 shadow-lg animate-fade-up">
                <p className="text-sm font-medium">
                    A new OTP has been sent to your email.
                </p>
                </div>
            </div>
            )}



            <Footer />
        </div>
    );
}