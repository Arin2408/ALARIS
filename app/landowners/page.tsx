// app/landowners/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, FileText, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandownerForm } from "@/components/landowner-form"
import { useTranslation } from "@/app/i18n-provider" // adjust path if necessary

const requirementsKeys = [
  "landowners.requirements.wind.farmland",
  "landowners.requirements.wind.pastureland",
  "landowners.requirements.wind.grassland",
  "landowners.requirements.wind.forest",
  "landowners.requirements.wind.formerLandfills",
  "landowners.requirements.wind.reclaimedMines",
]

const requirementsPvKeys = [
  "landowners.requirements.pv.arablePasture",
  "landowners.requirements.pv.motorwayRailway",
  "landowners.requirements.pv.conversionAreas",
  "landowners.requirements.pv.designatedAreas",
]

const processSteps = [
  {
    step: "01",
    titleKey: "landowners.process.submit.title",
    descriptionKey: "landowners.process.submit.desc",
  },
  {
    step: "02",
    titleKey: "landowners.process.assessment.title",
    descriptionKey: "landowners.process.assessment.desc",
  },
  {
    step: "03",
    titleKey: "landowners.process.siteVisit.title",
    descriptionKey: "landowners.process.siteVisit.desc",
  },
  {
    step: "04",
    titleKey: "landowners.process.agreement.title",
    descriptionKey: "landowners.process.agreement.desc",
  },
]

export default function LandownersPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wind-turbines-on-rural-indian-farmland-countryside.jpg"
            alt={t("landowners.hero.imageAlt")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-foreground/90 mb-4 uppercase tracking-wider">
              {t("landowners.hero.kicker")}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance">
              {t("landowners.hero.title")}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
              {t("landowners.hero.subtitle")}
            </p>
            <div className="mt-10">
              {/* <Button size="lg" asChild>
                <Link href="#assessment-form">
                  {t("landowners.hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section (WIND) — TEXT LEFT | IMAGE RIGHT */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text (left on lg+) */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t("landowners.requirements.kicker")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {t("landowners.requirements.wind.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("landowners.requirements.wind.subtitle")}
              </p>
              <ul className="space-y-4">
                {requirementsKeys.map((reqKey) => (
                  <li key={reqKey} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{t(reqKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image (right on lg+) */}
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/aerial-view-suitable-land-for-wind-farm-india-rura.jpg"
                alt={t("landowners.requirements.wind.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements1 Section (PV) — IMAGE LEFT | TEXT RIGHT */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image (left on lg+) */}
            <div className="order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/2.jpg"
                alt={t("landowners.requirements.pv.imageAlt")}
                fill
                className="object-cover"
              />
            </div>

            {/* Text (right on lg+) */}
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {t("landowners.requirements.pv.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("landowners.requirements.pv.subtitle")}
              </p>
              <ul className="space-y-4">
                {requirementsPvKeys.map((reqKey) => (
                  <li key={reqKey} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{t(reqKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t("landowners.process.kicker")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("landowners.process.title")}</h2>
            <p className="text-muted-foreground">
              {t("landowners.process.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card p-6 rounded-lg border border-border h-full">
                  <span className="text-4xl font-bold text-primary/30">{item.step}</span>
                  <h3 className="text-xl font-semibold text-card-foreground mt-4 mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descriptionKey)}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  )
}
