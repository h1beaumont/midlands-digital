import { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Loader2 } from "lucide-react";

// Lazy load all page components for code splitting
const Home = lazy(() => import("@/pages/home"));
const Demo = lazy(() => import("@/pages/demo"));
const Contact = lazy(() => import("@/pages/contact"));
const Services = lazy(() => import("@/pages/services"));
const Pricing = lazy(() => import("@/pages/pricing"));
const About = lazy(() => import("@/pages/about"));
const Work = lazy(() => import("@/pages/work"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const Cookies = lazy(() => import("@/pages/cookies"));
const FAQ = lazy(() => import("@/pages/faq"));
const Security = lazy(() => import("@/pages/security"));
const ThankYou = lazy(() => import("@/pages/thank-you"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Lazy load non-critical components
const CookieConsent = lazy(() => import("@/components/CookieConsent").then(module => ({ default: module.CookieConsent })));
const MobileCTA = lazy(() => import("@/components/MobileCTA").then(module => ({ default: module.MobileCTA })));
const ExitIntentModal = lazy(() => import("@/components/ExitIntentModal").then(module => ({ default: module.ExitIntentModal })));

// Lightweight loading skeleton for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

// Component to defer loading of non-critical components
function DeferredComponents() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback for better performance
    // Load these components when the browser is idle or after 3 seconds
    if ('requestIdleCallback' in window) {
      const idleCallbackId = (window as any).requestIdleCallback(() => {
        setShouldLoad(true);
      }, { timeout: 3000 });
      
      return () => {
        if ('cancelIdleCallback' in window) {
          (window as any).cancelIdleCallback(idleCallbackId);
        }
      };
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timer = setTimeout(() => {
        setShouldLoad(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <CookieConsent />
      <MobileCTA />
    </Suspense>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/manifesto">{() => <Redirect to="/about" />}</Route>
      <Route path="/work" component={Work} />
      <Route path="/sectors">{() => <Redirect to="/services" />}</Route>
      <Route path="/start-here">{() => <Redirect to="/" />}</Route>
      <Route path="/partners">{() => <Redirect to="/about" />}</Route>
      <Route path="/compare">{() => <Redirect to="/about" />}</Route>
      <Route path="/compare-ai-consultants">{() => <Redirect to="/about" />}</Route>
      <Route path="/complete-guide">{() => <Redirect to="/blog" />}</Route>
      <Route path="/ai-vs-traditional">{() => <Redirect to="/about" />}</Route>
      <Route path="/locations/nottingham">{() => <Redirect to="/" />}</Route>
      <Route path="/locations/derby">{() => <Redirect to="/" />}</Route>
      <Route path="/locations/leicester">{() => <Redirect to="/" />}</Route>
      <Route path="/locations/lincoln">{() => <Redirect to="/" />}</Route>
      <Route path="/locations/northampton">{() => <Redirect to="/" />}</Route>
      <Route path="/locations/rutland">{() => <Redirect to="/" />}</Route>
      <Route path="/locations/coventry">{() => <Redirect to="/" />}</Route>
      <Route path="/locations/birmingham">{() => <Redirect to="/" />}</Route>
      <Route path="/locations">{() => <Redirect to="/" />}</Route>
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/playbooks">{() => <Redirect to="/blog" />}</Route>
      <Route path="/use-cases">{() => <Redirect to="/blog" />}</Route>
      <Route path="/faq" component={FAQ} />
      <Route path="/sectors/retail">{() => <Redirect to="/services" />}</Route>
      <Route path="/sectors/manufacturing">{() => <Redirect to="/services" />}</Route>
      <Route path="/sectors/healthcare">{() => <Redirect to="/services" />}</Route>
      <Route path="/sectors/professional-services">{() => <Redirect to="/services" />}</Route>
      <Route path="/demo" component={Demo} />
      <Route path="/contact" component={Contact} />
      <Route path="/free-ai-audit">{() => <Redirect to="/contact" />}</Route>
      <Route path="/ai-readiness-quiz">{() => <Redirect to="/contact" />}</Route>
      <Route path="/time-calculator">{() => <Redirect to="/contact" />}</Route>
      <Route path="/services/invoice-automation">{() => <Redirect to="/services" />}</Route>
      <Route path="/services/email-copilot">{() => <Redirect to="/services" />}</Route>
      <Route path="/services/lead-enrichment">{() => <Redirect to="/services" />}</Route>
      <Route path="/services/operations">{() => <Redirect to="/services" />}</Route>
      <Route path="/services/content-generation">{() => <Redirect to="/services" />}</Route>
      <Route path="/services/bi-dashboards">{() => <Redirect to="/services" />}</Route>
      <Route path="/services/crm-automation">{() => <Redirect to="/services" />}</Route>
      <Route path="/resources">{() => <Redirect to="/blog" />}</Route>
      <Route path="/security" component={Security} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/transparent-pricing">{() => <Redirect to="/pricing" />}</Route>
      <Route path="/common-workflows">{() => <Redirect to="/blog" />}</Route>
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/case-studies">{() => <Redirect to="/work" />}</Route>
      <Route path="/case-studies/manufacturing">{() => <Redirect to="/work" />}</Route>
      <Route path="/case-studies/healthcare">{() => <Redirect to="/work" />}</Route>
      <Route path="/case-studies/retail">{() => <Redirect to="/work" />}</Route>
      <Route path="/integrations">{() => <Redirect to="/services" />}</Route>
      <Route path="/ai-agency-midlands">{() => <Redirect to="/" />}</Route>
      
      <Route path="/industries/marketing-automation">{() => <Redirect to="/services" />}</Route>
      <Route path="/industries/process-automation">{() => <Redirect to="/services" />}</Route>
      <Route path="/industries/brand-experience">{() => <Redirect to="/services" />}</Route>
      <Route path="/industries/professional-services">{() => <Redirect to="/services" />}</Route>
      <Route path="/industries/government">{() => <Redirect to="/services" />}</Route>
      
      {/* Legacy URL redirects to fix soft 404 errors from Google Search Console */}
      <Route path="/location/northampton">{() => <Redirect to="/locations/northampton" />}</Route>
      <Route path="/location/leicester">{() => <Redirect to="/locations/leicester" />}</Route>
      <Route path="/location/derby">{() => <Redirect to="/locations/derby" />}</Route>
      <Route path="/location/nottingham">{() => <Redirect to="/locations/nottingham" />}</Route>
      <Route path="/location/lincoln">{() => <Redirect to="/locations/lincoln" />}</Route>
      <Route path="/location/rutland">{() => <Redirect to="/locations/rutland" />}</Route>
      <Route path="/location/coventry">{() => <Redirect to="/locations/coventry" />}</Route>
      <Route path="/location/birmingham">{() => <Redirect to="/locations/birmingham" />}</Route>
      <Route path="/location/wolverhampton">{() => <Redirect to="/locations" />}</Route>
      <Route path="/sector-healthcare">{() => <Redirect to="/sectors/healthcare" />}</Route>
      <Route path="/sector-retail">{() => <Redirect to="/sectors/retail" />}</Route>
      <Route path="/sector-manufacturing">{() => <Redirect to="/sectors/manufacturing" />}</Route>
      <Route path="/sector-professional-services">{() => <Redirect to="/sectors/professional-services" />}</Route>
      <Route path="/case-study-retail">{() => <Redirect to="/work" />}</Route>
      <Route path="/case-study-manufacturing">{() => <Redirect to="/work" />}</Route>
      <Route path="/case-study-healthcare">{() => <Redirect to="/work" />}</Route>
      <Route path="/service-email-copilot">{() => <Redirect to="/services/email-copilot" />}</Route>
      <Route path="/services/sales-crm-automation">{() => <Redirect to="/services/crm-automation" />}</Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

const BREADCRUMB_LABELS: Record<string, string> = {
  "": "Home",
  "services": "Services",
  "pricing": "Pricing",
  "about": "About",
  "manifesto": "Manifesto",
  "work": "Our Work",
  "sectors": "Sectors",
  "start-here": "Start Here",
  "partners": "Partners",
  "compare": "Compare",
  "compare-ai-consultants": "Compare AI Consultants",
  "complete-guide": "Complete Guide",
  "ai-vs-traditional": "AI vs Traditional",
  "locations": "Locations",
  "nottingham": "Nottingham",
  "derby": "Derby",
  "leicester": "Leicester",
  "lincoln": "Lincoln",
  "northampton": "Northampton",
  "rutland": "Rutland",
  "coventry": "Coventry",
  "birmingham": "Birmingham",
  "privacy": "Privacy Policy",
  "terms": "Terms & Conditions",
  "cookies": "Cookie Policy",
  "playbooks": "Playbooks",
  "use-cases": "Use Cases",
  "faq": "FAQ",
  "retail": "Retail",
  "manufacturing": "Manufacturing",
  "healthcare": "Healthcare",
  "professional-services": "Professional Services",
  "demo": "Demo",
  "contact": "Contact",
  "free-ai-audit": "Free AI Audit",
  "ai-readiness-quiz": "AI Readiness Quiz",
  "time-calculator": "Time-Back Calculator",
  "invoice-automation": "Invoice Automation",
  "email-copilot": "Email Co-Pilot",
  "lead-enrichment": "Lead Enrichment",
  "operations": "Operations",
  "content-generation": "Content Generation",
  "bi-dashboards": "BI Dashboards",
  "crm-automation": "CRM Automation",
  "resources": "Resources",
  "security": "Security",
  "thank-you": "Thank You",
  "transparent-pricing": "Transparent Pricing",
  "common-workflows": "Common Workflows",
  "blog": "Blog",
  "case-studies": "Case Studies",
  "integrations": "Integrations",
  "ai-agency-midlands": "AI Agency Midlands",
};

function AutoBreadcrumbSchema() {
  const [location] = useLocation();

  useEffect(() => {
    const segments = location.replace(/^\/|\/$/g, "").split("/").filter(Boolean);

    const items = [
      { "@type": "ListItem" as const, position: 1, name: "Home", item: "https://www.midlandsdigital.ai/" }
    ];

    let path = "";
    segments.forEach((seg, i) => {
      path += `/${seg}`;
      const label = BREADCRUMB_LABELS[seg] || seg.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      items.push({
        "@type": "ListItem" as const,
        position: i + 2,
        name: label,
        item: `https://www.midlandsdigital.ai${path}`
      });
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };

    const scriptId = "auto-breadcrumb-schema";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (script) {
      script.innerHTML = JSON.stringify(schema);
    } else {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          {/* Skip to main content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
          >
            Skip to main content
          </a>
          <AutoBreadcrumbSchema />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Router />
              </Suspense>
            </main>
            <Footer />
          </div>
          <Toaster />
          <DeferredComponents />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
