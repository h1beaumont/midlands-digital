import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What happens in week 1?",
          answer: "We map your workflows, audit existing tools, and identify the top 3 automation opportunities. You'll see quick wins in the first 7 days—typically small automations that save 1-2 hours immediately."
        },
        {
          question: "How long does a typical project take?",
          answer: "Rapid Audit: 1-2 weeks. Pilot: 4-8 weeks for first automations. Scale engagements are ongoing monthly with continuous improvements. We aim to deliver measurable wins typically within 30 days or we'll work for free until we do."
        },
        {
          question: "Do I need technical knowledge to work with you?",
          answer: "Not at all. We translate technical concepts into business outcomes. You bring domain expertise, we handle the AI and automation. The people we build for are usually business owners, finance leads or operations managers, not IT teams."
        },
        {
          question: "What's the first step to get started?",
          answer: "Book a free 30-minute strategy call. We'll discuss your biggest time-wasters, identify 2-3 quick automation wins, and provide a clear next-step proposal—no obligation, no sales pressure."
        }
      ]
    },
    {
      category: "Pricing & ROI",
      questions: [
        {
          question: "How much does it cost?",
          answer: "Rapid Audit: £2-4k (1-2 weeks). Pilot: £6-15k (first automations). Scale: £4-12k/month (ongoing optimisation). Train: £3-8k (team enablement). All fixed-price with clear scopes—no hidden costs or hourly billing surprises."
        },
        {
          question: "How do you measure ROI?",
          answer: "We track time saved (hours/week), cost reduction (£/month), error rates, and team feedback. Every engagement includes a measurement framework with clear before/after metrics."
        },
        {
          question: "What if I don't see results?",
          answer: "We agree the measures of success before we start (hours saved, errors, cost) and report against them at the end of the pilot, so you can decide whether to go further."
        },
        {
          question: "Can we start small and scale up?",
          answer: "Absolutely. Most businesses start with a Rapid Audit (£2-4k) to identify opportunities, then move to a Pilot for 1-2 automations. Once you see results, we can scale to ongoing optimisation or train your team to maintain systems independently."
        }
      ]
    },
    {
      category: "Technical & Security",
      questions: [
        {
          question: "What about data security?",
          answer: "All integrations use OAuth or API keys (never passwords). Data stays in your systems—we don't host or store your business data. We can work with your IT team on security reviews and compliance requirements."
        },
        {
          question: "Do we need to buy new software?",
          answer: "No. We integrate with what you already use (Microsoft 365, Google Workspace, Xero, QuickBooks, HubSpot, Salesforce, etc.). If new tools are needed, we'll recommend cost-effective options and get your approval first. Most automations work with existing systems."
        },
        {
          question: "Can you work with our existing IT team?",
          answer: "Absolutely. We collaborate closely with in-house IT on security reviews, integrations, and handoffs. We can stay on for ongoing improvements while IT handles day-to-day running. We provide documentation and knowledge transfer."
        },
        {
          question: "What AI models do you use?",
          answer: "We use OpenAI (GPT-4), Anthropic (Claude), and open-source models depending on your use case, budget, and data sensitivity. We select the most cost-effective, reliable option for each workflow—never forcing a one-size-fits-all solution."
        },
        {
          question: "Will AI replace our team?",
          answer: "No. AI handles repetitive tasks so your team can focus on high-value work. We've never seen a client reduce headcount—instead, they redirect capacity to growth activities, customer service, or strategic projects that were previously impossible due to admin burden."
        }
      ]
    },
    {
      category: "Industries & Use Cases",
      questions: [
        {
          question: "What industries do you serve?",
          answer: "Retail, manufacturing, healthcare, professional services, charities, field services, call centres, and eCommerce. If you have repetitive workflows involving data entry, email triage, invoicing, or reporting—we can automate it."
        },
        {
          question: "Do you work with businesses outside the Midlands?",
          answer: "Yes. While we're based in Nottingham and focus on the Midlands, we work with businesses across the UK. We offer face-to-face meetings in Nottingham, Derby, and Leicester, and remote collaboration for clients elsewhere."
        },
        {
          question: "What size businesses do you work with?",
          answer: "SMEs with 10-500 employees. Small enough to need cost-effective solutions, large enough to benefit from automation at scale. If you're spending 5+ hours/week on manual processes, we can help."
        },
        {
          question: "Can you automate [specific task]?",
          answer: "Probably yes. Common automations: invoice extraction, email triage, CRM updates, report generation, data reconciliation, appointment scheduling, content drafting. If it's repetitive and rule-based (even complex rules), we can automate it. Book a call to discuss your specific workflow."
        }
      ]
    },
    {
      category: "Process & Support",
      questions: [
        {
          question: "How does procurement work?",
          answer: "We provide fixed-price proposals with clear scopes. A simple Purchase Order or services agreement works. We're flexible and can work with your procurement process—no enterprise sales complexity."
        },
        {
          question: "What if our needs change mid-project?",
          answer: "We document scope changes transparently and provide change orders with clear pricing. We're adaptable. We prioritise trust over bureaucracy—your success is our success."
        },
        {
          question: "Do you offer ongoing support?",
          answer: "Yes. Scale tier (£4-12k/month) includes ongoing optimisation, new automations, and support. Train tier hands off systems to your team, but we're available for ad-hoc consulting. We don't force vendor lock-in—you own the automations we build."
        },
        {
          question: "What happens after the project ends?",
          answer: "You own the automations. We provide documentation, training, and handoff to your team. You can keep us on retainer for continuous improvement, but there's no obligation. Systems we build are designed to run independently—you're never locked in."
        }
      ]
    }
  ];

  // Flatten all questions for schema
  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({
      question: q.question,
      answer: q.answer
    }))
  );

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Midlands Digital"
        description="Common questions about AI automation, pricing, security, ROI, and working with Midlands Digital. Get answers about timelines, costs, industries served, and technical details."
        keywords="AI automation FAQ, AI consultancy questions, automation pricing, AI security, ROI measurement, Midlands Digital"
      />
      <StructuredData type="FAQPage" data={{ questions: allQuestions }} />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-testid="heading-faq">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about AI automation, pricing, security, and working with us.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`}
                      data-testid={`accordion-item-${categoryIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left text-base font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="mt-16 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Book a free 30-minute strategy call. We'll discuss your specific needs, answer your questions, and identify automation opportunities—no obligation.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild data-testid="button-book-call">
                  <a href="/#contact">
                    Book Your Free, No-Obligation AI Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-view-pricing">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
