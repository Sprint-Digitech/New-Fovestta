import { motion } from "motion/react";
import { DollarSign, Clock, TrendingUp, Users, Shield, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Smart Payroll",
    description: "End-to-end payroll with TDS, ESI, EPF, LWF, PF & TDS automatic calculations for changing salary, PF contribution with Challan for IT compliance.",
    link: "View Features",
    gradient: "from-purple-500 via-purple-600 to-indigo-600",
    iconBg: "from-purple-100 to-indigo-100",
  },
  {
    icon: Clock,
    title: "Attendance & Leave",
    description: "Integrate your biometric, RFID with GPS rules to track teams' time and attendance and manage their leave with pre-sets on company policy.",
    link: "Explore Time",
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    iconBg: "from-blue-100 to-cyan-100",
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    description: "Build comprehensive appraisals system with advanced KPI parameters to measure quarterly and annual performance or feedback-driven growth.",
    link: "View Data",
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    iconBg: "from-purple-100 to-pink-100",
  },
  {
    icon: Users,
    title: "Employee Portal",
    description: "Your central hub for company tasks, Manage everything: leave request, view salary slips, Reimbursements receipts e-mails, leave, Tracks, Medals.",
    link: "Launch Portal",
    gradient: "from-cyan-500 via-blue-600 to-purple-600",
    iconBg: "from-cyan-100 to-blue-100",
  },
  {
    icon: Shield,
    title: "Compliance Engine",
    description: "Auto-updated with SOC 2A, IT, L&F, PT, multi-state compliances with government portal integrations.",
    link: "Get Assured",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    iconBg: "from-emerald-100 to-teal-100",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Pre-built HR reports (payroll, staff strength, etc.) and analysis to access the data in real-time with productivity and analytics.",
    link: "View Data",
    gradient: "from-indigo-500 via-purple-600 to-pink-600",
    iconBg: "from-indigo-100 to-purple-100",
  },
];

export function ModernFeatures() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-16">
        {/* Premium Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
                Nothing You Don't
              </span>
            </h2>
            <p className="text-2xl text-gray-600 w-full mx-auto leading-relaxed">
              Six powerful modules working together to transform your HR operations
            </p>
          </motion.div>
        </div>

        {/* Premium Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200/80 shadow-xl hover:shadow-[0_20px_60px_rgba(124,58,237,0.25)] transition-all duration-500 hover:-translate-y-2">
                {/* Gradient glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Premium Icon */}
                <div className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.iconBg} mb-8 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <feature.icon className="relative w-8 h-8 text-[#7C3AED] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl text-gray-900 mb-4 group-hover:text-[#7C3AED] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {feature.description}
                </p>

                {/* Premium Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#7C3AED] group-hover:gap-3 transition-all duration-300 text-lg"
                >
                  {feature.link}
                  <ArrowRight className="w-5 h-5" />
                </a>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
