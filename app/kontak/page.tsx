"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/KeMCSSx6VD9p4mcR8";

const PMB_URL =
  "https://spmb.mandalabhakti.ac.id/";

const contactChannels = [
  {
    number: "01",
    title: "Telepon",
    value: "0271-714813",
    description:
      "Hubungi kampus untuk mendapatkan informasi mengenai akademik, program studi, PMB, dan layanan institusi.",
    href: "tel:+62271714813",
    action: "Hubungi Sekarang",
  },
  {
    number: "02",
    title: "Email Akademik",
    value: "ambs@mandalabhakti.ac.id",
    description:
      "Gunakan email resmi untuk kebutuhan komunikasi akademik dan informasi kelembagaan.",
    href: "mailto:ambs@mandalabhakti.ac.id",
    action: "Kirim Email",
  },
  {
    number: "03",
    title: "Email Informasi",
    value: "info@mandalabhakti.ac.id",
    description:
      "Saluran email untuk pertanyaan umum mengenai Akademi Pariwisata Mandala Bhakti Surakarta.",
    href: "mailto:info@mandalabhakti.ac.id",
    action: "Kirim Email",
  },
];

const socialMedia = [
  {
    name: "Instagram",
    handle: "@akpartamabha",
    href: "https://www.instagram.com/akpartamabha/",
    icon: "/icons/instagram.png",
  },
  {
    name: "TikTok",
    handle: "@ambs_official1",
    href: "https://www.tiktok.com/@ambs_official1",
    icon: "/icons/tiktok.png",
  },
  {
    name: "YouTube",
    handle: "AMBS Official",
    href: "https://youtube.com/@ambsofficial7313",
    icon: "/icons/youtube.png",
  },
];

const quickLinks = [
  {
    title: "Profil Institusi",
    description:
      "Kenali institusi, visi, misi, dan arah pengembangan kampus.",
    href: "/profil",
  },
  {
    title: "Program Studi",
    description:
      "Lihat informasi program studi dan bidang pendidikan yang tersedia.",
    href: "/program-studi",
  },
  {
    title: "Akademik",
    description:
      "Temukan informasi mengenai kegiatan dan layanan akademik.",
    href: "/akademik",
  },
  {
    title: "Penerimaan Mahasiswa Baru",
    description:
      "Informasi mengenai program studi, persyaratan, dan proses PMB.",
    href: "/pmb",
  },
];

export default function KontakPage() {
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleContactSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(
      formData.get("name") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const subject = String(
      formData.get("subject") || ""
    ).trim();

    const message = String(
      formData.get("message") || ""
    ).trim();

    if (!name || !email || !subject || !message) {
      setContactStatus("error");
      return;
    }

    setContactStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Gagal mengirim pesan."
        );
      }

      setContactStatus("success");

      form.reset();
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setContactStatus("error");
    }
  };

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
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C49A00]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F4C400] sm:text-sm">
              Kontak
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hubungi Mandala Bhakti.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#E8E7F2] sm:text-lg sm:leading-8">
              Temukan informasi kontak, lokasi kampus, dan
              berbagai saluran komunikasi resmi Akademi
              Pariwisata Mandala Bhakti Surakarta.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="tel:+62271714813"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#17134F] transition duration-300 hover:bg-[#FFF9D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17134F]"
              >
                Hubungi Kampus →
              </a>

              <a
                href="#lokasi"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#F4C400] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17134F]"
              >
                Lihat Lokasi
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A00] sm:text-sm">
                Informasi Kontak
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-[#17134F] sm:text-5xl">
                Tetap terhubung dengan kampus.
              </h2>

            </div>

            <div className="space-y-5 text-base leading-7 text-[#55536A] sm:text-lg sm:leading-8">

              <p>
                Akademi Pariwisata Mandala Bhakti Surakarta
                merupakan perguruan tinggi yang berfokus pada
                pendidikan dan pengembangan sumber daya manusia
                di bidang pariwisata, khususnya perhotelan dan
                manajemen pariwisata.
              </p>

              <p>
                Jika Anda membutuhkan informasi mengenai program
                studi, kegiatan akademik, penerimaan mahasiswa
                baru, maupun informasi kelembagaan, silakan
                menggunakan saluran komunikasi resmi yang
                tersedia.
              </p>

              <p>
                Kampus berada di wilayah Nusukan, Kecamatan
                Banjarsari, Kota Surakarta, Jawa Tengah dan dapat
                dihubungi melalui telepon maupun email resmi
                institusi.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CHANNELS
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A00] sm:text-sm">
              Saluran Resmi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] sm:text-5xl">
              Pilih cara yang paling nyaman.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#55536A] sm:text-lg sm:leading-8">
              Gunakan informasi berikut untuk menghubungi
              Akademi Pariwisata Mandala Bhakti Surakarta.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {contactChannels.map((item) => (

              <div
                key={item.number}
                className="flex h-full flex-col rounded-3xl border border-[#E3E0D6] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9C56A] hover:shadow-xl"
              >

                <span className="text-sm font-bold text-[#C49A00]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-bold leading-7 text-[#17134F]">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-sm font-semibold leading-6 text-[#21145F] sm:text-base">
                  {item.value}
                </p>

                <p className="mt-4 flex-1 text-base leading-7 text-[#666377]">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-6 inline-flex min-h-[40px] w-fit items-center justify-center rounded-full bg-[#21145F] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#302074] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21145F] focus-visible:ring-offset-2"
                >
                  {item.action} →
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">

            <div className="lg:pt-1">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A00] sm:text-sm">
                Formulir Kontak
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-[#17134F] sm:text-5xl">
                Ada yang ingin ditanyakan?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#55536A] sm:text-lg sm:leading-8">
                Sampaikan pertanyaan atau kebutuhan informasi
                Anda melalui formulir berikut.
              </p>

              <div
                className="mt-8 rounded-2xl border border-[#E8D98A] bg-[#FFF9D9] p-5"
                aria-label="Informasi pengiriman formulir"
              >

                <p className="text-sm font-semibold text-[#17134F]">
                  Informasi
                </p>

                <p className="mt-2 text-sm leading-6 text-[#666377]">
                  Pesan yang Anda kirim akan diproses oleh
                  server dan disimpan ke dalam sistem untuk
                  ditindaklanjuti oleh pihak institusi.
                </p>

              </div>

            </div>


            <form
              onSubmit={handleContactSubmit}
              className="rounded-[2rem] border border-[#E3E0D6] bg-[#F8F7F2] p-7 sm:p-9 lg:p-10"
            >

              {/* =================================================
                  STATUS
              ================================================= */}

              {contactStatus === "sending" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700"
                >
                  Mengirim pesan...
                </div>
              )}

              {contactStatus === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                >
                  Pesan berhasil dikirim. Terima kasih telah
                  menghubungi Mandala Bhakti.
                </div>
              )}

              {contactStatus === "error" && (
                <div
                  role="alert"
                  className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  Pesan gagal dikirim. Silakan periksa kembali
                  data Anda dan coba lagi.
                </div>
              )}


              <div className="space-y-5">

                {/* NAMA */}

                <div>

                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-[#4D4A5E]"
                  >
                    Nama Lengkap
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Masukkan nama lengkap"
                    className="w-full rounded-xl border border-[#D9D7E5] bg-white px-4 py-3.5 text-sm text-[#17134F] outline-none transition placeholder:text-[#A19EAF] focus:border-[#C49A00] focus:ring-2 focus:ring-[#F4C400]/20"
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-[#4D4A5E]"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="nama@email.com"
                    className="w-full rounded-xl border border-[#D9D7E5] bg-white px-4 py-3.5 text-sm text-[#17134F] outline-none transition placeholder:text-[#A19EAF] focus:border-[#C49A00] focus:ring-2 focus:ring-[#F4C400]/20"
                  />

                </div>


                {/* SUBJECT */}

                <div>

                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-[#4D4A5E]"
                  >
                    Subjek
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Contoh: Informasi Program Studi"
                    className="w-full rounded-xl border border-[#D9D7E5] bg-white px-4 py-3.5 text-sm text-[#17134F] outline-none transition placeholder:text-[#A19EAF] focus:border-[#C49A00] focus:ring-2 focus:ring-[#F4C400]/20"
                  />

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-[#4D4A5E]"
                  >
                    Pesan
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                    className="w-full resize-y rounded-xl border border-[#D9D7E5] bg-white px-4 py-3.5 text-sm leading-6 text-[#17134F] outline-none transition placeholder:text-[#A19EAF] focus:border-[#C49A00] focus:ring-2 focus:ring-[#F4C400]/20"
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={contactStatus === "sending"}
                  className="w-full min-h-[46px] rounded-full bg-[#21145F] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#302074] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21145F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {contactStatus === "sending"
                    ? "Mengirim..."
                    : "Kirim Pesan →"}
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADDRESS & LOCATION
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">

            {/* ADDRESS */}

            <div className="flex flex-col">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A00] sm:text-sm">
                Alamat Kampus
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-[#17134F] sm:text-5xl">
                Temukan Mandala Bhakti.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#55536A] sm:text-lg sm:leading-8">
                Akademi Pariwisata Mandala Bhakti Surakarta
                berada di kawasan Nusukan, Kecamatan Banjarsari,
                Kota Surakarta, Jawa Tengah.
              </p>


              <div className="mt-8 rounded-[2rem] border border-[#E3E0D6] bg-white p-7 sm:p-8">

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C49A00] sm:text-sm">
                  Alamat Lengkap
                </p>

                <address className="mt-4 not-italic text-lg font-bold leading-8 text-[#17134F] sm:text-xl">
                  Jl. Ki Mangun Sarkoro No. 20
                  <br />
                  Nusukan, Kec. Banjarsari
                  <br />
                  Kota Surakarta, Jawa Tengah 57135
                </address>

                <div className="mt-6 border-t border-[#E3E0D6] pt-5">

                  <p className="text-sm text-[#777487]">
                    Nama Institusi
                  </p>

                  <p className="mt-1 font-semibold leading-6 text-[#17134F]">
                    Akademi Pariwisata Mandala Bhakti Surakarta
                  </p>

                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#21145F] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#302074] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21145F] focus-visible:ring-offset-2"
                >
                  Buka di Google Maps →
                </a>

              </div>

            </div>


            {/* MAP */}

            <div
              id="lokasi"
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#E3E0D6] bg-white shadow-sm"
            >

              <div className="relative h-[360px] sm:h-[420px] lg:h-full lg:min-h-[480px]">

                <iframe
                  title="Lokasi Akademi Pariwisata Mandala Bhakti Surakarta"
                  src="https://www.google.com/maps?q=Jl.%20Ki%20Mangun%20Sarkoro%20No.%2020%2C%20Nusukan%2C%20Banjarsari%2C%20Surakarta%2C%20Jawa%20Tengah&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />


                {/* MAP BUTTON */}

                <div className="absolute bottom-5 left-5 right-5 flex justify-end">

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#21145F] shadow-lg transition duration-300 hover:bg-[#FFF9D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21145F]"
                  >
                    Buka Google Maps →
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOCIAL MEDIA
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* SOCIAL INTRO */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A00] sm:text-sm">
                Media Sosial
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-[#17134F] sm:text-5xl">
                Ikuti informasi terbaru kampus.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#55536A] sm:text-lg sm:leading-8">
                Dapatkan informasi mengenai kegiatan akademik,
                mahasiswa, penelitian, pengabdian, dan berbagai
                kegiatan kampus melalui kanal media sosial resmi.
              </p>

            </div>


            {/* SOCIAL LINKS */}

            <div className="space-y-4">

              {socialMedia.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka ${item.name} ${item.handle}`}
                  className="group flex min-h-[72px] items-center justify-between rounded-2xl border border-[#E3E0D6] bg-[#F8F7F2] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#D9C56A] hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21145F] focus-visible:ring-offset-2"
                >

                  <div className="flex min-w-0 items-center gap-4">

                    {/* ICON */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm">

                      <Image
                        src={item.icon}
                        alt=""
                        width={40}
                        height={40}
                        sizes="40px"
                        className="h-10 w-10 object-contain"
                      />

                    </div>


                    {/* INFO */}

                    <div className="min-w-0">

                      <h3 className="font-bold text-[#17134F]">
                        {item.name}
                      </h3>

                      <p className="mt-1 truncate text-sm text-[#666377]">
                        {item.handle}
                      </p>

                    </div>

                  </div>


                  {/* ARROW */}

                  <span
                    aria-hidden="true"
                    className="ml-4 shrink-0 text-lg text-[#21145F] transition duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>

                </a>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK LINKS
      ===================================================== */}

      <section className="bg-[#F8F7F2] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A00] sm:text-sm">
              Informasi Kampus
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#17134F] sm:text-5xl">
              Mungkin Anda sedang mencari ini.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {quickLinks.map((item, index) => (

              <Link
                key={item.href}
                href={item.href}
                className="group flex h-full flex-col rounded-3xl border border-[#E3E0D6] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9C56A] hover:bg-[#FFFDF5] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21145F] focus-visible:ring-offset-2"
              >

                <span className="text-sm font-bold text-[#C49A00]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-xl font-bold leading-7 text-[#17134F]">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-7 text-[#666377]">
                  {item.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#21145F] transition duration-300 group-hover:translate-x-1">
                  Lihat Informasi →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PMB CTA
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#21145F] px-7 py-10 text-white sm:px-10 sm:py-12 md:px-12 md:py-16">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F4C400]/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#C49A00]/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div className="max-w-3xl">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C400] sm:text-sm">
                  Penerimaan Mahasiswa Baru
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Ingin menjadi bagian dari Mandala Bhakti?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#E8E7F2] sm:text-lg sm:leading-8">
                  Kenali program studi dan lanjutkan proses
                  pendaftaran melalui sistem PMB resmi.
                </p>

              </div>


              <a
                href={PMB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-full bg-white px-9 py-4 text-sm font-semibold text-[#17134F] transition duration-300 hover:bg-[#FFF9D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#21145F]"
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