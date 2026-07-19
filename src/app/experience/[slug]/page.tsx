import Link from "next/link"
import { notFound } from "next/navigation"
import { experience } from "@/data/profile"
import { getProjectBySlug, categoryLabels, statusColors } from "@/data/projects"

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = experience.find((e) => e.slug === slug)
  if (!entry) return {}
  return {
    title: `${entry.company} — Ajid Muhamad`,
    description: entry.description,
  }
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = experience.find((e) => e.slug === slug)
  if (!entry) notFound()

  const relatedProjects = entry.projectSlugs
    .map((s) => getProjectBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProjectBySlug>>[]

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
            href="/#experience"
            className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            style={{ color: "#64748B" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to experience
          </Link>
          <span className="text-xs" style={{ color: "#475569" }}>
            {entry.type} · {entry.years}
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-14">
          <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${entry.color} mb-8`} />
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
            <p className="text-sm font-semibold" style={{ color: "#6366F1" }}>
              {entry.companyFull}
            </p>
            <p className="text-sm font-medium" style={{ color: "#94A3B8" }}>
              {entry.period}
            </p>
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
            {entry.role}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "#475569" }}>
            <span
              className="font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                background: "rgba(99,102,241,0.10)",
                color: "#818CF8",
                border: "1px solid rgba(99,102,241,0.20)",
              }}
            >
              {entry.years}
            </span>
            <span>{entry.type} · {entry.location}</span>
            <span style={{ color: "#334155" }}>·</span>
            <span>{entry.tagline}</span>
          </div>
        </div>

        {/* Narrative */}
        <section className="mb-14">
          <SectionTitle>Overview</SectionTitle>
          <div className="space-y-4">
            {entry.narrative.map((para, i) => (
              <p key={i} className="text-sm" style={{ color: "#94A3B8", lineHeight: "1.95" }}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Phases — ASTRNT only */}
        {"phases" in entry && Array.isArray(entry.phases) && entry.phases.length > 0 && (
          <section className="mb-14">
            <SectionTitle>Career Phases</SectionTitle>
            <div className="grid sm:grid-cols-3 gap-4">
              {(entry.phases as { title: string; period: string; description: string }[]).map((phase, i) => (
                <div
                  key={phase.title}
                  className="relative p-5 rounded-xl overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                    style={{
                      background: i === 0
                        ? "linear-gradient(90deg, #6366F1, #818CF8)"
                        : i === 1
                        ? "linear-gradient(90deg, #818CF8, #A78BFA)"
                        : "linear-gradient(90deg, #A78BFA, #C084FC)",
                    }}
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#475569" }}>
                    Phase {i + 1}
                  </p>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "#F1F5F9" }}>
                    {phase.title}
                  </h3>
                  <p className="text-xs font-medium mb-3" style={{ color: "#6366F1" }}>
                    {phase.period}
                  </p>
                  <p className="text-xs" style={{ color: "#64748B", lineHeight: "1.75" }}>
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        <section className="mb-14">
          <SectionTitle>Key Achievements</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-3">
            {entry.achievements.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                  style={{ background: "rgba(99,102,241,0.15)", color: "#818CF8" }}
                >
                  {i + 1}
                </span>
                <p className="text-xs" style={{ color: "#CBD5E1", lineHeight: "1.75" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mb-8">
            <SectionTitle>
              Projects — {relatedProjects.length} delivered
            </SectionTitle>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block p-5 rounded-xl transition-all hover:border-white/10"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium" style={{ color: "#475569" }}>
                        {categoryLabels[project.category]}
                      </span>
                      <span
                        className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                        style={{
                          background:
                            project.status === "production"
                              ? "rgba(34,197,94,0.08)"
                              : project.status === "internal"
                              ? "rgba(99,102,241,0.08)"
                              : "rgba(100,116,139,0.08)",
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
                    </div>
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                    >
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold mb-1 group-hover:text-white transition-colors" style={{ color: "#F1F5F9" }}>
                    {project.title}
                  </h3>
                  <p className="text-xs" style={{ color: "#475569" }}>
                    {project.period} · {project.role}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold flex items-center gap-3 mb-5" style={{ color: "#F1F5F9" }}>
      <span className="block w-6 h-px rounded-full" style={{ background: "rgba(99,102,241,0.6)" }} />
      {children}
    </h2>
  )
}
