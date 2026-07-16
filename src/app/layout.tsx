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
    "Senior AI-Augmented Fullstack Engineer with 9+ years of experience designing, building, and scaling SaaS platforms, modern web applications, and high-performance backend systems. Laravel · React · Next.js.",
  openGraph: {
    title: "Ajid Muhamad — Senior AI-Augmented Fullstack Engineer",
    description:
      "9+ years building production SaaS · Laravel · React · Next.js · AI-Augmented Engineering",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajid Muhamad — Senior AI-Augmented Fullstack Engineer",
    description: "9+ years building production SaaS · Laravel · React · Next.js",
  },
  robots: { index: true, follow: true },
  keywords: [
    "Fullstack Engineer",
    "Senior Software Engineer",
    "Laravel",
    "React",
    "Next.js",
    "AI-Augmented Engineering",
    "SaaS",
    "TypeScript",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
