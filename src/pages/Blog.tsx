import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const posts = [
  {
    title: "Introducing Tradogate: The Future of Financial Market Data",
    excerpt: "We're excited to announce Tradogate, our biggest release yet. With new AI features, improved performance, and a redesigned interface.",
    date: "Feb 09, 2026",
    readTime: "5 min read",
    author: "Alex Chen",
    category: "Financial Market Data",
    featured: true,
  },
  {
    title: "Best Practices for Team Collaboration in Tradogate",
    excerpt: "Learn how to set up your team for success with real-time collaboration, code reviews, and shared configurations.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    author: "Marcus Johnson",
    category: "Financial Market Data",
  },
  {
    title: "Building Custom Extensions for Tradogate",
    excerpt: "A comprehensive guide to building, testing, and publishing your own extensions for the TradoGate marketplace.",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    author: "Emily Rodriguez",
    category: "Financial Market Data",
  },
  {
    title: "Security Best Practices for Enterprise Teams in Tradogate",
    excerpt: "How to configure SSO, audit logs, and security policies to keep your organization's code safe.",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    author: "David Park",
    category: "Financial Market Data",
  },
  {
    title: "Performance Optimizations in the Latest Release of Tradogate",
    excerpt: "Under the hood: how we made Tradogate 40% faster with smart caching and lazy loading.",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    author: "Lisa Wang",
    category: "Financial Market Data",
  },
];

export default function Blog() {
  const [featuredPost, ...otherPosts] = posts;

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
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Product updates, engineering insights, and tutorials from the TradoGate team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                <Link to="#">{featuredPost.title}</Link>
              </h2>
              <p className="mt-4 text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link
                to="#"
                className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          </div>
        </section>

        {/* Other Posts */}
        <section className="pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}