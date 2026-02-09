import { motion } from "framer-motion";
import { 
  Zap, 
  Brain, 
  Code2, 
  GitBranch, 
  Terminal, 
  Palette, 
  Lock, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Build a Financial Identity",
    description: "Blanker with intelligent autocomplete.",
  },
  {
    icon: Zap,
    title: "Reality Stream",
    description: "Blank",
  },
  {
    icon: Code2,
    title: "TradeRooms",
    description: "First-class support for TypeScript, Python, Go, Rust, and 40+ languages out of the box.",
  },
  {
    icon: GitBranch,
    title: "Signal Marketplace",
    description: "Built-in source control with visual diff, branch management, and conflict resolution.",
  },
  {
    icon: Terminal,
    title: "AtumGate Terminal",
    description: "Invisble but Powerful",
  },
  {
    icon: Palette,
    title: "RiskWallet",
    description: "Prevents Self Destruction",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your identity stays private. Optional AI features with full control over data sharing.",
  },
  {
    icon: Globe,
    title: "Sim-to-Real Engine",
    description: "Sandbox trading with skin-in-the-game.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary mb-4"
          >
            FEATURES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Everything you need to{" "}
            <span className="gradient-text">code smarter</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            TradoGate combines powerful features with AI intelligence to help you 
            write better code, faster.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 gradient-primary-subtle opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              <div className="relative">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}