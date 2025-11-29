"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/app/i18n-provider"

export default function DisclaimerPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">{t("disclaimer.title")}</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              {t("disclaimer.lastUpdatedPrefix")} {t("disclaimer.lastUpdatedDate")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("disclaimer.general.title")}</h2>
              <p className="leading-relaxed">{t("disclaimer.general.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("disclaimer.professional.title")}</h2>
              <p className="leading-relaxed">{t("disclaimer.professional.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("disclaimer.projectEstimates.title")}</h2>
              <p className="leading-relaxed">{t("disclaimer.projectEstimates.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("disclaimer.externalLinks.title")}</h2>
              <p className="leading-relaxed">{t("disclaimer.externalLinks.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("disclaimer.images.title")}</h2>
              <p className="leading-relaxed">{t("disclaimer.images.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("disclaimer.contact.title")}</h2>
              <p className="leading-relaxed">
                {t("disclaimer.contact.p1")}{" "}
                <a className="text-primary-foreground underline" href={`mailto:${t("disclaimer.contact.email")}`}>
                  {t("disclaimer.contact.email")}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
