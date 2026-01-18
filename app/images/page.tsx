'use client'

import { uploadToImageKit } from "@/lib/imagekit/upload";
import imagekitAuth from "@/lib/imagekit/auth";

export default function ImagesUploadPage() {

    const authenticator = imagekitAuth();

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const cover = formData.get("cover-upload") as File;
        const files = formData.getAll("file-upload") as File[];
        
        let authParams;
        try {
            authParams = await authenticator();
            console.log("Upload can proceed with auth params:", authParams);
        } catch (error) {
            console.error("Upload aborted due to authentication failure:", error);
            return;
        }

        // const { signature, expire, token, publicKey } = authParams;

        try {
            if (cover && cover.size > 0) {
                const coverUploadResponse = await uploadToImageKit({
                    auth: authParams,
                    file: cover,
                    fileName: cover.name,
                    folder: "/kidodia/covers",
                });
                console.log("Cover upload successful:", coverUploadResponse);
            }
                
        } catch (error) {
            console.error("Cover upload failed:", error);
        }
    }


    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="border p-10 rounded-md border-gray-400">
                <form onSubmit={handleUpload}>
                    <div className="flex flex-col">
                        <label >Cover</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            name="cover-upload" 
                            className="file:rounded-md file:bg-green-200 file:p-2 file:text-sm file:text-green-800"
                        />

                    </div>
                    

                    <label htmlFor="file-upload" className="sr-only">Upload file</label>
                    <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept="image/*"
                        multiple
                        className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                        "
                    />
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Upload Images
                    </button>
                </form>
            </div>
        </div>
    )
}