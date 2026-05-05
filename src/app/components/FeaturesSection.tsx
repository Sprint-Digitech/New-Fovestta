import { motion } from "motion/react";
import {
  UserCheck,
  Calendar,
  DollarSign,
  FileText,
  Target,
  BarChart3,
  Clock,
  Award,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Employee Management",
    description: "Comprehensive employee database with complete profile management, document storage, and organizational hierarchy visualization.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Calendar,
    title: "Attendance & Leave",
    description: "Smart attendance tracking with biometric integration, leave management, shift scheduling, and real-time monitoring.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: DollarSign,
    title: "Payroll Processing",
    description: "Automated salary calculations, tax compliance, statutory deductions, and seamless payment processing with bank integration.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: FileText,
    title: "Performance Reviews",
    description: "360-degree feedback system, goal tracking, KPI management, and automated performance appraisal workflows.",
    color: "from-teal-600 to-emerald-600",
  },
  {
    icon: Target,
    title: "Recruitment",
    description: "End-to-end hiring process from job posting to onboarding with applicant tracking and interview scheduling.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Real-time dashboards, customizable reports, workforce analytics, and predictive insights for data-driven decisions.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Accurate time logging, project-based tracking, overtime management, and productivity analytics.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Award,
    title: "Training & Development",
    description: "Learning management system, skill gap analysis, certification tracking, and career development planning.",
    color: "from-blue-600 to-teal-600",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Stay compliant with labor laws, maintain audit trails, manage policy documentation, and ensure data security.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Employee Self-Service",
    description: "Empower employees with mobile app access for leave requests, payslips, attendance, and profile updates.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Organization Management",
    description: "Department structures, role definitions, cost center management, and multi-location support.",
    color: "from-teal-600 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Succession Planning",
    description: "Identify high-potential employees, create talent pipelines, and ensure business continuity.",
    color: "from-cyan-600 to-teal-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm mb-6">
              Complete HRMS Solution
            </span>
            <h2 className="text-5xl text-gray-900 mb-6">
              Everything You Need to Manage
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Your Workforce
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to streamline your HR operations and enhance employee experience
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
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
