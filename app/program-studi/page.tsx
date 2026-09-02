import Link from "next/link";

const programs = [
  {
    degree: "S1",
    name: "Informatika",
    category: "Teknologi & Rekayasa Digital",
    description:
      "Mempelajari teknologi perangkat lunak, sistem informasi, kecerdasan buatan, data, serta pengembangan solusi digital untuk berbagai kebutuhan industri.",
    careers: [
      "Software Developer",
      "Data Analyst",
      "AI Engineer",
      "IT Consultant",
    ],
    official: false,
  },
  {
    degree: "D3",
    name: "Perhotelan",
    category: "Pariwisata & Hospitality",
    description:
      "Mempersiapkan tenaga profesional di bidang hospitality dengan kemampuan manajemen hotel, pelayanan tamu, food & beverage, serta pengelolaan operasional.",
    careers: [
      "Hotel Manager",
      "Front Office",
      "Food & Beverage",
      "Event Management",
    ],
    official: true,
  },
];

export default function ProgramStudiPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#17134F] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F4C400]">
            Akademik
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Program Studi
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
            Temukan program studi yang sesuai dengan minat, potensi, dan
            rencana karier masa depanmu.
          </p>

        </div>
      </section>


      {/* =====================================================
          PROGRAM LIST
      ===================================================== */}

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12 max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Pilihan Program
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Bangun masa depanmu bersama kami.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Pilih bidang yang sesuai dengan passion dan tujuan kariermu.
              Setiap program dirancang untuk membekali mahasiswa dengan
              kompetensi yang relevan dengan kebutuhan dunia kerja.
            </p>

          </div>


          {/* =================================================
              PROGRAM CARDS
          ================================================= */}

          <div className="grid gap-8 lg:grid-cols-2">

            {programs.map((program) => (

              <div
                key={program.name}
                className="group overflow-hidden rounded-[2rem] border border-[#E3E0D6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* =================================================
                    CARD HEADER
                ================================================= */}

                <div className="relative overflow-hidden bg-[#17134F] p-8 text-white md:p-10">

                  {/* Gold decorative glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F4C400]/10 blur-3xl" />

                  <div className="relative flex items-start justify-between">

                    <div>

                      {/* DEGREE */}

                      <span className="inline-flex rounded-full border border-[#F4C400]/30 bg-[#F4C400]/10 px-4 py-2 text-sm font-semibold text-[#F4C400]">
                        {program.degree}
                      </span>


                      {/* NAME */}

                      <h3 className="mt-6 text-4xl font-bold">
                        {program.name}
                      </h3>


                      {/* CATEGORY */}

                      <p className="mt-2 text-[#D9D6E8]">
                        {program.category}
                      </p>

                    </div>


                    {/* ARROW */}

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F4C400]/20 bg-white/5 text-2xl text-[#F4C400] transition group-hover:bg-[#F4C400] group-hover:text-[#17134F]">
                      →
                    </div>

                  </div>

                </div>


                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="p-8 md:p-10">

                  <p className="text-base leading-7 text-[#5D596D]">
                    {program.description}
                  </p>


                  {/* =================================================
                      CAREERS
                  ================================================= */}

                  <div className="mt-8">

                    <p className="text-sm font-bold uppercase tracking-wider text-[#17134F]">
                      Prospek Karier
                    </p>


                    <div className="mt-4 grid grid-cols-2 gap-3">

                      {program.careers.map((career) => (

                        <div
                          key={career}
                          className="rounded-xl border border-[#E8E5DA] bg-[#F8F7F2] px-4 py-3 text-sm font-medium text-[#4D4A5E] transition group-hover:border-[#E6D78D]"
                        >
                          {career}
                        </div>

                      ))}

                    </div>

                  </div>


                  {/* =================================================
                      STATUS
                  ================================================= */}

                  <div className="mt-8 flex items-center justify-between gap-4">

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        program.official
                          ? "bg-[#FFF9D9] text-[#967200]"
                          : "bg-[#F8F7F2] text-[#777487]"
                      }`}
                    >
                      {program.official
                        ? "Program Resmi"
                        : "Dalam Pengembangan"}
                    </span>


                    <Link
                      href={`/program-studi/${program.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center font-semibold text-[#21145F] transition hover:text-[#C49A00]"
                    >
                      Lihat Detail
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="rounded-[2rem] border border-[#E6D78D] bg-[#FFFDF1] p-8 md:p-12">

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                  Informasi Program
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#17134F] md:text-4xl">
                  Pilih program sesuai tujuanmu.
                </h2>

              </div>


              <div>

                <p className="leading-8 text-[#5D596D]">
                  Setiap program memiliki karakteristik dan fokus kompetensi
                  yang berbeda. Pelajari detail program sebelum menentukan
                  pilihan pendidikan yang sesuai dengan minat dan rencana
                  kariermu.
                </p>

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

            {/* Decorative gold glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

              <div className="max-w-2xl">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Penerimaan Mahasiswa Baru
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  Sudah menemukan program studimu?
                </h2>

                <p className="mt-4 leading-7 text-[#E8E7F2]">
                  Jangan tunda langkahmu. Mulai perjalanan pendidikanmu
                  bersama Universitas Mandala Bhakti.
                </p>

              </div>


              <Link
                href="/pmb"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 font-semibold text-[#17134F] shadow-lg transition hover:bg-[#FFF9D9]"
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