import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen, 
  Code2, 
  Rocket, 
  Settings, 
  Users, 
  Shield,
  ArrowRight 
} from "lucide-react";

const categories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Learn the basics and get up and running quickly",
    articles: [
      { title: "Quick Start Guide", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Your First Project", href: "#" },
    ],
  },
  {
    icon: Code2,
    title: "Editor Features",
    description: "Deep dive into Atumn",
    articles: [
      { title: "AI Code Completion", href: "#" },
      { title: "Keyboard Shortcuts", href: "#" },
      { title: "Extensions", href: "#" },
    ],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize Tradogate to your workflow",
    articles: [
      { title: "Settings Overview", href: "#" },
      { title: "Themes & Colors", href: "#" },
      { title: "Keybindings", href: "#" },
    ],
  },
  {
    icon: Users,
    title: "Team Collaboration in Tradogate",
    description: "Work together with your team",
    articles: [
      { title: "Sharing Projects", href: "#" },
      { title: "Real-time Editing", href: "#" },
      { title: "Team Management", href: "#" },
    ],
  },
  {
    icon: Shield,
    title: "Security in Tradogate",
    description: "Keep your code and data safe",
    articles: [
      { title: "Privacy Settings", href: "#" },
      { title: "SSO Configuration", href: "#" },
      { title: "Audit Logs", href: "#" },
    ],
  },
  {
    icon: BookOpen,
    title: "API Reference in Tradogate",
    description: "Build integrations and extensions",
    articles: [
      { title: "REST API", href: "#" },
      { title: "Extension API", href: "#" },
      { title: "Webhooks", href: "#" },
    ],
  },
];

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState("");

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
                <span className="gradient-text">Documentation</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                      Everything you need to know about Tradogate. Search our docs or browse by category.
              </p>

              {/* Search */}
              <div className="mt-8 relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card border-border"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article.title}>
                        <Link
                          to={article.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}