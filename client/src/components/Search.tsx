import { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation } from "wouter";
import { Search as SearchIcon, ArrowRight, FileText, Building2, MapPin, BookOpen, Wrench, Briefcase, FileCheck, Newspaper } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { searchContent, type SearchItem } from "@/lib/searchIndex";
import { cn } from "@/lib/utils";

const categoryIcons = {
  'Services': <Wrench className="w-4 h-4" />,
  'Sectors': <Building2 className="w-4 h-4" />,
  'Locations': <MapPin className="w-4 h-4" />,
  'Resources': <BookOpen className="w-4 h-4" />,
  'Tools': <Wrench className="w-4 h-4" />,
  'Legal': <FileCheck className="w-4 h-4" />,
  'Company': <Briefcase className="w-4 h-4" />,
  'Case Studies': <FileText className="w-4 h-4" />,
  'Blog': <Newspaper className="w-4 h-4" />
};

const categoryColors = {
  'Services': 'text-chart-2',
  'Sectors': 'text-chart-3',
  'Locations': 'text-chart-4',
  'Resources': 'text-chart-1',
  'Tools': 'text-primary',
  'Legal': 'text-muted-foreground',
  'Company': 'text-chart-5',
  'Case Studies': 'text-success',
  'Blog': 'text-accent'
};

function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <>{text}</>;
  
  // Escape special regex characters in the query
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
  
  return (
    <>
      {parts.map((part, index) => 
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className="bg-primary/20 dark:bg-primary/30 text-inherit rounded-sm px-0.5 font-semibold">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length > 0) {
        setIsSearching(true);
        const results = searchContent(query);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    }, 150); // 150ms debounce
    
    return () => clearTimeout(delayDebounceFn);
  }, [query]);
  
  // Group results by category
  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    searchResults.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [searchResults]);
  
  // Keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  
  const handleSelect = useCallback((path: string) => {
    setOpen(false);
    setQuery("");
    setLocation(path);
  }, [setLocation]);
  
  const handleOpenChange = useCallback((open: boolean) => {
    setOpen(open);
    if (!open) {
      setQuery("");
      setSearchResults([]);
    }
  }, []);
  
  return (
    <>
      {/* Search Button in Header */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="relative group"
        aria-label="Search (Ctrl+K)"
        data-testid="button-search"
      >
        <SearchIcon className="h-5 w-5" />
        {/* Keyboard shortcut hint on desktop */}
        <span className="hidden lg:flex absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground whitespace-nowrap">
            <span className="text-xs">⌘</span>K
          </kbd>
        </span>
      </Button>
      
      {/* Search Dialog */}
      <CommandDialog 
        open={open} 
        onOpenChange={handleOpenChange}
      >
        <CommandInput 
          placeholder="Search for services, sectors, resources..." 
          value={query}
          onValueChange={setQuery}
          data-testid="input-search"
          className="h-12"
        />
        <CommandList>
          {query.length === 0 ? (
            <CommandEmpty>
              <div className="text-center py-6">
                <SearchIcon className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
                <p className="text-sm text-muted-foreground mb-2">Quick search across all content</p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                  <span>to toggle search</span>
                </div>
              </div>
            </CommandEmpty>
          ) : isSearching ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Searching...
            </div>
          ) : searchResults.length === 0 ? (
            <CommandEmpty>
              <div className="text-center py-6">
                <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
                <p className="text-xs text-muted-foreground mt-2">Try different keywords or browse our menu</p>
              </div>
            </CommandEmpty>
          ) : (
            <>
              {Object.entries(groupedResults).map(([category, items]) => (
                <CommandGroup 
                  key={category} 
                  heading={
                    <div className="flex items-center gap-2">
                      <span className={cn(categoryColors[category as keyof typeof categoryColors])}>
                        {categoryIcons[category as keyof typeof categoryIcons]}
                      </span>
                      <span>{category}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {items.length}
                      </Badge>
                    </div>
                  }
                >
                  {items.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.path}
                      onSelect={() => handleSelect(item.path)}
                      className="group cursor-pointer"
                      data-testid={`search-result-${item.id}`}
                    >
                      <div className="flex items-start justify-between w-full gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={cn(
                              "shrink-0",
                              categoryColors[item.category as keyof typeof categoryColors]
                            )}>
                              {categoryIcons[item.category as keyof typeof categoryIcons]}
                            </span>
                            <span className="font-medium text-sm">
                              {highlightText(item.title, query)}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {highlightText(item.description, query)}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
              {Object.keys(groupedResults).length > 1 && (
                <CommandSeparator />
              )}
              <div className="px-2 py-1.5 text-xs text-muted-foreground text-center">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
              </div>
            </>
          )}
        </CommandList>
        <div className="border-t px-2 py-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  ↵
                </kbd>
                Open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  esc
                </kbd>
                Close
              </span>
            </div>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}