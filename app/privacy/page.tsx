"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/app/i18n-provider"

export default function PrivacyPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">{t("privacy.title")}</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              {t("privacy.lastUpdatedPrefix")} {t("privacy.lastUpdatedDate")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.intro.title")}</h2>
              <p className="leading-relaxed">{t("privacy.intro.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.collect.title")}</h2>
              <p className="leading-relaxed mb-4">{t("privacy.collect.p1")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("privacy.collect.items.personal")}</li>
                <li>{t("privacy.collect.items.location")}</li>
                <li>{t("privacy.collect.items.landInfo")}</li>
                <li>{t("privacy.collect.items.technical")}</li>
                <li>{t("privacy.collect.items.usage")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.use.title")}</h2>
              <p className="leading-relaxed mb-4">{t("privacy.use.p1")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("privacy.use.items.respond")}</li>
                <li>{t("privacy.use.items.process")}</li>
                <li>{t("privacy.use.items.quotes")}</li>
                <li>{t("privacy.use.items.updates")}</li>
                <li>{t("privacy.use.items.improve")}</li>
                <li>{t("privacy.use.items.legal")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.security.title")}</h2>
              <p className="leading-relaxed">{t("privacy.security.p1")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.rights.title")}</h2>
              <p className="leading-relaxed mb-4">{t("privacy.rights.p1")}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("privacy.rights.items.access")}</li>
                <li>{t("privacy.rights.items.correct")}</li>
                <li>{t("privacy.rights.items.delete")}</li>
                <li>{t("privacy.rights.items.withdraw")}</li>
                <li>{t("privacy.rights.items.complain")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.contact.title")}</h2>
              <p className="leading-relaxed">
                {t("privacy.contact.p1")}
                <br />
                <br />
                <strong>{t("privacy.contact.emailLabel")}:</strong>{" "}
                <a className="text-primary-foreground underline" href={`mailto:${t("privacy.contact.email")}`}>
                  {t("privacy.contact.email")}
                </a>
                <br />
                <strong>{t("privacy.contact.phoneLabel")}:</strong> {t("privacy.contact.phone")}
                <br />
                <strong>{t("privacy.contact.addressLabel")}:</strong> {t("privacy.contact.address")}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
