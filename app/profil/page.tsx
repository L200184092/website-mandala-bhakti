import Link from "next/link";
import { university } from "../data/university";

export default function ProfilPage() {
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
              Profil Universitas
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-[#21145F] md:text-6xl lg:text-7xl">
              Mengenal{" "}
              <span className="text-[#C49A00]">
                {university.brandName}.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5D596D]">
              Informasi mengenai identitas, arah pengembangan, visi, misi,
              tujuan, dan fokus pendidikan {university.brandName}.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          IDENTITY
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Identitas
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Tentang institusi.
              </h2>

            </div>


            {/* RIGHT */}
            <div className="space-y-6">

              <p className="text-lg leading-8 text-[#5D596D]">

                <strong className="font-semibold text-[#21145F]">
                  {university.brandName}
                </strong>{" "}
                merupakan identitas pengembangan website institusi dengan arah
                pengembangan pendidikan, penelitian, pengabdian kepada
                masyarakat, dan sumber daya manusia.

              </p>


              {/* INSTITUTION IDENTITY CARD */}
              <div className="rounded-3xl border border-[#E8D98A] bg-[#FFF9D9] p-7">

                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C49A00]">
                  Nama kelembagaan saat ini
                </p>

                <p className="mt-3 text-2xl font-bold text-[#21145F]">
                  {university.officialInstitutionName}
                </p>

                <p className="mt-4 leading-7 text-[#5D596D]">
                  {university.officialIdentityNote}
                </p>

              </div>


              {/* INFO CARDS */}
              <div className="grid gap-4 sm:grid-cols-3">

                <InfoCard
                  label="Lokasi"
                  value={`${university.city}, ${university.province}`}
                />

                <InfoCard
                  label="Berdiri"
                  value={String(university.establishedYear)}
                />

                <InfoCard
                  label="Nama Singkat"
                  value={university.shortName}
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOCUS
      ===================================================== */}
      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Fokus Pendidikan
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
              Bidang yang menjadi fokus pengembangan.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5D596D]">
              Fokus pendidikan disusun berdasarkan informasi institusi yang
              tersedia dalam data universitas.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {university.focus.map((item, index) => (

              <div
                key={item}
                className="group rounded-3xl border border-[#E3E0D6] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#C49A00]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-[#21145F]">
                  {item}
                </h3>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#D4A900] transition-all duration-300 group-hover:w-16" />

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

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                Visi
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Arah perjalanan institusi.
              </h2>

            </div>


            {/* RIGHT */}
            <div>

              <div className="border-l-2 border-[#D4A900] pl-6">

                <p className="text-2xl font-medium leading-relaxed text-[#FFFDF3] md:text-3xl">
                  “{university.vision}”
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Misi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
              Langkah untuk mewujudkan visi.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {university.missions.map((mission, index) => (

              <div
                key={mission}
                className="group rounded-3xl border border-[#E3E0D6] bg-[#F8F7F2] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-lg"
              >

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4BF] text-sm font-bold text-[#A47D00]">
                  {index + 1}
                </span>

                <p className="mt-6 text-lg leading-8 text-[#4F4B60]">
                  {mission}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GOALS
      ===================================================== */}
      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Tujuan
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Hasil yang ingin diwujudkan.
              </h2>

            </div>


            {/* RIGHT */}
            <div className="space-y-4">

              {university.goals.map((goal, index) => (

                <div
                  key={goal}
                  className="group flex gap-5 rounded-2xl border border-[#E3E0D6] bg-white p-6 transition duration-300 hover:border-[#D9C56A] hover:shadow-md"
                >

                  <span className="shrink-0 text-sm font-bold text-[#C49A00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-[#4F4B60]">
                    {goal}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Program Studi
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#21145F] md:text-5xl">
                Program pendidikan yang tersedia dan dikembangkan.
              </h2>

            </div>


            <Link
              href="/program-studi"
              className="font-semibold text-[#21145F] transition hover:text-[#C49A00]"
            >
              Lihat program studi →
            </Link>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {university.programs.map((program) => (

              <div
                key={program.name}
                className={`rounded-3xl border p-8 transition duration-300 ${
                  program.official
                    ? "border-[#E3E0D6] bg-white shadow-sm hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
                    : "border-[#E6D78D] bg-[#FFFDF1]"
                }`}
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <span className="text-sm font-bold text-[#C49A00]">
                      {program.code}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-[#21145F]">
                      {program.name}
                    </h3>

                  </div>


                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
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


                <p className="mt-5 leading-7 text-[#666275]">
                  {program.description}
                </p>


                {!program.official && (
                  <div className="mt-5 rounded-2xl border border-[#E6D78D] bg-white p-4">

                    <p className="text-sm font-semibold text-[#9A7700]">
                      Informasi penting
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#666275]">
                      Program ini masih dalam tahap pengembangan/pengajuan
                      dan belum menjadi program studi resmi yang dibuka
                      untuk penerimaan mahasiswa.
                    </p>

                  </div>
                )}

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

            {/* Gold decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                Universitas Mandala Bhakti
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                Membangun pendidikan yang relevan untuk masa depan.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#E9E7F3]">
                Pelajari program pendidikan dan informasi penerimaan mahasiswa
                baru yang tersedia.
              </p>


              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <Link
                  href="/program-studi"
                  className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#21145F] transition hover:bg-[#FFF9D9]"
                >
                  Lihat Program Studi →
                </Link>

                <Link
                  href="/pmb"
                  className="rounded-full border border-[#D4A900] px-7 py-3.5 font-semibold text-white transition hover:bg-[#2B2170]"
                >
                  Pendaftaran PMB →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E3E0D6] bg-[#F8F7F2] p-5 transition duration-300 hover:border-[#D9C56A] hover:bg-[#FFFDF1]">

      <p className="text-xs font-semibold uppercase tracking-wider text-[#9A967F]">
        {label}
      </p>

      <p className="mt-2 font-bold text-[#21145F]">
        {value}
      </p>

    </div>
  );
}