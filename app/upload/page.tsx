'use client'

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function UploadPage() {
    const [coverPreview, setCoverPreview] = useState<string | null>(null);
    const [photoCount, setPhotoCount] = useState(0);


    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setCoverPreview(URL.createObjectURL(file));
    };


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
                            <span>1234</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Product Name</span>
                            <span>Produk A</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Email</span>
                            <span>emailcustomer@gmail.com</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Jumlah foto yang harus diupload</span>
                            <span>40</span>
                        </div>
                    
                    </div>

                    <form id="form-upload-photo" className="mt-10">
                        <h2 className="text-base font-semibold">Detail Album</h2>
                        <div className="space-y-6 text-sm mt-2">
                            

                            <div>
                                <label className="font-medium">Judul Album</label>
                                <input
                                    type="text"
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
                                                <p className="text-gray-500">
                                                    Klik untuk upload cover
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">
                                                    JPG / PNG
                                                </p>
                                            </>
                                        )}
                                        <input
                                            type="file"
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
                                        Klik untuk upload banyak foto
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Minimal 40 foto
                                    </p>
                                    <input
                                        type="file"
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
                                            {photoCount >= 40 ? (
                                                <span className="text-green-600 font-medium">
                                                    ✔ Siap diupload
                                                </span>
                                            ) : (
                                                <span className="text-red-500">
                                                    Kurang {40 - photoCount} foto
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}
                                
                            </div>
                            


                            <Button
                                id="btn-submit-upload-photo"
                                disabled={photoCount < 40}
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