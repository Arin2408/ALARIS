import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Zap, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    name: "Maharashtra Wind Park",
    location: "Satara, Maharashtra",
    capacity: "50 MW",
    status: "Commissioned",
    year: "2023",
    description:
      "One of our flagship utility-scale projects, this 50 MW wind park powers over 25,000 homes and offsets 60,000 tons of CO2 annually.",
    image: "large wind farm Maharashtra India wind turbines on hills aerial view",
  },
  {
    id: 2,
    name: "Gujarat Coastal Wind Farm",
    location: "Kutch, Gujarat",
    capacity: "75 MW",
    status: "Commissioned",
    year: "2023",
    description:
      "A coastal wind installation harnessing the strong sea breeze, providing clean energy to industrial units in the region.",
    image: "coastal wind farm Gujarat India turbines near ocean",
  },
  {
    id: 3,
    name: "Karnataka Plateau Wind Project",
    location: "Chitradurga, Karnataka",
    capacity: "40 MW",
    status: "Commissioned",
    year: "2022",
    description:
      "Located on the Deccan Plateau, this project leverages consistent wind patterns to generate reliable clean energy year-round.",
    image: "wind turbines Karnataka India plateau green landscape",
  },
  {
    id: 4,
    name: "Rajasthan Desert Wind Farm",
    location: "Jaisalmer, Rajasthan",
    capacity: "100 MW",
    status: "In Progress",
    year: "2024",
    description:
      "Our largest project to date, harnessing Rajasthan's exceptional wind resources to generate clean energy for the national grid.",
    image: "desert wind farm Rajasthan India large scale turbines",
  },
  {
    id: 5,
    name: "Tamil Nadu Wind Corridor",
    location: "Tirunelveli, Tamil Nadu",
    capacity: "60 MW",
    status: "Commissioned",
    year: "2022",
    description:
      "Located in India's premier wind corridor, this project benefits from some of the strongest and most consistent winds in the country.",
    image: "wind turbines Tamil Nadu India windy hills",
  },
  {
    id: 6,
    name: "Andhra Pradesh Hybrid Project",
    location: "Anantapur, Andhra Pradesh",
    capacity: "80 MW",
    status: "In Progress",
    year: "2024",
    description:
      "An innovative wind-solar hybrid project combining the best of both renewable technologies for round-the-clock power generation.",
    image: "wind solar hybrid project Andhra Pradesh India turbines and panels",
  },
  {
    id: 7,
    name: "Madhya Pradesh Wind Park",
    location: "Dewas, Madhya Pradesh",
    capacity: "45 MW",
    status: "Planned",
    year: "2025",
    description:
      "Upcoming project aimed at bringing reliable wind power to central India's growing industrial and residential sectors.",
    image: "wind farm Madhya Pradesh India rural countryside",
  },
  {
    id: 8,
    name: "Kerala Coastal Wind Project",
    location: "Palakkad, Kerala",
    capacity: "25 MW",
    status: "Commissioned",
    year: "2023",
    description:
      "A unique project in the Palakkad Gap, one of South India's windiest corridors, demonstrating innovative approaches to wind deployment.",
    image: "wind turbines Kerala India Palakkad Gap mountains",
  },
]

const statusColors: Record<string, string> = {
  Commissioned: "bg-primary text-primary-foreground",
  "In Progress": "bg-accent text-accent-foreground",
  Planned: "bg-muted text-muted-foreground",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Projects & References</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our successfully delivered and ongoing wind farm projects across India. Each installation
              represents our commitment to quality and sustainable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+ MW", label: "Total Capacity Installed" },
              { value: "200+", label: "Projects Completed" },
              { value: "15+", label: "States Covered" },
              { value: "50+", label: "Corporate Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={`/.jpg?height=200&width=400&query=${project.image}`}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={statusColors[project.status]}>{project.status}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="h-4 w-4" />
                      {project.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Want to See Your Project Here?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you harness the power of wind energy for your needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
