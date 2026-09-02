import Link from "next/link";

const activities = [
  {
    number: "01",
    title: "Organisasi Mahasiswa",
    description:
      "Mahasiswa dapat mengembangkan kemampuan kepemimpinan, komunikasi, dan kerja sama melalui berbagai kegiatan organisasi.",
  },
  {
    number: "02",
    title: "Kegiatan Akademik",
    description:
      "Berbagai kegiatan akademik mendukung mahasiswa untuk memperluas wawasan dan meningkatkan kompetensi di bidangnya.",
  },
  {
    number: "03",
    title: "Pengembangan Minat & Bakat",
    description:
      "Mahasiswa didorong untuk mengembangkan potensi melalui kegiatan olahraga, seni, teknologi, dan kreativitas.",
  },
  {
    number: "04",
    title: "Kegiatan Sosial",
    description:
      "Kegiatan sosial dan pengabdian menjadi sarana bagi mahasiswa untuk berkontribusi kepada masyarakat.",
  },
];

const services = [
  {
    number: "01",
    title: "Layanan Kemahasiswaan",
    description:
      "Informasi dan layanan yang berkaitan dengan kebutuhan mahasiswa selama menjalani pendidikan.",
  },
  {
    number: "02",
    title: "Beasiswa",
    description:
      "Informasi mengenai program beasiswa dan kesempatan memperoleh dukungan pendidikan.",
  },
  {
    number: "03",
    title: "Organisasi & UKM",
    description:
      "Wadah bagi mahasiswa untuk berorganisasi, berkolaborasi, dan mengembangkan kemampuan non-akademik.",
  },
  {
    number: "04",
    title: "Pengembangan Karier",
    description:
      "Mendorong kesiapan mahasiswa menghadapi dunia kerja melalui pengembangan kompetensi dan pengalaman.",
  },
];

const developmentAreas = [
  "Kepemimpinan",
  "Komunikasi",
  "Kerja Sama Tim",
  "Kreativitas",
  "Kewirausahaan",
  "Teknologi",
  "Profesionalisme",
  "Kepedulian Sosial",
];

export default function KemahasiswaanPage() {
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
              Kemahasiswaan
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Bertumbuh di luar ruang kelas.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Universitas Mandala Bhakti mendorong mahasiswa untuk berkembang
              secara akademik, profesional, dan personal melalui berbagai
              kegiatan kemahasiswaan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#kegiatan"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Lihat Kegiatan →
              </a>

              <Link
                href="/pmb"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#F4C400]/50 hover:bg-white/10"
              >
                Daftar Sekarang
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TENTANG KEMAHASISWAAN
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Tentang Kemahasiswaan
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Kampus sebagai ruang untuk berkembang.
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-8 text-[#55536A]">

              <p>
                Kehidupan mahasiswa tidak hanya berlangsung di dalam kelas.
                Berbagai kegiatan kemahasiswaan menjadi bagian penting dalam
                membentuk karakter, kemampuan komunikasi, kepemimpinan, dan
                kerja sama.
              </p>

              <p>
                Universitas Mandala Bhakti mendorong mahasiswa untuk aktif
                mengikuti kegiatan yang sesuai dengan minat, bakat, dan
                kebutuhan pengembangan dirinya.
              </p>

              <p>
                Melalui pengalaman organisasi, kegiatan akademik, kreativitas,
                dan kegiatan sosial, mahasiswa diharapkan memiliki pengalaman
                yang dapat mendukung perjalanan akademik dan profesionalnya.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEGIATAN MAHASISWA
      ===================================================== */}

      <section
        id="kegiatan"
        className="bg-[#F8F7F2] py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Kegiatan Mahasiswa
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Pengalaman yang membentuk karakter.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Berbagai kegiatan dapat menjadi ruang bagi mahasiswa untuk
              mengembangkan kemampuan dan membangun pengalaman di luar
              kegiatan perkuliahan.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {activities.map((item) => (

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
          ORGANISASI
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Organisasi & Aktivitas
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Bangun relasi dan pengalaman bersama mahasiswa lainnya.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Kegiatan organisasi memberikan kesempatan kepada mahasiswa
                untuk belajar mengelola kegiatan, bekerja dalam tim, dan
                mengambil peran dalam lingkungan kampus.
              </p>

            </div>


            <div className="space-y-4">

              <ActivityItem
                number="01"
                title="Organisasi Mahasiswa"
                description="Mengembangkan kemampuan kepemimpinan dan pengelolaan kegiatan."
              />

              <ActivityItem
                number="02"
                title="Komunitas Minat & Bakat"
                description="Menjadi ruang untuk mengembangkan ketertarikan dan kreativitas mahasiswa."
              />

              <ActivityItem
                number="03"
                title="Kegiatan Kampus"
                description="Berpartisipasi dalam berbagai kegiatan akademik dan non-akademik."
              />

              <ActivityItem
                number="04"
                title="Kegiatan Sosial"
                description="Mendorong kepedulian dan kontribusi mahasiswa kepada masyarakat."
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LAYANAN
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Layanan Mahasiswa
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Dukungan selama perjalanan akademikmu.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {services.map((item) => (

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
          BEASISWA
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] p-9 text-white md:p-12">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Beasiswa
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  Dukungan untuk mahasiswa yang berprestasi dan membutuhkan.
                </h2>

                <p className="mt-5 leading-7 text-[#E8E7F2]">
                  Informasi mengenai program beasiswa dan bantuan pendidikan
                  dapat diperoleh melalui layanan kemahasiswaan Universitas
                  Mandala Bhakti.
                </p>

              </div>

            </div>


            <div className="rounded-[2rem] border border-[#E3E0D6] bg-[#F8F7F2] p-9 md:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Pengembangan Mahasiswa
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#17134F]">
                Kompetensi yang dibangun selama masa kuliah.
              </h2>

              <div className="mt-7 grid grid-cols-2 gap-3">

                {developmentAreas.map((item) => (

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
          KARIER
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Persiapan Karier
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Siapkan diri untuk dunia profesional.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Pengalaman selama menjadi mahasiswa dapat menjadi fondasi
                penting untuk membangun kesiapan memasuki dunia kerja maupun
                mengembangkan usaha sendiri.
              </p>

            </div>


            <div className="rounded-[2rem] border border-[#E3E0D6] bg-white p-8">

              <div className="space-y-5">

                <CareerItem
                  title="Kompetensi Profesional"
                  text="Mengembangkan kemampuan sesuai bidang studi dan kebutuhan dunia kerja."
                />

                <CareerItem
                  title="Soft Skills"
                  text="Membangun komunikasi, kepemimpinan, kerja sama, dan kemampuan adaptasi."
                />

                <CareerItem
                  title="Pengalaman"
                  text="Mengembangkan pengalaman melalui kegiatan kampus, organisasi, dan proyek."
                />

                <CareerItem
                  title="Jejaring"
                  text="Membangun hubungan dengan sesama mahasiswa, akademisi, dan lingkungan profesional."
                />

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
                  Kemahasiswaan Universitas Mandala Bhakti
                </p>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Jadilah mahasiswa yang aktif dan berkembang.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
                  Bangun pengalaman, kembangkan potensi, dan persiapkan diri
                  untuk masa depan bersama Universitas Mandala Bhakti.
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
   COMPONENTS
========================================================= */

function ActivityItem({
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


function CareerItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-[#E3E0D6] pb-5 last:border-0 last:pb-0">

      <h3 className="font-bold text-[#17134F]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#666377]">
        {text}
      </p>

    </div>
  );
}