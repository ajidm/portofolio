import Link from "next/link"
import { projects, categoryLabels, statusColors } from "@/data/projects"
import { skills, awards } from "@/data/profile"

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURED_SLUGS = [
  "astrnt-dashboard-v2",
  "recruiter",
  "api-qna",
  "qna-web",
  "public-web",
  "support-dashboard",
]

const featuredProjects = FEATURED_SLUGS
  .map((s) => projects.find((p) => p.slug === s))
  .filter(Boolean) as typeof projects

const otherProjects = projects
  .filter((p) => !FEATURED_SLUGS.includes(p.slug))
  .sort((a, b) => {
    const yearA = parseInt(a.period.split(/[\s–-]/)[0])
    const yearB = parseInt(b.period.split(/[\s–-]/)[0])
    return yearB - yearA
  })

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "6+", label: "Years at ASTRNT" },
  { value: projects.length.toString(), label: "Projects Delivered" },
  {
    value: `${new Set(projects.flatMap((p) => p.techStack.flatMap((t) => t.items))).size}+`,
    label: "Technologies",
  },
]

const achievements = [
  "Led full platform rewrite from Laravel monolith to Next.js 15 App Router — 383+ API routes, 60+ page flows",
  "Architected multi-LLM integration (Claude, Gemini, OpenAI) with automatic key rotation on rate limits — zero downtime",
  "Built AI Matching Engine with Gemini adapter, shadow mode, similarity scoring, and trigger-based recommendations",
  "Designed Talent Management module: 360-degree assessments, peer nominations, talent mapping programs",
  "Implemented atomic background job queue with priority processing, stale job recovery, and progress tracking",
  "Delivered 24 GitHub Actions cron jobs for smart-send, cascade retry, digest processing, and automated alerts",
  "Shipped mandatory 80% unit test coverage (Vitest) + 128 Cypress E2E specs as a pre-merge gate",
  "Integrated Stripe credit-based billing: Checkout Sessions, webhooks, expiry alerts, per-company tracking",
  "Built full media pipeline: Google Cloud Speech-to-Text, FFmpeg transcoding, JWPlayer streaming, Tesseract OCR",
  "Introduced team-wide AI-assisted engineering workflow — reducing PR review cycle time and improving test coverage throughput across all repositories",
  "Led multi-product delivery across 22 repositories: dashboard, recruiter, candidate apps, marketplaces, APIs",
  "Managed multi-cloud infrastructure: Azure Blob, AWS S3, Docker, Azure Pipelines, GitHub Actions CI/CD",
]

const otherExperience = [
  {
    company: "PT. SMOOETS TEKNOLOGI OUTSOURCING",
    role: "Full Stack Web Developer",
    period: "Apr 2016 – Jun 2019",
    years: "3 years",
    type: "Full-time",
    location: "Bandung, Indonesia",
    achievements: [
      "Led development teams on a project basis and provided technical direction throughout the software development lifecycle",
      "Designed system architectures and delivered end-to-end web applications",
      "Built backend services, databases, and API integrations with a focus on performance and maintainability",
      "Developed responsive and user-centric interfaces using modern web technologies",
      "Translated business requirements into structured technical solutions and execution plans",
      "Optimized system performance and improved code quality to support long-term maintainability",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack Developer",
    period: "Jun 2019 – Feb 2020",
    years: "9 months",
    type: "Freelance",
    location: "Bandung & Jakarta, Indonesia",
    achievements: [
      "Designed and developed custom end-to-end web applications",
      "Built secure RESTful APIs, optimized complex SQL queries, and integrated third-party services",
    ],
  },
]

const primaryStack = [
  { label: "Laravel", color: "#FB7185" },
  { label: "React", color: "#38BDF8" },
  { label: "Next.js", color: "#A3A3A3" },
  { label: "TypeScript", color: "#60A5FA" },
  { label: "Node.js", color: "#4ADE80" },
  { label: "Claude AI", color: "#C084FC" },
]

const principles = [
  {
    title: "End-to-End Ownership",
    description:
      "From database schema and API design to frontend UX, production deployment, and documentation — I drive features to completion without hand-offs.",
  },
  {
    title: "Architecture Before Code",
    description:
      "I work through data models, API contracts, and system boundaries before writing code. Structural decisions made early are the hardest to undo — they deserve the most upfront thought.",
  },
  {
    title: "Quality as a Standard",
    description:
      "Mandatory test coverage, CI/CD gates, code review, and E2E specs are how I ship software — not extras added when there's time.",
  },
  {
    title: "Performance is a Feature",
    description:
      "Response times, bundle sizes, query plans, and Core Web Vitals are engineering concerns, not afterthoughts. I design for production load from the first commit.",
  },
  {
    title: "Product-First Thinking",
    description:
      "I understand the business problem before designing the solution. The best technical decision is the one that ships real value to users — reliably, maintainably, and on time.",
  },
  {
    title: "Systems Built to Evolve",
    description:
      "Every system I build is designed to be extended. Clean abstractions, documented decisions, and readable code reduce the cost of every future change.",
  },
]

const aiUseCases = [
  {
    title: "Code Review & Refactoring",
    description:
      "Running LLM-assisted pre-reviews before human review — surfacing edge cases, logic gaps, and maintainability issues early in the cycle. Also using AI to safely refactor legacy code with tests as a safety net.",
  },
  {
    title: "Architecture Exploration",
    description:
      "Drafting system design proposals, exploring trade-offs between architectural patterns, and stress-testing assumptions with AI as a technical sparring partner before committing to an approach.",
  },
  {
    title: "Test Generation",
    description:
      "Generating unit test scaffolding and edge case scenarios from implementation code — making 80%+ coverage practical without the manual overhead that typically makes it skip.",
  },
  {
    title: "Documentation",
    description:
      "Generating API docs, inline comments, and technical READMEs from code — so documentation reflects what's actually shipped, not what was originally planned.",
  },
  {
    title: "Debugging & Root Cause Analysis",
    description:
      "Tracing complex bugs across distributed systems by feeding stack traces, logs, and reproduction steps to LLMs — surfacing likely root causes faster than stepping through manually.",
  },
  {
    title: "Shipping AI-Powered Features",
    description:
      "Integrating multi-LLM pipelines (Claude, Gemini, OpenAI) into production features: candidate matching, automated job generation, CV scoring, and intelligent assessment workflows.",
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main style={{ background: "#060912" }}>

      {/* ══════════════════════════════════════════════ NAV */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(6,9,18,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <Link
            href="/"
            className="font-bold text-sm tracking-widest"
            style={{ color: "#F1F5F9", letterSpacing: "0.14em" }}
          >
            AJID MUHAMAD
          </Link>

          <nav className="nav-links flex items-center gap-8" aria-label="Main navigation">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Awards", href: "#awards" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "#94A3B8" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Link href="/pdf" className="btn-primary" style={{ padding: "8px 18px", fontSize: "13px" }}>
            Download Resume
          </Link>
        </div>
      </header>

      {/* ══════════════════════════════════════════════ HERO */}
      <section
        className="max-w-6xl mx-auto px-6 pt-28 pb-24"
        aria-label="Introduction"
      >
        {/* Status badge */}
        <div className="animate-fade-up mb-8">
          <span
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(34,197,94,0.08)",
              color: "#4ADE80",
              border: "1px solid rgba(34,197,94,0.18)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
              style={{ background: "#4ADE80" }}
              aria-hidden="true"
            />
            Open to new opportunities
          </span>
        </div>

        {/* Name + title */}
        <div className="animate-fade-up delay-100 mb-6">
          <h1
            className="font-extrabold leading-none mb-3"
            style={{ fontSize: "clamp(44px, 8vw, 72px)", letterSpacing: "-0.03em", color: "#F1F5F9" }}
          >
            Ajid Muhamad
          </h1>
          <p
            className="gradient-text font-bold"
            style={{ fontSize: "clamp(22px, 4vw, 36px)", letterSpacing: "-0.015em" }}
          >
            Senior AI-Augmented Fullstack Engineer
          </p>
        </div>

        {/* Summary */}
        <p
          className="animate-fade-up delay-200 max-w-2xl mb-10"
          style={{ color: "#94A3B8", lineHeight: "1.9", fontSize: "17px" }}
        >
          <strong style={{ color: "#F1F5F9", fontWeight: 600 }}>9+ years</strong> building and shipping
          production SaaS. For the past 6+ years at ASTRNT, I&apos;ve led engineering across an
          AI-powered recruitment platform — 22+ applications spanning web, API, AI pipelines, and
          infrastructure. I take{" "}
          <strong style={{ color: "#F1F5F9", fontWeight: 600 }}>end-to-end ownership</strong>: architecture,
          implementation, testing, documentation, and deployment. I build{" "}
          <strong style={{ color: "#F1F5F9", fontWeight: 600 }}>AI-powered product features</strong> using
          Claude, Gemini, and OpenAI — and use AI tooling daily to ship faster without cutting corners.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 mb-12">
          {/* Primary buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/pdf" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </Link>
            <a href="#contact" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center" }}>
              Get in Touch
            </a>
          </div>

          {/* Secondary links */}
          <div className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
            <a
              href="mailto:ajidisme@gmail.com"
              className="transition-colors hover:text-white"
              style={{ color: "#64748B" }}
            >
              ajidisme@gmail.com
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://github.com/ajidm"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              style={{ color: "#64748B" }}
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/ajid-muhamad/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              style={{ color: "#64748B" }}
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Tech stack */}
        <div className="animate-fade-up delay-400 mb-16">
          <p className="text-xs mb-3" style={{ color: "#475569", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Primary Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {primaryStack.map((t) => (
              <span
                key={t.label}
                className="badge"
                style={{
                  background: `${t.color}12`,
                  color: t.color,
                  borderColor: `${t.color}28`,
                  fontWeight: 600,
                }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up delay-500 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div
                className="font-extrabold mb-1"
                style={{ fontSize: "36px", color: "#F1F5F9", letterSpacing: "-0.025em" }}
              >
                {s.value}
              </div>
              <div className="text-xs" style={{ color: "#64748B" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════ ABOUT */}
      <section
        id="about"
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="about-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="section-label">About</span>
          <h2
            id="about-heading"
            className="font-bold mb-16"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em", maxWidth: "600px" }}
          >
            Engineering from architecture to production
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-5">
              <p style={{ color: "#94A3B8", lineHeight: "1.9", fontSize: "15px" }}>
                At{" "}
                <strong style={{ color: "#F1F5F9", fontWeight: 600 }}>ASTRNT</strong>, I&apos;ve spent{" "}
                <strong style={{ color: "#F1F5F9", fontWeight: 600 }}>6+ years</strong> building an
                AI-powered SaaS recruitment platform — from its initial foundation through a full platform
                rewrite and into enterprise scale. I take ownership of the entire delivery chain: database
                schema, API design, background job systems, frontend UX, CI/CD infrastructure, E2E test
                suites, and technical documentation.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.9", fontSize: "15px" }}>
                My work spans Laravel backends, React frontends, Next.js full-stack apps,
                Node.js microservices, and distributed background job systems. What stays consistent
                across all of it: clear data models, well-defined API contracts, and systems that are
                straightforward to maintain and extend.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.9", fontSize: "15px" }}>
                I use LLMs in both directions: as a daily engineering tool — for code review, test
                generation, and architecture exploration — and as a product ingredient. At ASTRNT, I&apos;ve
                shipped multi-LLM pipelines (Claude, Gemini, OpenAI), a candidate matching engine,
                automated scoring systems, and intelligent job generation features.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold mb-4" style={{ color: "#475569", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                What I bring
              </p>
              <div className="space-y-4">
                {[
                  ["End-to-end feature ownership", "From schema design to production deployment, test coverage, and documentation — no handoffs required"],
                  ["PRD & requirements authoring", "Translating product goals into engineering scope — PRDs written before code is written, keeping delivery aligned with business intent"],
                  ["Technical documentation", "API docs, technical READMEs, and inline comments that stay synchronized with implementation — readable by engineers and non-engineers alike"],
                  ["Production architecture", "Multi-tenant SaaS design, scalable REST APIs, atomic background job queues, and distributed systems"],
                  ["AI/LLM product integration", "Shipping production AI features: matching engines, multi-LLM pipelines, scoring systems, and automated job generation"],
                  ["Engineering quality standards", "80%+ unit test mandates, 128 E2E specs, CI/CD gates, and code review — baked into the delivery process, not bolted on"],
                  ["Cross-functional collaboration", "Working across product, design, QA, and business stakeholders — translating requirements into engineering decisions"],
                  ["Multi-platform delivery", "Web apps, REST APIs, background workers, cloud infrastructure, and internal tooling"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                      style={{ background: "rgba(99,102,241,0.15)", color: "#818CF8" }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-medium mb-0.5" style={{ color: "#F1F5F9" }}>{title}</p>
                      <p className="text-xs" style={{ color: "#64748B", lineHeight: "1.6" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ EXPERIENCE */}
      <section
        id="experience"
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="exp-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="section-label">Experience</span>
          <h2
            id="exp-heading"
            className="font-bold mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em" }}
          >
            Where I&apos;ve Worked
          </h2>

          <div
            className="card p-8 md:p-10"
            style={{ borderRadius: "20px" }}
          >
            {/* Header */}
            <div
              className="pb-8 mb-8"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                <p className="text-sm font-semibold" style={{ color: "#6366F1" }}>
                  ASTRNT
                </p>
                <p className="text-sm font-medium" style={{ color: "#94A3B8" }}>Feb 2020 – Present</p>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
                Senior Software Engineer
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "#475569" }}>
                <span
                  className="font-semibold px-2.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(99,102,241,0.10)",
                    color: "#818CF8",
                    border: "1px solid rgba(99,102,241,0.20)",
                  }}
                >
                  6+ years
                </span>
                <span>Full-time · Remote — Bandung, Indonesia</span>
                <span style={{ color: "#334155" }}>·</span>
                <span>AI-powered SaaS recruitment</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm mb-8 max-w-3xl" style={{ color: "#64748B", lineHeight: "1.8" }}>
              Led engineering across 22+ applications on an AI-powered SaaS recruitment platform — serving
              enterprise clients across Southeast Asia. Scope spans candidate and recruiter interfaces, AI
              matching pipelines, background job infrastructure, real-time systems, and multi-cloud
              deployment. From early product through full platform rewrite to enterprise scale.
            </p>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-1">
              {achievements.map((a) => (
                <div key={a} className="achievement">
                  <span className="achievement-dot" aria-hidden="true" />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Previous Experience */}
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {otherExperience.map((exp) => (
              <div key={exp.company} className="card p-7" style={{ borderRadius: "16px" }}>
                <div
                  className="pb-5 mb-5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                    <p className="text-sm font-semibold" style={{ color: "#6366F1" }}>
                      {exp.company}
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#94A3B8" }}>
                      {exp.period}
                    </p>
                  </div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#F1F5F9" }}>
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "#475569" }}>
                    <span
                      className="font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.10)",
                        color: "#818CF8",
                        border: "1px solid rgba(99,102,241,0.20)",
                      }}
                    >
                      {exp.years}
                    </span>
                    <span>{exp.type} · {exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((a) => (
                    <li key={a} className="achievement">
                      <span className="achievement-dot" aria-hidden="true" />
                      <span className="text-xs" style={{ color: "#64748B", lineHeight: "1.7" }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ PROJECTS */}
      <section
        id="projects"
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="projects-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="section-label">Featured Projects</span>
          <h2
            id="projects-heading"
            className="font-bold mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em" }}
          >
            Engineering Case Studies
          </h2>
          <p className="text-sm mb-12 max-w-xl" style={{ color: "#64748B", lineHeight: "1.8" }}>
            Selected projects with technical depth, architectural decisions, and measurable impact.
            Click any card to read the full case study.
          </p>

          {/* Featured 6 — 3-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card card-glow block p-6 group"
                style={{ borderRadius: "16px" }}
                aria-label={`${project.title} — case study`}
              >
                {/* Top accent bar */}
                <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${project.color} mb-5`} aria-hidden="true" />

                {/* Status + category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-widest" style={{ color: "#475569" }}>
                    {categoryLabels[project.category]}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-sm font-semibold mb-1 leading-snug transition-colors group-hover:text-blue-300"
                  style={{ color: "#F1F5F9" }}
                >
                  {project.title}
                </h3>
                <p className="text-[11px] mb-3" style={{ color: "#475569" }}>
                  {project.period} · {project.role}
                </p>

                {/* Description */}
                <p className="text-xs mb-5 line-clamp-3" style={{ color: "#94A3B8", lineHeight: "1.7" }}>
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div
                    className="flex flex-wrap gap-4 mb-5 pb-5"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="text-sm font-bold" style={{ color: "#F1F5F9" }}>{m.value}</div>
                        <div className="text-[10px]" style={{ color: "#475569" }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.flatMap((t) => t.items).slice(0, 5).map((tech) => (
                    <span key={tech} className="badge" style={{ fontSize: "10px", padding: "2px 8px" }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.flatMap((t) => t.items).length > 5 && (
                    <span className="badge" style={{ fontSize: "10px", padding: "2px 8px", color: "#475569" }}>
                      +{project.techStack.flatMap((t) => t.items).length - 5}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end">
                  <span className="text-xs font-medium transition-colors text-blue-500 group-hover:text-blue-400">
                    View Case Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Compact list of other projects */}
          <details className="group">
            <summary
              className="cursor-pointer text-sm font-medium py-4 px-6 rounded-xl flex items-center justify-between"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#94A3B8",
                listStyle: "none",
              }}
            >
              <span>View all {projects.length} projects</span>
              <span className="transition-transform group-open:rotate-180" aria-hidden="true">▾</span>
            </summary>
            <div
              className="mt-2 rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {otherProjects.map((project, i) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-white/[0.02]"
                  style={{
                    borderTop: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}
                    aria-hidden="true"
                  />
                  <span className="text-sm flex-1" style={{ color: "#94A3B8" }}>{project.title}</span>
                  <span className="text-xs hidden sm:block" style={{ color: "#475569" }}>{project.role}</span>
                  <span className="text-xs" style={{ color: "#475569" }}>{project.period}</span>
                  <span className="text-xs" style={{ color: "#6366F1" }}>→</span>
                </Link>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ SKILLS */}
      <section
        id="skills"
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="section-label">Technical Skills</span>
          <h2
            id="skills-heading"
            className="font-bold mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em" }}
          >
            Technology Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: group.color }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="badge" style={{ fontSize: "11px" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ PHILOSOPHY */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="section-label">Engineering Philosophy</span>
          <h2
            id="philosophy-heading"
            className="font-bold mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em", maxWidth: "540px" }}
          >
            How I think about building software
          </h2>
          <p className="text-sm mb-12 max-w-xl" style={{ color: "#64748B", lineHeight: "1.8" }}>
            The principles that guide my engineering decisions — from architecture to code review to
            production deployment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <div key={p.title} className="card p-6" style={{ borderRadius: "14px" }}>
                <div
                  className="text-xs font-bold mb-4 w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.12)", color: "#818CF8" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: "#F1F5F9" }}>
                  {p.title}
                </h3>
                <p className="text-xs" style={{ color: "#64748B", lineHeight: "1.8" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ AI-AUGMENTED */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="ai-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="section-label">AI-Augmented Engineering</span>
          <h2
            id="ai-heading"
            className="font-bold mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em", maxWidth: "600px" }}
          >
            AI as an engineering multiplier
          </h2>
          <p className="text-sm mb-12 max-w-2xl" style={{ color: "#64748B", lineHeight: "1.8" }}>
            AI is part of how I work, not a separate workflow. I use it across code review, test
            generation, documentation, debugging, and architecture — and I ship AI-powered features
            into the products I build.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiUseCases.map((u) => (
              <div
                key={u.title}
                className="p-5 rounded-xl"
                style={{ background: "rgba(99,102,241,0.04)", border: "1px solid rgba(99,102,241,0.12)" }}
              >
                <h3 className="text-sm font-semibold mb-2" style={{ color: "#818CF8" }}>
                  {u.title}
                </h3>
                <p className="text-xs" style={{ color: "#64748B", lineHeight: "1.8" }}>
                  {u.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ AWARDS */}
      <section
        id="awards"
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="awards-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="section-label">Recognition</span>
          <h2
            id="awards-heading"
            className="font-bold mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em" }}
          >
            Awards
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {awards.map((award) => (
              <div
                key={award.title}
                className="card p-7"
                style={{ borderRadius: "16px" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-5"
                  style={{
                    background: "rgba(251,191,36,0.08)",
                    color: "#FBBF24",
                    border: "1px solid rgba(251,191,36,0.18)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {award.date}
                </div>
                <h3 className="text-sm font-bold mb-1" style={{ color: "#F1F5F9", lineHeight: "1.4" }}>
                  {award.title}
                </h3>
                <p className="text-xs font-medium mb-4" style={{ color: "#6366F1" }}>
                  {award.org}
                </p>
                <p className="text-xs" style={{ color: "#64748B", lineHeight: "1.8" }}>
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ CONTACT */}
      <section
        id="contact"
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        aria-labelledby="contact-heading"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Contact</span>
              <h2
                id="contact-heading"
                className="font-bold mb-4"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em" }}
              >
                Let&apos;s work together
              </h2>
              <p className="text-sm mb-8" style={{ color: "#64748B", lineHeight: "1.9" }}>
                Open to Senior Fullstack, Staff Engineer, and AI-Augmented Engineering roles —
                remote or hybrid. If you&apos;re building a product where end-to-end ownership
                matters, let&apos;s talk.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:ajidisme@gmail.com"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Send Email
                </a>
                <Link href="/pdf" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center" }}>
                  Download Resume
                </Link>
              </div>
            </div>

            <div
              className="card p-7"
              style={{ borderRadius: "16px" }}
            >
              {[
                { label: "Email", value: "ajidisme@gmail.com", href: "mailto:ajidisme@gmail.com" },
                { label: "GitHub", value: "github.com/ajidm", href: "https://github.com/ajidm" },
                { label: "Location", value: "Bandung, Indonesia", href: null },
                { label: "Availability", value: "Open to Senior Fullstack / AI-Augmented roles", href: null },
              ].map(({ label, value, href }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-4 py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs w-24 flex-shrink-0" style={{ color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#94A3B8" }}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "#94A3B8" }}>{value}</span>
                  )}
                </div>
              ))}
              <div className="flex items-baseline gap-4 py-4">
                <span className="text-xs w-24 flex-shrink-0" style={{ color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Status
                </span>
                <span
                  className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    color: "#4ADE80",
                    border: "1px solid rgba(34,197,94,0.18)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ FOOTER */}
      <footer
        className="border-t py-8 text-center text-xs"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "#334155" }}
      >
        <p>
          Ajid Muhamad · Senior AI-Augmented Fullstack Engineer · Bandung, Indonesia ·{" "}
          <a href="mailto:ajidisme@gmail.com" className="hover:text-white transition-colors">
            ajidisme@gmail.com
          </a>{" "}
          · Built with Next.js + Tailwind CSS · 2026
        </p>
      </footer>
    </main>
  )
}
