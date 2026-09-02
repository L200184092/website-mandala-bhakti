import Image from "next/image";
import Link from "next/link";
import { university } from "./data/university";

export default function Home() {
  const officialPrograms = university.programs.filter(
    (program) => program.official
  );

  const developmentPrograms = university.programs.filter(
    (program) => !program.official
  );

  return (
    <main className="min-h-screen bg-white pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#FAFAF7]">

        {/* Gold decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F4C400]/15 blur-3xl" />

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* LEFT */}
          <div className="relative z-10">

            {/* BRAND BADGE */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7D27A] bg-[#FFF9D8] px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-[#C99A00]" />

              <span className="text-sm font-semibold text-[#21145F]">
                {university.brandName}
              </span>

            </div>


            {/* HEADING */}
            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight text-[#21145F] md:text-6xl lg:text-7xl">

              Membangun

              <span className="block">
                Generasi
              </span>

              <span className="block text-[#C99A00]">
                Unggul & Inovatif.
              </span>

            </h1>


            {/* DESCRIPTION */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5F5B70]">

              Pendidikan dan pengembangan sumber daya manusia di bidang
              pariwisata, khususnya perhotelan, melalui pembelajaran yang
              memadukan teori, praktik, dan pengalaman industri.

            </p>


            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/pmb"
                className="rounded-full bg-[#21145F] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#21145F]/20 transition hover:bg-[#302074]"
              >
                Daftar Sekarang →
              </Link>


              <Link
                href="/program-studi"
                className="rounded-full border border-[#D8D4C5] bg-white px-7 py-3.5 text-sm font-semibold text-[#21145F] transition hover:border-[#C99A00] hover:bg-[#FFF9D8]"
              >
                Jelajahi Program Studi
              </Link>

            </div>


            {/* STATS */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-[#DDD9CC] pt-8">

              <div>

                <p className="text-3xl font-bold text-[#21145F]">
                  {university.establishedYear}
                </p>

                <p className="mt-1 text-sm text-[#817D8C]">
                  Tahun Berdiri
                </p>

              </div>


              <div>

                <p className="text-3xl font-bold text-[#21145F]">
                  {officialPrograms.length}
                </p>

                <p className="mt-1 text-sm text-[#817D8C]">
                  Program Resmi
                </p>

              </div>


              <div>

                <p className="text-3xl font-bold text-[#21145F]">
                  2035
                </p>

                <p className="mt-1 text-sm text-[#817D8C]">
                  Target Visi
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Gold background glow */}
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-[#F4C400]/20 blur-3xl" />


            <div className="relative overflow-hidden rounded-[2rem] border border-[#E4D99C] shadow-2xl">

              <Image
                src="/images/herocampus.png"
                alt={`${university.brandName} - Kampus`}
                width={1536}
                height={1024}
                priority
                className="h-[520px] w-full object-cover"
              />


              {/* Purple Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#21145F]/90 via-[#21145F]/10 to-transparent" />


              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 z-20 hidden rounded-2xl border border-white/80 bg-white p-5 shadow-xl sm:block">

                <p className="text-xs font-medium uppercase tracking-wider text-[#817D8C]">
                  Berdiri Sejak
                </p>

                <p className="mt-1 text-lg font-bold text-[#21145F]">
                  {university.establishedYear}
                </p>

              </div>


              {/* CAPTION */}
              <div className="absolute bottom-8 right-6 z-10 w-[55%] text-white">

                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#F4C400]">
                  Perhotelan • Pariwisata • Industri
                </p>

                <p className="mt-2 text-xl font-semibold leading-7">
                  Mempersiapkan tenaga profesional untuk dunia pariwisata.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IDENTITY
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C99A00]">
                Tentang Kami
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Pendidikan untuk masa depan yang lebih baik.
              </h2>

            </div>


            {/* RIGHT */}
            <div>

              <p className="text-lg leading-8 text-[#5F5B70]">

                {university.officialInstitutionName} merupakan perguruan
                tinggi di Surakarta yang berfokus pada pendidikan dan
                pengembangan sumber daya manusia di bidang pariwisata,
                khususnya perhotelan.

              </p>


              <p className="mt-5 text-lg leading-8 text-[#5F5B70]">

                Pembelajaran mengintegrasikan teori, praktik, dan pengalaman
                industri untuk mempersiapkan mahasiswa menghadapi dunia kerja.

              </p>


              {/* IDENTITY NOTE */}
              <div className="mt-6 rounded-2xl border border-[#E7D27A] bg-[#FFF9D8] p-5">

                <p className="text-sm font-semibold text-[#B48700]">
                  Catatan identitas
                </p>

                <p className="mt-2 leading-7 text-[#514D5F]">

                  Website ini menggunakan nama{" "}

                  <strong className="text-[#21145F]">
                    {university.brandName}
                  </strong>{" "}

                  sebagai identitas pengembangan website. Secara kelembagaan,
                  institusi saat ini dikenal sebagai{" "}

                  <strong className="text-[#21145F]">
                    {university.officialInstitutionName}
                  </strong>
                  .

                </p>

              </div>


              <Link
                href="/profil"
                className="mt-6 inline-flex font-semibold text-[#21145F] transition hover:text-[#C99A00]"
              >
                Selengkapnya tentang universitas →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOCUS
      ===================================================== */}

      <section className="bg-[#FAFAF7] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C99A00]">
              Fokus Pendidikan
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
              Mengembangkan kompetensi untuk dunia profesional.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5F5B70]">

              Fokus pendidikan Mandala Bhakti berada pada bidang pariwisata
              dan perhotelan dengan pengembangan sumber daya manusia yang
              kompeten dan siap menghadapi kebutuhan industri.

            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {university.focus.map((item, index) => (

              <div
                key={item}
                className="rounded-3xl border border-[#E1DED4] bg-white p-7 transition hover:-translate-y-1 hover:border-[#D6BA45] hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#C99A00]">
                  {String(index + 1).padStart(2, "0")}
                </span>


                <h3 className="mt-6 text-xl font-bold text-[#21145F]">
                  {item}
                </h3>


                <p className="mt-3 leading-7 text-[#666272]">

                  Pengembangan kompetensi melalui pendidikan, praktik,
                  dan pengalaman yang relevan dengan kebutuhan industri.

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ===================================================== */}

      <section className="bg-[#21145F] py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                Visi 2035
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Arah perjalanan pendidikan.
              </h2>

            </div>


            {/* RIGHT */}
            <div>

              <p className="text-2xl font-medium leading-relaxed text-white md:text-3xl">

                “{university.vision}”

              </p>


              <Link
                href="/profil"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#21145F] transition hover:bg-[#FFF9D8]"
              >
                Pelajari Visi & Misi →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAM STUDI
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C99A00]">
                Program Studi
              </p>


              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Pilihan pendidikan untuk masa depan.
              </h2>


              <p className="mt-5 text-lg leading-8 text-[#5F5B70]">

                Program resmi yang tersedia serta program yang sedang
                dikembangkan.

              </p>

            </div>


            <Link
              href="/program-studi"
              className="font-semibold text-[#21145F] transition hover:text-[#C99A00]"
            >
              Lihat semua program →
            </Link>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* =================================================
                PROGRAM RESMI
            ================================================= */}

            {officialPrograms.map((program) => (

              <div
                key={program.name}
                className="rounded-3xl border border-[#E1DED4] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#D6BA45] hover:shadow-xl"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <span className="text-sm font-bold text-[#C99A00]">
                      {program.code}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-[#21145F]">
                      {program.name}
                    </h3>

                  </div>


                  <span className="rounded-full bg-[#FFF9D8] px-3 py-1 text-xs font-semibold text-[#987400]">
                    Program Resmi
                  </span>

                </div>


                <p className="mt-5 leading-7 text-[#666272]">
                  {program.description}
                </p>


                <Link
                  href="/program-studi/perhotelan"
                  className="mt-6 inline-flex font-semibold text-[#21145F] transition hover:text-[#C99A00]"
                >
                  Lihat program →
                </Link>

              </div>

            ))}


            {/* =================================================
                PROGRAM PENGEMBANGAN
            ================================================= */}

            {developmentPrograms.map((program) => (

              <div
                key={program.name}
                className="rounded-3xl border border-[#E6D27A] bg-[#FFFDF2] p-8"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <span className="text-sm font-bold text-[#C99A00]">
                      {program.code}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-[#21145F]">
                      {program.name}
                    </h3>

                  </div>


                  <span className="rounded-full bg-[#FFF0B0] px-3 py-1 text-xs font-semibold text-[#967000]">
                    Dalam Pengembangan
                  </span>

                </div>


                <p className="mt-5 leading-7 text-[#666272]">
                  {program.description}
                </p>


                {/* IMPORTANT INFORMATION */}
                <div className="mt-5 rounded-2xl border border-[#E6D27A] bg-white p-4">

                  <p className="text-sm font-semibold text-[#9B7600]">
                    Informasi penting
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#666272]">

                    Program ini masih dalam tahap pengembangan/pengajuan
                    dan belum menjadi program studi resmi yang dibuka
                    untuk penerimaan mahasiswa.

                  </p>

                </div>


                <Link
                  href="/program-studi/informatika"
                  className="mt-6 inline-flex font-semibold text-[#21145F] transition hover:text-[#C99A00]"
                >
                  Pelajari rencana program →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRY
      ===================================================== */}

      <section className="bg-[#FAFAF7] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C99A00]">
                Dunia Industri
              </p>


              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Belajar dekat dengan dunia profesional.
              </h2>

            </div>


            <div>

              <p className="text-xl leading-9 text-[#464254]">

                Pendidikan di bidang perhotelan memadukan teori, praktik,
                dan pengalaman industri untuk membangun kompetensi yang
                dibutuhkan mahasiswa ketika memasuki dunia kerja.

              </p>


              <p className="mt-5 leading-8 text-[#666272]">

                Pengalaman praktik dan kerja praktik menjadi bagian penting
                dalam proses pembelajaran di{" "}

                {university.officialInstitutionName}.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PMB CTA
      ===================================================== */}

      <section className="bg-[#FAFAF7] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="rounded-[2rem] bg-[#21145F] px-8 py-12 text-white md:px-12 md:py-16">

            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

              <div className="max-w-2xl">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Penerimaan Mahasiswa Baru
                </p>


                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Siap memulai perjalananmu?
                </h2>


                <p className="mt-5 text-lg leading-8 text-[#F1EFF8]">

                  Daftarkan dirimu dan mulai perjalanan pendidikan di bidang
                  perhotelan dan pariwisata.

                </p>

              </div>


              <Link
                href="/pmb"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-[#21145F] transition hover:bg-[#FFF9D8]"
              >
                Mulai Pendaftaran →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}