import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-variants";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroScreenshot from "@/assets/phoyo2.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 py-24 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
         

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-glow"
          >
            Build faster with an{" "}
            <span className="gradient-text">AI-powered</span>
            <br />
            Financial Social Operation System
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            TradoGate is a Financial Social Operation System that helps you build a financtial identity, consume market reallity and learn from real decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/signup">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="heroOutline" size="xl">
                <Play className="h-5 w-5" />
                See Documentation
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="heroOutline" size="xl">
                View Pricing
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-muted-foreground"
          >
           No credit card required
          </motion.p>
        </div>

        {/* Hero Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="relative gradient-border p-1 rounded-2xl glow-primary">
            <div className="absolute inset-0 gradient-primary opacity-10 rounded-2xl" />
            <img
              src={heroScreenshot}
              alt="TradoGate Code Editor"
              className="relative rounded-xl w-full shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}