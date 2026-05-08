import { motion } from "motion/react";
import { Users, BarChart2, Zap } from "lucide-react";

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
];

export function HRChallengesSection() {
  return (
    <section id="solutions" className="relative py-12 bg-[#FCFBFF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] font-bold text-gray-900 mb-4 tracking-tight">Built for Every HR Challenge</h2>
            <p className="text-[18px] text-gray-600 w-full mx-auto font-medium">
              No matter your industry or company size, Fovestta™ has you covered
            </p>
          </motion.div>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center mb-6">
                  <challenge.icon className="w-6 h-6 text-[#8B5CF6]" strokeWidth={2} />
                </div>

                <h3 className="text-[16px] font-bold text-gray-900 mb-4">{challenge.title}</h3>
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
      </div>
    </section>
  );
}
