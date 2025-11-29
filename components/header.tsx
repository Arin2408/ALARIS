// components/header.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/app/i18n-provider" // adjust if path differs

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { lang, setLang, t } = useTranslation()

  const toggleLang = () => setLang(lang === "en" ? "de" : "en")

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.landowners"), href: "/landowners" },
    // { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.landsurvey"), href: "/landsurvey" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Wind className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">ALARIS</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}  // FIXED UNIQUE KEY
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Right Side Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <button
            onClick={toggleLang}
            className="rounded-md border px-3 py-1 text-sm"
            aria-label="Toggle language"
          >
            {lang === "en" ? "DE" : "EN"}
          </button>

          <Button asChild>
            <Link href="/contact">{t("nav.contact")}</Link>
          </Button>
        </div>

      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-foreground/20" onClick={() => setMobileMenuOpen(false)} />

          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
            
            {/* Mobile Header */}
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <Wind className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">ALARIS</span>
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="rounded-md border px-3 py-1 text-sm"
                >
                  {lang === "en" ? "DE" : "EN"}
                </button>

                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation List */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">

                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}  // FIXED UNIQUE KEY
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Contact Button */}
                <div className="py-6">
                  <Button asChild className="w-full">
                    <Link href="/contact">{t("nav.contact")}</Link>
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  )
}
