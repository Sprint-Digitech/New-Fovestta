"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";

const articles = [
  {
    title: "Top 10 HR Trends in 2026 for Indian Companies",
    badge: "Article",
    slug: "top-10-hr-trends-2026-india",
    description: "Latest trends shaping HR management in India.",
  },
  {
    title: "How to Reduce Payroll Processing Time by 80%",
    badge: "Article",
    slug: "reduce-payroll-processing-time-80",
    description: "Practical strategies for HR efficiency.",
  },
  {
    title: "DPDP Act: What HR Teams Need to Know",
    badge: "Article",
    slug: "dpdp-act-hr-guide",
    description: "Understanding data protection regulations for HR.",
  },
  {
    title: "India's New Labour Codes: What Changed for Employers",
    badge: "Article",
    slug: "india-labour-codes-2025-explained",
    description: "What the four consolidated Labour Codes mean for HR.",
  },
  {
    title: "POSH Act Compliance: What Every Employer Needs in Place",
    badge: "Article",
    slug: "posh-act-compliance-guide",
    description: "The full compliance checklist beyond the Internal Committee.",
  },
  {
    title: "Professional Tax in India: A State-by-State Guide",
    badge: "Article",
    slug: "professional-tax-state-guide",
    description: "How PT rules and slabs vary by state for employers.",
  },
  {
    title: "EPF Withdrawal Rules Just Changed",
    badge: "Article",
    slug: "epf-withdrawal-rules-2026",
    description: "What HR teams need to know about the EPF Scheme, 2026.",
  }
];

function ArticleCard({ item }: { item: (typeof articles)[number] }) {
  const router = useRouter();

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
      <p className="text-[18px] text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
        {item.description}
      </p>
      <button
        onClick={() => router.push("/blog/" + item.slug)}
        className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-900 text-[16px] font-bold rounded-lg hover:bg-gray-50 transition-colors"
      >
        <BookOpen className="w-5 h-5" />
        Read More
      </button>
    </motion.div>
  );
}

export function ResourcesSection() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const waitlistEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(waitlistEmail);

  return (
    <section className="relative pt-24 lg:pt-28 pb-6 bg-[#FAFAFA]" id="resources">
      <div className="max-w-[90rem] mx-auto px-4 lg:px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[30px] font-bold text-gray-900 mb-4 tracking-tight">
              Resources & Academy
            </h2>
            <p className="text-[18px] text-gray-600 w-full mx-auto font-medium">
              Learn from HR experts and compliance specialists
            </p>
          </motion.div>
        </div>

        {/* Blog Articles */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2.5} />
            <h3 className="text-[22px] font-bold text-gray-900">Articles</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((item, idx) => (
              <ArticleCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#6B46FF] to-[#4F46E5] rounded-[24px] p-8 lg:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-lg mx-auto">
            {waitlistJoined ? (
              <>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">You&apos;re on the list!</h3>
                <p className="text-purple-100 font-medium">
                  We&apos;ll email new articles and compliance guides to {waitlistEmail} as soon as they&apos;re live.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Get new resources first</h3>
                <p className="text-purple-100 font-medium mb-8">
                  Join the waitlist to be notified when we publish new articles and compliance guides.
                </p>

                {showWaitlistForm ? (
                  <form
                    className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-center"
                    noValidate
                    onSubmit={(e) => {
                      e.preventDefault();
                      setWaitlistSubmitted(true);
                      if (waitlistEmailValid) {
                        setWaitlistJoined(true);
                      }
                    }}
                  >
                    <div className="flex-1 w-full sm:max-w-sm text-left">
                      <input
                        type="email"
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-white/95 border border-transparent rounded-xl text-gray-900 text-[16px] focus:ring-4 focus:ring-white/30 outline-none transition-all"
                      />
                      {waitlistSubmitted && !waitlistEmailValid && (
                        <p className="text-[12px] font-semibold text-red-200 mt-1.5 ml-1">
                          Enter a valid email address.
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-white text-[#6B46FF] font-bold rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all whitespace-nowrap"
                    >
                      Notify Me
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setShowWaitlistForm(true)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#6B46FF] font-bold rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all"
                  >
                    Join the Waitlist
                  </button>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}