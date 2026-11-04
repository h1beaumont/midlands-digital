import { Shield, Lock, CheckCircle2, Server, Key, AlertTriangle, FileCheck, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";

export default function Security() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data transmissions are encrypted using industry-standard TLS 1.3 protocols. Your data is protected at rest and in transit."
    },
    {
      icon: Server,
      title: "UK/EU Data Residency",
      description: "Your data never leaves the UK/EU. We use data centres in London and Frankfurt for complete GDPR compliance."
    },
    {
      icon: UserCheck,
      title: "Human-in-the-Loop",
      description: "Critical AI outputs always require human approval before execution. You maintain complete control."
    },
    {
      icon: FileCheck,
      title: "Full Audit Trail",
      description: "Every AI action is logged with timestamps and user attribution for complete transparency and compliance."
    },
    {
      icon: Key,
      title: "Zero Vendor Lock-in",
      description: "You own all IP, workflows, and prompts. Export everything at any time. Our goal is your independence."
    },
    {
      icon: AlertTriangle,
      title: "Rollback Protection",
      description: "Instant rollback capability for any automation. If something doesn't work, we can revert immediately."
    }
  ];

  const complianceStandards = [
    "GDPR Compliant",
    "ICO Registered",
    "Cyber Essentials Ready",
    "SOC 2 Aligned Practices"
  ];

  return (
    <>
      <SEOHead
        title="Security & Data Protection | Midlands Digital"
        description="Enterprise-grade security for SMEs. UK data residency, GDPR compliance, full audit trails, and zero vendor lock-in. Your data, your control."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
        
        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 px-4 py-1">Enterprise Security for SMEs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Data. Your Control.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-chart-2 to-chart-3">
                Always.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We handle your data with the same security standards as enterprise corporations, 
              but without the complexity or cost. Full transparency, complete control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Security-First Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of our platform is designed with security, privacy, and your peace of mind at the forefront.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <Card className="h-full hover-elevate">
                  <CardHeader>
                    <feature.icon className="w-10 h-10 text-chart-4 mb-3" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="border-2 border-chart-4">
              <CardHeader className="text-center">
                <Shield className="w-16 h-16 text-chart-4 mx-auto mb-4" />
                <CardTitle className="text-2xl md:text-3xl">Compliance & Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap justify-center gap-3">
                  {complianceStandards.map(standard => (
                    <Badge 
                      key={standard}
                      className="px-4 py-2 text-sm"
                      variant="outline"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {standard}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Industry-Specific Compliance</h3>
                    <p className="text-muted-foreground">
                      We adapt to your industry's specific requirements. Whether you're in healthcare (NHS standards), 
                      finance (FCA guidelines), or manufacturing (ISO compliance), we ensure your AI automations 
                      meet all regulatory requirements.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Regular Security Audits</h3>
                    <p className="text-muted-foreground">
                      Our systems undergo quarterly security reviews and annual third-party penetration testing. 
                      All findings are addressed within 30 days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Data Ownership Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
              Complete Data Ownership
            </h2>
            
            <Card className="bg-chart-4/5 border-chart-4">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">What You Own:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                      <span>All automation workflows and their configurations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                      <span>Every AI prompt and its iterations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                      <span>All generated content and outputs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                      <span>Complete documentation and training materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                      <span>Full export capability at any time</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-center font-medium">
                    Our goal is to make you self-sufficient. After the handover phase, 
                    you can run everything independently or continue with our support—your choice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-semibold mb-4">
              Security Questions? We're Transparent.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a call to discuss your specific security requirements. 
              We'll walk through our security measures in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#contact">
                  Book Your Free, No-Obligation Security Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/privacy">
                  Read Privacy Policy
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}