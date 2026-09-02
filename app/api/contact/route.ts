import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body =
      (await request.json()) as ContactPayload;

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    /* =====================================================
       VALIDASI FIELD
    ===================================================== */

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Semua field wajib diisi.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       VALIDASI PANJANG DATA
    ===================================================== */

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Nama terlalu panjang.",
        },
        { status: 400 }
      );
    }

    if (email.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Email terlalu panjang.",
        },
        { status: 400 }
      );
    }

    if (subject.length > 200) {
      return NextResponse.json(
        {
          success: false,
          message: "Subjek terlalu panjang.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Pesan terlalu panjang.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       VALIDASI FORMAT EMAIL
    ===================================================== */

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format email tidak valid.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       SIMPAN KE DATABASE
    ===================================================== */

    const contact = await prisma.pesanKontak.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    /* =====================================================
       RESPONSE
    ===================================================== */

    return NextResponse.json(
      {
        success: true,
        message: "Pesan berhasil disimpan.",
        id: contact.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "CONTACT_API_ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Terjadi kesalahan pada server.",
      },
      { status: 500 }
    );
  }
}