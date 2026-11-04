import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { StickyCTA } from "@/components/StickyCTA";
import { useCountUp } from "@/hooks/use-count-up";
import { 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  Mail, 
  FileText, 
  Calculator,
  ArrowRight,
  Clock,
  CheckCircle2,
  Building2,
  Settings,
  Megaphone,
  Laptop,
  Shield,
  Search,
  Rocket,
  GraduationCap,
  Combine,
  Phone,
  Bot
} from "lucide-react";

// Logo imports - PNG originals
import googleLogo from "@assets/Google_Symbol_1_1761128059104.png";
import salesforceLogo from "@assets/Salesforce_idN3OdcTG__1_1761128194755.png";
import xeroLogo from "@assets/Xero_idfmk3Fzbf_1_1761128228162.png";
import hubspotLogo from "@assets/HubSpot_idPJcOROpd_1_1761128071894.png";
import quickbooksLogo from "@assets/Intuit QuickBooks_idH8urRJxv_0_1761128085829.png";
import sageLogo from "@assets/Sage_idtX4CB4y2_1_1761128135348.png";
import mondayLogo from "@assets/Monday.com_idvwB2jWSP_1_1761128097993.png";
import pipedriveLogo from "@assets/Pipedrive_idHo6Lfa2R_1_1761128123328.png";
import zendeskLogo from "@assets/Zendesk®_Logo_1_1761128293188.png";
import zohoLogo from "@assets/Zoho_idb7XCQtPE_1_1761128304500.png";
import netsuiteLogo from "@assets/NetSuite_idNc45xmoe_1_1761128112602.png";
import servicenowLogo from "@assets/ServiceNow_idM0Y4akhW_1_1761128209325.png";
import slackLogo from "@assets/slack_logo.png";
import microsoft365Logo from "@assets/microsoft365_logo.png";
import notionLogo from "@assets/notion_logo.png";
import asanaLogo from "@assets/Asana_idgyOBeSXC_1_1761142595113.png";
import openaiLogo from "@assets/OpenAI_Logo_1_1761142824171.png";
import clickupLogo from "@assets/ClickUp_idlDKcAhpa_1_1761143371303.png";
import shopifyLogo from "@assets/Shopify.com_Logo_1_1761143371303.png";
import trelloLogo from "@assets/Trello_idFD1C9HRz_1_1761143371303.png";

// WebP optimised versions (50-65% smaller filesize for PageSpeed)
import googleLogoWebP from "@assets/Google_Symbol_1_1761128059104.webp";
import salesforceLogoWebP from "@assets/Salesforce_idN3OdcTG__1_1761128194755.webp";
import xeroLogoWebP from "@assets/Xero_idfmk3Fzbf_1_1761128228162.webp";
import hubspotLogoWebP from "@assets/HubSpot_idPJcOROpd_1_1761128071894.webp";
import microsoft365LogoWebP from "@assets/microsoft365_logo.webp";
import quickbooksLogoWebP from "@assets/Intuit QuickBooks_idH8urRJxv_0_1761128085829.webp";
import sageLogoWebP from "@assets/Sage_idtX4CB4y2_1_1761128135348.webp";
import mondayLogoWebP from "@assets/Monday.com_idvwB2jWSP_1_1761128097993.webp";
import pipedriveLogoWebP from "@assets/Pipedrive_idHo6Lfa2R_1_1761128123328.webp";
import zendeskLogoWebP from "@assets/Zendesk®_Logo_1_1761128293188.webp";
import zohoLogoWebP from "@assets/Zoho_idb7XCQtPE_1_1761128304500.webp";
import netsuiteLogoWebP from "@assets/NetSuite_idNc45xmoe_1_1761128112602.webp";
import servicenowLogoWebP from "@assets/ServiceNow_idM0Y4akhW_1_1761128209325.webp";
import slackLogoWebP from "@assets/slack_logo.webp";
import notionLogoWebP from "@assets/notion_logo.webp";
import asanaLogoWebP from "@assets/Asana_idgyOBeSXC_1_1761142595113.webp";
import openaiLogoWebP from "@assets/OpenAI_Logo_1_1761142824171.webp";
import clickupLogoWebP from "@assets/ClickUp_idlDKcAhpa_1_1761143371303.webp";
import shopifyLogoWebP from "@assets/Shopify.com_Logo_1_1761143371303.webp";
import trelloLogoWebP from "@assets/Trello_idFD1C9HRz_1_1761143371303.webp";

export default function Home() {
  const { toast } = useToast();
  
  // Count-up animations for stats
  const costReduction = useCountUp({ end: 40, duration: 2000, suffix: '%' });
  const weekOne = useCountUp({ end: 1, duration: 1500 });
  const guarantee = useCountUp({ end: 30, duration: 2000 });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    servicesNeeded: [] as string[],
    painPoint: "",
    message: ""
  });

  // Defer floating animations to improve LCP
  const [showFloatingAnimations, setShowFloatingAnimations] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFloatingAnimations(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact-submissions", data);
    },
    onSuccess: () => {
      toast({
        title: "Request Received!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        servicesNeeded: [],
        painPoint: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter(s => s !== service)
        : [...prev.servicesNeeded, service]
    }));
  };

  const services = [
    {
      icon: Calculator,
      title: "Finance & Invoicing Co-Pilot",
      description: "Invoice extraction, reconciliation, cost tracking across departments. Works with Xero, QuickBooks, Sage—automating weeks of admin into minutes.",
      color: "bg-chart-1",
      detailUrl: "/services/invoice-automation"
    },
    {
      icon: Mail,
      title: "AI Email & Communication",
      description: "Handle routine inquiries, draft responses in your voice, triage requests. Train on your team's expertise—retail, manufacturing, or healthcare.",
      color: "bg-chart-2",
      detailUrl: "/services/email-copilot"
    },
    {
      icon: Users,
      title: "Sales & CRM Automation",
      description: "Lead research, email sequences, CRM logging, follow-ups. Integrates with HubSpot, Salesforce, Pipedrive—built for your sales process.",
      color: "bg-chart-3",
      detailUrl: "/services/lead-enrichment"
    },
    {
      icon: FileText,
      title: "Operations & Workflow Co-Pilot",
      description: "Ticket triage, SOP compliance, task routing, documentation. Field service, facilities, call centres—automate the repetitive work.",
      color: "bg-chart-4",
      detailUrl: "/services/operations"
    },
    {
      icon: Zap,
      title: "Marketing & Content Automation",
      description: "Content drafts, campaign briefs, social scheduling. Charities, agencies, ecommerce—consistent output without the grind.",
      color: "bg-chart-5",
      detailUrl: "/services/content-generation"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence & Reporting",
      description: "Board packs, KPI dashboards, data quality, predictive insights. Manufacturing, retail, pro-services—decisions backed by real-time data.",
      color: "bg-accent",
      detailUrl: "/services/bi-dashboards"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Automation for Midlands SMEs | Midlands Digital"
        description="AI automation for Midlands SMEs. Invoice processing, email triage, CRM and workflow automation. Built by someone who has run AI agents in a live business. Book a free strategy call."
        keywords="AI automation East Midlands, automated content creation in the midlands, ai automation derby, ai agency nottingham, Nottingham AI consultancy, Leicester automation, Derby AI, SME automation, workflow automation, invoice automation, email automation, East Midlands business automation"
      />
      <StructuredData 
        type="Organization" 
        data={{
        }}
      />
      <StructuredData type="ProfessionalService" />
      <StructuredData type="LocalBusiness" data={{
        city: "Nottingham",
        latitude: "52.9548",
        longitude: "-1.1581",
        postalCode: "NG1 1AA",
        description: "Bespoke AI automation consultancy for East Midlands SMEs. Invoice processing, email triage, CRM and workflow automation, starting with a fixed-price two-week pilot."
      }} />
      <StructuredData type="Service" id="finance-invoicing" data={{
        name: "Finance & Invoicing Co-Pilot",
        description: "AI-powered invoice processing, expense categorisation, and financial reporting automation. Cuts manual data entry and speeds up month-end close for East Midlands SMEs.",
        serviceType: "Invoice Automation",
        category: "Financial Automation"
      }} />
      <StructuredData type="Service" id="email-communication" data={{
        name: "AI Email & Communication",
        description: "Intelligent email triage, auto-drafted responses, and communication workflow automation. Saves 2+ hours daily on email management for busy SME teams across the Midlands.",
        serviceType: "Email Automation",
        category: "Communication Automation"
      }} />
      <StructuredData type="Service" id="sales-crm" data={{
        name: "Sales & CRM Automation",
        description: "Automated lead research, enrichment, email sequences, and CRM logging. AI-powered prospecting and follow-up for Midlands businesses.",
        serviceType: "CRM Automation",
        category: "Sales Automation"
      }} />
      <StructuredData type="Service" id="operations-workflow" data={{
        name: "Operations & Workflow Co-Pilot",
        description: "Automated ticket triage, SOP compliance checking, and operational workflow management. Streamlines day-to-day operations for manufacturing, retail, and service businesses in the East Midlands.",
        serviceType: "Workflow Automation",
        category: "Operations Automation"
      }} />
      <StructuredData type="Service" id="marketing-content" data={{
        name: "Marketing & Content Automation",
        description: "AI-generated content drafts, campaign briefs, social media scheduling, and marketing analytics. Helps Midlands SMEs maintain consistent marketing output at a fraction of the cost.",
        serviceType: "Content Generation",
        category: "Marketing Automation"
      }} />
      <StructuredData type="Service" id="bi-reporting" data={{
        name: "Business Intelligence & Reporting",
        description: "Automated board packs, KPI dashboards, and predictive business insights. Transforms raw data into actionable intelligence for East Midlands SME decision-makers.",
        serviceType: "BI Dashboards",
        category: "Business Intelligence"
      }} />
      <StructuredData type="WebSite" />
      <StructuredData type="Speakable" data={{
        name: "AI Business Automation for East Midlands SMEs | Midlands Digital",
        url: "https://www.midlandsdigital.ai",
        cssSelectors: [".hero-headline", ".hero-subheadline", ".value-proposition"]
      }} />
      <StructuredData type="SiteNavigationElement" data={{
        items: [
          { name: "Services", url: "https://www.midlandsdigital.ai/services" },
          { name: "Invoice Automation", url: "https://www.midlandsdigital.ai/services/invoice-automation" },
          { name: "Email Co-Pilot", url: "https://www.midlandsdigital.ai/services/email-copilot" },
          { name: "Operations Automation", url: "https://www.midlandsdigital.ai/services/operations" },
          { name: "BI Dashboards", url: "https://www.midlandsdigital.ai/services/bi-dashboards" },
          { name: "CRM Automation", url: "https://www.midlandsdigital.ai/services/crm-automation" },
          { name: "Our Work", url: "https://www.midlandsdigital.ai/work" },
          { name: "Blog", url: "https://www.midlandsdigital.ai/blog" },
          { name: "Pricing", url: "https://www.midlandsdigital.ai/pricing" },
          { name: "About", url: "https://www.midlandsdigital.ai/about" },
          { name: "Sectors", url: "https://www.midlandsdigital.ai/sectors" },
          { name: "Locations", url: "https://www.midlandsdigital.ai/locations" },
          { name: "Contact", url: "https://www.midlandsdigital.ai/#contact" },
          { name: "FAQ", url: "https://www.midlandsdigital.ai/faq" }
        ]
      }} />
      <StructuredData type="HowTo" data={{
        name: "How to Automate Your Business with AI",
        description: "Our four-step process for implementing AI automation in your SME, from initial audit to team training.",
        totalTime: "PT8W",
        estimatedCost: { currency: "GBP", value: "1950" },
        step: [
          { name: "Audit", text: "We map your workflows, spot quick wins, and build a fixed-scope plan with measurable KPIs. You'll see the top 3 automation opportunities with projected time savings and ROI.", url: "https://www.midlandsdigital.ai/free-ai-audit" },
          { name: "Pilot", text: "Build and test AI co-pilots with your team using real data, real workflows, and real feedback. One workflow fully automated with measurable before-and-after metrics.", url: "https://www.midlandsdigital.ai/pricing" },
          { name: "Scale", text: "Roll out proven automations across departments. Monthly optimisation, new automations added as opportunities arise. Continuous improvement based on real usage data.", url: "https://www.midlandsdigital.ai/services" },
          { name: "Train", text: "We hand over prompts, SOPs, and training so your team owns the AI — no dependency on us. Full documentation and knowledge transfer included.", url: "https://www.midlandsdigital.ai/start-here" }
        ]
      }} />
      {/* Hero Section - min-h prevents CLS from font loading */}
      <section role="region" aria-label="Hero - AI Automation for East Midlands SMEs" className="relative py-20 md:py-32 overflow-hidden min-h-[600px] md:min-h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Animated floating elements - deferred to improve LCP, positioned absolutely */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-chart-2/10 rounded-full blur-2xl" style={{ opacity: showFloatingAnimations ? 1 : 0, transition: 'opacity 0.3s' }} />
        <div className="absolute top-40 right-20 w-40 h-40 bg-chart-3/10 rounded-full blur-3xl" style={{ opacity: showFloatingAnimations ? 1 : 0, transition: 'opacity 0.3s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" style={{ opacity: showFloatingAnimations ? 1 : 0, transition: 'opacity 0.3s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 h-10 rounded-full bg-accent/20 border border-accent-border text-sm font-medium text-accent-foreground">
                <Sparkles className="w-4 h-4" />
                <span>Serving SMEs in the Midlands</span>
              </div>
              <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight pb-2 text-foreground min-h-[120px] sm:min-h-[140px] md:min-h-[180px]">
                AI Automation for East Midlands SMEs
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-chart-2">
                  Nottingham, Leicester & Derby
                </span>
              </h1>
              {/* Benefit-focused sub-headline for conversions */}
              <p className="hero-subheadline text-xl md:text-2xl font-medium text-chart-4 -mt-4 mb-2">
                Take the repetitive admin off your team
              </p>
              <p className="value-proposition text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Bespoke <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">AI automation</Link> for <strong>Retail, Manufacturing, Healthcare & Professional Services</strong>. We start with one workflow, get it working, then build from there. Fixed-scope pilots from <strong>£1,950</strong>, so you see whether it pays before you commit to more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="text-base group"
                  asChild
                  data-testid="button-view-demo"
                >
                  <Link href="/demo">
                    See Live Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base"
                  asChild
                  data-testid="button-calculate-savings"
                >
                  <Link href="/work">
                    See Real Results
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base w-full sm:w-auto"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid="button-contact"
                >
                  <span className="hidden sm:inline">Book a Free Strategy Call</span>
                  <span className="sm:hidden">Book Free Strategy Call</span>
                </Button>
              </div>
              
              {/* Location Links */}
              <div className="pt-6 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Serving SMEs across the Midlands</p>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-chart-4" />
                    <span className="text-sm font-semibold">
                      Nottingham · Derby · Leicester
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-chart-2" />
                    <span className="text-sm font-semibold">
                      Birmingham · Coventry
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="space-y-1" ref={costReduction.ref}>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-chart-4" />
                    <span className="text-2xl font-bold font-mono">240+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Live calls handled by our voice agent</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="space-y-1" ref={weekOne.ref}>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-chart-4" />
                    <span className="text-2xl font-bold font-mono">61.5%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Resolved with no person</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="space-y-1" ref={guarantee.ref}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-chart-4" />
                    <span className="text-2xl font-bold font-mono">£1,950</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Fixed-price pilot</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-2/20 to-chart-3/20 blur-3xl rounded-full" />
              
              {/* Transformation Pipeline Animation */}
              <div className="relative space-y-8" data-testid="animation-ai-automation">
                {/* Pipeline Flow */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Step 1: Your Business */}
                  <div className="flex-1 w-full">
                    <Card className="relative overflow-visible hover-elevate cursor-pointer">
                      <CardContent className="p-8 md:p-10">
                        <div className="text-center space-y-4">
                          <Settings className="w-16 h-16 md:w-20 md:h-20 mx-auto text-muted-foreground" />
                          <div className="text-xl md:text-2xl font-bold">Your Daily Tasks</div>
                          <div className="text-sm md:text-base text-muted-foreground">Manual work taking hours</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Arrow 1 */}
                  <div>
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-chart-2 hidden md:block" />
                  </div>
                  <div className="md:hidden">
                    <ArrowRight className="w-8 h-8 text-chart-2 rotate-90" />
                  </div>

                  {/* Step 2: We Add AI */}
                  <div className="flex-1 w-full">
                    <Card className="relative overflow-visible border-chart-4 border-2 hover-elevate cursor-pointer">
                      <CardContent className="p-8 md:p-10 bg-chart-4/10">
                        <div className="text-center space-y-5">
                          <div className="text-2xl md:text-3xl font-bold text-chart-4">We Combine</div>
                          
                          {/* Automation + AI */}
                          <div className="flex items-center justify-center gap-6">
                            {/* Automation Platform */}
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-background/50 flex items-center justify-center">
                                <Combine className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" />
                              </div>
                              <span className="text-xs md:text-sm font-medium text-muted-foreground leading-tight">Automation</span>
                            </div>

                            {/* Plus */}
                            <div className="text-3xl md:text-4xl font-bold text-chart-4">
                              +
                            </div>

                            {/* AI Processing */}
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-chart-3/20 flex items-center justify-center">
                                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-chart-3" />
                              </div>
                              <span className="text-xs md:text-sm font-medium text-muted-foreground leading-tight">AI</span>
                            </div>
                          </div>

                          <div className="text-sm md:text-base text-muted-foreground font-medium">Platforms + AI working together</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Arrow 2 */}
                  <div>
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-chart-3 hidden md:block" />
                  </div>
                  <div className="md:hidden">
                    <ArrowRight className="w-8 h-8 text-chart-3 rotate-90" />
                  </div>

                  {/* Step 3: Results */}
                  <div className="flex-1 w-full">
                    <Card className="relative overflow-visible border-chart-3 hover-elevate cursor-pointer">
                      <CardContent className="p-8 md:p-10 bg-chart-3/5">
                        <div className="text-center space-y-4">
                          <Zap className="w-16 h-16 md:w-20 md:h-20 mx-auto text-chart-3" />
                          <div className="text-xl md:text-2xl font-bold">You Get Results</div>
                          <div className="text-sm md:text-base text-muted-foreground">Hours saved, costs down</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Supporting Copy */}
                <div className="text-center">
                  <Badge className="bg-chart-4/20 text-chart-4 border-chart-4/30 px-6 py-3 text-base md:text-lg">
                    Enterprise capabilities at SME pricing
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section role="region" aria-label="AI co-pilot services for every department" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Bespoke Solutions for Every Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From finance to sales, operations to marketing—we build AI that works with your existing tools. Retail, manufacturing, healthcare, pro-services, or charities—practical automation built around how you already work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <Link href={service.detailUrl} data-testid={`link-service-${index}`}>
                  <Card className="transition-all duration-300 h-full overflow-hidden group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="text-base group"
              asChild
              data-testid="button-view-services"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section role="region" aria-label="How we work - our four-step process" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four clear steps from first call to live automation—usually complete in 4-8 weeks.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line - Desktop only */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-chart-4 via-chart-2 via-chart-3 to-accent opacity-20" />
            
            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {[
                {
                  num: 1,
                  title: "Audit (2 weeks)",
                  desc: "We map your workflows, spot quick wins, and build a fixed-scope plan with measurable KPIs.",
                  color: "bg-chart-4",
                  Icon: Search
                },
                {
                  num: 2,
                  title: "Pilot (4-6 weeks)",
                  desc: "Build and test AI co-pilots with your team. Real data, real workflows, real feedback.",
                  color: "bg-chart-2",
                  Icon: Rocket
                },
                {
                  num: 3,
                  title: "Scale (ongoing)",
                  desc: "Roll out across departments. Optimise, iterate, and extend to new use cases.",
                  color: "bg-chart-3",
                  Icon: TrendingUp
                },
                {
                  num: 4,
                  title: "Train (optional)",
                  desc: "We hand over prompts, SOPs, and training so your team owns the AI—no dependency on us.",
                  color: "bg-accent",
                  Icon: GraduationCap
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Arrow connector - Desktop only */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-16 -right-3 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  
                  <Card className="relative hover-elevate transition-all duration-300 h-full">
                    {/* Number badge with icon */}
                    <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full ${step.color} text-background flex flex-col items-center justify-center font-bold shadow-lg`}>
                      <step.Icon className="w-6 h-6" />
                      <span className="text-xs mt-0.5">Step {step.num}</span>
                    </div>
                    
                    <CardHeader className="pt-12">
                      <CardTitle className="text-center text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground text-center">
                      {step.desc}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Integration reference */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              Works seamlessly with <span className="font-medium text-foreground">Xero</span>, <span className="font-medium text-foreground">Salesforce</span>, <span className="font-medium text-foreground">Google Workspace</span>, <span className="font-medium text-foreground">HubSpot</span>, and the other tools you already use.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section role="region" aria-label="Case studies and real workflow results" className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Real Workflows, Real Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Across <Link href="/sectors/retail" className="text-foreground hover:text-primary transition-colors font-medium">retail</Link>, <Link href="/sectors/manufacturing" className="text-foreground hover:text-primary transition-colors font-medium">manufacturing</Link>, <Link href="/sectors/healthcare" className="text-foreground hover:text-primary transition-colors font-medium">healthcare</Link>, and <Link href="/sectors/professional-services" className="text-foreground hover:text-primary transition-colors font-medium">professional services</Link>—we turn manual, error-prone processes into automated, reliable systems. Here's what typical improvements look like.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Card className="border-destructive/50 h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-destructive mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Before: Manual Processes</span>
                </div>
                <CardTitle className="text-2xl">Hours Lost Every Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <p className="text-muted-foreground">Copy-pasting data between systems (CRM, spreadsheets, email)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <p className="text-muted-foreground">Chasing approvals, invoices, and status updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <p className="text-muted-foreground">Drafting repetitive emails and reports from scratch</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <p className="text-muted-foreground">Human errors, version conflicts, lost information</p>
                </div>
              </CardContent>
            </Card>
            </div>

            <div>
              <Card className="border-chart-4/50 bg-gradient-to-br from-chart-4/5 to-background h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-chart-4 mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">After: AI Co-Pilot</span>
                </div>
                <CardTitle className="text-2xl">Minutes, Not Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5" />
                  <p className="text-muted-foreground">Auto-sync between your tools—no manual entry</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5" />
                  <p className="text-muted-foreground">Smart reminders and follow-up sequences on autopilot</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5" />
                  <p className="text-muted-foreground">AI drafts emails and reports in your voice—review and send</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5" />
                  <p className="text-muted-foreground">Single source of truth, audit trails, fewer errors</p>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-base group"
              asChild
              data-testid="button-explore-demo"
            >
              <Link href="/demo">
                Explore the Live Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section role="region" aria-label="Industries and buyer personas we serve" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Who We Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From owner-operators to department heads—we build AI that fits your role and your challenges. <Link href="/contact" className="text-chart-2 hover:underline font-medium">Book a free call</Link> to see what could be automated.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <Building2 className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Owner-Operators</CardTitle>
                <CardDescription>
                  Automate the admin so you can focus on growth, not paperwork.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-elevate">
              <CardHeader>
                <Settings className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Operations Managers</CardTitle>
                <CardDescription>
                  Eliminate manual data entry. Auto-triage tickets, track compliance, route work intelligently.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-elevate">
              <CardHeader>
                <Calculator className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Finance Leads</CardTitle>
                <CardDescription>
                  Invoice extraction, reconciliation, cost tracking. Less time on month-end close.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-elevate">
              <CardHeader>
                <Users className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Sales Heads</CardTitle>
                <CardDescription>
                  Lead research, email sequences, CRM updates. Let AI handle busywork, you close deals.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-elevate">
              <CardHeader>
                <Megaphone className="w-10 h-10 text-accent mb-4" />
                <CardTitle>Marketing Directors</CardTitle>
                <CardDescription>
                  Content drafts, campaign briefs, social scheduling. Consistent output without burnout.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-elevate">
              <CardHeader>
                <Laptop className="w-10 h-10 text-accent mb-4" />
                <CardTitle>IT Leads</CardTitle>
                <CardDescription>
                  Tool integration, data quality, security. Deploy AI safely without adding headcount.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section role="region" aria-label="Our value pillars - speed, measurability, safety" className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Our Promise: Speed, Measurability, Safety
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't do slow rollouts, vague ROI, or risky black boxes. Here's how we're different.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-chart-4/50">
              <CardHeader>
                <Zap className="w-12 h-12 text-chart-4 mb-4" />
                <CardTitle className="text-2xl">Speed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  First workflow live within the two-week pilot, not month-six promises.
                </p>
                <p className="text-muted-foreground">
                  We build with your existing tools—no ripping out systems or waiting for custom infrastructure.
                </p>
              </CardContent>
            </Card>
            <Card className="border-chart-2/50">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-chart-2 mb-4" />
                <CardTitle className="text-2xl">Measurability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Clear KPIs before we start: hours saved, errors reduced, costs down. No vague "efficiency gains."
                </p>
                <p className="text-muted-foreground">
                  We agree the measure of success before we start, and report against it.
                </p>
              </CardContent>
            </Card>
            <Card className="border-accent/50">
              <CardHeader>
                <Shield className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Human-in-the-loop by default. AI suggests, your team approves. Audit trails, version control, rollback.
                </p>
                <p className="text-muted-foreground">
                  UK/EU data by default. No vendor lock-in. You own your workflows, prompts, and data—always.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
      <section role="region" aria-label="How Midlands Digital is different from traditional consultancies" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <Card className="border-chart-4">
              <CardHeader>
                <CardTitle className="text-3xl text-center">How We're Different</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Plain English Results</p>
                      <p className="text-sm text-muted-foreground">Real results you can explain to anyone. No jargon, no "synergistic AI transformation journeys"—just clear outcomes.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Complete Transparency</p>
                      <p className="text-sm text-muted-foreground">You understand exactly what AI does and doesn't do. Full visibility into every automation we build.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Vendor-Agnostic Solutions</p>
                      <p className="text-sm text-muted-foreground">Tool-agnostic builds. Switch providers anytime. You own the IP, workflows, and prompts—always.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Fast, Measurable Results</p>
                      <p className="text-sm text-muted-foreground">Fixed scopes. Clear deliverables. Clear before and after numbers, not vague "efficiency gains."</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fixed Pilot Offer Section */}
      <section role="region" aria-label="Two-week pilot pricing at £1,950 fixed scope" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <Card className="border-chart-4 bg-card">
              <CardHeader className="text-center">
                <Badge className="mb-4 mx-auto" variant="outline">Transparent Pricing</Badge>
                <CardTitle className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  Two-Week Pilot: £1,950 Fixed Scope
                </CardTitle>
                <CardDescription className="text-lg">
                  No surprises. No scope creep. A fixed price agreed up front.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-chart-4" />
                      What's Included
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-1 flex-shrink-0" />
                        <span>1 workflow automated from end-to-end</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-1 flex-shrink-0" />
                        <span>Success metric agreed on day 1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-1 flex-shrink-0" />
                        <span>Staff training and handover documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-1 flex-shrink-0" />
                        <span>Rollback plan if results don't meet targets</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-chart-2" />
                      What You Get
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-chart-2 mt-1 flex-shrink-0" />
                        <span>Working automation in 2 weeks (not 2 months)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-chart-2 mt-1 flex-shrink-0" />
                        <span>Clear before/after metrics you can show your team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-chart-2 mt-1 flex-shrink-0" />
                        <span>Proof of concept to scale across departments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-chart-2 mt-1 flex-shrink-0" />
                        <span>Your team trained—no dependency on us</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-6 text-center border-t">
                  <Button 
                    size="lg" 
                    className="text-base"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    data-testid="button-pilot-offer"
                  >
                    Start Your Two-Week Pilot
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    On-site discovery in Nottingham, Leicester & Derby
                  </p>
                  <p className="text-sm mt-3">
                    <a href="/pricing" className="text-chart-2 hover:underline font-medium">
                      View all pricing options
                      <ArrowRight className="inline-block w-3 h-3 ml-1" />
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Proof: Voice Agent Case Study */}
      <section role="region" aria-label="Real proof from a live voice agent deployment" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Real Numbers From a Real Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We built an AI voice agent for a property management company. Here is what actually happened.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="border-chart-4/50" data-testid="card-voice-agent-proof">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-md bg-chart-4/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-chart-4" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">AI Voice Agent for Property Management</h3>
                    <p className="text-muted-foreground">Live deployment, real tenants, real calls</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <Card data-testid="stat-calls">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-chart-4">240+</div>
                      <div className="text-sm text-muted-foreground mt-1">Calls handled</div>
                    </CardContent>
                  </Card>
                  <Card data-testid="stat-resolution">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-chart-2">61.5%</div>
                      <div className="text-sm text-muted-foreground mt-1">Resolved without a human</div>
                    </CardContent>
                  </Card>
                  <Card data-testid="stat-cost">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-chart-3">$59/mo</div>
                      <div className="text-sm text-muted-foreground mt-1">Running cost</div>
                    </CardContent>
                  </Card>
                  <Card data-testid="stat-response">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl font-bold text-accent">1.8s</div>
                      <div className="text-sm text-muted-foreground mt-1">Average response time</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A property management company was losing hours every week answering the same tenant calls: lock-out requests, maintenance updates, rent questions. We built an AI voice agent that picks up the phone, understands what the tenant needs, and either resolves it or routes it to the right person.
                  </p>
                  <p>
                    It handled over 240 calls. Nearly two thirds were resolved without anyone having to pick up the phone. The whole thing runs for less than sixty quid a month.
                  </p>
                  <p>
                    That is the kind of automation we build. Not flashy demos, not theoretical ROI. Working systems that save real time and real money.
                  </p>
                </div>

                <div className="pt-6 text-center">
                  <Button size="lg" className="text-base group" asChild data-testid="button-view-case-study">
                    <Link href="/work">
                      Read the Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section role="region" aria-label="Data protection and compliance" className="py-12 border-y border-border bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3 text-muted-foreground" data-testid="badge-gdpr">
              <Shield className="w-8 h-8 text-chart-2" />
              <div>
                <div className="font-semibold text-foreground text-sm">GDPR Compliant</div>
                <div className="text-xs">EU data protection</div>
              </div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="flex items-center gap-3 text-muted-foreground" data-testid="badge-uk-data">
              <Shield className="w-8 h-8 text-chart-3" />
              <div>
                <div className="font-semibold text-foreground text-sm">UK Data Protection</div>
                <div className="text-xs">Fully compliant</div>
              </div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="flex items-center gap-3 text-muted-foreground" data-testid="badge-no-lock-in">
              <Shield className="w-8 h-8 text-chart-4" />
              <div>
                <div className="font-semibold text-foreground text-sm">No Vendor Lock-in</div>
                <div className="text-xs">You own everything we build</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made in the Midlands Section */}
      <section role="region" aria-label="Made in the Midlands - local expertise" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <Badge className="mb-4" variant="secondary" data-testid="badge-midlands">Made in the Midlands</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="heading-midlands">
                Local Expertise, Global Standards
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Based in Nottingham, serving SMEs across the Midlands and beyond. 
                We understand local businesses because we're part of the community—but we deliver enterprise-grade AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Midlands-based</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Local business focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Face-to-face available</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Long-Tail Keywords: AI Automation for SMEs Q&A */}
      <section role="region" aria-label="Common questions about AI automation" className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Common Questions About AI Automation for SMEs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How much does AI automation cost for small businesses?</h3>
              <p className="text-muted-foreground text-sm">It depends on the workflow. Our two-week pilot starts at £1,950 for a fixed scope, so you know the cost up front.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can AI automation work with existing software?</h3>
              <p className="text-muted-foreground text-sm">Yes. We integrate with your current tools like Xero, HubSpot, Google Workspace, and Microsoft 365 without replacing your systems.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How long does it take to implement AI automation?</h3>
              <p className="text-muted-foreground text-sm">The first automated workflow is usually live within the two-week pilot. Bigger projects take longer, and we agree the timeline before we start.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What tasks can be automated with AI?</h3>
              <p className="text-muted-foreground text-sm">Invoice processing, email triage, CRM updates, data entry, appointment scheduling, customer support, and reporting—the repetitive tasks that eat into your team's week.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is AI automation suitable for companies with under 50 employees?</h3>
              <p className="text-muted-foreground text-sm">Absolutely. Small teams benefit most because automation multiplies capacity. Automation takes the repetitive work off people without adding headcount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section role="region" aria-label="Frequently asked questions" className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight" data-testid="heading-faq">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What happens in week 1?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>We map your workflows, audit existing tools, and identify the top 3 automation opportunities. You'll see quick wins in the first 7 days—usually small automations that save time straight away.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How do you measure ROI?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>We track time saved (hours/week), cost reduction (£/month), error rates, and team feedback. Every engagement includes a measurement framework with clear before/after metrics.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What about data security?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>All integrations use OAuth or API keys (never passwords). Data stays in your systems. We can work with your IT team on security reviews.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do we need to buy new software?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>No. We integrate with what you already use (Microsoft 365, Google, Xero, HubSpot, etc.). If new tools are needed, we'll recommend cost-effective options and get your approval first.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How does procurement work?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>We provide fixed-price proposals with clear scopes. A simple Purchase Order or services agreement works. We're flexible and can work with your procurement process.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What if our needs change mid-project?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>We document scope changes transparently and provide change orders with clear pricing. We're adaptable.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you work with our existing IT team?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Absolutely. We collaborate closely with in-house IT on security reviews, integrations, and handoffs. We can stay on for ongoing improvements while IT handles day-to-day running.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What industries do you serve?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Retail, manufacturing, healthcare, professional services, charities, field services, call centres, and eCommerce. If you have repetitive workflows, we can automate them.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" role="region" aria-label="Contact us and book a free strategy call" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how bespoke automation can save you hours every week.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="e.g., Sarah Johnson"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="e.g., Derby Manufacturing Ltd"
                      data-testid="input-company"
                    />
                    <p className="text-xs text-muted-foreground">We work with businesses of all sizes across the Midlands</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="sarah@example.co.uk"
                      data-testid="input-email"
                    />
                    <p className="text-xs text-muted-foreground">Your business email for our response</p>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="e.g., 0115 123 4567"
                      data-testid="input-phone"
                    />
                    <p className="text-xs text-muted-foreground">Only if you prefer a phone call</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Services Needed (select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["Invoicing & Cost Tracking", "Email Automation", "CRM", "Operations", "Marketing", "Business Intelligence"].map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox"
                          checked={formData.servicesNeeded.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="rounded border-input" 
                          data-testid={`checkbox-${service.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="painPoint" className="text-sm font-medium">
                    Biggest Time-Waster (Optional)
                  </label>
                  <select
                    id="painPoint"
                    value={formData.painPoint || ''}
                    onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    data-testid="select-pain-point"
                  >
                    <option value="">Select your main challenge...</option>
                    <option value="invoice-processing">Invoice processing & data entry</option>
                    <option value="email-responses">Customer email responses</option>
                    <option value="scheduling">Scheduling & calendar management</option>
                    <option value="lead-follow-up">Lead follow-up & CRM updates</option>
                    <option value="reporting">Reporting & data analysis</option>
                    <option value="inventory">Inventory & stock management</option>
                    <option value="other">Other (describe below)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="e.g., team size, hours spent weekly, specific pain points (optional)"
                    data-testid="input-message"
                  />
                  <p className="text-xs text-muted-foreground">We'll discuss details during your free strategy call</p>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <p>Response within 24 hours guaranteed</p>
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? "Sending..." : "Request Consultation"}
                </Button>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <p className="mb-2">Prefer to email directly?</p>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:hello@midlandsdigital.ai" className="text-primary hover:underline">
                      hello@midlandsdigital.ai
                    </a>
                    <span className="text-xs">General enquiries</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Map Embed for Local SEO */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Find Us in the Midlands</h3>
            <div className="rounded-lg overflow-hidden border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152698.75!2d-1.3!3d52.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3e5e0e5e5e5%3A0x0!2sNottingham%2C%20UK!5e0!3m2!1sen!2suk!4v1702000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Midlands Digital - Serving Nottingham, Derby, Leicester and the East Midlands"
                data-testid="map-embed"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Serving businesses across Nottingham, Derby, Leicester, Birmingham, Coventry & the wider Midlands region
            </p>
          </div>
        </div>
      </section>
      
      <StructuredData
        type="FAQPage"
        data={{
          questions: [
            {
              question: "What happens in week 1?",
              answer: "We map your workflows, audit existing tools, and identify the top 3 automation opportunities. You'll see quick wins in the first 7 days—usually small automations that save time straight away."
            },
            {
              question: "How do you measure ROI?",
              answer: "We track time saved (hours/week), cost reduction (£/month), error rates, and team feedback. Every engagement includes a measurement framework with clear before/after metrics."
            },
            {
              question: "What about data security?",
              answer: "All integrations use OAuth or API keys (never passwords). Data stays in your systems. We can work with your IT team on security reviews."
            },
            {
              question: "Do we need to buy new software?",
              answer: "No. We integrate with what you already use (Microsoft 365, Google, Xero, HubSpot, etc.). If new tools are needed, we'll recommend cost-effective options and get your approval first."
            },
            {
              question: "How does procurement work?",
              answer: "We provide fixed-price proposals with clear scopes. A simple Purchase Order or services agreement works. We're flexible and can work with your procurement process."
            },
            {
              question: "What if our needs change mid-project?",
              answer: "We document scope changes transparently and provide change orders with clear pricing. We're adaptable."
            },
            {
              question: "Can you work with our existing IT team?",
              answer: "Absolutely. We collaborate closely with in-house IT on security reviews, integrations, and handoffs. We can stay on for ongoing improvements while IT handles day-to-day running."
            },
            {
              question: "What industries do you serve?",
              answer: "Retail, manufacturing, healthcare, professional services, charities, field services, call centres, and eCommerce. If you have repetitive workflows, we can automate them."
            }
          ]
        }}
      />
      
      <StickyCTA />
    </div>
  );
}
