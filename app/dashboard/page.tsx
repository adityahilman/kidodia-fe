'use client'

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getOrderSummary } from "@/lib/api/orders"
import { useRouter } from "next/navigation"
import { getSession } from "@/lib/api/auth"

type orderSummaryInterface = {
    orderNumber: string
    totalPhoto: number
    fullname: string
    email: string
    phone: string
    address: string
    city: string
    province: string
    postalCode: string
    status: string,
    isPhotoUploaded?: boolean
}

export default function DashboardPage() {
    const router = useRouter()
    const [orderSummary, setOrderSummary] = useState<orderSummaryInterface | null>(null)

    const btnUploadPhoto = () => {
        router.push(`/upload`)
        console.log('Upload photo clicked')
    }

    useEffect(() => {
        async function getOrder() {
            try {
                const session = await getSession();
                const orderNumber = session.order_number;
                console.log('Session data:', session);

                const data = await getOrderSummary(orderNumber);
                setOrderSummary({
                    orderNumber: data.order_number,
                    totalPhoto: data.total_photo,
                    fullname: data.fullname,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                    city: data.city,
                    province: data.province,
                    postalCode: data.postal_code,
                    status: data.status,
                    isPhotoUploaded: Boolean(data.is_photo_uploaded)
                });
                console.log('Order details fetched:', data);
            } catch (err) {
                console.error('Error fetching session or order details:', err);
            }
        }

        getOrder();
    }, []);


    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />

            <main className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                        Order Summary
                    </h2>                   
                    <div className="space-y-2">
                        {/* ORDER SUMMARY */}
                        <section className="p-4">
                            <p className="text-sm font-bold">Order Number</p>
                            <div className="flex  gap-2">
                                <p className="text-sm py-1">
                                    {orderSummary?.orderNumber}
                                </p>
 

                                <span className={`text-sm rounded-lg px-3 py-1
                                    ${orderSummary?.status === 'PAID' 
                                        ? 'bg-green-100 text-green-700' 
                                        : 'bg-yellow-100 text-yellow-600'
                                    }
                                    `}>
                                    {orderSummary?.status}
                                </span>

                            </div>

                            <div className="flex justify-between text-sm mt-2" >
                                <p className=" text-green-700 font-semibold">
                                    {orderSummary?.totalPhoto} foto yang harus diupload
                                </p>
                               
                            </div>
                            

                        </section>

                        {/* SHIPPING ADDRESS (READ ONLY) */}
                        <section className="p-4 text-sm">
                             <p className="text-sm font-bold">
                                    Order Details
                                </p>
                            <div className="mb-2 mt-2">
                                <div className="flex justify-between">
                                    <p>
                                        Nama
                                    </p>
                                    <span className="inline-block px-3">
                                        {orderSummary?.fullname}
                                    </span>
                                </div>
                               
                                <div className="flex justify-between">
                                    <p>
                                        Email
                                    </p>
                                    <span className="inline-block px-3">
                                        {orderSummary?.email}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Phone
                                    </p>
                                    <span className="inline-block px-3">
                                        {orderSummary?.phone}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Detail Alamat
                                    </p>
                                    <span className="inline-block px-3">
                                        {orderSummary?.address}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Kota
                                    </p>
                                    <span className="inline-block px-3">
                                        {orderSummary?.city}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Provinsi
                                    </p>
                                    <span className="inline-block px-3">
                                       {orderSummary?.province}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <p>
                                        Kodepos
                                    </p>
                                    <span className="inline-block px-3">
                                        {orderSummary?.postalCode}
                                    </span>
                                </div>

                               
                            </div>

                    
                        </section>

                         <section className="rounded-lg border p-4">
                                <p className="text-sm font-medium text-gray-800 mb-1">
                                    Photo Upload
                                </p>

                                {orderSummary?.isPhotoUploaded !== true ? (
                                    <>
                                        <p className="text-sm text-red-600">
                                            ❌ Photo not uploaded
                                        </p>
                                        <button className="mt-4 inline-flex items-center rounded bg-[#0095a0] px-3 py-2 text-sm font-medium text-white hover:bg-[#00796b] w-full justify-center cursor-pointer" onClick={btnUploadPhoto}>
                                            Upload photo
                                        </button>
                                    </>
                                   
                                ) : (
                                    
                                    <p className="text-sm text-green-600">
                                        ✅ Photo uploaded
                                    </p>
                                )}

                            </section>

                    </div>
                
                </div>
            </main>

            <Footer />
        </div>
    )
}
