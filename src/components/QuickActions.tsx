"use client"
import { useEffect, useState } from "react"

const commands = [
  { label: "about", id: "about" },
  { label: "experience", id: "experience" },
  { label: "projects", id: "projects" },
  { label: "skills", id: "skills" },
  { label: "contact", id: "contact" },
]

export default function QuickActions() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    commands.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(7,11,20,0.85)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto">
        <span className="font-mono text-xs shrink-0" style={{ color: "#475569" }}>
          ~/ajid-muhamad
        </span>
        <span className="font-mono text-xs shrink-0" style={{ color: "#334155" }}>·</span>
        {commands.map((cmd) => (
          <button
            key={cmd.id}
            onClick={() => scrollTo(cmd.id)}
            className={`cmd-btn ${active === cmd.id ? "active" : ""}`}
          >
            <span style={{ color: "#22C55E" }}>$</span>
            {cmd.label}
          </button>
        ))}
        <div className="ml-auto shrink-0">
          <a
            href="/pdf"
            target="_blank"
            className="cmd-btn"
            style={{ color: "#818CF8", borderColor: "rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)" }}
          >
            resume ↓
          </a>
        </div>
      </div>
    </div>
  )
}
