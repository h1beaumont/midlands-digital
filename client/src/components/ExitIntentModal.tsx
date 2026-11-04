import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Calculator, ClipboardList } from "lucide-react";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this session
    const shown = sessionStorage.getItem('exit-intent-shown');
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect when mouse moves to top of viewport (exit intent)
      if (e.clientY <= 10 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exit-intent-shown', 'true');
      }
    };

    // Add event listener after a delay to avoid showing immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before enabling exit intent

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Before You Go...
          </DialogTitle>
          <DialogDescription className="text-base space-y-4 pt-2">
            <p>
              See exactly how much time and money you could save with AI automation.
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 pt-4">
          <Button 
            className="w-full justify-start text-left h-auto py-3 px-4" 
            asChild
            data-testid="button-exit-calculator"
          >
            <Link href="/time-calculator">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Calculate Your Savings</div>
                  <div className="text-sm text-muted-foreground">See your ROI in 30 seconds</div>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </div>
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-left h-auto py-3 px-4" 
            asChild
            data-testid="button-exit-quiz"
          >
            <Link href="/ai-readiness-quiz">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-chart-2" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Take the AI Readiness Quiz</div>
                  <div className="text-sm text-muted-foreground">Get personalized recommendations</div>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </div>
            </Link>
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground pt-4">
          No signup required • Free tools • Instant results
        </p>
      </DialogContent>
    </Dialog>
  );
}
