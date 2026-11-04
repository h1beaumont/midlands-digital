import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Receipt, 
  Mail, 
  Users, 
  Workflow, 
  Megaphone, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Search,
  Rocket,
  Handshake,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Target,
  Building2,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Receipt,
    title: "Finance & Invoicing Co-Pilot",
    slug: "finance-&-invoicing-co-pilot",
    description: "Extract invoice data, automate reconciliation, accelerate month-end close. Stop your team spending hours on manual data entry.",
    industries: ["Manufacturing", "Retail", "Professional Services"],
    examples: [
      "Xero/QuickBooks/Sage integration",
      "Invoice OCR & auto-entry",
      "Expense categorisation",
      "Month-end reporting automation"
    ],
    timeSaved: "8-15 hrs/week",
    costSaved: "£1,200-£2,400/month",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    detailUrl: "/services/invoice-automation"
  },
  {
    icon: Mail,
    title: "AI Email & Communication",
    slug: "ai-email-&-communication",
    description: "Draft responses in seconds, auto-triage incoming mail, and never let a customer enquiry fall through the cracks.",
    industries: ["Retail", "Healthcare", "Hospitality"],
    examples: [
      "Customer inquiry auto-responses",
      "Appointment confirmations",
      "Follow-up sequences",
      "Email categorisation & routing"
    ],
    timeSaved: "5-12 hrs/week",
    costSaved: "£800-£1,800/month",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    detailUrl: "/services/email-copilot"
  },
  {
    icon: Users,
    title: "Sales & CRM Automation",
    slug: "sales-&-crm-automation",
    description: "Enrich leads automatically, keep your CRM up to date without lifting a finger, and close deals faster.",
    industries: ["All Industries"],
    examples: [
      "HubSpot/Salesforce/Pipedrive automation",
      "Lead enrichment & scoring",
      "Automated outreach sequences",
      "Meeting scheduling & notes"
    ],
    timeSaved: "10-18 hrs/week",
    costSaved: "£1,600-£3,000/month",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    detailUrl: "/services/lead-enrichment"
  },
  {
    icon: Workflow,
    title: "Operations & Workflow Co-Pilot",
    slug: "operations-&-workflow-co-pilot",
    description: "Automate task routing, approval chains, and status tracking. Eliminate the admin that slows your operations down.",
    industries: ["Field Services", "Facilities", "Call Centres"],
    examples: [
      "Work order automation",
      "Approval workflow design",
      "Data entry elimination",
      "Status tracking & alerts"
    ],
    timeSaved: "12-20 hrs/week",
    costSaved: "£2,000-£3,500/month",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    detailUrl: "/services/operations"
  },
  {
    icon: Megaphone,
    title: "Marketing & Content Automation",
    slug: "marketing-&-content-automation",
    description: "Generate first drafts, schedule campaigns, and maintain a consistent content pipeline without a full marketing team.",
    industries: ["Charities", "Agencies", "eCommerce"],
    examples: [
      "Blog post & social content drafts",
      "Campaign scheduling",
      "Email newsletter automation",
      "SEO optimisation assistance"
    ],
    timeSaved: "6-14 hrs/week",
    costSaved: "£900-£2,200/month",
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
    detailUrl: "/services/content-generation"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Reporting",
    slug: "business-intelligence-&-reporting",
    description: "Live dashboards, automated weekly reports, and trend analysis that turns your data into decisions.",
    industries: ["Manufacturing", "Retail", "Professional Services"],
    examples: [
      "Real-time KPI dashboards",
      "Automated weekly/monthly reports",
      "Trend analysis & predictions",
      "Multi-source data integration"
    ],
    timeSaved: "7-16 hrs/week",
    costSaved: "£1,100-£2,600/month",
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
    detailUrl: "/services/bi-dashboards"
  }
];

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Discovery & Audit",
    duration: "Week 1",
    description: "We map your current workflows, interview your team, and identify the tasks costing you the most time and money."
  },
  {
    step: 2,
    icon: Target,
    title: "Solution Design",
    duration: "Week 1-2",
    description: "We design a bespoke automation blueprint tailored to your tools, team, and processes. No off-the-shelf templates."
  },
  {
    step: 3,
    icon: Rocket,
    title: "Build & Deploy",
    duration: "Week 2-3",
    description: "We build, test, and deploy your AI co-pilot. Your team gets hands-on training and a clear handover."
  },
  {
    step: 4,
    icon: TrendingUp,
    title: "Measure & Optimise",
    duration: "Week 4+",
    description: "We track time saved, error reduction, and ROI. Continuous refinement ensures your automation improves over time."
  }
];

const trustStats = [
  { value: "2 weeks", label: "Pilot length" },
  { value: "61.5%", label: "Calls resolved by our voice agent" },
  { value: "£1,950", label: "Pilot starting price" },
  { value: "240+", label: "Calls handled by our AI" }
];

export default function Services() {
  const serviceSchemas = services.map(service => ({
    name: service.title,
    description: service.description,
    serviceType: "AI Automation",
    category: service.title.includes("Finance") ? "Financial Services" :
              service.title.includes("Email") ? "Communication Services" :
              service.title.includes("Sales") ? "Sales & Marketing" :
              service.title.includes("Operations") ? "Business Process Automation" :
              service.title.includes("Marketing") ? "Marketing Services" :
              "Business Intelligence"
  }));

  return (
    <>
      <SEOHead
        title="AI Automation Services for SMEs | 6 Bespoke Co-Pilots | Midlands Digital"
        description="Invoice automation, email triage, CRM, operations, content and BI dashboards for SMEs. Two-week pilots from £1,950. Book a free call."
        keywords="AI automation services, AI co-pilot, invoice automation, email automation, CRM automation, BI dashboards, SME AI solutions, Midlands Digital consultancy, workflow automation, business intelligence"
      />
      {serviceSchemas.map((schema, index) => (
        <StructuredData key={index} type="Service" data={schema} id={`service-${index}`} />
      ))}
      <Breadcrumbs items={[{ label: "Services" }]} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section role="region" aria-label="Services overview" className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6" data-testid="badge-cross-industry">
                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                Cross-Industry AI Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="heading-services">
                AI Co-Pilots Built Around{" "}
                <span className="text-chart-2">Your Workflows</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-services-description">
                We don't sell software licences. We study how your team actually works, then build bespoke AI automations that slot into your existing tools and save 8-20 hours per person, per week.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild data-testid="button-hero-audit">
                  <Link href="/free-ai-audit">
                    Get Your Free AI Audit
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-hero-pricing">
                  <Link href="/transparent-pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            {/* Trust Stats Bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section role="region" aria-label="Our AI automation services" className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-service-grid">
                Six AI Co-Pilots, One Goal: Save You Time
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each co-pilot integrates with the tools you already use—Microsoft 365, Google Workspace, Xero, HubSpot, Salesforce, and more. No rip-and-replace. Serving{" "}
                <Link href="/sectors/manufacturing" className="text-foreground hover:text-chart-2 transition-colors font-medium">manufacturing</Link>,{" "}
                <Link href="/sectors/retail" className="text-foreground hover:text-chart-2 transition-colors font-medium">retail</Link>,{" "}
                <Link href="/sectors/healthcare" className="text-foreground hover:text-chart-2 transition-colors font-medium">healthcare</Link>, and{" "}
                <Link href="/sectors/professional-services" className="text-foreground hover:text-chart-2 transition-colors font-medium">professional services</Link> across the Midlands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <article key={service.title}>
                  <Card className="h-full hover-elevate flex flex-col" data-testid={`card-service-${service.slug}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className={`p-3 rounded-md ${service.bgColor} ${service.color}`}>
                          <service.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <Badge variant="secondary" data-testid={`badge-time-${service.slug}`}>
                          <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                          {service.timeSaved}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex-1 space-y-4">
                        <ul className="space-y-1.5">
                          {service.examples.map((example) => (
                            <li key={example} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-chart-4 flex-shrink-0" aria-hidden="true" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {service.industries.map((industry) => {
                            const industryMap: Record<string, string> = {
                              "Manufacturing": "/sectors/manufacturing",
                              "Retail": "/sectors/retail",
                              "Professional Services": "/sectors/professional-services",
                              "Healthcare": "/sectors/healthcare",
                              "Hospitality": "/sectors/retail",
                              "Field Services": "/sectors/manufacturing",
                              "Facilities": "/sectors/manufacturing",
                              "Call Centres": "/sectors/professional-services",
                              "Charities": "/sectors/professional-services",
                              "Agencies": "/sectors/professional-services",
                              "eCommerce": "/sectors/retail"
                            };
                            const industryLink = industryMap[industry];
                            
                            return industryLink ? (
                              <Link key={industry} href={industryLink}>
                                <Badge variant="outline" className="text-xs cursor-pointer">
                                  {industry}
                                </Badge>
                              </Link>
                            ) : (
                              <Badge key={industry} variant="outline" className="text-xs">
                                {industry}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                      <div className="pt-4 mt-4 border-t">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full justify-between" 
                          asChild
                          data-testid={`button-learn-${service.slug}`}
                        >
                          <Link href={service.detailUrl}>
                            Explore {service.title}
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section role="region" aria-label="How our process works" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="secondary" className="mb-4">
                <Zap className="w-3 h-3 mr-1" aria-hidden="true" />
                Simple 4-Step Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-process">
                From First Call to Measurable Results in Weeks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                No six-month implementation cycles. No change management consultants. Just a straightforward path from problem to solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {processSteps.map((step) => (
                <Card key={step.step} className="relative" data-testid={`card-step-${step.step}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground text-sm font-bold">
                        {step.step}
                      </div>
                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <step.icon className="w-4 h-4 text-chart-2" aria-hidden="true" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild data-testid="button-start-here">
                <Link href="/start-here">
                  See the full onboarding process
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI vs Traditional Comparison */}
        <section role="region" aria-label="AI automation compared to traditional software" className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-comparison">
                Why AI Automation Beats Traditional Software
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Enterprise software forces you to change how you work. We change how the software works—around you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-chart-4/30 bg-gradient-to-br from-chart-4/5 to-background">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-4" aria-hidden="true" />
                    <CardTitle className="text-xl">AI Automation</CardTitle>
                  </div>
                  <CardDescription>Bespoke, intelligent, and adaptive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Deployment", value: "2-4 weeks" },
                    { label: "Cost", value: "Fixed price, agreed up front" },
                    { label: "Customisation", value: "Built around your workflows" },
                    { label: "Time to ROI", value: "30-60 days" },
                    { label: "Support model", value: "Ongoing partnership & optimisation" }
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <span className="font-medium text-sm">{item.label}: </span>
                        <span className="text-sm text-muted-foreground">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-muted opacity-75">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs text-muted-foreground" aria-hidden="true">&times;</span>
                    </div>
                    <CardTitle className="text-xl text-muted-foreground">Traditional Software</CardTitle>
                  </div>
                  <CardDescription>Off-the-shelf, rigid, one-size-fits-all</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Deployment", value: "3-6 months" },
                    { label: "Cost", value: "£15-30k+ licensing & consulting" },
                    { label: "Customisation", value: "Limited; you adapt to the software" },
                    { label: "Time to ROI", value: "6-12+ months" },
                    { label: "Support model", value: "One-time setup, then you're on your own" }
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-0.5 flex-shrink-0 text-xs" aria-hidden="true">&times;</span>
                      <div>
                        <span className="font-medium text-sm text-muted-foreground">{item.label}: </span>
                        <span className="text-sm text-muted-foreground">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild data-testid="button-compare-detail">
                <Link href="/ai-vs-traditional">
                  Read the full comparison
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section role="region" aria-label="Why choose Midlands Digital" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-different">
                Why Midlands SMEs Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not a London agency parachuting in. We're based in the Midlands, we understand Midlands businesses, and we price fairly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Midlands-Based",
                  description: "We serve Birmingham, Nottingham, Leicester, Coventry, and Derby. In-person or remote—your choice."
                },
                {
                  icon: Shield,
                  title: "Built by an Operator",
                  description: "Everything we build is based on running AI agents in a live 70-property business, not on theory."
                },
                {
                  icon: Handshake,
                  title: "Fixed-Price Pilots",
                  description: "Start with a £1,950 two-week pilot. Know exactly what you're paying before you commit to anything larger."
                },
                {
                  icon: Zap,
                  title: "No Vendor Lock-In",
                  description: "Everything we build integrates with your existing tools. You own your data and your automations."
                },
                {
                  icon: TrendingUp,
                  title: "Measurable ROI",
                  description: "Every engagement includes a measurement framework. Before/after metrics so you can see the impact clearly."
                },
                {
                  icon: Sparkles,
                  title: "Ongoing Optimisation",
                  description: "AI gets smarter over time. We continuously refine your automations based on real usage data."
                }
              ].map((item) => (
                <Card key={item.title} data-testid={`card-differentiator-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="pt-6">
                    <item.icon className="w-5 h-5 text-chart-2 mb-3" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section role="region" aria-label="Get started with AI automation" className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
                  Ready to Save Your Team Hours Every Week?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Book a free strategy call. We'll identify your highest-impact automation opportunities and map out a clear plan. No jargon, no hard sell. Serving businesses in{" "}
                  <Link href="/locations/nottingham" className="underline font-medium">Nottingham</Link>,{" "}
                  <Link href="/locations/birmingham" className="underline font-medium">Birmingham</Link>,{" "}
                  <Link href="/locations/leicester" className="underline font-medium">Leicester</Link>,{" "}
                  <Link href="/locations/coventry" className="underline font-medium">Coventry</Link>,{" "}
                  <Link href="/locations/derby" className="underline font-medium">Derby</Link>, and across the Midlands.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    asChild
                    data-testid="button-book-call"
                  >
                    <Link href="/#contact">
                      Book Your Free Strategy Call
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground"
                    asChild
                    data-testid="button-view-pricing"
                  >
                    <Link href="/transparent-pricing">
                      View Transparent Pricing
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
