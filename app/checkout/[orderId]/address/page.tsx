'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useParams } from "next/navigation";

export default function AddressPage() {
  const { orderId } = useParams<{ orderId: string }>();
  
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Detail Alamat Pengiriman
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Silahkan masukkan alamat pengiriman Anda untuk melanjutkan proses pemesanan
            </p>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="mt-1 block w-full p-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  className="mt-1 block w-full p-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Detail Alamat
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={5}
                  required
                  className="mt-1 block w-full p-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
                  placeholder="Cth: Jalan Sudirman, RT 005/RW 03 No 10, Jakarta Selatan"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kota
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="mt-1 block w-full p-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
                />
              </div>

              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700"
                >
                  Provinsi
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  required
                  className="mt-1 block w-full p-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-b"
                />
              </div>
             
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kode Pos
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  required
                  className="mt-1 block w-full p-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-b"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}