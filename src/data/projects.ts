export type TechCategory = {
  category: string
  items: string[]
}

export type Integration = {
  name: string
  purpose: string
  type: "ai" | "payment" | "storage" | "email" | "monitoring" | "database" | "infra" | "realtime"
}

export type Feature = {
  title: string
  description: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  role: string
  period: string
  status: "production" | "internal" | "archived"
  category: "platform" | "api" | "frontend" | "infra" | "tool"
  highlights: string[]
  techStack: TechCategory[]
  integrations: Integration[]
  features: Feature[]
  architecture: string
  metrics: { label: string; value: string }[]
  repoPath: string
  color: string
}

export const projects: Project[] = [
  {
    slug: "astrnt-dashboard-v2",
    title: "ASTRNT Dashboard v2",
    subtitle: "Platform SaaS Rekrutmen Full-Stack Berbasis AI",
    description:
      "Platform rekrutmen SaaS enterprise yang dibangun ulang dari nol dengan Next.js 15, React 19, TypeScript, dan multi-LLM integration. Menangani seluruh siklus rekrutmen end-to-end: AI job generation, campaign management, video interview assessment, proctoring, AI candidate matching, talent pools, review collaboration, bulk import, engagement sequences, dan credit-based billing via Stripe — semuanya dalam satu monolith yang dioptimasi untuk skala enterprise.",
    role: "Lead Frontend & Full-Stack Engineer",
    period: "2024 – 2026",
    status: "production",
    category: "platform",
    highlights: [
      "Multi-LLM integration (Claude, Gemini, OpenAI) dengan key rotation otomatis saat rate limit — zero downtime",
      "383+ API routes, 24 scheduled cron jobs via GitHub Actions, background queue dengan atomic job claiming",
      "128 Cypress E2E specs + Vitest unit test wajib 80% coverage — mandatory gate sebelum setiap merge",
      "AI Job Generator: recruiter cukup deskripsikan posisi, Claude generate job posting lengkap dengan pertanyaan interview",
      "Review System multi-layer: swipe interface, deep review, public sharing via token, batch decision, @mention comments",
      "Proctoring (anti-cheat) per kandidat, MCQ auto-disqualify, progressive profiling, personalized questions",
      "Talent Pool management: kumpulkan kandidat lintas job, matching, assign ke job/review baru",
      "Competency Framework builder: buat framework, tambah kompetensi + indikator, publish, link ke job",
    ],
    techStack: [
      {
        category: "Framework & Runtime",
        items: ["Next.js 15 (App Router)", "React 19", "TypeScript 5", "Node.js 24"],
      },
      {
        category: "Styling & UI",
        items: ["Tailwind CSS 3", "shadcn/ui", "Radix UI", "Lucide React", "TipTap (rich text editor)", "@dnd-kit (drag & drop)"],
      },
      {
        category: "Database & ORM",
        items: ["MySQL / MariaDB", "Prisma ORM 7", "@prisma/adapter-mariadb", "Redis (ioredis)", "MongoDB (opsional)"],
      },
      {
        category: "AI & Machine Learning",
        items: ["@anthropic-ai/sdk (Claude)", "@google/generative-ai (Gemini)", "openai SDK", "@xenova/transformers (local inference)"],
      },
      {
        category: "Document Processing",
        items: ["pdf-parse (PDF extraction)", "mammoth (DOCX/Word)", "exceljs", "xlsx", "jszip", "react-pdf (PDF viewer)"],
      },
      {
        category: "Communication",
        items: ["@sendgrid/mail", "nodemailer (SMTP fallback)", "Twilio (SMS/Voice)", "WhatsApp webhook"],
      },
      {
        category: "Auth & Security",
        items: ["bcryptjs", "jsonwebtoken (JWT)", "Microsoft SSO (OAuth)", "isomorphic-dompurify (XSS)", "Zod (validation)"],
      },
      {
        category: "Monitoring & Testing",
        items: ["Sentry (@sentry/nextjs)", "Vitest 4 (unit)", "Cypress 15 (E2E)", "Playwright (automation)"],
      },
      {
        category: "Payment",
        items: ["Stripe v22 SDK", "Stripe Checkout Sessions", "Stripe Webhooks"],
      },
      {
        category: "Infrastructure & Storage",
        items: ["Docker", "Azure Blob Storage + SAS token", "GitHub Actions (CI/CD + cron)", "Azure Pipelines (deploy)"],
      },
    ],
    integrations: [
      { name: "Anthropic Claude", purpose: "Job generation, CV enrichment, candidate scoring, AI feedback", type: "ai" },
      { name: "Google Gemini", purpose: "Fallback LLM untuk matching & rekomendasi", type: "ai" },
      { name: "OpenAI GPT", purpose: "Third fallback LLM provider", type: "ai" },
      { name: "Stripe", purpose: "Credit-based billing, Checkout Sessions, Webhooks", type: "payment" },
      { name: "SendGrid", purpose: "Transactional & campaign email delivery", type: "email" },
      { name: "Twilio", purpose: "SMS notifications, voice, WhatsApp webhook", type: "email" },
      { name: "Microsoft SSO", purpose: "Enterprise single sign-on via OAuth", type: "infra" },
      { name: "Azure Blob Storage", purpose: "CV, video, media, document storage + SAS URL", type: "storage" },
      { name: "Sentry", purpose: "Error tracking, performance monitoring, Web Vitals", type: "monitoring" },
      { name: "Redis", purpose: "Rate limiting, enrichment cache, session state, queue", type: "database" },
      { name: "MongoDB", purpose: "AI generation log storage (opsional)", type: "database" },
      { name: "ESP Webhook", purpose: "Email delivery event tracking (open, click, bounce)", type: "email" },
    ],
    features: [
      {
        title: "AI Job Generator",
        description:
          "Recruiter mendeskripsikan posisi dalam bahasa natural, Claude meng-generate job posting lengkap: deskripsi, requirements, dan pertanyaan interview. Hasil bisa di-edit, di-accept, di-reject, atau di-regenerate. Log setiap generasi disimpan untuk audit.",
      },
      {
        title: "Multi-Step Job Creation Wizard",
        description:
          "Flow 8 langkah: describe → details → pipeline stages → profile setup → review → publish. Termasuk draft auto-save, clone job, custom pipeline stages (drag-reorder), welcome video upload, landing page customization, dan anonymous mode.",
      },
      {
        title: "Campaign Management System",
        description:
          "Buat campaign per job dengan lifecycle penuh: draft → validate → launch → pause → resume → cancel. Fitur: duplicate campaign, per-channel configuration, smart-send (5 menit cron), cascade retry, automated reminders, bounce alerts, email history tracking dengan export.",
      },
      {
        title: "Candidate Profile & Review",
        description:
          "Profil kandidat menyeluruh: jawaban video/teks, dokumen, riwayat pendidikan & pekerjaan, skills, achievements, notes, dan email history. Scoring per section, voting system, proctoring evidence, generate ART PDF dan Special PDF laporan.",
      },
      {
        title: "Review Collaboration System",
        description:
          "Multi-user review dengan swipe interface (kanan/kiri), deep review mode, batch decision, bookmark kandidat, komentar dengan @mention anggota tim, undo keputusan, sesi review dengan timer dan summary, serta public sharing via token untuk stakeholder eksternal.",
      },
      {
        title: "Bulk Import dengan Duplicate Resolution",
        description:
          "Import kandidat via CSV/Excel dengan column mapping yang bisa disimpan sebagai profil. Validasi baris per baris, tampilkan error rows, deteksi duplikat (single + batch resolution), dan progress tracking real-time. CV batch import dengan AI enrichment queue.",
      },
      {
        title: "Talent Pool Management",
        description:
          "Kumpulkan kandidat terbaik lintas job ke dalam talent pools. Fitur: AI matching per pool, check availability, assign ke job aktif, assign ke review session, dan overlap detection antar pool.",
      },
      {
        title: "Assessment Interview Builder",
        description:
          "Buat assessment interview custom dengan pertanyaan video/audio/dokumen. Upload media langsung ke Azure Blob Storage. Preview QnA sebelum publish, test send ke email, dan assign ke multiple jobs.",
      },
      {
        title: "Competency Framework Builder",
        description:
          "Buat framework kompetensi custom: tambah kompetensi, definisikan indicators per kompetensi, drag-reorder, publish. Framework bisa di-link ke job untuk scoring yang konsisten dan terstandar.",
      },
      {
        title: "24 Scheduled Cron Jobs",
        description:
          "Sistem automation via GitHub Actions: smart-send (5 min), cascade retry, reminders, notification-processor (1 min), sequence-processor & triggers, recommendation-availability, MCQ auto-disqualify, candidate-spotlight-digest, early-signal-digest, no-applicants-digest, job-deadline-alerts, cleanup-drafts, expire-demos, dan lebih banyak lagi.",
      },
      {
        title: "Background Job Queue System",
        description:
          "bg_transactions table sebagai persistent queue: atomic claiming mencegah race condition, priority-based processing, stale job recovery (timeout 30 menit), progress tracking via processed_data counter. Dipakai untuk import, CV enrichment, bulk retake, dan matching.",
      },
      {
        title: "Credit-Based Billing (Stripe)",
        description:
          "Monetisasi berbasis kredit: Stripe Checkout Session, webhook handling untuk payment confirmation, credit expiry tracking, automated alerts (warning → critical → expired), credit usage per company, dan credit transaction per kandidat.",
      },
      {
        title: "Engagement Sequences",
        description:
          "Define automated multi-step communication workflows: email → delay → SMS → in-app notification. Sequence triggers otomatis berdasarkan event kandidat, processor berjalan tiap 30 menit.",
      },
      {
        title: "Fast Apply (Open Code)",
        description:
          "Kandidat apply via link open code tanpa akun recruiter. Flow: register → upload CV → CV parse otomatis → profile setup → progressive profiling questions. Dirancang untuk konversi tinggi di mobile.",
      },
      {
        title: "Interview Handoff Flow (/j/[code])",
        description:
          "Kandidat yang sudah di-invite mengakses interview via unique code. Flow: confirm → profile → upload dokumen → progressive profiling → finish. CV di-parse otomatis saat upload.",
      },
      {
        title: "Proctoring & Anti-Cheat",
        description:
          "Monitoring proctoring per kandidat per job: rekam aktivitas mencurigakan selama interview (tab switch, fullscreen exit, dll). Evidence tersimpan dan bisa di-review recruiter di halaman proctoring.",
      },
      {
        title: "Email Template Customization",
        description:
          "Recruiter bisa customize template email per job dengan rich text editor (TipTap). Placeholder detection untuk mencegah email terkirim dengan variabel yang belum diisi.",
      },
      {
        title: "Microsoft SSO & Multi-Company Auth",
        description:
          "Login via Microsoft OAuth untuk enterprise. Platform switch antar sistem ASTRNT, company switch untuk user yang join ke multiple company, support dashboard impersonation untuk CS team.",
      },
      {
        title: "Internal Admin Tools",
        description:
          "Halaman internal untuk ASTRNT team: AI API key management (rotasi key Claude), feature flags per company, IP blocking, question library, org setup, CDC company management, matching engine health check & cache clear.",
      },
      {
        title: "Email Open & Click Tracking",
        description:
          "Tracking email opens dan link clicks via pixel & redirect token (/api/track/open, /api/track/click). Data digunakan untuk campaign analytics dan engagement scoring.",
      },
      {
        title: "Notification Preferences & History",
        description:
          "User bisa set preferensi notifikasi per kategori (email/in-app). History notifikasi tersimpan, unsubscribe per kategori, dan opt-out global via email link.",
      },
    ],
    architecture:
      "Next.js Full-Stack Monolith dengan App Router. Server Components + Server Actions untuk form submissions; API Routes untuk REST endpoints, webhooks, dan cron triggers. Business logic di src/lib/ (265+ file) dan src/services/. Data access via Prisma ORM dengan raw SQL untuk query kritis. Background jobs: GitHub Actions trigger → POST /api/cron/* → enqueue ke bg_transactions → worker scripts (tsx) claim & proses. Redis untuk rate limiting dan cache. Azure Blob Storage untuk semua file/media dengan SAS token generation.",
    metrics: [
      { label: "API Routes", value: "383+" },
      { label: "Pages & Flows", value: "40+" },
      { label: "React Components", value: "186+" },
      { label: "Lib/Service Files", value: "265+" },
      { label: "Cron Jobs", value: "24" },
      { label: "E2E Test Specs", value: "128" },
      { label: "Unit Test Coverage", value: "≥80%" },
      { label: "LLM Providers", value: "3" },
    ],
    repoPath: "/Users/mac/Astrnt/astrnt-dashboard-v2",
    color: "from-blue-600 to-indigo-700",
  },
  {
    slug: "recruiter",
    title: "ASTRNT Recruiter (Main App)",
    subtitle: "Platform Rekrutmen Enterprise — Laravel + React SPA Skala Besar",
    description:
      "Backbone platform rekrutmen ASTRNT generasi pertama. Laravel monolith dengan Dingo API sebagai REST backend, melayani React SPA (416 JSX files, Redux + redux-saga) sebagai frontend. Menangani video interview, beragam jenis assessment psikometri, speech-to-text otomatis, video transcoding via FFmpeg, multiple payment gateway, multi-tenant client module, dan integrasi enterprise SSO — dalam satu platform yang sudah digunakan oleh perusahaan-perusahaan besar seperti Gojek, BCA, Sephora, Deloitte.",
    role: "Full-Stack Engineer",
    period: "2022 – 2024",
    status: "production",
    category: "platform",
    highlights: [
      "416 JSX files React SPA dengan Redux, redux-saga, redux-form, dan Storybook component library",
      "Google Cloud Speech-to-Text untuk auto-transkripsi jawaban video kandidat",
      "FFmpeg video transcoding + JWPlayer streaming untuk playback video interview",
      "Tesseract OCR untuk ekstraksi teks dari dokumen gambar",
      "Multi-payment gateway: Stripe (global) + Veritrans/Midtrans (Indonesia)",
      "SAML2 SSO untuk enterprise client (Gojek, BCA, dll) dengan custom auth flow",
      "8+ jenis assessment psikometri: ART, RIASEC, Creative Thinking, Writing Test, Reading Test, Values Reflection, dll",
      "Client-specific module per perusahaan: BCA, Gojek, Deloitte, Sephora, Homecredit, Ristekdikti, dll",
    ],
    techStack: [
      {
        category: "Backend Framework",
        items: ["Laravel (PHP 7.1+)", "Dingo API (versioned REST)", "JWT Auth (tymon/jwt-auth)", "nwidart/laravel-modules"],
      },
      {
        category: "Frontend",
        items: ["React 16", "Redux", "redux-saga", "redux-form", "Webpack 4", "Storybook", "Flow (type checker)"],
      },
      {
        category: "UI Components",
        items: ["Bootstrap 3", "Highcharts", "react-bootstrap-table", "react-dnd", "react-quill", "react-select", "sweetalert2"],
      },
      {
        category: "Database & Search",
        items: ["MySQL", "MongoDB (jenssegers/mongodb)", "Elasticsearch 2.x (elasticquent)", "Redis (predis)"],
      },
      {
        category: "Media & AI Processing",
        items: ["Google Cloud Speech (speech-to-text)", "php-ffmpeg (video transcoding)", "JWPlayer (video streaming)", "Tesseract OCR", "intervention/image", "getid3 (media metadata)"],
      },
      {
        category: "File & Storage",
        items: ["AWS S3 (league/flysystem-aws-s3-v3)", "Azure Blob Storage (flysystem-azure)", "pion/laravel-chunk-upload", "gerizal/laravel-stapler"],
      },
      {
        category: "PDF Generation",
        items: ["barryvdh/laravel-dompdf", "barryvdh/laravel-snappy", "wkhtmltopdf", "setasign/fpdf", "setasign/fpdi"],
      },
      {
        category: "Payment & Auth",
        items: ["Stripe (stripe-php)", "Veritrans/Midtrans (Indonesia)", "SAML2 SSO (aacotroneo/laravel-saml2)", "Hashids (vinkla/hashids)"],
      },
      {
        category: "Communication & Export",
        items: ["maatwebsite/excel", "league/csv", "php-mime-mail-parser", "Guzzle HTTP"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Azure Pipelines", "Foreman/Procfile", "Sentry (sentry/sentry-laravel)", "Nginx + PHP-FPM"],
      },
    ],
    integrations: [
      { name: "Google Cloud Speech", purpose: "Auto-transkripsi jawaban video kandidat ke teks", type: "ai" },
      { name: "Stripe", purpose: "Global payment & subscription enterprise", type: "payment" },
      { name: "Veritrans/Midtrans", purpose: "Payment gateway Indonesia", type: "payment" },
      { name: "SAML2 SSO", purpose: "Enterprise SSO untuk Gojek, BCA, dan klien besar lainnya", type: "infra" },
      { name: "JWPlayer", purpose: "Video streaming dan playback interview", type: "storage" },
      { name: "AWS S3", purpose: "Video, audio, dokumen storage", type: "storage" },
      { name: "Azure Blob Storage", purpose: "Secondary storage untuk media", type: "storage" },
      { name: "Elasticsearch", purpose: "Full-text search kandidat dan job", type: "database" },
      { name: "MongoDB", purpose: "Log dan data dokumen non-relasional", type: "database" },
      { name: "Redis", purpose: "Session, queue cache, rate limiting", type: "database" },
      { name: "Sentry", purpose: "Error tracking production", type: "monitoring" },
    ],
    features: [
      {
        title: "Video Interview dengan Speech-to-Text",
        description:
          "Kandidat merekam jawaban video yang di-stream via JWPlayer. Google Cloud Speech-to-Text secara otomatis men-transkripsi setiap jawaban menjadi teks untuk mempermudah review recruiter.",
      },
      {
        title: "8+ Jenis Assessment Psikometri",
        description:
          "Platform mendukung berbagai tes: Analytical Reasoning Test (ART), RIASEC career interest, Creative Thinking Assessment, Reading Test, Writing Test, Values Reflection Assessment, General Scoring, dan PsychoMetric. Setiap tes punya scoring engine sendiri.",
      },
      {
        title: "Multi-Tenant Client Modules",
        description:
          "Setiap klien enterprise (Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, dll) memiliki modul Laravel tersendiri dengan custom flow, branding, dan assessment khusus sesuai kebutuhan mereka.",
      },
      {
        title: "Video Transcoding via FFmpeg",
        description:
          "Video jawaban kandidat diproses oleh php-ffmpeg untuk konversi format, kompresi, dan thumbnail generation sebelum di-serve via JWPlayer. Mendukung chunk upload untuk file besar.",
      },
      {
        title: "PDF Report Generation",
        description:
          "Generate laporan PDF kandidat via multiple engine: DOMPDF, Snappy (wkhtmltopdf), dan FPDI. Mendukung custom PDF dengan branding klien, laporan assessment, dan export bulk.",
      },
      {
        title: "Proctoring & Anti-Cheat",
        description:
          "Sistem proctoring mendeteksi aktivitas mencurigakan: tab switch, fullscreen exit, copy-paste. Evidence direkam dan tersedia untuk review recruiter di halaman proctoring.",
      },
      {
        title: "Talent Pool & Team Management",
        description:
          "Recruiter bisa kumpulkan kandidat terbaik ke Talent Pool, assign hiring team member ke job, dan set permission per member untuk akses review.",
      },
      {
        title: "Competency Generation",
        description:
          "Generate kompetensi yang relevan untuk sebuah posisi secara otomatis berdasarkan job description dan industri.",
      },
      {
        title: "Multi-Payment Gateway",
        description:
          "Mendukung Stripe untuk klien global dan Veritrans/Midtrans untuk klien Indonesia. Payment management, invoice, dan subscription handling per klien.",
      },
      {
        title: "SAML2 Enterprise SSO",
        description:
          "Enterprise client bisa login via SSO perusahaan mereka masing-masing menggunakan SAML2. Custom IdP configuration per klien (Gojek, BCA, dll).",
      },
      {
        title: "Excel & CSV Import/Export",
        description:
          "Import kandidat massal via Excel (maatwebsite/excel), export laporan ke CSV (league/csv), dan export data kandidat dengan format yang bisa dikustomisasi per klien.",
      },
      {
        title: "Tesseract OCR untuk Dokumen",
        description:
          "Ekstraksi teks otomatis dari dokumen berupa gambar (foto KTP, ijazah, sertifikat) menggunakan Tesseract OCR untuk verifikasi dan pengisian profil kandidat.",
      },
    ],
    architecture:
      "Laravel monolith dengan nwidart/laravel-modules untuk isolasi per domain/klien. Dingo API untuk versioned REST endpoints, JWT Auth untuk stateless authentication. React SPA (416 JSX files) dibangun dengan Webpack 4, state management via Redux + redux-saga. Media pipeline: upload → AWS S3/Azure → FFmpeg transcoding → JWPlayer streaming. Speech-to-text via Google Cloud Speech API. PDF via multiple engine (DOMPDF, Snappy, FPDI).",
    metrics: [
      { label: "React JSX Files", value: "416" },
      { label: "PHP Controllers", value: "60+" },
      { label: "Laravel Modules", value: "15+" },
      { label: "Assessment Types", value: "8+" },
      { label: "Client Modules", value: "12+" },
      { label: "PHP Packages", value: "35+" },
    ],
    repoPath: "/Users/mac/Astrnt/recruiter",
    color: "from-purple-600 to-violet-700",
  },
  {
    slug: "api-qna",
    title: "API QnA",
    subtitle: "Backend API Platform Interview Asynchronous — Laravel Full-Featured",
    description:
      "Laravel API backend yang melayani seluruh kebutuhan platform interview asynchronous ASTRNT. Kandidat menjawab pertanyaan video/audio/teks/MCQ/dokumen secara mandiri kapan saja. Backend menangani session management, media upload dan transcoding, speech-to-text otomatis, multiple assessment types (ART, RIASEC, Creative Thinking), proctoring, PDF report generation, dan sinkronisasi data dengan platform recruiter. Stack identik dengan Recruiter namun fokus pada candidate-facing interview flow.",
    role: "Backend Engineer",
    period: "2022 – 2024",
    status: "production",
    category: "api",
    highlights: [
      "Google Cloud Speech-to-Text untuk auto-transkripsi jawaban video kandidat",
      "FFmpeg video transcoding + JWPlayer streaming untuk playback interview",
      "5+ jenis assessment: ART, RIASEC, Creative Thinking, General Scoring, Values Reflection",
      "Chunk upload untuk video besar + AWS S3 / Azure Blob dual storage",
      "Proctoring evidence tracking per sesi interview",
      "OTP authentication untuk kandidat tanpa akun",
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Laravel (PHP)", "Dingo API", "JWT Auth (tymon/jwt-auth)", "nwidart/laravel-modules"],
      },
      {
        category: "Media & AI",
        items: ["Google Cloud Speech (speech-to-text)", "php-ffmpeg (transcoding)", "JWPlayer (streaming)", "Tesseract OCR", "intervention/image"],
      },
      {
        category: "Database & Storage",
        items: ["MySQL", "MongoDB (jenssegers/mongodb)", "Elasticsearch", "Redis (predis)", "AWS S3", "Azure Blob Storage"],
      },
      {
        category: "Document & Export",
        items: ["barryvdh/laravel-dompdf", "barryvdh/laravel-snappy", "setasign/fpdi", "maatwebsite/excel", "league/csv"],
      },
      {
        category: "Infrastructure",
        items: ["Azure Pipelines", "Docker", "Sentry", "CORS (fruitcake/laravel-cors)", "Nginx"],
      },
    ],
    integrations: [
      { name: "Google Cloud Speech", purpose: "Auto-transkripsi video jawaban kandidat", type: "ai" },
      { name: "AWS S3", purpose: "Primary video & document storage", type: "storage" },
      { name: "Azure Blob Storage", purpose: "Secondary media storage", type: "storage" },
      { name: "JWPlayer", purpose: "Video streaming dan playback", type: "storage" },
      { name: "MongoDB", purpose: "Log dan dokumen non-relasional", type: "database" },
      { name: "Redis", purpose: "Queue, session cache", type: "database" },
      { name: "Sentry", purpose: "Error tracking production", type: "monitoring" },
    ],
    features: [
      {
        title: "Async Interview Session Management",
        description: "Kandidat mendapat link unik dengan kode interview. Backend melacak progress tiap section, status jawaban, dan completion state secara real-time.",
      },
      {
        title: "Multi-Type Question Answering",
        description: "Mendukung berbagai tipe jawaban: video recording, audio recording, teks bebas (freetext), MCQ, rating scale, dan upload dokumen — semua dalam satu sesi interview.",
      },
      {
        title: "Speech-to-Text Otomatis",
        description: "Setiap jawaban video di-transkripsi secara otomatis oleh Google Cloud Speech API. Transkrip tersimpan dan bisa digunakan recruiter untuk review tanpa harus menonton video.",
      },
      {
        title: "Video Transcoding Pipeline",
        description: "Upload video kandidat → FFmpeg transcoding untuk kompres & format standar → simpan di S3/Azure → stream via JWPlayer. Chunk upload untuk file besar (pion/laravel-chunk-upload).",
      },
      {
        title: "5+ Assessment Psikometri",
        description: "Mendukung Analytical Reasoning Test (ART), RIASEC career interest, Creative Thinking Assessment, General Scoring, Values Reflection Assessment. Scoring engine per tipe tes.",
      },
      {
        title: "Proctoring Evidence Recording",
        description: "Merekam bukti proctoring selama sesi interview (tab switch, kamera, dll) dan menyimpannya untuk ditinjau recruiter.",
      },
      {
        title: "PDF Report Generation",
        description: "Generate laporan hasil assessment per kandidat dalam format PDF via DOMPDF, Snappy, dan FPDI. Mendukung custom branding per klien.",
      },
    ],
    architecture:
      "Laravel monolith dengan nwidart/laravel-modules (Astronaut, AssessmentContent, JobLanding, TDL, Ecourse modules). Dingo API untuk REST versioning, JWT Auth stateless. Media pipeline: chunk upload → S3/Azure → FFmpeg transcoding → JWPlayer streaming. Speech-to-text via Google Cloud Speech API. PDF via multi-engine. Elasticsearch untuk search, Redis untuk queue.",
    metrics: [
      { label: "API Endpoints", value: "80+" },
      { label: "Laravel Modules", value: "6" },
      { label: "Assessment Types", value: "5+" },
      { label: "PHP Packages", value: "30+" },
    ],
    repoPath: "/Users/mac/Astrnt/api-qna",
    color: "from-emerald-600 to-teal-700",
  },
  {
    slug: "qna-web",
    title: "QnA Web",
    subtitle: "Aplikasi Interview Asynchronous — Candidate-Facing React SPA",
    description:
      "React SPA (320 JS/JSX files) yang menjadi antarmuka utama kandidat dalam mengikuti sesi interview asynchronous ASTRNT. Mendukung 6 tipe pertanyaan: video recording (WebRTC + RecordRTC), audio recording, teks bebas, MCQ, rating scale, dan upload dokumen. Dilengkapi OTP authentication, pre-interview device check, proctoring monitoring, session recovery via localforage, real-time progress tracking via Socket.io, dan activity logging custom.",
    role: "Frontend Engineer",
    period: "2022 – 2024",
    status: "production",
    category: "frontend",
    highlights: [
      "RecordRTC + WebRTC untuk recording video/audio langsung di browser tanpa plugin",
      "6 tipe pertanyaan: video, audio, freetext, MCQ, rating scale, document upload",
      "OTP authentication flow untuk kandidat tanpa akun",
      "Session recovery via localforage — kandidat bisa lanjut dari titik terakhir jika browser crash",
      "Pre-interview device check via DetectRTC (kamera, mikrofon, koneksi internet)",
      "Real-time progress dan countdown timer via Socket.io",
    ],
    techStack: [
      {
        category: "Frontend Framework",
        items: ["React", "Redux", "redux-saga", "redux-thunk", "immutable.js", "Webpack"],
      },
      {
        category: "Media & Recording",
        items: ["RecordRTC (video/audio recording)", "WebRTC / hark (audio detection)", "DetectRTC (device & connection check)", "react-image-lightbox"],
      },
      {
        category: "Real-time & Storage",
        items: ["Socket.io-client (real-time events)", "localforage (offline/session recovery)", "AWS Amplify", "AWS SDK Mobile Analytics"],
      },
      {
        category: "Logging & Monitoring",
        items: ["@sentry/react", "astrnt-web-logger (custom logger)", "qna-activity-log (activity tracker)", "ping.js (connection check)"],
      },
      {
        category: "UI & UX",
        items: ["Bootstrap", "reactstrap", "styled-components", "react-circular-progressbar", "rc-progress", "react-slick", "sweetalert2", "react-tooltip"],
      },
    ],
    integrations: [
      { name: "AWS Amplify", purpose: "Candidate authentication & session management", type: "infra" },
      { name: "Socket.io", purpose: "Real-time progress sync dan countdown timer", type: "realtime" },
      { name: "Sentry", purpose: "Production error tracking & monitoring", type: "monitoring" },
      { name: "AWS SDK Mobile Analytics", purpose: "Usage analytics kandidat", type: "monitoring" },
    ],
    features: [
      {
        title: "Multi-Type Question Answering Interface",
        description: "UI lengkap untuk 6 tipe soal: video interview (record + playback preview), audio recording, freetext dengan rich editor, MCQ pilihan ganda, rating scale slider, dan document upload dengan preview.",
      },
      {
        title: "Browser Video & Audio Recording (RecordRTC)",
        description: "Video dan audio direkam langsung di browser via RecordRTC + WebRTC API tanpa perlu install plugin. Mendukung countdown timer per pertanyaan, retry recording, dan preview sebelum submit.",
      },
      {
        title: "OTP Authentication Flow",
        description: "Kandidat masuk via OTP yang dikirim ke email/HP — tanpa perlu buat akun. Aman dan friction-minimal untuk konversi maksimal.",
      },
      {
        title: "Pre-Interview Device Check",
        description: "DetectRTC memvalidasi ketersediaan kamera, mikrofon, dan kecepatan koneksi sebelum sesi dimulai. Kandidat diberi panduan troubleshooting jika ada masalah.",
      },
      {
        title: "Session Recovery via localforage",
        description: "Progress interview disimpan lokal menggunakan localforage. Jika browser crash atau koneksi terputus, kandidat bisa lanjut dari pertanyaan terakhir tanpa kehilangan jawaban.",
      },
      {
        title: "Real-time Progress via Socket.io",
        description: "Status progres kandidat di-sync secara real-time ke server via Socket.io. Countdown timer dan section progress diupdate live.",
      },
      {
        title: "Activity & Event Logging",
        description: "Setiap aksi kandidat (mulai rekam, submit, pause, dll) dicatat oleh qna-activity-log dan astrnt-web-logger untuk audit trail dan proctoring evidence.",
      },
    ],
    architecture:
      "React SPA dengan Redux + redux-saga untuk async state management. 320 JS/JSX files mencakup pages (home, sessions, interviews, mcqs, freetext, rating_scale, document, sections, otp, errors), components, sagas, reducers, dan selectors. Recording via RecordRTC, storage via AWS Amplify, real-time via Socket.io client.",
    metrics: [
      { label: "JS/JSX Files", value: "320" },
      { label: "Question Types", value: "6" },
      { label: "Redux Sagas", value: "20+" },
      { label: "Pages/Flows", value: "11" },
    ],
    repoPath: "/Users/mac/Astrnt/qna-web",
    color: "from-sky-600 to-cyan-700",
  },
  {
    slug: "public-web",
    title: "Public Web",
    subtitle: "Website Publik & Marketing Site ASTRNT — Dual React Architecture",
    description:
      "Website publik ASTRNT yang melayani halaman marketing, landing page produk, blog, developer portal, dan job-specific landing pages. Dibangun sebagai dua komponen React terpisah (component_public & component_job_landing) yang di-build independen lalu di-serve dalam satu Express.js server. Multi-environment build untuk AWS (production) dan Azure (staging/beta) dengan env vars yang berbeda per target.",
    role: "Frontend Engineer",
    period: "2022 – 2023",
    status: "production",
    category: "frontend",
    highlights: [
      "Dual React app architecture — public site + job landing page sebagai komponen independen",
      "Single Express.js server melayani dua build React dari folder berbeda",
      "Multi-environment CI build: AWS production vs Azure staging dengan env vars terpisah",
      "Google Analytics (react-ga) untuk tracking traffic dan konversi",
      "Styled Components untuk theming konsisten di seluruh site",
      "Route-based job landing page — tiap job punya URL dan konten tersendiri",
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "Styled Components", "react-ga (Google Analytics)", "js-cookie"],
      },
      {
        category: "Server",
        items: ["Express.js", "Node.js", "npm-run-all"],
      },
      {
        category: "Infrastructure",
        items: ["AWS (production deploy)", "Azure (staging/beta deploy)"],
      },
    ],
    integrations: [
      { name: "Google Analytics", purpose: "Traffic, halaman yang dikunjungi, dan konversi Apply", type: "monitoring" },
    ],
    features: [
      {
        title: "Dual React App Architecture",
        description: "component_public (marketing site) dan component_job_landing (job-specific pages) di-build secara independen dengan Webpack, lalu di-serve bersama via satu Express.js server — memungkinkan deployment partial tanpa rebuild keduanya.",
      },
      {
        title: "Job-Specific Landing Pages",
        description: "Setiap job posting punya landing page tersendiri dengan URL unik, deskripsi job, dan tombol Apply yang terhubung ke flow QnA interview.",
      },
      {
        title: "Multi-Environment Build Pipeline",
        description: "Script build terpisah untuk AWS (astrnt.co) dan Azure (beta.astrnt.co) dengan REACT_APP_* env vars berbeda: API host, QnA host, EU host, Node host, Python host.",
      },
    ],
    architecture:
      "Dua React app (component_public + component_job_landing) di-build terpisah dengan npm-run-all. Express.js server melayani static build dari FOLDER_PUBLIC dan FOLDER_JOB_LANDING env vars. Deploy ke AWS (prod) dan Azure (staging) via CI pipeline.",
    metrics: [
      { label: "React Apps", value: "2" },
      { label: "Build Targets", value: "AWS + Azure" },
      { label: "Deploy Environments", value: "2 (prod + staging)" },
    ],
    repoPath: "/Users/mac/Astrnt/public-web",
    color: "from-orange-500 to-amber-600",
  },
  {
    slug: "support-dashboard",
    title: "Support Dashboard",
    subtitle: "Internal Tool CS Team — React SPA untuk Monitoring & Troubleshooting",
    description:
      "React SPA (130 JS files) internal yang digunakan tim Customer Support ASTRNT untuk memonitor akun klien, investigasi masalah kandidat, dan mengelola data platform. Dibangun dengan Create React App + custom Webpack config via react-app-rewired, Redux untuk state management, dan terhubung ke backend API ASTRNT dengan JWT authentication.",
    role: "Frontend Engineer",
    period: "2022 – 2023",
    status: "internal",
    category: "frontend",
    highlights: [
      "130 JS files React SPA — tools internal lengkap untuk CS team",
      "Redux + redux-saga untuk async state management",
      "Storybook untuk dokumentasi komponen internal",
      "Custom Webpack via react-app-rewired",
      "Docker + Azure Pipelines untuk deployment internal",
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "Redux", "redux-saga", "react-app-rewired", "Webpack"],
      },
      {
        category: "UI",
        items: ["Bootstrap", "Sass/SCSS", "Styled Components", "Storybook"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Docker Compose", "Azure Pipelines", "Nginx"],
      },
    ],
    integrations: [],
    features: [
      {
        title: "Account & Company Monitoring",
        description: "CS team bisa lihat status akun klien, kredit tersisa, quota penggunaan, konfigurasi company, dan aktivitas terakhir tanpa perlu akses langsung ke database.",
      },
      {
        title: "Candidate Troubleshooting",
        description: "Investigasi masalah kandidat: lihat status sesi interview, riwayat upload media, error log, dan reset sesi yang stuck.",
      },
      {
        title: "Internal Admin Actions",
        description: "CS team bisa melakukan tindakan admin seperti reset password, ubah status akun, dan verifikasi email klien langsung dari dashboard.",
      },
    ],
    architecture:
      "React SPA dengan Create React App + react-app-rewired untuk custom Webpack config. Redux + redux-saga untuk async state. Berkomunikasi dengan backend API ASTRNT via JWT token. Deployment via Docker + Azure Pipelines ke server internal.",
    metrics: [
      { label: "JS Files", value: "130" },
      { label: "Target Users", value: "CS Team Internal" },
    ],
    repoPath: "/Users/mac/Astrnt/support-dashboard",
    color: "from-rose-600 to-pink-700",
  },
  {
    slug: "university-dashboard",
    title: "University Dashboard",
    subtitle: "Platform Assessment Mahasiswa untuk Klien Universitas",
    description:
      "Laravel platform yang dirancang khusus untuk institusi akademik dalam mengelola assessment mahasiswa. Dilengkapi manajemen mahasiswa (student), event/ujian, job posting kampus, social login via Laravel Socialite, import data massal via Excel, laporan PDF, dan DataTables interaktif. Memiliki branding dan flow yang terpisah dari platform rekrutmen korporat.",
    role: "Full-Stack Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "platform",
    highlights: [
      "Social login via Laravel Socialite (Google, dll)",
      "DataTables server-side (yajra/laravel-datatables) untuk manajemen data mahasiswa skala besar",
      "Import mahasiswa massal dari Excel (maatwebsite/excel)",
      "PDF report generation via barryvdh/laravel-dompdf",
      "Azure Blob Storage untuk file & media mahasiswa",
      "Event management: buat, kelola, dan pantau ujian/assessment per batch",
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Laravel (PHP)", "MySQL", "Redis (predis)"],
      },
      {
        category: "Frontend",
        items: ["Blade Templates", "Bootstrap", "jQuery", "yajra/laravel-datatables-oracle"],
      },
      {
        category: "Auth & Integration",
        items: ["Laravel Socialite (social login)", "JWT Auth", "ezyang/htmlpurifier (XSS sanitize)"],
      },
      {
        category: "File & Storage",
        items: ["Azure Blob Storage (laravel-azure-storage)", "maatwebsite/excel", "barryvdh/laravel-dompdf"],
      },
      {
        category: "Infrastructure",
        items: ["Azure Pipelines", "Docker", "Nginx"],
      },
    ],
    integrations: [
      { name: "Laravel Socialite", purpose: "Social login untuk mahasiswa (Google, dll)", type: "infra" },
      { name: "Azure Blob Storage", purpose: "Penyimpanan file dan media mahasiswa", type: "storage" },
    ],
    features: [
      {
        title: "Student & Event Management",
        description: "Admin universitas bisa kelola data mahasiswa, buat event/ujian, assign mahasiswa ke event, dan pantau progress menggunakan DataTables server-side yang efisien untuk dataset besar.",
      },
      {
        title: "Social Login via Socialite",
        description: "Mahasiswa bisa login menggunakan akun Google (atau provider lain) tanpa perlu buat akun manual, mengurangi friction onboarding.",
      },
      {
        title: "Bulk Import via Excel",
        description: "Admin bisa import ribuan data mahasiswa sekaligus dari file Excel dengan validasi otomatis per baris.",
      },
      {
        title: "PDF Assessment Report",
        description: "Generate laporan hasil assessment per mahasiswa atau per batch dalam format PDF siap cetak untuk keperluan administrasi dan akreditasi.",
      },
      {
        title: "Job Posting Kampus",
        description: "Fitur khusus untuk universitas memposting lowongan kerja kampus (job board internal) yang hanya bisa diakses mahasiswa terdaftar.",
      },
      {
        title: "Brand Setup & Contact Request",
        description: "Universitas bisa setup branding (logo, warna) via BrandSetupController, dan mahasiswa bisa kirim contact request ke admin atau perusahaan mitra.",
      },
    ],
    architecture:
      "Laravel MVC monolith dengan Blade + Bootstrap untuk server-side rendering. DataTables server-side via yajra/laravel-datatables untuk performa pada data besar. Azure Blob Storage untuk file. PDF via DOMPDF. Social auth via Socialite. Deployment via Azure Pipelines.",
    metrics: [
      { label: "Controllers", value: "12" },
      { label: "Client Type", value: "Universitas" },
      { label: "Storage", value: "Azure Blob" },
    ],
    repoPath: "/Users/mac/Astrnt/university-dashboard",
    color: "from-lime-600 to-green-700",
  },
  {
    slug: "custom-landing-page",
    title: "Custom Landing Page",
    subtitle: "Branded Landing Page Multi-Klien Enterprise — Laravel Multi-Tenant",
    description:
      "Laravel multi-tenant application untuk custom landing page per klien enterprise ASTRNT. Setiap klien (Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, Kai, TalentBuzz, dll) mendapatkan landing page dengan branding, konten, dan domain tersendiri. Backend terhubung ke AWS S3 untuk media dan JWT Auth untuk integrasi API.",
    role: "Full-Stack Engineer",
    period: "2022 – 2023",
    status: "production",
    category: "platform",
    highlights: [
      "12+ client-specific modules: Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, Kai, TalentBuzz, dll",
      "Routing berbasis hostname — tiap request otomatis diarahkan ke konfigurasi klien yang sesuai",
      "AWS S3 untuk media dan asset per klien",
      "JWT Auth untuk integrasi dengan ASTRNT API backend",
      "SSL custom domain support per klien",
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Laravel (PHP)", "MySQL", "JWT Auth (tymon/jwt-auth)"],
      },
      {
        category: "Frontend",
        items: ["Blade Templates", "Bootstrap", "webpack.mix.js"],
      },
      {
        category: "Storage & API",
        items: ["AWS S3 (league/flysystem-aws-s3-v3)", "aws/aws-sdk-php", "Guzzle HTTP"],
      },
      {
        category: "Infrastructure",
        items: ["Azure Pipelines", "Nginx", "SSL per domain", "Docker"],
      },
    ],
    integrations: [
      { name: "AWS S3", purpose: "Media dan asset landing page per klien", type: "storage" },
      { name: "ASTRNT API", purpose: "Integrasi JWT Auth ke backend rekrutmen", type: "infra" },
    ],
    features: [
      {
        title: "12+ Client-Specific Modules",
        description: "Setiap klien enterprise memiliki modul controller tersendiri: Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, Kai, TalentBuzz, Google, GojekDemo, start4hire. Masing-masing bisa punya flow unik.",
      },
      {
        title: "Hostname-Based Multi-Tenant Routing",
        description: "Laravel middleware mendeteksi hostname dari request (gojek.astrnt.co, bca.astrnt.co, dll) dan secara otomatis mengarahkan ke konfigurasi dan controller klien yang sesuai.",
      },
      {
        title: "Per-Client Branding & Content",
        description: "Logo, warna brand, teks, dan media di-serve dari konfigurasi per klien. Update branding satu klien tidak mempengaruhi klien lain.",
      },
      {
        title: "Apply Flow Integration",
        description: "Kandidat yang mengklik Apply dari landing page langsung diarahkan ke sesi interview ASTRNT dengan konteks klien yang sudah terisi.",
      },
    ],
    architecture:
      "Laravel monolith dengan hostname-based routing sebagai layer multi-tenancy. Middleware mendeteksi domain → load konfigurasi klien → dispatch ke controller modul klien. AWS S3 untuk asset, JWT Auth untuk API calls ke backend rekrutmen. Custom SSL per domain via Nginx.",
    metrics: [
      { label: "Client Modules", value: "12+" },
      { label: "Multi-tenant Layer", value: "Hostname routing" },
      { label: "Storage", value: "AWS S3" },
    ],
    repoPath: "/Users/mac/Astrnt/custom-landing-page",
    color: "from-fuchsia-600 to-purple-700",
  },
  {
    slug: "popskul-frontend",
    title: "Popskul Frontend",
    subtitle: "Platform E-Learning & Karir — Nuxt.js SSR dengan Video Assessment",
    description:
      "Nuxt.js (Vue 2) SSR frontend untuk Popskul — platform yang menggabungkan e-learning, job marketplace, dan assessment berbasis kompetensi. Lebih dari sekedar job board: kandidat bisa ambil kursus, ikuti assessment (MCQ + FTQ + video recording), bookmark perusahaan favorit, daftar beasiswa, dan apply ke jobs — semua dalam satu platform dengan real-time via Socket.io dan video recording via videojs-record.",
    role: "Frontend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "frontend",
    highlights: [
      "45+ halaman Nuxt.js SSR — marketplace + e-learning + assessment terintegrasi",
      "videojs-record untuk video assessment langsung di browser",
      "nuxt-socket-io untuk real-time notifications dan progress",
      "vee-validate untuk form validation kompleks",
      "vue2-dropzone untuk upload file assessment",
      "Sitemap otomatis (@nuxtjs/sitemap) untuk SEO job listing",
    ],
    techStack: [
      {
        category: "Frontend Framework",
        items: ["Nuxt.js (Vue 2)", "Vue Router", "Vuex", "Bootstrap-Vue"],
      },
      {
        category: "Nuxt Modules",
        items: ["@nuxtjs/auth", "@nuxtjs/axios", "@nuxtjs/sentry", "@nuxtjs/sitemap", "nuxt-socket-io"],
      },
      {
        category: "Media & Forms",
        items: ["videojs-record (video assessment)", "vue2-dropzone (file upload)", "vee-validate (form validation)", "v-suggest (autocomplete)"],
      },
      {
        category: "UI Components",
        items: ["Bootstrap 4", "@fortawesome/fontawesome-free", "vue-select", "vue-ellipse-progress", "vue-unicons", "sweetalert2", "vue-button-spinner"],
      },
    ],
    integrations: [
      { name: "Sentry", purpose: "Frontend error monitoring & tracking", type: "monitoring" },
      { name: "Socket.io", purpose: "Real-time notifications dan progress tracking", type: "realtime" },
    ],
    features: [
      {
        title: "E-Learning Platform (Courses)",
        description: "Kandidat bisa browse, enroll, dan ikuti kursus online. Tracking progress per course, attempt management, dan completion certificate.",
      },
      {
        title: "Video Assessment via videojs-record",
        description: "Kandidat merekam jawaban video langsung di browser menggunakan videojs-record tanpa plugin. Terintegrasi dengan flow assessment MCQ dan FTQ.",
      },
      {
        title: "Job Marketplace dengan Company Profile",
        description: "Browse ribuan lowongan kerja dengan filter industri, lokasi, dan kategori. Profil perusahaan lengkap, bookmark perusahaan favorit, dan apply langsung.",
      },
      {
        title: "MCQ & FTQ Assessment",
        description: "Assessment berbasis MCQ (pilihan ganda) dan FTQ (free text question) dengan timer, progress tracking, dan auto-submit saat waktu habis.",
      },
      {
        title: "Program Beasiswa",
        description: "Kandidat bisa browse dan mendaftar program beasiswa dari institusi mitra Popskul.",
      },
      {
        title: "Real-time via Socket.io",
        description: "Notifikasi real-time untuk status assessment, update lowongan baru, dan progress kursus menggunakan nuxt-socket-io.",
      },
      {
        title: "SSR untuk SEO Optimal",
        description: "Semua halaman job listing, company profile, dan kursus di-render server-side via Nuxt.js untuk indeksasi maksimal di search engine. Sitemap otomatis di-generate per route.",
      },
    ],
    architecture:
      "Nuxt.js SSR dengan Vuex untuk state management. @nuxtjs/auth menangani JWT auth flow. nuxt-socket-io untuk koneksi real-time ke backend. videojs-record untuk browser-based video capture. @nuxtjs/sitemap auto-generate XML sitemap dari semua dynamic routes.",
    metrics: [
      { label: "Nuxt Pages", value: "45+" },
      { label: "Vue Components", value: "80+" },
      { label: "Platform Features", value: "Jobs + Courses + Assessment" },
    ],
    repoPath: "/Users/mac/Astrnt/popskul-frontend",
    color: "from-violet-600 to-indigo-700",
  },
  {
    slug: "popskul-backend",
    title: "Popskul Backend",
    subtitle: "API Backend E-Learning & Career Platform — Laravel Full-Featured",
    description:
      "Laravel backend yang melayani seluruh kebutuhan platform Popskul: e-learning (courses, attempts, progress), job board, assessment (MCQ + FTQ), media management, company profiles, dan user management. Dibangun dengan arsitektur API-first menggunakan Laravel resource controllers dengan cron jobs untuk automation.",
    role: "Backend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "api",
    highlights: [
      "E-learning engine: course enrollment, attempt tracking, progress management",
      "MCQ dan FTQ (free text question) assessment system dengan scoring",
      "Media file management untuk course content dan assessment",
      "Job board dengan company profiles dan favorite tracking",
      "PHPUnit test suite + Azure Pipelines CI/CD",
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Laravel (PHP)", "MySQL", "Redis"],
      },
      {
        category: "Controllers",
        items: ["AstronautController", "AttemptController", "CourseController", "McqController", "FtqController", "JobsBoardController", "CompanyController", "MediafileController"],
      },
      {
        category: "Infrastructure",
        items: ["Azure Pipelines", "Docker", "Cron jobs (Laravel Scheduler)"],
      },
      {
        category: "Testing",
        items: ["PHPUnit", "Laravel Test Helpers"],
      },
    ],
    integrations: [
      { name: "Redis", purpose: "Queue processing dan caching", type: "database" },
    ],
    features: [
      {
        title: "E-Learning Course Engine",
        description: "Manajemen kursus lengkap: create course, manage modules/content, track enrollment per user, attempt history, dan completion status.",
      },
      {
        title: "MCQ & FTQ Assessment",
        description: "System assessment berbasis MCQ (multiple choice) dan FTQ (free text). AttemptController mengelola sesi pengerjaan, scoring otomatis untuk MCQ, dan penyimpanan jawaban FTQ.",
      },
      {
        title: "Job Board & Company Management",
        description: "CRUD job posting dengan kategori, filter industri/lokasi. Company profile management dan FavoriteCompanyController untuk bookmark perusahaan.",
      },
      {
        title: "Media File Management",
        description: "Upload dan management media files untuk konten kursus dan assessment via MediafileController.",
      },
      {
        title: "Candidate & Profile System",
        description: "AstronautController mengelola profil kandidat lengkap: kompetensi, riwayat pekerjaan, pendidikan, dan preferensi karir.",
      },
    ],
    architecture:
      "Laravel monolith dengan RESTful resource controllers. MySQL primary database, Redis untuk queue dan cache. Laravel Scheduler untuk cron jobs automation. PHPUnit untuk test coverage. Deploy via Azure Pipelines.",
    metrics: [
      { label: "API Endpoints", value: "60+" },
      { label: "Controllers", value: "15+" },
      { label: "Test Suite", value: "PHPUnit" },
    ],
    repoPath: "/Users/mac/Astrnt/popskul-backend",
    color: "from-teal-600 to-emerald-700",
  },
  {
    slug: "cv-parsing",
    title: "CV Parsing",
    subtitle: "Resume Builder & Parser ATS-Friendly",
    description:
      "Next.js application berbasis OpenResume untuk parsing dan generation CV secara otomatis. Pengguna bisa upload CV existing lalu sistem mengekstrak informasi key (pendidikan, pengalaman, skill) dan menyajikannya dalam format PDF yang ATS-friendly dan modern.",
    role: "Full-Stack Engineer",
    period: "2024",
    status: "internal",
    category: "tool",
    highlights: [
      "PDF generation via @react-pdf/renderer",
      "Real-time preview saat edit CV",
      "ATS-friendly output format",
      "Privacy-first: semua proses di browser",
    ],
    techStack: [
      {
        category: "Frontend & Framework",
        items: ["Next.js", "React", "TypeScript"],
      },
      {
        category: "PDF & Styling",
        items: ["@react-pdf/renderer", "Tailwind CSS", "PostCSS"],
      },
      {
        category: "State",
        items: ["@reduxjs/toolkit", "Redux"],
      },
      {
        category: "Infrastructure",
        items: ["Vercel Analytics", "Docker"],
      },
    ],
    integrations: [
      { name: "Vercel Analytics", purpose: "Usage tracking", type: "monitoring" },
    ],
    features: [
      {
        title: "Real-time PDF Preview",
        description: "CV dirender sebagai PDF secara real-time menggunakan @react-pdf/renderer saat pengguna mengetik.",
      },
      {
        title: "CV Parser",
        description: "Upload CV existing (PDF) lalu sistem mengekstrak informasi terstruktur secara otomatis.",
      },
      {
        title: "ATS-Friendly Format",
        description: "Output mengikuti best practice ATS (Applicant Tracking System) untuk kompatibilitas maksimal dengan sistem rekrutmen.",
      },
    ],
    architecture:
      "Next.js App Router dengan Redux Toolkit untuk state management CV data. PDF generation client-side via @react-pdf/renderer untuk privacy-first approach.",
    metrics: [
      { label: "CV Sections", value: "8+" },
      { label: "Export Format", value: "PDF" },
    ],
    repoPath: "/Users/mac/Astrnt/cv-parsing",
    color: "from-red-600 to-rose-700",
  },
  {
    slug: "aha-competency-dashboard",
    title: "AHA! Competency Dashboard",
    subtitle: "Dashboard Transparansi AI Scoring untuk Enterprise Clients",
    description:
      "React dashboard demo yang dibuat untuk meyakinkan klien enterprise (CIMB Niaga, Lintasarta, Bank Danamon) tentang transparansi AI scoring dalam proses rekrutmen. Setiap skor kompetensi bisa diklik untuk melihat bukti transcript dan reasoning AI secara detail — memecah kesan 'black box' dari sistem AI.",
    role: "Frontend Engineer",
    period: "2025",
    status: "internal",
    category: "tool",
    highlights: [
      "Competency scoring dengan drill-down ke bukti transcript",
      "AI reasoning transparency untuk 3 klien enterprise besar",
      "Bahasa Indonesia penuh",
      "Tailwind CSS dengan design yang polished",
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "Tailwind CSS", "Create React App"],
      },
    ],
    integrations: [],
    features: [
      {
        title: "Competency Score Drill-down",
        description: "Klik skor kompetensi (misalnya 'Kepemimpinan — 8.5') untuk melihat reasoning AI, kutipan transcript pendukung, dan impact analysis.",
      },
      {
        title: "Enterprise Client Demo",
        description: "Dirancang khusus sebagai demo untuk CIMB Niaga, Lintasarta, dan Bank Danamon dengan data sample yang relevan.",
      },
      {
        title: "AI Transparency Framework",
        description: "Setiap keputusan AI disertai bukti konkret dari transcript interview, membangun kepercayaan stakeholder terhadap sistem AI.",
      },
    ],
    architecture:
      "React SPA dengan mock data yang di-hardcode. Dirancang untuk demo/presentasi kepada klien enterprise, bisa di-host sebagai static site.",
    metrics: [
      { label: "Target Clients", value: "CIMB Niaga, Lintasarta, Bank Danamon" },
      { label: "Competency Types", value: "10+" },
    ],
    repoPath: "/Users/mac/Astrnt/aha",
    color: "from-amber-500 to-orange-600",
  },
  {
    slug: "websocket",
    title: "WebSocket Server",
    subtitle: "Real-time Event Broadcast Publisher/Subscriber",
    description:
      "Node.js WebSocket server yang bertindak sebagai pub/sub broker untuk broadcast event real-time antar aplikasi ASTRNT. Menggunakan Socket.io untuk koneksi WebSocket dan Redis (ioredis) sebagai message broker untuk skalabilitas horizontal.",
    role: "Backend Engineer",
    period: "2022",
    status: "production",
    category: "infra",
    highlights: [
      "Socket.io pub/sub dengan Redis adapter",
      "Real-time event broadcast ke QnA dan Recruiter app",
      "Horizontal scaling via Redis message broker",
    ],
    techStack: [
      {
        category: "Runtime & Framework",
        items: ["Node.js", "Express.js", "Socket.io"],
      },
      {
        category: "Message Broker",
        items: ["Redis", "ioredis", "lodash"],
      },
    ],
    integrations: [
      { name: "Redis", purpose: "Message broker untuk horizontal scaling", type: "realtime" },
    ],
    features: [
      {
        title: "Real-time Event Broadcast",
        description: "Event dari backend (kandidat selesai interview, status berubah) langsung di-broadcast ke semua client yang subscribe.",
      },
      {
        title: "Redis-backed Pub/Sub",
        description: "Redis sebagai message broker memungkinkan multiple instance WebSocket server berjalan secara horizontal.",
      },
    ],
    architecture:
      "Express.js server dengan Socket.io. Publisher (backend apps) push events ke Redis channel, subscriber (frontend clients) menerima via Socket.io connection.",
    metrics: [
      { label: "Protocol", value: "WebSocket" },
      { label: "Scaling", value: "Horizontal via Redis" },
    ],
    repoPath: "/Users/mac/Astrnt/websocket",
    color: "from-cyan-600 to-blue-700",
  },
  {
    slug: "qna-load-test",
    title: "QnA Load Test",
    subtitle: "Stress Testing Platform Interview dengan k6",
    description:
      "Load testing suite menggunakan k6 untuk mengukur performa dan batas kapasitas platform QnA interview ASTRNT. Mensimulasikan ratusan kandidat concurrent mengakses dan menjawab pertanyaan interview secara bersamaan untuk validasi skalabilitas sebelum event rekrutmen skala besar.",
    role: "QA / Performance Engineer",
    period: "2024",
    status: "archived",
    category: "tool",
    highlights: [
      "k6 load test dengan skenario realistic interview flow",
      "Concurrent user simulation hingga ratusan kandidat",
      "Metrics: response time, throughput, error rate",
      "Validasi untuk event rekrutmen skala enterprise",
    ],
    techStack: [
      {
        category: "Load Testing",
        items: ["k6 (JavaScript)", "k6 built-in metrics"],
      },
    ],
    integrations: [],
    features: [
      {
        title: "Concurrent Interview Simulation",
        description: "Simulasi ratusan kandidat mengakses platform secara bersamaan dengan realistic think time dan flow.",
      },
      {
        title: "Performance Metrics Collection",
        description: "Mengukur p95/p99 response time, throughput, error rate, dan bottleneck identification.",
      },
    ],
    architecture:
      "k6 script dengan multiple virtual users yang menjalankan skenario lengkap: login, akses soal, submit jawaban. Hasil dianalisis untuk capacity planning.",
    metrics: [
      { label: "Tool", value: "k6 v1.7.1" },
      { label: "Type", value: "Stress + Load Test" },
    ],
    repoPath: "/Users/mac/Astrnt/k6-art-compas",
    color: "from-slate-600 to-gray-700",
  },
  {
    slug: "docker-recruiter",
    title: "Docker Recruiter Setup",
    subtitle: "Docker Compose Environment untuk Development Recruiter",
    description:
      "Docker Compose setup yang mengorkestrasikan semua service dependencies untuk development lokal platform rekrutmen ASTRNT. Includes Elasticsearch, Redis, MySQL, PHP-FPM, dan Nginx dalam satu konfigurasi yang bisa dijalankan dengan satu perintah.",
    role: "DevOps / Infrastructure",
    period: "2022 – 2023",
    status: "archived",
    category: "infra",
    highlights: [
      "One-command setup untuk seluruh dev environment",
      "Elasticsearch 2.4.6 + Redis + MySQL",
      "Custom Nginx config untuk PHP-FPM",
      "Network isolation antar service",
    ],
    techStack: [
      {
        category: "Infrastructure",
        items: ["Docker", "Docker Compose", "Nginx", "PHP-FPM"],
      },
      {
        category: "Services",
        items: ["Elasticsearch 2.4.6", "Redis", "MySQL"],
      },
    ],
    integrations: [],
    features: [
      {
        title: "One-Command Dev Setup",
        description: "docker compose up menjalankan seluruh stack: Elasticsearch, Redis, MySQL, PHP-FPM, dan Nginx sekaligus.",
      },
      {
        title: "Service Networking",
        description: "Semua service terhubung dalam isolated Docker network dengan resolusi nama service otomatis.",
      },
    ],
    architecture:
      "Docker Compose v2 dengan multiple services yang terhubung via custom bridge network. Volume mounting untuk persistent data dan live code reload.",
    metrics: [
      { label: "Services", value: "5" },
      { label: "Setup Time", value: "< 5 menit" },
    ],
    repoPath: "/Users/mac/Astrnt/docker-recruiter",
    color: "from-zinc-600 to-stone-700",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const integrationTypeColors: Record<Integration["type"], string> = {
  ai: "bg-purple-100 text-purple-800",
  payment: "bg-green-100 text-green-800",
  storage: "bg-blue-100 text-blue-800",
  email: "bg-yellow-100 text-yellow-800",
  monitoring: "bg-red-100 text-red-800",
  database: "bg-orange-100 text-orange-800",
  infra: "bg-gray-100 text-gray-800",
  realtime: "bg-cyan-100 text-cyan-800",
}

export const categoryLabels: Record<Project["category"], string> = {
  platform: "Platform",
  api: "API / Backend",
  frontend: "Frontend",
  infra: "Infrastructure",
  tool: "Tool / Utility",
}

export const statusColors: Record<Project["status"], string> = {
  production: "bg-green-100 text-green-800",
  internal: "bg-blue-100 text-blue-800",
  archived: "bg-gray-100 text-gray-600",
}
