import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Wind Park, Green Energy Complex", "Andheri East, Mumbai", "Maharashtra 400069, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 22 1234 5678", "+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@ALARIS.in", "sales@ALARIS.in"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about wind energy or want to discuss your project? Our team is here to help. Reach out to
              us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Location</h2>
                <div className="bg-muted rounded-lg h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-card-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      {/* <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Find quick answers to common questions about our wind energy solutions.
          </p>

          <div className="text-left space-y-6">
            {[
              {
                q: "How much does a wind farm installation cost?",
                a: "Costs vary based on turbine capacity and site conditions. Contact us for a customized quote based on your requirements.",
              },
              {
                q: "How long does installation take?",
                a: "Typical wind farm installations take 6-12 months depending on the project scale and site preparation requirements.",
              },
              {
                q: "What warranties do you offer?",
                a: "We provide 20-25 year performance warranties on wind turbines and comprehensive maintenance agreements for all equipment.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-card-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
