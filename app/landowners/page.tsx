import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Leaf, IndianRupee, Clock, Shield, FileText, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandownerForm } from "@/components/landowner-form"

const benefits = [
  {
    icon: IndianRupee,
    title: "Stable Long-Term Income",
    description: "Earn guaranteed lease payments for 25+ years, providing a reliable income stream from your land.",
  },
  {
    icon: Leaf,
    title: "Environmental Contribution",
    description: "Play a vital role in India's renewable energy transition and reduce carbon emissions.",
  },
  {
    icon: Shield,
    title: "Zero Investment Required",
    description: "We handle all costs—you simply provide the land and enjoy the benefits.",
  },
  {
    icon: Clock,
    title: "Hassle-Free Partnership",
    description: "Our team manages everything from permits to maintenance, so you can sit back and earn.",
  },
]

const requirements = [
  "Farmland",
  "Pastureland",
  "Grassland",
  "Forest",
  "Former landfills",
  "Reclaimed open-cast mines ",
]

const requirements1 = [
  "Arable land and pasture",
  "Motorway shoulders, railway lines",
  "Conversion areas",
  "Areas with designated building areas",
]

const process = [
  {
    step: "01",
    title: "Submit Your Details",
    description: "Fill out our online form with your land details and contact information.",
  },
  {
    step: "02",
    title: "Initial Assessment",
    description: "Our team reviews your submission and conducts a preliminary feasibility check.",
  },
  {
    step: "03",
    title: "Site Visit",
    description: "Our engineers visit your land to perform detailed wind resource surveys and assessments.",
  },
  {
    step: "04",
    title: "Agreement & Development",
    description: "If suitable, we finalize the lease agreement and begin project development.",
  },
]

export default function LandownersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/wind-turbines-on-rural-indian-farmland-countryside.jpg" alt="Wind turbines on rural land" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-foreground/90 mb-4 uppercase tracking-wider">
              For Landowners
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance">
              Transform Your Land Into a Green Energy Asset
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
              Renewable energies are inextricably linked to the land on which they are built. For landowners, renewable energies have long been recognized as a profitable and long-term source of income. They offer high yields with minimal land use, thus providing a crucial support for any agricultural operation. This is especially true for soils with low agricultural yields – there, they offer a viable alternative.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="#assessment-form">
                  Check Land Suitability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Land Requirements</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Which locations are suitable for wind turbines?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We look for specific characteristics to ensure optimal wind farm performance. Here are the key
                requirements we consider:
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image (right on lg+) */}
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/aerial-view-suitable-land-for-wind-farm-india-rura.jpg"
                alt="Suitable land for wind farm development"
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
                src="2.jpg"
                alt="Suitable land for photovoltaic or mixed development"
                fill
                className="object-cover"
              />
            </div>

            {/* Text (right on lg+) */}
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Which locations are suitable for photovoltaic systems?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We look for specific characteristics to ensure optimal photovoltaic performance. Here are the key
                site types we consider:
              </p>
              <ul className="space-y-4">
                {requirements1.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{req}</span>
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
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
            <p className="text-muted-foreground">
              Our simple four-step process to turn your land into a wind energy asset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card p-6 rounded-lg border border-border h-full">
                  <span className="text-4xl font-bold text-primary/30">{item.step}</span>
                  <h3 className="text-xl font-semibold text-card-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      {/* <section id="assessment-form" className="py-24 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Site Assessment</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Submit Your Land Details
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fill out the form with your land details, and our team will evaluate its suitability for wind farm
                development. We'll get back to you within 48 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Document Verification</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll guide you on required documents after initial review.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <PhoneCall className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Personal Consultation</h3>
                    <p className="text-sm text-muted-foreground">Our experts will discuss your options in detail.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <LandownerForm />
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
