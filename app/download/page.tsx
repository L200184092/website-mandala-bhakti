import Link from "next/link";

const documents = [
  {
    number: "01",
    title: "Brosur Universitas",
    description:
      "Informasi umum mengenai Universitas Mandala Bhakti, program pendidikan, dan lingkungan akademik.",
    category: "Informasi Universitas",
    file: "",
  },
  {
    number: "02",
    title: "Brosur Program Studi",
    description:
      "Informasi mengenai program studi yang tersedia di Universitas Mandala Bhakti.",
    category: "Program Studi",
    file: "",
  },
  {
    number: "03",
    title: "Panduan Penerimaan Mahasiswa Baru",
    description:
      "Panduan dan informasi mengenai proses Penerimaan Mahasiswa Baru.",
    category: "PMB",
    file: "",
  },
  {
    number: "04",
    title: "Persyaratan Pendaftaran",
    description:
      "Informasi persyaratan yang perlu dipersiapkan calon mahasiswa.",
    category: "PMB",
    file: "",
  },
  {
    number: "05",
    title: "Kalender Akademik",
    description:
      "Informasi mengenai agenda dan kegiatan akademik universitas.",
    category: "Akademik",
    file: "",
  },
  {
    number: "06",
    title: "Dokumen Akademik",
    description:
      "Dokumen dan informasi akademik resmi lainnya yang tersedia untuk diunduh.",
    category: "Akademik",
    file: "",
  },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-20">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#17134F] text-white">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F4C400]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C49A00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span className="rounded-full border border-[#F4C400]/30 bg-[#F4C400]/10 px-4 py-2 text-sm font-semibold text-[#F4C400]">
                Dokumen
              </span>

              <span className="text-sm text-[#D9D6E8]">
                Universitas Mandala Bhakti
              </span>

            </div>

            <h1 className="mt-7 text-5xl font-bold tracking-tight md:text-6xl">
              Download
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Akses berbagai dokumen dan informasi resmi Universitas
              Mandala Bhakti yang tersedia untuk diunduh.
            </p>

          </div>

        </div>

      </section>


      {/* DOCUMENTS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Pusat Dokumen
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Informasi yang dapat diunduh.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Dokumen akan diperbarui secara berkala sesuai dengan informasi
              resmi yang diterbitkan oleh Universitas Mandala Bhakti.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {documents.map((document) => (

              <article
                key={document.number}
                className="flex flex-col rounded-3xl border border-[#E3E0D6] bg-[#F8F7F2] p-7 transition hover:-translate-y-1 hover:border-[#D9C56A] hover:bg-white hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-[#C49A00]">
                    {document.number}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#777487]">
                    {document.category}
                  </span>

                </div>


                <h3 className="mt-7 text-xl font-bold text-[#17134F]">
                  {document.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#666377]">
                  {document.description}
                </p>


                {document.file ? (
                  <a
                    href={document.file}
                    download
                    className="mt-7 inline-flex items-center justify-center rounded-full bg-[#21145F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#302074]"
                  >
                    Download Dokumen →
                  </a>
                ) : (
                  <div className="mt-7 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] px-4 py-3 text-center text-sm font-semibold text-[#777487]">
                    Dokumen belum tersedia
                  </div>
                )}

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* INFO */}
      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] px-8 py-12 text-white md:px-12 md:py-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

            <div className="relative max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                Informasi
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Dokumen resmi akan diperbarui secara berkala.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#E8E7F2]">
                Pastikan menggunakan dokumen yang tersedia melalui website
                resmi Universitas Mandala Bhakti untuk mendapatkan informasi
                yang paling akurat.
              </p>

              <Link
                href="/kontak"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Hubungi Kampus →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}