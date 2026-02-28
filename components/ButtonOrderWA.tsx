import Link from "next/link";

export default function ButtonOrderWA({ phoneNumber, message }: { phoneNumber: string; message: string }) {
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      id="btn_wa"
      href={waLink}
      target="_blank"
      className="items-center px-6 py-3 bg-green-600 text-white font-medium rounded shadow-md hover:bg-green-800 transition-colors duration-300 text-lg text-center w-full"
    >
      <span className="animate-pulse duration-100">Pesan Disini Sekarang!</span>
    </Link>
  );
}