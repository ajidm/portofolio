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
      "Talent Management module: 360-degree assessments, peer nominations, talent mapping programs, and framework-linked instruments",
      "AI Matching Engine with Gemini adapter, shadow mode, similarity scoring, and trigger-based candidate recommendations",
      "Offer Management: candidate offer letter flow with phase-gated lifecycle and digital accept/decline response",
      "WhatsApp notifications alongside email and SMS for candidate communications",
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
      {
        title: "Talent Management (TM) Module",
        description:
          "Full 360-degree assessment system: create TM programs (talent mapping, regular feedback), define frameworks, run peer nomination via token-gated portal, assign instruments per employee, manage rater invites, and track completion across the org.",
      },
      {
        title: "Employee Assessment Portal",
        description:
          "Token-gated (no-login) portal for employees and raters to submit assessment responses. Renders RatingScaleForm and FreetextForm question types. Fully public — accessible via email link without an ASTRNT account.",
      },
      {
        title: "Offer Management",
        description:
          "Candidate-facing offer letter flow: phase-gated lifecycle (view offer → accept/decline → signature/document upload). Accessible via token link from email — no login required. Tracks offer response status per candidate.",
      },
      {
        title: "AI Matching Engine",
        description:
          "Dedicated matching engine with Gemini adapter, ASTRNT-specific similarity scoring, shadow mode for safe rollout, fallback engine, and trigger-based automatic candidate recommendations. Powers the 'Why Recommended' explainer page linked from digest emails.",
      },
      {
        title: "Smart Notification Scheduling",
        description:
          "Advanced notification pipeline beyond basic email: cascade processor, smart-send timing computer, SendGrid event poller (bounce/open/click), Twilio SMS poller, WhatsApp webhook delivery, and job close handler. Processes every 30 minutes.",
      },
      {
        title: "Public Job Board",
        description:
          "SEO-optimized public job listings page (/job-posts) for organic candidate discovery — separate from the authenticated recruiter job view. Each listing links to the Fast Apply or Interview Handoff flow.",
      },
      {
        title: "Multi-Step Onboarding Flow",
        description:
          "Company onboarding wizard: account-type → organization → resume → verify → welcome → join-pending/approved/rejected. Includes team join request workflow with token-based accept/reject for invited members.",
      },
      {
        title: "Live / Synchronous Interview Builder",
        description:
          "Question-set builder for structured live video interviews — separate from the async assessment flow. Allows recruiters to prepare a standardized question set before conducting synchronous interviews.",
      },
      {
        title: "Interview Booking System",
        description:
          "Token-based interview scheduling flow for candidates to self-book interview slots. Accessible via email link — no login required.",
      },
      {
        title: "Demo Environment Management",
        description:
          "Full demo infrastructure: time-limited demo instance activation, demo expiry page, and dev tooling. Enables sales team to spin up sandboxed ASTRNT environments for prospect demos with automatic expiry.",
      },
    ],
    architecture:
      "Next.js Full-Stack Monolith with App Router. Server Components + Server Actions for form submissions; API Routes for REST endpoints, webhooks, and cron triggers. Business logic in src/lib/ (265+ files) and src/services/. Data access via Prisma ORM with raw SQL for critical queries. Background jobs: GitHub Actions trigger → POST /api/cron/* → enqueue to bg_transactions → worker scripts (tsx) claim & process. Redis for rate limiting and caching. Azure Blob Storage for all files/media with SAS token generation.",
    metrics: [
      { label: "API Routes", value: "383+" },
      { label: "Pages & Flows", value: "60+" },
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
  {
    slug: "e-course-web",
    title: "E-Course Web",
    subtitle: "Candidate Interview & E-Learning Hybrid — React SPA with Real-time",
    description:
      "React 16 SPA serving as ASTRNT's e-learning and video interview hybrid platform for candidates. Candidates complete video interviews, MCQs, and free-text questions within a course-like interface. Uses Redux + redux-saga for async state, JWPlayer for video playback, Socket.IO for real-time session coordination, and AWS Amplify for analytics.",
    role: "Frontend Engineer",
    period: "2022 – 2023",
    status: "production",
    category: "frontend",
    highlights: [
      "JWPlayer integration for video recording and playback within course flow",
      "Socket.IO for real-time session coordination between candidate and server",
      "Redux + redux-saga for complex async state management",
      "Storybook component library documentation",
      "Flow static typing across the codebase",
      "Device and browser detection via DetectRTC + ua-parser-js",
    ],
    techStack: [
      {
        category: "Frontend Framework",
        items: ["React 16", "Redux", "redux-saga", "React Router 4", "Flow (type checker)"],
      },
      {
        category: "Media & Real-time",
        items: ["react-jw-player (JWPlayer)", "Socket.IO client", "hark (audio activity detection)", "DetectRTC", "ua-parser-js"],
      },
      {
        category: "Analytics & Monitoring",
        items: ["AWS Amplify", "AWS Mobile Analytics", "astrnt-web-logger (custom logger)", "@sentry/react"],
      },
      {
        category: "UI & UX",
        items: ["Reactstrap", "Bootstrap", "Styled Components", "react-circular-progressbar", "react-image-lightbox", "sweetalert2"],
      },
      {
        category: "Documentation",
        items: ["Storybook"],
      },
    ],
    integrations: [
      { name: "AWS Amplify", purpose: "Analytics and session management", type: "infra" },
      { name: "Socket.io", purpose: "Real-time session coordination and progress sync", type: "realtime" },
      { name: "Sentry", purpose: "Production error tracking", type: "monitoring" },
    ],
    features: [
      {
        title: "Video Interview Engine",
        description: "Candidates record and play back video answers via JWPlayer integration. Supports multiple recording attempts, playback preview, and submission.",
      },
      {
        title: "MCQ & FTQ Question Engines",
        description: "Dedicated engines for multiple choice (MCQ) and free-text (FTQ) question types within the e-course interview flow.",
      },
      {
        title: "Real-time Session Coordination",
        description: "Socket.IO keeps session state synchronized between candidate and server in real-time — covering timers, progress, and completion signals.",
      },
      {
        title: "Audio Activity Detection",
        description: "hark library detects audio activity to validate microphone input before and during recording sessions.",
      },
      {
        title: "Storybook Component Library",
        description: "All UI components documented in Storybook for design consistency and isolation testing.",
      },
    ],
    architecture:
      "React SPA with Redux + redux-saga for complex async flows. JWPlayer handles video I/O, Socket.IO client keeps the session live. AWS Amplify tracks analytics. Flow provides static typing across the codebase. Built with Webpack and CRA-based toolchain.",
    metrics: [
      { label: "Question Types", value: "3 (Video, MCQ, FTQ)" },
      { label: "State Management", value: "Redux + redux-saga" },
      { label: "Real-time", value: "Socket.IO" },
    ],
    repoPath: "/Users/mac/Astrnt/e-course-web",
    color: "from-indigo-500 to-blue-600",
  },
  {
    slug: "astronaut-api2",
    title: "ASTRNT API v2",
    subtitle: "Node.js REST API — Dual Database & Puppeteer PDF Generation",
    description:
      "Node.js + Express REST API (v2 of ASTRNT's backend) serving courses, enrollments, media management, candidate data, and report generation. Notable for dual-database architecture (MySQL via Sequelize + MongoDB via Mongoose), headless Chrome automation via Puppeteer for PDF and screenshot generation, and formal API design via YAML spec.",
    role: "Backend Engineer",
    period: "2022 – 2023",
    status: "production",
    category: "api",
    highlights: [
      "Dual database: MySQL (Sequelize) + MongoDB (Mongoose) simultaneously",
      "Puppeteer (headless Chrome) for server-side PDF generation and page screenshot capture",
      "pdf-lib + pdf-merger-js for programmatic PDF manipulation and merging",
      "Azure Blob Storage for media and file management",
      "Mocha + Chai + Supertest unit and integration test suite",
      "Formal API design documented in YAML spec (api_design.yaml) before implementation",
    ],
    techStack: [
      {
        category: "Runtime & Framework",
        items: ["Node.js 12", "Express.js", "JWT", "express-session + express-mysql-session"],
      },
      {
        category: "Database",
        items: ["MySQL2 + Sequelize 6 (relational)", "Mongoose 5 + MongoDB (documents)"],
      },
      {
        category: "PDF & Automation",
        items: ["Puppeteer 10 (headless Chrome)", "pdf-lib", "pdf-merger-js"],
      },
      {
        category: "File & Storage",
        items: ["Azure Storage SDK", "Multer (file upload)"],
      },
      {
        category: "Logging & Monitoring",
        items: ["Winston (structured logging)", "Sentry"],
      },
      {
        category: "Testing",
        items: ["Mocha", "Chai", "Supertest"],
      },
    ],
    integrations: [
      { name: "Azure Blob Storage", purpose: "Media and file storage", type: "storage" },
      { name: "MongoDB", purpose: "Document storage alongside relational MySQL", type: "database" },
      { name: "Sentry", purpose: "Error tracking and monitoring", type: "monitoring" },
    ],
    features: [
      {
        title: "Puppeteer PDF & Screenshot Generation",
        description: "Uses headless Chrome (Puppeteer) to generate PDFs and capture page screenshots server-side — enabling complex HTML layouts to be rendered as print-ready documents.",
      },
      {
        title: "Dual Database Architecture",
        description: "Runs MySQL (Sequelize ORM) for relational data and MongoDB (Mongoose) for document storage simultaneously — choosing the right database per data type.",
      },
      {
        title: "PDF Manipulation Pipeline",
        description: "pdf-lib and pdf-merger-js allow programmatic PDF creation, modification, and merging of multiple documents into a single output file.",
      },
      {
        title: "Course & Enrollment Management",
        description: "CRUD API for courses, topics, sections, and student enrollments with progress tracking and completion status.",
      },
      {
        title: "Report Generation",
        description: "Generates structured reports combining relational and document data, exported as PDF via the Puppeteer pipeline.",
      },
    ],
    architecture:
      "Express.js REST API with dual ORM setup: Sequelize for MySQL (structured course/user data) and Mongoose for MongoDB (flexible documents). Puppeteer spawns a headless Chrome instance for PDF/screenshot rendering. Files uploaded via Multer and stored on Azure Blob. Winston for structured logging, Sentry for error tracking. API formally designed in api_design.yaml before implementation.",
    metrics: [
      { label: "API Version", value: "v2" },
      { label: "Databases", value: "MySQL + MongoDB" },
      { label: "Test Framework", value: "Mocha + Chai" },
    ],
    repoPath: "/Users/mac/Astrnt/astronaut-api2",
    color: "from-green-600 to-teal-600",
  },
  {
    slug: "cdc-frontend",
    title: "CDC Marketplace Frontend",
    subtitle: "Career Development Center — Nuxt.js Multi-Role Marketplace",
    description:
      "Nuxt.js 2 SSR/SSG marketplace platform for ASTRNT's Career Development Center. A multi-role platform: learners browse and enroll in courses, apply for jobs and scholarships, attend webinars; creators manage course content via a creator portal. Features real-time notifications via Socket.IO and browser-based video recording via videojs-record.",
    role: "Frontend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "frontend",
    highlights: [
      "Multi-role platform: learner + creator + employer surfaces in one app",
      "videojs-record for browser-based video recording in assessments",
      "nuxt-socket-io for real-time notifications and updates",
      "Social auth login via @nuxtjs/auth",
      "vue2-dropzone + vee-validate for complex file upload and form validation",
      "Self-assessment and skills profiling module",
    ],
    techStack: [
      {
        category: "Frontend Framework",
        items: ["Nuxt.js 2", "Vue 2", "Bootstrap-Vue", "Vuex"],
      },
      {
        category: "Nuxt Modules",
        items: ["@nuxtjs/auth", "@nuxtjs/axios", "@nuxtjs/sentry", "nuxt-socket-io"],
      },
      {
        category: "Media & Forms",
        items: ["videojs-record (video recording)", "vue2-dropzone (file upload)", "vee-validate (form validation)"],
      },
      {
        category: "UI Components",
        items: ["Bootstrap 4", "SweetAlert2", "vue-select", "vue-ellipse-progress"],
      },
    ],
    integrations: [
      { name: "Socket.io", purpose: "Real-time notifications and live updates", type: "realtime" },
      { name: "Sentry", purpose: "Frontend error monitoring", type: "monitoring" },
    ],
    features: [
      {
        title: "Course Catalog & Enrollment",
        description: "Learners browse course categories, search, and enroll. Progress tracked per course with completion status.",
      },
      {
        title: "Creator Portal",
        description: "Course creators manage content, upload videos, manage sections and topics, and track student engagement.",
      },
      {
        title: "Job Listings & Application Flow",
        description: "Integrated job board with category and location filters. Direct application flow linked to ASTRNT interview platform.",
      },
      {
        title: "Scholarship & Beasiswa Programs",
        description: "Dedicated module for browsing and applying to scholarship programs from partner institutions.",
      },
      {
        title: "Self-Assessment & Skills Profiling",
        description: "Candidates complete self-assessments to build a competency profile visible to employers on the platform.",
      },
      {
        title: "Webinar Management",
        description: "Event and webinar listings with registration flow and attendance tracking.",
      },
      {
        title: "Real-time Notifications",
        description: "nuxt-socket-io delivers real-time notifications for course updates, job status changes, and assessment completion.",
      },
    ],
    architecture:
      "Nuxt.js 2 SSR with Vuex for state management. @nuxtjs/auth handles JWT auth flow. nuxt-socket-io for real-time connection to backend. videojs-record for browser-based video capture. Deployed via Azure Pipelines.",
    metrics: [
      { label: "User Roles", value: "3 (Learner, Creator, Employer)" },
      { label: "Platform Features", value: "Courses + Jobs + Scholarships + Webinars" },
    ],
    repoPath: "/Users/mac/Astrnt/cdc-fe-repo",
    color: "from-blue-500 to-cyan-600",
  },
  {
    slug: "cdc-backend",
    title: "CDC Marketplace Backend",
    subtitle: "Career Development Center API — Laravel 8 with Dual Cloud Storage & Payments",
    description:
      "Laravel 8 REST API backend powering the CDC marketplace. Handles authentication via Laravel Passport (OAuth2) + Socialite, course and content management, video metadata via JWPlayer, dual cloud storage (AWS S3 + Azure Blob), Midtrans payment gateway, scholarship management, MCQ/FTQ question banks, voucher system, and admin reporting.",
    role: "Backend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "api",
    highlights: [
      "Laravel Passport OAuth2 authorization server + Socialite social login",
      "Dual cloud storage: AWS S3 + Azure Blob Storage",
      "Midtrans payment gateway for course purchases and transactions",
      "JWPlayer + GetID3 for video media management and metadata extraction",
      "Voyager admin panel for content management",
      "MCQ/FTQ question bank + voucher/discount system",
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Laravel 8", "PHP 7.3/8", "MySQL", "Redis"],
      },
      {
        category: "Auth",
        items: ["Laravel Passport (OAuth2)", "Laravel Socialite (social login)", "JWT"],
      },
      {
        category: "Media",
        items: ["JWPlayer / jwplatform", "GetID3 (audio/video metadata)", "Intervention Image"],
      },
      {
        category: "Storage",
        items: ["AWS S3 (League/Flysystem)", "Azure Blob Storage"],
      },
      {
        category: "Payment",
        items: ["Midtrans PHP"],
      },
      {
        category: "Admin & Reporting",
        items: ["Voyager admin panel", "Yajra DataTables", "Maatwebsite/Excel", "PhpSpreadsheet"],
      },
      {
        category: "Infrastructure",
        items: ["Azure Pipelines", "Docker", "Sentry"],
      },
    ],
    integrations: [
      { name: "Midtrans", purpose: "Course purchase and transaction payment processing", type: "payment" },
      { name: "AWS S3", purpose: "Primary media and file storage", type: "storage" },
      { name: "Azure Blob Storage", purpose: "Secondary media storage", type: "storage" },
      { name: "JWPlayer", purpose: "Video hosting and streaming metadata", type: "storage" },
      { name: "Laravel Socialite", purpose: "Social login for learners and creators", type: "infra" },
      { name: "Sentry", purpose: "Error tracking and monitoring", type: "monitoring" },
    ],
    features: [
      {
        title: "OAuth2 + Social Login",
        description: "Laravel Passport provides a full OAuth2 authorization server. Laravel Socialite handles social login (Google, etc.) for learners and creators.",
      },
      {
        title: "Course & Content Management",
        description: "Full CRUD for courses, topics, sections, and media. Teachers manage their own content; admins have global oversight via Voyager.",
      },
      {
        title: "Video Pipeline (JWPlayer + GetID3)",
        description: "Videos uploaded to S3/Azure, metadata extracted via GetID3 (duration, codec, bitrate), and managed via JWPlayer API for streaming.",
      },
      {
        title: "MCQ & FTQ Question Bank",
        description: "Assessment question management supporting multiple choice and free text — linked to courses for in-course assessments.",
      },
      {
        title: "Payment via Midtrans",
        description: "Handles course purchases, transaction records, and payment status webhooks via Midtrans — the leading Indonesian payment gateway.",
      },
      {
        title: "Voucher & Discount System",
        description: "Coupon/voucher management for promotional pricing on courses, with usage tracking and expiry.",
      },
      {
        title: "Scholarship Management",
        description: "Admin manages scholarship programs, applicants, and status tracking from application to awarding.",
      },
    ],
    architecture:
      "Laravel 8 MVC with Passport OAuth2 server and Socialite for auth. Dual cloud storage: S3 and Azure via League/Flysystem. Media pipeline: upload → S3/Azure → JWPlayer → GetID3 metadata. Voyager admin panel for content ops. PHPUnit test suite. Deployed via Azure Pipelines.",
    metrics: [
      { label: "API Endpoints", value: "70+" },
      { label: "Storage Providers", value: "AWS S3 + Azure" },
      { label: "Auth Methods", value: "OAuth2 + Social Login" },
    ],
    repoPath: "/Users/mac/Astrnt/cdc-be-repo",
    color: "from-cyan-600 to-blue-700",
  },
  {
    slug: "kognisi-frontend",
    title: "Kognisi.id Frontend",
    subtitle: "B2C Learning Platform — Nuxt.js SSG/SSR with SEO Optimization",
    description:
      "Nuxt.js 2 SSG/SSR frontend for Kognisi.id — a public-facing B2C learning marketplace. Learners browse and enroll in courses, track progress, and access a creator portal. Distinct from CDC in its focus on public discoverability: includes Google Analytics, GTM, automated sitemap/robots.txt, and a comprehensive SEO toolchain for organic growth.",
    role: "Frontend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "frontend",
    highlights: [
      "Full SEO toolchain: @nuxtjs/sitemap, @nuxtjs/robots, nuxt-seo, Google site verification",
      "Google Analytics + GTM integration via @nuxtjs/google-analytics",
      "Splide carousel for course discovery UI",
      "Star rating system for course reviews (vue-star-rating)",
      "SSG for static public pages + SSR for authenticated/dynamic views",
      "Social login and personalized learning paths",
    ],
    techStack: [
      {
        category: "Frontend Framework",
        items: ["Nuxt.js 2", "Vue 2", "Bootstrap-Vue", "Vuex"],
      },
      {
        category: "Nuxt Modules",
        items: ["@nuxtjs/auth", "@nuxtjs/axios", "@nuxtjs/google-analytics", "@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxtjs/sentry", "nuxt-seo"],
      },
      {
        category: "UI Components",
        items: ["Bootstrap 4", "Splide (carousel)", "vue-star-rating", "SweetAlert2", "vue-select"],
      },
    ],
    integrations: [
      { name: "Google Analytics + GTM", purpose: "Traffic tracking, conversion events, and tag management", type: "monitoring" },
      { name: "Sentry", purpose: "Frontend error monitoring", type: "monitoring" },
    ],
    features: [
      {
        title: "SEO-Optimized Course Discovery",
        description: "All public course and category pages statically generated for search engine indexing. Sitemap, robots.txt, and structured metadata auto-generated via Nuxt modules.",
      },
      {
        title: "Google Analytics + GTM Integration",
        description: "Full analytics setup with @nuxtjs/google-analytics and GTM for event tracking, conversion funnels, and remarketing audiences.",
      },
      {
        title: "Course Catalog & Enrollment",
        description: "Learners browse courses by category, view details, and enroll. Progress tracking and completion status persisted per user.",
      },
      {
        title: "Creator Portal",
        description: "Content creators manage their courses, upload materials, and track student engagement via a dedicated creator dashboard.",
      },
      {
        title: "Course Reviews & Ratings",
        description: "Learners rate and review courses via vue-star-rating. Ratings visible on course listing and detail pages.",
      },
    ],
    architecture:
      "Nuxt.js 2 with SSG for public/discovery pages and SSR for authenticated/personalized views. @nuxtjs/auth for JWT auth. @nuxtjs/sitemap and @nuxtjs/robots for automated SEO file generation. Google Analytics and GTM injected via Nuxt modules. Deployed via Azure Pipelines.",
    metrics: [
      { label: "Rendering Mode", value: "SSG + SSR" },
      { label: "SEO Modules", value: "Sitemap + Robots + nuxt-seo" },
      { label: "Analytics", value: "Google Analytics + GTM" },
    ],
    repoPath: "/Users/mac/Astrnt/kognisi-frontend",
    color: "from-yellow-500 to-orange-500",
  },
  {
    slug: "kognisi-backend",
    title: "Kognisi.id Backend",
    subtitle: "B2C Learning Platform API — Laravel 8 with MongoDB & Certificate Generation",
    description:
      "Laravel 8 REST API backend for Kognisi.id. Extends the CDC backend scope with hybrid MySQL + MongoDB architecture, image processing pipeline (Intervention Image), automated completion certificate generation, and SEO-friendly slug management. Same dual-cloud storage (S3 + Azure) and JWPlayer video pipeline as the CDC backend.",
    role: "Backend Engineer",
    period: "2023 – 2024",
    status: "production",
    category: "api",
    highlights: [
      "Hybrid database: MySQL (Eloquent) + MongoDB (jenssegers/mongodb) for flexible data models",
      "Certificate generation via CertificateController — PDF completion certificates per learner",
      "Image processing and resizing via Intervention Image",
      "Eloquent-Sluggable for SEO-friendly URL slug management",
      "Dual cloud storage: AWS S3 + Azure Blob",
      "Midtrans payment gateway for course purchases",
    ],
    techStack: [
      {
        category: "Backend",
        items: ["Laravel 8", "PHP 7.3/8", "MySQL", "Redis"],
      },
      {
        category: "Database",
        items: ["MySQL (Eloquent ORM — primary relational)", "MongoDB (jenssegers/mongodb — documents)"],
      },
      {
        category: "Auth",
        items: ["Laravel Passport (OAuth2)", "Laravel Socialite"],
      },
      {
        category: "Media & Images",
        items: ["JWPlayer", "GetID3", "Intervention Image", "cviebrock/Eloquent-Sluggable"],
      },
      {
        category: "Storage",
        items: ["AWS S3", "Azure Blob Storage"],
      },
      {
        category: "Payment",
        items: ["Midtrans PHP"],
      },
      {
        category: "Admin",
        items: ["Voyager admin panel", "Yajra DataTables", "Maatwebsite/Excel"],
      },
    ],
    integrations: [
      { name: "MongoDB", purpose: "Document storage alongside relational MySQL (hybrid architecture)", type: "database" },
      { name: "Midtrans", purpose: "Course purchase payment processing", type: "payment" },
      { name: "AWS S3", purpose: "Primary media storage", type: "storage" },
      { name: "Azure Blob Storage", purpose: "Secondary media storage", type: "storage" },
      { name: "JWPlayer", purpose: "Video streaming and metadata management", type: "storage" },
      { name: "Sentry", purpose: "Error tracking", type: "monitoring" },
    ],
    features: [
      {
        title: "Hybrid MySQL + MongoDB Architecture",
        description: "Uses MySQL for structured relational data (courses, users, enrollments) and MongoDB for flexible document storage — chosen per data type for optimal performance.",
      },
      {
        title: "Certificate Generation",
        description: "CertificateController generates PDF completion certificates for learners who finish a course, personalized with their name and course details.",
      },
      {
        title: "Image Processing Pipeline",
        description: "Intervention Image handles upload, resize, crop, and format conversion for course thumbnails, banners, and profile images.",
      },
      {
        title: "SEO-Friendly Slug Management",
        description: "Eloquent-Sluggable auto-generates and manages URL-safe slugs for courses and categories, enabling clean SEO-optimized URLs.",
      },
      {
        title: "Image Banner Management",
        description: "Dedicated BannerController manages promotional banners displayed on the platform homepage and category pages.",
      },
    ],
    architecture:
      "Laravel 8 MVC with Passport OAuth2. Dual database: Eloquent ORM for MySQL, jenssegers/mongodb for MongoDB. Image pipeline: upload → Intervention Image processing → S3/Azure storage. Video pipeline: JWPlayer + GetID3. Certificate generation via CertificateController (PDF). Voyager admin for content ops. Deployed via Azure Pipelines.",
    metrics: [
      { label: "Databases", value: "MySQL + MongoDB" },
      { label: "Storage Providers", value: "AWS S3 + Azure" },
      { label: "Unique Features", value: "Cert Gen + Hybrid DB + Image Pipeline" },
    ],
    repoPath: "/Users/mac/Astrnt/kognisi-backend",
    color: "from-orange-500 to-yellow-600",
  },
  {
    slug: "web-logger",
    title: "ASTRNT Web Logger",
    subtitle: "Internal npm Library — Session Event Tracking for Interview Apps",
    description:
      "Lightweight JavaScript library built as an internal npm package (published via GitLab registry) for tracking and recording user events during ASTRNT interview and assessment sessions. Consumed by multiple ASTRNT frontend apps (qna-web, e-course-web, recruiter) via git URL dependency. Provides initialize() and recordEvent() with Promise-based async support.",
    role: "Frontend Engineer / Library Author",
    period: "2022",
    status: "production",
    category: "tool",
    highlights: [
      "Distributed as an internal npm package via GitLab registry",
      "Consumed by multiple ASTRNT frontend apps as a git URL dependency",
      "Promise-based async API: initialize() + recordEvent()",
      "Webpack 4 + Babel 7 build pipeline producing a minified distributable bundle",
      "Session context binding: interview_code, candidate_id, job_id, company_id",
    ],
    techStack: [
      {
        category: "Language & Build",
        items: ["Vanilla JavaScript (ES2015+)", "Webpack 4", "Babel 7"],
      },
      {
        category: "Utilities",
        items: ["Lodash", "ESLint"],
      },
    ],
    integrations: [],
    features: [
      {
        title: "Session Initialization",
        description: "initialize() sets up the session context with interview_code, candidate_id, job_id, and company_id — sent with every event for accurate attribution.",
      },
      {
        title: "Promise-based Event Recording",
        description: "recordEvent() returns a Promise, enabling caller apps to await confirmation before proceeding (e.g. before submitting an answer).",
      },
      {
        title: "Multi-app Distribution",
        description: "Published to GitLab's internal package registry and installed via git URL in qna-web, e-course-web, and recruiter — a single source of truth for event tracking logic.",
      },
    ],
    architecture:
      "Single-file JS library bundled via Webpack 4 + Babel 7 into dist/astrnt-web-logger.min.js. Published as an internal npm package via GitLab registry. Consumers install via git URL and import the initialize/recordEvent API.",
    metrics: [
      { label: "Consuming Apps", value: "3+" },
      { label: "Distribution", value: "Internal npm (GitLab)" },
      { label: "Bundle", value: "Minified via Webpack 4" },
    ],
    repoPath: "/Users/mac/Astrnt/web-logger",
    color: "from-gray-500 to-slate-600",
  },

  // ─── Smooets ───────────────────────────────────────────────────────────────

  {
    slug: "bca-assessment",
    title: "BCA Assessment Platform",
    subtitle: "Vue.js Technical Assessment App for Bank Central Asia",
    description:
      "Frontend technical assessment application built for Bank Central Asia (BCA) by Smooets agency. A Vue.js 2 SPA with Vuetify Material Design for managing two inventory catalog entities — JenisBarang (Item Category: code, name, price, currency, unit, size) and TipeBarang (Item Type: composite key, description, status AKTIF/NON-AKTIF). Includes PWA service worker, Excel export, Google reCAPTCHA, and JWT authentication.",
    role: "Frontend Engineer",
    period: "2017 – 2018",
    status: "archived",
    category: "frontend",
    highlights: [
      "Built for Bank Central Asia (BCA) — Indonesia's largest private bank",
      "Two-entity CRUD SPA: JenisBarang (Item Category) and TipeBarang (Item Type)",
      "PWA service worker for offline-capable sessions",
      "Vuelidate form validation on all create/update flows",
      "Excel export via vue-xlsx-table",
      "Google reCAPTCHA v2 on form submission",
      "JWT session management via js-cookie",
    ],
    techStack: [
      { category: "Framework", items: ["Vue.js 2.5", "Vue Router 3", "Vuex"] },
      { category: "UI", items: ["Vuetify 1.4 (Material Design)"] },
      { category: "Features", items: ["Vuelidate (form validation)", "vue-xlsx-table (Excel export)", "js-cookie (JWT session)", "Google reCAPTCHA v2"] },
      { category: "Build", items: ["Webpack", "Babel", "Service Worker (PWA)"] },
    ],
    integrations: [
      { name: "Google reCAPTCHA", purpose: "Bot prevention on assessment submission", type: "infra" },
    ],
    features: [
      { title: "Inventory CRUD (JenisBarang)", description: "Full CRUD for Item Categories: kodeJenis, namaJenis, harga (price), mataUang (IDR/USD), satuan (unit), ukuran (size)." },
      { title: "Inventory CRUD (TipeBarang)", description: "Item Types with composite PK (kodeJenis + kodeTipe), keterangan (description), status (AKTIF/NON-AKTIF)." },
      { title: "PWA / Offline Support", description: "Service worker caches app shell for offline access." },
    ],
    architecture:
      "Vue.js 2 SPA with Vuex for state. Vuelidate handles form validation. Service worker registered via Webpack. API base: bca-modern-web-api.stagingapps.net/api/v1. JWT stored in js-cookie.",
    metrics: [
      { label: "Client", value: "Bank Central Asia (BCA)" },
      { label: "Entities", value: "JenisBarang + TipeBarang" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Smooets/bca-fe",
    color: "from-blue-500 to-blue-700",
  },

  {
    slug: "roomme",
    title: "RoomMe",
    subtitle: "Indonesian Room Rental Marketplace — Daily & Monthly Booking",
    description:
      "Frontend for RoomMe — an Indonesian property rental platform for daily and monthly room/apartment stays. Angular 7 SPA with bilingual EN/ID UI, Firebase real-time data, NICEPAY payment gateway (BCA Virtual Account, ATM transfer, credit card), social login (Google + Facebook), property gallery, date range booking, and infinite scroll listings. Payment recipient: PT DUIT ORANG TUA (DOT).",
    role: "Frontend Engineer",
    period: "2018 – 2019",
    status: "archived",
    category: "frontend",
    highlights: [
      "NICEPAY payment gateway: BCA Virtual Account, ATM transfer, and credit card",
      "Social login via Google OAuth and Facebook (Firebase Auth)",
      "Bilingual EN/ID UI using @ngx-translate (full locale JSON files)",
      "Daily and monthly booking modes with date range picker",
      "Property search with location, price, and type filters",
      "Infinite scroll listings with ngx-gallery carousel",
      "Firebase project: roomme-84cd2 (real-time data + auth)",
    ],
    techStack: [
      { category: "Framework", items: ["Angular 7", "TypeScript"] },
      { category: "UI", items: ["Angular Material", "Bootstrap 4", "ngx-gallery"] },
      { category: "Features", items: ["ngx-daterangepicker-material", "ngx-infinite-scroll", "@ngx-translate (EN/ID)", "ngx-toastr"] },
      { category: "Backend & Auth", items: ["Firebase (real-time + auth)", "Google OAuth", "Facebook Login"] },
      { category: "Payment", items: ["NICEPAY (BCA VA, ATM, credit card)"] },
    ],
    integrations: [
      { name: "Firebase", purpose: "Real-time data sync and social authentication", type: "database" },
      { name: "NICEPAY", purpose: "BCA Virtual Account, ATM, and credit card payment gateway", type: "payment" },
    ],
    features: [
      { title: "Daily & Monthly Rental Booking", description: "Users book rooms for daily stays (hotel-style) or monthly contracts — separate pricing and booking flows for each mode." },
      { title: "NICEPAY Payment Gateway", description: "Integrated Indonesian payment gateway supporting BCA Virtual Account, ATM bank transfer, and credit card checkout." },
      { title: "Bilingual EN/ID", description: "Full English and Bahasa Indonesia UI via @ngx-translate — users can switch language at any time." },
      { title: "Social Login", description: "Google and Facebook social login via Firebase Auth — pre-fills profile from social account data." },
    ],
    architecture:
      "Angular 7 SPA with lazy-loaded feature modules. Firebase SDK handles auth (Google/Facebook) and real-time data. @ngx-translate loads EN/ID locale JSON at runtime. NICEPAY SDK for payment initiation. Staging: roomme.stagingapps.net.",
    metrics: [
      { label: "Market", value: "Indonesia (PropTech)" },
      { label: "Payment", value: "NICEPAY / BCA VA" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Smooets/roomme-frontend",
    color: "from-emerald-500 to-teal-600",
  },

  {
    slug: "tbig-mobile",
    title: "TBIG Mobile",
    subtitle: "Enterprise Field Operations Platform for Tower Bersama Infrastructure",
    description:
      "Enterprise mobile web admin for PT Tower Bersama Infrastructure Group (TBIG) — Indonesia's largest independent cell tower company. Laravel 5.6 modular backend with Vue.js frontend covering 100+ models: assignments, events, meetings, complaints, news, attendance tracking, traveling approvals, push notifications (FCM), SMS (Infobip), Google Maps geocoding, Zimbra corporate mail, and a points/gamification system.",
    role: "Full-Stack Engineer",
    period: "2017 – 2018",
    status: "archived",
    category: "platform",
    highlights: [
      "Client: PT Tower Bersama Infrastructure Group (TBIG) — Indonesia's largest independent tower company",
      "100+ Eloquent models across assignments, events, meetings, complaints, attendance, travel, notifications",
      "Caffeinated Modules — Backend admin + API modules fully separated",
      "FCM push notifications (per-role and per-user targeting)",
      "Infobip SMS with TBIG SMS masking",
      "Google Maps Geocoding API for location services",
      "Zimbra corporate mail integration",
      "Points & redemption gamification system",
      "Mobile app distribution via iOS plist + Android APK web routes",
    ],
    techStack: [
      { category: "Backend", items: ["Laravel 5.6", "PHP 7.1+", "MySQL", "Laravel Passport (JWT)"] },
      { category: "Frontend", items: ["Vue.js 2.5", "Bootstrap 4", "Laravel Mix"] },
      { category: "Architecture", items: ["Caffeinated Modules (Backend + Api modules)"] },
      { category: "Notifications", items: ["Firebase Cloud Messaging (FCM)", "Infobip SMS (masking: TBiG)"] },
      { category: "Integrations", items: ["Google Maps Geocoding API", "Zimbra Mail (corporate email)"] },
    ],
    integrations: [
      { name: "Firebase Cloud Messaging", purpose: "Per-role and per-user push notifications to mobile staff", type: "realtime" },
      { name: "Infobip", purpose: "SMS notifications with TBiG sender masking", type: "email" },
      { name: "Google Maps", purpose: "Geocoding for office and assignment location services", type: "infra" },
      { name: "Zimbra", purpose: "Corporate email integration for notifications", type: "email" },
    ],
    features: [
      { title: "Assignment Management", description: "Create, assign, and track field assignments with approval flow, participant management, and auto-assignment rules." },
      { title: "Event & Meeting Management", description: "Corporate event and meeting management with speakers, participants, rules, and status tracking." },
      { title: "Attendance Tracking", description: "Staff check-in/check-out tracking with attendance type configuration." },
      { title: "Traveling Approvals", description: "Travel request workflow with participant management and approval status tracking." },
      { title: "Multi-Channel Notifications", description: "FCM push (per-role/per-user), Infobip SMS, and Zimbra email — triple-channel delivery." },
    ],
    architecture:
      "Laravel 5.6 with Caffeinated Modules splitting the codebase into Backend (admin panel) and Api (mobile REST) modules. Passport JWT for mobile API auth. FCM + Infobip for notifications. Google Maps SDK for geocoding. Zimbra SOAP API for corporate mail.",
    metrics: [
      { label: "Client", value: "PT Tower Bersama Infrastructure (TBIG)" },
      { label: "Models", value: "100+ Eloquent models" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Smooets/TBIGMobile",
    color: "from-violet-500 to-purple-700",
  },

  {
    slug: "telko-wallet",
    title: "Pulsaku (Telko Wallet)",
    subtitle: "Mobile Pulsa Top-Up & Digital Wallet for Indonesian Telco Market",
    description:
      "Digital wallet and mobile credit (pulsa) top-up platform branded as Pulsaku, built for the Indonesian telco consumer market. Laravel 5.2 backend with PostgreSQL. Users register via phone number, deposit balance via DOKU payment gateway, and purchase pulsa for any Indonesian carrier via Datacell wholesale API. Includes lucky draw gamification, referral program, bulk push notifications, and 37+ domain models.",
    role: "Full-Stack Engineer",
    period: "2016 – 2017",
    status: "archived",
    category: "platform",
    highlights: [
      "Pulsa (mobile credit) top-up via Datacell wholesale API (DATACELL_USER_ID=62ITI803)",
      "DOKU payment gateway for wallet deposits",
      "Zenziva SMS OTP for phone number verification",
      "Phone prefix → carrier mapping (Telkomsel, XL, Indosat, etc.)",
      "Lucky draw gamification system with transaction-linked entries",
      "Referral program with reward tracking",
      "Mass push notification / blast system (BroadcastDirectory)",
      "37+ domain models across wallet, pulsa, notifications, and admin",
    ],
    techStack: [
      { category: "Backend", items: ["Laravel 5.2", "PHP 5.5.9+", "Sentinel (auth)"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "Payment & Pulsa", items: ["DOKU payment gateway", "Datacell pulsa wholesale API"] },
      { category: "Notifications", items: ["Zenziva SMS OTP", "dompdf (PDF statements)"] },
    ],
    integrations: [
      { name: "Datacell", purpose: "Pulsa wholesale API for all Indonesian carrier top-up", type: "infra" },
      { name: "DOKU", purpose: "Indonesian payment gateway for wallet deposits", type: "payment" },
      { name: "Zenziva SMS", purpose: "SMS OTP for phone number verification", type: "email" },
    ],
    features: [
      { title: "Pulsa Top-Up (All Carriers)", description: "Purchase mobile credit for Telkomsel, XL, Indosat and others. Phone prefix auto-maps to carrier via PrefixCode model." },
      { title: "Digital Wallet + DOKU Deposits", description: "User wallet balance with DOKU payment gateway integration for deposits. Full transaction history." },
      { title: "Lucky Draw Gamification", description: "Transaction-linked lucky draw entries — users earn draw tickets from pulsa purchases." },
      { title: "Referral Program", description: "Referral codes generate UserReward records and track referral chains for commission calculation." },
    ],
    architecture:
      "Laravel 5.2 with API/Backend/Frontend controller namespacing. PostgreSQL for ACID-compliant wallet transactions. Datacell TCP/IP API for pulsa delivery. DOKU redirect payment flow. Zenziva SMS for OTP.",
    metrics: [
      { label: "Brand", value: "Pulsaku / Telko Apps" },
      { label: "Database", value: "PostgreSQL" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Smooets/telko-wallet",
    color: "from-orange-500 to-amber-600",
  },

  {
    slug: "yamaha-revamp",
    title: "Yamaha Indonesia Website Revamp",
    subtitle: "Corporate Platform for PT Yamaha Indonesia Motor Manufacturing (YIMM)",
    description:
      "Full-stack corporate website CMS and public portal for PT Yamaha Indonesia Motor Manufacturing (YIMM) — the official Yamaha Indonesia subsidiary. Laravel 5.2 application with 70+ Eloquent models covering motorcycle products, power products (generators), spare parts, dealer finder with geo search, credit simulation, social media aggregation (Facebook/Instagram/Twitter feeds), brochure downloads, career portal, and RSS feed generation.",
    role: "Full-Stack Engineer",
    period: "2016 – 2017",
    status: "archived",
    category: "platform",
    highlights: [
      "Client: PT Yamaha Indonesia Motor Manufacturing (YIMM) — Jl. Raya Bekasi Km 23, Jakarta",
      "70+ models: motorcycles, power products, spare parts, dealers, social feeds, brochures, careers",
      "Dealer Finder: geo-based dealer search by city/province with DealerOperation and DealerPhone",
      "Social Aggregation: auto-pull and store Facebook, Instagram, and Twitter feeds into DB",
      "Credit Simulation: motorcycle purchase installment calculator",
      "Multi-product catalog: Motorcycles + Power Products (generators/pumps) + Spare Parts",
      "Activity logging via spatie/activitylog on all admin actions",
      "REST API with JWT for mobile app consumption",
    ],
    techStack: [
      { category: "Backend", items: ["Laravel 5.2", "PHP 5.5.9+", "Sentinel (auth)", "MySQL"] },
      { category: "CMS & Admin", items: ["spatie/activitylog", "DataTables", "intervention/image", "Doctrine DBAL"] },
      { category: "Social & Content", items: ["Twitter API (thujohn/twitter)", "RSS Feed generation"] },
    ],
    integrations: [
      { name: "Twitter API", purpose: "Auto-pull and display official Yamaha Indonesia Twitter feed", type: "infra" },
    ],
    features: [
      { title: "Multi-Product Catalog", description: "Full catalog covering motorcycles, power products (generators, pumps, tillers), and spare parts — each with full specs, images, brochures, and featured items." },
      { title: "Dealer Finder", description: "Location-based dealer search by city/province with operating hours, phone numbers, and tags." },
      { title: "Social Media Aggregation", description: "Cron-driven auto-pull of Facebook, Instagram, and Twitter feeds stored in DB for display on the public site." },
      { title: "Credit Simulation", description: "Motorcycle purchase credit/installment calculator for consumers." },
      { title: "Corporate CMS", description: "Full CMS for news, videos (YamahaFilm), static pages, banners, careers, and investor relations." },
    ],
    architecture:
      "Laravel 5.2 with Api/Backend/Auth/Frontend controller namespacing. 70+ Eloquent models. Sentinel for RBAC. spatie/activitylog on model events. thujohn/twitter for Twitter API. Feed package for RSS. Doctrine DBAL for schema introspection.",
    metrics: [
      { label: "Client", value: "PT Yamaha Indonesia Motor Manufacturing (YIMM)" },
      { label: "Models", value: "70+ Eloquent models" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Smooets/yamaha-revamp",
    color: "from-red-500 to-rose-600",
  },

  {
    slug: "cleango",
    title: "CleanGo",
    subtitle: "On-Demand Cleaning Marketplace — Serverless GraphQL on AWS Lambda",
    description:
      "Serverless backend for CleanGo — an on-demand home cleaning services marketplace connecting clients with domestic workers. Three separate Apollo GraphQL APIs: worker mobile app, client app, and admin panel. Deployed on AWS Lambda (ap-southeast-1) with AWS RDS PostgreSQL, AWS Cognito auth, Firebase Admin, FCM push notifications, and PayPal payment. 40+ tables covering reservations, worker profiles, time slots, space types, and insurance.",
    role: "Backend Engineer",
    period: "2018 – 2019",
    status: "archived",
    category: "api",
    highlights: [
      "Three separate GraphQL APIs: /graphql (worker), /client/graphql (client), /admin/graphql (admin)",
      "AWS Lambda (ap-southeast-1) + AWS RDS PostgreSQL — fully serverless production stack",
      "AWS Cognito for user identity management across worker and client apps",
      "Full reservation lifecycle: booking, time slots, space type selection, cleaning hours, insurance",
      "Before/after photo capture stored on AWS S3",
      "Firebase Admin SDK + FCM for push notifications",
      "PayPal for payment processing",
      "40+ tables: workers (with HK status, languages, nationality, skills), clients, reservations, time_slots, insurance_reservations",
    ],
    techStack: [
      { category: "Runtime", items: ["Node.js", "Serverless Framework"] },
      { category: "API", items: ["Apollo Server Lambda (GraphQL)", "apollo-upload-server"] },
      { category: "Infrastructure", items: ["AWS Lambda (ap-southeast-1)", "AWS API Gateway", "AWS RDS PostgreSQL", "AWS S3"] },
      { category: "Auth", items: ["AWS Cognito", "Firebase Admin SDK"] },
      { category: "Notifications", items: ["Firebase Cloud Messaging (FCM)"] },
      { category: "Payment", items: ["PayPal SDK"] },
    ],
    integrations: [
      { name: "AWS Lambda", purpose: "Serverless function hosting for all three GraphQL APIs", type: "infra" },
      { name: "AWS Cognito", purpose: "User identity and token management for worker and client apps", type: "infra" },
      { name: "AWS S3", purpose: "Before/after job photo storage", type: "storage" },
      { name: "Firebase", purpose: "Real-time data sync and push notification targeting", type: "database" },
      { name: "Firebase Cloud Messaging", purpose: "Push notifications to worker and client mobile apps", type: "realtime" },
      { name: "PayPal", purpose: "Cleaning service booking payment processing", type: "payment" },
    ],
    features: [
      { title: "Three Isolated GraphQL APIs", description: "Worker app, client app, and admin panel each have their own Apollo GraphQL endpoint and resolver set — clean domain separation." },
      { title: "Full Reservation Lifecycle", description: "Clients select space type, room count, cleaning hours, extra services, insurance, then book a time slot. Workers execute and upload before/after photos." },
      { title: "Worker Profile Marketplace", description: "Workers have rich profiles: hourly rate, languages, nationality, religion, special skills, work area, experience, and availability time slots." },
      { title: "Insurance for Reservations", description: "Optional insurance can be added to reservations — covered via insurance_reservations table." },
    ],
    architecture:
      "Serverless Framework deploys three Apollo Server handlers as separate Lambda functions behind API Gateway. AWS Cognito handles identity; Firebase Admin syncs user state. FCM push via service account. PayPal for payments. AWS RDS PostgreSQL in ap-southeast-1.",
    metrics: [
      { label: "Architecture", value: "Serverless (AWS Lambda ap-southeast-1)" },
      { label: "APIs", value: "3 GraphQL surfaces (worker / client / admin)" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Smooets/CleanGo",
    color: "from-sky-500 to-cyan-600",
  },

  {
    slug: "smooets-scraper",
    title: "Car Dealership Data Scraper",
    subtitle: "PHP Scraper for Australian Car Dealerships → MongoDB",
    description:
      "Config-driven PHP CLI web scraper built by Smooets (package: smt/scrapper) for Australian car dealerships. Targets Castle Hill FCA Dealer (Chrysler/Fiat/Alfa/Jeep NSW) and Heartland Australia. Crawls listing and detail pages using Goutte + Symfony DomCrawler (CSS selector + XPath), extracts 15+ fields per vehicle, and stores structured documents in MongoDB.",
    role: "Backend Engineer",
    period: "2017",
    status: "archived",
    category: "tool",
    highlights: [
      "Targets: stock.castlehillfcadealer.com.au (Castle Hill FCA, NSW) + heartland.com.au (Heartland Australia)",
      "Extracts: title, VIN, price, type, color, transmission, fuel, body type, odometer, stock no, year, engine, registration, dealer info, features[], images[]",
      "CSS selector + XPath dual-strategy extraction via Symfony DomCrawler",
      "Stores car documents in MongoDB car_items collection",
      "List-page + detail-page crawl in a single configured run",
      "Config DSL: pipe-delimited field selectors per site in config.php",
    ],
    techStack: [
      { category: "Runtime", items: ["PHP 7+"] },
      { category: "Scraping", items: ["Goutte 3.2", "Symfony DomCrawler (CSS + XPath)"] },
      { category: "Storage", items: ["MongoDB (car_items collection)"] },
      { category: "Package", items: ["smt/scrapper (Smooets internal)"] },
    ],
    integrations: [
      { name: "MongoDB", purpose: "Document storage for scraped vehicle listings", type: "database" },
    ],
    features: [
      { title: "Dual-Strategy Extraction", description: "Supports both CSS selector and XPath extraction modes — configurable per field per site in config.php." },
      { title: "List + Detail Crawl", description: "Crawls paginated vehicle listing pages, follows each URL to detail page, extracts full vehicle spec and dealer info." },
      { title: "Config DSL", description: "Pipe-delimited config format: type|selector_type|attribute|fallback|query — swap scraping targets without touching core logic." },
    ],
    architecture:
      "run.php loads config, iterates target site URLs, fetches via Goutte HTTP client, traverses DOM via DomCrawler, writes each vehicle as a MongoDB document to car_items collection.",
    metrics: [
      { label: "Targets", value: "Castle Hill FCA Dealer (AU)" },
      { label: "Fields/Vehicle", value: "15+ structured fields" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Smooets/scrapper",
    color: "from-slate-500 to-zinc-600",
  },

  // ─── Freelance ─────────────────────────────────────────────────────────────

  {
    slug: "ram-asset-management",
    title: "RAM — Rental Asset Management",
    subtitle: "BCA Banking Equipment Maintenance Platform (Vue.js + OpenShift)",
    description:
      "Enterprise Vue.js SPA for Bank Central Asia (BCA)'s internal Rental Asset Management system. Manages the full lifecycle of rented banking equipment (ATM-adjacent devices, passbooks): PM scheduling by period/year, vendor and technician assignment, execution logging (issues, solutions, photos), branch portal for PIC confirmation, technician rating, and bitmasked RBAC (read/write/update/delete per menu). Deployed on OpenShift.",
    role: "Frontend Engineer (Freelance)",
    period: "2018 – 2019",
    status: "archived",
    category: "frontend",
    highlights: [
      "Client: PT Bank Central Asia (BCA) — API: bca-modern-web-api.stagingapps.net",
      "OpenShift deployment (namespace: ram, app: ram-fe, GitLab: git@10.20.213.82:ERP/RAM-FRONTEND.git)",
      "Bitmasked RBAC: per-menu permissions (read=1, insert=2, update=4, delete=8)",
      "PM lifecycle: schedule → vendor assignment → execution → sign-off → rating",
      "Branch portal: BCA branch PIC confirms PM visits and signs off work orders",
      "Technician and vendor rating system (rating, ulasan, ulasanTeknisi, ulasanBarang, ulasanHelpdesk)",
      "18 dummy JSON files with real BCA branch data (KCU Wisma Asia, Jakarta Barat)",
      "CI/CD via Jenkins (Jenkinsfile in repo)",
    ],
    techStack: [
      { category: "Framework", items: ["Vue.js 2.5", "Vue Router 3", "Vuex"] },
      { category: "UI", items: ["Vuetify 1.3 (Material Design)"] },
      { category: "Features", items: ["Excel import/export (xlsx)", "Bitmasked RBAC", "Audit trail"] },
      { category: "CI/CD & Deploy", items: ["Jenkins", "OpenShift"] },
    ],
    integrations: [],
    features: [
      { title: "Bitmasked RBAC", description: "Per-menu access control stored as bitmask (1=read, 2=insert, 4=update, 8=delete) — same model as enterprise ERP systems." },
      { title: "PM Work Order Lifecycle", description: "PM Header created by admin → vendor/technician assigned → execution recorded (keteranganMasalah, keteranganSolusi) → completed with photos → rated." },
      { title: "Branch PIC Portal", description: "BCA branch PICs have their own login to view scheduled PM visits, confirm attendance, and sign off completion." },
      { title: "Asset Taxonomy", description: "Four-level item hierarchy: JenisBarang → TipeBarang → MerkBarang → ModelBarang for granular asset tracking." },
    ],
    architecture:
      "Vue.js SPA with Vuex managing auth state and RBAC permission map. Vuetify for Material Design. Vue Router guards enforce bitmasked per-menu access. Jenkins pipeline builds and deploys to OpenShift. API: bca-modern-web-api.stagingapps.net.",
    metrics: [
      { label: "Client", value: "PT Bank Central Asia (BCA)" },
      { label: "Deploy", value: "OpenShift (enterprise)" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/ram-frontend",
    color: "from-indigo-500 to-blue-600",
  },

  {
    slug: "sipkd-jabar",
    title: "SIPKD Jabar",
    subtitle: "Regional Govt Financial System — Laravel Migration from ASP.NET (V@LID)",
    description:
      "Laravel 5.8 modernization of SIPKD (Sistem Informasi Pengelolaan Keuangan Daerah) — the Indonesian regional government financial management system originally in ASP.NET (V@LID SIPKD R6). Migrates budget planning (DPA, SPD), cash management (SPP, SP2D, BKU), and accounting (journals, BPK) modules to Laravel + Vue.js while retaining the SQL Server database.",
    role: "Full-Stack Engineer (Freelance)",
    period: "2019",
    status: "archived",
    category: "platform",
    highlights: [
      "Modernizes V@LID SIPKD R6 (ASP.NET) → Laravel 5.8 while keeping SQL Server DB",
      "Budget (Anggaran): DPA, SPD, SKPD budget documents",
      "Cash (Kas): SPP, SP2D, BKU workflows",
      "Accounting (Pembukuan): journals, BPK, DASKR/DASKD realization data",
      "Standard government roles: SKPD, PPKD, MDSKPKD, MASKPD, MPSKPD",
      "Full audit trail via owen-it/laravel-auditing with diff tracking",
      "QR code generation for document physical verification",
      "Google OAuth via Socialite for government staff login",
    ],
    techStack: [
      { category: "Backend", items: ["Laravel 5.8", "PHP 7.1.3+", "SQL Server (sqlsrv driver)"] },
      { category: "Frontend", items: ["Vue.js 2.6", "Bootstrap 4", "CoreUI Dashboard", "Laravel Mix"] },
      { category: "Auth & Permissions", items: ["Laravel Socialite (Google OAuth)", "spatie/laravel-permission"] },
      { category: "Features", items: ["owen-it/laravel-auditing", "QR Code generation", "GeoIP tracking"] },
    ],
    integrations: [
      { name: "Google OAuth", purpose: "Social login for government staff accounts", type: "infra" },
    ],
    features: [
      { title: "Budget Module (Anggaran)", description: "DPA, SPD, and SKPD budget document management for regional government financial planning." },
      { title: "Cash Module (Kas)", description: "SPP, SP2D, BKU workflows covering the full government cash disbursement lifecycle." },
      { title: "Full Audit Trail", description: "Every model change captured by laravel-auditing with full diff for government accountability." },
    ],
    architecture:
      "Laravel 5.8 (Rappasoft Boilerplate) with SQL Server driver preserving V@LID SIPKD schema. Vue.js + CoreUI for dashboard. Spatie permission for RBAC. laravel-auditing on Eloquent events. Socialite for Google OAuth.",
    metrics: [
      { label: "Database", value: "SQL Server (V@LID SIPKD schema)" },
      { label: "Migration", value: "ASP.NET (V@LID R6) → Laravel 5.8" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/sipkd-revamp",
    color: "from-green-500 to-emerald-600",
  },

  {
    slug: "papermark",
    title: "Papermark",
    subtitle: "Custom Invitation & Stationery Print Platform with Mobile API",
    description:
      "Laravel 5.2 backend for Papermark — an Indonesian custom stationery and invitation printing platform built by Smooets. Provides AdminLTE admin panel and a REST API (api/v1) for a companion mobile app. Customers configure custom print products (invitations, cards, envelopes) by selecting paper type, layout, color, font, and lining. Nexmo SMS for phone verification (app: AHLOO), Mailgun for email, AWS S3 for file storage.",
    role: "Backend Engineer (Freelance)",
    period: "2016 – 2017",
    status: "archived",
    category: "api",
    highlights: [
      "Dual interface: AdminLTE admin panel + api/v1 REST endpoints for mobile app",
      "Multi-layer product customization: Product → Layout → BackLayout → Color → Font → Lining",
      "Nexmo SMS phone verification (app name: AHLOO)",
      "Mailgun transactional email",
      "AWS S3 file storage (Flysystem)",
      "Hashtag system for product tagging and discovery",
      "Built by Smooets (yoga@smooets.com, adi.r.k@smooets.com, roni.y@smooets.com)",
    ],
    techStack: [
      { category: "Backend", items: ["Laravel 5.2", "PHP 5.5.9+", "Sentinel (auth)"] },
      { category: "Admin", items: ["AdminLTE (admin dashboard)"] },
      { category: "Mobile API", items: ["REST api/v1"] },
      { category: "Notifications", items: ["Nexmo SMS (AHLOO)", "Mailgun (email)"] },
      { category: "Storage", items: ["AWS S3 (Flysystem)", "dompdf (PDF)", "intervention/image"] },
    ],
    integrations: [
      { name: "Nexmo SMS", purpose: "Phone number verification with AHLOO app branding", type: "email" },
      { name: "Mailgun", purpose: "Transactional email delivery", type: "email" },
      { name: "AWS S3", purpose: "Product image and file storage", type: "storage" },
    ],
    features: [
      { title: "Mobile API (api/v1)", description: "REST API for companion mobile app covering product browsing, customization configuration, and order placement." },
      { title: "Product Customization Chain", description: "Category → Product → Layout → BackLayout → Color → Font → Lining — each layer is a separate model with relational options." },
      { title: "Order Management", description: "Full order lifecycle from product configuration to processing, with customer directory and city/location delivery management." },
    ],
    architecture:
      "Laravel 5.2 with Sentinel auth. AdminLTE for admin panel UI. api/v1 namespace for mobile REST endpoints. Eloquent relational chain for product customization options. Nexmo for SMS OTP. Mailgun + AWS S3 for communications and storage.",
    metrics: [
      { label: "Developer", value: "Smooets (agency)" },
      { label: "API", value: "AdminLTE + REST api/v1" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/papermark-backend",
    color: "from-pink-500 to-rose-500",
  },

  {
    slug: "paskomnas",
    title: "Paskomnas",
    subtitle: "Indonesian Multi-Vendor Marketplace with DOKU Payment",
    description:
      "Laravel 5.1 multi-vendor e-commerce marketplace for the Indonesian market. Full-stack with admin panel, REST API, and client storefront. Features shopping cart (gloudemans), DOKU payment gateway, Excel bulk operations, PDF invoicing, multi-language EN/ID, product regions, retail pricing variants, and a Smooets-built CRUD generator package bundled in /packages/smooets/crud-generator.",
    role: "Full-Stack Engineer (Freelance)",
    period: "2015 – 2016",
    status: "archived",
    category: "platform",
    highlights: [
      "DOKU payment gateway integration (Indonesian payment processor)",
      "Multi-vendor marketplace: products with regions and retail pricing variants",
      "Shopping cart via gloudemans/shoppingcart with session persistence",
      "Smooets internal CRUD generator package (packages/smooets/crud-generator)",
      "Excel bulk import/export via maatwebsite/excel",
      "Multi-language EN/ID support with LanguageController",
      "Partner network (TemanPaskomnas), news/FAQ/feedback CMS",
    ],
    techStack: [
      { category: "Backend", items: ["Laravel 5.1", "PHP 5.5.9+", "Sentinel (auth)"] },
      { category: "Payment", items: ["DOKU (Indonesian payment gateway)"] },
      { category: "Features", items: ["gloudemans/shoppingcart", "maatwebsite/excel", "dompdf", "JWT auth"] },
      { category: "Internal", items: ["Smooets CRUD Generator (packages/smooets/crud-generator)"] },
    ],
    integrations: [
      { name: "DOKU", purpose: "Indonesian payment gateway for marketplace transactions", type: "payment" },
    ],
    features: [
      { title: "Multi-Vendor Product Catalog", description: "Products with regional availability (ProductRegion), retail pricing variants (ProductRetail, ProductRetailDetail), images and categories." },
      { title: "Shopping Cart & Checkout", description: "Session-based cart with gloudemans/shoppingcart. DOKU payment integration for checkout completion." },
      { title: "Smooets CRUD Generator", description: "Internal development package (packages/smooets/crud-generator) used to scaffold admin CRUD interfaces." },
    ],
    architecture:
      "Laravel 5.1 with Admin/API/Client/Auth controller namespacing. gloudemans/shoppingcart for cart. DOKU payment redirect flow. maatwebsite/excel for bulk ops. Smooets CRUD generator as a local composer package.",
    metrics: [
      { label: "Market", value: "Indonesia (e-commerce)" },
      { label: "Payment", value: "DOKU (Indonesia)" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/paskomnas",
    color: "from-yellow-500 to-orange-500",
  },

  {
    slug: "pus-cms",
    title: "Puskodal Portal — TNI AD",
    subtitle: "Military Command-and-Control CMS for the Indonesian Army (170+ Tables)",
    description:
      "CodeIgniter 3 web portal for Puskodal (Pusat Pengendalian / Operations Control Center) at Mabes TNI AD (Indonesian Army HQ). Aggregates daily situation reports (lapsit harian) from all 15 regional commands (Kodam). 170+ MySQL tables covering intel/ops/logistics/personnel activities, incident tracking (armed combat, criminal, accidents), border monitoring (Pamtas), territorial agriculture data, BMKG weather, BNPB disaster, UN peacekeeping, and military health facility data.",
    role: "Backend Engineer (Freelance)",
    period: "2018",
    status: "archived",
    category: "platform",
    highlights: [
      "Client: TNI AD (Indonesian Army) — Puskodal, Mabes TNI AD",
      "Covers all 15 Indonesian Army regional commands (Kodam I–XVIII)",
      "170+ tables: incidents, intel, ops, logistics, personnel, territorial, border, weather, disaster",
      "Incident tracking: armed combat (baku tembak), criminal, accidents, brawls, weapons contact",
      "Border monitoring (Pamtas): WNI/WNA/WNTL citizenship data per territory",
      "SPAMAD terrorism/radical monitoring (napiter, raka, raki, rala tables)",
      "BMKG weather integration (forecast + daily + hourly tables)",
      "A-Auth RBAC: Admin, Puskodal, Puskodaldam, Danpuskodal, Kasad & Wakasad, Public roles",
    ],
    techStack: [
      { category: "Backend", items: ["CodeIgniter 3", "PHP 5.2.4+", "MySQL (MariaDB)"] },
      { category: "Auth", items: ["A-Auth (CodeIgniter RBAC)"] },
      { category: "Features", items: ["DOMPDF (PDF generation)", "Debug Bar", "Faker (seeding)"] },
    ],
    integrations: [],
    features: [
      { title: "Daily Situation Reports (Lapsit Harian)", description: "Aggregates situation reports from all 15 Kodam units into HQ dashboard — ops, intel, logistics, personnel." },
      { title: "Incident Tracking (KJL)", description: "Kejadian Luar Biasa: armed combat, criminal incidents, accidents, brawls, and weapons contact — per Puskodal and Puskodaldam." },
      { title: "Border Monitoring (Pamtas)", description: "Tracks border territory data and citizenship types (WNI/WNA/WNTL) per boundary zone." },
      { title: "SPAMAD Tracking", description: "Monitors terrorism/radicalism data: napiter (suspected terrorists), raka, raki, rala categories." },
    ],
    architecture:
      "CodeIgniter 3 MVC with A-Auth for role management. ~170 MySQL tables structured around puskodal_ and puskodaldam_ prefixes per domain. REST API endpoints (/api/*) for data aggregation. Internal IP: 192.168.200.210 (Mabes) and 10.32.2.200 (Puskodal).",
    metrics: [
      { label: "Client", value: "TNI AD (Indonesian Army)" },
      { label: "Tables", value: "170+ MySQL tables" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/pus_cms",
    color: "from-teal-500 to-cyan-600",
  },

  {
    slug: "rip-platform",
    title: "Rest In Peace — Digital Memorial",
    subtitle: "Indonesian Online Memorial & Obituary Platform (restinpeace.id)",
    description:
      "Full-stack Laravel 5.2 platform for restinpeace.id — an Indonesian digital memorial and obituary service. Families create online memorials with photo/video/audio galleries, tribute messages, obituaries, and family trees. Subscription-based with Midtrans payment gateway, PostgreSQL database, AWS S3 media storage, AWS SES email, and Facebook OAuth.",
    role: "Full-Stack Engineer (Freelance)",
    period: "2016 – 2017",
    status: "archived",
    category: "platform",
    highlights: [
      "Domain: restinpeace.id — Indonesian digital memorial SaaS",
      "Memorial galleries: photos, videos, audio recordings, and written stories",
      "Subscription plans with Midtrans payment gateway (Indonesian processor)",
      "PostgreSQL database (unusual choice for Laravel 5.2 era)",
      "AWS S3 (restinpeace bucket, ap-southeast-1) for all media storage",
      "AWS SES for transactional email (support@restinpeace.id)",
      "Facebook OAuth for social login",
      "Dual PDF drivers: DOMPDF + Laravel Snappy (wkhtmltopdf)",
    ],
    techStack: [
      { category: "Backend", items: ["Laravel 5.2", "PHP 5.5.9+", "PostgreSQL", "Sentinel (auth)"] },
      { category: "Storage & Email", items: ["AWS S3 (ap-southeast-1)", "AWS SES", "league/flysystem-aws-s3-v3"] },
      { category: "Payment", items: ["Midtrans (Indonesian payment gateway)"] },
      { category: "Documents", items: ["DOMPDF", "Laravel Snappy (wkhtmltopdf)", "maatwebsite/excel"] },
      { category: "Auth", items: ["Facebook OAuth", "cviebrock/eloquent-sluggable"] },
    ],
    integrations: [
      { name: "AWS S3", purpose: "Memorial photo, video, and audio media storage", type: "storage" },
      { name: "AWS SES", purpose: "Transactional email from support@restinpeace.id", type: "email" },
      { name: "Midtrans", purpose: "Subscription and memorial plan payment processing", type: "payment" },
    ],
    features: [
      { title: "Digital Memorial Creation", description: "Families create memorial pages with biography, profile photo, dates, and customizable background." },
      { title: "Multi-media Gallery", description: "Memorial galleries support photos, videos, audio recordings, and written stories — each with separate storage models." },
      { title: "Tribute Messages", description: "Visitors can leave tribute messages on memorial pages — public or private." },
      { title: "Obituary Management", description: "Formal obituary with family members (ObituaryFamily), gallery, and pricing/package options." },
    ],
    architecture:
      "Laravel 5.2 with Api/Auth/Backend/Frontend controller namespacing. PostgreSQL for ACID-compliant subscriptions. Flysystem S3 driver for media. Midtrans redirect payment flow. DOMPDF + Snappy for PDF. Eloquent Sluggable for SEO-friendly memorial URLs.",
    metrics: [
      { label: "Domain", value: "restinpeace.id" },
      { label: "Payment", value: "Midtrans (Indonesia)" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/rip",
    color: "from-gray-600 to-slate-700",
  },

  {
    slug: "freecarsales",
    title: "Free Car Sales",
    subtitle: "Australian Used Car Marketplace — WordPress + PHP Scraper Pipeline",
    description:
      "WordPress-based used car listing marketplace targeting the Australian market. Custom Motors 2.4 child theme, with a PHP scraper pipeline that crawls Australian dealership sites (Castle Hill FCA Dealer — Chrysler/Fiat/Alfa/Jeep, NSW) and syncs vehicle data from MongoDB into WordPress via the listing-sync module.",
    role: "WordPress Developer (Freelance)",
    period: "2017 – 2018",
    status: "archived",
    category: "frontend",
    highlights: [
      "Australian market: targets Castle Hill FCA Dealer (stock.castlehillfcadealer.com.au) and Heartland Australia",
      "PHP scraper extracts 15+ vehicle fields: VIN, price, type, color, transmission, fuel, body type, odometer, dealer info, images[]",
      "MongoDB staging layer → listing-sync module → WordPress MySQL",
      "Config-driven scraper with CSS/XPath selectors per dealer site",
      "Rate limiting with random sleep (0-20s) between requests",
      "Custom fcs theme (child of Motors 2.4 automotive theme)",
    ],
    techStack: [
      { category: "CMS", items: ["WordPress", "PHP", "MySQL"] },
      { category: "Theme", items: ["fcs (custom child of Motors 2.4)"] },
      { category: "Scraper", items: ["Goutte + Symfony DomCrawler", "MongoDB (staging)", "listing-sync API"] },
    ],
    integrations: [],
    features: [
      { title: "Vehicle Listing Marketplace", description: "WordPress site with Motors theme: vehicle listing pages, search/filter, dealer profiles, and VIN-based detail pages." },
      { title: "Automated Scraper Pipeline", description: "PHP scraper crawls Australian dealership sites (Castle Hill FCA), stores to MongoDB, then listing-sync pushes into WordPress DB." },
      { title: "Config-Driven Multi-Dealer", description: "config.php defines XPath/CSS selectors per dealer — add a new source without changing core scraper logic." },
    ],
    architecture:
      "WordPress CMS with Motors child theme. PHP scraper (Goutte + DomCrawler) crawls dealership sites → stores car_items in MongoDB → listing-sync/api.php reads MongoDB and inserts/updates WordPress posts via direct DB.",
    metrics: [
      { label: "Market", value: "Australia" },
      { label: "Source", value: "Castle Hill FCA Dealer (NSW)" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/freecarsales",
    color: "from-blue-600 to-indigo-600",
  },

  {
    slug: "tfi-binus",
    title: "TFI Binus Web App",
    subtitle: "Angular 9 Student & Admin Portal for Binus University",
    description:
      "Angular 9 SPA for TFI Binus (Universitas Bina Nusantara / Binus University — one of Indonesia's top private universities). Role-based portal with separate admin and student modules: analytics dashboards via Chart.js, ng-zorro Ant Design components, PWA offline capability, and complex lazy-loaded multi-module routing.",
    role: "Frontend Engineer (Freelance)",
    period: "2019 – 2020",
    status: "archived",
    category: "frontend",
    highlights: [
      "Client: Universitas Bina Nusantara (Binus University), Indonesia",
      "Two lazy-loaded modules: admin (requires isAdmin flag) and student",
      "AuthGuardService protects all routes with role-based access",
      "ng-zorro Ant Design as primary component library",
      "Chart.js + ng2-charts for analytics dashboards",
      "Angular service worker (PWA) + IndexedDB for offline/caching",
      "date-fns + moment.js for date handling",
    ],
    techStack: [
      { category: "Framework", items: ["Angular 9", "TypeScript"] },
      { category: "UI", items: ["ng-zorro Ant Design", "Angular Material 8", "Bootstrap 4"] },
      { category: "Charts", items: ["Chart.js", "ng2-charts"] },
      { category: "Features", items: ["Service Worker (PWA)", "IndexedDB", "date-fns", "moment.js", "SweetAlert2"] },
    ],
    integrations: [],
    features: [
      { title: "Student Module", description: "Student-facing portal at / — assignments, schedules, progress tracking. Protected by AuthGuard." },
      { title: "Admin Module", description: "Admin interface at /admin — analytics dashboards, data management, reporting. Requires isAdmin flag." },
      { title: "Analytics Dashboards", description: "Chart.js-powered dashboards with multiple chart types for admin reporting and data visualization." },
    ],
    architecture:
      "Angular 9 with lazy-loaded feature modules. ng-zorro provides the primary component library; Chart.js handles analytics charts. Service worker registered via @angular/pwa for offline capability. Complex route guards for module-level access control.",
    metrics: [
      { label: "Client", value: "TFI Binus" },
      { label: "Framework", value: "Angular 9" },
    ],
    repoPath: "/Volumes/Work/MyJobs/Freelance/TFIBinus",
    color: "from-purple-500 to-violet-600",
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
