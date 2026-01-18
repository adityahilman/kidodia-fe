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
    const [orderSummary, setOrderSummary] = useState<orderSummaryInterface | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setCoverPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!orderSummary?.orderNumber) return;

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const albumTitle = (formData.get("albumTitle") as string) || "";
        const coverAlbum = formData.get("coverAlbum") as File;
        const photoFiles = formData.getAll("photoFiles") as File[];

        try {
            setIsUploading(true);

            let cover: { image_url: string; image_file_id: string } | null = null;
            const photos: { image_url: string; image_file_id: string }[] = [];

            if (coverAlbum && coverAlbum.size > 0) {
                const authParams = await imagekitAuth()();
                const res = await uploadToImageKit({
                    auth: authParams,
                    file: coverAlbum,
                    fileName: coverAlbum.name,
                    folder: `/kidodia/${orderSummary.orderNumber}/covers`,
                });

                cover = { image_url: res.url!, image_file_id: res.fileId! };
            }

            const BATCH_SIZE = 5;

            for (let i = 0; i < photoFiles.length; i += BATCH_SIZE) {
                const batch = photoFiles.slice(i, i + BATCH_SIZE);

                const results = await Promise.all(
                    batch
                        .filter(f => f && f.size > 0)
                        .map(async (file) => {
                            const authParams = await imagekitAuth()();
                            return uploadToImageKit({
                                auth: authParams,
                                file,
                                fileName: file.name,
                                folder: `/kidodia/${orderSummary.orderNumber}/photos`,
                            });
                        })
                );

                results.forEach(res => {
                    photos.push({ image_url: res.url!, image_file_id: res.fileId! });
                });
            }

            await createOrderImages(orderSummary.orderNumber, albumTitle, cover, photos);
            router.replace(`/dashboard`);
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setIsUploading(false);
        }
    };


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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />

            <main className="mx-auto w-full max-w-6xl px-4 py-10">
                <div className="mx-auto w-full max-w-2xl rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                            Upload Foto
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Upload foto kamu di sini
                        </p>
                    </div>

                    {/* Order summary */}
                    <div className="mb-6 rounded-xl border bg-gray-50 p-4">
                        <h3 className="text-sm font-semibold text-gray-900">Detail Pesanan</h3>

                        <dl className="mt-3 space-y-2 text-sm">
                            <div className="flex items-center justify-between gap-3">
                                <dt className="text-gray-600">Order Number</dt>
                                <dd className="font-medium text-gray-900">{orderSummary?.orderNumber}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <dt className="text-gray-600">Product Name</dt>
                                <dd className="font-medium text-gray-900">{orderSummary?.productTitle}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <dt className="text-gray-600">Email</dt>
                                <dd className="font-medium text-gray-900">{orderSummary?.email}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <dt className="text-gray-600">Jumlah foto</dt>
                                <dd className="font-semibold text-emerald-700">{orderSummary?.totalPhoto}</dd>
                            </div>
                        </dl>
                    </div>

                    <form id="form-upload-photo" className="space-y-6" onSubmit={handleSubmit}>
                        {/* Album title */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Judul Album</label>
                            <input
                                type="text"
                                name="albumTitle"
                                className="w-full rounded-lg border px-3 py-2 text-sm outline-none ring-0 focus:border-[#0095a0] focus:ring-2 focus:ring-[#0095a0]/20"
                                placeholder="Masukkan judul album"
                            />
                        </div>

                        {/* Cover */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Cover Album</label>

                            <label className="group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed bg-white p-3 text-center transition hover:bg-gray-50">
                                {coverPreview ? (
                                    <img
                                        src={coverPreview}
                                        alt="Cover Preview"
                                        className="h-48 w-full rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="py-6">
                                        <p className="text-sm font-medium text-gray-800">Klik untuk upload cover</p>
                                        <p className="mt-1 text-xs text-gray-500">JPG / PNG</p>
                                    </div>
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

                        {/* Photos */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Upload Foto</label>

                            <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-white p-6 text-center transition hover:bg-gray-50">
                                <p className="text-sm font-medium text-gray-800">Klik untuk upload foto</p>
                                <p className="mt-1 text-xs text-gray-500">JPG / PNG</p>
                                <input
                                    type="file"
                                    name="photoFiles"
                                    multiple
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => setPhotoCount(e.target.files?.length || 0)}
                                />
                            </label>

                            {photoCount > 0 && (
                                <div className="rounded-xl border bg-gray-50 p-3 text-sm">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-gray-700">{photoCount} foto dipilih</span>
                                        <span className="text-gray-700">
                                            {orderSummary?.totalPhoto
                                                ? `${photoCount}/${orderSummary.totalPhoto}`
                                                : null}
                                        </span>
                                    </div>

                                    {orderSummary?.totalPhoto != null && photoCount !== orderSummary.totalPhoto && (
                                        <p className="mt-2 text-xs text-red-600">
                                            Kurang {orderSummary.totalPhoto - photoCount} foto
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        <Button
                            id="btn-submit-upload-photo"
                            type="submit"
                            disabled={isUploading || photoCount !== orderSummary?.totalPhoto}
                            className="w-full rounded-lg bg-[#0095a0] hover:bg-[#00796b] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isUploading ? "Uploading..." : "Upload"}
                        </Button>
                    </form>
                </div>
            </main>

            {/* Upload overlay (centered) */}
            {isUploading && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
                    id="uploading-overlay"
                    aria-live="polite"
                    aria-busy="true"
                >
                    <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-xl">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-[#0095a0]" />
                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-gray-900">Sedang mengupload</p>
                                <p className="text-sm text-gray-600">
                                    Jangan tutup halaman ini sampai proses selesai.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}