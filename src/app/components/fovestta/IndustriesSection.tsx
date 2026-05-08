import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, Factory, Heart, Store, GraduationCap, Truck, ChevronDown } from "lucide-react";
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
    details: "Empower your tech teams with our comprehensive HR solution. Fovestta enables seamless onboarding for remote developers, automates complex project-based time tracking, and ensures strict compliance across international and regional labor laws. Effortlessly manage hybrid work models and keep agile teams focused on innovation rather than administrative overhead."
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
    details: "Optimize your production line efficiency with robust workforce management. Our platform handles intricate shift rotations, automates overtime calculations, and provides real-time visibility into factory floor attendance. Ensure strict adherence to safety compliance and reduce administrative bottlenecks in your operations."
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
    details: "Deliver uninterrupted patient care with intelligent scheduling. Fovestta simplifies complex 24/7 roster management, automates critical license and certification tracking, and ensures compliance with strict healthcare regulations. Manage on-call schedules and reduce staff burnout through balanced shift distribution."
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
    details: "Adapt to fluctuating demands with agile workforce management. Our system provides precise attendance tracking for high-volume, multi-location staff. Easily handle flexible hours, manage seasonal hiring spikes, and automate payroll for hourly workers, giving managers the tools they need to ensure optimal staffing."
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
    details: "Streamline administrative tasks for educational institutions. Fovestta offers specialized solutions for managing academic calendars, contract tracking for adjunct and full-time faculty, and complex leave management. Simplify HR operations across multiple campus departments so educators can focus on student success."
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
    details: "Keep your supply chain moving with real-time workforce agility. Manage rapidly scaling teams with on-demand scheduling, dynamic shift swaps, and precise location-based attendance tracking. Automate compliance integration for drivers and warehouse staff, ensuring accurate payroll in a fast-paced environment."
  },
];

export function IndustriesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Premium Background */}
      <PremiumBackground variant="luxury" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl text-gray-900 mb-6">Built for Every Industry</h2>
            <p className="text-xl text-gray-600 w-full mx-auto">
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

                <h3 className="text-[22px] font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-[18px] text-gray-600 mb-6 leading-relaxed font-medium">{industry.description}</p>

                <ul className="space-y-3">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[16px] text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-purple-50/70 rounded-[16px] border border-purple-100/60">
                        <p className="text-[16px] text-gray-700 leading-relaxed">
                          {industry.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="mt-8 text-[#7C3AED] font-bold text-[16px] flex items-center gap-2 transition-all duration-300 hover:text-purple-700"
                >
                  {expandedIndex === index ? "Show Less" : "Learn More"}
                  <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`} />
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Don't See Your Industry?</h3>
          <p className="text-[18px] text-gray-600 font-medium">
            Fovestta™ is flexible and customizable. <span className="text-[#7C3AED] font-bold">Contact us to schedule a consultation</span> about your specific needs.
          </p>
        </motion.div>

        {/* Section Divider */}
        <div className="mt-10">
          <SectionDivider variant="gradient" />
        </div>
      </div>
    </section>
  );
}
