export const university = {
  // =========================================================
  // BRAND
  // =========================================================

  brandName: "Universitas Mandala Bhakti",

  /**
   * Nama kelembagaan yang digunakan oleh institusi saat ini.
   * Website menggunakan "Universitas Mandala Bhakti" sebagai
   * identitas pengembangan/branding sesuai kebutuhan proyek.
   */
  officialInstitutionName:
    "Akademi Pariwisata Mandala Bhakti Surakarta",

  shortName: "AMBS",

  // =========================================================
  // LOCATION & HISTORY
  // =========================================================

  city: "Surakarta",
  province: "Jawa Tengah",

  establishedYear: 1995,

  // =========================================================
  // INSTITUTIONAL FOCUS
  // =========================================================

  focus: [
    "Perhotelan",
    "Pariwisata",
    "Pengembangan sumber daya manusia",
  ],

  officialIdentityNote:
    "Universitas Mandala Bhakti merupakan identitas pengembangan website institusi. Secara kelembagaan, institusi saat ini dikenal sebagai Akademi Pariwisata Mandala Bhakti Surakarta.",

  // =========================================================
  // VISION
  // =========================================================

  vision:
    "Menjadi pusat pendidikan, penelitian dan pengabdian pada masyarakat dibidang pariwisata yang unggul dan mampu bersaing di tingkat Nasional pada tahun 2035.",

  // =========================================================
  // MISSIONS
  // =========================================================

  missions: [
    "Menyelenggarakan pendidikan yang memiliki kompetensi unggul di bidang perhotelan dan pariwisata.",

    "Menyelenggarakan pendidikan yang unggul dengan mengembangkan teknologi perhotelan dan pariwisata.",

    "Menyelenggarakan penelitian dan pengabdian yang mendukung pembangunan nasional, pengembangan kehidupan bermasyarakat dan kebudayaan bangsa.",
  ],

  // =========================================================
  // GOALS
  // =========================================================

  goals: [
    "Menghasilkan lulusan yang memiliki kompetensi unggul di bidang perhotelan dan pariwisata.",

    "Menghasilkan lulusan yang unggul dalam mengembangkan teknologi perhotelan dan pariwisata.",

    "Menghasilkan penelitian dan pengabdian yang mendukung pembangunan nasional, pengembangan kehidupan bermasyarakat dan kebudayaan bangsa.",
  ],

  // =========================================================
  // PROGRAM STUDIES
  // =========================================================

  programs: [
    {
      code: "D3",
      name: "Perhotelan",

      /**
       * Program yang memang tersedia pada institusi.
       */
      official: true,

      status: "Program resmi",

      description:
        "Program studi yang mempersiapkan tenaga profesional di bidang perhotelan melalui integrasi teori, praktik, dan pengalaman industri.",

      /**
       * Jangan mengisi status akreditasi sebelum ada
       * sumber resmi yang kita verifikasi.
       */
      accreditation: null,
    },

    {
      code: "S1",
      name: "Informatika",

      /**
       * Dipertahankan sesuai arah pengembangan website,
       * tetapi BUKAN program studi resmi yang sudah dibuka.
       */
      official: false,

      status: "Dalam pengembangan/pengajuan",

      description:
        "Program studi yang dipersiapkan dalam pengembangan Universitas Mandala Bhakti untuk bidang informatika dan teknologi digital.",

      accreditation: null,
    },
  ],

  // =========================================================
  // FACILITIES
  // =========================================================

  facilities: [
    "Front Office Lab",
    "Housekeeping Lab",
    "Food & Beverage Service Lab",
    "Production Kitchen",
    "Barista Corner",
    "Ruang praktik berbasis industri",
  ],

  // =========================================================
  // ACADEMIC HIGHLIGHTS
  // =========================================================

  academicHighlights: [
    "Pembelajaran terintegrasi antara teori dan praktik",

    "Pengalaman kerja praktik di industri",

    "Pengembangan kompetensi profesional",

    "Kurikulum yang relevan dengan kebutuhan industri",

    "Pengalaman industri internasional",
  ],

  // =========================================================
  // STUDENT ACTIVITIES
  // =========================================================

  studentActivities: [
    "Badan Eksekutif Mahasiswa (BEM)",

    "Kegiatan akademik dan non-akademik",

    "Kuliah Kerja Nyata (KKN)",

    "Pengembangan kepemimpinan mahasiswa",

    "Kegiatan sosial dan kemasyarakatan",
  ],

  // =========================================================
  // CONTACT
  // =========================================================

  contact: {
    address:
      "Jalan Letjen Suprapto No. 16, Sumber, Surakarta",

    phone: "0271-714813",

    email: "ambs@mandalabhakti.ac.id",
  },

  // =========================================================
  // SOCIAL MEDIA
  // =========================================================

  socialMedia: {
    instagram: "akpartamabha",
    tiktok: "ambs_official1",
    youtube: "AMBS Official",
  },
} as const;