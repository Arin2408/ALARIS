import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">Last updated: November 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">General Information</h2>
              <p className="leading-relaxed">
                The information provided on this website is for general informational purposes only. While we strive to
                keep the information up to date and accurate, we make no representations or warranties of any kind,
                express or implied, about the completeness, accuracy, reliability, suitability, or availability of the
                information, products, services, or related graphics contained on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Advice</h2>
              <p className="leading-relaxed">
                The content on this website is not intended to be a substitute for professional advice. Specific
                questions about solar installations, land suitability, regulatory requirements, and financial
                considerations should be directed to our team or appropriate professionals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Project Estimates</h2>
              <p className="leading-relaxed">
                Any cost estimates, energy projections, or return on investment calculations mentioned on this website
                are for illustrative purposes only. Actual figures may vary based on site-specific conditions, market
                factors, and other variables. Final estimates will be provided after detailed site assessment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
              <p className="leading-relaxed">
                This website may contain links to external websites. We do not have control over the content or
                availability of these sites and are not responsible for their content or privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Images and Representations</h2>
              <p className="leading-relaxed">
                Images shown on this website are for representational purposes and may not reflect actual projects or
                installations. Some images may be stock photographs or artist renderings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this disclaimer, please contact us at info@solarvista.in
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
