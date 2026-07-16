import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ajid Muhamad — Senior AI-Augmented Fullstack Engineer",
  description:
    "Fullstack engineer with 9+ years building production SaaS at scale. 6+ years at ASTRNT delivering Laravel backends, React/Next.js frontends, AI pipelines, and cloud infrastructure. Open to remote roles.",
  openGraph: {
    title: "Ajid Muhamad — Senior AI-Augmented Fullstack Engineer",
    description:
      "9+ years building production SaaS · Laravel · React · Next.js · TypeScript · AI-Augmented Engineering · Open to remote",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajid Muhamad — Senior AI-Augmented Fullstack Engineer",
    description:
      "9+ years building production SaaS · Laravel · React · Next.js · TypeScript · Open to remote roles",
  },
  robots: { index: true, follow: true },
  keywords: [
    "Fullstack Engineer",
    "Senior Software Engineer",
    "Staff Engineer",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI-Augmented Engineering",
    "AI Engineer",
    "SaaS",
    "Remote Engineer",
    "Indonesia",
    "Bandung",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
