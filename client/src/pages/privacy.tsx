import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { Shield, Mail } from "lucide-react";

export default function Privacy() {
  const lastUpdated = "20 October 2025";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Midlands Digital"
        description="Our privacy policy explains how we collect, use, and protect your personal data. GDPR compliant. Based in Nottingham, UK."
        keywords="privacy policy, gdpr, data protection, uk privacy"
      />

      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Legal</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Plain English Summary */}
      <section className="py-12 border-b bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-2 border-chart-2/20">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-chart-2" />
                <h2 className="text-2xl font-bold">Plain English Summary</h2>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• We only collect data necessary to provide our AI automation services</li>
                <li>• We never sell your data to third parties</li>
                <li>• We use industry-standard security to protect your information</li>
                <li>• You can request your data or ask us to delete it at any time</li>
                <li>• We're GDPR compliant and based in the UK</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Full Policy */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Who We Are</h2>
            <p className="text-muted-foreground">
              Midlands Digital Ltd ("we", "our", "us") is a UK-based AI automation consultancy registered in England and Wales (Company No. 12345678). Our registered address is Nottingham, NG1 1AA, United Kingdom.
            </p>
            <p className="text-muted-foreground">
              We are the data controller responsible for your personal data. For privacy queries, contact us at <a href="mailto:privacy@midlandsdigital.ai" className="text-chart-2 hover:underline">privacy@midlandsdigital.ai</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. What Data We Collect</h2>
            <p className="text-muted-foreground">We collect and process the following personal data:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Contact Information:</strong> Name, email address, phone number, company name</li>
              <li>• <strong>Business Information:</strong> Industry, company size, automation requirements</li>
              <li>• <strong>Technical Data:</strong> IP address, browser type, device information</li>
              <li>• <strong>Communication Data:</strong> Messages sent via contact forms, emails, or calls</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. How We Use Your Data</h2>
            <p className="text-muted-foreground">We use your personal data for the following purposes:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Service Delivery:</strong> To provide AI automation consultancy and support</li>
              <li>• <strong>Communication:</strong> To respond to inquiries and provide updates</li>
              <li>• <strong>Contracts:</strong> To enter into and fulfill service agreements</li>
              <li>• <strong>Marketing:</strong> To send relevant automation insights (with your consent)</li>
              <li>• <strong>Legal Compliance:</strong> To meet legal and regulatory obligations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Legal Basis for Processing</h2>
            <p className="text-muted-foreground">We process your data under the following legal bases:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Contract Performance:</strong> Processing necessary to deliver our services</li>
              <li>• <strong>Legitimate Interests:</strong> Business development and service improvement</li>
              <li>• <strong>Consent:</strong> Marketing communications (you can withdraw anytime)</li>
              <li>• <strong>Legal Obligation:</strong> Compliance with UK/EU law</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Data Sharing</h2>
            <p className="text-muted-foreground">
              We <strong>do not sell</strong> your personal data. We may share data with:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Service Providers:</strong> Cloud hosting (UK/EU-based), email services, analytics</li>
              <li>• <strong>Legal Requirements:</strong> Law enforcement or regulators when legally required</li>
              <li>• <strong>Business Transfers:</strong> In the event of a merger or acquisition (with notice)</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              All third parties are contractually bound to protect your data and use it only as instructed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures including:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Encryption of data in transit (TLS/SSL)</li>
              <li>• Access controls and authentication</li>
              <li>• Regular security assessments</li>
              <li>• Staff training on data protection</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain personal data only as long as necessary:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Client Data:</strong> Duration of contract + 6 years (UK tax law)</li>
              <li>• <strong>Inquiry Data:</strong> 2 years if no contract is formed</li>
              <li>• <strong>Marketing Consent:</strong> Until withdrawn or 3 years of inactivity</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">8. Your Rights (GDPR)</h2>
            <p className="text-muted-foreground">Under UK GDPR, you have the right to:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Access:</strong> Request a copy of your personal data</li>
              <li>• <strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li>• <strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li>• <strong>Restriction:</strong> Limit how we process your data</li>
              <li>• <strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li>• <strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li>• <strong>Withdraw Consent:</strong> Opt out of marketing at any time</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise these rights, email <a href="mailto:privacy@midlandsdigital.ai" className="text-chart-2 hover:underline">privacy@midlandsdigital.ai</a>. We'll respond within 30 days.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">9. Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies to improve website functionality and analytics. See our <Link href="/cookies" className="text-chart-2 hover:underline">Cookie Policy</Link> for details.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">10. International Transfers</h2>
            <p className="text-muted-foreground">
              We primarily use UK/EU-based service providers. If data is transferred outside the UK/EU, we ensure adequate safeguards (e.g., Standard Contractual Clauses).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">11. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this policy periodically. Significant changes will be notified via email or a prominent notice on our website. The "Last updated" date at the top reflects the latest revision.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">12. Contact & Complaints</h2>
            <p className="text-muted-foreground">
              For privacy questions or concerns, contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Email: <a href="mailto:privacy@midlandsdigital.ai" className="text-chart-2 hover:underline">privacy@midlandsdigital.ai</a></li>
              <li>• Post: Midlands Digital Ltd, Nottingham, NG1 1AA, United Kingdom</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              You also have the right to lodge a complaint with the <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer nofollow" className="text-chart-2 hover:underline">UK Information Commissioner's Office (ICO)</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-chart-2" />
            <h2 className="text-2xl font-bold">Questions About Privacy?</h2>
          </div>
          <p className="text-muted-foreground">
            We're transparent about data handling. Contact us with any questions.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:privacy@midlandsdigital.ai">Email Privacy Team</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
