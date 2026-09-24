"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, Check, Twitter, Send, ArrowRight } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";
import { articlesData } from "@/lib/blog-data";

const FloatingShape = ({ className, delay = 0 }: { className: string, delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full blur-[80px] opacity-20 ${className}`}
  />
);

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    // Triggering print which allows user to "Save as PDF"
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article?.title || "")}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareToWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent((article?.title || "") + " " + window.location.href)}`;
    window.open(url, "_blank");
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-[#fafbfe] pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link href="/" className="px-8 py-3.5 bg-[#8B5CF6] text-white font-bold rounded-xl hover:bg-[#7C3AED] transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfe] pt-28 pb-20 relative overflow-hidden">
      <PremiumBackground variant="luxury" />
      
      {/* Background 3D Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingShape className="top-[10%] -left-20 w-[400px] h-[400px] bg-purple-300" delay={0} />
        <FloatingShape className="top-[40%] -right-20 w-[500px] h-[500px] bg-blue-200" delay={2} />
        <FloatingShape className="bottom-[10%] left-[20%] w-[300px] h-[300px] bg-pink-100" delay={1} />
      </div>

      {/* Top Navigation Bar */}
      <div className="max-w-[90rem] mx-auto px-4 lg:px-4 relative z-10 mb-8 print:hidden">
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#6B46FF] font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>
      </div>

      <article className="max-w-[90rem] mx-auto px-4 lg:px-4 relative z-10">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-purple-100 text-[#6B46FF] rounded-full text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight text-center">
            {article.title}
          </h1>

          <div className="flex items-center justify-center gap-12 border-y border-gray-200 py-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6B46FF] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                {article.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-[16px]">{article.author}</h4>
                <p className="text-gray-500 text-[14px]">{article.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-2 text-gray-500 text-sm font-medium">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-3 border-l border-gray-200 pl-6 relative">
                <div className="relative">
                  <button 
                    onClick={handleShare}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#6B46FF] hover:border-purple-200 hover:bg-purple-50 transition-all shadow-sm"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {showShareMenu && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-full mb-4 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex flex-col gap-2 min-w-[160px] z-[100]"
                      >
                        <button onClick={shareToWhatsApp} className="flex items-center gap-3 px-4 py-2 hover:bg-green-50 text-gray-700 rounded-xl transition-colors">
                          <Send className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-bold">WhatsApp</span>
                        </button>
                        <button onClick={shareToTwitter} className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 text-gray-700 rounded-xl transition-colors">
                          <Twitter className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-bold">Twitter</span>
                        </button>
                        <button onClick={copyToClipboard} className="flex items-center gap-3 px-4 py-2 hover:bg-purple-50 text-gray-700 rounded-xl transition-colors">
                          {copied ? <Check className="w-4 h-4 text-purple-600" /> : <Share2 className="w-4 h-4 text-purple-600" />}
                          <span className="text-sm font-bold">{copied ? "Copied!" : "Copy Link"}</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button 
                  onClick={handleSave}
                  title="Download as PDF"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#6B46FF] hover:border-purple-200 hover:bg-purple-50 transition-all shadow-sm"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          whileHover={{ rotateY: 2, rotateX: -2, translateZ: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-14 max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(107,70,255,0.15)] border border-white/50 relative group cursor-pointer"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B46FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto max-h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            style={{ transform: "translateZ(-10px)" }}
          />
        </motion.div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#6B46FF] prose-li:text-gray-600 prose-blockquote:border-l-[#6B46FF] prose-blockquote:bg-purple-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#4C1D95] prose-blockquote:font-medium prose-blockquote:italic print:prose-p:text-black print:prose-headings:text-black"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Footer CTA with 3D Card Effect */}
        <motion.div 
          whileHover={{ y: -5, rotateX: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mt-24 p-12 bg-gradient-to-br from-[#8B5CF6] via-[#6B46FF] to-[#4F46E5] rounded-[48px] text-center text-white shadow-[0_40px_80px_-20px_rgba(107,70,255,0.4)] relative overflow-hidden print:hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to transform your HR?</h3>
            <p className="text-purple-100 font-medium mb-10 max-w-xl mx-auto text-xl leading-relaxed">
              Join thousands of modern organizations using Fovestta to automate payroll, compliance, and culture building.
            </p>
            <Link href="/request-demo" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#6B46FF] font-bold rounded-2xl shadow-xl hover:bg-gray-50 transition-all hover:scale-105 group">
              Book a Free Demo
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
