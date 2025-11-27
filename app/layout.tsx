import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "farmWIND Energy | Your Partner for Sustainable Wind Energy Solutions",
  description:
    "Leading wind energy company in India providing wind farm design, installation, maintenance, and consultancy services. Partner with us for clean, sustainable energy solutions.",
  keywords:
    "wind energy, wind farm, wind turbines, renewable energy, wind installation, wind consultancy, India, clean energy, sustainable solutions",
  authors: [{ name: "farmWIND Energy" }],
  openGraph: {
    title: "farmWIND Energy | Sustainable Wind Energy Solutions",
    description: "Leading wind energy company in India providing comprehensive wind farm solutions.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#2d6a4f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
