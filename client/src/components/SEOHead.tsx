import { useEffect } from "react";
import { useLocation } from "wouter";

const CANONICAL_DOMAIN = "https://www.midlandsdigital.ai";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  ogType = "website",
  ogImage = `${CANONICAL_DOMAIN}/og-image.jpg`,
  canonical
}: SEOHeadProps) {
  const [location] = useLocation();
  
  useEffect(() => {
    document.title = title;
    
    const canonicalUrl = canonical || `${CANONICAL_DOMAIN}${location === "/" ? "/" : location}`;
    const siteName = "Midlands Digital";
    
    const setMetaTag = (selector: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute(attribute, selector.replace(`meta[${attribute}="`, '').replace('"]', ''));
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (link) {
        link.href = href;
      } else {
        link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };
    
    setMetaTag('meta[name="description"]', description);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', keywords);
    }

    setLinkTag('canonical', canonicalUrl);

    setMetaTag('meta[property="og:title"]', title, true);
    setMetaTag('meta[property="og:description"]', description, true);
    setMetaTag('meta[property="og:type"]', ogType, true);
    setMetaTag('meta[property="og:url"]', canonicalUrl, true);
    setMetaTag('meta[property="og:site_name"]', siteName, true);
    setMetaTag('meta[property="og:image"]', ogImage, true);
    setMetaTag('meta[property="og:image:width"]', '1200', true);
    setMetaTag('meta[property="og:image:height"]', '630', true);
    setMetaTag('meta[property="og:image:alt"]', `${title} - Midlands Digital`, true);
    setMetaTag('meta[property="og:locale"]', 'en_GB', true);

    setMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', title);
    setMetaTag('meta[name="twitter:description"]', description);
    setMetaTag('meta[name="twitter:image"]', ogImage);

    const today = new Date().toISOString().split('T')[0];
    setMetaTag('meta[name="dateModified"]', today);
    setMetaTag('meta[name="last-modified"]', today);
    setMetaTag('meta[property="article:modified_time"]', today, true);

  }, [title, description, keywords, ogType, ogImage, canonical, location]);

  return null;
}
