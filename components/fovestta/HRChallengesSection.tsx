"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Users, BarChart2, Zap, Globe2, X, Check, ArrowUpRight } from "lucide-react";

const challenges = [
  {
    icon: Users,
    title: "For Growing Companies",
    description: "Scale your HR operations without adding headcount. Perfect for companies with 50-500 employees.",
    features: [
      "Easy onboarding",
      "Multi-location support",
      "Department management",
    ],
  },
  {
    icon: BarChart2,
    title: "For Data-Driven Leaders",
    description: "Make better decisions with real-time insights. Understand your workforce deeply.",
    features: [
      "Advanced analytics",
      "Custom reports",
      "Predictive insights",
    ],
  },
  {
    icon: Zap,
    title: "For Compliance Teams",
    description: "Stay ahead of regulations. Reduce risk with automated compliance checks.",
    features: [
      "Auto-compliance updates",
      "Audit trails",
      "Policy management",
    ],
  },
  {
    icon: Globe2,
    title: "For Remote & Distributed Teams",
    description: "Manage a workforce spread across cities or states with the same confidence as a single office.",
    features: [
      "Geofenced attendance",
      "Face recognition check-in",
      "Multi-state payroll rules",
    ],
  },
];

const comparison = [
  {
    before: "Payroll runs take days of manual spreadsheet reconciliation",
    after: "Payroll runs in minutes with automatic TDS, EPF, ESI & PT calculations",
  },
  {
    before: "Compliance updates chase you after a filing deadline is missed",
    after: "Compliance rules auto-update the moment regulations change",
  },
  {
    before: "Attendance disputes over buddy punching or manual logs",
    after: "Touchless face recognition confirms exactly who clocked in, and when",
  },
  {
    before: "HR data lives in five different spreadsheets and tools",
    after: "One system of record for payroll, attendance, performance & compliance",
  },
];

const proofStats = [
  { value: "10,000+", label: "Companies Trust Us" },
  { value: "50M+", label: "Employees Managed" },
  { value: "99.9%", label: "System Uptime" },
  { value: "15 Days", label: "Avg Setup Time" },
];

export function HRChallengesSection() {
  return (
    <section id="solutions" className="relative pt-24 lg:pt-28 pb-10 bg-[#FCFBFF]">
      <div className="max-w-[90rem] mx-auto px-4 lg:px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[30px] font-bold text-gray-900 mb-4 tracking-tight">Built for Every HR Challenge</h2>
            <p className="text-[18px] text-gray-600 w-full mx-auto font-medium">
              No matter your industry or company size, Fovestta™ has you covered
            </p>
          </motion.div>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-[24px] bg-white border border-[#E9E4FF] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex-shrink-0 flex items-center justify-center">
                    <challenge.icon className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900 leading-tight">{challenge.title}</h3>
                </div>
                <p className="text-[18px] text-gray-600 mb-8 leading-relaxed font-medium min-h-[66px]">{challenge.description}</p>

                <ul className="space-y-4">
                  {challenge.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[18px] font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before / After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">The Fovestta™ Difference</h3>
            <p className="text-lg text-gray-600 font-medium">
              See how teams replace manual HR work with automated, confident decisions
            </p>
          </div>

          <div className="rounded-[24px] bg-white border border-[#E9E4FF] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 lg:p-8 border-b md:border-b-0 md:border-r border-[#E9E4FF]">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Without Fovestta</p>
                <ul className="space-y-5">
                  {comparison.map((row, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                      </div>
                      <span className="text-gray-500 font-medium leading-relaxed">{row.before}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 lg:p-8 bg-[#FBFAFF]">
                <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-widest mb-6">With Fovestta™</p>
                <ul className="space-y-5">
                  {comparison.map((row, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#8B5CF6]" strokeWidth={3} />
                      </div>
                      <span className="text-gray-900 font-semibold leading-relaxed">{row.after}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Proof Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-gray-50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center divide-y-0 md:divide-x divide-gray-100 gap-y-6">
            {proofStats.map((stat) => (
              <div key={stat.label} className="flex flex-col justify-center px-3">
                <div className="text-[26px] font-black text-[#6B46FF] leading-none mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-[#6B46FF] to-[#4F46E5] rounded-[24px] p-8 lg:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">Find the right fit for your team</h3>
            <p className="text-purple-100 font-medium mb-8 max-w-xl mx-auto">
              Book a free demo and we&apos;ll walk you through the solution built for your size, industry, and compliance needs.
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
    </section>
  );
}