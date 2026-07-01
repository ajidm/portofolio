import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ajid Muhamad — Software Engineer Portfolio",
  description:
    "Portfolio proyek-proyek yang dikerjakan selama bergabung di ASTRNT — platform SaaS rekrutmen berbasis AI.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
