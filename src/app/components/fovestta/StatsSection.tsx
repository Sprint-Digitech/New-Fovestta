import { motion } from "motion/react";

const stats = [
  { value: "10,000+", label: "Companies Trust Us" },
  { value: "50M+", label: "Employees Managed" },
  { value: "99.99%", label: "System Uptime" },
  { value: "15 Days", label: "Average Setup Time" },
];

export function StatsSection() {
  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
