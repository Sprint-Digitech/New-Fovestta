"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, Video, BookOpen, Download, Asterisk } from "lucide-react";

const handleDownload = (title: string) => {
  let content = "";
  let fileName = title.toLowerCase().replace(/\s+/g, "-") + ".doc";

  if (title.includes("Compliance Checklist")) {
    content = `
Fovestta HRMS: INDIA HRMS COMPLIANCE CHECKLIST 2026
=====================================================

1. STATUTORY COMPLIANCE (CENTRAL)
----------------------------------
* EPF (Employees' Provident Fund):
  - Ensure monthly contributions (12% of basic) are deposited by 15th of the following month.
  - Periodic ECR (Electronic Challan-cum-Return) filing.
* ESI (Employee State Insurance):
  - Applicable for units with 10+ employees.
  - Monthly contribution (0.75% Employee, 3.25% Employer).
* TDS (Tax Deducted at Source):
  - Quarterly filing of Form 24Q.
  - Timely issuance of Form 16.

2. TAX COMPLIANCE (IT)
-----------------------
* New vs. Old Tax Regime evaluation for every employee.
* Investment declaration verification (80C, 80D, etc.).
* LTA and HRA exemption calculations based on verified proof.

3. DATA PRIVACY (DPDP ACT 2023)
-------------------------------
* Explicit consent for storing employee sensitive personal data.
* Data minimization: Collect only what is necessary for payroll.
* Right to correction and erasure protocols.

4. RECORD KEEPING
-----------------
* Maintain muster roll, wage register, and fine register as per Labor Laws.
* Digitized records must be backed up securely.
    `;
  } else if (title.includes("Digital Transformation")) {
    content = `
Fovestta HRMS WHITE PAPER: DIGITAL TRANSFORMATION IN HR
======================================================

1. THE SHIFT TO CLOUD-FIRST HR
------------------------------
Modern Indian organizations are moving away from legacy on-prem systems to secure, scalable cloud HRMS platforms.

2. KEY TRANSFORMATION PILLARS
-----------------------------
* Automation of Mundane Tasks: Reducing payroll processing time from 3 days to 3 hours.
* Employee Self-Service (ESS): Empowering employees to manage leaves, tax declarations, and payslips.
* AI-Driven Insights: Using predictive analytics to identify turnover risks and optimize workforce costs.

3. IMPLEMENTATION BEST PRACTICES
--------------------------------
* Data Migration: Cleanse legacy data before moving to new systems.
* User Adoption: Conduct phased training sessions for managers and employees.
* Integration: Ensure HRMS talks to your Finance/ERP software for seamless accounting.
    `;
  } else if (title.includes("Multi-State Payroll")) {
    content = `
Fovestta HRMS GUIDE: MULTI-STATE PAYROLL COMPLIANCE IN INDIA
============================================================

1. PROFESSIONAL TAX (PT) VARIATIONS
------------------------------------
* Karnataka: Flat slab based on gross salary.
* Maharashtra: Monthly vs. Bi-monthly filing requirements.
* Delhi/Haryana: Different PT structures or exemptions.

2. LWF (LABOR WELFARE FUND)
---------------------------
* Contribution frequencies vary from Half-yearly (e.g., Haryana) to Yearly.
* Slab rates differ significantly across states like Tamil Nadu, Gujarat, and Andhra Pradesh.

3. STATE-SPECIFIC HOLIDAYS & LEAVES
-----------------------------------
* Shops & Establishments Act: Each state has different rules for Earned Leave (EL) carry-forward and encashment.
* Regional Holidays: Managing state-mandated public holidays across distributed teams.

4. MINIMUM WAGES ACT
--------------------
* Ensuring compliance with state-notified minimum wages for different skill categories (Skilled, Semi-skilled, Unskilled).
    `;
  }

  const blob = new Blob([content], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/channel/UCw8feE-iKyZfvWC5JUnWO9A";

const whitepapers = [
  {
    title: "India HRMS Compliance Checklist 2026",
    badge: "DOC",
    description: "Complete guide to TDS, EPF, ESI, IT compliance for HR teams.",
  },
  {
    title: "Digital Transformation in HR - Best Practices",
    badge: "DOC",
    description: "How leading companies have transformed HR with technology.",
  },
  {
    title: "Multi-State Payroll Compliance Guide",
    badge: "DOC",
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
  }
];

function ResourceCard({ item }: { item: any }) {
  const router = useRouter();
  let buttonText = "Download";
  let Icon = Download;

  if (item.badge === "Article") {
    buttonText = "Read More";
    Icon = BookOpen;
  } else if (item.badge === "Recording") {
    buttonText = "Watch Video";
    Icon = Video;
  } else if (item.badge === "DOC") {
    buttonText = "Download";
  }

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
        onClick={() => {
          if (item.badge === "DOC") {
            handleDownload(item.title);
          } else if (item.badge === "Article") {
            router.push("/blog/" + item.slug);
          } else if (item.badge === "Recording") {
            window.open(YOUTUBE_CHANNEL_URL, "_blank", "noopener,noreferrer");
          }
        }}
        className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-900 text-[16px] font-bold rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Icon className="w-5 h-5" />
        {buttonText}
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
              Learn from HR experts, compliance specialists, and successful implementations
            </p>
          </motion.div>
        </div>

        {/* Whitepapers */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
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
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
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
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2.5} />
            <h3 className="text-[22px] font-bold text-gray-900">Blog Articles</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((item, idx) => (
              <ResourceCard key={idx} item={item} />
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
                  We&apos;ll email new whitepapers, webinars, and guides to {waitlistEmail} as soon as they&apos;re live.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Get new resources first</h3>
                <p className="text-purple-100 font-medium mb-8">
                  Join the waitlist to be notified when we publish new whitepapers, webinars, and compliance guides.
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