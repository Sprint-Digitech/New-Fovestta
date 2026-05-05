import { motion } from "motion/react";
import { Code, Factory, Heart, Store, GraduationCap, Truck } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";
import { SectionDivider } from "./SectionDivider";

const industries = [
  {
    icon: Code,
    title: "IT & Software",
    description: "Scale your distributed workforce with compliance across multiple locations",
    features: [
      "End-to-end management",
      "Hybrid model",
      "Flexible scheduling",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Manage complex shift structures across multiple production lines",
    features: [
      "Shift management",
      "Factory automation",
      "Multi-plant coordination",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Keep your healthcare workforce scheduled and compliant 24/7",
    features: [
      "Shift compliance",
      "License tracking",
      "On-call management",
    ],
  },
  {
    icon: Store,
    title: "Retail & Hospitality",
    description: "Manage high-volume employee workforce across multiple locations",
    features: [
      "Attendance tracking",
      "Flexible hours",
      "Multi-location",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Streamline HR operations for schools, colleges, and universities",
    features: [
      "Staff scheduling",
      "Leave management",
      "Contract tracking",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & E-Commerce",
    description: "Manage rapidly-growing workforce with agile HR operations",
    features: [
      "Real-time tracking",
      "On-demand scheduling",
      "Compliance integration",
    ],
  },
];

export function IndustriesSection() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Premium Background */}
      <PremiumBackground variant="luxury" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl text-gray-900 mb-6">Built for Every Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fovestta™ is trusted by companies across diverse industries. Here's how we serve each sector.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Soft glow behind industry cards */}
              <div className="absolute -inset-4 rounded-3xl opacity-35 blur-2xl bg-gradient-to-br from-purple-400/20 via-blue-400/15 to-cyan-400/10"></div>

              <div className="relative h-full p-8 rounded-2xl bg-white/75 backdrop-blur-xl border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300">
                <div className="p-3 rounded-xl bg-purple-100 inline-flex mb-6 group-hover:bg-[#7C3AED] transition-colors duration-300">
                  <industry.icon className="w-6 h-6 text-[#7C3AED] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-[#7C3AED] hover:gap-2 flex items-center gap-1 transition-all duration-300">
                  Learn More
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center p-8 rounded-2xl bg-purple-50/50 border border-purple-100"
        >
          <h3 className="text-2xl text-gray-900 mb-3">Don't See Your Industry?</h3>
          <p className="text-gray-600 mb-6">
            Fovestta™ is flexible and customizable. Get in touch about your specific needs.
          </p>
          <button className="px-8 py-4 bg-[#7C3AED] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            Schedule a Consultation
          </button>
        </motion.div>

        {/* Section Divider */}
        <div className="mt-10">
          <SectionDivider variant="gradient" />
        </div>
      </div>
    </section>
  );
}
