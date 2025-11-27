import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Wind, Zap, Shield, Leaf, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Wind,
    title: "Planning",
    description: "Custom-engineered wind solutions tailored to your site's unique wind patterns and energy needs.",
  },
  {
    icon: Zap,
    title: "Implementation & Construction",
    description:
      "Professional turbine installation with rigorous quality control ensuring optimal performance from day one.",
  },
  // {
  //   icon: Shield,
  //   title: "Maintenance & Operations",
  //   description: "Comprehensive O&M services to maximize your wind farm's efficiency and longevity.",
  // },
  // {
  //   icon: BarChart3,
  //   title: "Consultancy Services",
  //   description: "Expert guidance on wind projects, from feasibility studies to regulatory compliance.",
  // },
]

const stats = [
  { value: "500+", label: "MW Installed" },
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "States Covered" },
  { value: "98%", label: "Client Satisfaction" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/aerial-view-of-large-wind-farm-with-wind-turbines-.jpg" alt="Wind farm aerial view" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-foreground/90 mb-4 uppercase tracking-wider">
              Sustainable Energy Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Your Partner for Sustainable Wind Energy Solutions
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
              Powering World green energy revolution with innovative wind farm solutions. From design to deployment,
              we deliver excellence in every project.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Leading the Wind Energy Revolution 
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At ALARIS, we are committed to accelerating World transition to clean energy. With over a
                decade of experience, we have established ourselves as a trusted partner for businesses, landowners, and
                institutions seeking reliable wind energy solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of expert engineers and project managers ensures every installation meets the highest standards
                of quality and efficiency, delivering long-term value for our clients.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/wind-turbine-installation-engineers-working-on-sit.jpg"
                alt="Wind turbine installation engineers at work"
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
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Comprehensive Wind Energy Solutions
            </h2>
            <p className="text-muted-foreground">
              From initial consultation to ongoing maintenance, we provide end-to-end wind energy services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                View All Services
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
                  For Landowners
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                Turn Your Land Into a Green Energy Asset
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Own suitable land? Partner with us to develop wind farm projects and earn stable, long-term income while
                contributing to World renewable energy goals.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/landowners">
                  Check Land Suitability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/wind-turbines-on-rural-farmland-in-indian-countrys.jpg" alt="Wind turbines on rural land" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      {/* <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore our successfully commissioned wind farm installations across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Maharashtra Wind Park",
                capacity: "50 MW",
                location: "Satara, Maharashtra",
                image: "large wind farm Maharashtra India with wind turbines on hills",
              },
              {
                name: "Gujarat Coastal Wind Farm",
                capacity: "75 MW",
                location: "Kutch, Gujarat",
                image: "coastal wind farm Gujarat India turbines sea view",
              },
              {
                name: "Karnataka Wind Project",
                capacity: "40 MW",
                location: "Chitradurga, Karnataka",
                image: "wind turbines Karnataka India green landscape",
              },
            ].map((project) => (
              <div key={project.name} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-[280px]">
                  <Image
                    src={`/.jpg?height=280&width=400&query=${project.image}`}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-primary-foreground/80">
                    {project.capacity} • {project.location}
                  </p>
                  <h3 className="text-lg font-semibold text-primary-foreground">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Harness Wind Power?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how wind energy can benefit your business or land.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/landowners">Site Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
