import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Users,
  DollarSign,
  FileText,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Sparkles,
  Copy,
  RefreshCw,
} from "lucide-react";
import { format } from "date-fns";
import type { Contractor, Payment, HourLog, MaintenanceReport, Invoice } from "@shared/schema";

export default function Demo() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("payments");
  const [emailContext, setEmailContext] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // Fetch data (will be implemented in phase 3)
  const { data: contractors = [] } = useQuery<Contractor[]>({
    queryKey: ['/api/contractors']
  });

  const { data: payments = [] } = useQuery<Payment[]>({
    queryKey: ['/api/payments']
  });

  const { data: hourLogs = [] } = useQuery<HourLog[]>({
    queryKey: ['/api/hour-logs']
  });

  const { data: maintenanceReports = [] } = useQuery<MaintenanceReport[]>({
    queryKey: ['/api/maintenance-reports']
  });

  const { data: invoices = [] } = useQuery<Invoice[]>({
    queryKey: ['/api/invoices']
  });

  const emailMutation = useMutation({
    mutationFn: async (emailText: string) => {
      const result = await apiRequest("POST", "/api/ai/email-response", {
        emailContext: emailText,
        businessContext: "Property management business in Nottingham, UK"
      });
      return await result.json();
    },
    onSuccess: (data: any) => {
      setAiResponse(data.response);
      toast({
        title: "Response Generated",
        description: "AI has created a professional response for you.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleGenerateResponse = () => {
    if (!emailContext.trim()) {
      toast({
        title: "Email Required",
        description: "Please paste an email to respond to.",
        variant: "destructive"
      });
      return;
    }
    emailMutation.mutate(emailContext);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(aiResponse);
    toast({
      title: "Copied!",
      description: "Response copied to clipboard.",
    });
  };

  // Calculate metrics
  const totalContractors = contractors.length;
  const pendingPayments = payments.filter(p => p.status === 'pending').length;
  const totalReports = maintenanceReports.length;
  const weeklyHours = hourLogs.reduce((sum, log) => sum + parseFloat(log.hours), 0);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", className?: string }> = {
      pending: { variant: "secondary", className: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
      paid: { variant: "outline", className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20" },
      overdue: { variant: "destructive" },
      draft: { variant: "outline", className: "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20" },
      sent: { variant: "secondary", className: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
      open: { variant: "secondary", className: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
      in_progress: { variant: "outline", className: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
      resolved: { variant: "outline", className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20" },
    };
    const config = variants[status] || { variant: "default" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {status.replace('_', ' ')}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", className?: string }> = {
      low: { variant: "outline", className: "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20" },
      medium: { variant: "outline", className: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
      high: { variant: "secondary", className: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
      urgent: { variant: "destructive" },
    };
    const config = variants[priority] || { variant: "default" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {priority}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Property Management Demo – See AI Automation in Action"
        description="Live demo of AI automation for property management. Track contractors, automate invoicing, manage maintenance, and generate email responses with AI. Built for Nottingham property developers."
        keywords="property management demo, AI automation demo, contractor management, automated invoicing, property maintenance software"
      />
      <Breadcrumbs items={[{ label: "Demo" }]} />
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild aria-label="Back to home" data-testid="button-back-home">
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold">Property Management Demo</h1>
              <p className="text-sm text-muted-foreground">Live automation in action</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-chart-4/10 text-chart-4 border-chart-4/20">
            <Clock className="w-3 h-3 mr-1" />
            Saves 4.5hrs/week
          </Badge>
        </div>
      </header>

      {/* Multi-Industry Context Banner */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-6 py-6 max-w-7xl">
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" data-testid="badge-industry-example">Industry Example</Badge>
                    <Badge variant="outline">1 of Many</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Property Management: One Industry We Serve</h3>
                  <p className="text-sm text-muted-foreground">
                    This live demo shows automation for property developers—one example among retail, manufacturing, healthcare, professional services, and more. 
                    Same approach, different workflows.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" asChild data-testid="button-view-all-services">
                    <Link href="/services">
                      <Sparkles className="w-4 h-4 mr-2" />
                      View All Services
                    </Link>
                  </Button>
                  <Button size="sm" asChild data-testid="button-discuss-industry">
                    <Link href="/#contact">
                      Discuss Your Industry
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Contractors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono" data-testid="metric-contractors">
                {totalContractors}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Across all properties
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono" data-testid="metric-payments">
                {pendingPayments}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Awaiting processing
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours This Week</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono" data-testid="metric-hours">
                {weeklyHours.toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Logged by contractors
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono" data-testid="metric-reports">
                {totalReports}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Filed this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed Interface */}
        <Card>
          <CardHeader>
            <CardTitle>Management Tools</CardTitle>
            <CardDescription>
              Track payments, hours, and maintenance in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="payments" data-testid="tab-payments">
                  Payments
                </TabsTrigger>
                <TabsTrigger value="invoices" data-testid="tab-invoices">
                  Invoices
                </TabsTrigger>
                <TabsTrigger value="hours" data-testid="tab-hours">
                  Hour Logs
                </TabsTrigger>
                <TabsTrigger value="maintenance" data-testid="tab-maintenance">
                  Maintenance
                </TabsTrigger>
                <TabsTrigger value="email" data-testid="tab-email">
                  AI Email
                </TabsTrigger>
              </TabsList>

              {/* Payments Tab */}
              <TabsContent value="payments" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Contractor Payments</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button data-testid="button-add-payment">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Payment
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Record New Payment</DialogTitle>
                        <DialogDescription>
                          Add a payment entry for a contractor
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Contractor</label>
                          <select 
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            data-testid="select-contractor"
                          >
                            <option>Select contractor...</option>
                            {contractors.map(c => (
                              <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Amount (£)</label>
                          <input
                            type="number"
                            step="0.01"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="0.00"
                            data-testid="input-amount"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Description</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="Work completed on..."
                            data-testid="input-description"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Due Date</label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            data-testid="input-due-date"
                          />
                        </div>
                        <Button className="w-full" data-testid="button-save-payment">
                          Save Payment
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Contractor</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payments.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                            No payments recorded yet. Add your first payment to get started.
                          </TableCell>
                        </TableRow>
                      ) : (
                        payments.map((payment) => {
                          const contractor = contractors.find(c => c.id === payment.contractorId);
                          return (
                            <TableRow key={payment.id} data-testid={`payment-row-${payment.id}`}>
                              <TableCell className="font-medium">
                                {contractor?.name || 'Unknown'}
                              </TableCell>
                              <TableCell className="max-w-xs truncate">
                                {payment.description}
                              </TableCell>
                              <TableCell className="font-mono">
                                £{parseFloat(payment.amount).toFixed(2)}
                              </TableCell>
                              <TableCell>
                                {format(new Date(payment.dueDate), 'dd MMM yyyy')}
                              </TableCell>
                              <TableCell>
                                {getStatusBadge(payment.status)}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Invoices Tab */}
              <TabsContent value="invoices" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Generated Invoices</h3>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice #</TableHead>
                        <TableHead>Contractor</TableHead>
                        <TableHead>Period</TableHead>
                        <TableHead>Hours</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Due Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                            No invoices generated yet
                          </TableCell>
                        </TableRow>
                      ) : (
                        invoices.map((invoice) => (
                          <TableRow key={invoice.id} data-testid={`row-invoice-${invoice.id}`}>
                            <TableCell className="font-medium font-mono" data-testid={`text-invoice-number-${invoice.id}`}>
                              {invoice.invoiceNumber}
                            </TableCell>
                            <TableCell data-testid={`text-contractor-${invoice.id}`}>
                              {invoice.contractorName}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {format(new Date(invoice.periodStart), 'MMM d')} - {format(new Date(invoice.periodEnd), 'MMM d, yyyy')}
                            </TableCell>
                            <TableCell className="font-mono" data-testid={`text-hours-${invoice.id}`}>
                              {invoice.totalHours}h
                            </TableCell>
                            <TableCell className="font-semibold font-mono" data-testid={`text-total-${invoice.id}`}>
                              £{parseFloat(invoice.total).toFixed(2)}
                            </TableCell>
                            <TableCell data-testid={`badge-status-${invoice.id}`}>
                              {getStatusBadge(invoice.status)}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {format(new Date(invoice.dueDate), 'MMM d, yyyy')}
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Hours Tab */}
              <TabsContent value="hours" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Hour Logs</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button data-testid="button-add-hours">
                        <Plus className="h-4 w-4 mr-2" />
                        Log Hours
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Log Contractor Hours</DialogTitle>
                        <DialogDescription>
                          Record time worked by a contractor
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Contractor</label>
                          <select 
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            data-testid="select-contractor-hours"
                          >
                            <option>Select contractor...</option>
                            {contractors.map(c => (
                              <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Date</label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            data-testid="input-hour-date"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Hours Worked</label>
                          <input
                            type="number"
                            step="0.5"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="8.0"
                            data-testid="input-hours-worked"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Property Address</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="123 Student Street, Nottingham"
                            data-testid="input-property-address"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Work Description</label>
                          <textarea
                            rows={3}
                            className="w-full px-3 py-2 rounded-md border border-input bg-background resize-none"
                            placeholder="What work was completed?"
                            data-testid="input-work-description"
                          />
                        </div>
                        <Button className="w-full" data-testid="button-save-hours">
                          Save Hours
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Contractor</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Hours</TableHead>
                        <TableHead>Property</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hourLogs.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                            No hours logged yet. Start tracking contractor time.
                          </TableCell>
                        </TableRow>
                      ) : (
                        hourLogs.map((log) => {
                          const contractor = contractors.find(c => c.id === log.contractorId);
                          return (
                            <TableRow key={log.id} data-testid={`hour-log-row-${log.id}`}>
                              <TableCell className="font-medium">
                                {contractor?.name || 'Unknown'}
                              </TableCell>
                              <TableCell>
                                {format(new Date(log.date), 'dd MMM yyyy')}
                              </TableCell>
                              <TableCell className="font-mono">
                                {parseFloat(log.hours).toFixed(1)}h
                              </TableCell>
                              <TableCell className="max-w-xs truncate">
                                {log.propertyAddress}
                              </TableCell>
                              <TableCell className="max-w-xs truncate">
                                {log.description}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Maintenance Tab */}
              <TabsContent value="maintenance" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Maintenance Reports</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button data-testid="button-add-report">
                        <Plus className="h-4 w-4 mr-2" />
                        File Report
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>File Maintenance Report</DialogTitle>
                        <DialogDescription>
                          Report a maintenance issue at a property
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Property Address</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="123 Student Street, Nottingham"
                            data-testid="input-report-property"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Title</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="Leaking pipe in bathroom"
                            data-testid="input-report-title"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Description</label>
                          <textarea
                            rows={3}
                            className="w-full px-3 py-2 rounded-md border border-input bg-background resize-none"
                            placeholder="Detailed description of the issue..."
                            data-testid="input-report-description"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Priority</label>
                          <select 
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            data-testid="select-priority"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Reported By</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 rounded-md border border-input bg-background"
                            placeholder="Tenant name or property manager"
                            data-testid="input-reported-by"
                          />
                        </div>
                        <Button className="w-full" data-testid="button-save-report">
                          File Report
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Reported</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {maintenanceReports.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                            No maintenance reports yet. File your first report.
                          </TableCell>
                        </TableRow>
                      ) : (
                        maintenanceReports.map((report) => (
                          <TableRow key={report.id} data-testid={`report-row-${report.id}`}>
                            <TableCell className="max-w-xs truncate font-medium">
                              {report.propertyAddress}
                            </TableCell>
                            <TableCell className="max-w-xs">
                              <div className="font-medium">{report.title}</div>
                              <div className="text-sm text-muted-foreground truncate">
                                {report.description}
                              </div>
                            </TableCell>
                            <TableCell>
                              {getPriorityBadge(report.priority)}
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(report.status)}
                            </TableCell>
                            <TableCell>
                              {format(new Date(report.createdAt), 'dd MMM')}
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* AI Email Tab */}
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-chart-3" />
                    <h3 className="text-lg font-semibold">AI Email Assistant</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Paste an email you received and get an AI-generated professional response instantly.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Incoming Email</label>
                    <Textarea
                      placeholder="Paste the email you received here..."
                      value={emailContext}
                      onChange={(e) => setEmailContext(e.target.value)}
                      className="min-h-[300px] resize-none"
                      data-testid="textarea-email-input"
                    />
                    <Button
                      onClick={handleGenerateResponse}
                      disabled={emailMutation.isPending || !emailContext.trim()}
                      className="w-full"
                      data-testid="button-generate-response"
                    >
                      {emailMutation.isPending ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 mr-2" />
                          Generate Response
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">AI-Generated Response</label>
                      {aiResponse && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCopyResponse}
                          data-testid="button-copy-response"
                        >
                          <Copy className="w-3 h-3 mr-2" />
                          Copy
                        </Button>
                      )}
                    </div>
                    <div className="min-h-[300px] rounded-md border bg-muted/30 p-4">
                      {aiResponse ? (
                        <p className="text-sm whitespace-pre-wrap" data-testid="text-ai-response">
                          {aiResponse}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground italic">
                          Your AI-generated response will appear here...
                        </p>
                      )}
                    </div>
                    {aiResponse && (
                      <div className="flex items-start gap-2 p-3 rounded-md bg-chart-3/10 border border-chart-3/20">
                        <Sparkles className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">
                          AI-generated response based on your business context. Review and customise before sending.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Case Study Info */}
        <Card className="mt-8 border-chart-4/30 bg-gradient-to-br from-chart-4/5 to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-chart-4" />
              Real Results
            </CardTitle>
            <CardDescription>
              How this system transforms property management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Time Saved</div>
                <div className="text-2xl font-bold font-mono text-chart-4">4.75 hrs/week</div>
                <p className="text-sm text-muted-foreground">
                  From spreadsheets to dashboard
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Error Reduction</div>
                <div className="text-2xl font-bold font-mono text-chart-4">100%</div>
                <p className="text-sm text-muted-foreground">
                  Single source of truth
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Cost Savings</div>
                <div className="text-2xl font-bold font-mono text-chart-4">~£600/mo</div>
                <p className="text-sm text-muted-foreground">
                  vs. enterprise software
                </p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground italic">
                "I used to spend every Friday afternoon updating spreadsheets and chasing contractors. Now it takes me 15 minutes to review everything in one dashboard. Game-changer for our student property portfolio."
              </p>
              <p className="text-sm font-medium mt-2">— Property Developer, Nottingham</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
