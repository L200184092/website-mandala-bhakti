import Link from "next/link";

const advantages = [
  {
    number: "01",
    title: "Pembelajaran Relevan",
    description:
      "Materi pembelajaran dipersiapkan mengikuti perkembangan teknologi dan kebutuhan industri digital.",
  },
  {
    number: "02",
    title: "Project-Based Learning",
    description:
      "Pembelajaran berbasis proyek dipersiapkan agar mahasiswa terbiasa menyelesaikan permasalahan secara sistematis dan aplikatif.",
  },
  {
    number: "03",
    title: "Teknologi Modern",
    description:
      "Mencakup bidang seperti cloud computing, artificial intelligence, data, dan software engineering.",
  },
  {
    number: "04",
    title: "Pengembangan Karier",
    description:
      "Mempersiapkan kompetensi teknis dan soft skill yang relevan dengan kebutuhan dunia profesional.",
  },
];

const careers = [
  "Software Engineer",
  "Web Developer",
  "Mobile Developer",
  "Data Analyst",
  "AI Engineer",
  "System Analyst",
  "IT Consultant",
  "Cybersecurity",
];

const learningAreas = [
  {
    number: "01",
    title: "Dasar Pemrograman",
    description:
      "Algoritma, struktur data, logika pemrograman, dan dasar pengembangan perangkat lunak.",
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Analisis kebutuhan, perancangan sistem, pengembangan, pengujian, dan pemeliharaan perangkat lunak.",
  },
  {
    number: "03",
    title: "Data & Artificial Intelligence",
    description:
      "Pengolahan data, machine learning, analisis data, dan penerapan kecerdasan buatan.",
  },
  {
    number: "04",
    title: "Web & Mobile Development",
    description:
      "Pengembangan aplikasi web dan mobile dengan pendekatan dan teknologi modern.",
  },
  {
    number: "05",
    title: "Cloud & Cybersecurity",
    description:
      "Pemanfaatan infrastruktur cloud, keamanan aplikasi, dan perlindungan data.",
  },
];

const missions = [
  "Menyelenggarakan pendidikan Informatika yang berkualitas dan relevan.",
  "Mengembangkan penelitian dan inovasi di bidang teknologi digital.",
  "Mendorong penerapan teknologi untuk memberikan solusi bagi masyarakat.",
  "Membangun kolaborasi dengan industri dan institusi pendidikan.",
];

export default function InformatikaPage() {
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
                S1
              </span>

              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#D9D6E8]">
                Dalam Proses Pengembangan
              </span>

              <span className="text-sm text-[#D9D6E8]">
                Teknologi & Rekayasa Digital
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Informatika
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Mempersiapkan generasi digital yang mampu merancang,
              mengembangkan, dan menerapkan teknologi untuk menyelesaikan
              berbagai tantangan di dunia nyata.
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
                Belajar teknologi untuk menciptakan solusi.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-[#55536A]">
              <p>
                Program Studi Informatika dipersiapkan untuk membekali
                mahasiswa dengan pemahaman fundamental ilmu komputer sekaligus
                kemampuan praktis dalam pengembangan teknologi digital.
              </p>

              <p>
                Bidang pembelajaran mencakup analisis masalah, perancangan
                sistem, pengembangan perangkat lunak, pengolahan data, hingga
                penerapan kecerdasan buatan.
              </p>

              <p>
                Pendekatan pembelajaran dirancang untuk menggabungkan teori,
                praktik, kolaborasi, dan proyek sehingga mahasiswa nantinya
                memiliki pengalaman yang relevan dengan perkembangan teknologi
                dan kebutuhan industri.
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
                  Menjadi program studi Informatika yang unggul dalam
                  pengembangan teknologi dan inovasi digital yang memberikan
                  manfaat bagi masyarakat.
                </h2>
              </div>
            </div>

            {/* MISI */}

            <div className="rounded-[2rem] border border-[#E3E0D6] bg-white p-9 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Misi
              </p>

              <div className="mt-7 space-y-5">
                {missions.map((mission, index) => (
                  <Mission
                    key={mission}
                    number={String(index + 1).padStart(2, "0")}
                    text={mission}
                  />
                ))}
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
              Dipersiapkan untuk menghadapi masa depan digital.
            </h2>
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
                Kompetensi yang dipersiapkan untuk dunia industri.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Gambaran bidang pembelajaran berikut menunjukkan kompetensi
                yang dipersiapkan dalam pengembangan Program Studi Informatika.
              </p>

              {/* CATATAN AKADEMIK */}

              <div className="mt-6 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                    📚
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#17134F]">
                      Catatan Akademik
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#666377]">
                      Susunan kurikulum dan mata kuliah final akan ditetapkan
                      sesuai ketentuan akademik setelah Program Studi
                      Informatika ditetapkan secara resmi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {learningAreas.map((item) => (
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
          PILIHAN KARIER
      ===================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Pilihan Karier
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Pilihan karier di bidang Informatika.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Bidang Informatika memiliki cakupan karier yang luas di berbagai
              sektor teknologi dan transformasi digital.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {careers.map((career) => (
              <div
                key={career}
                className="rounded-2xl border border-[#E3E0D6] bg-[#F8F7F2] p-5 text-center font-semibold text-[#17134F] transition hover:border-[#D9C56A] hover:bg-[#FFF9D9]"
              >
                {career}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-[#777487]">
            * Bidang karier di atas merupakan gambaran peluang profesi yang
            relevan dengan kompetensi Informatika dan bukan merupakan daftar
            penempatan kerja atau jaminan pekerjaan bagi lulusan.
          </p>
        </div>
      </section>

      {/* =====================================================
          DOSEN
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* INFORMASI DOSEN */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Dosen
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Tenaga akademik Program Studi Informatika.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Program Studi Informatika Universitas Mandala Bhakti saat ini
                masih dalam tahap pengembangan. Informasi mengenai dosen dan
                tenaga pengajar akan ditampilkan setelah struktur akademik
                program studi ditetapkan secara resmi.
              </p>

              <div className="mt-8 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                    👨‍🏫
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#17134F]">
                      Data dosen belum tersedia
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#666377]">
                      Daftar dosen akan diperbarui setelah data resmi Program
                      Studi Informatika tersedia dan telah dikonfirmasi oleh
                      institusi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STATUS AKADEMIK */}

            <div className="flex min-h-64 items-center justify-center rounded-[2rem] border border-[#E3E0D6] bg-white p-8">
              <div className="max-w-sm text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF9D9] text-2xl">
                  📚
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#17134F]">
                  Informasi akademik sedang disiapkan
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#777487]">
                  Informasi tenaga pengajar akan ditampilkan pada halaman ini
                  setelah data resmi Program Studi Informatika tersedia dan
                  siap dipublikasikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KONTAK PROGRAM STUDI
      ===================================================== */}

      <section className="bg-white py-20">
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
                Untuk informasi mengenai Program Studi Informatika,
                perkembangan akademik, dan penerimaan mahasiswa baru, silakan
                menghubungi Universitas Mandala Bhakti melalui halaman kontak
                resmi.
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

            <div className="rounded-[2rem] border border-[#E3E0D6] bg-[#F8F7F2] p-8">
              <div className="space-y-6">
                <ContactItem
                  label="Program"
                  value="S1 Informatika"
                />

                <ContactItem
                  label="Status"
                  value="Dalam proses pengembangan"
                />

                <ContactItem
                  label="Bidang"
                  value="Teknologi & Rekayasa Digital"
                />

                <ContactItem
                  label="Informasi"
                  value="Melalui Universitas Mandala Bhakti"
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
                  Program Studi S1 Informatika
                </p>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Tertarik dengan Program Studi Informatika?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
                  Pelajari informasi mengenai Program Studi Informatika dan
                  perkembangan penerimaan mahasiswa baru melalui Universitas
                  Mandala Bhakti.
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

      <p className="leading-7 text-[#5D596D]">{text}</p>
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

        <div>
          <h3 className="font-bold text-[#17134F]">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-[#666377]">
            {description}
          </p>
        </div>
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
      <span className="text-sm text-[#777487]">{label}</span>

      <span className="font-semibold text-[#17134F]">{value}</span>
    </div>
  );
}