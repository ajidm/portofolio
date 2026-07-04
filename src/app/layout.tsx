import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ajid Muhamad — Software Engineer Portfolio",
  description:
    "Portfolio of projects built during 6+ years at ASTRNT — an AI-powered recruitment SaaS platform.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
