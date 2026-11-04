import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { FileText, Mail } from "lucide-react";

export default function Terms() {
  const lastUpdated = "20 October 2025";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Service | Midlands Digital"
        description="Terms and conditions for AI automation consultancy services. Clear pricing, deliverables,. Based in Nottingham, UK."
        keywords="terms of service, terms and conditions, service agreement, uk business terms"
      />

      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Legal</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
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
                <FileText className="w-6 h-6 text-chart-2" />
                <h2 className="text-2xl font-bold">Plain English Summary</h2>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fixed-price tiers with clear deliverables (no hidden costs)</li>
                <li>• We agree measures of success at the start of each engagement and report against them</li>
                <li>• You own all deliverables and can cancel with 30 days' notice</li>
                <li>• We work collaboratively—automation requires your team's input</li>
                <li>• Governed by English law with dispute resolution in UK courts</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Full Terms */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By engaging Midlands Digital Ltd ("Midlands Digital", "we", "our") for AI automation consultancy services, you ("Client", "you") agree to these Terms of Service. If you do not agree, do not use our services.
            </p>
            <p className="text-muted-foreground">
              Company Details: Midlands Digital Ltd, registered in England & Wales (Company No. 12345678), Nottingham, NG1 1AA, United Kingdom.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Services Provided</h2>
            <p className="text-muted-foreground">We offer bespoke AI automation consultancy across four tiers:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Rapid Audit:</strong> Workflow audit, ROI forecast, pilot proposal (£2-4k, 2 weeks)</li>
              <li>• <strong>Pilot:</strong> First automation deployed with integration (£6-15k, 4-6 weeks)</li>
              <li>• <strong>Scale:</strong> Ongoing automation expansion (£4-12k/month)</li>
              <li>• <strong>Train & Transfer:</strong> Documentation, training, handover (£3-8k, 2-3 weeks)</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Detailed scope, deliverables, and pricing are agreed in writing before work begins.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Measures of Success</h2>
            <p className="text-muted-foreground">
              For Pilot engagements, we agree measurable targets at the start (e.g., hours saved, error reduction, cost savings) and report against them at the end of the Pilot.
            </p>
            <p className="text-muted-foreground mt-3">
              "Measurable" means quantifiable metrics agreed at project start. Reporting depends on Client cooperation (see Section 5).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Payment Terms</h2>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Audit/Pilot/Train:</strong> 50% deposit upfront, 50% on completion</li>
              <li>• <strong>Scale:</strong> Monthly invoicing in advance</li>
              <li>• Payment due within 14 days of invoice date (UK bank transfer or card)</li>
              <li>• Late payments incur 3% monthly interest (UK Late Payment Act)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Client Responsibilities</h2>
            <p className="text-muted-foreground">Successful automation requires Client collaboration. You agree to:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Provide timely access to systems, data, and staff</li>
              <li>• Respond to requests for information within 3 business days</li>
              <li>• Designate a primary contact for decision-making</li>
              <li>• Test and provide feedback on deliverables within agreed timelines</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Delays caused by Client non-cooperation may extend timelines.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Intellectual Property</h2>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Deliverables:</strong> You own all automation workflows, documentation, and custom code created for you (upon full payment)</li>
              <li>• <strong>Our IP:</strong> We retain rights to our methodologies, templates, and pre-existing tools</li>
              <li>• <strong>Case Studies:</strong> We may use anonymized project data for marketing (with your approval)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Confidentiality</h2>
            <p className="text-muted-foreground">
              Both parties agree to keep confidential information private. We will not disclose your business data, workflows, or trade secrets. Exceptions: legal obligations or with your written consent.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">8. Data Protection</h2>
            <p className="text-muted-foreground">
              We process personal data in accordance with UK GDPR. See our <Link href="/privacy" className="text-chart-2 hover:underline">Privacy Policy</Link>. If we process data on your behalf, we'll enter into a Data Processing Agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">9. Warranties & Disclaimers</h2>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• We warrant our services will be performed with professional skill and care</li>
              <li>• Automation results depend on Client systems, data quality, and cooperation—we cannot guarantee specific business outcomes</li>
              <li>• We are not liable for third-party service failures (e.g., API downtime)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">10. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Our total liability for any claim is limited to the fees paid for the relevant service tier in the 12 months prior to the claim. We are not liable for indirect, consequential, or loss-of-profit damages.
            </p>
            <p className="text-muted-foreground mt-3">
              Exceptions: liability for fraud, gross negligence, death/personal injury, or breaches that cannot be limited by law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">11. Termination</h2>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Scale (ongoing):</strong> Either party may terminate with 30 days' written notice</li>
              <li>• <strong>Fixed projects:</strong> Termination allowed for material breach (14 days' cure period)</li>
              <li>• On termination, Client pays for work completed to date</li>
              <li>• IP transfers only upon full payment</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">12. Changes to Services/Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms periodically. Changes apply to new engagements only (existing contracts remain under original terms unless mutually agreed). Pricing for Scale tier may change with 60 days' notice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">13. Governing Law & Disputes</h2>
            <p className="text-muted-foreground">
              These Terms are governed by English law. Disputes will be resolved in the courts of England and Wales. Before litigation, we encourage good-faith negotiation or mediation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">14. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, contact us at <a href="mailto:legal@midlandsdigital.ai" className="text-chart-2 hover:underline">legal@midlandsdigital.ai</a> or Midlands Digital Ltd, Nottingham, NG1 1AA, United Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-chart-2" />
            <h2 className="text-2xl font-bold">Questions About Our Terms?</h2>
          </div>
          <p className="text-muted-foreground">
            We're happy to discuss our service terms before you commit.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
