import { 
  type User, 
  type InsertUser,
  type Contractor,
  type InsertContractor,
  type Payment,
  type InsertPayment,
  type HourLog,
  type InsertHourLog,
  type MaintenanceReport,
  type InsertMaintenanceReport,
  type ContactSubmission,
  type InsertContactSubmission,
  type Testimonial,
  type InsertTestimonial,
  type PortfolioItem,
  type InsertPortfolioItem,
  type Invoice,
  type InsertInvoice,
  type NewsletterSignup,
  type InsertNewsletterSignup,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";
import { randomUUID } from "crypto";
import { blogPostsData } from "./blog-data";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contractors
  getContractors(): Promise<Contractor[]>;
  getContractor(id: string): Promise<Contractor | undefined>;
  createContractor(contractor: InsertContractor): Promise<Contractor>;
  
  // Payments
  getPayments(): Promise<Payment[]>;
  getPayment(id: string): Promise<Payment | undefined>;
  createPayment(payment: InsertPayment): Promise<Payment>;
  updatePaymentStatus(id: string, status: string, paidDate?: Date): Promise<Payment | undefined>;
  
  // Hour Logs
  getHourLogs(): Promise<HourLog[]>;
  getHourLog(id: string): Promise<HourLog | undefined>;
  createHourLog(hourLog: InsertHourLog): Promise<HourLog>;
  
  // Maintenance Reports
  getMaintenanceReports(): Promise<MaintenanceReport[]>;
  getMaintenanceReport(id: string): Promise<MaintenanceReport | undefined>;
  createMaintenanceReport(report: InsertMaintenanceReport): Promise<MaintenanceReport>;
  updateMaintenanceReportStatus(id: string, status: string, resolvedAt?: Date): Promise<MaintenanceReport | undefined>;
  
  // Contact Submissions
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: string): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Portfolio Items
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(id: string): Promise<PortfolioItem | undefined>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  
  // Invoices
  getInvoices(): Promise<Invoice[]>;
  getInvoice(id: string): Promise<Invoice | undefined>;
  createInvoice(invoice: InsertInvoice): Promise<Invoice>;
  updateInvoiceStatus(id: string, status: string, paidDate?: Date): Promise<Invoice | undefined>;
  generateInvoiceFromHours(contractorId: string, periodStart: Date, periodEnd: Date): Promise<Invoice>;
  
  // Newsletter Signups
  getNewsletterSignups(): Promise<NewsletterSignup[]>;
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  
  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contractors: Map<string, Contractor>;
  private payments: Map<string, Payment>;
  private hourLogs: Map<string, HourLog>;
  private maintenanceReports: Map<string, MaintenanceReport>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private testimonials: Map<string, Testimonial>;
  private portfolioItems: Map<string, PortfolioItem>;
  private invoices: Map<string, Invoice>;
  private newsletterSignups: Map<string, NewsletterSignup>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.contractors = new Map();
    this.payments = new Map();
    this.hourLogs = new Map();
    this.maintenanceReports = new Map();
    this.contactSubmissions = new Map();
    this.testimonials = new Map();
    this.portfolioItems = new Map();
    this.invoices = new Map();
    this.newsletterSignups = new Map();
    this.blogPosts = new Map();
    
    // Seed some demo data
    this.seedDemoData();
  }

  private seedDemoData() {
    // Create demo contractors
    const contractor1: Contractor = {
      id: randomUUID(),
      name: "Mike Johnson",
      email: "mike@contractors.co.uk",
      phone: "07123 456789",
      specialty: "Plumbing",
      hourlyRate: "35.00",
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    };
    
    const contractor2: Contractor = {
      id: randomUUID(),
      name: "Sarah Williams",
      email: "sarah@electricians.co.uk",
      phone: "07987 654321",
      specialty: "Electrical",
      hourlyRate: "40.00",
      createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
    };
    
    const contractor3: Contractor = {
      id: randomUUID(),
      name: "Tom Davies",
      email: "tom@builders.co.uk",
      phone: "07555 123456",
      specialty: "General Maintenance",
      hourlyRate: "30.00",
      createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    };
    
    this.contractors.set(contractor1.id, contractor1);
    this.contractors.set(contractor2.id, contractor2);
    this.contractors.set(contractor3.id, contractor3);
    
    // Create demo payments
    const payment1: Payment = {
      id: randomUUID(),
      contractorId: contractor1.id,
      amount: "280.00",
      description: "Bathroom leak repair - 45 Student Road",
      status: "paid",
      dueDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      paidDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    };
    
    const payment2: Payment = {
      id: randomUUID(),
      contractorId: contractor2.id,
      amount: "520.00",
      description: "Electrical inspection and repairs - 12 Castle Gate",
      status: "pending",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      paidDate: null,
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    };
    
    const payment3: Payment = {
      id: randomUUID(),
      contractorId: contractor3.id,
      amount: "180.00",
      description: "Garden maintenance - 28 Lenton Boulevard",
      status: "pending",
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      paidDate: null,
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    };
    
    this.payments.set(payment1.id, payment1);
    this.payments.set(payment2.id, payment2);
    this.payments.set(payment3.id, payment3);
    
    // Create demo hour logs
    const hourLog1: HourLog = {
      id: randomUUID(),
      contractorId: contractor1.id,
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      hours: "8.00",
      description: "Emergency pipe repair and bathroom restoration",
      propertyAddress: "45 Student Road, Nottingham",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    };
    
    const hourLog2: HourLog = {
      id: randomUUID(),
      contractorId: contractor2.id,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      hours: "6.50",
      description: "Full electrical safety inspection",
      propertyAddress: "12 Castle Gate, Nottingham",
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    };
    
    const hourLog3: HourLog = {
      id: randomUUID(),
      contractorId: contractor2.id,
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      hours: "6.50",
      description: "Rewiring kitchen and new socket installation",
      propertyAddress: "12 Castle Gate, Nottingham",
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    };
    
    const hourLog4: HourLog = {
      id: randomUUID(),
      contractorId: contractor3.id,
      date: new Date(),
      hours: "6.00",
      description: "Garden cleanup and fence repair",
      propertyAddress: "28 Lenton Boulevard, Nottingham",
      createdAt: new Date(),
    };
    
    this.hourLogs.set(hourLog1.id, hourLog1);
    this.hourLogs.set(hourLog2.id, hourLog2);
    this.hourLogs.set(hourLog3.id, hourLog3);
    this.hourLogs.set(hourLog4.id, hourLog4);
    
    // Create demo maintenance reports
    const report1: MaintenanceReport = {
      id: randomUUID(),
      propertyAddress: "45 Student Road, Nottingham",
      title: "Leaking bathroom pipe",
      description: "Water leak discovered under sink, causing damage to cabinet",
      priority: "high",
      status: "resolved",
      assignedTo: contractor1.id,
      reportedBy: "Tenant - Emma Clarke",
      createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      resolvedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    };
    
    const report2: MaintenanceReport = {
      id: randomUUID(),
      propertyAddress: "12 Castle Gate, Nottingham",
      title: "Faulty electrical sockets",
      description: "Multiple sockets not working in kitchen, potential safety hazard",
      priority: "urgent",
      status: "in_progress",
      assignedTo: contractor2.id,
      reportedBy: "Property Manager",
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      resolvedAt: null,
    };
    
    const report3: MaintenanceReport = {
      id: randomUUID(),
      propertyAddress: "28 Lenton Boulevard, Nottingham",
      title: "Overgrown garden",
      description: "Garden requires maintenance, fence panel damaged",
      priority: "medium",
      status: "open",
      assignedTo: contractor3.id,
      reportedBy: "Landlord",
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      resolvedAt: null,
    };
    
    const report4: MaintenanceReport = {
      id: randomUUID(),
      propertyAddress: "78 Derby Road, Nottingham",
      title: "Heating not working",
      description: "Central heating system not responding, needs urgent attention",
      priority: "urgent",
      status: "open",
      assignedTo: null,
      reportedBy: "Tenant - James Wilson",
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      resolvedAt: null,
    };
    
    this.maintenanceReports.set(report1.id, report1);
    this.maintenanceReports.set(report2.id, report2);
    this.maintenanceReports.set(report3.id, report3);
    this.maintenanceReports.set(report4.id, report4);
    
    // No fake testimonials or portfolio items - only real data goes here
    
    // Create demo invoices
    const invoice1: Invoice = {
      id: randomUUID(),
      invoiceNumber: "INV-2024-001",
      contractorId: contractor1.id,
      contractorName: contractor1.name,
      periodStart: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      periodEnd: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      totalHours: "18.50",
      hourlyRate: contractor1.hourlyRate,
      subtotal: "925.00",
      tax: "185.00",
      total: "1110.00",
      status: "sent",
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      paidDate: null,
      notes: "Monthly invoice for plumbing services across multiple properties",
      lineItems: [
        JSON.stringify({ date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), description: "45 Castle Road - Leak repair", hours: "4.5", property: "45 Castle Road" }),
        JSON.stringify({ date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), description: "12 Park Street - Boiler service", hours: "6.0", property: "12 Park Street" }),
        JSON.stringify({ date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), description: "78 Derby Road - Bathroom installation", hours: "8.0", property: "78 Derby Road" })
      ],
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    };
    
    const invoice2: Invoice = {
      id: randomUUID(),
      invoiceNumber: "INV-2024-002",
      contractorId: contractor2.id,
      contractorName: contractor2.name,
      periodStart: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      periodEnd: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      totalHours: "12.00",
      hourlyRate: contractor2.hourlyRate,
      subtotal: "660.00",
      tax: "132.00",
      total: "792.00",
      status: "paid",
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      paidDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      notes: "Electrical work completed on schedule",
      lineItems: [
        JSON.stringify({ date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), description: "45 Castle Road - Socket replacement", hours: "3.0", property: "45 Castle Road" }),
        JSON.stringify({ date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), description: "Safety inspection across portfolio", hours: "9.0", property: "Multiple properties" })
      ],
      createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    };
    
    this.invoices.set(invoice1.id, invoice1);
    this.invoices.set(invoice2.id, invoice2);
    
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contractor methods
  async getContractors(): Promise<Contractor[]> {
    return Array.from(this.contractors.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContractor(id: string): Promise<Contractor | undefined> {
    return this.contractors.get(id);
  }

  async createContractor(insertContractor: InsertContractor): Promise<Contractor> {
    const id = randomUUID();
    const contractor: Contractor = { 
      ...insertContractor, 
      id,
      createdAt: new Date()
    };
    this.contractors.set(id, contractor);
    return contractor;
  }

  // Payment methods
  async getPayments(): Promise<Payment[]> {
    return Array.from(this.payments.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getPayment(id: string): Promise<Payment | undefined> {
    return this.payments.get(id);
  }

  async createPayment(insertPayment: InsertPayment): Promise<Payment> {
    const id = randomUUID();
    const payment: Payment = { 
      ...insertPayment,
      paidDate: insertPayment.paidDate ?? null,
      id,
      createdAt: new Date()
    };
    this.payments.set(id, payment);
    return payment;
  }

  async updatePaymentStatus(id: string, status: string, paidDate?: Date): Promise<Payment | undefined> {
    const payment = this.payments.get(id);
    if (!payment) return undefined;
    
    payment.status = status;
    if (paidDate) {
      payment.paidDate = paidDate;
    }
    this.payments.set(id, payment);
    return payment;
  }

  // Hour Log methods
  async getHourLogs(): Promise<HourLog[]> {
    return Array.from(this.hourLogs.values()).sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }

  async getHourLog(id: string): Promise<HourLog | undefined> {
    return this.hourLogs.get(id);
  }

  async createHourLog(insertHourLog: InsertHourLog): Promise<HourLog> {
    const id = randomUUID();
    const hourLog: HourLog = { 
      ...insertHourLog, 
      id,
      createdAt: new Date()
    };
    this.hourLogs.set(id, hourLog);
    return hourLog;
  }

  // Maintenance Report methods
  async getMaintenanceReports(): Promise<MaintenanceReport[]> {
    return Array.from(this.maintenanceReports.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getMaintenanceReport(id: string): Promise<MaintenanceReport | undefined> {
    return this.maintenanceReports.get(id);
  }

  async createMaintenanceReport(insertReport: InsertMaintenanceReport): Promise<MaintenanceReport> {
    const id = randomUUID();
    const report: MaintenanceReport = { 
      ...insertReport,
      assignedTo: insertReport.assignedTo ?? null,
      resolvedAt: insertReport.resolvedAt ?? null,
      id,
      createdAt: new Date()
    };
    this.maintenanceReports.set(id, report);
    return report;
  }

  async updateMaintenanceReportStatus(id: string, status: string, resolvedAt?: Date): Promise<MaintenanceReport | undefined> {
    const report = this.maintenanceReports.get(id);
    if (!report) return undefined;
    
    report.status = status;
    if (resolvedAt) {
      report.resolvedAt = resolvedAt;
    }
    this.maintenanceReports.set(id, report);
    return report;
  }

  // Contact Submission methods
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getTestimonial(id: string): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial,
      timeSaved: insertTestimonial.timeSaved ?? null,
      id,
      createdAt: new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Portfolio Item methods
  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
    return this.portfolioItems.get(id);
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const item: PortfolioItem = { 
      ...insertItem,
      timeSaved: insertItem.timeSaved ?? null,
      costReduction: insertItem.costReduction ?? null,
      id,
      createdAt: new Date()
    };
    this.portfolioItems.set(id, item);
    return item;
  }

  // Invoice methods
  async getInvoices(): Promise<Invoice[]> {
    return Array.from(this.invoices.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getInvoice(id: string): Promise<Invoice | undefined> {
    return this.invoices.get(id);
  }

  async createInvoice(insertInvoice: InsertInvoice): Promise<Invoice> {
    const id = randomUUID();
    const invoice: Invoice = { 
      ...insertInvoice,
      paidDate: insertInvoice.paidDate ?? null,
      notes: insertInvoice.notes ?? null,
      id,
      createdAt: new Date()
    };
    this.invoices.set(id, invoice);
    return invoice;
  }

  async updateInvoiceStatus(id: string, status: string, paidDate?: Date): Promise<Invoice | undefined> {
    const invoice = this.invoices.get(id);
    if (!invoice) return undefined;
    
    invoice.status = status;
    if (paidDate) {
      invoice.paidDate = paidDate;
    }
    this.invoices.set(id, invoice);
    return invoice;
  }

  async generateInvoiceFromHours(contractorId: string, periodStart: Date, periodEnd: Date): Promise<Invoice> {
    const contractor = await this.getContractor(contractorId);
    if (!contractor) {
      throw new Error("Contractor not found");
    }

    // Get all hour logs for this contractor within the period
    const allHourLogs = await this.getHourLogs();
    const periodHourLogs = allHourLogs.filter(log => 
      log.contractorId === contractorId &&
      new Date(log.date) >= periodStart &&
      new Date(log.date) <= periodEnd
    );

    if (periodHourLogs.length === 0) {
      throw new Error("No hours logged for this period");
    }

    // Calculate totals
    const totalHours = periodHourLogs.reduce((sum, log) => sum + parseFloat(log.hours), 0);
    const hourlyRate = parseFloat(contractor.hourlyRate);
    const subtotal = totalHours * hourlyRate;
    const taxRate = 0.20; // 20% VAT
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Generate invoice number
    const invoiceCount = this.invoices.size + 1;
    const invoiceNumber = `INV-${new Date().getFullYear()}-${String(invoiceCount).padStart(3, '0')}`;

    // Create line items from hour logs
    const lineItems = periodHourLogs.map(log => 
      JSON.stringify({
        date: log.date,
        description: log.description,
        hours: log.hours,
        property: log.propertyAddress
      })
    );

    // Create invoice
    const invoice: InsertInvoice = {
      invoiceNumber,
      contractorId,
      contractorName: contractor.name,
      periodStart,
      periodEnd,
      totalHours: totalHours.toFixed(2),
      hourlyRate: hourlyRate.toFixed(2),
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      status: "draft",
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      paidDate: null,
      notes: `Automatically generated invoice for ${contractor.name}`,
      lineItems
    };

    return this.createInvoice(invoice);
  }

  // Newsletter Signups
  async getNewsletterSignups(): Promise<NewsletterSignup[]> {
    return Array.from(this.newsletterSignups.values());
  }

  async createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const id = randomUUID();
    const newSignup: NewsletterSignup = {
      id,
      email: signup.email,
      subscribed: new Date(),
      source: signup.source || null,
    };
    
    this.newsletterSignups.set(id, newSignup);
    return newSignup;
  }

  // Blog posts served from server/blog-data.ts (no database)
  private publishedPosts(): BlogPost[] {
    const now = Date.now();
    return blogPostsData
      .filter((p) => new Date(p.publishedAt as any).getTime() <= now)
      .sort((x, y) => new Date(y.publishedAt as any).getTime() - new Date(x.publishedAt as any).getTime());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return this.publishedPosts();
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return blogPostsData.find((p) => p.id === id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return blogPostsData.find((p) => p.slug === slug);
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return this.publishedPosts().filter((p) => p.category === category);
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return this.publishedPosts().filter((p) => p.featured === 1);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    throw new Error("Blog posts are read-only on this deployment");
  }
}

export const storage = new MemStorage();
