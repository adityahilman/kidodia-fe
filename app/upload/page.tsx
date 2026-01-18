'use client'

import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/api/auth";
import { getOrderSummary } from "@/lib/api/orders";
import { useRouter } from "next/navigation";
import imagekitAuth from "@/lib/imagekit/auth";
import { uploadToImageKit } from "@/lib/imagekit/upload";
import { createOrderImages } from "@/lib/api/images";

type orderSummaryInterface = {
    orderNumber: string
    productTitle: string
    totalPhoto: number
    fullname: string
    email: string
    phone: string
    address: string
    city: string
    province: string
    postalCode: string
    status: string,
    isPhotoUploaded: boolean
}

export default function UploadPage() {
    const router = useRouter();
    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const [photoCount, setPhotoCount] = useState(0);
    const [orderSummary, setOrderSummary] = useState<orderSummaryInterface | null>(null)


    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setCoverPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const albumTitle = formData.get("albumTitle") as string;
        const coverAlbum = formData.get("coverAlbum") as File;
        const photoFiles = formData.getAll("photoFiles") as File[];

        

        try {
            

            let cover: {
                image_url: string;
                image_file_id: string;
            } | null = null;

            const photos: {
                image_url: string;
                image_file_id: string;
            }[] = [];

            /* ===============================
            * 3. Upload cover
            * =============================== */
            if (coverAlbum && coverAlbum.size > 0) {
                const authParams = await imagekitAuth()();
                const res = await uploadToImageKit({
                    auth: authParams,
                    file: coverAlbum,
                    fileName: coverAlbum.name,
                    folder: `/kidodia/${orderSummary?.orderNumber}/covers`,
                });

                cover = {
                    image_url: res.url!,
                    image_file_id: res.fileId!,
                };
            }

            /* ===============================
            * 4. Upload photos (batched)
            * =============================== */
            const BATCH_SIZE = 5;

            for (let i = 0; i < photoFiles.length; i += BATCH_SIZE) {
                const batch = photoFiles.slice(i, i + BATCH_SIZE);

                const results = await Promise.all(
                    batch
                        .filter(f => f && f.size > 0)
                        .map(async (file) => {
                            // IMPORTANT: request a fresh auth token per upload
                            const authParams = await imagekitAuth()();
                            return uploadToImageKit({
                                auth: authParams,
                                file,
                                fileName: file.name,
                                folder: `/kidodia/${orderSummary?.orderNumber}/photos`,
                            });
                        })
                );

                results.forEach(res => {
                    photos.push({
                        image_url: res.url!,
                        image_file_id: res.fileId!,
                    });
                });
            }

            // update album title 
            
            await createOrderImages(orderSummary!.orderNumber, albumTitle, cover, photos)
                .then(async () => {
                    console.log('Order images created successfully');
                    // Redirect to dashboard after successful upload
                    router.push(`/dashboard`);
                })
                .catch((err) => {
                    throw new Error('Failed to create order images: ' + err.message);
                });

        } catch (error) {
            console.error("Upload failed:", error);
        }
    }


    useEffect(() => {
        async function getOrder() {
            try {
                const session = await getSession();

                const orderNumber = session.order_number;

                const data = await getOrderSummary(orderNumber);
                setOrderSummary({
                    orderNumber: data.order_number,
                    productTitle: data.product_title,
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


            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error fetching order summary:', err);
                }
                router.push(`/order`);
            }
        }

        getOrder();
    }, []);

    useEffect(() => {
        console.log('Order Summary:', orderSummary?.isPhotoUploaded);
        if (orderSummary?.isPhotoUploaded === true) {
            router.push(`/dashboard`);
        }
    }, [orderSummary]);

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex flex-1 items-center justify-center px-4 my-14">
                <div className="w-full max-w-md lg:max-w-6xl duration-500 transition-all  rounded-lg bg-white p-6 shadow-sm border">
                    <div className="mb-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                        Upload Foto
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Upload foto kamu disini
                        </p>
                    </div>
                
                    <div className="mb-6 space-y-3 text-sm text-gray-700">
                        <h2 className="text-base font-bold">
                            Detail Pesanan
                        </h2>
                        <div className="flex justify-between">
                            <span className="font-medium">Order Number</span>
                            <span>{orderSummary?.orderNumber}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Product Name</span>
                            <span>{orderSummary?.productTitle}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Email</span>
                            <span>{orderSummary?.email}</span>
                        </div>
                        <div className="flex justify-between text-green-700 font-semibold">
                            <span className="font-medium">Jumlah foto yang harus diupload</span>
                            <span>{orderSummary?.totalPhoto}</span>
                        </div>
                    
                    </div>

                    <form id="form-upload-photo" className="mt-10" onSubmit={handleSubmit}>
                        <h2 className="text-base font-semibold">Detail Album</h2>
                        <div className="space-y-6 text-sm mt-2">
                            

                            <div>
                                <label className="font-medium">Judul Album</label>
                                <input
                                    type="text"
                                    name="albumTitle"
                                    className="w-full rounded-md border px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0095a0]"
                                    placeholder="Masukkan judul album"
                                />
                            </div>

                            <div>
                                <label className="font-medium">Cover Album</label>

                                <div className="mt-2">
                                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-2 text-center hover:bg-gray-50 transition">
                                        {coverPreview ? (
                                            <img
                                                src={coverPreview}
                                                alt="Cover Preview"
                                                className="h-48 w-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <>
                                                <p className="text-gray-600">
                                                    Klik untuk upload cover
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">
                                                    JPG / PNG
                                                </p>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            name="coverAlbum"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleCoverChange}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="font-medium">Upload Foto</label>

                                <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center hover:bg-gray-50 transition">
                                    <p className="text-gray-600">
                                        Klik untuk upload foto
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        JPG / PNG
                                    </p>
                                    <input
                                        type="file"
                                        name="photoFiles"
                                        multiple
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => setPhotoCount(e.target.files?.length || 0)}
                                    />
                                </label>

                                {/* Upload Summary */}
                                {photoCount > 0 && (
                                    <div className="mt-3 rounded-md bg-gray-50 p-3 text-sm">
                                        <div className="flex justify-between">
                                            <span>{photoCount} foto dipilih</span>
                                            {photoCount == (orderSummary?.totalPhoto ?? 0) ? (
                                                <span className="text-green-600 font-medium">
                                                    ✔ Siap diupload
                                                </span>
                                            ) : (
                                                <span className="text-red-500">
                                                    Kurang {(orderSummary?.totalPhoto ?? 0) - photoCount} foto
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                                
                            </div>
                            


                            <Button
                                id="btn-submit-upload-photo"
                                disabled={photoCount != orderSummary?.totalPhoto}
                                className="w-full mt-6 bg-[#0095a0] hover:bg-[#00796b] rounded cursor-pointer"
                            >
                                Upload
                            </Button>
                        </div>
                    </form>

                

                </div>
            </main>
            <Footer />
        </div>
    );
}