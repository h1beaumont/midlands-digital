import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  Sparkles, 
  Target, 
  Zap,
  Clock,
  Shield,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Handshake,
  Lightbulb,
  Heart,
  Briefcase,
  Factory,
  Stethoscope,
  ShoppingCart,
  Wrench
} from "lucide-react";

const timeline = [
  {
    year: "The Problem",
    title: "Running a 170-property business",
    description: "Our founder Harry managed a seven-figure property management company — 170 properties, 2,500+ cleans per month, 40 staff. The admin was crushing. Quotes, invoices, emails, scheduling, contractor payments — tens of thousands of individual tasks every month, all done manually."
  },
  {
    year: "The Turning Point",
    title: "Automating from the inside out",
    description: "Rather than buying off-the-shelf software that didn't fit, Harry built custom automation systems from scratch. Invoice processing that took hours became minutes. Email triage that consumed entire mornings ran on autopilot. The business could scale without scaling the admin team."
  },
  {
    year: "The Realisation",
    title: "Every SME has the same problems",
    description: "Talking to other business owners across the Midlands, the pattern was clear: manufacturers drowning in data entry, retailers buried in stock management, healthcare providers lost in patient admin. The same time-draining, error-prone manual work — different industry, same story."
  },
  {
    year: "Today",
    title: "Midlands Digital is born",
    description: "Now we bring those battle-tested automation systems to SMEs across the Midlands. Not theoretical AI — practical, measurable automation built by someone who has lived the pain of running a business without it."
  }
];

const values = [
  {
    icon: Target,
    title: "Outcomes Over Output",
    description: "We measure success in hours saved and pounds returned, not in features shipped. Every automation must earn its place."
  },
  {
    icon: Handshake,
    title: "Radical Transparency",
    description: "Fixed prices, clear scopes, no hidden fees. You know exactly what you're paying for and what you'll get before we start."
  },
  {
    icon: Heart,
    title: "Built for Real Businesses",
    description: "We've run an SME. We know the pressure of payroll, the frustration of admin, the value of every hour. We build for people like us."
  },
  {
    icon: Lightbulb,
    title: "Practical, Not Theoretical",
    description: "We don't talk about 'AI strategy' in the abstract. We show you a working automation in your business within weeks."
  },
  {
    icon: Shield,
    title: "Your Data, Your Systems",
    description: "We integrate with your existing tools — no vendor lock-in, no forced migrations. You own everything we build."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "AI gets smarter over time. We don't just set it up and leave — we monitor, optimise, and improve as your business evolves."
  }
];

const industries = [
  { icon: Factory, name: "Manufacturing", link: "/sectors/manufacturing" },
  { icon: ShoppingCart, name: "Retail", link: "/sectors/retail" },
  { icon: Stethoscope, name: "Healthcare", link: "/sectors/healthcare" },
  { icon: Briefcase, name: "Professional Services", link: "/sectors/professional-services" }
];

const locations = [
  { name: "Birmingham", link: "/locations/birmingham" },
  { name: "Nottingham", link: "/locations/nottingham" },
  { name: "Leicester", link: "/locations/leicester" },
  { name: "Coventry", link: "/locations/coventry" },
  { name: "Derby", link: "/locations/derby" },
  { name: "Lincoln", link: "/locations/lincoln" },
  { name: "Northampton", link: "/locations/northampton" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Midlands Digital | Bespoke AI Automation for Midlands SMEs"
        description="Founded by an operator who ran a 70-property short-let business on AI agents he built. Midlands Digital builds bespoke AI automation for SMEs across Birmingham, Nottingham, Leicester, Coventry, and Derby."
        keywords="about midlands ai, ai automation midlands, nottingham ai consultancy, birmingham ai automation, midlands sme automation, bespoke ai solutions"
      />
      <StructuredData type="Organization" />
      <Breadcrumbs items={[{ label: "About" }]} />

      {/* Hero */}
      <section role="region" aria-label="About Midlands Digital" className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center space-y-6">
            <Badge className="mb-2" data-testid="badge-about">
              <Building2 className="w-3 h-3 mr-1" aria-hidden="true" />
              About Midlands Digital
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="heading-about">
              Built by an Operator,{" "}
              <span className="text-chart-2">Not a Consultant</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-intro">
              Most AI consultancies are staffed by people who've never run a business. We're different. Our founder automated a seven-figure company from the inside — and now brings those battle-tested systems to SMEs across the Midlands.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" asChild data-testid="button-see-demo">
                <Link href="/demo">
                  See the Live Demo
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-contact">
                <Link href="/#contact">Book a Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section role="region" aria-label="Our story" className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-story">
              How We Got Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Midlands Digital wasn't born in a boardroom. It was born from the frustration of running a real business with too much admin.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6" data-testid={`timeline-step-${index}`}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <Badge variant="outline" className="mb-2 text-xs">{item.year}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section role="region" aria-label="Key metrics and achievements" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-numbers">
              The Numbers That Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't deal in abstract metrics. These are real numbers from systems we built and ran.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "70", label: "Properties run on AI", sublabel: "in the founder's own business" },
              { value: "169 of 227", label: "Guest messages a day", sublabel: "handled with no person involved" },
              { value: "40+ → 8", label: "Weekly admin hours", sublabel: "after automating one workflow at a time" },
              { value: "£1,950", label: "Pilot price", sublabel: "fixed scope, no surprises" }
            ].map((stat) => (
              <Card key={stat.label} data-testid={`stat-card-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section role="region" aria-label="What you get from working with us" className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-what-you-get">
              What You Actually Get
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real automation that handles the work — not software that creates more of it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                color: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-50 dark:bg-blue-950/30",
                title: "Time Back in Your Day",
                description: "Automate the tasks draining hours — quotes, invoices, emails, data entry, reporting. Get time back for what actually grows your business."
              },
              {
                icon: TrendingUp,
                color: "text-green-600 dark:text-green-400",
                bg: "bg-green-50 dark:bg-green-950/30",
                title: "Measurable Cost Reduction",
                description: "Less manual admin, fewer errors, lower overhead. Tracked and reported so you can see whether it pays."
              },
              {
                icon: Wrench,
                color: "text-orange-600 dark:text-orange-400",
                bg: "bg-orange-50 dark:bg-orange-950/30",
                title: "Bespoke Solutions",
                description: "No cookie-cutter software. We build AI co-pilots tailored to your workflows, your team, and your industry."
              },
              {
                icon: Shield,
                color: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-50 dark:bg-purple-950/30",
                title: "Start Small",
                description: "One workflow, one fixed-price pilot. If it doesn't earn its keep, you've risked two weeks, not a year."
              },
              {
                icon: Zap,
                color: "text-yellow-600 dark:text-yellow-400",
                bg: "bg-yellow-50 dark:bg-yellow-950/30",
                title: "Week-One Automation",
                description: "See tasks running on autopilot from the first week. No lengthy implementations — we deliver fast, visible wins from day one."
              },
              {
                icon: CheckCircle2,
                color: "text-teal-600 dark:text-teal-400",
                bg: "bg-teal-50 dark:bg-teal-950/30",
                title: "Fixed-Price Pilots",
                description: "Start with a £1,950 pilot — clear deliverables, no surprises. See the ROI before you commit to scaling across your business."
              }
            ].map((item) => (
              <Card key={item.title} data-testid={`card-benefit-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="pt-6 space-y-3">
                  <div className={`w-10 h-10 rounded-md ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section role="region" aria-label="Our values and principles" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-values">
              What We Believe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six principles that guide how we work with every client.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="pt-6 space-y-3">
                  <value.icon className="w-5 h-5 text-chart-2" aria-hidden="true" />
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Locations */}
      <section role="region" aria-label="Industries and locations we serve" className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="heading-industries">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have repetitive workflows, we can automate them. We specialise in these four sectors but work across all industries.
              </p>
              <div className="space-y-3">
                {industries.map((industry) => (
                  <Link key={industry.name} href={industry.link}>
                    <Card className="hover-elevate cursor-pointer" data-testid={`card-industry-${industry.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <CardContent className="py-4 px-5 flex items-center gap-3">
                        <industry.icon className="w-5 h-5 text-chart-2 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">{industry.name}</span>
                        <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" aria-hidden="true" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="heading-locations">
                Where We Work
              </h2>
              <p className="text-muted-foreground mb-6">
                Based in Nottingham, serving the entire Midlands region. On-site discovery visits included as standard — or fully remote if you prefer.
              </p>
              <div className="space-y-3">
                {locations.map((location) => (
                  <Link key={location.name} href={location.link}>
                    <Card className="hover-elevate cursor-pointer" data-testid={`card-location-${location.name.toLowerCase()}`}>
                      <CardContent className="py-4 px-5 flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-chart-2 flex-shrink-0" aria-hidden="true" />
                        <span className="font-medium">{location.name}</span>
                        <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" aria-hidden="true" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section role="region" aria-label="Get in touch" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
                See What We Can Automate for You
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Book a free discovery call. We'll map your workflows, identify your biggest time drains, and show you exactly what automation can look like in your business. No jargon, no hard sell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild data-testid="button-cta-demo">
                  <Link href="/demo">
                    <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
                    Try the Live Demo
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground"
                  asChild
                  data-testid="button-cta-call"
                >
                  <Link href="/#contact">
                    Book a Free Discovery Call
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
