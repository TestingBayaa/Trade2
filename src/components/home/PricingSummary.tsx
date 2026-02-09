import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individual developers",
    features: [
      "AI code completion",
      "Unlimited projects",
      "Basic extensions",
      "Community support",
    ],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "For professional developers",
    features: [
      "Everything in Free",
      "Advanced AI features",
      "Priority support",
      "Team collaboration",
      "Custom themes",
    ],
    cta: "Start Free Trial",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Team",
    price: "$40",
    period: "/user/month",
    description: "For growing teams",
    features: [
      "Everything in Pro",
      "Admin dashboard",
      "SSO integration",
      "Audit logs",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
  },
];

export function PricingSummary() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary mb-4"
          >
            PRICING
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Simple, <span className="gradient-text">transparent</span> pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Start free and upgrade as you grow. No hidden fees.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/pricing" className="mt-8 block">
                <Button variant={plan.variant} className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            See all features and compare plans
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}