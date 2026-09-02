"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchButton from "./SearchButton";

type DropdownName = "program" | "lainnya";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownName | null>(null);

  const navRef = useRef<HTMLElement | null>(null);

  /* =====================================================
     ROUTE CHANGE
  ===================================================== */

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  /* =====================================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ===================================================== */

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (navRef.current && !navRef.current.contains(target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* =====================================================
     CLOSE MENU WITH ESC
  ===================================================== */

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =====================================================
     TOGGLE DROPDOWN
  ===================================================== */

  function toggleDropdown(dropdown: DropdownName) {
    setActiveDropdown((current) =>
      current === dropdown ? null : dropdown
    );
  }

  /* =====================================================
     CLOSE ALL MENU
  ===================================================== */

  function closeMenu() {
    setIsOpen(false);
    setActiveDropdown(null);
  }

  /* =====================================================
     ACTIVE STATES
  ===================================================== */

  const isHomeActive = pathname === "/";

  const isProfileActive =
    pathname === "/profil" ||
    pathname.startsWith("/profil/");

  const isAcademicActive =
    pathname === "/akademik" ||
    pathname.startsWith("/akademik/");

  const isProgramActive =
    pathname === "/program-studi" ||
    pathname.startsWith("/program-studi/");

  const isStudentActive =
    pathname === "/kemahasiswaan" ||
    pathname.startsWith("/kemahasiswaan/");

  const isNewsActive =
    pathname === "/berita" ||
    pathname.startsWith("/berita/");

  const isResearchActive =
    pathname === "/penelitian-pengabdian" ||
    pathname.startsWith("/penelitian-pengabdian/");

  const isFacilityActive =
    pathname === "/fasilitas" ||
    pathname.startsWith("/fasilitas/");

  const isDownloadActive =
    pathname === "/download" ||
    pathname.startsWith("/download/");

  const isGalleryActive =
    pathname === "/galeri" ||
    pathname.startsWith("/galeri/");

  const isOtherActive =
    isResearchActive ||
    isFacilityActive ||
    isDownloadActive ||
    isGalleryActive;

  const isContactActive =
    pathname === "/kontak" ||
    pathname.startsWith("/kontak/");

  const isSearchActive =
    pathname === "/pencarian" ||
    pathname.startsWith("/pencarian/");

  const isPmbActive =
    pathname === "/pmb" ||
    pathname.startsWith("/pmb/");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E0D2] bg-white/95 backdrop-blur-md">

      <nav
        ref={navRef}
        aria-label="Navigasi utama"
        className="
          mx-auto flex h-20 max-w-7xl items-center
          px-5 sm:px-6 lg:px-8
        "
      >

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          href="/"
          aria-label="Universitas Mandala Bhakti"
          onClick={closeMenu}
          className="
            flex shrink-0 items-center gap-2.5
            lg:w-[225px]
            xl:w-[240px]
          "
        >

          <Image
            src="/images/logo.png"
            alt="Logo Universitas Mandala Bhakti"
            width={52}
            height={52}
            priority
            className="
              h-11 w-11 shrink-0 object-contain
              xl:h-12 xl:w-12
            "
          />

          <div className="min-w-0 leading-tight">

            <div
              className="
                whitespace-nowrap text-[17px] font-bold
                tracking-tight text-[#21145F]
                xl:text-lg
              "
            >
              MANDALA BHAKTI
            </div>

            <div
              className="
                whitespace-nowrap text-[9px] font-medium
                tracking-[0.22em] text-[#C99A00]
                xl:text-[10px]
              "
            >
              UNIVERSITY
            </div>

          </div>

        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION

            Menggunakan xl agar pada ukuran laptop yang lebih
            sempit tidak memaksakan seluruh menu desktop.
        ===================================================== */}

        <div className="hidden min-w-0 flex-1 items-center justify-end xl:flex">

          <div
            className="
              flex min-w-0 items-center
              gap-3
              2xl:gap-4
            "
          >

            {/* BERANDA */}

            <NavLink
              href="/"
              label="Beranda"
              active={isHomeActive}
              onClick={closeMenu}
            />


            {/* PROFIL */}

            <NavLink
              href="/profil"
              label="Profil"
              active={isProfileActive}
              onClick={closeMenu}
            />


            {/* AKADEMIK */}

            <NavLink
              href="/akademik"
              label="Akademik"
              active={isAcademicActive}
              onClick={closeMenu}
            />


            {/* =================================================
                PROGRAM STUDI
            ================================================= */}

            <div className="relative shrink-0">

              <DropdownButton
                label="Program Studi"
                active={isProgramActive}
                open={activeDropdown === "program"}
                onClick={() => toggleDropdown("program")}
              />

              {activeDropdown === "program" && (

                <Dropdown className="left-1/2 w-72 -translate-x-1/2">

                  <DropdownLink
                    href="/program-studi"
                    title="Semua Program Studi"
                    description="Lihat seluruh program akademik"
                    active={pathname === "/program-studi"}
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/program-studi/informatika"
                    title="Informatika"
                    description="Teknologi & Rekayasa Digital"
                    active={
                      pathname === "/program-studi/informatika"
                    }
                    onClick={closeMenu}
                  />

                  <DropdownLink
                    href="/program-studi/perhotelan"
                    title="Perhotelan"
                    description="Pariwisata & Hospitality"
                    active={
                      pathname === "/program-studi/perhotelan"
                    }
                    onClick={closeMenu}
                  />

                </Dropdown>

              )}

            </div>


            {/* KEMAHASISWAAN */}

            <NavLink
              href="/kemahasiswaan"
              label="Kemahasiswaan"
              active={isStudentActive}
              onClick={closeMenu}
            />


            {/* =================================================
                BERITA & PENGUMUMAN
            ================================================= */}

            <NavLink
              href="/berita"
              label="Berita & Pengumuman"
              active={isNewsActive}
              onClick={closeMenu}
              allowWrap
            />


            {/* =================================================
                LAINNYA
            ================================================= */}

            <div className="relative shrink-0">

              <DropdownButton
                label="Lainnya"
                active={isOtherActive}
                open={activeDropdown === "lainnya"}
                onClick={() => toggleDropdown("lainnya")}
              />

              {activeDropdown === "lainnya" && (

                <Dropdown className="right-0 w-80">

                  {/* PENELITIAN */}

                  <DropdownLink
                    href="/penelitian-pengabdian"
                    title="Penelitian & Pengabdian"
                    description="Riset dan kontribusi kepada masyarakat"
                    active={isResearchActive}
                    onClick={closeMenu}
                  />


                  {/* FASILITAS */}

                  <DropdownLink
                    href="/fasilitas"
                    title="Fasilitas"
                    description="Fasilitas dan lingkungan kampus"
                    active={isFacilityActive}
                    onClick={closeMenu}
                  />


                  {/* DOWNLOAD */}

                  <DropdownLink
                    href="/download"
                    title="Download"
                    description="Dokumen dan informasi yang dapat diunduh"
                    active={isDownloadActive}
                    onClick={closeMenu}
                  />


                  {/* GALERI */}

                  <DropdownLink
                    href="/galeri"
                    title="Galeri"
                    description="Foto dan video kegiatan universitas"
                    active={isGalleryActive}
                    onClick={closeMenu}
                  />

                </Dropdown>

              )}

            </div>


            {/* KONTAK */}

            <NavLink
              href="/kontak"
              label="Kontak"
              active={isContactActive}
              onClick={closeMenu}
            />


            {/* =================================================
                SEARCH
            ================================================= */}

            <div
              className={`
                shrink-0
                ${
                  isSearchActive
                    ? "rounded-full ring-2 ring-[#C99A00]/20"
                    : ""
                }
              `}
            >
              <SearchButton />
            </div>


            {/* =================================================
                PMB
            ================================================= */}

            <Link
              href="/pmb"
              onClick={closeMenu}
              aria-current={isPmbActive ? "page" : undefined}
              className={`
                ml-1 inline-flex min-h-[44px] shrink-0
                items-center justify-center
                whitespace-nowrap rounded-full
                px-5 py-3
                text-sm font-semibold text-white
                shadow-md shadow-[#21145F]/15
                transition duration-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C99A00]
                focus-visible:ring-offset-2
                ${
                  isPmbActive
                    ? "bg-[#302074] ring-2 ring-[#C99A00]/30"
                    : "bg-[#21145F] hover:bg-[#302074] hover:shadow-lg"
                }
              `}
            >
              Daftar Sekarang
            </Link>

          </div>

        </div>


        {/* =====================================================
            MOBILE HEADER ACTIONS
        ===================================================== */}

        <div className="ml-auto flex items-center gap-2 xl:hidden">

          {/* SEARCH MOBILE */}

          <SearchButton />


          {/* MENU BUTTON */}

          <button
            type="button"
            onClick={() => {
              setIsOpen((current) => !current);
              setActiveDropdown(null);
            }}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg border border-[#DDD8C9]
              text-[#21145F]
              transition duration-300
              hover:border-[#C99A00]
              hover:bg-[#FFF9D8]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C99A00]
              focus-visible:ring-offset-2
            "
            aria-label={
              isOpen
                ? "Tutup menu navigasi"
                : "Buka menu navigasi"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >

            {isOpen ? (

              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18 18 6M6 6l12 12"
                />

              </svg>

            ) : (

              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />

              </svg>

            )}

          </button>

        </div>

      </nav>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {isOpen && (

        <div
          id="mobile-navigation"
          className="
            max-h-[calc(100vh-5rem)]
            overflow-y-auto
            border-t border-[#E5E0D2]
            bg-white px-6 py-5 shadow-lg
            xl:hidden
          "
        >

          <nav
            aria-label="Navigasi mobile"
            className="mx-auto flex max-w-7xl flex-col"
          >

            {/* BERANDA */}

            <MobileLink
              href="/"
              label="Beranda"
              active={isHomeActive}
              onClick={closeMenu}
            />


            {/* PROFIL */}

            <MobileLink
              href="/profil"
              label="Profil"
              active={isProfileActive}
              onClick={closeMenu}
            />


            {/* AKADEMIK */}

            <MobileLink
              href="/akademik"
              label="Akademik"
              active={isAcademicActive}
              onClick={closeMenu}
            />


            {/* =================================================
                PROGRAM STUDI
            ================================================= */}

            <MobileDropdownButton
              label="Program Studi"
              open={activeDropdown === "program"}
              active={isProgramActive}
              onClick={() => toggleDropdown("program")}
            />

            {activeDropdown === "program" && (

              <div className="ml-4 border-l-2 border-[#E6D27A] pl-4">

                <MobileLink
                  href="/program-studi"
                  label="Semua Program Studi"
                  active={pathname === "/program-studi"}
                  onClick={closeMenu}
                />

                <MobileLink
                  href="/program-studi/informatika"
                  label="Informatika"
                  active={
                    pathname === "/program-studi/informatika"
                  }
                  onClick={closeMenu}
                />

                <MobileLink
                  href="/program-studi/perhotelan"
                  label="Perhotelan"
                  active={
                    pathname === "/program-studi/perhotelan"
                  }
                  onClick={closeMenu}
                />

              </div>

            )}


            {/* KEMAHASISWAAN */}

            <MobileLink
              href="/kemahasiswaan"
              label="Kemahasiswaan"
              active={isStudentActive}
              onClick={closeMenu}
            />


            {/* BERITA */}

            <MobileLink
              href="/berita"
              label="Berita & Pengumuman"
              active={isNewsActive}
              onClick={closeMenu}
            />


            {/* =================================================
                LAINNYA
            ================================================= */}

            <MobileDropdownButton
              label="Lainnya"
              open={activeDropdown === "lainnya"}
              active={isOtherActive}
              onClick={() => toggleDropdown("lainnya")}
            />

            {activeDropdown === "lainnya" && (

              <div className="ml-4 border-l-2 border-[#E6D27A] pl-4">

                <MobileLink
                  href="/penelitian-pengabdian"
                  label="Penelitian & Pengabdian"
                  active={isResearchActive}
                  onClick={closeMenu}
                />

                <MobileLink
                  href="/fasilitas"
                  label="Fasilitas"
                  active={isFacilityActive}
                  onClick={closeMenu}
                />

                <MobileLink
                  href="/download"
                  label="Download"
                  active={isDownloadActive}
                  onClick={closeMenu}
                />

                <MobileLink
                  href="/galeri"
                  label="Galeri"
                  active={isGalleryActive}
                  onClick={closeMenu}
                />

              </div>

            )}


            {/* KONTAK */}

            <MobileLink
              href="/kontak"
              label="Kontak"
              active={isContactActive}
              onClick={closeMenu}
            />


            {/* PENCARIAN */}

            <MobileLink
              href="/pencarian"
              label="Pencarian Informasi"
              active={isSearchActive}
              onClick={closeMenu}
            />


            {/* PMB */}

            <Link
              href="/pmb"
              onClick={closeMenu}
              aria-current={isPmbActive ? "page" : undefined}
              className={`
                mt-5 inline-flex min-h-[46px]
                items-center justify-center
                rounded-full px-5 py-3.5
                text-center text-sm font-semibold
                text-white transition duration-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C99A00]
                focus-visible:ring-offset-2
                ${
                  isPmbActive
                    ? "bg-[#302074] ring-2 ring-[#C99A00]/30"
                    : "bg-[#21145F] hover:bg-[#302074]"
                }
              `}
            >
              Daftar Sekarang
            </Link>

          </nav>

        </div>

      )}

    </header>
  );
}


/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavLink({
  href,
  label,
  active = false,
  onClick,
  allowWrap = false,
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  allowWrap?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`
        flex min-h-20 items-center
        border-b-2
        text-[13px] font-medium
        transition duration-300
        xl:text-sm
        ${
          allowWrap
            ? "max-w-[92px] text-center leading-5"
            : "whitespace-nowrap"
        }
        ${
          active
            ? "border-[#C99A00] text-[#21145F]"
            : "border-transparent text-[#403B52] hover:border-[#C99A00] hover:text-[#C99A00]"
        }
      `}
    >
      {label}
    </Link>
  );
}


/* =========================================================
   DESKTOP DROPDOWN BUTTON
========================================================= */

function DropdownButton({
  label,
  active,
  open,
  onClick,
}: {
  label: string;
  active: boolean;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-haspopup="true"
      aria-current={active ? "page" : undefined}
      className={`
        flex min-h-20 shrink-0
        items-center gap-1
        border-b-2
        whitespace-nowrap
        text-[13px] font-medium
        transition duration-300
        xl:text-sm
        ${
          active
            ? "border-[#C99A00] text-[#21145F]"
            : "border-transparent text-[#403B52] hover:border-[#C99A00] hover:text-[#C99A00]"
        }
      `}
    >

      {label}

      <svg
        className={`
          h-3.5 w-3.5 shrink-0
          transition-transform duration-300
          ${open ? "rotate-180" : ""}
        `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m6 9 6 6 6-6"
        />

      </svg>

    </button>
  );
}


/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

function Dropdown({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute top-[calc(100%-1px)]
        z-[60] pt-3
        ${className}
      `}
    >

      <div
        className="
          overflow-hidden rounded-2xl
          border border-[#E5E0D2]
          bg-white p-2
          shadow-[0_20px_50px_rgba(33,20,95,0.14)]
        "
      >

        {children}

      </div>

    </div>
  );
}


/* =========================================================
   DROPDOWN LINK
========================================================= */

function DropdownLink({
  href,
  title,
  description,
  active = false,
  onClick,
}: {
  href: string;
  title: string;
  description: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`
        group block rounded-xl
        px-4 py-3
        transition duration-200
        ${
          active
            ? "bg-[#FFF9D8]"
            : "hover:bg-[#FFF9D8]"
        }
      `}
    >

      <div className="flex items-center justify-between gap-4">

        <div className="min-w-0">

          <p className="text-sm font-semibold text-[#21145F]">
            {title}
          </p>

          <p className="mt-1 text-xs leading-5 text-[#817D8C]">
            {description}
          </p>

        </div>

        <span
          className={`
            shrink-0 text-lg text-[#C99A00]
            transition duration-200
            ${
              active
                ? "translate-x-0 opacity-100"
                : "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            }
          `}
          aria-hidden="true"
        >
          →
        </span>

      </div>

    </Link>
  );
}


/* =========================================================
   MOBILE LINK
========================================================= */

function MobileLink({
  href,
  label,
  active = false,
  onClick,
}: {
  href: string;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`
        border-b border-[#EEEAE0]
        py-4 text-sm font-medium
        transition duration-200
        ${
          active
            ? "font-semibold text-[#21145F]"
            : "text-[#403B52] hover:text-[#C99A00]"
        }
      `}
    >
      {label}
    </Link>
  );
}


/* =========================================================
   MOBILE DROPDOWN BUTTON
========================================================= */

function MobileDropdownButton({
  label,
  open,
  active,
  onClick,
}: {
  label: string;
  open: boolean;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-haspopup="true"
      className={`
        flex items-center justify-between
        border-b border-[#EEEAE0]
        py-4 text-left text-sm font-medium
        transition duration-200
        ${
          active
            ? "font-semibold text-[#21145F]"
            : "text-[#403B52]"
        }
      `}
    >

      {label}

      <svg
        className={`
          h-4 w-4 shrink-0
          transition-transform duration-300
          ${open ? "rotate-180" : ""}
        `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m6 9 6 6 6-6"
        />

      </svg>

    </button>
  );
}