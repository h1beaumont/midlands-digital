import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search as SearchIcon, CheckCircle2 } from "lucide-react";

export default function SearchTest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Search Functionality Test
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testing the comprehensive search feature implementation
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SearchIcon className="w-5 h-5" />
              Search Feature Overview
            </CardTitle>
            <CardDescription>
              The search functionality has been successfully implemented with all required features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">✅ Implemented Features:</h3>
              
              <div className="grid gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Search Icon in Header</p>
                    <p className="text-sm text-muted-foreground">
                      Look for the search icon in the top navigation bar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Keyboard Shortcut (Cmd/Ctrl + K)</p>
                    <p className="text-sm text-muted-foreground">
                      Press <kbd className="px-2 py-1 text-xs border rounded">Cmd+K</kbd> (Mac) or <kbd className="px-2 py-1 text-xs border rounded">Ctrl+K</kbd> (Windows) to open search
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Live Search with Debouncing</p>
                    <p className="text-sm text-muted-foreground">
                      Results appear instantly as you type (150ms debounce)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Categorized Results</p>
                    <p className="text-sm text-muted-foreground">
                      Results are grouped by: Services, Sectors, Locations, Resources, Tools, Company, Case Studies, Blog, and Legal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Highlighted Search Terms</p>
                    <p className="text-sm text-muted-foreground">
                      Matching terms are highlighted in results for easy identification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Mobile Responsive</p>
                    <p className="text-sm text-muted-foreground">
                      Works seamlessly on all device sizes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Comprehensive Index</p>
                    <p className="text-sm text-muted-foreground">
                      Searches across 50+ pages including all services, sectors, locations, resources, and tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3">Try These Search Terms:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  invoice
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  nottingham
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  automation
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  healthcare
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  pricing
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  case study
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Click the search icon or press Cmd/Ctrl + K, then try these terms
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3">Navigation Shortcuts:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-4">
                  <kbd className="px-2 py-1 text-xs border rounded">↑↓</kbd>
                  <span>Navigate through results</span>
                </div>
                <div className="flex items-center gap-4">
                  <kbd className="px-2 py-1 text-xs border rounded">Enter</kbd>
                  <span>Open selected result</span>
                </div>
                <div className="flex items-center gap-4">
                  <kbd className="px-2 py-1 text-xs border rounded">Esc</kbd>
                  <span>Close search</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}