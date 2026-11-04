import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { AlertCircle, Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="404 - Page Not Found | Midlands Digital"
        description="The page you're looking for doesn't exist. Explore our AI automation services for Midlands SMEs."
        keywords="404, page not found"
      />

      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <Card className="border-2 border-destructive/20">
          <CardContent className="p-12 text-center space-y-8">
            {/* Icon & Message */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="h-10 w-10 text-destructive" />
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="text-lg text-muted-foreground">
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground">POPULAR PAGES</p>
              <div className="grid gap-2">
                <Button variant="outline" size="sm" asChild className="justify-start" data-testid="link-home">
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="justify-start" data-testid="link-services">
                  <Link href="/services">
                    <Search className="w-4 h-4 mr-2" />
                    Browse Services
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="justify-start" data-testid="link-work">
                  <Link href="/work">
                    Case Studies
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="justify-start" data-testid="link-contact">
                  <Link href="/#contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="pt-4 border-t">
              <Button size="lg" asChild data-testid="button-go-home">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Homepage
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          If you believe this page should exist, please <Link href="/#contact" className="text-chart-2 hover:underline">contact us</Link> to report the issue.
        </p>
      </div>
    </div>
  );
}
