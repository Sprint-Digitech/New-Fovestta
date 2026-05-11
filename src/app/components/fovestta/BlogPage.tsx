import { motion } from "motion/react";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { PremiumBackground } from "./PremiumBackground";

const blogs = [
  {
    title: "Top 10 HR Trends in 2026 for Indian Companies",
    slug: "top-10-hr-trends-2026-india",
    excerpt: "Discover the major shifts in the Indian HR landscape driven by AI, hybrid work evolution, and new labor regulations.",
    category: "Trends",
    date: "May 11, 2026",
    author: "Elena Rodriguez",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&q=80"
  },
  {
    title: "How to Reduce Payroll Processing Time by 80%",
    slug: "reduce-payroll-processing-time-80",
    excerpt: "Learn how to automate attendance, investment declarations, and statutory calculations to transform your payroll operations.",
    category: "Efficiency",
    date: "May 10, 2026",
    author: "Rahul Sharma",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop&q=80"
  },
  {
    title: "DPDP Act: What HR Teams Need to Know",
    slug: "dpdp-act-hr-guide",
    excerpt: "A comprehensive guide for HR departments to navigate India's new Digital Personal Data Protection regulations.",
    category: "Compliance",
    date: "May 09, 2026",
    author: "Sarah Chen",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
  }
];

export function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fafbfe] pt-32 pb-20">
      <PremiumBackground variant="luxury" />
      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 mb-6">
            <span className="text-[#7C3AED] text-sm font-bold tracking-widest uppercase">Fovestta Insights</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Latest from our <span className="bg-gradient-to-r from-[#6B46FF] to-[#3B82F6] bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, strategies, and industry news to help you build a better workplace.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(107,70,255,0.2)] transition-all duration-500 border border-gray-100 flex flex-col"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
            >
              <div className="relative h-[240px] overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#6B46FF] uppercase tracking-wider shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#6B46FF] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-400 font-medium mb-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${blog.slug}`} className="flex items-center gap-2 text-[#6B46FF] font-bold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
