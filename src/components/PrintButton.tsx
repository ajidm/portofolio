"use client"

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
      style={{ background: "#4f46e5" }}
    >
      Print / Save PDF
    </button>
  )
}
