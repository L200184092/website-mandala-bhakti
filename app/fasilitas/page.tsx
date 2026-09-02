import Link from "next/link";

const academicFacilities = [
  {
    number: "01",
    title: "Ruang Perkuliahan",
    description:
      "Ruang pembelajaran yang mendukung kegiatan perkuliahan, diskusi, presentasi, dan aktivitas akademik mahasiswa.",
  },
  {
    number: "02",
    title: "Laboratorium",
    description:
      "Fasilitas praktik yang mendukung mahasiswa untuk mengembangkan keterampilan sesuai bidang ilmu dan program studi.",
  },
  {
    number: "03",
    title: "Perpustakaan",
    description:
      "Sarana pendukung pembelajaran untuk membantu mahasiswa memperoleh referensi dan memperluas wawasan akademik.",
  },
  {
    number: "04",
    title: "Ruang Akademik",
    description:
      "Fasilitas yang mendukung interaksi mahasiswa dengan dosen dan penyelenggaraan berbagai kegiatan akademik.",
  },
];

const studentFacilities = [
  {
    number: "01",
    title: "Ruang Kegiatan Mahasiswa",
    description:
      "Ruang dan lingkungan yang dapat mendukung kegiatan organisasi, komunitas, dan aktivitas mahasiswa.",
  },
  {
    number: "02",
    title: "Area Bersama",
    description:
      "Area yang dapat dimanfaatkan mahasiswa untuk berinteraksi, berdiskusi, dan membangun kebersamaan.",
  },
  {
    number: "03",
    title: "Sarana Pendukung",
    description:
      "Berbagai sarana pendukung untuk membantu mahasiswa menjalani kegiatan akademik dan kemahasiswaan.",
  },
  {
    number: "04",
    title: "Lingkungan Kampus",
    description:
      "Lingkungan pembelajaran yang dirancang untuk mendukung suasana akademik dan pengembangan mahasiswa.",
  },
];

const programFacilities = [
  {
    number: "01",
    title: "Fasilitas Informatika",
    description:
      "Sarana praktik untuk mendukung pembelajaran pemrograman, pengembangan perangkat lunak, data, dan teknologi digital.",
  },
  {
    number: "02",
    title: "Front Office",
    description:
      "Fasilitas praktik yang mendukung pembelajaran operasional front office dan pelayanan tamu.",
  },
  {
    number: "03",
    title: "Housekeeping",
    description:
      "Sarana praktik untuk mendukung pembelajaran pengelolaan kamar dan operasional housekeeping.",
  },
  {
    number: "04",
    title: "Food & Beverage",
    description:
      "Fasilitas praktik yang mendukung pembelajaran pelayanan serta pengolahan makanan dan minuman.",
  },
];

const facilitiesSupport = [
  "Pembelajaran",
  "Praktik",
  "Diskusi",
  "Penelitian",
  "Kegiatan Mahasiswa",
  "Pengembangan Kompetensi",
  "Kolaborasi",
  "Pengembangan Karier",
];

export default function FasilitasPage() {
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
              Fasilitas
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Mendukung proses belajar
              <br />
              dan berkembang.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Universitas Mandala Bhakti menyediakan berbagai fasilitas yang
              mendukung kegiatan pembelajaran, praktik, penelitian,
              kemahasiswaan, dan pengembangan kompetensi.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#akademik"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Lihat Fasilitas →
              </a>

              <Link
                href="/kontak"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#F4C400]/50 hover:bg-white/10"
              >
                Hubungi Kami
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TENTANG FASILITAS
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Tentang Fasilitas
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Lingkungan yang mendukung perjalanan akademik.
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-8 text-[#55536A]">

              <p>
                Fasilitas merupakan bagian penting dalam menciptakan lingkungan
                pembelajaran yang mendukung mahasiswa untuk memperoleh
                pengalaman akademik dan praktik secara optimal.
              </p>

              <p>
                Universitas Mandala Bhakti mengembangkan sarana yang mendukung
                kegiatan perkuliahan, praktik sesuai bidang studi, penelitian,
                serta berbagai aktivitas kemahasiswaan.
              </p>

              <p>
                Pemanfaatan fasilitas kampus diarahkan untuk membantu
                mahasiswa mengembangkan kompetensi, kreativitas, kolaborasi,
                dan kesiapan menghadapi dunia profesional.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FASILITAS AKADEMIK
      ===================================================== */}

      <section
        id="akademik"
        className="bg-[#F8F7F2] py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Fasilitas Akademik
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Sarana untuk mendukung kegiatan pembelajaran.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Fasilitas akademik mendukung proses perkuliahan, pembelajaran
              mandiri, interaksi akademik, serta pengembangan kompetensi
              mahasiswa.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {academicFacilities.map((item) => (

              <div
                key={item.number}
                className="rounded-3xl border border-[#E3E0D6] bg-white p-7 transition hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#C49A00]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#17134F]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#666377]">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FASILITAS PROGRAM STUDI
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Fasilitas Praktik
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Belajar melalui pengalaman praktik.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Fasilitas praktik membantu mahasiswa menghubungkan teori
                dengan pengalaman langsung sesuai bidang program studi.
              </p>

            </div>


            <div className="space-y-4">

              {programFacilities.map((item) => (

                <FacilityItem
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                />

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FASILITAS MAHASISWA
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Fasilitas Mahasiswa
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Mendukung kehidupan dan aktivitas mahasiswa.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Selain kegiatan akademik, lingkungan kampus juga mendukung
              mahasiswa untuk berorganisasi, berkolaborasi, dan mengembangkan
              potensi di luar ruang kelas.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {studentFacilities.map((item) => (

              <div
                key={item.number}
                className="rounded-3xl border border-[#E3E0D6] bg-white p-7 transition hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#C49A00]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#17134F]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#666377]">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DUKUNGAN FASILITAS
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] p-9 text-white md:p-12">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Lingkungan Pembelajaran
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  Fasilitas dirancang untuk mendukung pengalaman belajar yang
                  lebih lengkap.
                </h2>

                <p className="mt-5 leading-7 text-[#E8E7F2]">
                  Perkuliahan, praktik, penelitian, kegiatan mahasiswa, dan
                  pengembangan kompetensi saling melengkapi dalam lingkungan
                  pendidikan Universitas Mandala Bhakti.
                </p>

              </div>

            </div>


            <div className="rounded-[2rem] border border-[#E3E0D6] bg-[#F8F7F2] p-9 md:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Mendukung Aktivitas
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#17134F]">
                Fasilitas untuk berbagai kebutuhan mahasiswa.
              </h2>

              <div className="mt-7 grid grid-cols-2 gap-3">

                {facilitiesSupport.map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-[#E3E0D6] bg-white px-4 py-3 text-sm font-semibold text-[#17134F]"
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
          LOKASI
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Lokasi Kampus
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Temukan lokasi Universitas Mandala Bhakti.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Informasi lokasi dan akses kampus dapat membantu calon
                mahasiswa, orang tua, mitra, dan masyarakat menemukan
                Universitas Mandala Bhakti.
              </p>

              <Link
                href="/kontak"
                className="mt-8 inline-flex rounded-full bg-[#21145F] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#302074]"
              >
                Lihat Informasi Kontak →
              </Link>

            </div>


            <div className="overflow-hidden rounded-[2rem] border border-[#E3E0D6] bg-white">

              <div className="flex h-80 items-center justify-center bg-[#ECEAE3]">

                <div className="px-8 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#21145F] text-white">

                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="2.2"
                        strokeWidth={1.8}
                      />
                    </svg>

                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#17134F]">
                    Google Maps
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#666377]">
                    Peta lokasi kampus dapat ditampilkan di bagian ini setelah
                    alamat resmi Universitas Mandala Bhakti ditetapkan.
                  </p>

                </div>

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
                  Fasilitas Universitas Mandala Bhakti
                </p>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Lingkungan belajar untuk masa depan.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
                  Kenali lingkungan pembelajaran dan berbagai fasilitas yang
                  mendukung perjalanan akademik di Universitas Mandala Bhakti.
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


/* =========================================================
   COMPONENT
========================================================= */

function FacilityItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E3E0D6] bg-[#F8F7F2] p-6 transition hover:border-[#D9C56A] hover:bg-white">

      <div className="flex gap-5">

        <span className="text-sm font-bold text-[#C49A00]">
          {number}
        </span>

        <div>

          <h3 className="font-bold text-[#17134F]">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#666377]">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}