import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">Last updated: November 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                SolarVista Energy Pvt. Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting
                your personal data. This privacy policy explains how we collect, use, and safeguard your information
                when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Location and address details</li>
                <li>Land and property information (for landowner enquiries)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (how you interact with our website)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your enquiries and provide customer support</li>
                <li>Process and evaluate landowner partnership applications</li>
                <li>Provide quotes and proposals for solar installations</li>
                <li>Send relevant updates about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at:
                <br />
                <br />
                <strong>Email:</strong> privacy@solarvista.in
                <br />
                <strong>Phone:</strong> +91 22 1234 5678
                <br />
                <strong>Address:</strong> 123 Solar Park, Green Energy Complex, Mumbai, Maharashtra 400069, India
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
