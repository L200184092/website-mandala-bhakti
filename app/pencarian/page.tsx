import Link from "next/link";

const searchData = [
  {
    category: "Program Studi",
    title: "Program Studi Informatika",
    description:
      "Informasi mengenai profil, visi misi, keunggulan, kurikulum, prospek lulusan, dosen, dan kontak Program Studi Informatika.",
    href: "/program-studi/informatika",
    keywords:
      "informatika teknologi komputer software programming sistem informasi",
  },
  {
    category: "Program Studi",
    title: "Program Studi Perhotelan",
    description:
      "Informasi mengenai pendidikan perhotelan, kompetensi, kurikulum, prospek lulusan, dan pengembangan karier di bidang hospitality.",
    href: "/program-studi/perhotelan",
    keywords:
      "perhotelan hospitality hotel pariwisata wisata kuliner",
  },
  {
    category: "Program Studi",
    title: "Semua Program Studi",
    description:
      "Lihat seluruh program studi dan informasi pendidikan yang tersedia di Universitas Mandala Bhakti.",
    href: "/program-studi",
    keywords: "program studi jurusan prodi pendidikan akademik",
  },
  {
    category: "Akademik",
    title: "Informasi Akademik",
    description:
      "Informasi mengenai kegiatan akademik, pembelajaran, kalender akademik, dan layanan akademik.",
    href: "/akademik",
    keywords: "akademik kuliah mahasiswa pembelajaran kalender",
  },
  {
    category: "PMB",
    title: "Penerimaan Mahasiswa Baru",
    description:
      "Informasi pendaftaran mahasiswa baru, persyaratan, proses pendaftaran, dan informasi PMB.",
    href: "/pmb",
    keywords:
      "pmb penerimaan mahasiswa baru daftar pendaftaran registrasi calon mahasiswa",
  },
  {
    category: "Kemahasiswaan",
    title: "Kemahasiswaan",
    description:
      "Informasi kegiatan mahasiswa, organisasi, pengembangan minat dan bakat, beasiswa, serta persiapan karier.",
    href: "/kemahasiswaan",
    keywords:
      "mahasiswa organisasi ukm beasiswa karier kegiatan minat bakat",
  },
  {
    category: "Penelitian & Pengabdian",
    title: "Penelitian & Pengabdian",
    description:
      "Informasi mengenai kegiatan penelitian, pengembangan ilmu pengetahuan, dan pengabdian kepada masyarakat.",
    href: "/penelitian-pengabdian",
    keywords:
      "penelitian riset pengabdian masyarakat jurnal dosen",
  },
  {
    category: "Fasilitas",
    title: "Fasilitas Kampus",
    description:
      "Informasi mengenai fasilitas dan lingkungan yang mendukung kegiatan pembelajaran dan kehidupan kampus.",
    href: "/fasilitas",
    keywords:
      "fasilitas kampus gedung laboratorium perpustakaan ruang kelas",
  },
  {
    category: "Profil",
    title: "Profil Universitas",
    description:
      "Kenali Universitas Mandala Bhakti, sejarah, visi, misi, tujuan, dan arah pengembangan institusi.",
    href: "/profil",
    keywords:
      "profil universitas sejarah visi misi tujuan institusi",
  },
  {
    category: "Berita",
    title: "Berita & Pengumuman",
    description:
      "Informasi berita, kegiatan, pengumuman, dan perkembangan terbaru Universitas Mandala Bhakti.",
    href: "/berita",
    keywords:
      "berita pengumuman kegiatan informasi terbaru kampus",
  },
  {
    category: "Kontak",
    title: "Kontak Universitas",
    description:
      "Informasi alamat, telepon, email, media sosial, dan lokasi Universitas Mandala Bhakti.",
    href: "/kontak",
    keywords:
      "kontak alamat telepon email whatsapp instagram lokasi maps",
  },
];

const popularSearches = [
  "PMB",
  "Informatika",
  "Perhotelan",
  "Beasiswa",
  "Fasilitas",
  "Kontak",
];

function normalizeText(text: string) {
  return text.toLowerCase().trim();
}

export default async function PencarianPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const normalizedQuery = normalizeText(query);

  const results = normalizedQuery
    ? searchData.filter((item) => {
        const searchableText = normalizeText(
          `${item.category} ${item.title} ${item.description} ${item.keywords}`
        );

        return searchableText.includes(normalizedQuery);
      })
    : searchData;

  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#17134F] text-white">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F4C400]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C49A00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F4C400]">
              Pencarian Informasi
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
              Temukan informasi kampus.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#E8E7F2]">
              Cari informasi mengenai program studi, akademik, PMB,
              kemahasiswaan, fasilitas, berita, dan layanan Universitas
              Mandala Bhakti.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="bg-white py-12">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <form
            action="/pencarian"
            method="GET"
            className="relative"
          >

            <label
              htmlFor="search"
              className="sr-only"
            >
              Cari informasi
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">

              <div className="relative flex-1">

                <svg
                  className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#817D8C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>

                <input
                  id="search"
                  name="q"
                  type="search"
                  defaultValue={query}
                  placeholder="Cari informasi..."
                  className="h-14 w-full rounded-2xl border border-[#DDD8C9] bg-[#F8F7F2] pl-14 pr-5 text-base text-[#17134F] outline-none transition placeholder:text-[#9A96A4] focus:border-[#C99A00] focus:bg-white focus:ring-4 focus:ring-[#C99A00]/10"
                />

              </div>

              <button
                type="submit"
                className="h-14 rounded-2xl bg-[#21145F] px-8 text-sm font-semibold text-white transition hover:bg-[#302074]"
              >
                Cari
              </button>

            </div>

          </form>


          {/* =================================================
              POPULAR SEARCH
          ================================================= */}

          <div className="mt-6 flex flex-wrap items-center gap-2">

            <span className="mr-1 text-sm font-medium text-[#666377]">
              Pencarian populer:
            </span>

            {popularSearches.map((item) => (

              <Link
                key={item}
                href={`/pencarian?q=${encodeURIComponent(item)}`}
                className="rounded-full border border-[#E3E0D6] bg-[#F8F7F2] px-4 py-2 text-xs font-semibold text-[#403B52] transition hover:border-[#D9C56A] hover:bg-[#FFF9D9] hover:text-[#21145F]"
              >
                {item}
              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                {query ? "Hasil Pencarian" : "Informasi Kampus"}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17134F] md:text-4xl">
                {query
                  ? `Hasil untuk "${query}"`
                  : "Jelajahi informasi Universitas"}
              </h2>

            </div>

            <p className="text-sm text-[#666377]">
              {results.length} informasi ditemukan
            </p>

          </div>


          {/* =================================================
              NO RESULT
          ================================================= */}

          {results.length === 0 && (

            <div className="mt-10 rounded-3xl border border-[#E3E0D6] bg-white p-10 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF9D9] text-[#C49A00]">

                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#17134F]">
                Informasi tidak ditemukan.
              </h3>

              <p className="mx-auto mt-3 max-w-lg leading-7 text-[#666377]">
                Coba gunakan kata kunci lain seperti PMB, Informatika,
                Perhotelan, Beasiswa, atau Fasilitas.
              </p>

            </div>

          )}


          {/* =================================================
              RESULT GRID
          ================================================= */}

          {results.length > 0 && (

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {results.map((item, index) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-[#E3E0D6] bg-white p-7 transition hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-bold text-[#C49A00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="rounded-full bg-[#F8F7F2] px-3 py-1 text-[11px] font-semibold text-[#666377]">
                      {item.category}
                    </span>

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#17134F]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#666377]">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-block text-sm font-semibold text-[#21145F] transition group-hover:translate-x-1">
                    Lihat informasi →
                  </span>

                </Link>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] px-8 py-12 text-white md:px-12 md:py-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Butuh Informasi?
                </p>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Tidak menemukan yang Anda cari?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#E8E7F2]">
                  Hubungi Universitas Mandala Bhakti melalui halaman kontak
                  untuk mendapatkan informasi lebih lanjut.
                </p>

              </div>

              <Link
                href="/kontak"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Hubungi Kami →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}