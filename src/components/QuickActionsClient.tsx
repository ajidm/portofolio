"use client"
import dynamic from "next/dynamic"

const QuickActions = dynamic(() => import("@/components/QuickActions"), { ssr: false })

export default function QuickActionsClient() {
  return <QuickActions />
}
