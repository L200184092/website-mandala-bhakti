"use client";

import { useState } from "react";

const photos = [
  {
    number: "01",
    title: "Kegiatan Akademik",
    category: "Akademik",
    image: "",
  },
  {
    number: "02",
    title: "Kegiatan Mahasiswa",
    category: "Kemahasiswaan",
    image: "",
  },
  {
    number: "03",
    title: "Praktik Perhotelan",
    category: "Program Studi",
    image: "",
  },
  {
    number: "04",
    title: "Kegiatan Kampus",
    category: "Universitas",
    image: "",
  },
  {
    number: "05",
    title: "Seminar & Workshop",
    category: "Kegiatan",
    image: "",
  },
  {
    number: "06",
    title: "Pengabdian Masyarakat",
    category: "Pengabdian",
    image: "",
  },
];

const videos = [
  {
    number: "01",
    title: "Profil Universitas Mandala Bhakti",
    description:
      "Video profil dan informasi mengenai Universitas Mandala Bhakti.",
    url: "",
  },
  {
    number: "02",
    title: "Kegiatan Akademik",
    description:
      "Dokumentasi kegiatan akademik dan pembelajaran di lingkungan kampus.",
    url: "",
  },
  {
    number: "03",
    title: "Kegiatan Mahasiswa",
    description:
      "Dokumentasi aktivitas mahasiswa dan kegiatan kemahasiswaan.",
    url: "",
  },
];

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState<"foto" | "video">("foto");

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
                Galeri
              </span>

              <span className="text-sm text-[#D9D6E8]">
                Foto & Video
              </span>

            </div>

            <h1 className="mt-7 text-5xl font-bold tracking-tight md:text-6xl">
              Galeri Universitas
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E7F2]">
              Dokumentasi kegiatan akademik, kemahasiswaan, program studi,
              dan berbagai aktivitas Universitas Mandala Bhakti.
            </p>

          </div>

        </div>

      </section>


      {/* GALLERY */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* TABS */}

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={() => setActiveTab("foto")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                activeTab === "foto"
                  ? "bg-[#21145F] text-white"
                  : "border border-[#D9D4C7] bg-white text-[#21145F] hover:border-[#C49A00]"
              }`}
            >
              Foto
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("video")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                activeTab === "video"
                  ? "bg-[#21145F] text-white"
                  : "border border-[#D9D4C7] bg-white text-[#21145F] hover:border-[#C49A00]"
              }`}
            >
              Video
            </button>

          </div>


          {/* FOTO */}

          {activeTab === "foto" && (

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {photos.map((photo) => (

                <article
                  key={photo.number}
                  className="group overflow-hidden rounded-3xl border border-[#E3E0D6] bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F7F2]">

                    {photo.image ? (
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center px-6 text-center">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF9D9] text-2xl">
                          📷
                        </div>

                        <p className="mt-4 text-sm font-semibold text-[#777487]">
                          Foto belum tersedia
                        </p>

                      </div>
                    )}

                  </div>


                  <div className="p-6">

                    <div className="flex items-center justify-between gap-4">

                      <span className="text-sm font-bold text-[#C49A00]">
                        {photo.number}
                      </span>

                      <span className="rounded-full bg-[#F8F7F2] px-3 py-1.5 text-xs font-semibold text-[#777487]">
                        {photo.category}
                      </span>

                    </div>

                    <h2 className="mt-5 text-xl font-bold text-[#17134F]">
                      {photo.title}
                    </h2>

                  </div>

                </article>

              ))}

            </div>

          )}


          {/* VIDEO */}

          {activeTab === "video" && (

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {videos.map((video) => (

                <article
                  key={video.number}
                  className="overflow-hidden rounded-3xl border border-[#E3E0D6] bg-[#F8F7F2] transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex aspect-video items-center justify-center bg-[#17134F]">

                    {video.url ? (
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="h-full w-full"
                        allowFullScreen
                      />
                    ) : (
                      <div className="text-center text-white">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl">
                          ▶
                        </div>

                        <p className="mt-4 text-sm text-[#D9D6E8]">
                          Video belum tersedia
                        </p>

                      </div>
                    )}

                  </div>


                  <div className="p-6">

                    <span className="text-sm font-bold text-[#C49A00]">
                      {video.number}
                    </span>

                    <h2 className="mt-4 text-xl font-bold text-[#17134F]">
                      {video.title}
                    </h2>

                    <p className="mt-3 leading-7 text-[#666377]">
                      {video.description}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* INFO */}
      <section className="bg-[#F8F7F2] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="rounded-[2rem] border border-[#E3E0D6] bg-white p-8 md:p-12">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                Dokumentasi Resmi
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#17134F] md:text-4xl">
                Galeri akan diperbarui dengan dokumentasi kegiatan kampus.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#55536A]">
                Foto dan video yang ditampilkan pada halaman ini sebaiknya
                berasal dari dokumentasi resmi Universitas Mandala Bhakti
                agar informasi yang dipublikasikan tetap akurat dan dapat
                dipertanggungjawabkan.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}