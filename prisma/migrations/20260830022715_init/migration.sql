-- CreateTable
CREATE TABLE "Pendaftar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomorPendaftaran" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "graduationYear" TEXT NOT NULL,
    "documentName" TEXT,
    "documentPath" TEXT,
    "status" TEXT NOT NULL DEFAULT 'MENUNGGU_VERIFIKASI',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pendaftar_nomorPendaftaran_key" ON "Pendaftar"("nomorPendaftaran");
