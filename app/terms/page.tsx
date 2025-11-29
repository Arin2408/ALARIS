"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/app/i18n-provider"

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">{t("terms.title")}</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              {t("terms.lastUpdatedPrefix")} {t("terms.lastUpdatedDate")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("terms.acceptance.title")}</h2>
              <p className="leading-relaxed">{t("terms.acceptance.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("terms.services.title")}</h2>
              <p className="leading-relaxed">{t("terms.services.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("terms.websiteUse.title")}</h2>
              <p className="leading-relaxed mb-4">{t("terms.websiteUse.p1")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("terms.websiteUse.items.accurate")}</li>
                <li>{t("terms.websiteUse.items.unlawful")}</li>
                <li>{t("terms.websiteUse.items.unauthorized")}</li>
                <li>{t("terms.websiteUse.items.malicious")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("terms.intellectualProperty.title")}</h2>
              <p className="leading-relaxed">{t("terms.intellectualProperty.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("terms.limitation.title")}</h2>
              <p className="leading-relaxed">{t("terms.limitation.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("terms.governingLaw.title")}</h2>
              <p className="leading-relaxed">{t("terms.governingLaw.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("terms.contact.title")}</h2>
              <p className="leading-relaxed">{t("terms.contact.p1")}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
