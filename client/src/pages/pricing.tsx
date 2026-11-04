import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Clock, Target, TrendingUp, GraduationCap } from "lucide-react";

const pricingTiers = [
  {
    icon: Clock,
    name: "Rapid Audit",
    duration: "2 weeks",
    priceRange: "£2,000 - £4,000",
    description: "Map your workflows, identify quick wins, and get a clear roadmap with measurable KPIs",
    features: [
      "Process mapping & bottleneck analysis",
      "Tool audit (what you already use)",
      "Top 3 automation opportunities identified",
      "Fixed-scope plan with ROI projections",
      "Detailed implementation roadmap"
    ],
    deliverables: [
      "Workflow audit report",
      "Prioritized opportunity list",
      "Fixed-price Pilot proposal"
    ],
    idealFor: [
      "Owner-operators unsure where to start",
      "Teams needing board/stakeholder buy-in",
      "Companies exploring AI feasibility"
    ],
    popular: false,
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Target,
    name: "Pilot",
    duration: "4-6 weeks",
    priceRange: "£6,000 - £15,000",
    description: "Build and test AI co-pilots with your team. Real data, real workflows, real feedback",
    features: [
      "One AI co-pilot built & deployed",
      "Integration with 1-2 existing tools",
      "Real-world testing with your data",
      "Team training & handoff documentation",
      "30-day post-launch support included"
    ],
    deliverables: [
      "Working AI co-pilot (custom-built)",
      "Integration with your systems",
      "User training materials",
      "Measurement framework & KPIs"
    ],
    idealFor: [
      "Teams ready to automate one process",
      "Companies wanting proof before scaling",
      "Departments needing quick wins (finance, ops, sales)"
    ],
    popular: true,
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    name: "Scale",
    duration: "Ongoing",
    priceRange: "£4,000 - £12,000/month",
    description: "Roll out across departments. Optimise, iterate, and extend to new use cases",
    features: [
      "Expand to 2-4 additional departments",
      "Continuous optimisation & iteration",
      "New integrations as needed",
      "Priority support & monthly check-ins",
      "Advanced analytics & reporting"
    ],
    deliverables: [
      "Multi-department AI ecosystem",
      "Ongoing feature development",
      "Monthly performance reviews",
      "Proactive optimisation"
    ],
    idealFor: [
      "Companies scaling successful pilots",
      "Multi-department rollouts",
      "Businesses with evolving needs"
    ],
    popular: false,
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: GraduationCap,
    name: "Train & Transfer",
    duration: "Optional",
    priceRange: "£3,000 - £8,000",
    description: "Hand over prompts, SOPs, and training so your team owns the AI—no dependency on us",
    features: [
      "Complete prompt libraries",
      "Internal workflow documentation",
      "Team training workshops",
      "Self-service maintenance guides",
      "6-month advisory access"
    ],
    deliverables: [
      "Full prompt library & templates",
      "Standard operating procedures",
      "Training workshop recordings",
      "Ongoing advisory retainer (optional)"
    ],
    idealFor: [
      "IT teams wanting full control",
      "Companies building internal AI capability",
      "Organizations reducing vendor dependency"
    ],
    popular: false,
    color: "text-purple-600 dark:text-purple-400"
  }
];

export default function Pricing() {
  return (
    <>
      <SEOHead
        title="Transparent AI Automation Pricing | Fixed-Price Tiers | Midlands Digital"
        description="Transparent AI automation pricing: £1,950 two-week pilot, £4-12k/month ongoing. Midlands SME-focused. Book free audit."
      />
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <StructuredData type="OfferCatalog" data={{
        name: "AI Automation Pricing Tiers",
        description: "Transparent, fixed-price AI automation services for East Midlands SMEs. From rapid audits to full-scale deployments.",
        offers: [
          { name: "Rapid Audit", description: "Map your workflows, identify quick wins, and get a clear roadmap with measurable KPIs. 2-week engagement.", price: "2000", priceCurrency: "GBP" },
          { name: "Pilot", description: "Build and test AI co-pilots with your team. Real data, real workflows, real feedback. 4-6 week engagement.", price: "6000", priceCurrency: "GBP" },
          { name: "Scale", description: "Roll out across departments. Optimise, iterate, and extend to new use cases. Ongoing monthly engagement.", price: "4000", priceCurrency: "GBP" },
          { name: "Train & Transfer", description: "Hand over prompts, SOPs, and training so your team owns the AI — no dependency on us.", price: "3000", priceCurrency: "GBP" }
        ]
      }} />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-transparent-pricing">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-pricing">
            Fixed-Price Tiers. No Surprises.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-pricing-description">
            Choose the right engagement model for your business. Every tier includes a detailed scope, deliverables, and clear timelines.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`hover-elevate relative ${tier.popular ? 'border-primary shadow-lg' : ''}`}
              data-testid={`card-tier-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" data-testid="badge-most-popular">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${tier.color}`}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{tier.duration}</div>
                    <div className="text-lg font-bold" data-testid={`text-price-${tier.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {tier.priceRange}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3">What's Included</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3">Deliverables</h4>
                  <ul className="space-y-2">
                    {tier.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3">Ideal For</h4>
                  <ul className="space-y-1">
                    {tier.idealFor.map((use) => (
                      <li key={use} className="text-sm text-muted-foreground">
                        • {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8" data-testid="heading-pricing-faq">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why fixed pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We scope each engagement carefully upfront. Fixed pricing means no bill shock, clear budgets, and predictable ROI calculations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if my needs change mid-project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We'll document scope changes and provide a transparent change order. 
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do I own the AI solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes. All custom code, prompts, and integrations we build are yours. Train & Transfer ensures full ownership.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I start with just an Audit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Absolutely. You can begin with a Rapid Audit to validate opportunities before committing to a Pilot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4" data-testid="heading-pricing-cta">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Book a free strategy call. We'll discuss your needs, recommend the right tier, and provide a detailed proposal.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              asChild
              data-testid="button-book-call-pricing"
            >
              <Link href="/#contact">
                Book Your Free, No-Obligation AI Strategy Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
