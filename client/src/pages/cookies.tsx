import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { Cookie } from "lucide-react";

export default function Cookies() {
  const lastUpdated = "20 October 2025";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cookie Policy | Midlands Digital"
        description="Our cookie policy explains how we use cookies on our website. Privacy-first approach with minimal tracking. Based in Nottingham, UK."
        keywords="cookie policy, website cookies, tracking, privacy"
      />

      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Legal</Badge>
            <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
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
                <Cookie className="w-6 h-6 text-chart-2" />
                <h2 className="text-2xl font-bold">Plain English Summary</h2>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• We use minimal cookies—only what's necessary for the site to work</li>
                <li>• Essential cookies (session, security) don't require consent</li>
                <li>• Optional cookies (analytics) require your consent</li>
                <li>• You can manage cookie preferences in your browser</li>
                <li>• We don't use cookies for targeted advertising</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Full Policy */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve functionality.
            </p>
            <p className="text-muted-foreground">
              Midlands Digital Ltd ("we", "our") uses cookies on this website (www.midlandsdigital.ai) to enhance your experience and understand how visitors use our site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Types of Cookies We Use</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Strictly Necessary Cookies</h3>
              <p className="text-muted-foreground">
                These cookies are essential for the website to function. They enable core features like security, session management, and form submissions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• <strong>Session cookies:</strong> Maintain your session as you navigate pages</li>
                <li>• <strong>Security cookies:</strong> Protect against cross-site attacks</li>
                <li>• <strong>Form cookies:</strong> Remember your inputs during multi-step forms</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Consent:</strong> Not required (essential for site operation per UK PECR/GDPR)
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-lg font-semibold">Analytics Cookies (Optional)</h3>
              <p className="text-muted-foreground">
                We use analytics cookies to understand how visitors use our website—which pages are popular, where visitors come from, and how they navigate.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• <strong>Google Analytics (if enabled):</strong> Tracks pageviews, sessions, traffic sources</li>
                <li>• Data is anonymized (IP addresses masked)</li>
                <li>• Used solely to improve website content and user experience</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Consent:</strong> Required (you can opt out in our cookie banner or browser settings)
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-lg font-semibold">Preference Cookies (Optional)</h3>
              <p className="text-muted-foreground">
                These remember your choices (e.g., dark/light mode, language preferences).
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Consent:</strong> Not required (enhances your experience without tracking)
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-lg font-semibold">Marketing/Advertising Cookies</h3>
              <p className="text-muted-foreground">
                <strong>We do not use marketing or advertising cookies.</strong> We don't track you across websites or sell your data to advertisers.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground">
              We may use third-party services that set cookies:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Google Analytics:</strong> Understand site usage (if you consent)</li>
              <li>• <strong>Content Delivery Networks (CDNs):</strong> Improve site performance</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Third-party cookies are governed by their respective privacy policies. We choose privacy-focused providers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. How to Manage Cookies</h2>
            <p className="text-muted-foreground">You have control over cookies:</p>
            
            <div className="space-y-3 mt-3">
              <h3 className="text-lg font-semibold">Cookie Banner</h3>
              <p className="text-muted-foreground">
                When you first visit, we'll show a cookie banner. You can accept or decline optional cookies.
              </p>
            </div>

            <div className="space-y-3 mt-4">
              <h3 className="text-lg font-semibold">Browser Settings</h3>
              <p className="text-muted-foreground">
                Most browsers let you block or delete cookies:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer nofollow" className="text-chart-2 hover:underline">Google Chrome</a></li>
                <li>• <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer nofollow" className="text-chart-2 hover:underline">Firefox</a></li>
                <li>• <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer nofollow" className="text-chart-2 hover:underline">Safari</a></li>
                <li>• <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer nofollow" className="text-chart-2 hover:underline">Microsoft Edge</a></li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              <strong>Note:</strong> Blocking essential cookies may prevent parts of the website from working correctly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Cookie Retention</h2>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li>• <strong>Persistent cookies:</strong> Retained for 1-24 months (depending on type)</li>
              <li>• <strong>Analytics cookies:</strong> Retained for 24 months (Google Analytics default)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy to reflect changes in our practices or legal requirements. The "Last updated" date at the top shows the most recent revision.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Contact Us</h2>
            <p className="text-muted-foreground">
              For questions about cookies or privacy, contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Email: <a href="mailto:privacy@midlandsdigital.ai" className="text-chart-2 hover:underline">privacy@midlandsdigital.ai</a></li>
              <li>• Post: Midlands Digital Ltd, Nottingham, NG1 1AA, United Kingdom</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              See our full <Link href="/privacy" className="text-chart-2 hover:underline">Privacy Policy</Link> for more details on data protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
