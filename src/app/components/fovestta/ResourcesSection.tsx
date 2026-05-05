import { motion } from "motion/react";
import { FileText, Video, BookOpen, Download } from "lucide-react";

const whitepapers = [
  {
    title: "India HRMS Compliance Checklist 2026",
    badge: "PDF",
    description: "Complete guide to TDS, EPF, ESI, IT compliance for HR teams.",
  },
  {
    title: "Digital Transformation in HR - Best Practices",
    badge: "PDF",
    description: "How leading companies have transformed HR with technology.",
  },
  {
    title: "Multi-State Payroll Compliance Guide",
    badge: "PDF",
    description: "Understanding varying payroll rules across Indian states.",
  }
];

const webinars = [
  {
    title: "TDS & Payroll Compliance: What You Need to Know",
    badge: "Recording",
    description: "Expert session on latest TDS rules and payroll impact.",
  },
  {
    title: "Scaling HR Operations Without Chaos",
    badge: "Recording",
    description: "Best practices for managing rapid workforce growth.",
  },
  {
    title: "Employee Experience: From Paper to Digital",
    badge: "Recording",
    description: "Building better employee experiences in the digital age.",
  }
];

const articles = [
  {
    title: "Top 10 HR Trends in 2026 for Indian Companies",
    badge: "Article",
    description: "Latest trends shaping HR management in India.",
  },
  {
    title: "How to Reduce Payroll Processing Time by 80%",
    badge: "Article",
    description: "Practical strategies for HR efficiency.",
  },
  {
    title: "DPDP Act: What HR Teams Need to Know",
    badge: "Article",
    description: "Understanding data protection regulations for HR.",
  }
];

function ResourceCard({ item }: { item: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[16px] border border-[#F3F4F6] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6 gap-4">
        <h3 className="text-[16px] font-bold text-gray-900 leading-tight">
          {item.title}
        </h3>
        <span className="px-2.5 py-1 bg-[#F5F3FF] text-[#7C3AED] text-[11px] font-bold rounded uppercase tracking-wider flex-shrink-0">
          {item.badge}
        </span>
      </div>
      <p className="text-[14px] text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
        {item.description}
      </p>
      <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-900 text-[14px] font-bold rounded-lg hover:bg-gray-50 transition-colors">
        <Download className="w-4 h-4" />
        Download
      </button>
    </motion.div>
  );
}

export function ResourcesSection() {
  return (
    <section className="relative py-16 bg-[#FAFAFA]" id="resources">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] font-bold text-gray-900 mb-4 tracking-tight">
              Resources & Academy
            </h2>
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto font-medium">
              Learn from HR experts, compliance specialists, and successful implementations
            </p>
          </motion.div>
        </div>

        {/* Whitepapers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2.5} />
            <h3 className="text-[22px] font-bold text-gray-900">Whitepapers</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whitepapers.map((item, idx) => (
              <ResourceCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Webinars */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2.5} />
            <h3 className="text-[22px] font-bold text-gray-900">Webinars</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {webinars.map((item, idx) => (
              <ResourceCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Blog Articles */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2.5} />
            <h3 className="text-[22px] font-bold text-gray-900">Blog Articles</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((item, idx) => (
              <ResourceCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Academy CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[24px] border border-[#F3F4F6] p-10 md:p-16 text-center max-w-[900px] mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <h3 className="text-[24px] font-bold text-gray-900 mb-4">
            Fovestta™ Academy (Coming Soon)
          </h3>
          <p className="text-[16px] text-gray-600 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
            Comprehensive online training program for HR professionals. Learn best practices, compliance strategies, and how to maximize Fovestta™.
          </p>
          <button className="w-full md:w-auto px-16 py-4 bg-[#8B5CF6] text-white text-[15px] font-bold rounded-lg shadow-sm hover:bg-[#7C3AED] transition-colors">
            Join the Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}
