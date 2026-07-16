import Link from "next/link"
import { projects, categoryLabels, statusColors } from "@/data/projects"

export default function HomePage() {
  const totalTechs = new Set(projects.flatMap((p) => p.techStack.flatMap((t) => t.items))).size

  const stats = [
    { label: "Total Projects", value: projects.length.toString() },
    { label: "Production Apps", value: projects.filter((p) => p.status === "production").length.toString() },
    { label: "Tech & Libraries", value: `${totalTechs}+` },
    { label: "Years at ASTRNT", value: "6+" },
  ]

  return (
    <main className="min-h-screen" style={{ background: "#0a0f1e" }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(10,15,30,0.9)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-white text-sm tracking-widest">AJID MUHAMAD</span>
          <div className="flex items-center gap-6 text-sm" style={{ color: "#94a3b8" }}>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <Link
              href="/pdf"
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors hover:opacity-80"
              style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}
            >
              Export PDF
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="animate-fade-in">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Ajid Muhamad
            <br />
            <span className="gradient-text">Fullstack Engineer</span>
          </h1>

          <p className="text-lg max-w-2xl mb-6" style={{ color: "#94a3b8", lineHeight: "1.9" }}>
            <strong style={{ color: "#e2e8f0" }}>Senior AI-Augmented Fullstack Engineer</strong> with{" "}
            <strong style={{ color: "#e2e8f0" }}>9+ years</strong> of experience designing, building, and scaling
            SaaS platforms, modern web applications, and high-performance backend systems.
            Experienced in owning <strong style={{ color: "#e2e8f0" }}>end-to-end feature delivery</strong> — from
            system architecture and database design to production deployment — while collaborating closely with
            product, design, and engineering teams. Passionate about leveraging{" "}
            <strong style={{ color: "#e2e8f0" }}>AI-assisted engineering workflows</strong> to accelerate software
            delivery, improve code quality, and build reliable, maintainable, and scalable systems.
          </p>

          {/* Primary stack badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Laravel", color: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.25)" },
              { label: "React", color: "#38bdf8", bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.25)" },
              { label: "Next.js", color: "#a3a3a3", bg: "rgba(163,163,163,0.1)", border: "rgba(163,163,163,0.2)" },
            ].map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: t.bg, color: t.color, border: `1px solid ${t.border}` }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: t.color }} />
                {t.label}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs" style={{ color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">All Projects</h2>
          <p className="text-sm" style={{ color: "#64748b" }}>
            {projects.length} repositories built at ASTRNT — click any card to see the full detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block rounded-2xl p-5 card-hover group cursor-pointer animate-fade-in"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                animationDelay: `${i * 40}ms`,
              }}
            >
              {/* Color accent */}
              <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${project.color} mb-4`} />

              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors leading-snug">
                  {project.title}
                </h3>
                <span className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-[11px] mb-1" style={{ color: "#64748b" }}>{project.period} · {project.role}</p>

              <p className="text-xs mb-4 line-clamp-3" style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                {project.description}
              </p>

              {/* Tech tags — first 5 */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack
                  .flatMap((t) => t.items)
                  .slice(0, 5)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{ background: "rgba(255,255,255,0.05)", color: "#94a3b8" }}
                    >
                      {tech}
                    </span>
                  ))}
                {project.techStack.flatMap((t) => t.items).length > 5 && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-md"
                    style={{ background: "rgba(255,255,255,0.03)", color: "#475569" }}
                  >
                    +{project.techStack.flatMap((t) => t.items).length - 5} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-[10px]" style={{ color: "#475569" }}>
                  {categoryLabels[project.category]}
                </span>
                <span className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors font-medium">
                  Detail →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
              <p className="text-sm mb-4" style={{ color: "#94a3b8", lineHeight: "1.9" }}>
                Software engineer who has shipped products from zero to production at{" "}
                <strong style={{ color: "#e2e8f0" }}>ASTRNT</strong>, an AI-driven recruitment tech startup.
                Comfortable working across the full stack — database schema design, REST APIs, background workers, and UI/UX implementation.
              </p>
              <p className="text-sm" style={{ color: "#94a3b8", lineHeight: "1.9" }}>
                Experienced in integrating multi-LLM providers (Claude, Gemini, OpenAI) into real product features,
                building event-driven notification systems, and designing scalable multi-tenant SaaS architectures.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Core Expertise</h3>

              {/* Primary stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {["Laravel", "React", "Next.js"].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold px-3 py-1 rounded-lg"
                    style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Supporting skills */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "TypeScript",
                  "Node.js / Express",
                  "MySQL / Redis / Prisma",
                  "Elasticsearch",
                  "Socket.io / WebSocket",
                  "Redux / State Management",
                  "AWS S3 / Azure Blob Storage",
                  "Google Cloud Speech-to-Text",
                  "FFmpeg / Video Processing",
                  "RecordRTC / WebRTC",
                  "AI/LLM Integration",
                  "Stripe / Payment Gateway",
                  "Docker / Azure / CI-CD",
                  "Nuxt.js / Vue",
                  "REST API Design",
                  "Background Job Systems",
                  "Multi-tenant SaaS",
                  "Testing (Cypress, Vitest, PHPUnit)",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-xs" style={{ color: "#94a3b8" }}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#3b82f6" }} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-8 text-center text-xs"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "#334155" }}
      >
        ajid@astrnt.co · Built with Next.js + Tailwind CSS · {new Date().getFullYear()}
      </footer>
    </main>
  )
}
