import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t shadow-lg p-4">
      <Button 
        className="w-full group"
        size="lg"
        asChild
        data-testid="button-sticky-cta"
      >
        <Link href="/demo">
          See Live Demo
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}
