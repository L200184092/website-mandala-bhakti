import Link from "next/link";

const PMB_URL =
  "https://spmb.mandalabhakti.ac.id/";

const programs = [
  {
    number: "01",
    title: "S1 Informatika",
    status: "Segera Hadir",
    statusType: "soon",
    description:
      "Program pendidikan di bidang informatika, teknologi digital, pengembangan perangkat lunak, dan rekayasa solusi berbasis teknologi.",
    href: "/program-studi",
  },
  {
    number: "02",
    title: "D3 Perhotelan",
    status: "Tersedia",
    statusType: "available",
    description:
      "Program pendidikan vokasi yang berfokus pada perhotelan, hospitality, pelayanan, dan pengelolaan operasional pariwisata.",
    href: "/program-studi",
  },
];

const requirements = [
  {
    number: "01",
    title: "Kartu Identitas",
    description:
      "Siapkan kartu identitas yang masih berlaku atau dokumen identitas resmi lainnya.",
  },
  {
    number: "02",
    title: "Ijazah / Surat Keterangan Lulus",
    description:
      "Dokumen pendidikan terakhir sebagai bukti kelulusan dari jenjang pendidikan sebelumnya.",
  },
  {
    number: "03",
    title: "Kartu Keluarga",
    description:
      "Siapkan Kartu Keluarga sesuai dengan data identitas calon mahasiswa.",
  },
  {
    number: "04",
    title: "Pas Foto",
    description:
      "Pas foto formal dengan kualitas gambar yang jelas dan sesuai ketentuan pendaftaran.",
  },
];

const steps = [
  {
    number: "01",
    title: "Kenali Program Studi",
    description:
      "Pelajari program studi yang tersedia dan pilih bidang pendidikan yang sesuai dengan minatmu.",
  },
  {
    number: "02",
    title: "Siapkan Persyaratan",
    description:
      "Pastikan dokumen dan informasi yang diperlukan untuk proses pendaftaran sudah tersedia.",
  },
  {
    number: "03",
    title: "Daftar melalui Sistem PMB",
    description:
      "Gunakan sistem Penerimaan Mahasiswa Baru resmi untuk mengisi data dan mengikuti proses pendaftaran.",
  },
  {
    number: "04",
    title: "Ikuti Proses Verifikasi",
    description:
      "Ikuti proses verifikasi dan tahapan selanjutnya sesuai informasi dari panitia PMB.",
  },
];

const faq = [
  {
    question: "Program studi apa saja yang tersedia?",
    answer:
      "Saat ini program D3 Perhotelan tersedia untuk proses penerimaan. S1 Informatika ditampilkan sebagai program yang sedang dipersiapkan dan belum dibuka untuk pendaftaran. Informasi dan status program dapat mengikuti perkembangan resmi institusi.",
  },
  {
    question: "Di mana saya melakukan pendaftaran?",
    answer:
      "Pendaftaran mahasiswa baru dilakukan melalui sistem PMB resmi Mandala Bhakti. Sistem tersebut disediakan secara terpisah dari website utama institusi.",
  },
  {
    question: "Dokumen apa yang perlu disiapkan?",
    answer:
      "Dokumen yang perlu dipersiapkan antara lain kartu identitas, ijazah atau surat keterangan lulus, kartu keluarga, dan pas foto. Persyaratan dapat mengikuti ketentuan resmi PMB yang berlaku.",
  },
  {
    question: "Apakah S1 Informatika sudah bisa didaftarkan?",
    answer:
      "S1 Informatika saat ini belum dibuka untuk pendaftaran. Program tersebut ditampilkan sebagai informasi program yang sedang dipersiapkan. Informasi mengenai pembukaan pendaftaran akan mengikuti pengumuman resmi institusi.",
  },
  {
    question: "Bagaimana jika saya membutuhkan informasi lebih lanjut?",
    answer:
      "Anda dapat menghubungi institusi melalui telepon atau email resmi yang tersedia pada halaman Kontak.",
  },
];

export default function PMBPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#17134F] text-white">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F4C400]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#C49A00]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F4C400]">
              Penerimaan Mahasiswa Baru
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Mulai perjalananmu.
              <span className="block text-[#F4C400]">
                Bersama Mandala Bhakti.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Temukan informasi mengenai program studi,
              persyaratan, tahapan pendaftaran, dan akses
              menuju sistem Penerimaan Mahasiswa Baru resmi.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href={PMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition duration-300 hover:bg-[#FFF9D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17134F]"
              >
                Daftar Sekarang →
              </a>

              <Link
                href="/program-studi"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#F4C400] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17134F]"
              >
                Lihat Program Studi
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Tentang PMB
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Satu langkah menuju masa depanmu.
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-8 text-[#55536A]">

              <p>
                Penerimaan Mahasiswa Baru merupakan tahap awal
                bagi calon mahasiswa untuk bergabung dan mengikuti
                proses pendidikan di Akademi Pariwisata Mandala
                Bhakti Surakarta.
              </p>

              <p>
                Sebelum melakukan pendaftaran, calon mahasiswa
                disarankan mempelajari program studi yang tersedia
                dan menyiapkan dokumen persyaratan yang diperlukan.
              </p>

              <p>
                Pendaftaran mahasiswa baru dilakukan melalui
                sistem PMB resmi Mandala Bhakti yang disediakan
                secara terpisah dari website utama institusi.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAM STUDI
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Program Studi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Pilih bidang yang ingin kamu tekuni.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Kenali pilihan program studi dan tentukan bidang
              pendidikan yang sesuai dengan minat serta rencana
              kariermu.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {programs.map((program) => (

              <Link
                key={program.number}
                href={program.href}
                className="group rounded-[2rem] border border-[#E3E1EA] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21145F] focus-visible:ring-offset-2"
              >

                <div className="flex items-start justify-between gap-6">

                  <span className="text-sm font-bold text-[#C49A00]">
                    {program.number}
                  </span>

                  <span
                    className={
                      program.statusType === "available"
                        ? "rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700"
                        : "rounded-full bg-[#FFF9D9] px-3 py-1.5 text-xs font-semibold text-[#9A7700]"
                    }
                  >
                    {program.status}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#17134F]">
                  {program.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-[#666377]">
                  {program.description}
                </p>

                <span className="mt-7 inline-flex items-center text-sm font-semibold text-[#21145F] transition duration-300 group-hover:translate-x-1">
                  Lihat Program Studi →
                </span>

              </Link>

            ))}

          </div>


          <div className="mt-8 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] p-5">

            <p className="text-sm font-semibold text-[#17134F]">
              Informasi Program
            </p>

            <p className="mt-2 text-sm leading-6 text-[#666377]">
              S1 Informatika saat ini masih dalam tahap persiapan
              dan belum dibuka untuk pendaftaran. Informasi mengenai
              pembukaan program dan penerimaan mahasiswa akan
              disampaikan melalui kanal resmi Mandala Bhakti.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          REQUIREMENTS
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Persyaratan
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Siapkan dokumenmu.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#55536A]">
                Sebelum masuk ke sistem PMB, pastikan dokumen
                dan data yang dibutuhkan sudah tersedia.
              </p>

              <div className="mt-8 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] p-5">

                <p className="text-sm font-semibold text-[#17134F]">
                  Catatan
                </p>

                <p className="mt-2 text-sm leading-6 text-[#666377]">
                  Persyaratan dan ketentuan pendaftaran dapat
                  berubah mengikuti kebijakan penerimaan mahasiswa
                  baru yang berlaku. Gunakan informasi resmi pada
                  sistem PMB sebagai acuan utama.
                </p>

              </div>

            </div>


            <div className="space-y-4">

              {requirements.map((requirement) => (

                <div
                  key={requirement.number}
                  className="flex gap-5 rounded-2xl border border-[#E3E1EA] bg-[#F8F7F2] p-6 transition duration-300 hover:border-[#D9C56A] hover:bg-[#FFFDF5]"
                >

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0B3] text-sm font-bold text-[#9A7700]">
                    {requirement.number}
                  </span>

                  <div>

                    <h3 className="font-bold text-[#17134F]">
                      {requirement.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#666377]">
                      {requirement.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STEPS
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Alur Pendaftaran
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Pendaftaran dibuat sederhana.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Ikuti tahapan berikut untuk mempersiapkan proses
              penerimaan mahasiswa baru.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (

              <div
                key={step.number}
                className="rounded-3xl border border-[#E3E1EA] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#C49A00]">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#17134F]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[#666377]">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          REGISTRATION CTA
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] px-8 py-12 text-white md:px-12 md:py-16">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F4C400]/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#C49A00]/10 blur-3xl"
            />

            <div className="relative text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                Pendaftaran Online
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Siap memulai pendaftaran?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
                Lanjutkan proses pendaftaran melalui sistem
                Penerimaan Mahasiswa Baru resmi Mandala Bhakti.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">

                <a
                  href={PMB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#17134F] transition duration-300 hover:bg-[#FFF9D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21145F]"
                >
                  Buka Sistem PMB →
                </a>

                <Link
                  href="/kontak"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#F4C400] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#21145F]"
                >
                  Butuh Informasi?
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20 sm:py-24">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Pertanyaan Umum
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Yang perlu kamu ketahui.
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {faq.map((item) => (

              <details
                key={item.question}
                className="group rounded-2xl border border-[#E3E1EA] bg-white p-6 transition hover:border-[#D9C56A]"
              >

                <summary className="cursor-pointer list-none pr-8 font-bold text-[#17134F] focus-visible:outline-none">

                  <span className="flex items-center justify-between gap-5">

                    <span>
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl text-[#C49A00] transition duration-300 group-open:rotate-45"
                    >
                      +
                    </span>

                  </span>

                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-[#666377]">
                  {item.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#17134F] py-20 text-white sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
              Akademi Pariwisata Mandala Bhakti
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Masa depanmu dimulai hari ini.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Kenali program studi, siapkan persyaratan, dan
              lanjutkan proses pendaftaran melalui sistem PMB resmi.
            </p>

            <div className="mt-9">

              <a
                href={PMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[#17134F] transition duration-300 hover:bg-[#FFF9D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17134F]"
              >
                Daftar Sekarang →
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}