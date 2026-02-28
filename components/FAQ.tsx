export default function FAQ() {
    return (
        <section className="bg-gray-100 py-20">
            <div data-aos="fade-up" className="mx-auto max-w-4xl px-4">
            <h2 className="mb-10 text-center text-2xl font-semibold">
                Pertanyaan Seputar Photobook
            </h2>

            <div className="space-y-4">
                <details className="rounded-xl bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-medium">
                    Photobook cocok untuk momen apa saja?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                    Cocok untuk semua momen bahagia seperti liburan, pernikahan, dan keluarga.
                </p>
                </details>
                <details className="rounded-xl bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-medium">
                    Bisa order dari HP?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                    Bisa, semua proses bisa dilakukan langsung dari handphone.
                </p>
                </details>
                <details className="rounded-xl bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-medium">
                    Berapa lama proses cetak?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                    Rata-rata 7–14 hari kerja.
                </p>
                </details>
                <details className="rounded-xl bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-medium">
                    Berapa lama batas waktu upload foto setelah order?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                    Batas waktu upload foto adalah 30 hari setelah melakukan pemesanan.
                </p>
                </details>
                <details className="rounded-xl bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-medium">
                    Saya sudah pernah pesan, tapi belum upload fotonya, bagaimana caranya ya?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                    Silahkan hubungi customer service kami melalui WhatsApp di <span className="text-blue-600"><a href="https://wa.me/6281586575295">081586575295</a></span> untuk bantuan lebih lanjut.
                </p>
                </details>
                <details className="rounded-xl bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-medium">
                    Kalau saya ada kendala, bagaimana cara menghubungi customer service?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                    Silahkan hubungi customer service kami melalui WhatsApp di <span className="text-blue-600"><a href="https://wa.me/6281586575295">6281586575295</a></span> untuk bantuan lebih lanjut.
                </p>
                </details>
            </div>
            </div>
        </section>
    )
}