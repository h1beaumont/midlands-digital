import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Search } from "./Search";
import { Menu, X, ChevronDown, Briefcase, Factory, ShoppingCart, Stethoscope, FileText, Mail, BarChart3, Settings, Users, BookOpen, Calculator, ClipboardList, DollarSign, Building2, Heart, Lightbulb } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = ({ className, title, children, href, icon: Icon, testId, ...props }: {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  testId?: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          data-testid={testId}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-chart-2" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          {children && (
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header role="banner" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center hover-elevate px-2 py-1 rounded-md -ml-2">
            <span className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight">Midlands Digital</span>
            <span className="font-extrabold text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-2 to-chart-3">.</span>
            <span className="font-extrabold text-base sm:text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-2 to-chart-3" style={{ filter: 'brightness(1.3)' }}>ai</span>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <NavigationMenu className="hidden lg:flex" aria-label="Main navigation">
            <NavigationMenuList>
              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent" data-testid="trigger-nav-solutions">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[320px] lg:grid-cols-1">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2 px-3">Services</p>
                      <ul className="space-y-1">
                        <ListItem href="/services" title="All Services" icon={Briefcase} testId="link-nav-all-services">
                          View complete service list
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Work */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/work"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      location === "/work" ? "text-foreground" : "text-muted-foreground"
                    )}
                    data-testid="link-nav-work"
                  >
                    Work
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Learn Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent" data-testid="trigger-nav-learn">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-4 w-[300px]">
                    <ListItem href="/blog" title="Blog" icon={BookOpen} testId="link-nav-blog">
                      AI insights & success stories
                    </ListItem>
                    <ListItem href="/faq" title="FAQ" icon={Heart} testId="link-nav-faq">
                      Common questions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      location === "/pricing" ? "text-foreground" : "text-muted-foreground"
                    )}
                    data-testid="link-nav-pricing"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent" data-testid="trigger-nav-about">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-4 w-[250px]">
                    <ListItem href="/about" title="Our Story" icon={Users} testId="link-nav-about">
                      Meet the team
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Tablet Navigation - simplified links */}
          <nav className="hidden md:flex lg:hidden items-center gap-4" role="navigation" aria-label="Tablet navigation">
            <Link href="/services" className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground" data-testid="link-tablet-services">
              Services
            </Link>
            <Link href="/work" className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground" data-testid="link-tablet-work">
              Work
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground" data-testid="link-tablet-blog">
              Blog
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground" data-testid="link-tablet-pricing">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground" data-testid="link-tablet-about">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              asChild
              className="hidden lg:flex"
              data-testid="button-header-cta"
            >
              <a href="/#contact">Book Free Strategy Call</a>
            </Button>
            <div className="hidden md:flex items-center gap-2">
              <Search />
              <ThemeToggle />
            </div>
            <div className="flex md:hidden items-center gap-2">
              <Search />
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-1 border-t max-h-[70vh] overflow-y-auto" role="navigation" aria-label="Mobile navigation">
            {/* Main Links */}
            <Link 
              href="/" 
              className="block px-4 py-2 text-sm font-medium hover-elevate rounded-md"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-home"
            >
              Home
            </Link>
            
            {/* Solutions Section */}
            <div className="px-4 py-2" role="group" aria-labelledby="mobile-solutions-heading">
              <p id="mobile-solutions-heading" className="text-xs font-semibold text-muted-foreground mb-2">Solutions</p>
              <div className="space-y-1 pl-2">
                <Link 
                  href="/services" 
                  className="block px-3 py-2 text-sm hover-elevate rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-services"
                >
                  All Services
                </Link>
              </div>
            </div>

            <Link 
              href="/work" 
              className="block px-4 py-2 text-sm font-medium hover-elevate rounded-md"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-work"
            >
              Work
            </Link>

            {/* Learn Section */}
            <div className="px-4 py-2" role="group" aria-labelledby="mobile-learn-heading">
              <p id="mobile-learn-heading" className="text-xs font-semibold text-muted-foreground mb-2">Learn</p>
              <div className="space-y-1 pl-2">
                <Link 
                  href="/blog" 
                  className="block px-3 py-2 text-sm hover-elevate rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-blog"
                >
                  Blog
                </Link>
                <Link 
                  href="/faq" 
                  className="block px-3 py-2 text-sm hover-elevate rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-faq"
                >
                  FAQ
                </Link>
              </div>
            </div>

            <Link 
              href="/pricing" 
              className="block px-4 py-2 text-sm font-medium hover-elevate rounded-md"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-pricing"
            >
              Pricing
            </Link>

            {/* About Section */}
            <div className="px-4 py-2" role="group" aria-labelledby="mobile-about-heading">
              <p id="mobile-about-heading" className="text-xs font-semibold text-muted-foreground mb-2">About</p>
              <div className="space-y-1 pl-2">
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-sm hover-elevate rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-about"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className="pt-3 px-4">
              <Button 
                size="sm" 
                asChild
                className="w-full"
                data-testid="button-mobile-cta"
              >
                <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>Book Strategy Call</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
