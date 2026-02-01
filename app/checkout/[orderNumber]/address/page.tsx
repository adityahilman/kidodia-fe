'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useParams, useRouter } from "next/navigation";
import { createOrder } from "@/lib/api/orders";

export default function AddressPage() {
  const { orderNumber } = useParams<{ orderNumber: string }>();
  const router = useRouter();
  const btnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const fullName = formData.get('fullName') as string;
    let phoneNumber = formData.get('phoneNumber') as string;
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const province = formData.get('province') as string;
    const postalCode = formData.get('postalCode') as string;

    phoneNumber = phoneNumber.replace(/^0+/, '');
    if (!phoneNumber.startsWith('62')) {
      phoneNumber = '62' + phoneNumber; 
    }

    await createOrder(
      orderNumber!,
      fullName,
      phoneNumber,
      address,
      city,
      province,
      postalCode
    )
      .then((res) => {
        console.log('Order created:', res);
        router.push(`/checkout/${orderNumber}/summary`);
      })
      .catch((err) => {
        console.error('Error creating order:', err);
      });
  }
  
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 my-16">
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
            <form className="space-y-10" onSubmit={btnSubmit}>
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
                  className="mt-1 block w-full px-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor WhatsApp
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2 text-sm text-gray-500 border border-gray-300 rounded-l-md bg-gray-50">+62</span>
                  <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Cth: 8123456789"
                  required
                  className="mt-1 block w-full px-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
                />
                </div>
                
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
                  className="mt-1 block w-full px-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
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
                  className="mt-1 block w-full px-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm border-b"
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
                  className="mt-1 block w-full px-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-b"
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
                  className="mt-1 block w-full px-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-b"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded bg-[#0095a0] py-3 text-sm font-medium text-white hover:bg-[#00796b] cursor-pointer"
                >
                  Submit
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