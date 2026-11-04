import { useRoute } from "wouter";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight,
  Share2,
  Bookmark,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import type { BlogPost } from "@shared/schema";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";

const SERVICE_LINKS: Record<string, { title: string; href: string; description: string }[]> = {
  "Invoice Automation": [
    { title: "Invoice & Finance Automation", href: "/services/invoice-automation", description: "Automate invoice extraction, reconciliation, and cost tracking" }
  ],
  "Email Automation": [
    { title: "Email Co-Pilot", href: "/services/email-copilot", description: "AI-powered email drafting, triage, and response automation" }
  ],
  "CRM & Sales": [
    { title: "Sales & CRM Automation", href: "/services/crm-automation", description: "Lead scoring, pipeline automation, and follow-up sequences" }
  ],
  "Operations": [
    { title: "Operations & Workflow Co-Pilot", href: "/services/operations", description: "Ticket triage, field service management, and SOP compliance" }
  ],
  "Content Marketing": [
    { title: "Content Generation", href: "/services/content-generation", description: "Blog posts, social media, product descriptions, and marketing copy" }
  ],
  "Business Intelligence": [
    { title: "BI Dashboards", href: "/services/bi-dashboards", description: "Real-time business intelligence, KPI tracking, and automated reporting" }
  ],
  "AI Strategy": [
    { title: "Free AI Audit", href: "/free-ai-audit", description: "Get a complimentary assessment of your automation opportunities" }
  ]
};

const SECTOR_LINKS: Record<string, { title: string; href: string }> = {
  "retail": { title: "Retail AI Solutions", href: "/sectors/retail" },
  "manufacturing": { title: "Manufacturing AI Solutions", href: "/sectors/manufacturing" },
  "healthcare": { title: "Healthcare AI Solutions", href: "/sectors/healthcare" },
  "professional services": { title: "Professional Services AI", href: "/sectors/professional-services" },
  "professional-services": { title: "Professional Services AI", href: "/sectors/professional-services" },
};

function getRelevantLinks(post: BlogPost) {
  const services: { title: string; href: string; description: string }[] = [];
  const sectors: { title: string; href: string }[] = [];
  const titleLower = (post.title || "").toLowerCase();
  const contentLower = (post.content || "").toLowerCase();
  const tagsLower = (post.tags || []).map(t => t.toLowerCase());
  const catLower = (post.category || "").toLowerCase();

  if (titleLower.includes("invoice") || titleLower.includes("finance") || contentLower.includes("invoice automation") || tagsLower.includes("invoice automation")) {
    services.push(...(SERVICE_LINKS["Invoice Automation"] || []));
  }
  if (titleLower.includes("email") || contentLower.includes("email co-pilot") || tagsLower.includes("email automation")) {
    services.push(...(SERVICE_LINKS["Email Automation"] || []));
  }
  if (titleLower.includes("crm") || titleLower.includes("sales") || titleLower.includes("lead") || tagsLower.includes("crm")) {
    services.push(...(SERVICE_LINKS["CRM & Sales"] || []));
  }
  if (titleLower.includes("operations") || titleLower.includes("workflow") || contentLower.includes("operations automation")) {
    services.push(...(SERVICE_LINKS["Operations"] || []));
  }
  if (titleLower.includes("content") || titleLower.includes("marketing") || catLower === "content marketing") {
    services.push(...(SERVICE_LINKS["Content Marketing"] || []));
  }
  if (titleLower.includes("dashboard") || titleLower.includes("reporting") || titleLower.includes("analytics")) {
    services.push(...(SERVICE_LINKS["Business Intelligence"] || []));
  }
  if (services.length === 0) {
    services.push(...(SERVICE_LINKS["AI Strategy"] || []));
  }

  for (const [keyword, link] of Object.entries(SECTOR_LINKS)) {
    if (titleLower.includes(keyword) || tagsLower.includes(keyword) || catLower.includes(keyword)) {
      sectors.push(link);
    }
  }

  const uniqueServices = services.filter((s, i, arr) => arr.findIndex(x => x.href === s.href) === i);
  const uniqueSectors = sectors.filter((s, i, arr) => arr.findIndex(x => x.href === s.href) === i);
  return { services: uniqueServices, sectors: uniqueSectors };
}

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const { toast } = useToast();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post not found');
        }
        throw new Error('Failed to fetch post');
      }
      return response.json();
    },
    enabled: !!slug
  });

  // Fetch all posts for related posts section
  const { data: allPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
    queryFn: async () => {
      const response = await fetch('/api/blog');
      if (!response.ok) throw new Error('Failed to fetch posts');
      return response.json();
    },
    enabled: !!post
  });

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.id !== post?.id && p.category === post?.category)
    .slice(0, 3);

  const formatDate = (date: string | Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };

  // Extract FAQ data from blog content
  const extractFAQs = (htmlContent: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const faqQuestions = Array.from(doc.querySelectorAll('.faq-question'));
    
    if (faqQuestions.length === 0) return null;
    
    const faqs = faqQuestions.map((questionEl, index) => {
      const question = questionEl.textContent?.trim() || '';
      
      // Find the next question element (or end of document)
      const nextQuestionEl = faqQuestions[index + 1] || null;
      
      // Collect all text from .faq-answer elements between this question and the next
      const answerTexts: string[] = [];
      let currentEl: Element | null = questionEl.nextElementSibling;
      
      while (currentEl && currentEl !== nextQuestionEl) {
        // Find all .faq-answer elements within or as this element
        if (currentEl.classList.contains('faq-answer')) {
          // This element itself is a .faq-answer - get its full text content
          const text = currentEl.textContent?.trim() || '';
          if (text) answerTexts.push(text);
        } else {
          // Look for .faq-answer descendants (handles nested structures)
          const answerDescendants = currentEl.querySelectorAll('.faq-answer');
          answerDescendants.forEach(el => {
            const text = el.textContent?.trim() || '';
            if (text) answerTexts.push(text);
          });
        }
        
        currentEl = currentEl.nextElementSibling;
      }
      
      // Join all answer parts with a space, handling nested paragraphs, lists, etc.
      const answer = answerTexts.join(' ').replace(/\s+/g, ' ').trim();
      
      return { question, answer };
    }).filter(faq => faq.question && faq.answer);
    
    return faqs.length > 0 ? faqs : null;
  };

  const faqData = post ? extractFAQs(post.content) : null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <Skeleton className="h-4 w-32 mb-4" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-6 w-3/4 mb-8" />
          <div className="flex gap-4 mb-8">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Separator className="mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Post Not Found</CardTitle>
            <CardDescription>
              The blog post you're looking for doesn't exist or has been removed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={post.metaTitle || `${post.title} | Midlands Digital Blog`}
        description={post.metaDescription || post.excerpt}
        keywords={post.tags?.join(", ") || "AI automation, Midlands Digital, AI consultancy, workflow automation"}
        ogType="article"
      />
      
      <StructuredData 
        type="BlogPosting" 
        data={{
          headline: post.title,
          description: post.excerpt,
          image: "https://www.midlandsdigital.ai/og-image.jpg",
          author: "Midlands Digital",
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          url: `https://www.midlandsdigital.ai/blog/${slug}`,
          keywords: post.tags?.join(", "),
          category: post.category
        }}
      />
      
      <StructuredData 
        type="BreadcrumbList" 
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.midlandsdigital.ai"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://www.midlandsdigital.ai/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.title,
              "item": `https://www.midlandsdigital.ai/blog/${slug}`
            }
          ]
        }}
      />
      
      {faqData && faqData.length > 0 && (
        <StructuredData
          type="FAQPage"
          data={{
            mainEntity: faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }}
        />
      )}

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]} />
      </div>

      <article className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span>{post.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.featured === 1 && (
                <Badge variant="default">Featured</Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span data-testid="text-author">
                  {post.author}
                  {post.authorRole && `, ${post.authorRole}`}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span data-testid="text-date">{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span data-testid="text-reading-time">{post.readingTime} min read</span>
              </div>
            </div>
            
            {/* Share buttons */}
            <div className="flex gap-2 mt-6">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShare}
                data-testid="button-share"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          <Separator className="mb-8" />

          {/* Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Related Services - Blog-to-Service Cross-Linking */}
          {(() => {
            const { services, sectors } = getRelevantLinks(post);
            if (services.length === 0 && sectors.length === 0) return null;
            return (
              <Card className="mb-8 border-chart-2/20">
                <CardHeader>
                  <CardTitle className="text-lg">Explore Our Related Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <a key={service.href} href={service.href} className="flex items-start gap-3 p-3 rounded-md hover-elevate" data-testid={`link-blog-service-${service.href.split('/').pop()}`}>
                        <ArrowRight className="w-4 h-4 mt-0.5 text-chart-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{service.title}</p>
                          <p className="text-xs text-muted-foreground">{service.description}</p>
                        </div>
                      </a>
                    ))}
                    {sectors.map((sector) => (
                      <a key={sector.href} href={sector.href} className="flex items-start gap-3 p-3 rounded-md hover-elevate" data-testid={`link-blog-sector-${sector.href.split('/').pop()}`}>
                        <ArrowRight className="w-4 h-4 mt-0.5 text-chart-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{sector.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })()}

          <Separator className="mb-12" />

          {/* Author Card */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{post.author}</CardTitle>
                  {post.authorRole && (
                    <CardDescription>{post.authorRole}</CardDescription>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Helping East Midlands businesses transform their operations with practical AI automation solutions. 
                Real results, real ROI, no jargon.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-base">
                See how AI automation can save your team 10+ hours per week
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>Fixed price agreed up front</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>Results in 2 weeks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                  <span>No technical skills required</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-cta-contact">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/free-ai-audit">
                  <Button size="lg" variant="outline" data-testid="button-cta-audit">
                    Get Free AI Audit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover-elevate cursor-pointer">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-lg line-clamp-2">
                          {relatedPost.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {relatedPost.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readingTime} min read</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </article>
    </div>
  );
}