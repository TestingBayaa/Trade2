import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button-variants";
import { Check, X, HelpCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for getting started",
    features: {
      "AI code completion": true,
      "Unlimited projects": true,
      "Basic extensions": true,
      "Community support": true,
      "Advanced AI features": false,
      "Priority support": false,
      "Team collaboration": false,
      "Custom themes": false,
      "Admin dashboard": false,
      "SSO integration": false,
      "Audit logs": false,
      "Dedicated support": false,
    },
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    monthlyPrice: 20,
    yearlyPrice: 16,
    description: "For professional developers",
    features: {
      "AI code completion": true,
      "Unlimited projects": true,
      "Basic extensions": true,
      "Community support": true,
      "Advanced AI features": true,
      "Priority support": true,
      "Team collaboration": true,
      "Custom themes": true,
      "Admin dashboard": false,
      "SSO integration": false,
      "Audit logs": false,
      "Dedicated support": false,
    },
    cta: "Start Free Trial",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Elite",
    monthlyPrice: 99,
    yearlyPrice: 32,
    description: "For growing teams",
    features: {
      "AI code completion": true,
      "Unlimited projects": true,
      "Basic extensions": true,
      "Community support": true,
      "Advanced AI features": true,
      "Priority support": true,
      "Team collaboration": true,
      "Custom themes": true,
      "Admin dashboard": true,
      "SSO integration": true,
      "Audit logs": true,
      "Dedicated support": true,
    },
    cta: "Contact Sales",
    variant: "outline" as const,
  },{
    name: "Institutional",
    monthlyPrice: 40,
    yearlyPrice: 32,
    description: "For growing teams",
    features: {
      "AI code completion": true,
      "Unlimited projects": true,
      "Basic extensions": true,
      "Community support": true,
      "Advanced AI features": true,
      "Priority support": true,
      "Team collaboration": true,
      "Custom themes": true,
      "Admin dashboard": true,
      "SSO integration": true,
      "Audit logs": true,
      "Dedicated support": true,
    },
    cta: "Contact Sales",
    variant: "outline" as const,
  },
];

const featureDescriptions: Record<string, string> = {
  "AI code completion": "Smart code suggestions powered by AI",
  "Unlimited projects": "Create as many projects as you need",
  "Basic extensions": "Access to essential editor extensions",
  "Community support": "Get help from our community forums",
  "Advanced AI features": "Chat, refactoring, and code generation",
  "Priority support": "Faster response times from our team",
  "Team collaboration": "Real-time collaboration with teammates",
  "Custom themes": "Create and share custom editor themes",
  "Admin dashboard": "Manage team members and permissions",
  "SSO integration": "Single sign-on with your identity provider",
  "Audit logs": "Track team activity and changes",
  "Dedicated support": "Direct line to our support team",
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Simple, <span className="gradient-text">transparent</span> pricing
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Start free and upgrade as your needs grow. No hidden fees, no surprises.
              </p>

              {/* Billing Toggle */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <span className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                  Monthly
                </span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                <span className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                  Yearly
                  <span className="ml-2 text-xs text-accent font-medium">Save 20%</span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-xl border ${
                    plan.popular
                      ? "border-primary bg-card glow-primary"
                      : "border-border bg-card/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-medium rounded-full gradient-primary text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {plan.name === "Team" && (
                    <p className="text-sm text-muted-foreground">per user</p>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                  <Link to="/signup" className="mt-6 block">
                    <Button variant={plan.variant} className="w-full">
                      {plan.cta}
                    </Button>
                  </Link>

                  <ul className="mt-8 space-y-3">
                    {Object.entries(plan.features).map(([feature, included]) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        {included ? (
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={included ? "" : "text-muted-foreground/50"}>
                          {feature}
                        </span>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-3 w-3 text-muted-foreground/50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{featureDescriptions[feature]}</p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ or additional info */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">Have questions?</h2>
              <p className="mt-4 text-muted-foreground">
                We're here to help. Contact our sales team for custom enterprise pricing 
                or any questions about our plans.
              </p>
              <Link to="/contact" className="mt-6 inline-block">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}