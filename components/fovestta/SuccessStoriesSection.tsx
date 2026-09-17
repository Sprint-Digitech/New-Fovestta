"use client";

import { motion } from "motion/react";
import { Star, TrendingUp, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";

const industries = [
  "Advertising", "HR Solutions", "IT Services", "Manufacturing",
  "Retail & E-commerce", "Healthcare", "Logistics", "FinTech", "Trading & Distribution",
];

const featuredStory = {
  company: "Sprint Digitech",
  industry: "IT Services • 200+ employees",
  challenge: "Sprint Digitech's engineering and support teams work across multiple cities with a hybrid work-from-home policy. Their legacy attendance process relied on self-reported timesheets, making it impossible to verify who was actually logged in, or catch buddy punching across the distributed team.",
  solution: "Fovestta™ deployed geofenced, face-recognition attendance tied directly to payroll. Employees check in from approved locations only, with facial verification confirming identity in seconds — no hardware, no manual review.",
  metrics: [
    { value: "100%", label: "Attendance verified" },
    { value: "0", label: "Buddy-punching incidents since launch" },
    { value: "~6 hrs", label: "Saved weekly on manual reconciliation" },
  ],
  quote: "Fovestta's ESS and geofenced attendance system significantly improved coordination within our remote team.",
  author: "Nirbhay Singh, Head Ops",
};

const successStories = [
  {
    company: "Bubna Advertising",
    industry: "Advertising • 200+ employees",
    logoNode: (
      <div className="bg-[#F97316] text-white font-black text-[14px] px-2 py-1 rounded-md transform -rotate-12 mr-3 shadow-sm flex-shrink-0">
        BUBNA
      </div>
    ),
    challenge: "Transitioning from legacy payroll system (Saral PayPack) while maintaining data security.",
    solution: "Deployed Fovestta™ HRMS on-premises server for complete data control.",
    results: [
      "Payroll efficiency improved",
      "Attendance streamlined",
      "Compliance automated",
    ],
    quote: "\"Payroll and compliance workflows are now significantly more efficient and streamlined.\"",
    author: "Dinesh Yadav, Head IT"
  },
  {
    company: "Stake HR",
    industry: "HR Solutions • 150+ employees",
    logoNode: (
      <div className="flex flex-col text-[9px] leading-tight text-gray-500 font-medium mr-3 flex-shrink-0">
        <span className="text-[#0D9488] font-bold text-[14px]">Stake</span>
        HR
      </div>
    ),
    challenge: "Managing HR operations across international teams with different compliance needs.",
    solution: "Implemented Fovestta™ HRMS to automate functions and provide better visibility.",
    results: [
      "Automated key functions",
      "Better visibility & control",
      "Streamlined payroll",
    ],
    quote: "\"The platform has automated key functions while providing better visibility and control over employee data.\"",
    author: "Anjali Goel, Manager"
  },
  {
    company: "Sprint Digitech",
    industry: "IT Services • 200+ employees",
    logoNode: (
      <div className="flex items-center text-[14px] font-bold italic mr-3 flex-shrink-0">
        <span className="text-[#0369A1]">Sprint</span><span className="text-[#E11D48]">Digitech</span>
      </div>
    ),
    challenge: "Managing distributed remote teams with geofenced attendance tracking requirements.",
    solution: "Deployed Fovestta™ HRIS with geofenced WFH attendance system.",
    results: [
      "Geofenced WFH tracking",
      "Improved accountability",
      "Streamlined attendance",
    ],
    quote: "\"Fovestta's ESS and geofenced attendance system significantly improved coordination within our remote team.\"",
    author: "Nirbhay Singh, Head Ops"
  },
  {
    company: "AM Foods",
    industry: "Manufacturing • 800+ employees",
    logoNode: (
      <div className="w-10 h-10 bg-[#2B2623] rounded-full flex flex-col items-center justify-center mr-3 flex-shrink-0 border border-[#C89B3C]">
        <span className="text-[#C89B3C] text-[7px] font-bold tracking-tighter">AM FOODS</span>
      </div>
    ),
    challenge: "Managing complex shift patterns and daily workforce planning in operations.",
    solution: "Implemented Fovestta™ HRMS for effective shift management and overtime control.",
    results: [
      "Effective overtime control",
      "Streamlined shift management",
      "Improved planning accuracy",
    ],
    quote: "\"After implementing Fovestta, we were able to effectively control overtime and streamline shift management.\"",
    author: "Amit Srivastava, Ops Lead"
  },
  {
    company: "Belash Global (Khurana Sons)",
    industry: "Trading & Distribution • 100+ employees",
    logoNode: (
      <div className="flex items-center text-[14px] font-bold mr-3 flex-shrink-0">
        <span className="text-[#0F766E]">Belash</span><span className="text-gray-900 ml-1">Global</span>
      </div>
    ),
    challenge: "Coordinating attendance and payroll across multiple warehouses and sales offices with mostly manual, paper-based processes.",
    solution: "Rolled out Fovestta™ HRMS with centralized attendance, leave, and payroll management across every location.",
    results: [
      "Centralized multi-location HR",
      "Faster payroll cycles",
      "Reduced manual errors",
    ],
    quote: "\"Fovestta gave us one clear view of attendance and payroll across every location.\"",
    author: "Neerav Jain, Manager"
  },
  {
    company: "AGL Logistics",
    industry: "Logistics • 300+ employees",
    logoNode: (
      <div className="flex items-center text-[14px] font-black tracking-tight mr-3 flex-shrink-0">
        <span className="text-[#1D4ED8]">AGL</span><span className="text-gray-700 ml-1 font-bold">Logistics</span>
      </div>
    ),
    challenge: "Tracking attendance for a large, mobile field and warehouse workforce spread across multiple depots.",
    solution: "Implemented Fovestta™ HRMS with geofenced attendance and centralized payroll processing for all depots.",
    results: [
      "Field attendance tracked live",
      "Payroll consolidated depot-wide",
      "Faster compliance reporting",
    ],
    quote: "\"We finally have real-time visibility into attendance across all our depots.\"",
    author: "Pramod Sharma, Director"
  },
  {
    company: "Krishna Industries",
    industry: "Manufacturing • 250+ employees",
    logoNode: (
      <div className="w-10 h-10 bg-[#7C2D12] rounded-full flex flex-col items-center justify-center mr-3 flex-shrink-0 border border-[#F59E0B]">
        <span className="text-[#F59E0B] text-[7px] font-bold tracking-tighter">KRISHNA</span>
      </div>
    ),
    challenge: "Manual shift scheduling and statutory compliance filings were consuming significant HR team bandwidth every month.",
    solution: "Deployed Fovestta™ HRMS to automate shift scheduling and statutory compliance filings.",
    results: [
      "Automated statutory filings",
      "Simplified shift scheduling",
      "Freed up HR team hours",
    ],
    quote: "\"Compliance filings that used to take days now happen automatically.\"",
    author: "Deepak Ram, Director"
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-8 overflow-hidden bg-[#FAFAFA]" id="success-stories">
      <div className="relative w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-[24px] font-bold text-gray-900 mb-2 tracking-tight">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              How leading companies transformed with Fovestta™
            </p>
          </motion.div>
        </div>

        {/* Compact Scrolling Row */}
        <div className="py-4">
          <div className="flex overflow-hidden relative group">
            <style>
              {`
                @keyframes scrollStories {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-4200px); }
                }
                .stories-scrolling-content {
                  animation: scrollStories 79s linear infinite;
                }
                .stories-scrolling-container:hover .stories-scrolling-content {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="stories-scrolling-container flex overflow-hidden">
              <div className="stories-scrolling-content flex gap-6 flex-nowrap px-6">
                {[...successStories, ...successStories, ...successStories].map((story, index) => (
                  <div key={index} className="w-[450px] flex-shrink-0">
                    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center mb-4 pb-4 border-b border-gray-50">
                        {story.logoNode}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight">{story.company}</h3>
                          <p className="text-sm text-gray-500 font-medium">{story.industry}</p>
                        </div>
                      </div>
                      
                      {/* Content Stack */}
                      <div className="space-y-4 mb-4">
                        <div>
                          <h4 className="text-[11px] font-bold text-purple-600 uppercase tracking-widest mb-1">Challenge</h4>
                          <p className="text-sm text-gray-700 leading-relaxed font-medium line-clamp-2">
                            {story.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">Results</h4>
                          <div className="flex flex-wrap gap-2">
                            {story.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-lg">
                                <TrendingUp className="w-3 h-3 text-green-600" />
                                <span className="text-[12px] font-bold text-green-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote Area */}
                      <div className="mt-auto p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                        <p className="text-sm text-purple-900 italic font-medium mb-3">
                          {story.quote}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-[12px] font-bold text-gray-900">— {story.author}</p>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[90rem] mx-auto px-4 lg:px-4">
          {/* Trusted Across Industries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-4 mb-16"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Trusted Across Industries</p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 rounded-full bg-white border border-gray-100 text-sm font-bold text-gray-600 shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Featured Story Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-widest mb-2">Featured Story</p>
              <h3 className="text-2xl font-bold text-gray-900">Zero buddy-punching, one geofenced check-in</h3>
            </div>

            <div className="rounded-[24px] bg-white border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 lg:p-10">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-50">
                    <div className="flex items-center text-lg font-bold italic">
                      <span className="text-[#0369A1]">Sprint</span><span className="text-[#E11D48]">Digitech</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{featuredStory.industry}</span>
                  </div>

                  <h4 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed font-medium mb-6">{featuredStory.challenge}</p>

                  <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Solution</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">{featuredStory.solution}</p>
                </div>

                <div className="p-6 lg:p-10 bg-[#FBFAFF] flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {featuredStory.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-black text-[#6B46FF] leading-none mb-2">{metric.value}</div>
                        <div className="text-xs font-bold text-gray-500 leading-tight">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-purple-100 relative">
                    <Quote className="w-6 h-6 text-purple-200 absolute top-4 right-4" />
                    <p className="text-purple-900 italic font-medium mb-4 leading-relaxed">
                      &ldquo;{featuredStory.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-gray-900">— {featuredStory.author}</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 bg-gradient-to-br from-[#6B46FF] to-[#4F46E5] rounded-[24px] p-8 lg:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Ready to write your own success story?</h3>
              <p className="text-purple-100 font-medium mb-8 max-w-xl mx-auto">
                Join 10,000+ Indian companies who&apos;ve transformed their HR operations with Fovestta™.
              </p>
              <Link
                href="/request-demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#6B46FF] font-bold rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all"
              >
                Book a Free Demo
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}