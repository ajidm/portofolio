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
    subtitle: "AI-Powered Full-Stack SaaS Recruitment Platform",
    description:
      "Enterprise SaaS recruitment platform rebuilt from scratch with Next.js 15, React 19, TypeScript, and multi-LLM integration. Handles the entire end-to-end recruitment cycle: AI job generation, campaign management, video interview assessment, proctoring, AI candidate matching, talent pools, review collaboration, bulk import, engagement sequences, and credit-based billing via Stripe — all in one monolith optimized for enterprise scale.",
    role: "Lead Frontend & Full-Stack Engineer",
    period: "2024 – 2026",
    status: "production",
    category: "platform",
    highlights: [
      "Multi-LLM integration (Claude, Gemini, OpenAI) with automatic key rotation on rate limit — zero downtime",
      "383+ API routes, 24 scheduled cron jobs via GitHub Actions, background queue with atomic job claiming",
      "128 Cypress E2E specs + Vitest unit tests with mandatory 80% coverage — required gate before every merge",
      "AI Job Generator: recruiter describes a position in natural language, Claude generates a complete job posting with interview questions",
      "Multi-layer Review System: swipe interface, deep review, public sharing via token, batch decision, @mention comments",
      "Per-candidate proctoring (anti-cheat), MCQ auto-disqualify, progressive profiling, personalized questions",
      "Talent Pool management: collect candidates across jobs, AI matching, assign to job/review session",
      "Competency Framework builder: create framework, add competencies + indicators, publish, link to job",
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
        items: ["MySQL / MariaDB", "Prisma ORM 7", "@prisma/adapter-mariadb", "Redis (ioredis)", "MongoDB (optional)"],
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
      { name: "Google Gemini", purpose: "Fallback LLM for matching & recommendations", type: "ai" },
      { name: "OpenAI GPT", purpose: "Third fallback LLM provider", type: "ai" },
      { name: "Stripe", purpose: "Credit-based billing, Checkout Sessions, Webhooks", type: "payment" },
      { name: "SendGrid", purpose: "Transactional & campaign email delivery", type: "email" },
      { name: "Twilio", purpose: "SMS notifications, voice, WhatsApp webhook", type: "email" },
      { name: "Microsoft SSO", purpose: "Enterprise single sign-on via OAuth", type: "infra" },
      { name: "Azure Blob Storage", purpose: "CV, video, media, document storage + SAS URL", type: "storage" },
      { name: "Sentry", purpose: "Error tracking, performance monitoring, Web Vitals", type: "monitoring" },
      { name: "Redis", purpose: "Rate limiting, enrichment cache, session state, queue", type: "database" },
      { name: "MongoDB", purpose: "AI generation log storage (optional)", type: "database" },
      { name: "ESP Webhook", purpose: "Email delivery event tracking (open, click, bounce)", type: "email" },
    ],
    features: [
      {
        title: "AI Job Generator",
        description:
          "Recruiter describes a position in natural language, Claude generates a complete job posting: description, requirements, and interview questions. Results can be edited, accepted, rejected, or regenerated. Every generation is logged for auditing.",
      },
      {
        title: "Multi-Step Job Creation Wizard",
        description:
          "8-step flow: describe → details → pipeline stages → profile setup → review → publish. Includes auto-save draft, clone job, custom pipeline stages (drag-reorder), welcome video upload, landing page customization, and anonymous mode.",
      },
      {
        title: "Campaign Management System",
        description:
          "Create campaigns per job with full lifecycle: draft → validate → launch → pause → resume → cancel. Features: duplicate campaign, per-channel configuration, smart-send (5-minute cron), cascade retry, automated reminders, bounce alerts, email history tracking with export.",
      },
      {
        title: "Candidate Profile & Review",
        description:
          "Comprehensive candidate profile: video/text answers, documents, education & work history, skills, achievements, notes, and email history. Scoring per section, voting system, proctoring evidence, generate ART PDF and Special PDF reports.",
      },
      {
        title: "Review Collaboration System",
        description:
          "Multi-user review with swipe interface (right/left), deep review mode, batch decision, candidate bookmarking, comments with @mention team members, undo decisions, review sessions with timer and summary, and public sharing via token for external stakeholders.",
      },
      {
        title: "Bulk Import with Duplicate Resolution",
        description:
          "Import candidates via CSV/Excel with column mapping that can be saved as a profile. Row-by-row validation, display error rows, duplicate detection (single + batch resolution), and real-time progress tracking. Batch CV import with AI enrichment queue.",
      },
      {
        title: "Talent Pool Management",
        description:
          "Collect top candidates from across jobs into talent pools. Features: AI matching per pool, availability check, assign to active job, assign to review session, and overlap detection between pools.",
      },
      {
        title: "Assessment Interview Builder",
        description:
          "Create custom assessment interviews with video/audio/document questions. Upload media directly to Azure Blob Storage. Preview QnA before publishing, test-send to email, and assign to multiple jobs.",
      },
      {
        title: "Competency Framework Builder",
        description:
          "Create custom competency frameworks: add competencies, define indicators per competency, drag-reorder, publish. Frameworks can be linked to jobs for consistent and standardized scoring.",
      },
      {
        title: "24 Scheduled Cron Jobs",
        description:
          "Automation system via GitHub Actions: smart-send (5 min), cascade retry, reminders, notification-processor (1 min), sequence-processor & triggers, recommendation-availability, MCQ auto-disqualify, candidate-spotlight-digest, early-signal-digest, no-applicants-digest, job-deadline-alerts, cleanup-drafts, expire-demos, and more.",
      },
      {
        title: "Background Job Queue System",
        description:
          "bg_transactions table as persistent queue: atomic claiming prevents race conditions, priority-based processing, stale job recovery (30-minute timeout), progress tracking via processed_data counter. Used for import, CV enrichment, bulk retake, and matching.",
      },
      {
        title: "Credit-Based Billing (Stripe)",
        description:
          "Credit-based monetization: Stripe Checkout Session, webhook handling for payment confirmation, credit expiry tracking, automated alerts (warning → critical → expired), credit usage per company, and credit transactions per candidate.",
      },
      {
        title: "Engagement Sequences",
        description:
          "Define automated multi-step communication workflows: email → delay → SMS → in-app notification. Sequence triggers automatically based on candidate events, processor runs every 30 minutes.",
      },
      {
        title: "Fast Apply (Open Code)",
        description:
          "Candidates apply via open code link without a recruiter account. Flow: register → upload CV → auto CV parse → profile setup → progressive profiling questions. Designed for high conversion on mobile.",
      },
      {
        title: "Interview Handoff Flow (/j/[code])",
        description:
          "Invited candidates access the interview via a unique code. Flow: confirm → profile → upload documents → progressive profiling → finish. CV is automatically parsed on upload.",
      },
      {
        title: "Proctoring & Anti-Cheat",
        description:
          "Per-candidate per-job proctoring monitoring: records suspicious activity during the interview (tab switch, fullscreen exit, etc.). Evidence is stored and can be reviewed by recruiters on the proctoring page.",
      },
      {
        title: "Email Template Customization",
        description:
          "Recruiters can customize email templates per job using a rich text editor (TipTap). Placeholder detection prevents emails from being sent with unfilled variables.",
      },
      {
        title: "Microsoft SSO & Multi-Company Auth",
        description:
          "Login via Microsoft OAuth for enterprise. Switch between ASTRNT systems, company switch for users who join multiple companies, support dashboard impersonation for the CS team.",
      },
      {
        title: "Internal Admin Tools",
        description:
          "Internal pages for the ASTRNT team: AI API key management (Claude key rotation), feature flags per company, IP blocking, question library, org setup, CDC company management, matching engine health check & cache clear.",
      },
      {
        title: "Email Open & Click Tracking",
        description:
          "Track email opens and link clicks via pixel & redirect token (/api/track/open, /api/track/click). Data is used for campaign analytics and engagement scoring.",
      },
      {
        title: "Notification Preferences & History",
        description:
          "Users can set notification preferences per category (email/in-app). Notification history is stored, unsubscribe per category, and global opt-out via email link.",
      },
    ],
    architecture:
      "Next.js Full-Stack Monolith with App Router. Server Components + Server Actions for form submissions; API Routes for REST endpoints, webhooks, and cron triggers. Business logic in src/lib/ (265+ files) and src/services/. Data access via Prisma ORM with raw SQL for critical queries. Background jobs: GitHub Actions trigger → POST /api/cron/* → enqueue to bg_transactions → worker scripts (tsx) claim & process. Redis for rate limiting and caching. Azure Blob Storage for all files/media with SAS token generation.",
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
    subtitle: "Enterprise Recruitment Platform — Large-Scale Laravel + React SPA",
    description:
      "The backbone of ASTRNT's first-generation recruitment platform. Laravel monolith with Dingo API as the REST backend, serving a React SPA (416 JSX files, Redux + redux-saga) as the frontend. Handles video interviews, diverse psychometric assessment types, automatic speech-to-text, video transcoding via FFmpeg, multiple payment gateways, multi-tenant client modules, and enterprise SSO integration — in a single platform used by major companies like Gojek, BCA, Sephora, and Deloitte.",
    role: "Full-Stack Engineer",
    period: "2022 – 2024",
    status: "production",
    category: "platform",
    highlights: [
      "416 JSX files React SPA with Redux, redux-saga, redux-form, and Storybook component library",
      "Google Cloud Speech-to-Text for automatic transcription of candidate video answers",
      "FFmpeg video transcoding + JWPlayer streaming for interview video playback",
      "Tesseract OCR for text extraction from image-based documents",
      "Multi-payment gateway: Stripe (global) + Veritrans/Midtrans (Indonesia)",
      "SAML2 SSO for enterprise clients (Gojek, BCA, etc.) with custom auth flow",
      "8+ psychometric assessment types: ART, RIASEC, Creative Thinking, Writing Test, Reading Test, Values Reflection, etc.",
      "Client-specific modules per company: BCA, Gojek, Deloitte, Sephora, Homecredit, Ristekdikti, etc.",
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
      { name: "Google Cloud Speech", purpose: "Auto-transcription of candidate video answers to text", type: "ai" },
      { name: "Stripe", purpose: "Global payment & enterprise subscription", type: "payment" },
      { name: "Veritrans/Midtrans", purpose: "Indonesian payment gateway", type: "payment" },
      { name: "SAML2 SSO", purpose: "Enterprise SSO for Gojek, BCA, and other major clients", type: "infra" },
      { name: "JWPlayer", purpose: "Video streaming and interview playback", type: "storage" },
      { name: "AWS S3", purpose: "Video, audio, document storage", type: "storage" },
      { name: "Azure Blob Storage", purpose: "Secondary storage for media", type: "storage" },
      { name: "Elasticsearch", purpose: "Full-text search for candidates and jobs", type: "database" },
      { name: "MongoDB", purpose: "Logs and non-relational document data", type: "database" },
      { name: "Redis", purpose: "Session, queue cache, rate limiting", type: "database" },
      { name: "Sentry", purpose: "Production error tracking", type: "monitoring" },
    ],
    features: [
      {
        title: "Video Interview with Speech-to-Text",
        description:
          "Candidates record video answers that are streamed via JWPlayer. Google Cloud Speech-to-Text automatically transcribes each answer into text to make recruiter reviews easier.",
      },
      {
        title: "8+ Psychometric Assessment Types",
        description:
          "The platform supports a variety of tests: Analytical Reasoning Test (ART), RIASEC career interest, Creative Thinking Assessment, Reading Test, Writing Test, Values Reflection Assessment, General Scoring, and PsychoMetric. Each test has its own scoring engine.",
      },
      {
        title: "Multi-Tenant Client Modules",
        description:
          "Each enterprise client (Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, etc.) has its own Laravel module with custom flow, branding, and assessments tailored to their needs.",
      },
      {
        title: "Video Transcoding via FFmpeg",
        description:
          "Candidate video answers are processed by php-ffmpeg for format conversion, compression, and thumbnail generation before being served via JWPlayer. Supports chunk upload for large files.",
      },
      {
        title: "PDF Report Generation",
        description:
          "Generate candidate PDF reports via multiple engines: DOMPDF, Snappy (wkhtmltopdf), and FPDI. Supports custom PDFs with client branding, assessment reports, and bulk export.",
      },
      {
        title: "Proctoring & Anti-Cheat",
        description:
          "Proctoring system detects suspicious activity: tab switch, fullscreen exit, copy-paste. Evidence is recorded and available for recruiter review on the proctoring page.",
      },
      {
        title: "Talent Pool & Team Management",
        description:
          "Recruiters can collect top candidates into a Talent Pool, assign hiring team members to jobs, and set permissions per member for review access.",
      },
      {
        title: "Competency Generation",
        description:
          "Automatically generate relevant competencies for a position based on job description and industry.",
      },
      {
        title: "Multi-Payment Gateway",
        description:
          "Supports Stripe for global clients and Veritrans/Midtrans for Indonesian clients. Payment management, invoicing, and subscription handling per client.",
      },
      {
        title: "SAML2 Enterprise SSO",
        description:
          "Enterprise clients can log in via their company's own SSO using SAML2. Custom IdP configuration per client (Gojek, BCA, etc.).",
      },
      {
        title: "Excel & CSV Import/Export",
        description:
          "Bulk import candidates via Excel (maatwebsite/excel), export reports to CSV (league/csv), and export candidate data in a format customizable per client.",
      },
      {
        title: "Tesseract OCR for Documents",
        description:
          "Automatic text extraction from image-based documents (ID photos, diplomas, certificates) using Tesseract OCR for verification and candidate profile filling.",
      },
    ],
    architecture:
      "Laravel monolith with nwidart/laravel-modules for per-domain/client isolation. Dingo API for versioned REST endpoints, JWT Auth for stateless authentication. React SPA (416 JSX files) built with Webpack 4, state management via Redux + redux-saga. Media pipeline: upload → AWS S3/Azure → FFmpeg transcoding → JWPlayer streaming. Speech-to-text via Google Cloud Speech API. PDF via multiple engines (DOMPDF, Snappy, FPDI).",
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
    subtitle: "Asynchronous Interview Platform API Backend — Full-Featured Laravel",
    description:
      "Laravel API backend serving all needs of the ASTRNT asynchronous interview platform. Candidates answer video/audio/text/MCQ/document questions independently at any time. The backend handles session management, media upload and transcoding, automatic speech-to-text, multiple assessment types (ART, RIASEC, Creative Thinking), proctoring, PDF report generation, and data synchronization with the recruiter platform. The stack is identical to Recruiter but focused on the candidate-facing interview flow.",
    role: "Backend Engineer",
    period: "2022 – 2024",
    status: "production",
    category: "api",
    highlights: [
      "Google Cloud Speech-to-Text for automatic transcription of candidate video answers",
      "FFmpeg video transcoding + JWPlayer streaming for interview playback",
      "5+ assessment types: ART, RIASEC, Creative Thinking, General Scoring, Values Reflection",
      "Chunk upload for large videos + AWS S3 / Azure Blob dual storage",
      "Proctoring evidence tracking per interview session",
      "OTP authentication for candidates without an account",
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
      { name: "Google Cloud Speech", purpose: "Auto-transcription of candidate video answers", type: "ai" },
      { name: "AWS S3", purpose: "Primary video & document storage", type: "storage" },
      { name: "Azure Blob Storage", purpose: "Secondary media storage", type: "storage" },
      { name: "JWPlayer", purpose: "Video streaming and playback", type: "storage" },
      { name: "MongoDB", purpose: "Logs and non-relational documents", type: "database" },
      { name: "Redis", purpose: "Queue, session cache", type: "database" },
      { name: "Sentry", purpose: "Production error tracking", type: "monitoring" },
    ],
    features: [
      {
        title: "Async Interview Session Management",
        description: "Candidates receive a unique link with an interview code. The backend tracks progress per section, answer status, and completion state in real-time.",
      },
      {
        title: "Multi-Type Question Answering",
        description: "Supports multiple answer types: video recording, audio recording, free text (freetext), MCQ, rating scale, and document upload — all in one interview session.",
      },
      {
        title: "Automatic Speech-to-Text",
        description: "Every video answer is automatically transcribed by the Google Cloud Speech API. Transcripts are saved and can be used by recruiters for review without watching the video.",
      },
      {
        title: "Video Transcoding Pipeline",
        description: "Candidate video upload → FFmpeg transcoding for compression & standard format → stored on S3/Azure → streamed via JWPlayer. Chunk upload for large files (pion/laravel-chunk-upload).",
      },
      {
        title: "5+ Psychometric Assessments",
        description: "Supports Analytical Reasoning Test (ART), RIASEC career interest, Creative Thinking Assessment, General Scoring, Values Reflection Assessment. Scoring engine per test type.",
      },
      {
        title: "Proctoring Evidence Recording",
        description: "Records proctoring evidence during the interview session (tab switch, camera, etc.) and stores it for recruiter review.",
      },
      {
        title: "PDF Report Generation",
        description: "Generates assessment result reports per candidate in PDF format via DOMPDF, Snappy, and FPDI. Supports custom branding per client.",
      },
    ],
    architecture:
      "Laravel monolith with nwidart/laravel-modules (Astronaut, AssessmentContent, JobLanding, TDL, Ecourse modules). Dingo API for REST versioning, stateless JWT Auth. Media pipeline: chunk upload → S3/Azure → FFmpeg transcoding → JWPlayer streaming. Speech-to-text via Google Cloud Speech API. PDF via multi-engine. Elasticsearch for search, Redis for queue.",
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
    subtitle: "Asynchronous Interview Application — Candidate-Facing React SPA",
    description:
      "React SPA (320 JS/JSX files) serving as the primary interface for candidates participating in ASTRNT asynchronous interview sessions. Supports 6 question types: video recording (WebRTC + RecordRTC), audio recording, free text, MCQ, rating scale, and document upload. Features OTP authentication, pre-interview device check, proctoring monitoring, session recovery via localforage, real-time progress tracking via Socket.io, and custom activity logging.",
    role: "Frontend Engineer",
    period: "2022 – 2024",
    status: "production",
    category: "frontend",
    highlights: [
      "RecordRTC + WebRTC for video/audio recording directly in the browser without plugins",
      "6 question types: video, audio, freetext, MCQ, rating scale, document upload",
      "OTP authentication flow for candidates without an account",
      "Session recovery via localforage — candidates can continue from their last point if the browser crashes",
      "Pre-interview device check via DetectRTC (camera, microphone, internet connection)",
      "Real-time progress and countdown timer via Socket.io",
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
      { name: "Socket.io", purpose: "Real-time progress sync and countdown timer", type: "realtime" },
      { name: "Sentry", purpose: "Production error tracking & monitoring", type: "monitoring" },
      { name: "AWS SDK Mobile Analytics", purpose: "Candidate usage analytics", type: "monitoring" },
    ],
    features: [
      {
        title: "Multi-Type Question Answering Interface",
        description: "Complete UI for 6 question types: video interview (record + playback preview), audio recording, freetext with rich editor, multiple choice MCQ, rating scale slider, and document upload with preview.",
      },
      {
        title: "Browser Video & Audio Recording (RecordRTC)",
        description: "Video and audio are recorded directly in the browser via RecordRTC + WebRTC API without installing plugins. Supports countdown timer per question, retry recording, and preview before submitting.",
      },
      {
        title: "OTP Authentication Flow",
        description: "Candidates log in via OTP sent to their email/phone — no account creation needed. Secure and low-friction for maximum conversion.",
      },
      {
        title: "Pre-Interview Device Check",
        description: "DetectRTC validates camera availability, microphone, and connection speed before the session starts. Candidates are given troubleshooting guidance if there are issues.",
      },
      {
        title: "Session Recovery via localforage",
        description: "Interview progress is stored locally using localforage. If the browser crashes or the connection drops, candidates can continue from their last question without losing answers.",
      },
      {
        title: "Real-time Progress via Socket.io",
        description: "Candidate progress status is synced to the server in real-time via Socket.io. Countdown timer and section progress are updated live.",
      },
      {
        title: "Activity & Event Logging",
        description: "Every candidate action (start recording, submit, pause, etc.) is logged by qna-activity-log and astrnt-web-logger for audit trail and proctoring evidence.",
      },
    ],
    architecture:
      "React SPA with Redux + redux-saga for async state management. 320 JS/JSX files covering pages (home, sessions, interviews, mcqs, freetext, rating_scale, document, sections, otp, errors), components, sagas, reducers, and selectors. Recording via RecordRTC, storage via AWS Amplify, real-time via Socket.io client.",
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
    subtitle: "ASTRNT Public Website & Marketing Site — Dual React Architecture",
    description:
      "ASTRNT's public website serving marketing pages, product landing pages, blog, developer portal, and job-specific landing pages. Built as two separate React components (component_public & component_job_landing) that are built independently then served by a single Express.js server. Multi-environment build for AWS (production) and Azure (staging/beta) with different env vars per target.",
    role: "Frontend Engineer",
    period: "2022 – 2023",
    status: "production",
    category: "frontend",
    highlights: [
      "Dual React app architecture — public site + job landing page as independent components",
      "Single Express.js server serving two React builds from different folders",
      "Multi-environment CI build: AWS production vs Azure staging with separate env vars",
      "Google Analytics (react-ga) for traffic and conversion tracking",
      "Styled Components for consistent theming across the entire site",
      "Route-based job landing page — each job has its own URL and content",
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
      { name: "Google Analytics", purpose: "Traffic, visited pages, and Apply conversion tracking", type: "monitoring" },
    ],
    features: [
      {
        title: "Dual React App Architecture",
        description: "component_public (marketing site) and component_job_landing (job-specific pages) are built independently with Webpack, then served together via a single Express.js server — enabling partial deployment without rebuilding both.",
      },
      {
        title: "Job-Specific Landing Pages",
        description: "Each job posting has its own landing page with a unique URL, job description, and an Apply button connected to the QnA interview flow.",
      },
      {
        title: "Multi-Environment Build Pipeline",
        description: "Separate build scripts for AWS (astrnt.co) and Azure (beta.astrnt.co) with different REACT_APP_* env vars: API host, QnA host, EU host, Node host, Python host.",
      },
    ],
    architecture:
      "Two React apps (component_public + component_job_landing) built separately with npm-run-all. Express.js server serves static builds from FOLDER_PUBLIC and FOLDER_JOB_LANDING env vars. Deployed to AWS (prod) and Azure (staging) via CI pipeline.",
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
    subtitle: "Internal CS Team Tool — React SPA for Monitoring & Troubleshooting",
    description:
      "Internal React SPA (130 JS files) used by the ASTRNT Customer Support team to monitor client accounts, investigate candidate issues, and manage platform data. Built with Create React App + custom Webpack config via react-app-rewired, Redux for state management, and connected to the ASTRNT backend API with JWT authentication.",
    role: "Frontend Engineer",
    period: "2022 – 2023",
    status: "internal",
    category: "frontend",
    highlights: [
      "130 JS files React SPA — comprehensive internal tools for the CS team",
      "Redux + redux-saga for async state management",
      "Storybook for internal component documentation",
      "Custom Webpack via react-app-rewired",
      "Docker + Azure Pipelines for internal deployment",
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
        description: "The CS team can view client account status, remaining credits, usage quotas, company configuration, and recent activity without needing direct database access.",
      },
      {
        title: "Candidate Troubleshooting",
        description: "Investigate candidate issues: view interview session status, media upload history, error logs, and reset stuck sessions.",
      },
      {
        title: "Internal Admin Actions",
        description: "The CS team can perform admin actions such as resetting passwords, changing account status, and verifying client emails directly from the dashboard.",
      },
    ],
    architecture:
      "React SPA with Create React App + react-app-rewired for custom Webpack config. Redux + redux-saga for async state. Communicates with the ASTRNT backend API via JWT token. Deployed via Docker + Azure Pipelines to an internal server.",
    metrics: [
      { label: "JS Files", value: "130" },
      { label: "Target Users", value: "CS Team (Internal)" },
    ],
    repoPath: "/Users/mac/Astrnt/support-dashboard",
    color: "from-rose-600 to-pink-700",
  },
  {
    slug: "university-dashboard",
    title: "University Dashboard",
    subtitle: "Student Assessment Platform for University Clients",
    description:
      "Laravel platform designed specifically for academic institutions to manage student assessments. Features student management, events/exams, campus job postings, social login via Laravel Socialite, bulk data import via Excel, PDF reports, and interactive DataTables. Has separate branding and flow from the corporate recruitment platform.",
    role: "Full-Stack Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "platform",
    highlights: [
      "Social login via Laravel Socialite (Google, etc.)",
      "Server-side DataTables (yajra/laravel-datatables) for large-scale student data management",
      "Bulk student import from Excel (maatwebsite/excel)",
      "PDF report generation via barryvdh/laravel-dompdf",
      "Azure Blob Storage for student files & media",
      "Event management: create, manage, and monitor exams/assessments per batch",
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
      { name: "Laravel Socialite", purpose: "Social login for students (Google, etc.)", type: "infra" },
      { name: "Azure Blob Storage", purpose: "File and media storage for students", type: "storage" },
    ],
    features: [
      {
        title: "Student & Event Management",
        description: "University admins can manage student data, create events/exams, assign students to events, and monitor progress using server-side DataTables that are efficient for large datasets.",
      },
      {
        title: "Social Login via Socialite",
        description: "Students can log in using their Google account (or other providers) without creating a manual account, reducing onboarding friction.",
      },
      {
        title: "Bulk Import via Excel",
        description: "Admins can import thousands of student records at once from an Excel file with automatic row-by-row validation.",
      },
      {
        title: "PDF Assessment Report",
        description: "Generate assessment result reports per student or per batch in print-ready PDF format for administrative and accreditation purposes.",
      },
      {
        title: "Campus Job Posting",
        description: "A dedicated feature for universities to post campus job listings (internal job board) accessible only to registered students.",
      },
      {
        title: "Brand Setup & Contact Request",
        description: "Universities can set up branding (logo, colors) via BrandSetupController, and students can send contact requests to admins or partner companies.",
      },
    ],
    architecture:
      "Laravel MVC monolith with Blade + Bootstrap for server-side rendering. Server-side DataTables via yajra/laravel-datatables for performance on large data. Azure Blob Storage for files. PDF via DOMPDF. Social auth via Socialite. Deployment via Azure Pipelines.",
    metrics: [
      { label: "Controllers", value: "12" },
      { label: "Client Type", value: "University" },
      { label: "Storage", value: "Azure Blob" },
    ],
    repoPath: "/Users/mac/Astrnt/university-dashboard",
    color: "from-lime-600 to-green-700",
  },
  {
    slug: "custom-landing-page",
    title: "Custom Landing Page",
    subtitle: "Multi-Client Enterprise Branded Landing Page — Laravel Multi-Tenant",
    description:
      "Laravel multi-tenant application for custom landing pages per ASTRNT enterprise client. Each client (Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, Kai, TalentBuzz, etc.) gets a landing page with their own branding, content, and domain. Backend connected to AWS S3 for media and JWT Auth for API integration.",
    role: "Full-Stack Engineer",
    period: "2022 – 2023",
    status: "production",
    category: "platform",
    highlights: [
      "12+ client-specific modules: Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, Kai, TalentBuzz, etc.",
      "Hostname-based routing — each request is automatically directed to the matching client configuration",
      "AWS S3 for client-specific media and assets",
      "JWT Auth for integration with the ASTRNT API backend",
      "Custom SSL domain support per client",
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
      { name: "AWS S3", purpose: "Media and assets for landing pages per client", type: "storage" },
      { name: "ASTRNT API", purpose: "JWT Auth integration to the recruitment backend", type: "infra" },
    ],
    features: [
      {
        title: "12+ Client-Specific Modules",
        description: "Each enterprise client has its own controller module: Gojek, BCA, Sephora, Deloitte, Homecredit, Ristekdikti, Samudera, Kai, TalentBuzz, Google, GojekDemo, start4hire. Each can have unique flows.",
      },
      {
        title: "Hostname-Based Multi-Tenant Routing",
        description: "Laravel middleware detects the hostname from the request (gojek.astrnt.co, bca.astrnt.co, etc.) and automatically routes to the matching client configuration and controller.",
      },
      {
        title: "Per-Client Branding & Content",
        description: "Logo, brand colors, text, and media are served from per-client configuration. Updating one client's branding does not affect others.",
      },
      {
        title: "Apply Flow Integration",
        description: "Candidates who click Apply from the landing page are directly routed to the ASTRNT interview session with the client context already filled in.",
      },
    ],
    architecture:
      "Laravel monolith with hostname-based routing as the multi-tenancy layer. Middleware detects domain → loads client configuration → dispatches to the client module controller. AWS S3 for assets, JWT Auth for API calls to the recruitment backend. Custom SSL per domain via Nginx.",
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
    subtitle: "E-Learning & Career Platform — Nuxt.js SSR with Video Assessment",
    description:
      "Nuxt.js (Vue 2) SSR frontend for Popskul — a platform that combines e-learning, job marketplace, and competency-based assessment. More than just a job board: candidates can take courses, complete assessments (MCQ + FTQ + video recording), bookmark favorite companies, apply for scholarships, and apply to jobs — all in one platform with real-time via Socket.io and video recording via videojs-record.",
    role: "Frontend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "frontend",
    highlights: [
      "45+ Nuxt.js SSR pages — integrated marketplace + e-learning + assessment",
      "videojs-record for browser-based video assessment without plugins",
      "nuxt-socket-io for real-time notifications and progress",
      "vee-validate for complex form validation",
      "vue2-dropzone for assessment file uploads",
      "Automatic sitemap (@nuxtjs/sitemap) for job listing SEO",
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
      { name: "Socket.io", purpose: "Real-time notifications and progress tracking", type: "realtime" },
    ],
    features: [
      {
        title: "E-Learning Platform (Courses)",
        description: "Candidates can browse, enroll in, and take online courses. Progress tracking per course, attempt management, and completion certificate.",
      },
      {
        title: "Video Assessment via videojs-record",
        description: "Candidates record video answers directly in the browser using videojs-record without plugins. Integrated with the MCQ and FTQ assessment flow.",
      },
      {
        title: "Job Marketplace with Company Profile",
        description: "Browse thousands of job listings with filters by industry, location, and category. Full company profiles, bookmark favorite companies, and apply directly.",
      },
      {
        title: "MCQ & FTQ Assessment",
        description: "MCQ (multiple choice) and FTQ (free text question) based assessment with timer, progress tracking, and auto-submit when time runs out.",
      },
      {
        title: "Scholarship Program",
        description: "Candidates can browse and apply for scholarship programs from Popskul partner institutions.",
      },
      {
        title: "Real-time via Socket.io",
        description: "Real-time notifications for assessment status, new job updates, and course progress using nuxt-socket-io.",
      },
      {
        title: "SSR for Optimal SEO",
        description: "All job listing, company profile, and course pages are server-side rendered via Nuxt.js for maximum search engine indexing. Sitemap is automatically generated per route.",
      },
    ],
    architecture:
      "Nuxt.js SSR with Vuex for state management. @nuxtjs/auth handles the JWT auth flow. nuxt-socket-io for real-time connection to the backend. videojs-record for browser-based video capture. @nuxtjs/sitemap auto-generates XML sitemap from all dynamic routes.",
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
    subtitle: "E-Learning & Career Platform API Backend — Full-Featured Laravel",
    description:
      "Laravel backend serving all needs of the Popskul platform: e-learning (courses, attempts, progress), job board, assessment (MCQ + FTQ), media management, company profiles, and user management. Built with an API-first architecture using Laravel resource controllers with cron jobs for automation.",
    role: "Backend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "api",
    highlights: [
      "E-learning engine: course enrollment, attempt tracking, progress management",
      "MCQ and FTQ (free text question) assessment system with scoring",
      "Media file management for course content and assessment",
      "Job board with company profiles and favorite tracking",
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
      { name: "Redis", purpose: "Queue processing and caching", type: "database" },
    ],
    features: [
      {
        title: "E-Learning Course Engine",
        description: "Complete course management: create courses, manage modules/content, track enrollment per user, attempt history, and completion status.",
      },
      {
        title: "MCQ & FTQ Assessment",
        description: "Assessment system based on MCQ (multiple choice) and FTQ (free text). AttemptController manages answer sessions, automatic scoring for MCQ, and FTQ answer storage.",
      },
      {
        title: "Job Board & Company Management",
        description: "CRUD job posting with categories, industry/location filters. Company profile management and FavoriteCompanyController for bookmarking companies.",
      },
      {
        title: "Media File Management",
        description: "Upload and manage media files for course content and assessment via MediafileController.",
      },
      {
        title: "Candidate & Profile System",
        description: "AstronautController manages complete candidate profiles: competencies, work history, education, and career preferences.",
      },
    ],
    architecture:
      "Laravel monolith with RESTful resource controllers. MySQL primary database, Redis for queue and cache. Laravel Scheduler for cron job automation. PHPUnit for test coverage. Deployed via Azure Pipelines.",
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
    subtitle: "ATS-Friendly Resume Builder & Parser",
    description:
      "Next.js application based on OpenResume for automatic CV parsing and generation. Users can upload an existing CV and the system extracts key information (education, experience, skills) and presents it in a modern, ATS-friendly PDF format.",
    role: "Full-Stack Engineer",
    period: "2024",
    status: "internal",
    category: "tool",
    highlights: [
      "PDF generation via @react-pdf/renderer",
      "Real-time preview while editing the CV",
      "ATS-friendly output format",
      "Privacy-first: all processing happens in the browser",
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
        description: "The CV is rendered as a PDF in real-time using @react-pdf/renderer as the user types.",
      },
      {
        title: "CV Parser",
        description: "Upload an existing CV (PDF) and the system automatically extracts structured information.",
      },
      {
        title: "ATS-Friendly Format",
        description: "Output follows ATS (Applicant Tracking System) best practices for maximum compatibility with recruitment systems.",
      },
    ],
    architecture:
      "Next.js App Router with Redux Toolkit for CV data state management. Client-side PDF generation via @react-pdf/renderer for a privacy-first approach.",
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
    subtitle: "AI Scoring Transparency Dashboard for Enterprise Clients",
    description:
      "React demo dashboard built to convince enterprise clients (CIMB Niaga, Lintasarta, Bank Danamon) about the transparency of AI scoring in the recruitment process. Each competency score can be clicked to view transcript evidence and AI reasoning in detail — breaking the 'black box' perception of AI systems.",
    role: "Frontend Engineer",
    period: "2025",
    status: "internal",
    category: "tool",
    highlights: [
      "Competency scoring with drill-down into transcript evidence",
      "AI reasoning transparency for 3 major enterprise clients",
      "Fully localized and polished interface",
      "Tailwind CSS with clean, presentation-ready design",
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
        description: "Click a competency score (e.g. 'Leadership — 8.5') to view AI reasoning, supporting transcript quotes, and impact analysis.",
      },
      {
        title: "Enterprise Client Demo",
        description: "Specifically designed as a demo for CIMB Niaga, Lintasarta, and Bank Danamon with relevant sample data.",
      },
      {
        title: "AI Transparency Framework",
        description: "Every AI decision is accompanied by concrete evidence from the interview transcript, building stakeholder trust in the AI system.",
      },
    ],
    architecture:
      "React SPA with hardcoded mock data. Designed for demo/presentation to enterprise clients, can be hosted as a static site.",
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
      "Node.js WebSocket server acting as a pub/sub broker to broadcast real-time events between ASTRNT applications. Uses Socket.io for WebSocket connections and Redis (ioredis) as a message broker for horizontal scalability.",
    role: "Backend Engineer",
    period: "2022",
    status: "production",
    category: "infra",
    highlights: [
      "Socket.io pub/sub with Redis adapter",
      "Real-time event broadcast to QnA and Recruiter apps",
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
      { name: "Redis", purpose: "Message broker for horizontal scaling", type: "realtime" },
    ],
    features: [
      {
        title: "Real-time Event Broadcast",
        description: "Events from the backend (candidate finishes interview, status changes) are immediately broadcast to all subscribed clients.",
      },
      {
        title: "Redis-backed Pub/Sub",
        description: "Redis as a message broker enables multiple WebSocket server instances to run horizontally.",
      },
    ],
    architecture:
      "Express.js server with Socket.io. Publisher (backend apps) push events to Redis channels, subscribers (frontend clients) receive them via Socket.io connection.",
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
    subtitle: "Interview Platform Stress Testing with k6",
    description:
      "Load testing suite using k6 to measure the performance and capacity limits of the ASTRNT QnA interview platform. Simulates hundreds of concurrent candidates accessing and answering interview questions simultaneously to validate scalability before large-scale recruitment events.",
    role: "QA / Performance Engineer",
    period: "2024",
    status: "archived",
    category: "tool",
    highlights: [
      "k6 load test with realistic interview flow scenarios",
      "Concurrent user simulation up to hundreds of candidates",
      "Metrics: response time, throughput, error rate",
      "Validation for enterprise-scale recruitment events",
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
        description: "Simulates hundreds of candidates accessing the platform simultaneously with realistic think time and flow.",
      },
      {
        title: "Performance Metrics Collection",
        description: "Measures p95/p99 response time, throughput, error rate, and bottleneck identification.",
      },
    ],
    architecture:
      "k6 script with multiple virtual users running complete scenarios: login, access questions, submit answers. Results are analyzed for capacity planning.",
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
    subtitle: "Docker Compose Environment for Recruiter Development",
    description:
      "Docker Compose setup that orchestrates all service dependencies for local development of the ASTRNT recruitment platform. Includes Elasticsearch, Redis, MySQL, PHP-FPM, and Nginx in a single configuration that can be launched with one command.",
    role: "DevOps / Infrastructure",
    period: "2022 – 2023",
    status: "archived",
    category: "infra",
    highlights: [
      "One-command setup for the entire dev environment",
      "Elasticsearch 2.4.6 + Redis + MySQL",
      "Custom Nginx config for PHP-FPM",
      "Network isolation between services",
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
        description: "docker compose up launches the entire stack: Elasticsearch, Redis, MySQL, PHP-FPM, and Nginx all at once.",
      },
      {
        title: "Service Networking",
        description: "All services are connected in an isolated Docker network with automatic service name resolution.",
      },
    ],
    architecture:
      "Docker Compose v2 with multiple services connected via a custom bridge network. Volume mounting for persistent data and live code reload.",
    metrics: [
      { label: "Services", value: "5" },
      { label: "Setup Time", value: "< 5 min" },
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
