"use client";

import { motion } from "motion/react";
import { DollarSign, Clock, TrendingUp, Users, Shield, BarChart3, ScanFace, Zap, HeartHandshake, Award } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";
import { SectionDivider } from "./SectionDivider";
import { FeatureVisualCard } from "./FeatureVisualCard";

const features = [
  {
    icon: DollarSign,
    title: "Smart Payroll",
    description: "End-to-end payroll with TDS, ESI, EPF, LWF, PF & TDS automatic calculations for changing salary, PF contribution with Challan for IT compliance.",
    link: "View Details",
    slug: "smart-payroll",
    gradient: "from-[#7C3AED] to-purple-600",
    glowColor: "rgba(124,58,237,0.4)",
    imageUrl: "/app_screenshot_dashboard.webp",
  },
  {
    icon: Clock,
    title: "Attendance & Leave",
    description: "Integrate your biometric, RFID with GPS rules to track teams' time and attendance and manage their leave with pre-sets on company policy.",
    link: "View Details",
    slug: "attendance-leave",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.4)",
    imageUrl: "/app_screenshot_attendance.webp",
  },
  {
    icon: ScanFace,
    title: "Face Recognition",
    description: "Touchless, AI-powered facial attendance that verifies identity in seconds, eliminates buddy punching, and syncs instantly with payroll and shift rules.",
    link: "View Details",
    slug: "face-recognition",
    gradient: "from-fuchsia-500 to-purple-600",
    glowColor: "rgba(217,70,239,0.4)",
    imageUrl: "/app_screenshot_field_tracking.webp",
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    description: "Build comprehensive appraisals system with advanced KPI parameters to measure quarterly and annual performance or feedback-driven growth.",
    link: "View Details",
    slug: "performance-insights",
    gradient: "from-purple-600 to-pink-600",
    glowColor: "rgba(147,51,234,0.4)",
    imageUrl: "/app_screenshot_team_dashboard.webp",
  },
  {
    icon: Users,
    title: "Employee Portal",
    description: "Your central hub for company tasks, Manage everything: leave request, view salary slips, Reimbursements receipts e-mails, leave, Tracks, Medals.",
    link: "View Details",
    slug: "employee-portal",
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.4)",
    imageUrl: "/app_screenshot_leave_form.webp",
  },
  {
    icon: Shield,
    title: "Compliance Engine",
    description: "Auto-updated with IT, L&F, PT, multi-state compliances with government portal integrations.",
    link: "View Details",
    slug: "compliance-engine",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.4)",
    imageUrl: "/app_screenshot_regularization.webp",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Pre-built HR reports (payroll, staff strength, etc.) and analysis to access the data in real-time with productivity and analytics.",
    link: "View Details",
    slug: "analytics-reports",
    gradient: "from-indigo-500 to-purple-600",
    glowColor: "rgba(99,102,241,0.4)",
    imageUrl: "/app_screenshot_team_list.webp",
  },
];

const usps = [
  {
    icon: Award,
    title: "Built for Indian Compliance",
    description: "TDS, EPF, ESI, PT & LWF auto-updated across every state — not a generic global HRMS retrofitted for India.",
  },
  {
    icon: ScanFace,
    title: "Touchless Face Recognition",
    description: "Biometric-grade attendance with zero hardware hassle, eliminating buddy punching and manual corrections.",
  },
  {
    icon: Zap,
    title: "Free Demo, Live in an Hour",
    description: "Book a free demo and go live within the hour — not the months-long rollout typical of legacy HR systems.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support Team",
    description: "A real team of HR & payroll experts, not just a ticket queue — trusted by 10,000+ Indian companies.",
  },
];

export function PremiumFeatures() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-6 overflow-hidden" id="features">
      <PremiumBackground variant="luxury" />

      <div className="relative w-full mx-auto px-4 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></div>
              <span className="text-[#7C3AED] text-sm font-medium">Complete HRMS Platform</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-[#7C3AED] via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Nothing You Don&apos;t
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl font-medium">
              Seven powerful modules working together to transform your HR operations
            </p>
          </div>
        </motion.div>

        {/* Premium Scrolling Row with Pause on Hover */}
        <div className="pt-2 pb-6">
          <div className="flex overflow-hidden relative group">
            <style>
              {`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-33.3333%); }
                }
                .scrolling-content {
                  animation: scroll 29s linear infinite;
                }
                .scrolling-container:hover .scrolling-content,
                .scrolling-container:active .scrolling-content {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="scrolling-container flex overflow-hidden">
              <div className="scrolling-content flex gap-8 flex-nowrap">
                {[...features, ...features, ...features].map((feature, index) => (
                  <div key={index} className="w-[85vw] sm:w-[400px] flex-shrink-0">
                    <FeatureVisualCard {...feature} index={index % 7} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Fovestta - USP Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 pt-10 border-t border-gray-100"
        >
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Fovestta™</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              What sets us apart from every other HRMS on the market
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, idx) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-purple-600 shadow-lg mb-4">
                  <usp.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{usp.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}