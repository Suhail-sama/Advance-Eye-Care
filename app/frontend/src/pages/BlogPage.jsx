import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Eye Health",
    "LASIK",
    "Pediatric Care",
    "Lifestyle",
    "Technology",
  ];

  const articles = [
    {
      id: 1,
      title: "10 Signs You Need an Eye Exam",
      excerpt:
        "Discover the warning signs that indicate it's time to schedule a comprehensive eye examination with an ophthalmologist.",
      image:
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop",
      category: "Eye Health",
      author: "Dr. Sarah Mitchell",
      date: "Dec 5, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Understanding LASIK: What to Expect",
      excerpt:
        "A comprehensive guide to LASIK surgery, from consultation to recovery, and everything in between.",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
      category: "LASIK",
      author: "Dr. James Anderson",
      date: "Dec 3, 2025",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Protecting Your Child's Vision",
      excerpt:
        "Essential tips for parents on maintaining and protecting their children's eye health from an early age.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
      category: "Pediatric Care",
      author: "Dr. Emily Rodriguez",
      date: "Nov 28, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Blue Light: Friend or Foe?",
      excerpt:
        "Learn about the effects of blue light from digital devices and how to protect your eyes in the digital age.",
      image:
        "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&h=600&fit=crop",
      category: "Lifestyle",
      author: "Dr. Sarah Mitchell",
      date: "Nov 25, 2025",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Dry Eyes: Causes and Solutions",
      excerpt:
        "Comprehensive guide to understanding, preventing, and treating dry eye syndrome with modern treatments.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      category: "Eye Health",
      author: "Dr. James Anderson",
      date: "Nov 20, 2025",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Latest Advances in Cataract Surgery",
      excerpt:
        "Explore the cutting-edge technology and techniques revolutionizing cataract surgery outcomes.",
      image:
        "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop",
      category: "Technology",
      author: "Dr. Sarah Mitchell",
      date: "Nov 15, 2025",
      readTime: "9 min read",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-linear-to-br from-teal-600 via-cyan-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Eye Care Insights</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Eye Care Blog</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
            Expert advice, latest research, and practical tips for maintaining
            healthy vision
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white dark:bg-slate-900 border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-linear-to-r from-teal-600 to-cyan-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-80 md:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-linear-to-r from-teal-600 to-cyan-600 text-white text-xs font-bold rounded-full mb-4 w-fit">
                  FEATURED
                </span>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Button className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors bg-white dark:bg-slate-900 h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
