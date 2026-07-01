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
    <main className="min-h-screen" style={{ background: "#0a0f1e" }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(10,15,30,0.9)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm transition-colors" style={{ color: "#64748b" }}>
            <span>←</span>
            <span className="hover:text-white transition-colors">All Projects</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>
              {project.status}
            </span>
            <span className="text-xs" style={{ color: "#475569" }}>
              {categoryLabels[project.category]}
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.color} mb-6`} />
          <h1 className="text-4xl font-bold text-white mb-3">{project.title}</h1>
          <p className="text-lg mb-3" style={{ color: "#94a3b8" }}>{project.subtitle}</p>
          <p className="text-sm" style={{ color: "#64748b" }}>
            {project.period} · {project.role}
          </p>
        </div>

        {/* Description */}
        <section className="mb-12">
          <p className="text-base" style={{ color: "#94a3b8", lineHeight: "1.9" }}>{project.description}</p>
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
                    style={{ background: "rgba(99,102,241,0.2)", color: "#818cf8" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm" style={{ color: "#cbd5e1", lineHeight: "1.7" }}>{h}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <section className="mb-12">
            <SectionTitle>Metrics & Scale</SectionTitle>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
                  <div className="text-[11px]" style={{ color: "#64748b" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="mb-12">
          <SectionTitle>Tech Stack & Libraries</SectionTitle>
          <div className="space-y-4">
            {project.techStack.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#475569" }}>
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: "rgba(255,255,255,0.06)", color: "#cbd5e1" }}
                    >
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
            <SectionTitle>Third-Party & Provider Integrations</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.integrations.map((intg) => (
                <div
                  key={intg.name}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="shrink-0 mt-0.5">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${integrationTypeColors[intg.type]}`}>
                      {intg.type}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{intg.name}</p>
                    <p className="text-xs" style={{ color: "#64748b" }}>{intg.purpose}</p>
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
                  <h4 className="text-sm font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-xs" style={{ color: "#94a3b8", lineHeight: "1.7" }}>{f.description}</p>
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
            <p className="text-sm" style={{ color: "#94a3b8", lineHeight: "1.9" }}>{project.architecture}</p>
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
              <span style={{ color: "#475569" }} className="text-xs mb-1">← Previous</span>
              <span className="text-white group-hover:text-blue-300 transition-colors font-medium">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col text-sm text-right hover:opacity-80 transition-opacity"
            >
              <span style={{ color: "#475569" }} className="text-xs mb-1">Next →</span>
              <span className="text-white group-hover:text-blue-300 transition-colors font-medium">{next.title}</span>
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
    <h2 className="text-base font-semibold text-white mb-5 flex items-center gap-3">
      <span
        className="block w-6 h-px rounded-full"
        style={{ background: "rgba(99,102,241,0.6)" }}
      />
      {children}
    </h2>
  )
}
