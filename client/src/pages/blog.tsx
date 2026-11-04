import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@shared/schema";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { value: "all", label: "All Posts" },
    { value: "AI Basics", label: "AI Basics" },
    { value: "Case Studies", label: "Case Studies" },
    { value: "Industry Insights", label: "Industry Insights" },
    { value: "How-To Guides", label: "How-To Guides" }
  ];

  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: selectedCategory === "all" 
      ? ['/api/blog']
      : ['/api/blog', selectedCategory],
    queryFn: async () => {
      const url = selectedCategory === "all" 
        ? '/api/blog'
        : `/api/blog?category=${encodeURIComponent(selectedCategory)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch posts');
      return response.json();
    }
  });

  const formatDate = (date: string | Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Blog | AI Automation Insights for SMEs | Midlands Digital"
        description="Practical guides, success stories, and insights about AI automation for East Midlands businesses. Learn how to save time and reduce costs with AI."
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      {posts.length > 0 && (
        <StructuredData type="ItemList" data={{
          name: "Midlands Digital Blog",
          description: "AI automation insights, guides, and success stories for East Midlands SMEs.",
          items: posts.map((post: BlogPost) => ({
            name: post.title,
            url: `https://www.midlandsdigital.ai/blog/${post.slug}`,
            description: post.excerpt || "",
            datePublished: post.publishedAt,
            author: post.author || "Midlands Digital"
          }))
        }} />
      )}

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-3 h-3 mr-1" />
            Insights & Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI Automation Insights for SMEs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical guides, success stories, and honest insights about implementing AI automation in your business. 
            No jargon, just real results from East Midlands businesses like yours.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              data-testid={`button-category-${category.value}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <Card className="text-center p-12">
            <CardContent>
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                {selectedCategory === "all" 
                  ? "Check back soon for new content!"
                  : "No posts in this category yet. Try selecting a different category."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {posts.map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover-elevate cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.featured === 1 && (
                          <Badge variant="default" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span data-testid={`text-author-${post.id}`}>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span data-testid={`text-reading-time-${post.id}`}>
                              {post.readingTime} min read
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span data-testid={`text-date-${post.id}`}>
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-primary font-medium">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start Your AI Journey?</CardTitle>
              <CardDescription className="text-base">
                Get a personalized AI automation roadmap for your business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Join hundreds of East Midlands businesses already saving 10+ hours per week with AI automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>
      </div>
    </div>
  );
}