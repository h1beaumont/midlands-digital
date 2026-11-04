import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Bot,
  Building2,
  Zap
} from "lucide-react";

export default function Work() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Our Work | AI Voice Agent Case Study | Midlands Digital"
        description="See real results from our AI voice agent deployment: 240+ calls handled, 61.5% resolved without a human, $59/month running cost. Real numbers, no fluff."
        keywords="ai voice agent case study, ai automation results, property management ai, midlands ai consultancy"
      />
      <StructuredData 
        type="Article"
        data={{
          headline: "AI Voice Agent Case Study: 240+ Calls, 61.5% Auto-Resolution",
          description: "How we built an AI voice agent for a property management company that handles tenant calls, resolves issues automatically, and costs less than sixty quid a month.",
          author: {
            "@type": "Organization",
            "name": "Midlands Digital"
          },
          publisher: {
            "@type": "Organization",
            "name": "Midlands Digital",
            "url": "https://www.midlandsdigital.ai",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.midlandsdigital.ai/logo.png"
            }
          },
          datePublished: "2025-10-26",
          image: "https://www.midlandsdigital.ai/logo.png"
        }}
        id="case-study-voice-agent"
      />
      <Breadcrumbs items={[{ label: "Our Work" }]} />

      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" data-testid="badge-work">Our Work</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Real Numbers. No Fluff.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We would rather show you one real thing we have built than a dozen case studies we made up. Here is what we have actually shipped.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <Card className="border-chart-4/50" data-testid="card-voice-agent-case-study">
            <CardHeader className="bg-muted/30 border-b">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-chart-4/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-chart-4" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl" data-testid="case-title-0">AI Voice Agent</CardTitle>
                    <CardDescription>Property Management · Live Deployment</CardDescription>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Live System</Badge>
                  <Badge variant="outline">Real Data</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 font-bold">!</span>
                  </div>
                  The Problem
                </h3>
                <p className="text-muted-foreground pl-8">
                  A property management company was spending hours every week fielding the same tenant calls. Lock-out requests, maintenance status updates, rent balance queries, emergency routing. The office phone rang constantly, and most of the calls followed the same predictable patterns. Staff were tied up answering repetitive questions instead of doing actual work.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-chart-2/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-chart-2" />
                  </div>
                  What We Built
                </h3>
                <p className="text-muted-foreground pl-8">
                  An AI voice agent that answers the phone, understands what the tenant needs in natural conversation, and either resolves the issue directly or routes it to the right person with full context. It handles lock-out procedures, provides maintenance updates from the system, answers common tenancy questions, and triages genuine emergencies to on-call staff. The agent sounds natural, responds in under two seconds, and works 24/7.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  The Numbers
                </h3>
                <div className="grid md:grid-cols-4 gap-4 pl-8">
                  <div className="bg-muted/50 rounded-md p-4 space-y-1">
                    <div className="text-2xl font-bold text-chart-4" data-testid="result-0-0">240+</div>
                    <p className="text-sm text-muted-foreground">Calls Handled</p>
                  </div>
                  <div className="bg-muted/50 rounded-md p-4 space-y-1">
                    <div className="text-2xl font-bold text-chart-2" data-testid="result-0-1">61.5%</div>
                    <p className="text-sm text-muted-foreground">Resolved Without a Human</p>
                  </div>
                  <div className="bg-muted/50 rounded-md p-4 space-y-1">
                    <div className="text-2xl font-bold text-chart-3" data-testid="result-0-2">$59/mo</div>
                    <p className="text-sm text-muted-foreground">Running Cost</p>
                  </div>
                  <div className="bg-muted/50 rounded-md p-4 space-y-1">
                    <div className="text-2xl font-bold text-accent" data-testid="result-0-3">1.8s</div>
                    <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-md p-6">
                <h4 className="font-semibold mb-3">What this actually means</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    Before this system, every tenant call meant someone in the office had to stop what they were doing and answer. Most of the time it was the same five or six questions.
                  </p>
                  <p>
                    Now, nearly two thirds of those calls never reach a human. The agent handles them start to finish. The ones that do need a person arrive with full context, so the conversation is shorter and more productive.
                  </p>
                  <p>
                    The whole thing costs less than sixty quid a month. That is less than one hour of a receptionist's time per week.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 border-t bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-2 border-chart-2/20">
            <CardContent className="p-8 text-center space-y-6">
              <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                See It Live
              </Badge>
              <h2 className="text-3xl font-bold">Try the Property Management Demo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We built a working demo that shows how AI automation fits into a property management workflow. Track contractors, automate invoicing, and generate AI email responses.
              </p>
              <Button size="lg" asChild data-testid="button-try-demo">
                <Link href="/demo">
                  Try Live Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 border-t">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">More Case Studies Coming Soon</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are building more automations for Midlands businesses right now. As we ship them and get permission to share the numbers, they will appear here. In the meantime, if you want to talk about what we could build for you, get in touch.
            </p>
            <Button size="lg" asChild data-testid="button-book-call">
              <Link href="/#contact">
                <Sparkles className="w-4 h-4 mr-2" />
                Book a Free Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
