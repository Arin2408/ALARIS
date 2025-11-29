// app/services/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Wind, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/app/i18n-provider" // adjust path if needed

export default function ServicesPage() {
  const { t } = useTranslation()

  const services = [
    {
      icon: Wind,
      titleKey: "services.cards.planning.title",
      image: "/3.jpg",
      descriptionKey: "services.cards.planning.desc",
      featuresKeys: [
        "services.cards.planning.features.siteAnalysis",
        "services.cards.planning.features.solarIrradiance",
        "services.cards.planning.features.windYield",
        "services.cards.planning.features.economicStudy",
        "services.cards.planning.features.siteSecuring",
        "services.cards.planning.features.gridPlanning",
        "services.cards.planning.features.acquisition",
        "services.cards.planning.features.repowering",
        "services.cards.planning.features.citizenParticipation",
        "services.cards.planning.features.municipalParticipation",
      ],
    },
  ]

  const services1 = [
    {
      icon: Zap,
      titleKey: "services.cards.implementation.title",
      image: "/2.jpg",
      descriptionKey: "services.cards.implementation.desc",
      featuresKeys: [
        "services.cards.implementation.features.permits",
        "services.cards.implementation.features.tender",
        "services.cards.implementation.features.siteTechnology",
        "services.cards.implementation.features.roadFoundation",
        "services.cards.implementation.features.gridCoordination",
        "services.cards.implementation.features.acceptance",
        "services.cards.implementation.features.compliance",
        "services.cards.implementation.features.compensatory",
      ],
    },
  ]

  const processSteps = [
    { step: "01", titleKey: "services.process.consultation", descKey: "services.process.consultationDesc" },
    { step: "02", titleKey: "services.process.assessment", descKey: "services.process.assessmentDesc" },
    { step: "03", titleKey: "services.process.design", descKey: "services.process.designDesc" },
    { step: "04", titleKey: "services.process.delivery", descKey: "services.process.deliveryDesc" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t("services.kicker")}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("services.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("services.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Planning Section — CONTENT LEFT | IMAGE RIGHT */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((service) => (
            <div key={service.titleKey} className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT — CONTENT */}
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t(service.titleKey)}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{t(service.descriptionKey)}</p>

                <ul className="space-y-3 mb-6">
                  {service.featuresKeys.map((fk) => (
                    <li key={fk} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-foreground">{t(fk)}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" asChild>
                  <Link href="/contact">
                    {t("services.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src={service.image} alt={t(service.titleKey)} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Section — IMAGE LEFT | CONTENT RIGHT */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services1.map((service1) => (
            <div key={service1.titleKey} className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT — IMAGE */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src={service1.image} alt={t(service1.titleKey)} fill className="object-cover" />
              </div>

              {/* RIGHT — CONTENT */}
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service1.icon className="h-7 w-7 text-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t(service1.titleKey)}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{t(service1.descriptionKey)}</p>

                <ul className="space-y-3 mb-6">
                  {service1.featuresKeys.map((fk) => (
                    <li key={fk} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-foreground">{t(fk)}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" asChild>
                  <Link href="/contact">
                    {t("services.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t("services.process.kicker")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("services.process.title")}</h2>
            <p className="text-muted-foreground">{t("services.process.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="bg-card p-6 rounded-lg border border-border">
                <span className="text-4xl font-bold text-primary/30">{item.step}</span>
                <h3 className="text-xl font-semibold text-card-foreground mt-4 mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            {t("services.cta.title")}
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t("services.cta.subtitle")}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              {t("services.cta.action")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
