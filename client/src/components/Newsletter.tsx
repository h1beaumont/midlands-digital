import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle2 } from "lucide-react";

interface NewsletterProps {
  variant?: "card" | "inline" | "compact";
  title?: string;
  description?: string;
}

export function Newsletter({ 
  variant = "card",
  title = "Stay Updated on AI Automation",
  description = "Get monthly insights on AI implementation, case studies, and automation tips for SMEs."
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter-signups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "Check your inbox for a confirmation email.",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === "compact") {
    return (
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        {isSubmitted ? (
          <div className="flex items-center gap-2 text-primary" data-testid="text-newsletter-success">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Successfully subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              data-testid="button-newsletter-subscribe"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="bg-primary/5 rounded-lg p-6 space-y-4">
        <div className="flex items-start gap-3">
          <Mail className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            
            {isSubmitted ? (
              <div className="flex items-center gap-2 text-primary" data-testid="text-newsletter-success">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  data-testid="button-newsletter-subscribe"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Card variant (default)
  return (
    <Card data-testid="card-newsletter">
      <CardHeader>
        <div className="flex items-start gap-3">
          <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="flex items-center gap-2 text-primary" data-testid="text-newsletter-success">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Successfully subscribed! Check your email.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1"
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              data-testid="button-newsletter-subscribe"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
        <p className="text-xs text-muted-foreground mt-3">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </CardContent>
    </Card>
  );
}
