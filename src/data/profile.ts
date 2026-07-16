export const profile = {
  name: "Ajid Muhamad",
  title: "Senior AI-Augmented Fullstack Engineer",
  email: "ajidisme@gmail.com",
  github: "github.com/ajidm",
  linkedin: "linkedin.com/in/ajid-muhamad",
  location: "Bandung, Indonesia",
  availability: "Open to Senior Fullstack / AI-Augmented roles",
  yearsTotal: "9+",
  yearsAtAstrnt: "6+",
  summary:
    "Senior AI-Augmented Fullstack Engineer with 9+ years of experience designing, building, and scaling SaaS platforms, modern web applications, and high-performance backend systems. Experienced in owning end-to-end feature delivery — from system architecture and database design to production deployment — while collaborating closely with product, design, and engineering teams. Passionate about leveraging AI-assisted engineering workflows to accelerate software delivery, improve code quality, and build reliable, maintainable, and scalable systems.",
}

export const experience = [
  {
    company: "ASTRNT",
    role: "Senior AI-Augmented Fullstack Engineer",
    period: "Jun 2019 – Present",
    years: "6+ years",
    type: "Full-time",
    location: "Remote — Jakarta, Indonesia",
    description:
      "Building and scaling an AI-powered SaaS recruitment platform serving enterprise clients across Southeast Asia. Delivered 22+ applications across web, API, infrastructure, and tooling layers.",
    achievements: [
      "Led full platform rewrite from Laravel monolith to Next.js 15 App Router — 383+ API routes, 60+ page flows",
      "Architected multi-LLM integration (Claude, Gemini, OpenAI) with automatic key rotation on rate limits — zero downtime",
      "Built AI Matching Engine with Gemini adapter, shadow mode, similarity scoring, and trigger-based candidate recommendations",
      "Designed Talent Management module: 360-degree assessments, peer nominations, talent mapping programs",
      "Implemented atomic background job queue (bg_transactions) with priority processing, stale job recovery, and progress tracking",
      "Delivered 24 GitHub Actions cron jobs for smart-send, cascade retry, digest processing, and automated alerts",
      "Shipped mandatory 80% unit test coverage (Vitest) + 128 Cypress E2E specs as a pre-merge gate",
      "Integrated Stripe credit-based billing: Checkout Sessions, webhooks, expiry alerts, and per-company tracking",
      "Built full media pipeline: Google Cloud Speech-to-Text, FFmpeg transcoding, JWPlayer streaming, Tesseract OCR",
      "Introduced AI-assisted engineering workflow across the team — accelerating delivery and code quality",
      "Led multi-product delivery across 22 repositories: dashboard, recruiter, candidate apps, marketplaces, APIs, and infra",
      "Managed multi-cloud infrastructure: Azure Blob, AWS S3, Docker, Azure Pipelines, GitHub Actions CI/CD",
    ],
  },
]

export const skills = [
  {
    category: "Frontend",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    items: ["React 19", "Next.js 15", "TypeScript 5", "Nuxt.js", "Vue.js", "Tailwind CSS", "Redux", "shadcn/ui", "Radix UI"],
  },
  {
    category: "Backend",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.08)",
    items: ["Laravel", "PHP", "Node.js", "Express.js", "Prisma ORM", "Dingo API", "JWT Auth", "REST API"],
  },
  {
    category: "Database",
    color: "#F97316",
    bg: "rgba(249,115,22,0.08)",
    items: ["MySQL", "MongoDB", "Redis", "Elasticsearch", "Sequelize", "MariaDB"],
  },
  {
    category: "AI & LLM",
    color: "#F472B6",
    bg: "rgba(244,114,182,0.08)",
    items: ["Anthropic Claude", "Google Gemini", "OpenAI GPT", "LLM Integration", "Prompt Engineering"],
  },
  {
    category: "Infrastructure",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    items: ["Docker", "Azure", "AWS S3", "Azure Blob Storage", "GitHub Actions", "Azure Pipelines", "Nginx", "CI/CD"],
  },
  {
    category: "Testing",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.08)",
    items: ["Cypress 15", "Vitest", "PHPUnit", "Playwright", "Mocha", "Supertest", "k6 (Load Testing)"],
  },
  {
    category: "Media & Real-time",
    color: "#22D3EE",
    bg: "rgba(34,211,238,0.08)",
    items: ["Socket.io", "WebSocket", "FFmpeg", "WebRTC", "RecordRTC", "JWPlayer", "Google Cloud Speech"],
  },
  {
    category: "Tools",
    color: "#94A3B8",
    bg: "rgba(148,163,184,0.08)",
    items: ["Git", "Webpack", "Storybook", "Puppeteer", "Stripe", "Midtrans", "Sentry", "Figma"],
  },
]
