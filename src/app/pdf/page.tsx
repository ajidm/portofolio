import Link from "next/link"
import PrintButton from "@/components/PrintButton"
import { projects, categoryLabels, statusColors, integrationTypeColors } from "@/data/projects"

export default function PdfPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "#fff", color: "#1e293b", fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          body { margin: 0; }
        }
        @page { margin: 20mm 18mm; size: A4; }
      `}</style>

      {/* Print button */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <PrintButton />
        <Link
          href="/"
          className="px-4 py-2 rounded-lg text-sm font-medium"
          style={{ background: "#f1f5f9", color: "#475569" }}
        >
          ← Back
        </Link>
      </div>

      {/* Cover Page */}
      <div
        className="min-h-screen flex flex-col justify-between px-16 py-20"
        style={{ background: "#0a0f1e" }}
      >
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans mb-8"
            style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}
          >
            Software Engineer Portfolio · ASTRNT · 2022–2026
          </div>

          <h1 className="font-sans font-bold mb-3" style={{ fontSize: "52px", color: "#fff", lineHeight: "1.1" }}>
            Ajid Muhamad
          </h1>
          <p className="font-sans text-2xl mb-6" style={{ color: "#818cf8" }}>
            Senior Software Engineer
          </p>
          <p className="font-sans text-base max-w-lg" style={{ color: "#94a3b8", lineHeight: "1.8" }}>
            3+ tahun membangun platform SaaS rekrutmen berbasis AI di ASTRNT.
            Full-stack development — Next.js, Laravel, multi-LLM integration, dan production-grade architecture.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { label: "Projects", value: projects.length },
              { label: "Production Apps", value: projects.filter((p) => p.status === "production").length },
              { label: "Tech Used", value: `${new Set(projects.flatMap((p) => p.techStack.flatMap((t) => t.items))).size}+` },
              { label: "Years Exp.", value: "3+" },
            ].map((s) => (
              <div key={s.label} className="font-sans">
                <div className="font-bold text-white mb-1" style={{ fontSize: "32px" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "#475569" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs" style={{ color: "#334155" }}>
            ajid@astrnt.co · 2026
          </p>
        </div>
      </div>

      {/* Projects */}
      {projects.map((project, idx) => (
        <div key={project.slug} className={idx > 0 ? "page-break" : ""}>
          {/* Project Header */}
          <div className="px-16 pt-16 pb-8" style={{ background: "#0a0f1e" }}>
            <p className="font-sans text-xs mb-3" style={{ color: "#475569" }}>
              {idx + 1} / {projects.length} · {categoryLabels[project.category]} · {project.period}
            </p>
            <h2 className="font-sans font-bold text-white mb-2" style={{ fontSize: "32px" }}>{project.title}</h2>
            <p className="font-sans text-base mb-2" style={{ color: "#94a3b8" }}>{project.subtitle}</p>
            <p className="font-sans text-sm" style={{ color: "#64748b" }}>Role: {project.role}</p>
          </div>

          {/* Content */}
          <div className="px-16 py-10" style={{ background: "#fff" }}>
            {/* Description */}
            <p className="text-sm mb-8" style={{ color: "#374151", lineHeight: "1.9" }}>{project.description}</p>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <div className="mb-8">
                <h3 className="font-sans font-semibold mb-3 uppercase tracking-wide text-xs" style={{ color: "#6b7280" }}>
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#374151", lineHeight: "1.7" }}>
                      <span className="shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold font-sans"
                        style={{ background: "#ede9fe", color: "#7c3aed" }}>
                        {i + 1}
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics */}
            {project.metrics.length > 0 && (
              <div className="mb-8">
                <h3 className="font-sans font-semibold mb-3 uppercase tracking-wide text-xs" style={{ color: "#6b7280" }}>
                  Metrics & Scale
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-lg text-center" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                      <div className="font-sans font-bold text-lg" style={{ color: "#1e293b" }}>{m.value}</div>
                      <div className="font-sans text-[10px]" style={{ color: "#94a3b8" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="font-sans font-semibold mb-3 uppercase tracking-wide text-xs" style={{ color: "#6b7280" }}>
                Tech Stack & Libraries
              </h3>
              <div className="space-y-3">
                {project.techStack.map((cat) => (
                  <div key={cat.category}>
                    <p className="font-sans text-[11px] font-medium mb-1.5" style={{ color: "#94a3b8" }}>
                      {cat.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="font-sans text-[11px] px-2.5 py-1 rounded-md font-medium"
                          style={{ background: "#f1f5f9", color: "#475569" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            {project.integrations.length > 0 && (
              <div className="mb-8">
                <h3 className="font-sans font-semibold mb-3 uppercase tracking-wide text-xs" style={{ color: "#6b7280" }}>
                  Third-Party & Provider Integrations
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {project.integrations.map((intg) => (
                    <div key={intg.name} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                      <span className={`font-sans shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${integrationTypeColors[intg.type]}`}>
                        {intg.type.toUpperCase()}
                      </span>
                      <div>
                        <p className="font-sans text-xs font-semibold" style={{ color: "#1e293b" }}>{intg.name}</p>
                        <p className="font-sans text-[11px]" style={{ color: "#6b7280" }}>{intg.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-sans font-semibold mb-3 uppercase tracking-wide text-xs" style={{ color: "#6b7280" }}>
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <div key={f.title} className="p-3 rounded-lg" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                      <p className="font-sans text-xs font-semibold mb-1" style={{ color: "#1e293b" }}>{f.title}</p>
                      <p className="font-sans text-[11px]" style={{ color: "#6b7280", lineHeight: "1.6" }}>{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture */}
            <div>
              <h3 className="font-sans font-semibold mb-3 uppercase tracking-wide text-xs" style={{ color: "#6b7280" }}>
                Architecture
              </h3>
              <div className="p-4 rounded-lg" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <p className="text-xs" style={{ color: "#374151", lineHeight: "1.8" }}>{project.architecture}</p>
              </div>
            </div>
          </div>

          {/* Page footer */}
          <div
            className="px-16 py-4 flex items-center justify-between font-sans text-[10px]"
            style={{ background: "#0a0f1e", color: "#334155" }}
          >
            <span>Ajid Muhamad · Software Engineer Portfolio</span>
            <span>ajid@astrnt.co · {idx + 1} / {projects.length}</span>
          </div>
        </div>
      ))}
    </main>
  )
}
