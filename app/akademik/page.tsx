import Link from "next/link";
import { university } from "../data/university";

export default function AkademikPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#F8F7F2]">

        {/* Decorative gold glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D4A900]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Akademik
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-[#21145F] md:text-6xl lg:text-7xl">
              Pendidikan berbasis{" "}
              <span className="text-[#C49A00]">
                kompetensi dan praktik.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5D596D]">
              {university.officialInstitutionName} berfokus pada pendidikan
              dan pengembangan sumber daya manusia di bidang pariwisata,
              khususnya perhotelan.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Pendekatan Pembelajaran
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Belajar melalui teori, praktik, dan pengalaman industri.
              </h2>

            </div>


            {/* RIGHT */}
            <div className="space-y-6">

              <p className="text-lg leading-8 text-[#5D596D]">
                Pembelajaran di {university.officialInstitutionName} dirancang
                untuk mengembangkan kompetensi mahasiswa agar sesuai dengan
                kebutuhan dunia perhotelan dan pariwisata.
              </p>

              <p className="text-lg leading-8 text-[#5D596D]">
                Proses pendidikan mengintegrasikan pembelajaran teori dengan
                praktik dan pengalaman langsung di lingkungan industri.
              </p>


              {/* FOCUS CARD */}
              <div className="rounded-3xl border border-[#E8D98A] bg-[#FFF9D9] p-7">

                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C49A00]">
                  Fokus Akademik
                </p>

                <p className="mt-3 text-2xl font-bold text-[#21145F]">
                  Kompetensi profesional di bidang perhotelan dan pariwisata.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}
      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Keunggulan Akademik
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
              Pengalaman belajar yang dekat dengan dunia profesional.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {university.academicHighlights.map((item, index) => (

              <div
                key={item}
                className="group rounded-3xl border border-[#E3E0D6] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#C49A00]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-xl font-bold leading-8 text-[#21145F]">
                  {item}
                </h3>

                <div className="mt-5 h-1 w-10 rounded-full bg-[#D4A900] transition-all duration-300 group-hover:w-16" />

                <p className="mt-4 leading-7 text-[#666275]">
                  Pembelajaran diarahkan untuk membangun kompetensi yang
                  relevan dengan kebutuhan dunia profesional.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACADEMIC ACTIVITIES
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Kegiatan Akademik
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Aktivitas pendidikan dan pembelajaran.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5D596D]">
                Informasi akademik mencakup kegiatan pembelajaran dan agenda
                akademik mahasiswa yang diselenggarakan oleh institusi.
              </p>

            </div>


            {/* RIGHT */}
            <div className="space-y-4">

              <AcademicItem
                number="01"
                title="Perkuliahan"
                description="Kegiatan pembelajaran untuk membangun pengetahuan dan kompetensi mahasiswa."
              />

              <AcademicItem
                number="02"
                title="Praktik"
                description="Pembelajaran praktik untuk memperkuat keterampilan yang dibutuhkan dalam bidang perhotelan."
              />

              <AcademicItem
                number="03"
                title="Kerja Praktik"
                description="Pengalaman langsung di lingkungan industri menjadi bagian penting dalam pengembangan kompetensi mahasiswa."
              />

              <AcademicItem
                number="04"
                title="Kegiatan Akademik"
                description="Institusi menyediakan informasi mengenai agenda akademik seperti jadwal ujian dan pengisian KRS."
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRY
      ===================================================== */}
      <section className="bg-[#21145F] py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                Dunia Industri
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Mempersiapkan mahasiswa menghadapi dunia kerja.
              </h2>

            </div>


            {/* RIGHT */}
            <div>

              <p className="text-xl leading-9 text-[#FFFDF3] md:text-2xl">
                Pendidikan dirancang agar mahasiswa tidak hanya memahami
                teori, tetapi juga memiliki pengalaman dan keterampilan yang
                relevan dengan industri perhotelan dan pariwisata.
              </p>

              <p className="mt-6 leading-8 text-[#DCD8EB]">
                Pendekatan pembelajaran yang memadukan teori, praktik, dan
                pengalaman industri menjadi bagian dari keunggulan pendidikan
                di {university.officialInstitutionName}.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAM
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Program Studi
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Jelajahi program pendidikan.
              </h2>

            </div>


            <Link
              href="/program-studi"
              className="font-semibold text-[#21145F] transition hover:text-[#C49A00]"
            >
              Lihat semua program →
            </Link>

          </div>


          <div className="mt-12 grid gap-6">

            {university.programs.map((program) => (

              <div
                key={program.name}
                className={`rounded-3xl border p-8 transition duration-300 ${
                  program.official
                    ? "border-[#E3E0D6] bg-white hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
                    : "border-[#E6D78D] bg-[#FFFDF1]"
                }`}
              >

                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">

                  <div>

                    <span className="text-sm font-bold text-[#C49A00]">
                      {program.code}
                    </span>

                    <h3 className="mt-2 text-3xl font-bold text-[#21145F]">
                      {program.name}
                    </h3>

                  </div>


                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      program.official
                        ? "bg-[#FFF4BF] text-[#8F6C00]"
                        : "bg-[#FFF0B3] text-[#967200]"
                    }`}
                  >
                    {program.official
                      ? "Program Resmi"
                      : "Dalam Pengembangan"}
                  </span>

                </div>


                <p className="mt-5 max-w-3xl leading-7 text-[#666275]">
                  {program.description}
                </p>


                <Link
                  href={
                    program.name === "Informatika"
                      ? "/program-studi/informatika"
                      : "/program-studi/perhotelan"
                  }
                  className="mt-6 inline-flex font-semibold text-[#21145F] transition hover:text-[#C49A00]"
                >
                  Lihat program →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] px-8 py-12 text-center text-white md:px-12 md:py-16">

            {/* Decorative gold glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                Penerimaan Mahasiswa Baru
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                Mulai perjalanan pendidikanmu.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#E9E7F3]">
                Pelajari program studi dan informasi pendaftaran mahasiswa baru.
              </p>


              <Link
                href="/pmb"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#21145F] transition hover:bg-[#FFF9D9]"
              >
                Pendaftaran PMB →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   ACADEMIC ITEM
========================================================= */

function AcademicItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex gap-5 rounded-2xl border border-[#E3E0D6] bg-[#F8F7F2] p-6 transition duration-300 hover:border-[#D9C56A] hover:bg-[#FFFDF1] hover:shadow-md">

      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF4BF] text-sm font-bold text-[#A47D00]">
        {number}
      </span>

      <div>

        <h3 className="text-xl font-bold text-[#21145F]">
          {title}
        </h3>

        <p className="mt-2 leading-7 text-[#666275]">
          {description}
        </p>

      </div>

    </div>
  );
}