import { useEffect } from "react";

interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "ProfessionalService" | "FAQPage" | "Service" | "Article" | "HowTo" | "VideoObject" | "BreadcrumbList" | "BlogPosting" | "WebSite" | "Speakable" | "SiteNavigationElement" | "ItemList" | "OfferCatalog";
  data?: Record<string, any>;
  id?: string; // Optional unique ID for multiple schemas of same type
}

export function StructuredData({ type, data, id }: StructuredDataProps) {
  useEffect(() => {
    let structuredData: Record<string, any> = {};

    if (type === "Organization") {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Midlands Digital",
        "alternateName": ["Midlands Digital", "Sherwood Automations", "Midlands Digital Automation"],
        "url": "https://www.midlandsdigital.ai",
        "logo": "https://www.midlandsdigital.ai/logo.png",
        "description": "Bespoke AI automation consultancy serving SMEs across the Midlands. We build custom AI agents and co-pilots for Birmingham, Nottingham, Leicester, Coventry and Derby businesses—faster workflows, smarter data, measurable ROI in 30 days.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nottingham",
          "addressLocality": "Nottingham",
          "postalCode": "NG1 1AA",
          "addressRegion": "East Midlands",
          "addressCountry": "GB"
        },
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+44-115-647-3980",
          "email": "hello@midlandsdigital.ai",
          "contactType": "sales",
          "areaServed": "GB",
          "availableLanguage": ["en-GB"]
        }, {
          "@type": "ContactPoint",
          "telephone": "+44-115-647-3980",
          "email": "hello@midlandsdigital.ai",
          "contactType": "customer service",
          "areaServed": "GB",
          "availableLanguage": ["en-GB"]
        }],
        "sameAs": [
          "https://www.linkedin.com/company/midlands-digital"
        ],
        "foundingDate": "2024",
        "areaServed": [
          {
            "@type": "City",
            "name": "Nottingham",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "East Midlands"
            }
          },
          {
            "@type": "City",
            "name": "Leicester",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "East Midlands"
            }
          },
          {
            "@type": "City",
            "name": "Derby",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "East Midlands"
            }
          },
          {
            "@type": "City",
            "name": "Birmingham",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "West Midlands"
            }
          },
          {
            "@type": "City",
            "name": "Coventry",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "West Midlands"
            }
          },
          {
            "@type": "City",
            "name": "Lincoln",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "East Midlands"
            }
          },
          {
            "@type": "City",
            "name": "Northampton",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "East Midlands"
            }
          }
        ],
        "slogan": "AI that saves your team hours—built for SMEs across the Midlands",
        "knowsAbout": ["Artificial Intelligence", "Business Automation", "Workflow Automation", "SME Digital Transformation", "AI Implementation"],
        "serviceType": [
          "Workflow Automation",
          "Document AI", 
          "Chatbots",
          "AI Training",
          "Email Triage & Response",
          "Invoice Automation",
          "Lead Enrichment & CRM",
          "Content Generation",
          "BI Dashboards & Reporting"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation Consulting",
              "description": "Fixed-scope AI automation pilots with measurable ROI in 2-3 weeks"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Two-Week Pilot",
              "description": "£1,950 fixed scope: 1 workflow, success metric agreed on day 1, staff training, rollback plan",
              "price": "1950",
              "priceCurrency": "GBP"
            }
          }
        ],
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.midlandsdigital.ai/#contact",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "name": "Book Free Strategy Call",
          "description": "Book a free 30-minute AI strategy call with Midlands Digital"
        },
        ...(data && Object.fromEntries(
          Object.entries(data)
        ))
      };
    } else if (type === "ProfessionalService") {
      // Streamlined ProfessionalService schema for homepage (from SEO audit)
      structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Midlands Digital Automation",
        "image": "https://www.midlandsdigital.ai/logo.png",
        "url": "https://www.midlandsdigital.ai/",
        "telephone": "+441159999999",
        "email": "hello@midlandsdigital.ai",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NG1 1AA",
          "addressLocality": "Nottingham",
          "addressRegion": "East Midlands",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.9548,
          "longitude": -1.1581
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Nottingham"
          },
          {
            "@type": "City",
            "name": "Derby"
          },
          {
            "@type": "City",
            "name": "Leicester"
          },
          {
            "@type": "City",
            "name": "Lincoln"
          },
          {
            "@type": "City",
            "name": "Northampton"
          },
          {
            "@type": "City",
            "name": "Rutland"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/midlands-digital"
        ],
        "description": "Bespoke AI Automation for East Midlands SMEs. We build small, safe automations that quietly remove admin in finance, sales, and operations.",
        "priceRange": "££",
        "foundingDate": "2024",
        "knowsAbout": ["AI Automation", "Workflow Automation", "Invoice Processing", "CRM Automation", "Business Intelligence"],
        "slogan": "AI Automation for East Midlands SMEs",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:30"
        },
        "serviceType": "AI Automation Consulting",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Finance & Invoicing Automation",
                "description": "Automated invoice processing, expense categorisation, and financial reporting powered by AI."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Email & Communication Co-Pilot",
                "description": "AI-powered email triage, smart reply drafting, and communication workflow automation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sales & CRM Automation",
                "description": "Automated lead scoring, CRM data entry, and sales pipeline management with AI."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Operations & Workflow Automation",
                "description": "End-to-end process automation for scheduling, approvals, and operational workflows."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marketing & Content Automation",
                "description": "AI-driven content generation, social media scheduling, and marketing campaign automation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "BI & Reporting Dashboards",
                "description": "Real-time business intelligence dashboards and automated reporting for data-driven decisions."
              }
            }
          ]
        },
        "foundingDate": "2024"
      };
    } else if (type === "LocalBusiness") {
      // Use custom data if provided, otherwise defaults
      const city = data?.city || "Nottingham";
      const latitude = data?.latitude || "52.9548";
      const longitude = data?.longitude || "-1.1581";
      const postalCode = data?.postalCode || "NG1 1AA";
      const description = data?.description || "Bespoke AI automation consultancy for East Midlands SMEs. Measurable gains in 30 days.";
      
      structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `Sherwood Automations (Midlands Digital) - ${city}`,
        "image": "https://www.midlandsdigital.ai/logo.png",
        "url": `https://www.midlandsdigital.ai/location/${city.toLowerCase()}`,
        "telephone": "+44-115-647-3980",
        "email": "hello@midlandsdigital.ai",
        "priceRange": "£2,000 - £15,000",
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city,
          "postalCode": postalCode,
          "addressRegion": "East Midlands",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": latitude,
          "longitude": longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        "areaServed": {
          "@type": "City",
          "name": city,
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "East Midlands"
          }
        },
        "serviceType": [
          "Workflow Automation",
          "Document AI",
          "Chatbots",
          "AI Training"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Invoice & Expense Automation",
                "description": "Automated invoice capture and processing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Email Automation & Triage",
                "description": "AI-drafted email replies for your team to review"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Workflow Automation",
                "description": "Automate quotes, invoices, SOPs with measurable ROI"
              }
            }
          ]
        }
      };
    } else if (type === "FAQPage" && data) {
      // Format questions properly for FAQPage schema
      const formattedQuestions = (data.questions || []).map((q: any) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }));
      
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": formattedQuestions
      };
    } else if (type === "Service" && data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name || "",
        "description": data.description || "",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Midlands Digital Automation",
          "url": "https://www.midlandsdigital.ai",
          "telephone": "+44-115-647-3980",
          "email": "hello@midlandsdigital.ai"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "East Midlands, UK"
        },
        "serviceType": data.serviceType || "AI Automation",
        "category": data.category || "Technology",
        "offers": {
          "@type": "Offer",
          "price": data.price || "1950",
          "priceCurrency": "GBP",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": data.price || "1950",
            "priceCurrency": "GBP",
            "description": data.priceDescription || "Two-week pilot from £1,950. Full implementations £2,000-£8,000."
          },
          "availability": "https://schema.org/InStock",
          "url": "https://www.midlandsdigital.ai/pricing"
        }
      };
    } else if (type === "Article" && data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.headline || "",
        "author": data.author || {
          "@type": "Organization",
          "name": "Midlands Digital"
        },
        "publisher": data.publisher || {
          "@type": "Organization",
          "name": "Midlands Digital",
          "url": "https://www.midlandsdigital.ai",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.midlandsdigital.ai/logo.png"
          }
        },
        "datePublished": data.datePublished || new Date().toISOString().split('T')[0],
        "dateModified": data.dateModified || new Date().toISOString().split('T')[0],
        "image": data.image || "https://www.midlandsdigital.ai/logo.png",
        "description": data.description || ""
      };
    } else if (type === "HowTo" && data) {
      // Format steps properly for HowTo schema
      const formattedSteps = (data.step || []).map((s: any, index: number) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": s.name || "",
        "text": s.text || "",
        "url": s.url || ""
      }));
      
      structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": data.name || "",
        "description": data.description || "",
        "step": formattedSteps,
        "totalTime": data.totalTime || "PT4W",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "GBP",
          "value": data.estimatedCost || "2000"
        }
      };
    } else if (type === "VideoObject") {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": data?.name || "AI Automation Demo",
        "description": data?.description || "See how AI automation works for SMEs",
        "thumbnailUrl": data?.thumbnailUrl || "https://www.midlandsdigital.ai/video-thumb.jpg",
        "uploadDate": data?.uploadDate || new Date().toISOString(),
        "duration": data?.duration || "PT2M30S",
        "contentUrl": data?.contentUrl,
        "embedUrl": data?.embedUrl,
        "publisher": {
          "@type": "Organization",
          "name": "Midlands Digital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.midlandsdigital.ai/logo.png"
          }
        }
      };
    } else if (type === "BreadcrumbList" && data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.itemListElement || []
      };
    } else if (type === "BlogPosting" && data) {
      // Schema for blog posts and articles
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data?.headline,
        "description": data?.description,
        "image": data?.image || "https://www.midlandsdigital.ai/og-image.jpg",
        "author": {
          "@type": "Organization",
          "name": data?.author || "Midlands Digital",
          "url": "https://www.midlandsdigital.ai/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Midlands Digital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.midlandsdigital.ai/logo.png"
          }
        },
        "datePublished": data?.datePublished,
        "dateModified": data?.dateModified || data?.datePublished,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data?.url || "https://www.midlandsdigital.ai"
        },
        "keywords": data?.keywords,
        "articleSection": data?.category,
        "wordCount": data?.wordCount
      };
    } else if (type === "Speakable" && data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": data.name || "Midlands Digital",
        "url": data.url || "https://www.midlandsdigital.ai",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": data.cssSelectors || [
            ".hero-headline",
            ".hero-subheadline",
            ".value-proposition"
          ]
        }
      };
    } else if (type === "WebSite") {
      // WebSite schema with SearchAction for sitelinks searchbox
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Midlands Digital",
        "alternateName": ["Sherwood Automations", "Midlands Digital"],
        "url": "https://www.midlandsdigital.ai",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.midlandsdigital.ai/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Midlands Digital",
          "url": "https://www.midlandsdigital.ai"
        }
      };
    } else if (type === "SiteNavigationElement" && data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": (data.items || []).map((item: { name: string; url: string }, index: number) => ({
          "@type": "SiteNavigationElement",
          "position": index + 1,
          "name": item.name,
          "url": item.url
        }))
      };
    } else if (type === "ItemList" && data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": data.name || "",
        "description": data.description || "",
        "numberOfItems": data.items?.length || 0,
        "itemListElement": (data.items || []).map((item: { name: string; url: string; description?: string; image?: string; datePublished?: string; author?: string }, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": item.url,
          "name": item.name,
          ...(item.description && {
            "item": {
              "@type": "BlogPosting",
              "headline": item.name,
              "description": item.description,
              "url": item.url,
              ...(item.datePublished && { "datePublished": item.datePublished }),
              ...(item.author && { "author": { "@type": "Organization", "name": item.author } })
            }
          })
        }))
      };
    } else if (type === "OfferCatalog" && data) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "name": data.name || "AI Automation Services",
        "description": data.description || "",
        "itemListElement": (data.offers || []).map((offer: { name: string; description: string; price: string; priceCurrency?: string; availability?: string }) => ({
          "@type": "Offer",
          "name": offer.name,
          "description": offer.description,
          "price": offer.price,
          "priceCurrency": offer.priceCurrency || "GBP",
          "availability": offer.availability || "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Midlands Digital"
          }
        }))
      };
    }

    const scriptId = id ? `structured-data-${type}-${id}` : `structured-data-${type}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (script) {
      script.innerHTML = JSON.stringify(structuredData);
    } else {
      const newScript = document.createElement('script');
      newScript.id = scriptId;
      newScript.type = 'application/ld+json';
      newScript.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(newScript);
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [type, data, id]);

  return null;
}
