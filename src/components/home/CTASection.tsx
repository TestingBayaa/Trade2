import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to build{" "}
            <span className="gradient-text">faster</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of developers who have already made the switch. 
            Start free, upgrade when you're ready.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="heroOutline" size="xl">
                Read the Docs
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}