import Image from "next/image";
import Link from "next/link";

const news = [
  {
    category: "Kampus",
    date: "30 Agustus 2026",
    title:
      "Universitas Mandala Bhakti Mempersiapkan Pengembangan Pendidikan Tinggi",
    description:
      "Informasi mengenai perkembangan Universitas Mandala Bhakti dalam membangun lingkungan pendidikan yang inovatif, profesional, dan relevan dengan kebutuhan masyarakat.",
    href: "/berita/universitas-mandala-bhakti-mempersiapkan-pengembangan-pendidikan-tinggi",
    image:
      "/berita/Universitas Mandala Bhakti Mempersiapkan Pengembangan Pendidikan Tinggi.png",
  },
  {
    category: "Akademik",
    date: "28 Agustus 2026",
    title: "Mendorong Pembelajaran yang Relevan dengan Perkembangan Industri",
    description:
      "Universitas Mandala Bhakti terus mengembangkan pembelajaran yang menggabungkan pengetahuan akademik, praktik, dan kebutuhan dunia profesional.",
    href: "",
    image: "",
  },
  {
    category: "Kemahasiswaan",
    date: "25 Agustus 2026",
    title: "Kegiatan Mahasiswa sebagai Ruang Pengembangan Potensi",
    description:
      "Berbagai kegiatan kemahasiswaan menjadi bagian dari upaya membangun pengalaman, karakter, kepemimpinan, dan kemampuan mahasiswa.",
    href: "",
    image: "",
  },
  {
    category: "PMB",
    date: "22 Agustus 2026",
    title: "Penerimaan Mahasiswa Baru Universitas Mandala Bhakti",
    description:
      "Informasi penerimaan mahasiswa baru bagi calon mahasiswa yang ingin melanjutkan pendidikan di Universitas Mandala Bhakti.",
    href: "",
    image: "",
  },
  {
    category: "Penelitian",
    date: "20 Agustus 2026",
    title: "Pengembangan Penelitian dan Inovasi untuk Masyarakat",
    description:
      "Penelitian menjadi bagian penting dalam pengembangan ilmu pengetahuan dan menghasilkan solusi yang memberikan manfaat bagi masyarakat.",
    href: "",
    image: "",
  },
  {
    category: "Kegiatan",
    date: "18 Agustus 2026",
    title: "Membangun Kolaborasi untuk Pengembangan Pendidikan",
    description:
      "Kolaborasi dengan berbagai pihak menjadi salah satu langkah dalam memperluas manfaat pendidikan dan menciptakan peluang pengembangan bersama.",
    href: "",
    image: "",
  },
];

const announcements = [
  {
    date: "30 Agustus 2026",
    title: "Informasi Penerimaan Mahasiswa Baru",
    category: "PMB",
  },
  {
    date: "28 Agustus 2026",
    title: "Informasi Kegiatan Akademik",
    category: "Akademik",
  },
  {
    date: "25 Agustus 2026",
    title: "Informasi Kegiatan Kemahasiswaan",
    category: "Kemahasiswaan",
  },
  {
    date: "20 Agustus 2026",
    title: "Informasi Penelitian dan Pengabdian",
    category: "Penelitian",
  },
];

const categories = [
  "Semua",
  "Kampus",
  "Akademik",
  "PMB",
  "Kemahasiswaan",
  "Penelitian",
  "Kegiatan",
];

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#17134F] text-white">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F4C400]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C49A00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F4C400]">
              Berita & Pengumuman
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Informasi terbaru
              <br />
              dari Mandala Bhakti.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Ikuti berbagai informasi, berita, kegiatan, dan pengumuman
              resmi Universitas Mandala Bhakti.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#berita"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Lihat Berita →
              </a>

              <a
                href="#pengumuman"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#F4C400]/50 hover:bg-white/10"
              >
                Pengumuman
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Informasi Universitas
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Tetap terhubung dengan perkembangan kampus.
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-8 text-[#55536A]">

              <p>
                Halaman berita menjadi pusat informasi mengenai berbagai
                perkembangan dan kegiatan Universitas Mandala Bhakti.
              </p>

              <p>
                Informasi yang tersedia mencakup kegiatan akademik,
                kemahasiswaan, penerimaan mahasiswa baru, penelitian,
                pengabdian kepada masyarakat, serta kegiatan kampus lainnya.
              </p>

              <p>
                Informasi dan pengumuman resmi dapat menjadi rujukan bagi
                mahasiswa, calon mahasiswa, alumni, dan masyarakat.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BERITA
      ===================================================== */}

      <section
        id="berita"
        className="bg-[#F8F7F2] py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Berita Terbaru
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Kabar terbaru dari kampus.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Temukan berita dan kegiatan terbaru Universitas Mandala
                Bhakti.
              </p>

            </div>

          </div>


          {/* CATEGORY */}

          <div className="mt-10 flex flex-wrap gap-3">

            {categories.map((category, index) => (

              <button
                key={category}
                type="button"
                className={
                  index === 0
                    ? "rounded-full bg-[#21145F] px-5 py-2.5 text-sm font-semibold text-white"
                    : "rounded-full border border-[#DDD8C9] bg-white px-5 py-2.5 text-sm font-medium text-[#403B52] transition hover:border-[#C99A00] hover:bg-[#FFF9D9]"
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* NEWS GRID */}

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {news.map((item) => (

              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.5rem] border border-[#E3E0D6] bg-white transition hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
              >

                {/* IMAGE */}

                {item.image ? (

                  <div className="relative h-52 overflow-hidden bg-[#21145F]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                ) : (

                  <div className="flex h-52 items-center justify-center bg-[#21145F]">

                    <div className="text-center">

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F4C400]/15 text-[#F4C400]">

                        <svg
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 10a2 2 0 100-4 2 2 0 000 4zM21 15l-5-5L5 19"
                          />

                        </svg>

                      </div>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                        Universitas Mandala Bhakti
                      </p>

                    </div>

                  </div>

                )}


                {/* NEWS CONTENT */}

                <div className="p-7">

                  <div className="flex items-center justify-between gap-3">

                    <span className="rounded-full bg-[#FFF9D9] px-3 py-1.5 text-xs font-semibold text-[#A47D00]">
                      {item.category}
                    </span>

                    <span className="text-xs text-[#817D8C]">
                      {item.date}
                    </span>

                  </div>


                  <h3 className="mt-5 text-xl font-bold leading-snug text-[#17134F] transition group-hover:text-[#302074]">
                    {item.title}
                  </h3>


                  <p className="mt-4 text-sm leading-7 text-[#666377]">
                    {item.description}
                  </p>


                  {item.href ? (

                    <Link
                      href={item.href}
                      className="mt-6 inline-block text-sm font-semibold text-[#21145F] transition hover:text-[#C49A00]"
                    >
                      Baca Selengkapnya →
                    </Link>

                  ) : (

                    <span className="mt-6 inline-block text-sm font-semibold text-[#21145F]">
                      Baca Selengkapnya →
                    </span>

                  )}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PENGUMUMAN
      ===================================================== */}

      <section
        id="pengumuman"
        className="bg-white py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Pengumuman
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Informasi penting untuk diperhatikan.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Pengumuman digunakan untuk menyampaikan informasi resmi
                mengenai kegiatan akademik, PMB, kemahasiswaan, dan kegiatan
                Universitas Mandala Bhakti.
              </p>

            </div>


            <div className="space-y-4">

              {announcements.map((item, index) => (

                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#E3E0D6] bg-[#F8F7F2] p-6 transition hover:border-[#D9C56A] hover:bg-white"
                >

                  <div className="flex gap-5">

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF9D9] text-sm font-bold text-[#C49A00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-3">

                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A00]">
                          {item.category}
                        </span>

                        <span className="text-xs text-[#817D8C]">
                          {item.date}
                        </span>

                      </div>

                      <h3 className="mt-2 font-bold text-[#17134F]">
                        {item.title}
                      </h3>

                      <button
                        type="button"
                        className="mt-3 text-xs font-semibold text-[#21145F] transition hover:text-[#C49A00]"
                      >
                        Lihat Pengumuman →
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SUMBER INFORMASI
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] p-9 text-white md:p-12">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Informasi Resmi
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  Satu tempat untuk mengikuti kabar Mandala Bhakti.
                </h2>

                <p className="mt-5 leading-7 text-[#E8E7F2]">
                  Ikuti informasi terbaru mengenai kegiatan akademik,
                  kemahasiswaan, penerimaan mahasiswa baru, penelitian, dan
                  perkembangan universitas.
                </p>

              </div>

            </div>


            <div className="rounded-[2rem] border border-[#E3E0D6] bg-white p-9 md:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Topik Informasi
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#17134F]">
                Temukan informasi sesuai kebutuhanmu.
              </h2>

              <div className="mt-7 grid grid-cols-2 gap-3">

                {[
                  "Akademik",
                  "PMB",
                  "Kemahasiswaan",
                  "Kegiatan Kampus",
                  "Penelitian",
                  "Pengabdian",
                  "Prestasi",
                  "Pengumuman",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-[#E3E0D6] bg-[#F8F7F2] px-4 py-3 text-sm font-semibold text-[#17134F]"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] px-8 py-12 text-white md:px-12 md:py-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Universitas Mandala Bhakti
                </p>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Jangan lewatkan informasi terbaru.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
                  Ikuti perkembangan kampus dan temukan informasi yang
                  dibutuhkan untuk perjalanan akademikmu.
                </p>

              </div>


              <Link
                href="/pmb"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Daftar Sekarang →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}