"use client"

import Link from "next/link"
import { Wind, Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from "@/app/i18n-provider"

export function Footer() {
  const { t } = useTranslation()

  const navigation = {
    main: [
      { name: t("nav.home"), href: "/" },
      { name: t("nav.services"), href: "/services" },
      { name: t("nav.about"), href: "/about" },
      { name: t("nav.landowners"), href: "/landowners" },
      // { name: t("nav.projects"), href: "/projects" },
      { name: t("nav.contact"), href: "/contact" },
    ],
    legal: [
      { name: t("footer.legal.privacy"), href: "/privacy" },
      { name: t("footer.legal.terms"), href: "/terms" },
      { name: t("footer.legal.disclaimer"), href: "/disclaimer" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wind className="h-8 w-8" />
              <span className="text-xl font-bold">ALARIS</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.contactTitle")}</h3>
            <ul className="space-y-3">
              
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t("footer.contact.address")}</span>
              </li>

              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{t("footer.contact.phone")}</span>
              </li>

              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{t("footer.contact.email")}</span>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.legal.title")}</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} ALARIS Pvt. Ltd. {t("footer.allRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
