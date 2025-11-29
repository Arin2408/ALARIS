// app/layout.tsx
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { I18nProvider } from "./i18n-provider"           // <-- I18n provider
import { Header } from "@/components/header"            // <-- your header
import { Footer } from "@/components/footer"            // <-- your footer

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ALARIS WIND ENERGY",
  description:
    "Leading wind energy company in India providing wind farm design, installation, maintenance, and consultancy services. Partner with us for clean, sustainable energy solutions.",
  keywords:
    "wind energy, wind farm, wind turbines, renewable energy, wind installation, wind consultancy, India, clean energy, sustainable solutions",
  authors: [{ name: "ALARIS WIND Energy" }],
  openGraph: {
    title: "ALARIS WIND ENERGY",
    description: "Leading wind energy company in India providing comprehensive wind farm solutions.",
    type: "website",
  },
  generator: "v0.app",
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
      <body className={`font-sans antialiased ${inter.className} ${playfair.className}`}>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          
        </I18nProvider>

        <Analytics />
      </body>
    </html>
  )
}
