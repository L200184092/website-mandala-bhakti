import Link from "next/link";

const researchAreas = [
  {
    number: "01",
    title: "Teknologi & Informatika",
    description:
      "Pengembangan teknologi digital, perangkat lunak, data, kecerdasan buatan, dan solusi teknologi yang relevan dengan kebutuhan masyarakat.",
  },
  {
    number: "02",
    title: "Pariwisata & Hospitality",
    description:
      "Kajian dan pengembangan bidang pariwisata, perhotelan, pelayanan, destinasi, serta inovasi dalam industri hospitality.",
  },
  {
    number: "03",
    title: "Pendidikan & Sumber Daya Manusia",
    description:
      "Penelitian yang mendukung peningkatan kualitas pendidikan, kompetensi, pembelajaran, dan pengembangan sumber daya manusia.",
  },
  {
    number: "04",
    title: "Inovasi & Kewirausahaan",
    description:
      "Pengembangan inovasi, kewirausahaan, dan solusi yang dapat memberikan nilai tambah bagi masyarakat dan dunia usaha.",
  },
];

const researchActivities = [
  {
    number: "01",
    title: "Penelitian Dosen",
    description:
      "Kegiatan penelitian sebagai bagian dari pengembangan ilmu pengetahuan, teknologi, dan keahlian akademik.",
  },
  {
    number: "02",
    title: "Penelitian Kolaboratif",
    description:
      "Mendorong kerja sama penelitian dengan perguruan tinggi, industri, pemerintah, dan berbagai pihak terkait.",
  },
  {
    number: "03",
    title: "Publikasi Ilmiah",
    description:
      "Mendorong penyebarluasan hasil penelitian melalui publikasi ilmiah dan berbagai bentuk luaran akademik.",
  },
  {
    number: "04",
    title: "Pengembangan Inovasi",
    description:
      "Mengembangkan hasil penelitian menjadi gagasan, metode, teknologi, maupun solusi yang dapat diterapkan.",
  },
];

const communityActivities = [
  {
    number: "01",
    title: "Pemberdayaan Masyarakat",
    description:
      "Mendorong peningkatan kemampuan dan kemandirian masyarakat melalui kegiatan yang sesuai dengan kebutuhan lokal.",
  },
  {
    number: "02",
    title: "Pelatihan & Pendampingan",
    description:
      "Memberikan pelatihan dan pendampingan berdasarkan kompetensi akademik dan keahlian sivitas akademika.",
  },
  {
    number: "03",
    title: "Penerapan Teknologi",
    description:
      "Menerapkan pengetahuan dan teknologi untuk membantu menyelesaikan permasalahan yang dihadapi masyarakat.",
  },
  {
    number: "04",
    title: "Kolaborasi Sosial",
    description:
      "Membangun kerja sama dengan masyarakat dan berbagai mitra untuk menghasilkan kegiatan yang berkelanjutan.",
  },
];

const outputs = [
  "Publikasi ilmiah",
  "Prosiding konferensi",
  "Buku dan bahan ajar",
  "Teknologi tepat guna",
  "Model atau metode",
  "Program pemberdayaan",
  "Produk inovasi",
  "Luaran pengabdian",
];

export default function PenelitianPengabdianPage() {
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
              Penelitian & Pengabdian
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Ilmu yang berkembang,
              <br />
              manfaat yang nyata.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Universitas Mandala Bhakti mendorong pengembangan ilmu
              pengetahuan, teknologi, dan inovasi melalui kegiatan penelitian
              serta pengabdian kepada masyarakat.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#penelitian"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Lihat Penelitian →
              </a>

              <a
                href="#pengabdian"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#F4C400]/50 hover:bg-white/10"
              >
                Pengabdian Masyarakat
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TENTANG
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Tentang Penelitian & Pengabdian
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Mengembangkan pengetahuan untuk memberikan kontribusi.
              </h2>

            </div>

            <div className="space-y-5 text-lg leading-8 text-[#55536A]">

              <p>
                Penelitian merupakan bagian penting dalam pengembangan
                perguruan tinggi. Melalui penelitian, sivitas akademika dapat
                mengembangkan pengetahuan dan menghasilkan gagasan yang
                relevan dengan perkembangan masyarakat.
              </p>

              <p>
                Universitas Mandala Bhakti mendorong kegiatan penelitian yang
                sesuai dengan bidang keilmuan dan memiliki potensi untuk
                memberikan kontribusi terhadap dunia pendidikan, industri,
                teknologi, dan masyarakat.
              </p>

              <p>
                Hasil penelitian selanjutnya dapat dikembangkan melalui
                publikasi, inovasi, kolaborasi, maupun penerapan langsung
                melalui kegiatan pengabdian kepada masyarakat.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BIDANG PENELITIAN
      ===================================================== */}

      <section
        id="penelitian"
        className="bg-[#F8F7F2] py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Bidang Penelitian
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Fokus pada ilmu dan kebutuhan yang terus berkembang.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Kegiatan penelitian dapat dikembangkan sesuai dengan bidang
              keilmuan, kompetensi sivitas akademika, serta kebutuhan
              masyarakat dan dunia industri.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {researchAreas.map((item) => (

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
          KEGIATAN PENELITIAN
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Kegiatan Penelitian
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Dari riset menuju pengetahuan dan inovasi.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Penelitian dikembangkan melalui proses akademik yang
                sistematis dan dapat menghasilkan berbagai bentuk luaran
                yang bermanfaat bagi pengembangan ilmu maupun masyarakat.
              </p>

            </div>


            <div className="space-y-4">

              {researchActivities.map((item) => (

                <ResearchItem
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
          PENGABDIAN
      ===================================================== */}

      <section
        id="pengabdian"
        className="bg-[#F8F7F2] py-20"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
              Pengabdian kepada Masyarakat
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
              Menghubungkan ilmu dengan kebutuhan masyarakat.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#55536A]">
              Pengabdian kepada masyarakat menjadi sarana penerapan ilmu,
              pengetahuan, dan keterampilan untuk membantu memberikan solusi
              terhadap berbagai kebutuhan masyarakat.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {communityActivities.map((item) => (

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
          KOLABORASI
      ===================================================== */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] p-9 text-white md:p-12">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Kolaborasi
                </p>

                <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  Membangun kerja sama untuk menghasilkan dampak yang lebih
                  luas.
                </h2>

                <p className="mt-5 leading-7 text-[#E8E7F2]">
                  Kolaborasi dengan perguruan tinggi, pemerintah, industri,
                  komunitas, dan masyarakat dapat memperluas manfaat kegiatan
                  penelitian dan pengabdian.
                </p>

              </div>

            </div>


            <div className="rounded-[2rem] border border-[#E3E0D6] bg-[#F8F7F2] p-9 md:p-12">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Luaran
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#17134F]">
                Berbagai bentuk kontribusi akademik.
              </h2>

              <div className="mt-7 grid grid-cols-2 gap-3">

                {outputs.map((item) => (

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
          PUBLIKASI
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Publikasi & Diseminasi
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] md:text-5xl">
                Membagikan hasil penelitian kepada masyarakat luas.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Hasil penelitian dapat disebarluaskan melalui berbagai bentuk
                publikasi dan kegiatan ilmiah sebagai bagian dari kontribusi
                perguruan tinggi terhadap pengembangan ilmu pengetahuan.
              </p>

            </div>


            <div className="rounded-[2rem] border border-[#E3E0D6] bg-white p-8">

              <div className="space-y-5">

                <PublicationItem
                  number="01"
                  title="Artikel Ilmiah"
                  text="Hasil penelitian yang disusun dan dipublikasikan dalam bentuk artikel ilmiah."
                />

                <PublicationItem
                  number="02"
                  title="Seminar & Konferensi"
                  text="Diseminasi hasil penelitian melalui kegiatan ilmiah dan forum akademik."
                />

                <PublicationItem
                  number="03"
                  title="Buku & Bahan Ajar"
                  text="Pengembangan hasil kajian menjadi bahan pembelajaran dan referensi."
                />

                <PublicationItem
                  number="04"
                  title="Inovasi"
                  text="Pengembangan hasil penelitian menjadi solusi atau produk yang dapat diterapkan."
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
                  Penelitian & Pengabdian
                </p>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Bersama mengembangkan ilmu dan memberikan manfaat.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
                  Universitas Mandala Bhakti terus mendorong kegiatan akademik
                  yang menghubungkan pengetahuan, inovasi, dan kebutuhan
                  masyarakat.
                </p>

              </div>


              <Link
                href="/kontak"
                className="shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Hubungi Kami →
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

function ResearchItem({
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


function PublicationItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-[#E3E0D6] pb-5 last:border-0 last:pb-0">

      <div className="flex gap-4">

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF9D9] text-xs font-bold text-[#C49A00]">
          {number}
        </span>

        <div>

          <h3 className="font-bold text-[#17134F]">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#666377]">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}