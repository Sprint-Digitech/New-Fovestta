import { useState } from "react";
import { 
  ChevronDown, HelpCircle, ShieldCheck, Zap, 
  Database, CreditCard, MessageCircle, Search, IndianRupee 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqData = [
  {
    category: "TDS & Payroll",
    questions: [
      {
        q: "How does Fovestta™ handle TDS calculation in payroll?",
        a: "Fovestta™ automatically calculates TDS (Tax Deducted at Source) on payroll transactions as per current Indian tax code. It supports TDS computation, Form 16 generation, and generates necessary reports for tax compliance.",
      },
      {
        q: "Is Fovestta™ compliant with EPF and ESI regulations?",
        a: "Yes, Fovestta is fully compliant with EPF (Employee Provident Fund) and ESI (Employee State Insurance) regulations across all states in India.",
      },
      {
        q: "How are different state tax rules handled?",
        a: "Fovestta automatically applies state-specific tax rules based on employee location and company registration.",
      },
    ],
  },
  {
    category: "Compliance & Regulations",
    questions: [
      {
        q: "Is Fovestta™ DPDP Act compliant?",
        a: "Yes, Fovestta is fully compliant with India's Digital Personal Data Protection (DPDP) Act.",
      },
      {
        q: "What certifications does Fovestta™ have?",
        a: "Fovestta holds ISO 27001, SOC 2 Type II, and GDPR compliance certifications.",
      },
      {
        q: "How does Fovestta™ handle labor law compliance across states?",
        a: "Our platform automatically updates with multi-state labor law requirements and ensures compliance across all Indian states.",
      },
    ],
  },
  {
    category: "Implementation & Support",
    questions: [
      {
        q: "How long does it take to implement Fovestta™?",
        a: "Average implementation time is 15 days for standard configurations.",
      },
      {
        q: "Do you offer support in local languages?",
        a: "Yes, we offer support in multiple Indian regional languages.",
      },
      {
        q: "What if we have custom compliance requirements?",
        a: "Our Enterprise plan includes custom compliance configuration support.",
      },
    ],
  },
  {
    category: "Integration & Data",
    questions: [
      {
        q: "Can Fovestta™ integrate with our existing bank systems?",
        a: "Yes, Fovestta integrates with all major Indian banks for salary disbursement.",
      },
      {
        q: "How is employee data protected and backed up?",
        a: "We use bank-grade 256-bit SSL encryption and maintain automated daily backups.",
      },
      {
        q: "Can we export data from Fovestta™?",
        a: "Yes, you can export all your data in multiple formats including CSV, Excel, and PDF.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and any prorated differences will be automatically applied." },
      { q: "What is the one-time setup charge for?", a: "The ₹10,000 one-time setup charge covers complete onboarding assistance. Our team will help you configure payroll, establish compliance rules, import existing employee data, and train your HR team." },
      { q: "How is pricing calculated?", a: "Pricing is calculated per employee per month, with a tiered structure. For the first 50 employees, you pay the base rate. For any employees beyond 50, you pay a discounted rate. The system automatically adjusts your bill based on active employee counts." },
      { q: "What happens if I add or remove employees?", a: "Your monthly billing automatically adjusts based on your active headcount. If you add or remove employees mid-month, your next invoice will reflect the prorated changes. You only pay for active employees." },
      { q: "Do you offer discounts for annual billing?", a: "Yes, we offer custom discounts for annual upfront commitments. Please contact our sales team to discuss the best pricing for your organization's long-term needs." },
      { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial that gives you full access to all features so you can thoroughly evaluate the platform. No credit card is required to start the trial." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, UPI, and net banking for monthly subscriptions. For annual enterprise plans, we also accept bank transfers (NEFT/RTGS)." },
    ],
  },
  {
    category: "Support & Ticketing",
    questions: [
      { q: "How quickly will I get a response?", a: "Response time depends on priority level. High priority issues get a response within 1-4 hours, while low priority issues typically get responses within 24-48 hours." },
      { q: "What information should I include in my ticket?", a: "Include a clear subject, detailed description of the issue, steps to reproduce, any error messages, and your Fovestta user ID. Screenshots are helpful too!" },
      { q: "Can I attach files to my support ticket?", a: "Please describe your issue in the description field. For sensitive files, our support team will provide secure upload options after your ticket is created." },
      { q: "Is support available on weekends?", a: "Standard support is available Monday-Friday, 9 AM - 6 PM IST. High priority critical issues are handled 24/7." }
    ]
  }
];

const categoryIcons: Record<string, any> = {
  "TDS & Payroll": IndianRupee,
  "Compliance & Regulations": ShieldCheck,
  "Implementation & Support": Zap,
  "Integration & Data": Database,
  "Pricing & Billing": CreditCard,
  "Support & Ticketing": MessageCircle
};



export function FAQSection() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestion(openQuestion === key ? null : key);
  };

  return (
    <section className="relative py-24 bg-[#fafbfe] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -ml-64 -mb-64"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 lg:px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[14px] font-bold mb-6 border border-purple-100 uppercase tracking-widest"
          >
            <HelpCircle className="w-4 h-4" />
            Support Center
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] lg:text-[56px] font-bold text-gray-900 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Frequently Asked <span className="text-gray-300">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[20px] text-gray-500 font-medium max-w-2xl mx-auto"
          >
            Find answers to compliance, payroll, and implementation questions to help you get started with Fovestta™.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Categories Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            {faqData.map((category, idx) => {
              const Icon = categoryIcons[category.category] || HelpCircle;
              const isActive = openCategory === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => toggleCategory(idx)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                    isActive 
                      ? "bg-white border-purple-200 shadow-[0_10px_30px_rgba(107,70,255,0.06)] ring-1 ring-purple-100" 
                      : "bg-gray-50/50 border-transparent hover:border-gray-200"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${isActive ? "bg-purple-600 text-white" : "bg-white text-gray-400 border border-gray-100"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[17px] font-bold ${isActive ? "text-gray-900" : "text-gray-500"}`}>
                    {category.category}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Questions Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {openCategory !== null && (
                <motion.div
                  key={openCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="mb-6 pb-4 border-b border-gray-100">
                    <h3 className="text-[24px] font-bold text-gray-900">{faqData[openCategory].category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {faqData[openCategory].questions.map((item, qIdx) => {
                      const isQOpen = openQuestion === `${openCategory}-${qIdx}`;
                      return (
                        <div 
                          key={qIdx} 
                          className={`rounded-2xl border transition-all overflow-hidden ${
                            isQOpen ? "bg-white border-purple-100 shadow-sm" : "bg-white border-gray-100 hover:border-gray-200"
                          }`}
                        >
                          <button
                            onClick={() => toggleQuestion(openCategory, qIdx)}
                            className="w-full flex items-start justify-between p-6 text-left"
                          >
                            <span className="text-[17px] font-bold text-gray-900 pr-8">{item.q}</span>
                            <div className={`mt-1 p-1 rounded-lg transition-colors ${isQOpen ? "bg-purple-100 text-purple-600" : "bg-gray-50 text-gray-400"}`}>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isQOpen ? "rotate-180" : ""}`} />
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isQOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-6 text-[16px] font-medium text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Help CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[40px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-3xl bg-purple-100 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-gray-900 mb-1">Still have questions?</h3>
              <p className="text-[16px] font-medium text-gray-500">Our team of HR experts is ready to assist you.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#support" 
              className="px-8 py-4 bg-[#6B46FF] text-white font-bold rounded-xl shadow-lg shadow-purple-100 hover:bg-indigo-700 transition-all"
            >
              Contact Support
            </a>
            <a 
              href="/request-demo" 
              className="px-8 py-4 bg-gray-50 text-gray-900 font-bold rounded-xl border border-gray-200 hover:bg-gray-100 transition-all"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
