import { motion } from "motion/react";
import { DollarSign, Clock, TrendingUp, Users, Shield, BarChart3 } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";
import { SectionDivider } from "./SectionDivider";
import { FeatureVisualCard } from "./FeatureVisualCard";

const features = [
  {
    icon: DollarSign,
    title: "Smart Payroll",
    description: "End-to-end payroll with TDS, ESI, EPF, LWF, PF & TDS automatic calculations for changing salary, PF contribution with Challan for IT compliance.",
    link: "View Features",
    gradient: "from-[#7C3AED] to-purple-600",
    glowColor: "rgba(124,58,237,0.4)",
    imageUrl: "https://images.unsplash.com/photo-1753955900478-323e4da1eff7?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Clock,
    title: "Attendance & Leave",
    description: "Integrate your biometric, RFID with GPS rules to track teams' time and attendance and manage their leave with pre-sets on company policy.",
    link: "Explore Time",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.4)",
    imageUrl: "https://images.unsplash.com/photo-1758876022356-9e7597f556d8?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    description: "Build comprehensive appraisals system with advanced KPI parameters to measure quarterly and annual performance or feedback-driven growth.",
    link: "View Data",
    gradient: "from-purple-600 to-pink-600",
    glowColor: "rgba(147,51,234,0.4)",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Users,
    title: "Employee Portal",
    description: "Your central hub for company tasks, Manage everything: leave request, view salary slips, Reimbursements receipts e-mails, leave, Tracks, Medals.",
    link: "Launch Portal",
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.4)",
    imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Compliance Engine",
    description: "Auto-updated with SOC 2A, IT, L&F, PT, multi-state compliances with government portal integrations.",
    link: "Get Assured",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.4)",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Pre-built HR reports (payroll, staff strength, etc.) and analysis to access the data in real-time with productivity and analytics.",
    link: "View Data",
    gradient: "from-indigo-500 to-purple-600",
    glowColor: "rgba(99,102,241,0.4)",
    imageUrl: "https://images.unsplash.com/photo-1758876202980-0a28b744fb24?w=600&h=400&fit=crop&q=80",
  },
];

export function PremiumFeatures() {
  return (
    <section className="relative py-16 overflow-hidden" id="features">
      {/* Premium Luxury Background */}
      <PremiumBackground variant="luxury" />

      <div className="relative max-w-[1400px] mx-auto px-8">
        {/* Asymmetric Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="max-w-4xl">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></div>
              <span className="text-[#7C3AED] text-sm font-medium">Complete HRMS Platform</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-[#7C3AED] via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Nothing You Don't
              </span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Six powerful modules working together to transform your HR operations
            </p>
          </div>
        </motion.div>

        {/* Premium Cards Grid with Visual Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureVisualCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Section Divider */}
        <div className="mt-16">
          <SectionDivider variant="gradient" />
        </div>
      </div>
    </section>
  );
}
