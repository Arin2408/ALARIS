import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Wind, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Wind,
    title: "Planning",
    image: "/3.jpg",
    description:
      "Our expert engineers create custom wind farm designs optimized for your specific site conditions, wind patterns, and energy requirements. We utilize advanced simulation tools to maximize energy yield.",
    features: [
      "Site analysis and preliminary planning",
      "Solar irradiance analysis (PV)",
      "Wind yield measurement (wind)",
      "Economic feasibility study",
      "Site securing, Design planning",
      "Planning of grid connection routes and access roads",
      "Acquisition of existing wind farms",
      "Project acquisition, Repowering",
      "Citizen participation models",
      "Municipal participation solutions",
    ],
  },
]

const services1 = [
  {
    icon: Zap,
    title: "Implementation & Construction",
    image: "/2.jpg",
    description:
      "From foundation work to turbine erection, our experienced installation teams ensure your wind farm is built to the highest standards with minimal disruption to surrounding areas.",
    features: [
      "Obtaining the necessary permits",
      "Structuring the tendering process",
      "Selection of site-specific plant technology",
      "Road and foundation construction",
      "Coordination of grid connection",
      "Acceptance and commissioning processes",
      "Compliance with Federal Immission Control Act (BImSchG)",
      "Compensatory measures, Financing",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              ALARIS – Your partner from idea to implementation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial consultation to ongoing maintenance, we provide end-to-end wind farm solutions designed to
              maximize your investment and contribute to a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Section — CONTENT LEFT | IMAGE RIGHT */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services.map((service) => (
            <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT — CONTENT */}
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Section — IMAGE LEFT | CONTENT RIGHT */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {services1.map((service1) => (
            <div key={service1.title} className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT — IMAGE */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={service1.image}
                  alt={service1.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT — CONTENT */}
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service1.icon className="h-7 w-7 text-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service1.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service1.description}</p>

                <ul className="space-y-3 mb-6">
                  {service1.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">How We Work</h2>
            <p className="text-muted-foreground">
              Our streamlined process ensures your wind project is delivered on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Initial meeting to understand your requirements and goals." },
              { step: "02", title: "Assessment", desc: "Detailed site evaluation and wind resource analysis." },
              { step: "03", title: "Design", desc: "Custom wind farm design optimized for your needs." },
              { step: "04", title: "Delivery", desc: "Professional installation with ongoing support." },
            ].map((item) => (
              <div key={item.step} className="bg-card p-6 rounded-lg border border-border">
                <span className="text-4xl font-bold text-primary/30">{item.step}</span>
                <h3 className="text-xl font-semibold text-card-foreground mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Start Your Wind Energy Journey?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and customized proposal.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
