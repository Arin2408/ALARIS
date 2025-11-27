// app/landsurvey/page.tsx
"use client"
import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LandSurveyPage() {
  const [form, setForm] = useState({
    energyType: "",
    federalState: "",
    parcelsQuantity: 1,
    municipality: "",
    district: "",
    parcelNumber: "",
    cadastralRef: "",
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

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Land Survey Form submitted:", form)
    alert("Form submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[420px] md:h-[520px]">
        <Image src="/4.jpg" alt="Land Survey Banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <h1 className="text-4xl font-bold">Land Survey</h1>
            <p className="mt-2 max-w-2xl">
              Submit your land details and we will assess its suitability for renewable energy projects.
            </p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* FORM CARD */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Land Survey Form</h2>

              <div className="grid grid-cols-1 gap-6">

                {/* ENERGY TYPE */}
                <label>
                  <span className="text-sm font-medium">Energy type</span>
                  <select
                    name="energyType"
                    value={form.energyType}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">Please select...</option>
                    <option value="wind">Wind Energy</option>
                    <option value="solar">Photovoltaic (PV)</option>
                  </select>
                </label>

                {/* FEDERAL STATE */}
                <label>
                  <span className="text-sm font-medium">Federal state</span>
                  <select
                    name="federalState"
                    value={form.federalState}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">Please select...</option>
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
                  <span className="text-sm font-medium">Number of parcels</span>
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
                    <span className="text-sm font-medium">Municipality</span>
                    <input
                      name="municipality"
                      value={form.municipality}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">District</span>
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
                  <span className="text-sm font-medium">Selected Parcel</span>
                  <select
                    name="energyType"
                    value={form.energyType}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">Pacel available</option>
                    <option value="wind">Hallway exists, no parcel number</option>
                    <option value="solar">No corridor</option>
                  </select>
                </label>

                {/* PARCEL AVAILABLE */}
                {/* <label className="flex gap-2 items-center">
                  <input type="checkbox" name="parcelAvailable" onChange={handleChange} />
                  <span className="text-sm">Parcel available</span>
                </label> */}

                {/* CORRIDOR + PARCEL AREA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">Corridor</span>
                    <input
                      name="corridor"
                      value={form.corridor}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">Parcel </span>
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
                  <span className="text-sm font-medium">Current use</span>
                  <select
                    name="currentUse"
                    value={form.currentUse}
                    onChange={handleChange}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                  >
                    <option value="">Please select...</option>
                    <option value="farmland">Agriculture</option>
                    <option value="forest">Forestry</option>
                    <option value="landfill">Other</option>
                  </select>
                </label>

                {/* OWNER CONSENT */}
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="ownerConsent" onChange={handleChange} className="mt-1" />
                  <span className="text-sm">
                    I confirm that I am the owner or authorized person to submit this land audit request.
                  </span>
                </label>

                {/* FIRST + LAST NAME */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">First Name</span>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">Last Name</span>
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
                    <span className="text-sm font-medium">Street</span>
                    <input
                      name="street"
                      value={form.street}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">House Number</span>
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
                    <span className="text-sm font-medium">Postal Code</span>
                    <input
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">Location</span>
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
                    <span className="text-sm font-medium">Phone Number</span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-md px-3 py-2"
                    />
                  </label>
                  <label>
                    <span className="text-sm font-medium">Email Address</span>
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
                  <span className="text-sm font-medium">Comments</span>
                  <textarea
                    name="comments"
                    value={form.comments}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 w-full border rounded-md px-3 py-2"
                    placeholder="Is there anything else you would like to tell us?"
                  ></textarea>
                </label>
              </div>

              <div className="mt-6 flex justify-center">
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md">
                  Submit Request
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
                  <h5 className="text-xl font-semibold">ALARIS Partner Concept</h5>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground"> 
                    <li>Leasing is a thing of the past! The landowner as a partner</li> 
                  <li>Tailor-made and individual concepts</li> 
                  <li>Participation in project development and operation</li> 
                  <li>Open communication</li> 
                  <li>Implementation of shared goals</li> 
                  <li>Short decision-making processes</li> 
                  </ul>
                </div>
                <div className="relative w-full h-[220px] rounded-md overflow-hidden">
                  <Image src="/3.jpg" fill className="object-cover" alt="" />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="relative w-full h-[220px] rounded-md overflow-hidden">
                  <Image src="/2.jpg" fill className="object-cover" alt="" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">ALARIS Knowhow</h5>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground"> 
                    <li>Manufacturer contacts</li> 
                  <li>Supplier contacts</li> 
                  <li>Service providers and suppliers</li> 
                  <li>Evaluation and awarding of contracts</li> 
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
