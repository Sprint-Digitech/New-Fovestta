import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, Check, Twitter, Send, ArrowRight } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";

const articlesData: Record<string, any> = {
  "future-of-hr-automation-2026": {
    title: "The Future of HR Automation in 2026",
    category: "Technology",
    date: "May 12, 2026",
    author: "Elena Rodriguez",
    role: "Head of Product Strategy",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&q=80",
    content: `
      <h2>The Shift from Spreadsheets to Intelligence</h2>
      <p>As we navigate through 2026, the landscape of Human Resources is experiencing a tectonic shift. What was once a department bogged down by endless administrative tasks—payroll processing, manual compliance checks, and spreadsheet-driven tracking—has now evolved into a strategic powerhouse, largely thanks to advancements in AI and automation.</p>
      
      <h3>1. Predictive Payroll Analytics</h3>
      <p>Traditional payroll software told you what happened last month. Today's HRMS platforms, like Fovestta™, tell you what's going to happen next quarter. Machine learning algorithms now predict overtime costs, highlight potential compensation anomalies, and automatically adjust for multi-state tax regulations in real-time before errors occur.</p>
      
      <h3>2. Automated Compliance Mapping</h3>
      <p>In India's complex regulatory environment, staying compliant with EPF, ESI, and TDS used to require dedicated teams. Now, automation engines track regulatory changes dynamically. When a new labor law is passed, the system automatically audits current policies and suggests necessary workflow adjustments, transforming compliance from a reactive scramble into a proactive strategy.</p>
      
      <h3>3. The Human-AI Synergy</h3>
      <p>The fear that "AI will replace HR" has been thoroughly debunked. Instead, automation has eliminated the mundane, freeing HR professionals to focus on what truly matters: human connection. With the operational burden lifted, HR teams are re-channeling their energy into culture building, talent development, and strategic workforce planning.</p>
      
      <blockquote>"Automation isn't about removing humans from HR. It's about removing the robot from the human."</blockquote>
      
      <p>The organizations that will win the talent war in the coming years aren't those with the biggest HR teams, but those with the smartest HR tech stacks. By embracing automation, companies can ensure zero-error operations while delivering a premium employee experience.</p>
    `
  },
  "mastering-indian-compliance": {
    title: "Mastering Indian Compliance Updates",
    category: "Compliance",
    date: "May 08, 2026",
    author: "Rahul Sharma",
    role: "Chief Compliance Officer",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&q=80",
    content: `
      <h2>Navigating the DPDP Act and Beyond</h2>
      <p>India's regulatory framework for workforce management and data privacy is evolving at a breakneck pace. For HR leaders and business owners, staying compliant is no longer just about avoiding penalties; it's about building trust with your workforce. The recent implementation of the Digital Personal Data Protection (DPDP) Act has entirely changed how employee data must be handled.</p>
      
      <h3>Understanding the DPDP Impact on HR</h3>
      <p>Employee data—from salaries and bank details to performance reviews—constitutes highly sensitive personal information. Under the new regulations, explicit consent management, data minimization, and secure storage are mandatory.</p>
      <ul>
        <li><strong>Consent is King:</strong> You can no longer rely on blanket employment contracts for data processing. Granular consent mechanisms for specific data uses are now required.</li>
        <li><strong>Right to Erasure:</strong> Establishing protocols for deleting data when an employee leaves (while balancing statutory retention laws) is critical.</li>
        <li><strong>Breach Notifications:</strong> Strict timelines for reporting data breaches mean your HRMS must have robust, real-time security monitoring.</li>
      </ul>
      
      <h3>Streamlining Statutory Deductions</h3>
      <p>Beyond data privacy, standardizing PF, ESI, PT, and TDS calculations across different states remains a massive hurdle for scaling companies. Manual calculations almost guarantee errors, leading to severe departmental notices.</p>
      
      <p>Modern platforms address this by centralizing the rule engine. When a professional tax slab changes in Maharashtra, the system should instantly update the payroll run for all employees in that state without manual intervention.</p>
      
      <h3>The Path Forward</h3>
      <p>To master compliance in 2026, organizations must move away from decentralized, spreadsheet-based management. Adopting an ISO 27001 certified, DPDP-compliant HRMS is the only sustainable way to protect your organization and your employees' privacy.</p>
    `
  },
  "building-culture-of-feedback": {
    title: "Building a Culture of Feedback",
    category: "Culture",
    date: "May 03, 2026",
    author: "Sarah Chen",
    role: "VP of People Operations",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80",
    content: `
      <h2>Why the Annual Review is Dead</h2>
      <p>For decades, the corporate world relied on the annual performance review—a high-stress, often biased, and generally ineffective ritual. By the time feedback was delivered, the context was lost, and the opportunity for course correction had long passed. In today's agile work environment, employees don't just want continuous feedback; they require it to thrive.</p>
      
      <h3>The Shift to Continuous Performance Management</h3>
      <p>Modern organizations are replacing the annual review with a culture of continuous, real-time feedback. This transition isn't just a change in schedule; it's a fundamental shift in management philosophy.</p>
      
      <h3>Key Pillars of a Feedback Culture</h3>
      <ul>
        <li><strong>Psychological Safety:</strong> Employees must feel safe to give and receive feedback without fear of retaliation. Feedback should be viewed as a tool for growth, not a weapon for punishment.</li>
        <li><strong>360-Degree Visibility:</strong> Feedback shouldn't just flow top-down. Peer-to-peer recognition and upward feedback to managers are equally crucial for a holistic view of team dynamics.</li>
        <li><strong>Actionable Insights:</strong> "You need to be more proactive" is poor feedback. "When you didn't flag the project delay on Tuesday, it affected the client delivery" is actionable.</li>
      </ul>
      
      <h3>Leveraging Technology</h3>
      <p>Implementing continuous feedback at scale requires the right tools. Modern HR platforms facilitate instant peer recognition, weekly check-in forms, and goal-tracking dashboards. This creates a digital trail of an employee's achievements and challenges throughout the year, removing recency bias when it comes time for compensation adjustments.</p>
      
      <p>Ultimately, a strong feedback culture drives retention. When employees feel heard, recognized, and guided, they don't just stay—they excel.</p>
    `
  }
};

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
  const { slug } = useParams();
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
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article?.title)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareToWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent((article?.title || "") + " " + window.location.href)}`;
    window.open(url, "_blank");
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-[#fafbfe] pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="px-8 py-3.5 bg-[#8B5CF6] text-white font-bold rounded-xl hover:bg-[#7C3AED] transition-colors">
          Back to Blog
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
      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10 mb-8 print:hidden">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#6B46FF] font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-purple-100 text-[#6B46FF] rounded-full text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between border-y border-gray-200 py-6">
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
          className="mb-14 rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(107,70,255,0.15)] border border-white/50 relative group cursor-pointer"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B46FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-auto max-h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" 
            style={{ transform: "translateZ(-10px)" }}
          />
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-2xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#6B46FF] prose-li:text-gray-600 prose-blockquote:border-l-[#6B46FF] prose-blockquote:bg-purple-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#4C1D95] prose-blockquote:font-medium prose-blockquote:italic print:prose-p:text-black print:prose-headings:text-black"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Footer CTA with 3D Card Effect */}
        <motion.div 
          whileHover={{ y: -5, rotateX: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mt-24 p-12 bg-gradient-to-br from-[#8B5CF6] via-[#6B46FF] to-[#4F46E5] rounded-[48px] text-center text-white shadow-[0_40px_80px_-20px_rgba(107,70,255,0.4)] relative overflow-hidden print:hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Ready to transform your HR?</h3>
            <p className="text-purple-100 font-medium mb-10 max-w-xl mx-auto text-xl leading-relaxed">
              Join thousands of modern organizations using Fovestta to automate payroll, compliance, and culture building.
            </p>
            <Link to="/request-demo" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#6B46FF] font-bold rounded-2xl shadow-xl hover:bg-gray-50 transition-all hover:scale-105 group">
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
