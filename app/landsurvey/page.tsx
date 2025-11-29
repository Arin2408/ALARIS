"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/app/i18n-provider" // adjust path if necessary

export default function LandSurveyPage() {
  const { t } = useTranslation()

  const [form, setForm] = useState({
    energyType: "",
    federalState: "",
    parcelsQuantity: 1,
    municipality: "",
    district: "",
    parcelNumber: "",
    cadastralRef: "",
    selectedParcel: "",
    parcelAvailable: false,
    corridor: "",
    parcel: "",
    currentUse: "",
    ownerConsent: false,
    firstName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    postalCode: "",
    location: "",
    phone: "",
    email: "",
    comments: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("Land Survey Form submitted:", form)
    alert(t("landsurvey.alert.submitted"))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[420px] md:h-[520px]">
        <Image src="/4.jpg" alt={t("landsurvey.hero.imageAlt")} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <h1 className="text-4xl font-bold">{t("landsurvey.hero.title")}</h1>
            <p className="mt-2 max-w-2xl">{t("landsurvey.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* FORM CARD */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">{t("landsurvey.form.title")}</h2>

              <div className="grid grid-cols-1 gap-6">

                {/* ENERGY TYPE */}
                <label>
                  <span className="text-sm font-medium">{t("landsurvey.form.energyType.label")}</span>
                  <select
                    name="energyType"
                    value={form.energyType}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">{t("landsurvey.form.energyType.placeholder")}</option>
                    <option value="wind">{t("landsurvey.form.energyType.options.wind")}</option>
                    <option value="solar">{t("landsurvey.form.energyType.options.solar")}</option>
                  </select>
                </label>

                {/* FEDERAL STATE */}
                <label>
                  <span className="text-sm font-medium">{t("landsurvey.form.federalState.label")}</span>
                  <select
                    name="federalState"
                    value={form.federalState}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">{t("landsurvey.form.federalState.placeholder")}</option>
                    <option>Baden-Württemberg</option>
                    <option>Bavaria</option>
                    <option>Berlin</option>
                    <option>Brandenburg</option>
                    <option>Hamburg</option>
                    <option>Hesse</option>
                    <option>Lower Saxony</option>
                    <option>North Rhine-Westphalia</option>
                    <option>Saxony</option>
                    <option>Saxony-Anhalt</option>
                    <option>Schleswig-Holstein</option>
                    <option>Thuringia</option>
                  </select>
                </label>

                {/* PARCEL QUANTITY */}
                <label>
                  <span className="text-sm font-medium">{t("landsurvey.form.parcelsQuantity.label")}</span>
                  <input
                    type="number"
                    min={1}
                    name="parcelsQuantity"
                    value={form.parcelsQuantity}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  />
                </label>

                {/* MUNICIPALITY + DISTRICT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.municipality.label")}</span>
                    <input
                      name="municipality"
                      value={form.municipality}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.district.label")}</span>
                    <input
                      name="district"
                      value={form.district}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                </div>

                {/* SELECTED PARCEL (TWO FIELDS) */}
                <label>
                  <span className="text-sm font-medium">{t("landsurvey.form.selectedParcel.label")}</span>
                  <select
                    name="selectedParcel"
                    value={form.selectedParcel}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">{t("landsurvey.form.selectedParcel.placeholder")}</option>
                    <option value="parcel_exists">{t("landsurvey.form.selectedParcel.options.parcelExists")}</option>
                    <option value="no_parcel">{t("landsurvey.form.selectedParcel.options.noParcel")}</option>
                  </select>
                </label>

                {/* CORRIDOR + PARCEL AREA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.corridor.label")}</span>
                    <input
                      name="corridor"
                      value={form.corridor}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.parcel.label")}</span>
                    <input
                      name="parcel"
                      value={form.parcel}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                </div>

                {/* CURRENT USE */}
                <label>
                  <span className="text-sm font-medium">{t("landsurvey.form.currentUse.label")}</span>
                  <select
                    name="currentUse"
                    value={form.currentUse}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">{t("landsurvey.form.currentUse.placeholder")}</option>
                    <option value="farmland">{t("landsurvey.form.currentUse.options.farmland")}</option>
                    <option value="forest">{t("landsurvey.form.currentUse.options.forest")}</option>
                    <option value="landfill">{t("landsurvey.form.currentUse.options.other")}</option>
                  </select>
                </label>

                {/* OWNER CONSENT */}
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="ownerConsent"
                    checked={form.ownerConsent}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm">{t("landsurvey.form.ownerConsent.label")}</span>
                </label>

                {/* FIRST + LAST NAME */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.firstName.label")}</span>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.lastName.label")}</span>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                </div>

                {/* STREET + HOUSE NUMBER */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.street.label")}</span>
                    <input
                      name="street"
                      value={form.street}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.houseNumber.label")}</span>
                    <input
                      name="houseNumber"
                      value={form.houseNumber}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                </div>

                {/* POSTAL CODE + LOCATION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.postalCode.label")}</span>
                    <input
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.location.label")}</span>
                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                </div>

                {/* PHONE + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.phone.label")}</span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">{t("landsurvey.form.email.label")}</span>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                </div>

                {/* COMMENTS */}
                <label>
                  <span className="text-sm font-medium">{t("landsurvey.form.comments.label")}</span>
                  <textarea
                    name="comments"
                    value={form.comments}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                    placeholder={t("landsurvey.form.comments.placeholder")}
                  ></textarea>
                </label>
              </div>

              <div className="mt-6 flex justify-center">
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md">
                  {t("landsurvey.form.submit")}
                </button>
              </div>
            </div>
          </form>

          {/* CARDS BELOW FORM — same as before */}
          <div className="mt-12 space-y-8">
            {/* CARD 1 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h5 className="text-xl font-semibold">{t("landsurvey.cards.partner.title")}</h5>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>{t("landsurvey.cards.partner.items.1")}</li>
                    <li>{t("landsurvey.cards.partner.items.2")}</li>
                    <li>{t("landsurvey.cards.partner.items.3")}</li>
                    <li>{t("landsurvey.cards.partner.items.4")}</li>
                    <li>{t("landsurvey.cards.partner.items.5")}</li>
                    <li>{t("landsurvey.cards.partner.items.6")}</li>
                  </ul>
                </div>
                <div className="relative w-full h-[220px] rounded-md overflow-hidden">
                  <Image src="/3.jpg" fill className="object-cover" alt={t("landsurvey.cards.images.partnerAlt")} />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="relative w-full h-[220px] rounded-md overflow-hidden">
                  <Image src="/2.jpg" fill className="object-cover" alt={t("landsurvey.cards.images.knowhowAlt")} />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">{t("landsurvey.cards.knowhow.title")}</h5>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>{t("landsurvey.cards.knowhow.items.1")}</li>
                    <li>{t("landsurvey.cards.knowhow.items.2")}</li>
                    <li>{t("landsurvey.cards.knowhow.items.3")}</li>
                    <li>{t("landsurvey.cards.knowhow.items.4")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
