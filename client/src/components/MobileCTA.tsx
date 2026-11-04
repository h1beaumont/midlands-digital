import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the CTA
    const dismissed = sessionStorage.getItem('mobile-cta-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show CTA after user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('mobile-cta-dismissed', 'true');
  };

  // Only show on mobile devices
  if (isDismissed) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-background border-t shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Ready to automate?</p>
              <p className="text-xs text-muted-foreground">Free, no-obligation AI strategy call</p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" asChild data-testid="mobile-cta-book">
                <Link href="/#contact">
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  Book Free Call
                </Link>
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={handleDismiss}
                className="px-2"
                data-testid="mobile-cta-dismiss"
                aria-label="Dismiss call to action"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
