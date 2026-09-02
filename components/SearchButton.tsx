"use client";

import Link from "next/link";

export default function SearchButton() {
  return (
    <Link
      href="/pencarian"
      aria-label="Cari informasi"
      title="Cari informasi"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD8C9] text-[#21145F] transition hover:border-[#C99A00] hover:bg-[#FFF9D9]"
    >
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
          d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
    </Link>
  );
}