import Link from "next/link";

const advantages = [
  {
    number: "01",
    title: "Pembelajaran Berbasis Praktik",
    description:
      "Mengintegrasikan teori dan praktik agar mahasiswa memiliki keterampilan yang relevan dengan kebutuhan industri hospitality.",
  },
  {
    number: "02",
    title: "Fasilitas Pembelajaran Praktik",
    description:
      "Pembelajaran didukung fasilitas praktik seperti Front Office, Housekeeping, Food & Beverage Service, dan Production Kitchen.",
  },
  {
    number: "03",
    title: "Pengalaman Industri",
    description:
      "Mahasiswa dipersiapkan melalui pengalaman praktik dan pembelajaran yang berorientasi pada kebutuhan dunia kerja.",
  },
  {
    number: "04",
    title: "Peluang Karier Luas",
    description:
      "Membekali mahasiswa dengan kompetensi untuk berkarier di hotel, restoran, kapal pesiar, dan berbagai bidang hospitality.",
  },
];

const careers = [
  "Front Office",
  "Housekeeping",
  "Food & Beverage Service",
  "Food & Beverage Product",
  "Hotel Administration",
  "Human Resources",
  "Hotel Accounting",
  "Cruise Hospitality",
];

const curriculum = [
  {
    number: "01",
    title: "Front Office",
    description:
      "Operasional kantor depan hotel, reservasi, pelayanan tamu, komunikasi, dan pengelolaan informasi front office.",
  },
  {
    number: "02",
    title: "Housekeeping",
    description:
      "Pengelolaan kamar, kebersihan, linen, peralatan, dan operasional departemen housekeeping.",
  },
  {
    number: "03",
    title: "Food & Beverage Service",
    description:
      "Pelayanan makanan dan minuman serta penerapan standar pelayanan dalam operasional hospitality.",
  },
  {
    number: "04",
    title: "Food & Beverage Product",
    description:
      "Pengolahan makanan, pastry, serta praktik produksi makanan dengan memperhatikan kualitas dan keamanan pangan.",
  },
  {
    number: "05",
    title: "Manajemen Perhotelan",
    description:
      "Aspek manajemen, administrasi, sumber daya manusia, dan pengelolaan operasional dalam industri perhotelan.",
  },
];

const lecturers = [
  "Septi Wulandari",
  "Arnes Anandita",
  "Tri Wahyuningsih",
  "Wahyu Ari Indriastuti",
  "Juni Trimo Legowo",
  "Laraswati",
  "Lilik Kristianto",
  "Surjo Sulistijo",
  "Ambar Lestiyo Rini",
];

const facilities = [
  {
    number: "01",
    title: "Front Office Lab",
    description:
      "Ruang praktik untuk mempelajari operasional front office, reservasi, dan pelayanan tamu.",
  },
  {
    number: "02",
    title: "Housekeeping Lab",
    description:
      "Fasilitas praktik untuk mempelajari pengelolaan kamar dan operasional housekeeping.",
  },
  {
    number: "03",
    title: "Food & Beverage Lab",
    description:
      "Fasilitas praktik pelayanan makanan dan minuman dalam kegiatan hospitality.",
  },
  {
    number: "04",
    title: "Production Kitchen",
    description:
      "Fasilitas praktik pengolahan makanan dan pengembangan keterampilan food production.",
  },
];

export default function PerhotelanPage() {
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

            <div className="flex flex-wrap items-center gap-3">

              <span className="rounded-full border border-[#F4C400]/30 bg-[#F4C400]/10 px-4 py-2 text-sm font-semibold text-[#F4C400]">
                D3
              </span>

              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#D9D6E8]">
                Perhotelan & Hospitality
              </span>

            </div>

            <h1 className="mt-7 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Perhotelan
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Mempersiapkan tenaga profesional di bidang perhotelan dan
              hospitality melalui perpaduan pembelajaran teori, praktik,
              pengalaman industri, dan pengembangan kompetensi profesional.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/pmb"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Lihat Informasi PMB →
              </Link>

              <a
                href="#tentang"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#F4C400]/50 hover:bg-white/10"
              >
                Pelajari Program
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="tentang" className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Tentang Program Studi
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Belajar hospitality untuk menjadi profesional industri.
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-8 text-[#55536A]">

              <p>
                Program Studi D3 Perhotelan dirancang untuk membekali
                mahasiswa dengan kompetensi di bidang perhotelan dan
                hospitality serta kemampuan untuk beradaptasi dengan
                kebutuhan dunia kerja.
              </p>

              <p>
                Pembelajaran menggabungkan teori dan praktik sehingga
                mahasiswa tidak hanya memahami konsep, tetapi juga
                memperoleh pengalaman dalam menjalankan berbagai aktivitas
                operasional hospitality.
              </p>

              <p>
                Kompetensi mahasiswa dikembangkan melalui pembelajaran yang
                relevan dengan perkembangan industri perhotelan dan
                pariwisata, termasuk aspek pelayanan, operasional,
                manajemen, dan profesionalisme.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISI MISI
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* VISI */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] p-9 text-white md:p-12">

              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F4C400]/10 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Visi
                </p>

                <h2 className="mt-6 text-2xl font-bold leading-relaxed md:text-3xl">
                  Menjadi Program Studi Diploma 3 di bidang pariwisata yang
                  unggul dan mampu bersaing di tingkat nasional pada tahun
                  2035.
                </h2>

              </div>

            </div>


            {/* MISI */}

            <div className="rounded-[2rem] border border-[#E3E0D6] bg-white p-9 md:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Misi
              </p>

              <div className="mt-7 space-y-5">

                <Mission
                  number="01"
                  text="Menyelenggarakan pendidikan Diploma 3 yang memiliki kompetensi unggul di bidang perhotelan dan pariwisata."
                />

                <Mission
                  number="02"
                  text="Mengembangkan teknologi di bidang perhotelan dan pariwisata dalam proses pendidikan."
                />

                <Mission
                  number="03"
                  text="Menyelenggarakan penelitian dan pengabdian kepada masyarakat yang mendukung pembangunan nasional."
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEUNGGULAN
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Keunggulan
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Dipersiapkan untuk menghadapi industri hospitality.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Pembelajaran dirancang untuk mengembangkan keterampilan
              praktis, kemampuan profesional, dan pemahaman terhadap
              operasional industri hospitality.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {advantages.map((item) => (

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
          RUANG LINGKUP PEMBELAJARAN
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Ruang Lingkup Pembelajaran
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Kompetensi praktis untuk dunia hospitality.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Pembelajaran mencakup berbagai bidang operasional dan
                manajerial yang menjadi bagian penting dalam industri
                perhotelan dan hospitality.
              </p>

              <div className="mt-6 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] p-5">

                <p className="text-sm font-semibold text-[#17134F]">
                  Catatan Akademik
                </p>

                <p className="mt-2 text-sm leading-6 text-[#666377]">
                  Daftar bidang pembelajaran di halaman ini merupakan
                  gambaran kompetensi utama. Susunan mata kuliah dan
                  kurikulum akademik mengikuti ketentuan resmi program studi.
                </p>

              </div>

            </div>


            <div className="space-y-4">

              {curriculum.map((item) => (

                <CurriculumItem
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
          FASILITAS PRAKTIK
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Fasilitas Pembelajaran
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Lingkungan belajar yang mendukung praktik hospitality.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Pembelajaran praktik didukung berbagai fasilitas yang
              membantu mahasiswa mengembangkan keterampilan operasional
              perhotelan.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {facilities.map((facility) => (

              <Facility
                key={facility.number}
                number={facility.number}
                title={facility.title}
                description={facility.description}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROSPEK LULUSAN
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Prospek Lulusan
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Beragam peluang karier di industri hospitality.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Lulusan D3 Perhotelan dapat mengembangkan karier pada
              berbagai bidang operasional maupun manajerial di industri
              hospitality dan pariwisata.
            </p>

          </div>


          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

            {careers.map((career) => (

              <div
                key={career}
                className="rounded-2xl border border-[#E3E0D6] bg-white p-5 text-center font-semibold text-[#17134F] transition hover:border-[#D9C56A] hover:bg-[#FFF9D9]"
              >
                {career}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DOSEN
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* INFORMASI DOSEN */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Dosen
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Didukung tenaga akademik Program Studi Perhotelan.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Program Studi D3 Perhotelan didukung oleh tenaga akademik
                yang memiliki latar belakang dan pengalaman pada bidang
                perhotelan, pariwisata, manajemen, dan hospitality.
              </p>

              <div className="mt-8 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                    👨‍🏫
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-[#17134F]">
                      9 Dosen Program Studi Perhotelan
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#666377]">
                      Daftar nama ditampilkan berdasarkan data akademik dan
                      sumber institusi yang tersedia.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* DAFTAR DOSEN */}

            <div className="space-y-3">

              {lecturers.map((lecturer, index) => (

                <Lecturer
                  key={lecturer}
                  number={String(index + 1).padStart(2, "0")}
                  name={lecturer}
                />

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KONTAK PROGRAM STUDI
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Kontak Program Studi
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Ingin mengetahui lebih lanjut?
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Hubungi Universitas Mandala Bhakti untuk mendapatkan
                informasi lebih lanjut mengenai Program Studi Perhotelan,
                pendaftaran, kegiatan akademik, dan informasi lainnya.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  href="/kontak"
                  className="rounded-full bg-[#21145F] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#302074]"
                >
                  Hubungi Kampus →
                </Link>

                <Link
                  href="/pmb"
                  className="rounded-full border border-[#D9D4C7] px-7 py-3.5 text-sm font-semibold text-[#21145F] transition hover:border-[#C49A00] hover:bg-[#FFF9D9]"
                >
                  Informasi PMB
                </Link>

              </div>

            </div>


            {/* INFORMASI PROGRAM */}

            <div className="rounded-[2rem] border border-[#E3E0D6] bg-white p-8">

              <div className="space-y-6">

                <ContactItem
                  label="Program"
                  value="D3 Perhotelan"
                />

                <ContactItem
                  label="Bidang"
                  value="Perhotelan & Hospitality"
                />

                <ContactItem
                  label="Jenjang"
                  value="Diploma 3"
                />

                <ContactItem
                  label="Informasi Pendaftaran"
                  value="Penerimaan Mahasiswa Baru"
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
                  Program Studi D3 Perhotelan
                </p>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Siap memulai karier di dunia hospitality?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
                  Pelajari Program Studi D3 Perhotelan dan persiapkan
                  keterampilan profesional untuk menghadapi dunia kerja
                  di bidang perhotelan dan hospitality.
                </p>

              </div>

              <Link
                href="/pmb"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Lihat Informasi PMB →
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

function Mission({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">

      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF9D9] text-xs font-bold text-[#C49A00]">
        {number}
      </span>

      <p className="leading-7 text-[#5D596D]">
        {text}
      </p>

    </div>
  );
}


function CurriculumItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E3E0D6] bg-white p-6 transition hover:border-[#D9C56A] hover:shadow-sm">

      <div className="flex gap-5">

        <span className="text-sm font-bold text-[#C49A00]">
          {number}
        </span>

        <div className="min-w-0">

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


function Facility({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-[#E3E0D6] bg-[#F8F7F2] p-7 transition hover:-translate-y-1 hover:border-[#D9C56A] hover:bg-white hover:shadow-xl">

      <span className="text-sm font-bold text-[#C49A00]">
        {number}
      </span>

      <h3 className="mt-6 text-xl font-bold text-[#17134F]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[#666377]">
        {description}
      </p>

    </div>
  );
}


function Lecturer({
  number,
  name,
}: {
  number: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#E3E0D6] bg-[#F8F7F2] p-4 transition hover:border-[#D9C56A] hover:bg-[#FFFDF5]">

      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF9D9] text-xs font-bold text-[#C49A00]">
        {number}
      </span>

      <div className="min-w-0">

        <h3 className="font-bold text-[#17134F]">
          {name}
        </h3>

        <p className="mt-1 text-xs text-[#777487]">
          Perhotelan (D3)
        </p>

      </div>

    </div>
  );
}


function ContactItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-[#E3E0D6] pb-5 last:border-0 last:pb-0">

      <span className="text-sm text-[#777487]">
        {label}
      </span>

      <span className="font-semibold text-[#17134F]">
        {value}
      </span>

    </div>
  );
}