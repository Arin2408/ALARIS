"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/app/i18n-provider"

export default function AboutPage() {
  const { t } = useTranslation()

  const team = [
    {
      name: t("about.team.thomas.name"),
      role: t("about.team.thomas.role"),
      image: "/thomas-griffith.jpg",
      bio: t("about.team.thomas.bio")
    },
    {
      name: t("about.team.arneH.name"),
      role: t("about.team.arneH.role"),
      image: "/arne.jpg",
      bio: t("about.team.arneH.bio")
    },
    {
      name: t("about.team.carsten.name"),
      role: t("about.team.carsten.role"),
      image: "/CJ-2.jpg",
      bio: t("about.team.carsten.bio")
    },
    {
      name: t("about.team.kristian.name"),
      role: t("about.team.kristian.role"),
      image: "/kristian-schachlewitz.png",
      bio: t("about.team.kristian.bio")
    },
    {
      name: t("about.team.arneS.name"),
      role: t("about.team.arneS.role"),
      image: "/arne-scheschonk.png",
      bio: t("about.team.arneS.bio")
    },
    {
      name: t("about.team.lorenz.name"),
      role: t("about.team.lorenz.role"),
      image: "/LPJ2-2.jpg",
      bio: t("about.team.lorenz.bio")
    },
    {
      name: t("about.team.kai.name"),
      role: t("about.team.kai.role"),
      image: "/kai-olufs.png",
      bio: t("about.team.kai.bio")
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
                {t("about.hero.subtitle")}
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t("about.hero.title")}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.hero.description")}
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/wind-energy-company-headquarters-modern-building-i.jpg"
                alt="Company headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
              {t("about.teamSection.subtitle")}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("about.teamSection.title")}
            </h2>

            <p className="text-muted-foreground">
              {t("about.teamSection.description")}
            </p>
          </div>

          <div className="space-y-16">
            {team.map((member) => (
              <article key={member.name} className="bg-card border border-border rounded-lg p-8">
                <div className="flex gap-10 items-start">

                  {/* IMAGE */}
                  <div className="w-64 flex-shrink-0">
                    <div className="relative w-64 h-64 overflow-hidden rounded-sm bg-muted">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground leading-tight mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("about.cta.title")}
          </h2>

          <p className="text-primary-foreground/90 mb-8">
            {t("about.cta.subtitle")}
          </p>

          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">
              {t("about.cta.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </section> */}

      <Footer />
    </div>
  )
}
