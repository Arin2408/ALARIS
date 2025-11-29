// app/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Wind as WindIcon, Zap as ZapIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "./i18n-provider"

const services = [
  {
    icon: WindIcon,
    titleKey: "services1.cards.planning.title",
    descriptionKey: "services1.cards.planning.desc",
  },
  {
    icon: ZapIcon,
    titleKey: "services1.cards.implementation.title",
    descriptionKey: "services1.cards.implementation.desc",
  },
]

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/230549.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-foreground/90 mb-4 uppercase tracking-wider">
              {t("hero.kicker")}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  {t("hero.cta_primary")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/services">{t("hero.cta_secondary")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t("about.kicker")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {t("about1.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t("about1.p1")}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{t("about1.p2")}</p>
              <Button variant="outline" asChild>
                <Link href="/about">
                  {t("about1.discover")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/wind-turbine-installation-engineers-working-on-sit.jpg"
                alt={t("about.imageAlt", "Wind turbine installation engineers at work")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t("services1.kicker")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("services1.title")}</h2>
            <p className="text-muted-foreground">{t("services1.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.titleKey}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{t(service.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(service.descriptionKey)}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                {t("services1.view_all")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Landowner CTA */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground uppercase tracking-wider">
                  {t("landowner1.kicker")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                {t("landowner1.title")}
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">{t("landowner1.p")}</p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/landowners">
                  {t("landowner1.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/wind-turbines-on-rural-farmland-in-indian-countrys.jpg"
                alt={t("landowner.imageAlt", "Wind turbines on rural land")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("cta.title")}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{t("cta.p")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("cta.contact")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/landowners">{t("cta.assessment")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
