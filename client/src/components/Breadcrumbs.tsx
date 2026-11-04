import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Add structured data for breadcrumbs
  useEffect(() => {
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.midlandsdigital.ai/"
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          "item": item.href ? `https://www.midlandsdigital.ai${item.href}` : undefined
        }))
      ]
    };

    const scriptId = 'breadcrumb-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (script) {
      script.innerHTML = JSON.stringify(breadcrumbList);
    } else {
      const newScript = document.createElement('script');
      newScript.id = scriptId;
      newScript.type = 'application/ld+json';
      newScript.innerHTML = JSON.stringify(breadcrumbList);
      document.head.appendChild(newScript);
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="border-b bg-muted/20">
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <li className="flex items-center gap-2">
            <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1" data-testid="breadcrumb-home">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <>
                  <Link href={item.href} className="hover:text-foreground transition-colors" data-testid={`breadcrumb-${index}`}>
                    {item.label}
                  </Link>
                  {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
                </>
              ) : (
                <span className="text-foreground font-medium" data-testid={`breadcrumb-current-${index}`}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
