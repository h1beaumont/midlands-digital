import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Send,
  Building2,
  MessageSquare
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    servicesNeeded: [] as string[],
    painPoint: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact-submissions", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "We'll be in touch within 24 hours. Check your email for a confirmation.",
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
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@midlandsdigital.ai",
        variant: "destructive",
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

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Midlands Digital | Free AI Automation Consultation"
        description="Get in touch with Midlands Digital for a free strategy call. We help SMEs across Birmingham, Nottingham, Leicester, Coventry, and Derby automate workflows. Response within 24 hours."
        keywords="contact midlands ai, ai consultation midlands, free ai audit, book strategy call, ai automation enquiry, midlands sme automation"
      />
      <StructuredData type="LocalBusiness" data={{
        city: "Nottingham",
        latitude: "52.9548",
        longitude: "-1.1581",
        postalCode: "NG1 1AA",
        description: "Bespoke AI automation consultancy serving SMEs across the Midlands. Book a free strategy call to discover your automation opportunities."
      }} />
      <StructuredData type="Organization" />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      {/* Hero */}
      <section role="region" aria-label="Contact Midlands Digital" className="py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <Badge className="mb-6" data-testid="badge-contact">
            <MessageSquare className="w-3 h-3 mr-1" aria-hidden="true" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="heading-contact">
            Let's Talk About{" "}
            <span className="text-chart-2">Your Automation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-intro">
            Book a free, no-obligation strategy call. We'll map your workflows, identify your biggest time drains, and show you exactly what's possible. Response within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Contact Details */}
      <section role="region" aria-label="Contact form and details" className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-semibold mb-6" data-testid="heading-form">
                    Request a Free Consultation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="e.g., Sarah Johnson"
                          data-testid="input-contact-name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-company" className="text-sm font-medium">
                          Company Name
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="e.g., Derby Manufacturing Ltd"
                          data-testid="input-contact-company"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="sarah@example.co.uk"
                          data-testid="input-contact-email"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-phone" className="text-sm font-medium">
                          Phone <span className="text-muted-foreground font-normal">(optional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="e.g., 0115 123 4567"
                          data-testid="input-contact-phone"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">
                        Services Needed <span className="text-muted-foreground font-normal">(select all that apply)</span>
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {["Invoicing & Cost Tracking", "Email Automation", "CRM", "Operations", "Marketing", "Business Intelligence"].map((service) => (
                          <label key={service} className="flex items-center gap-2 cursor-pointer text-sm">
                            <input
                              type="checkbox"
                              checked={formData.servicesNeeded.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="rounded border-input"
                              data-testid={`checkbox-contact-${service.toLowerCase().replace(/\s+/g, '-')}`}
                            />
                            <span>{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-painpoint" className="text-sm font-medium">
                        Biggest Time-Waster <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <select
                        id="contact-painpoint"
                        value={formData.painPoint}
                        onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        data-testid="select-contact-painpoint"
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
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-sm font-medium">
                        Additional Details <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="e.g., team size, hours spent on manual tasks, specific pain points"
                        data-testid="input-contact-message"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                      <p>Response within 24 hours guaranteed</p>
                      <Link href="/privacy" className="text-chart-2 hover:underline whitespace-nowrap">
                        Privacy Policy
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Request Free Consultation
                          <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details Sidebar - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct Contact */}
              <Card data-testid="card-contact-details">
                <CardContent className="pt-6 space-y-5">
                  <h2 className="text-lg font-semibold">Contact Details</h2>
                  <div className="space-y-4">
                    <a href="mailto:hello@midlandsdigital.ai" className="flex items-start gap-3 group" data-testid="link-email">
                      <div className="p-2 rounded-md bg-muted flex-shrink-0">
                        <Mail className="w-4 h-4 text-chart-2" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-chart-2 transition-colors">hello@midlandsdigital.ai</div>
                        <div className="text-xs text-muted-foreground">General enquiries</div>
                      </div>
                    </a>
                    <a href="tel:+441156473980" className="flex items-start gap-3 group" data-testid="link-phone">
                      <div className="p-2 rounded-md bg-muted flex-shrink-0">
                        <Phone className="w-4 h-4 text-chart-2" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-chart-2 transition-colors">(0115) 647 3980</div>
                        <div className="text-xs text-muted-foreground">Mon-Fri, 9am-5pm</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-3" data-testid="info-location">
                      <div className="p-2 rounded-md bg-muted flex-shrink-0">
                        <MapPin className="w-4 h-4 text-chart-2" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Nottingham, NG1</div>
                        <div className="text-xs text-muted-foreground">Serving the entire Midlands</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3" data-testid="info-hours">
                      <div className="p-2 rounded-md bg-muted flex-shrink-0">
                        <Clock className="w-4 h-4 text-chart-2" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Monday - Friday</div>
                        <div className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card data-testid="card-service-areas">
                <CardContent className="pt-6 space-y-4">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-chart-2" aria-hidden="true" />
                    Service Areas
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Birmingham", link: "/locations/birmingham" },
                      { name: "Nottingham", link: "/locations/nottingham" },
                      { name: "Leicester", link: "/locations/leicester" },
                      { name: "Coventry", link: "/locations/coventry" },
                      { name: "Derby", link: "/locations/derby" },
                      { name: "Lincoln", link: "/locations/lincoln" },
                      { name: "Northampton", link: "/locations/northampton" }
                    ].map((area) => (
                      <Link key={area.name} href={area.link}>
                        <Badge variant="outline" className="cursor-pointer" data-testid={`badge-area-${area.name.toLowerCase()}`}>
                          <MapPin className="w-3 h-3 mr-1" aria-hidden="true" />
                          {area.name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    On-site discovery visits included as standard. Fully remote engagements also available UK-wide.
                  </p>
                </CardContent>
              </Card>

              {/* Trust Signals */}
              <Card data-testid="card-trust-signals">
                <CardContent className="pt-6 space-y-3">
                  <h2 className="text-lg font-semibold">What to Expect</h2>
                  {[
                    { icon: CheckCircle2, text: "Free, no-obligation strategy call" },
                    { icon: Clock, text: "Response within 24 hours" },
                    { icon: Shield, text: "Fixed-price two-week pilots" },
                    { icon: Zap, text: "Two-week pilots from £1,950" }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5">
                      <item.icon className="w-4 h-4 text-chart-4 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style section */}
      <section role="region" aria-label="Frequently asked questions about contacting us" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" data-testid="heading-contact-faq">
            Common Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                q: "What happens on the strategy call?",
                a: "We'll ask about your current workflows, biggest time drains, and goals. Then we'll identify 2-3 quick-win automation opportunities and outline what a pilot could look like."
              },
              {
                q: "How much does it cost to get started?",
                a: "Our two-week pilot is £1,950 — fixed scope, fixed price. No hidden fees, no ongoing commitments until you see the results."
              },
              {
                q: "Do you work with businesses outside the Midlands?",
                a: "Yes. While we're based in Nottingham and specialise in the Midlands, we work remotely with businesses across the UK."
              },
              {
                q: "How quickly can we start?",
                a: "Typically within 1-2 weeks of your initial call. We move fast because we know your time is valuable."
              }
            ].map((faq) => (
              <Card key={faq.q} data-testid={`card-faq-${faq.q.slice(0, 20).toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild data-testid="button-more-faq">
              <Link href="/faq">
                See all frequently asked questions
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
