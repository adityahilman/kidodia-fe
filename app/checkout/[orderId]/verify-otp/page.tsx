'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function VerifyOtpPage() {
    const router = useRouter();
    const [otpIsValid, setOtpIsValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessageResend, setShowMessageResend] = useState(false);
    const { orderId } = useParams<{ orderId: string }>();

    const btnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle OTP verification logic here
        console.log("OTP Verified");
        setOtpIsValid(true);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
            router.push(`/checkout/${orderId}/payment`);
        }, 3000);
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
                                placeholder="Enter OTP"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={6}
                                className="w-full rounded-lg border px-4 py-3 text-sm focus:border-black focus:outline-none"
                                required
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

            {showMessage && otpIsValid && (
                <div className="absolute min-h-screen w-screen flex justify-center backdrop-blur-[2px] items-center rounded-md">
                    <div className="border p-10 rounded-lg bg-blue-400 text-white text-center">
                        <p className="mt-2">
                            Your OTP has been successfully verified.
                        </p>
                        <p className="mt-4 animate-pulse">
                            Please wait, we will redirect you to the next step.
                        </p>
                    
                    </div>
                </div>
            )}
            {showMessageResend && (
                <div className="absolute min-h-screen w-screen flex justify-center backdrop-blur-[2px] items-center rounded-md">
                    <div className="p-4 rounded-lg bg-emerald-500 text-white text-center">
                        <p className="mt-2">
                            A new OTP has been sent to your email.
                        </p>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}