'use client'
export default function HomePage() {
  return (
    <main className="text-gray-800">

      {/* HERO */}
      <header className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            Cetak Photobook untuk Semua Momen Bahagia
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Ubah foto-foto terbaikmu menjadi photobook berkualitas tinggi.
            Cocok untuk liburan, pernikahan, ulang tahun, keluarga, dan momen spesial lainnya.
          </p>

          <a
            href="/products"
            className="inline-block rounded-xl bg-black px-8 py-4 text-white transition hover:bg-gray-900"
          >
            Buat Photobook Sekarang
          </a>
        </div>
      </header>

      {/* SOCIAL PROOF */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="mb-4 text-2xl font-semibold">
            Dipercaya untuk Mengabadikan Banyak Momen Berharga
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Kidodia dipercaya oleh pelanggan di Indonesia untuk mencetak photobook
            dengan proses mudah dan hasil cetak berkualitas.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <span>⭐⭐⭐⭐⭐ Rating Pelanggan</span>
            <span>Ribuan Photobook Tercetak</span>
            <span>Pengiriman Seluruh Indonesia</span>
          </div>
        </div>
      </section>

      {/* WHY KIDODIA */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-12 text-center text-2xl font-semibold">
            Kenapa Cetak Photobook di Kidodia?
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Upload dari HP",
                desc: "Upload foto langsung dari handphone tanpa ribet.",
              },
              {
                title: "Desain Rapi",
                desc: "Layout simpel dan nyaman untuk berbagai momen.",
              },
              {
                title: "Kualitas Premium",
                desc: "Warna tajam, kertas tebal, dan tahan lama.",
              },
              {
                title: "Kirim ke Rumah",
                desc: "Dicetak dan dikirim ke seluruh Indonesia.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER STEPS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-12 text-center text-2xl font-semibold">
            Cara Membuat Photobook di Kidodia
          </h2>

          <ol className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Pilih Produk",
                desc: "Tentukan photobook sesuai kebutuhanmu.",
              },
              {
                step: "02",
                title: "Upload Foto",
                desc: "Pilih momen bahagia yang ingin dicetak.",
              },
              {
                step: "03",
                title: "Cetak & Kirim",
                desc: "Photobook dicetak dan dikirim ke rumah.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-gray-100 p-6 text-center"
              >
                <span className="mb-2 block text-sm font-bold text-gray-400">
                  {item.step}
                </span>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MOMENTS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="mb-8 text-2xl font-semibold">
            Photobook untuk Berbagai Momen
          </h2>

          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Liburan & Travel",
              "Pernikahan & Anniversary",
              "Ulang Tahun & Wisuda",
              "Keluarga & Anak",
              "Momen Bahagia Lainnya",
            ].map((item) => (
              <li
                key={item}
                className="rounded-full bg-white px-6 py-3 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-12 text-center text-2xl font-semibold">
            Pilihan Produk Photobook
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="mb-2 font-semibold">Photobook Softcover</h3>
              <p className="mb-4 text-sm text-gray-600">
                Ringan dan cocok untuk kenangan sehari-hari.
              </p>
              <a href="/products/softcover" className="font-medium underline">
                Lihat Detail
              </a>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="mb-2 font-semibold">Photobook Hardcover</h3>
              <p className="mb-4 text-sm text-gray-600">
                Elegan dan tahan lama untuk momen spesial.
              </p>
              <a href="/products/hardcover" className="font-medium underline">
                Lihat Detail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Pertanyaan Seputar Photobook
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Photobook cocok untuk momen apa saja?",
                a: "Cocok untuk semua momen bahagia seperti liburan, pernikahan, dan acara spesial.",
              },
              {
                q: "Bisa order dari HP?",
                a: "Bisa. Semua proses bisa dilakukan langsung dari handphone.",
              },
              {
                q: "Berapa lama proses cetak?",
                a: "Rata-rata 5–7 hari kerja sebelum dikirim.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="rounded-xl bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer font-medium">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-semibold">
            Abadikan Momen Bahagiamu Sekarang
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-300">
            Jangan biarkan foto-foto berharga hanya tersimpan di galeri.
            Cetak photobook berkualitas bersama Kidodia.
          </p>

          <a
            href="/products"
            className="inline-block rounded-xl bg-white px-8 py-4 font-medium text-black transition hover:bg-gray-100"
          >
            Buat Photobook Sekarang
          </a>
        </div>
      </section>

    </main>
  );
}
