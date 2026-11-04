import { CheckCircle2, Clock, Mail, Calendar, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";

export default function ThankYou() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const nextSteps = [
    {
      step: 1,
      time: "Within 1 hour",
      icon: Mail,
      title: "Calendar Invite",
      description: "You'll receive a calendar invite from our team with a Zoom link and agenda"
    },
    {
      step: 2,
      time: "Within 24 hours",
      icon: Phone,
      title: "Confirmation Call",
      description: "We'll call to confirm your appointment and ask about your biggest automation opportunity"
    },
    {
      step: 3,
      time: "Day of Call",
      icon: Calendar,
      title: "Strategy Session",
      description: "45-minute deep dive into your business processes and AI opportunities"
    },
    {
      step: 4,
      time: "Same Day",
      icon: CheckCircle2,
      title: "Custom Proposal",
      description: "You'll receive a tailored proposal with ROI projections within 2 hours of our call"
    }
  ];

  return (
    <>
      <SEOHead
        title="Thank You - Next Steps | Midlands Digital"
        description="Your AI strategy call is being scheduled. Here's exactly what happens next."
      />
      <meta name="robots" content="noindex, follow" />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-4/10 via-transparent to-chart-3/10" />
        
        <div className="container mx-auto px-6 max-w-7xl relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-chart-4/20 flex items-center justify-center"
            >
              <CheckCircle2 className="w-10 h-10 text-chart-4" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thank You!
              <span className="block text-2xl md:text-3xl mt-2 text-muted-foreground font-normal">
                Your AI Strategy Call is Being Scheduled
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're excited to help transform your business with AI automation. 
              Here's exactly what happens next:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Badge className="mb-4">Your Journey Starts Now</Badge>
            <h2 className="text-3xl md:text-4xl font-semibold">What Happens Next</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {nextSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <Card className="h-full hover-elevate">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-chart-4" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          Step {item.step} • {item.time}
                        </Badge>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We'll Cover */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl">During Your Strategy Call, We'll Cover:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Your Current Workflows:</span> We'll identify your most time-consuming manual processes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Quick Win Opportunities:</span> Find 2-3 processes we can automate in Week 1
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">ROI Projection:</span> Calculate potential time and cost savings specific to your business
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Integration Check:</span> Ensure our AI can work with your existing tools
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-chart-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Two-Week Pilot Plan:</span> Outline exactly what we'll deliver in your pilot
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Meanwhile Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-semibold mb-8">
              Meanwhile, Explore These Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-chart-4 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Time Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    See how much time you could save
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/time-calculator">
                      Calculate Savings
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-chart-4 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Case Studies</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Real results from Midlands SMEs
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/work">
                      View Success Stories
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-chart-4 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">AI Readiness Quiz</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Assess your automation potential
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/ai-readiness-quiz">
                      Take Quiz
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <Card className="bg-chart-4/5 border-chart-4">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Need to Reach Us Sooner?</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                  <a 
                    href="tel:+441159999999" 
                    className="flex items-center gap-2 hover:text-chart-4 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">(0115) 999 9999</span>
                  </a>
                  <a 
                    href="mailto:harry@midlandsdigital.ai" 
                    className="flex items-center gap-2 hover:text-chart-4 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    harry@midlandsdigital.ai
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}