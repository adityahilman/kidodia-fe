'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { verifyOtp } from "@/lib/api/auth";

export default function VerifyOtpPage() {
    const router = useRouter();
    const [otpIsValid, setOtpIsValid] = useState(false);
    const [otpIsInvalid, setOtpIsInvalid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showMessageResend, setShowMessageResend] = useState(false);
    // const { orderNumber } = useParams<{ orderNumber: string }>();
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get('orderNumber') || '';

    const btnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const otpCode = formData.get('otpCode') as string;

        // await verifyOtp(orderNumber, otpCode)
        //     .then((res) => {
        //         setOtpIsValid(true);
        //         setShowMessage(true);
        //         console.log('OTP verified:', res);
        //         setTimeout(() => {
        //             setShowMessage(false);
        //             router.push(`/dashboard`);
        //         }, 3000);
        //     })
        //     .catch((err) => {
        //         setOtpIsInvalid(true);
        //         setShowMessage(true);
        //         setTimeout(() => {
        //             setShowMessage(false);
        //             setOtpIsInvalid(false);
        //         }, 3000);
        //         console.error('Error verifying OTP:', err);
        //     });

        try {
            const res = await verifyOtp(orderNumber, otpCode);

            if (!res.verified) {
                throw new Error(res.message || 'OTP verification failed');
            }

            if (res.session_created && res.order_status === "PAID") {
                setOtpIsValid(true);
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                    router.push(`/dashboard`);
                }, 3000);
            }
        } catch (error) {
            setOtpIsInvalid(true);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                setOtpIsInvalid(false);
            }, 3000);
            console.error('Error verifying OTP:', error);
        }
       
     
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
                            Konfirmasi Kode OTP
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Silahkan masukkan kode OTP yang telah dikirimkan ke email Anda.
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

                            <button className="w-full rounded bg-[#0095a0] py-3 text-sm font-medium text-white hover:bg-[#00796b] cursor-pointer">
                                Submit
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <button
                            className="text-sm text-gray-500 hover:text-black p-0 cursor-pointer hover:underline"
                            onClick={btnResend}
                        >
                            Belum menerima kode? Klik disini untuk kirim ulang.
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
                    Berhasil Verifikasi OTP
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                    OTP Anda telah berhasil diverifikasi.
                </p>

                <p className="mt-4 text-sm text-gray-500 animate-pulse">
                    Mengalihkan Anda ke langkah berikutnya, mohon menunggu…
                </p>
                </div>
            </div>
            )}

            {showMessage && otpIsInvalid && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl animate-fade-up">
                
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                    Gagal Verifikasi OTP
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                    OTP yang Anda masukkan salah. Silahkan coba lagi.
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