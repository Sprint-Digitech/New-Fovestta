import { motion } from "motion/react";
import { DollarSign, Clock, TrendingUp, Users, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Smart Payroll",
    description: "End-to-end payroll with TDS, ESI, EPF, LWF, PF & TDS automatic calculations for changing salary, PF contribution with Challan for IT compliance.",
    link: "View Features",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Attendance & Leave",
    description: "Integrate your biometric, RFID with GPS rules to track teams' time and attendance and manage their leave with pre-sets on company policy.",
    link: "Explore Time",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    description: "Build comprehensive appraisals system with advanced KPI parameters to measure quarterly and annual performance or feedback-driven growth.",
    link: "View Data",
    color: "from-purple-600 to-blue-600",
  },
  {
    icon: Users,
    title: "Employee Portal",
    description: "Your central hub for company tasks, Manage everything: leave request, view salary slips, Reimbursements receipts e-mails, leave, Tracks, Medals.",
    link: "Launch Portal",
    color: "from-blue-600 to-purple-600",
  },
  {
    icon: Shield,
    title: "Compliance Engine",
    description: "Auto-updated with SOC 2A, IT, L&F, PT, multi-state compliances with government portal integrations.",
    link: "Get Assured",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Pre-built HR reports (payroll, staff strength, etc.) and analysis to access the data in real-time with productivity and analytics.",
    link: "View Data",
    color: "from-blue-500 to-purple-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl text-gray-900 mb-6">
              Everything You Need, Nothing You Don't
            </h2>
            <p className="text-xl text-gray-600 w-full mx-auto">
              Six powerful modules working together to transform your HR operations
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                {/* Link */}
                <a href="#" className="inline-flex items-center gap-2 text-[#7C3AED] hover:gap-3 transition-all duration-300">
                  {feature.link}
                  <span>→</span>
                </a>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
