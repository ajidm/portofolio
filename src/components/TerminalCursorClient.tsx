"use client"
import dynamic from "next/dynamic"

const TerminalCursor = dynamic(() => import("@/components/TerminalCursor"), { ssr: false })

export default function TerminalCursorClient() {
  return <TerminalCursor />
}
