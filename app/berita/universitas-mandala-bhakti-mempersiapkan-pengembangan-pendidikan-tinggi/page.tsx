import Image from "next/image";
import Link from "next/link";

export default function BeritaDetailPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#17134F] text-white">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F4C400]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C49A00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-4xl">

            <Link
              href="/berita"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F4C400] transition hover:bg-white/10"
            >
              ← Berita & Pengumuman
            </Link>


            <div className="mt-8 flex flex-wrap items-center gap-3">

              <span className="rounded-full bg-[#F4C400] px-4 py-2 text-sm font-semibold text-[#17134F]">
                Kampus
              </span>

              <span className="text-sm text-[#D9D6E8]">
                30 Agustus 2026
              </span>

            </div>


            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Universitas Mandala Bhakti Mempersiapkan Pengembangan Pendidikan Tinggi
            </h1>


            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#E8E7F2] md:text-xl">
              Informasi mengenai perkembangan Universitas Mandala Bhakti
              dalam membangun lingkungan pendidikan yang inovatif,
              profesional, dan relevan dengan kebutuhan masyarakat.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* =================================================
              FEATURE IMAGE
          ================================================= */}

          <div className="overflow-hidden rounded-[2rem] border border-[#E3E0D6] bg-[#F8F7F2] shadow-sm">

            <Image
              src="/berita/Universitas Mandala Bhakti Mempersiapkan Pengembangan Pendidikan Tinggi.png"
              alt="Universitas Mandala Bhakti Mempersiapkan Pengembangan Pendidikan Tinggi"
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
              priority
            />

          </div>


          {/* =================================================
              ARTICLE CONTENT
          ================================================= */}

          <article className="mx-auto mt-12 max-w-4xl">

            {/* LEAD */}

            <p className="text-lg leading-8 text-[#55536A] md:text-xl">

              Universitas Mandala Bhakti terus mempersiapkan pengembangan
              pendidikan tinggi melalui berbagai upaya untuk membangun
              lingkungan akademik yang inovatif, profesional, dan relevan
              dengan kebutuhan masyarakat.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Pengembangan tersebut menjadi bagian dari perjalanan institusi
              dalam mempersiapkan lingkungan pendidikan yang mampu mengikuti
              perubahan ilmu pengetahuan, perkembangan teknologi, serta
              kebutuhan dunia profesional. Proses ini dilakukan dengan
              memperhatikan berbagai aspek yang berkaitan dengan kegiatan
              akademik dan kehidupan mahasiswa.

            </p>


            {/* SECTION 1 */}

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-[#17134F] md:text-4xl">

              Membangun lingkungan pendidikan yang relevan

            </h2>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Perkembangan pendidikan tinggi saat ini menuntut institusi
              pendidikan untuk mampu beradaptasi dengan perubahan yang terjadi
              di masyarakat dan dunia kerja. Pengetahuan dan teknologi yang
              terus berkembang membuat proses pendidikan perlu dipersiapkan
              agar tetap relevan dengan kebutuhan mahasiswa.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Dalam proses pengembangannya, Universitas Mandala Bhakti
              mempersiapkan lingkungan akademik yang mendukung kegiatan
              pembelajaran, pengembangan kompetensi, serta berbagai aktivitas
              yang dapat memberikan pengalaman kepada mahasiswa. Pendekatan
              tersebut diharapkan dapat menciptakan proses pendidikan yang
              tidak hanya berfokus pada teori, tetapi juga memiliki keterkaitan
              dengan kebutuhan nyata.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Pengembangan kegiatan akademik, pembelajaran, penelitian, dan
              pengabdian kepada masyarakat menjadi bagian yang saling
              mendukung dalam membangun lingkungan pendidikan tersebut.
              Dengan demikian, proses pendidikan dapat berkembang secara
              lebih menyeluruh dan memberikan ruang bagi mahasiswa untuk
              mengembangkan kemampuan mereka.

            </p>


            {/* HIGHLIGHT */}

            <div className="my-12 rounded-3xl border border-[#E8D98A] bg-[#FFF9D9] p-7 md:p-8">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Arah Pengembangan
              </p>


              <p className="mt-4 text-lg font-semibold leading-8 text-[#17134F]">

                Membangun pendidikan yang inovatif, profesional, dan relevan
                dengan kebutuhan masyarakat.

              </p>


              <p className="mt-3 leading-7 text-[#666377]">

                Pengembangan pendidikan diarahkan untuk menciptakan lingkungan
                pembelajaran yang mendukung perkembangan kompetensi,
                kreativitas, kemampuan beradaptasi, dan kesiapan mahasiswa
                menghadapi perubahan.

              </p>

            </div>


            {/* SECTION 2 */}

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-[#17134F] md:text-4xl">

              Mempersiapkan mahasiswa menghadapi masa depan

            </h2>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Salah satu perhatian dalam pengembangan pendidikan tinggi adalah
              bagaimana mempersiapkan mahasiswa agar memiliki kemampuan yang
              dapat digunakan setelah menyelesaikan pendidikan. Selain
              penguasaan pengetahuan, mahasiswa membutuhkan kemampuan untuk
              berpikir kritis, beradaptasi, berkomunikasi, bekerja sama, dan
              menyelesaikan berbagai persoalan.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Karena itu, lingkungan pendidikan perlu memberikan kesempatan
              kepada mahasiswa untuk memperoleh pengalaman belajar yang
              beragam. Kegiatan akademik maupun kemahasiswaan dapat menjadi
              ruang bagi mahasiswa untuk mengembangkan potensi sekaligus
              membangun kesiapan menghadapi lingkungan profesional.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Universitas Mandala Bhakti terus mempersiapkan pengembangan
              lingkungan tersebut sebagai bagian dari upaya memberikan
              pengalaman pendidikan yang lebih relevan. Mahasiswa diharapkan
              tidak hanya memperoleh bekal akademik, tetapi juga memiliki
              kemampuan untuk terus belajar dan menyesuaikan diri dengan
              perkembangan yang terjadi.

            </p>


            {/* SECTION 3 */}

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-[#17134F] md:text-4xl">

              Pengembangan akademik secara berkelanjutan

            </h2>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Pengembangan pendidikan tinggi merupakan proses yang dilakukan
              secara bertahap dan berkelanjutan. Setiap aspek yang berkaitan
              dengan pendidikan perlu dipersiapkan agar dapat saling
              mendukung, mulai dari kegiatan pembelajaran hingga aktivitas
              penelitian dan pengabdian kepada masyarakat.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Dalam konteks tersebut, Universitas Mandala Bhakti terus
              mempersiapkan berbagai langkah pengembangan institusi.
              Pengembangan akademik diharapkan dapat berjalan seiring dengan
              peningkatan kualitas lingkungan pembelajaran dan penguatan
              kegiatan yang mendukung perkembangan mahasiswa.

            </p>


            {/* SECTION 4 */}

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-[#17134F] md:text-4xl">

              Kolaborasi dan kontribusi bagi masyarakat

            </h2>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Pendidikan tinggi memiliki peran yang tidak hanya berkaitan
              dengan proses pembelajaran di dalam lingkungan kampus.
              Keberadaan institusi pendidikan juga diharapkan dapat
              memberikan kontribusi melalui penelitian, pengembangan ilmu
              pengetahuan, serta kegiatan pengabdian kepada masyarakat.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Oleh karena itu, pengembangan Universitas Mandala Bhakti juga
              diarahkan untuk membangun lingkungan yang membuka ruang bagi
              kolaborasi dan kegiatan yang memberikan manfaat lebih luas.
              Hubungan antara pendidikan, kebutuhan masyarakat, dan
              perkembangan dunia profesional menjadi bagian penting dalam
              proses tersebut.

            </p>


            {/* SECTION 5 */}

            <h2 className="mt-12 text-3xl font-bold tracking-tight text-[#17134F] md:text-4xl">

              Langkah menuju pengembangan pendidikan tinggi

            </h2>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Persiapan pengembangan pendidikan tinggi menjadi bagian dari
              perjalanan Universitas Mandala Bhakti dalam membangun institusi
              yang mampu menjawab kebutuhan pendidikan di masa mendatang.
              Proses tersebut membutuhkan komitmen, perencanaan, dan
              pengembangan yang dilakukan secara berkelanjutan.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Melalui pengembangan lingkungan akademik, kegiatan pembelajaran,
              penelitian, pengabdian kepada masyarakat, serta kegiatan
              kemahasiswaan, Universitas Mandala Bhakti terus mempersiapkan
              fondasi bagi perkembangan pendidikan tinggi yang inovatif,
              profesional, dan relevan dengan kebutuhan masyarakat.

            </p>


            <p className="mt-5 text-lg leading-8 text-[#666377]">

              Pengembangan tersebut menjadi bagian penting dari upaya
              Universitas Mandala Bhakti untuk terus bertumbuh dan memberikan
              pengalaman pendidikan yang bermakna bagi mahasiswa serta
              kontribusi yang lebih luas bagi masyarakat.

            </p>


            {/* PENUTUP */}

            <div className="mt-12 border-t border-[#E3E0D6] pt-8">

              <p className="text-lg font-semibold leading-8 text-[#17134F]">

                Universitas Mandala Bhakti akan terus mempersiapkan
                pengembangan pendidikan tinggi sebagai bagian dari upaya
                membangun lingkungan akademik yang mampu berkembang bersama
                kebutuhan masyarakat dan tantangan masa depan.

              </p>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] px-8 py-12 text-white md:px-12 md:py-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl" />


            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div className="max-w-2xl">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C400]">
                  Berita Universitas
                </p>


                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Ikuti perkembangan Mandala Bhakti.
                </h2>


                <p className="mt-4 leading-7 text-[#E8E7F2]">

                  Temukan informasi dan berita terbaru mengenai perkembangan
                  Universitas Mandala Bhakti.

                </p>

              </div>


              <Link
                href="/berita"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition hover:bg-[#FFF9D9]"
              >
                Lihat Semua Berita →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}