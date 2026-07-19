import Link from "next/link"
import { notFound } from "next/navigation"
import {
  projects,
  getProjectBySlug,
  categoryLabels,
  statusColors,
  integrationTypeColors,
} from "@/data/projects"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Ajid Muhamad Portfolio`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <main className="min-h-screen" style={{ background: "#070B14" }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(7,11,20,0.85)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "#64748B" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to projects
          </Link>
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{
                background:
                  project.status === "production"
                    ? "rgba(34,197,94,0.1)"
                    : project.status === "internal"
                    ? "rgba(99,102,241,0.1)"
                    : "rgba(100,116,139,0.1)",
                color:
                  project.status === "production"
                    ? "#4ADE80"
                    : project.status === "internal"
                    ? "#818CF8"
                    : "#64748B",
              }}
            >
              {project.status}
            </span>
            <span className="text-xs" style={{ color: "#475569" }}>
              {categoryLabels[project.category]}
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.color} mb-8`} />
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
            {project.title}
          </h1>
          <p className="text-lg mb-4" style={{ color: "#94A3B8" }}>
            {project.subtitle}
          </p>
          <p className="text-sm" style={{ color: "#475569" }}>
            {project.period} · {project.role}
          </p>
        </div>

        {/* Description */}
        <section className="mb-12">
          <SectionTitle>Description</SectionTitle>
          <p className="text-base" style={{ color: "#94A3B8", lineHeight: "1.9" }}>
            {project.description}
          </p>
        </section>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <section className="mb-12">
            <SectionTitle>Key Highlights</SectionTitle>
            <div className="space-y-3">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                    style={{ background: "rgba(99,102,241,0.2)", color: "#818CF8" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm" style={{ color: "#CBD5E1", lineHeight: "1.7" }}>
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <section className="mb-12">
            <SectionTitle>Metrics &amp; Scale</SectionTitle>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-xl font-bold mb-1" style={{ color: "#F1F5F9" }}>
                    {m.value}
                  </div>
                  <div className="text-[11px]" style={{ color: "#64748B" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="mb-12">
          <SectionTitle>Tech Stack &amp; Libraries</SectionTitle>
          <div className="space-y-4">
            {project.techStack.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <h4
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "#475569" }}
                >
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Third-party Integrations */}
        {project.integrations.length > 0 && (
          <section className="mb-12">
            <SectionTitle>Third-Party &amp; Provider Integrations</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.integrations.map((intg) => (
                <div
                  key={intg.name}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="shrink-0 mt-0.5">
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${integrationTypeColors[intg.type]}`}
                    >
                      {intg.type}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "#F1F5F9" }}>
                      {intg.name}
                    </p>
                    <p className="text-xs" style={{ color: "#64748B" }}>
                      {intg.purpose}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {project.features.length > 0 && (
          <section className="mb-12">
            <SectionTitle>Features</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((f) => (
                <div
                  key={f.title}
                  className="p-5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <h4 className="text-sm font-semibold mb-2" style={{ color: "#F1F5F9" }}>
                    {f.title}
                  </h4>
                  <p className="text-xs" style={{ color: "#94A3B8", lineHeight: "1.7" }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Architecture */}
        <section className="mb-16">
          <SectionTitle>Architecture</SectionTitle>
          <div
            className="p-6 rounded-xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-sm" style={{ color: "#94A3B8", lineHeight: "1.9" }}>
              {project.architecture}
            </p>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <div
          className="flex items-center justify-between pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col text-sm hover:opacity-80 transition-opacity"
            >
              <span className="text-xs mb-1 flex items-center gap-1" style={{ color: "#475569" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 9.5L4.5 6L7.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Previous
              </span>
              <span className="font-medium" style={{ color: "#F1F5F9" }}>
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col text-sm text-right hover:opacity-80 transition-opacity"
            >
              <span className="text-xs mb-1 flex items-center justify-end gap-1" style={{ color: "#475569" }}>
                Next
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-medium" style={{ color: "#F1F5F9" }}>
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold flex items-center gap-3 mb-5" style={{ color: "#F1F5F9" }}>
      <span
        className="block w-6 h-px rounded-full"
        style={{ background: "rgba(99,102,241,0.6)" }}
      />
      {children}
    </h2>
  )
}
