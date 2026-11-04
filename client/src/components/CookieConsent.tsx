import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="container mx-auto max-w-5xl pointer-events-auto">
        <Card className="border-2 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-chart-2/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-chart-2" />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-base">We Value Your Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    We use essential cookies to make our site work. Optional cookies help us understand how visitors use our site to improve your experience. We don't use cookies for advertising.{" "}
                    <Link href="/cookies" className="text-chart-2 hover:underline">
                      Learn more
                    </Link>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    size="sm" 
                    onClick={handleAccept}
                    data-testid="button-accept-cookies"
                  >
                    Accept All
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={handleDecline}
                    data-testid="button-decline-cookies"
                  >
                    Essential Only
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    asChild
                    data-testid="button-cookie-settings"
                  >
                    <Link href="/cookies">Cookie Settings</Link>
                  </Button>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleDecline}
                className="flex-shrink-0"
                aria-label="Close cookie banner"
                data-testid="button-close-cookies"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
