import { motion } from "motion/react";
import { TrendingUp, Users, Zap, Clock } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Companies Trust Us",
    gradient: "from-[#7C3AED] to-purple-600",
    glowColor: "rgba(124,58,237,0.4)",
  },
  {
    icon: TrendingUp,
    value: "50M+",
    label: "Employees Managed",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.4)",
  },
  {
    icon: Zap,
    value: "99.99%",
    label: "System Uptime",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.4)",
  },
  {
    icon: Clock,
    value: "15 Days",
    label: "Average Setup Time",
    gradient: "from-purple-600 to-pink-600",
    glowColor: "rgba(147,51,234,0.4)",
  },
];

export function PremiumStats() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Premium Background */}
      <PremiumBackground variant="elegant" />

      <div className="relative w-full mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Permanent Soft Glow behind card */}
              <div
                className="absolute -inset-6 rounded-[40px] opacity-50 blur-3xl"
                style={{ background: `radial-gradient(circle at center, ${stat.glowColor}, transparent 70%)` }}
              ></div>

              {/* Enhanced Glow on hover */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-2xl"
                style={{ background: `linear-gradient(135deg, ${stat.glowColor}, transparent)` }}
              ></div>

              {/* Glass Card */}
              <div className="relative text-center p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  {/* Icon glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>

                  {/* Icon container */}
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Value */}
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-gray-600 text-lg">{stat.label}</div>

                {/* Bottom glow line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
