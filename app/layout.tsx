import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Universitas Mandala Bhakti",
  description:
    "Website resmi Universitas Mandala Bhakti - Pendidikan unggul, inovatif, dan berdaya saing global.",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className="bg-[#FFFDF5] text-[#211B4B] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}