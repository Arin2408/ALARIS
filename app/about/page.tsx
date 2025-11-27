import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const team = [
  {
    name: "Thomas Griffith",
    role: "Partner",
    image: "/thomas-griffith.jpg",
    bio: "A trained savings bank business administrator, Thomas Griffith began his career in 2003 as a corporate client advisor and specialized in financing renewable energy projects, particularly wind and solar farms, from 2008 onwards. With a certification as a specialist advisor for regional energy development projects, he successfully manages a community wind farm with 44 wind turbines and almost 100 MW. In addition to his role as managing director and partner of several renewable energy companies, he has been the managing partner of Griffith EE Konzept GmbH since 2023. His focus here is on commercial management and the development of wind and solar projects",
  },
  {
    name: "Dipl. Ing. Arne Henn",
    role: "Managing Partner",
    image: "/arne.jpg",
    bio: "Arne Henn graduated from Hamburg University of Applied Sciences in 1990 with a Master's degree in Aircraft Engineering. After several years of international experience in engine repair and maintenance, Arne Henn has been successfully involved in the development and implementation of wind energy projects both domestically and internationally since 2000, with more than 32 wind farms completed. Arne Henn manages various companies in the wind and solar PV sectors.",
  },
  {
    name: "Carsten Jensen",
    role: "Shareholder",
    image: "/CJ-2.jpg",
    bio: "Carsten Jensen, a farmer and certified master farmer since 1990, successfully manages arable land and livestock in North Frisia. Since 2004, he has also been active as a consultant and project developer in the field of renewable energies, particularly wind energy. He has made significant contributions to the realization of wind energy projects in Schleswig-Holstein and Lower Saxony and operates wind turbines and rooftop photovoltaic systems himself. He has extensive experience in the planning and management of cable routes for connecting wind and PV parks to the electricity grid. He is also a partner in various renewable energy operating companies",
  },
  {
    name: "Kristian Schachlewitz",
    role: "Partner & Authorized Signatory",
    image: "/kristian-schachlewitz.png",
    bio: "Kristian Schachlewitz began his career in the real estate industry in 2004 as a developer and construction manager. In 2006, he became a managing partner of a project development and investment company in Germany. In 2009, he founded the Nadeva Group and led its operations until 2021. He sold Nadeva, with more than 500 MW of wind and solar PV projects, to one of the leading companies in this sector in Germany.",
  },
  {
    name: "Dr. Arne Scheschonk",
    role: "Shareholder",
    image: "/arne-scheschonk.png",
    bio: "Dr. Arne Scheschonk has been a self-employed lawyer since 2008 and founder of CTCAP Holding GmbH. Previously, he was a lawyer in Prague, including at Bird & Bird, specializing in renewable energy in Eastern Europe. He then served as General Counsel for several investment funds in Luxembourg and Zurich, focusing on wind energy projects in Northern and Eastern Europe, Canada, and the USA. He also headed the wind energy project development department of a major German energy company and oversaw the development of numerous wind farms in Northern Germany and larger real estate projects in and around Munich",
  },
  {
    name: "Lorenz Peter Jensen",
    role: "Shareholder",
    image: "/LPJ2-2.jpg",
    bio: "Lorenz Peter Jensen has worked in agriculture since 1992, before shifting his focus to renewable energies in 1999. As the driving force behind the Dagebüll community wind farm, developed and built in 2011, he implemented a pioneering project in the region. In his role as Managing Director of Reenergiehöfe Nordfriesland, he successfully manages and operates several wind and photovoltaic projects. With extensive experience as a project developer and operator of various facilities, he is driving the energy transition forward.",
  },
  {
    name: "Kai Olufs",
    role: "Shareholder",
    image: "/kai-olufs.png",
    bio: "Kai Olufs, agricultural economist and owner of a farm since 2003. The first wind turbine was developed and erected on his own land in 1990. Since 2003, Kai Olufs has been actively involved in securing the site, from planning to construction.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ------------------ HERO SECTION (RESTORED) ------------------ */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                ALARIS — Who We Are and What We Do
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
               For two decades, the shareholders of farmWIND GmbH have been committed to renewable energy, working in partnership with landowners. As a project developer, farmWIND GmbH plans, builds, and operates wind and photovoltaic parks. Their goal is to create a sustainable electricity supply in Germany with local added value. Dedicated employees consistently strive for the best possible project outcomes, always adhering to the highest quality and economic standards. Even under adverse external circumstances, projects are pursued with perseverance, requiring patience and tenacity. With farmWIND GmbH, established renewable energy project developers in Germany are reuniting.
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

      {/* ------------------ TEAM SECTION ------------------ */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership & Shareholders
            </h2>
            <p className="text-muted-foreground">
              The experienced professionals behind ALARIS.
            </p>
          </div>

          {/* CARD STYLE MATCHING YOUR SCREENSHOT */}
          <div className="space-y-16">
            {team.map((member) => (
              <article key={member.name} className="bg-card border border-border rounded-lg p-8">
                <div className="flex gap-10 items-start">

                  {/* IMAGE LEFT */}
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

                  {/* RIGHT SIDE: NAME / ROLE / BIO */}
                  <div className="flex-1">

                    {/* NAME + ROLE */}
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground leading-tight mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {member.role}
                      </p>
                    </div>

                    {/* BIO */}
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

      {/* ------------------ CTA ------------------ */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Partner with ALARIS to accelerate the renewable energy transition.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
