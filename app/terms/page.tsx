import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">Last updated: November 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the SolarVista Energy website and services, you agree to be bound by these Terms
                of Service. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <p className="leading-relaxed">
                SolarVista Energy provides solar energy solutions including but not limited to: solar plant design,
                installation, maintenance, consultancy, and landowner partnership programs. All services are subject to
                specific agreements and terms discussed with clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Website Use</h2>
              <p className="leading-relaxed mb-4">When using our website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Not use the website for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not transmit any malicious code or content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of SolarVista
                Energy and is protected by intellectual property laws. You may not reproduce, distribute, or use any
                content without our prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                SolarVista Energy shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of our website or services. Our liability is limited to the maximum extent
                permitted by applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
              <p className="leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall
                be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact</h2>
              <p className="leading-relaxed">
                For any questions regarding these terms, please contact us at legal@solarvista.in
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
