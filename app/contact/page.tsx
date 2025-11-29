// app/contact/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useTranslation } from "@/app/i18n-provider" // adjust path if different

export default function ContactPage() {
  const { t } = useTranslation()

  // Contact information uses translation keys so content switches with language
  const contactInfo = [
    {
      icon: MapPin,
      titleKey: "contact.info.visit.title",
      detailsKeys: ["contact.info.visit.line1", "contact.info.visit.line2", "contact.info.visit.line3"],
    },
    {
      icon: Phone,
      titleKey: "contact.info.call.title",
      detailsKeys: ["contact.info.call.line1", "contact.info.call.line2"],
    },
    {
      icon: Mail,
      titleKey: "contact.info.email.title",
      detailsKeys: ["contact.info.email.line1", "contact.info.email.line2"],
    },
    {
      icon: Clock,
      titleKey: "contact.info.hours.title",
      detailsKeys: ["contact.info.hours.line1", "contact.info.hours.line2"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t("contact.hero.kicker")}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{t("contact.hero.title")}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">{t("contact.info.heading")}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <div key={item.titleKey} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t(item.titleKey)}</h3>
                      {item.detailsKeys.map((dk, i) => (
                        <p key={dk} className="text-sm text-muted-foreground">
                          {t(dk)}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t("contact.location.heading")}</h2>
                <div className="bg-muted rounded-lg h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">{t("contact.location.description")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-card-foreground mb-2">{t("contact.form.heading")}</h2>
              <p className="text-muted-foreground mb-8">
                {t("contact.form.subtitle")}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
