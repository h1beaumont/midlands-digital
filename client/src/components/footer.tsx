import { Link } from "wouter";
import { Mail, MapPin, Phone, Linkedin, Send, ArrowRight } from "lucide-react";
import { SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/newsletter-signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: "You'll receive our weekly AI insights.",
        });
        setEmail("");
      } else {
        toast({
          title: "Already subscribed",
          description: "This email is already on our list.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Connection error",
        description: "Please check your internet and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer role="contentinfo" className="border-t bg-muted/30 mt-20 pb-20 md:pb-0">
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" aria-label="Footer navigation">
          {/* Brand & NAP */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center">
              <span className="font-extrabold text-2xl tracking-tight">
                Midlands Digital<span className="text-4xl leading-none align-middle text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-2 to-chart-3">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bespoke AI automation for Midlands SMEs. Measurable gains in 30 days.
            </p>
            
            {/* NAP - Name, Address, Phone */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-chart-2" aria-hidden="true" />
                <div>
                  <p className="font-medium">Midlands Digital</p>
                  <p className="text-muted-foreground">Nottingham, NG1 1AA</p>
                  <p className="text-muted-foreground">Midlands, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-chart-2" aria-hidden="true" />
                <a href="tel:+441156473980" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  <span className="font-medium">(0115)</span> 647 3980
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-chart-2" aria-hidden="true" />
                <a href="mailto:hello@midlandsdigital.ai" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email">
                  hello@midlandsdigital.ai
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com/company/midlands-digital" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="p-2 rounded-md text-muted-foreground hover-elevate"
                aria-label="Follow us on LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/midlandsdigital" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="p-2 rounded-md text-muted-foreground hover-elevate"
                aria-label="Follow us on X"
                data-testid="link-social-x"
              >
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-all-services">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-demo">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Newsletter Signup */}
        <div className="border-t mt-12 pt-8">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5 text-chart-2" aria-hidden="true" />
              <h3 className="text-lg font-semibold">Weekly AI Insights</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Practical AI tips for SME owners. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                data-testid="button-newsletter-submit"
              >
                {isSubmitting ? "..." : "Subscribe"}
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer CTA with Guarantee */}
        <div className="border-t mt-8 pt-12 pb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-semibold">Ready to Get Started?</h3>
            <p className="text-muted-foreground">
              Start with a fixed-price two-week pilot on one workflow.
            </p>
            <p className="text-sm text-muted-foreground">
              No hard sell, no obligation. Just a chat about what might work for your business.
            </p>
            <a href="/#contact" data-testid="link-footer-cta">
              <Button size="lg" data-testid="button-footer-cta">
                Book Your Free, No-Obligation AI Strategy Call
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left flex flex-wrap items-center gap-x-4 gap-y-2">
              <p>© {currentYear} Midlands Digital. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-footer-privacy">Privacy</Link>
                <Link href="/terms" className="hover:text-foreground transition-colors" data-testid="link-footer-terms">Terms</Link>
                <Link href="/cookies" className="hover:text-foreground transition-colors" data-testid="link-footer-cookies">Cookies</Link>
                <Link href="/security" className="hover:text-foreground transition-colors" data-testid="link-footer-security">Security</Link>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Made with care in the East Midlands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
