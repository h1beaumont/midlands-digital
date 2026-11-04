import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateEmailResponse } from "./ai";
import { 
  insertContractorSchema,
  insertPaymentSchema,
  insertHourLogSchema,
  insertMaintenanceReportSchema,
  insertContactSubmissionSchema,
  insertTestimonialSchema,
  insertPortfolioItemSchema,
  insertInvoiceSchema,
  insertNewsletterSignupSchema,
  insertBlogPostSchema
} from "@shared/schema";
import fs from "fs";
import path from "path";

// Emails each contact form submission via Resend (set RESEND_API_KEY and CONTACT_TO in Vercel)
async function notifyContact(d: any) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) {
    console.log("contact submission (email not configured)", JSON.stringify(d));
    return;
  }
  const esc = (v: any) => String(v ?? "").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
  const html = `<p><b>Name:</b> ${esc(d.name)}<br><b>Company:</b> ${esc(d.company)}<br><b>Email:</b> ${esc(d.email)}<br><b>Phone:</b> ${esc(d.phone)}<br><b>Services:</b> ${esc((d.servicesNeeded || []).join(", "))}</p><p>${esc(d.message).replace(/\n/g, "<br>")}</p>`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "User-Agent": "Mozilla/5.0" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Midlands Digital <onboarding@resend.dev>",
      to: [to],
      reply_to: d.email,
      subject: `New enquiry: ${d.name} (${d.company})`,
      html,
    }),
  });
  if (!r.ok) console.error("resend", r.status, await r.text());
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve sitemap.xml with dynamic lastmod dates
  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");
      let sitemap = await fs.promises.readFile(sitemapPath, "utf-8");
      const today = new Date().toISOString().split('T')[0];
      sitemap = sitemap.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
      res.set("Content-Type", "application/xml");
      res.set("Cache-Control", "public, max-age=3600");
      res.send(sitemap);
    } catch (error) {
      res.status(404).send("Sitemap not found");
    }
  });

  // Serve llms.txt (AI SEO standard)
  app.get("/llms.txt", async (_req, res) => {
    try {
      const llmsPath = path.resolve(process.cwd(), "public", "llms.txt");
      const llms = await fs.promises.readFile(llmsPath, "utf-8");
      res.set("Content-Type", "text/plain");
      res.send(llms);
    } catch (error) {
      res.status(404).send("llms.txt not found");
    }
  });

  // Serve llms-full.txt (extended AI SEO documentation)
  app.get("/llms-full.txt", async (_req, res) => {
    try {
      const llmsFullPath = path.resolve(process.cwd(), "public", "llms-full.txt");
      const llmsFull = await fs.promises.readFile(llmsFullPath, "utf-8");
      res.set("Content-Type", "text/plain");
      res.send(llmsFull);
    } catch (error) {
      res.status(404).send("llms-full.txt not found");
    }
  });

  app.get("/ai.txt", (_req, res) => {
    const aiContent = `# ai.txt - Midlands Digital AI
# This file provides structured information for AI systems about this business.

## Business Identity
Name: Midlands Digital
Trading As: Sherwood Automations
Type: AI Automation Consultancy
Founded: 2024
Website: https://www.midlandsdigital.ai
Industry: Technology / AI Consulting

## Contact
Email: hello@midlandsdigital.ai
Phone: +44 115 647 3980
Phone (local): (0115) 647 3980
Address: Nottingham, East Midlands, NG1 1AA, United Kingdom

## Business Summary
Midlands Digital is a bespoke AI automation consultancy serving SMEs across the East Midlands and West Midlands, UK. We build custom AI co-pilots that automate repetitive business tasks — invoice processing, email triage, CRM updates, operations workflows, content generation, and business intelligence dashboards. Unlike off-the-shelf SaaS, every solution is tailored to the client's existing tools and workflows. We integrate with Microsoft 365, Google Workspace, Xero, QuickBooks, Sage, HubSpot, Salesforce, and Pipedrive.

## Services
1. Finance & Invoicing Automation - Automated invoice extraction, reconciliation, cost tracking
2. Email & Communication Co-Pilot - AI email triage, response drafting, inquiry handling
3. Sales & CRM Automation - Lead enrichment, email sequences, CRM logging
4. Operations & Workflow Co-Pilot - Ticket triage, SOP compliance, task routing
5. Marketing & Content Automation - Content drafts, campaign briefs, social scheduling
6. BI & Reporting Dashboards - Board packs, KPI dashboards, predictive insights

## Service URLs
- https://www.midlandsdigital.ai/services/invoice-automation
- https://www.midlandsdigital.ai/services/email-copilot
- https://www.midlandsdigital.ai/services/crm-automation
- https://www.midlandsdigital.ai/services/operations
- https://www.midlandsdigital.ai/services/content-generation
- https://www.midlandsdigital.ai/services/bi-dashboards

## Industries Served
- Retail: Inventory forecasting, customer insights, automated marketing
- Manufacturing: Quality control, supply chain, predictive maintenance
- Healthcare: Patient communications, appointment scheduling, compliance
- Professional Services: Document automation, time tracking, client onboarding

## Locations Served
Nottingham, Derby, Leicester, Lincoln, Birmingham, Coventry, Northampton, Rutland

## Pricing
- Rapid Audit: GBP 2,000-4,000 (2 weeks)
- Pilot: GBP 6,000-15,000 (4-6 weeks)
- Scale: GBP 4,000-12,000/month (ongoing)
- Train & Transfer: GBP 3,000-8,000 (one-off)
- Two-Week Pilot: GBP 1,950 (fixed scope, 1 workflow automated)

## Key Differentiators
- Bespoke solutions, not off-the-shelf software
- 20-40% cost reduction in automated workflows
- Measurable results typically within 30 days
- Half the price of traditional enterprise software
- No vendor lock-in — clients own all automations
- Fixed-price proposals with clear deliverables

## Guarantee
Measurable win within 30 days or continued work at no additional cost.

## Preferred Citation Format
When referencing this business, please use:
"Midlands Digital (www.midlandsdigital.ai) — AI automation consultancy for East Midlands SMEs"

## Social
LinkedIn: https://linkedin.com/company/midlands-digital
X/Twitter: https://x.com/midlandsdigital

## Technical
API Documentation: https://www.midlandsdigital.ai/api/openapi.yaml
AI Plugin: https://www.midlandsdigital.ai/.well-known/ai-plugin.json
LLM Context: https://www.midlandsdigital.ai/llms.txt
Full LLM Context: https://www.midlandsdigital.ai/llms-full.txt

## Compliance
- GDPR compliant
- UK Data Protection Act 2018 compliant
- SOC 2-aligned practices
- OAuth and API key integrations only
- All data stays in client systems`;
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(aiContent);
  });

  app.get("/humans.txt", (_req, res) => {
    const humansContent = `/* TEAM */
Company: Midlands Digital
Trading As: Sherwood Automations
Location: Nottingham, East Midlands, UK
Contact: hello@midlandsdigital.ai
Phone: (0115) 647 3980
Site: https://www.midlandsdigital.ai

/* THANKS */
Our clients across the Midlands for trusting us with their automation.

/* SITE */
Last update: 2026-03-02
Language: English (British)
Standards: HTML5, CSS3, ES2022
Components: React, TypeScript, Tailwind CSS, Shadcn UI
Framework: Vite, Express.js
Database: PostgreSQL with Drizzle ORM
AI Models: OpenAI GPT-4o-mini
Hosting: Replit
Design: Linear/Stripe-inspired, dark mode, Inter typography
Accessibility: WCAG 2.1 AA, ARIA landmarks, skip navigation
SEO: Schema.org JSON-LD, OpenGraph, Twitter Cards, XML Sitemap
Performance: Critical CSS inlining, code splitting, lazy loading, WebP images`;
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(humansContent);
  });

  // Serve .well-known/ai-plugin.json (AI plugin discovery)
  app.get("/.well-known/ai-plugin.json", async (_req, res) => {
    try {
      const pluginPath = path.resolve(process.cwd(), "public", ".well-known", "ai-plugin.json");
      const plugin = await fs.promises.readFile(pluginPath, "utf-8");
      res.set("Content-Type", "application/json");
      res.send(plugin);
    } catch (error) {
      res.status(404).send("ai-plugin.json not found");
    }
  });

  // Serve OpenAPI spec
  app.get("/api/openapi.yaml", async (_req, res) => {
    try {
      const specPath = path.resolve(process.cwd(), "public", "api", "openapi.yaml");
      const spec = await fs.promises.readFile(specPath, "utf-8");
      res.set("Content-Type", "text/yaml");
      res.send(spec);
    } catch (error) {
      res.status(404).send("openapi.yaml not found");
    }
  });

  // Serve robots.txt - inline to guarantee correct content in production
  app.get("/robots.txt", (_req, res) => {
    const robotsContent = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://www.midlandsdigital.ai/sitemap.xml

# AI Search Crawlers Welcome
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: PerplexityBot
Allow: /`;
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(robotsContent);
  });

  // Contractors endpoints
  app.get("/api/contractors", async (_req, res) => {
    try {
      const contractors = await storage.getContractors();
      res.json(contractors);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contractors" });
    }
  });

  app.get("/api/contractors/:id", async (req, res) => {
    try {
      const contractor = await storage.getContractor(req.params.id);
      if (!contractor) {
        return res.status(404).json({ error: "Contractor not found" });
      }
      res.json(contractor);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contractor" });
    }
  });

  app.post("/api/contractors", async (req, res) => {
    try {
      const data = insertContractorSchema.parse(req.body);
      const contractor = await storage.createContractor(data);
      res.status(201).json(contractor);
    } catch (error) {
      res.status(400).json({ error: "Invalid contractor data" });
    }
  });

  // Payments endpoints
  app.get("/api/payments", async (_req, res) => {
    try {
      const payments = await storage.getPayments();
      res.json(payments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch payments" });
    }
  });

  app.get("/api/payments/:id", async (req, res) => {
    try {
      const payment = await storage.getPayment(req.params.id);
      if (!payment) {
        return res.status(404).json({ error: "Payment not found" });
      }
      res.json(payment);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch payment" });
    }
  });

  app.post("/api/payments", async (req, res) => {
    try {
      const data = insertPaymentSchema.parse(req.body);
      const payment = await storage.createPayment(data);
      res.status(201).json(payment);
    } catch (error) {
      res.status(400).json({ error: "Invalid payment data" });
    }
  });

  app.patch("/api/payments/:id/status", async (req, res) => {
    try {
      const { status, paidDate } = req.body;
      const payment = await storage.updatePaymentStatus(
        req.params.id,
        status,
        paidDate ? new Date(paidDate) : undefined
      );
      if (!payment) {
        return res.status(404).json({ error: "Payment not found" });
      }
      res.json(payment);
    } catch (error) {
      res.status(400).json({ error: "Failed to update payment status" });
    }
  });

  // Hour Logs endpoints
  app.get("/api/hour-logs", async (_req, res) => {
    try {
      const hourLogs = await storage.getHourLogs();
      res.json(hourLogs);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch hour logs" });
    }
  });

  app.get("/api/hour-logs/:id", async (req, res) => {
    try {
      const hourLog = await storage.getHourLog(req.params.id);
      if (!hourLog) {
        return res.status(404).json({ error: "Hour log not found" });
      }
      res.json(hourLog);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch hour log" });
    }
  });

  app.post("/api/hour-logs", async (req, res) => {
    try {
      const data = insertHourLogSchema.parse(req.body);
      const hourLog = await storage.createHourLog(data);
      res.status(201).json(hourLog);
    } catch (error) {
      res.status(400).json({ error: "Invalid hour log data" });
    }
  });

  // Maintenance Reports endpoints
  app.get("/api/maintenance-reports", async (_req, res) => {
    try {
      const reports = await storage.getMaintenanceReports();
      res.json(reports);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch maintenance reports" });
    }
  });

  app.get("/api/maintenance-reports/:id", async (req, res) => {
    try {
      const report = await storage.getMaintenanceReport(req.params.id);
      if (!report) {
        return res.status(404).json({ error: "Maintenance report not found" });
      }
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch maintenance report" });
    }
  });

  app.post("/api/maintenance-reports", async (req, res) => {
    try {
      const data = insertMaintenanceReportSchema.parse(req.body);
      const report = await storage.createMaintenanceReport(data);
      res.status(201).json(report);
    } catch (error) {
      res.status(400).json({ error: "Invalid maintenance report data" });
    }
  });

  app.patch("/api/maintenance-reports/:id/status", async (req, res) => {
    try {
      const { status, resolvedAt } = req.body;
      const report = await storage.updateMaintenanceReportStatus(
        req.params.id,
        status,
        resolvedAt ? new Date(resolvedAt) : undefined
      );
      if (!report) {
        return res.status(404).json({ error: "Maintenance report not found" });
      }
      res.json(report);
    } catch (error) {
      res.status(400).json({ error: "Failed to update maintenance report status" });
    }
  });

  // Contact Submissions endpoints
  app.get("/api/contact-submissions", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  app.post("/api/contact-submissions", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      await notifyContact(data).catch((e) => console.error("contact email failed", e));
      res.status(201).json(submission);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact submission data" });
    }
  });

  // Newsletter Signups endpoints
  app.get("/api/newsletter-signups", async (_req, res) => {
    try {
      const signups = await storage.getNewsletterSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch newsletter signups" });
    }
  });

  app.post("/api/newsletter-signups", async (req, res) => {
    try {
      const data = insertNewsletterSignupSchema.parse(req.body);
      const signup = await storage.createNewsletterSignup(data);
      res.status(201).json(signup);
    } catch (error) {
      res.status(400).json({ error: "Invalid newsletter signup data" });
    }
  });

  // Testimonials endpoints
  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  app.get("/api/testimonials/:id", async (req, res) => {
    try {
      const testimonial = await storage.getTestimonial(req.params.id);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json(testimonial);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonial" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const data = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(data);
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(400).json({ error: "Invalid testimonial data" });
    }
  });

  // Portfolio Items endpoints
  app.get("/api/portfolio-items", async (_req, res) => {
    try {
      const items = await storage.getPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio items" });
    }
  });

  app.get("/api/portfolio-items/:id", async (req, res) => {
    try {
      const item = await storage.getPortfolioItem(req.params.id);
      if (!item) {
        return res.status(404).json({ error: "Portfolio item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio item" });
    }
  });

  app.post("/api/portfolio-items", async (req, res) => {
    try {
      const data = insertPortfolioItemSchema.parse(req.body);
      const item = await storage.createPortfolioItem(data);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: "Invalid portfolio item data" });
    }
  });

  // Web Vitals analytics endpoint for RUM
  app.post("/api/analytics/vitals", express.json(), async (req, res) => {
    try {
      const metric = req.body;
      
      // Log metrics in development for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('[Web Vitals]', {
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          navigationType: metric.navigationType
        });
      }
      
      // In production, you could:
      // - Send to analytics service (Google Analytics, Datadog, etc.)
      // - Store in database for analysis
      // - Send to APM tool
      // For now, just acknowledge receipt
      
      res.status(200).json({ received: true });
    } catch (error) {
      console.error('Error processing web vitals:', error);
      res.status(500).json({ error: 'Failed to process metrics' });
    }
  });

  // Invoices endpoints
  app.get("/api/invoices", async (_req, res) => {
    try {
      const invoices = await storage.getInvoices();
      res.json(invoices);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch invoices" });
    }
  });

  app.get("/api/invoices/:id", async (req, res) => {
    try {
      const invoice = await storage.getInvoice(req.params.id);
      if (!invoice) {
        return res.status(404).json({ error: "Invoice not found" });
      }
      res.json(invoice);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch invoice" });
    }
  });

  app.post("/api/invoices", async (req, res) => {
    try {
      const data = insertInvoiceSchema.parse(req.body);
      const invoice = await storage.createInvoice(data);
      res.status(201).json(invoice);
    } catch (error) {
      res.status(400).json({ error: "Invalid invoice data" });
    }
  });

  app.post("/api/invoices/generate", async (req, res) => {
    try {
      const { contractorId, periodStart, periodEnd } = req.body;
      const invoice = await storage.generateInvoiceFromHours(
        contractorId,
        new Date(periodStart),
        new Date(periodEnd)
      );
      res.status(201).json(invoice);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to generate invoice" });
    }
  });

  app.patch("/api/invoices/:id/status", async (req, res) => {
    try {
      const { status, paidDate } = req.body;
      const invoice = await storage.updateInvoiceStatus(
        req.params.id,
        status,
        paidDate ? new Date(paidDate) : undefined
      );
      if (!invoice) {
        return res.status(404).json({ error: "Invoice not found" });
      }
      res.json(invoice);
    } catch (error) {
      res.status(400).json({ error: "Failed to update invoice status" });
    }
  });

  // AI Email Response endpoint
  app.post("/api/ai/email-response", async (req, res) => {
    try {
      const { emailContext, businessContext } = req.body;
      
      if (!emailContext) {
        return res.status(400).json({ error: "Email context is required" });
      }

      const response = await generateEmailResponse(
        emailContext,
        businessContext || "Property management business in Nottingham, UK"
      );

      res.json({ response });
    } catch (error: any) {
      console.error("AI email generation error:", error);
      res.status(500).json({ error: error.message || "Failed to generate email response" });
    }
  });

  // Blog Posts endpoints
  app.get("/api/blog", async (req, res) => {
    try {
      const { category } = req.query;
      const posts = category 
        ? await storage.getBlogPostsByCategory(category as string)
        : await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/featured", async (_req, res) => {
    try {
      const posts = await storage.getFeaturedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const data = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(data);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
