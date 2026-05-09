import { motion } from "motion/react";
import { Shield, Award, Lock, FileCheck, Globe, Building } from "lucide-react";
import { PremiumBackground } from "./PremiumBackground";
import { SectionDivider } from "./SectionDivider";

const securityFeatures = [
  {
    icon: Shield,
    title: "ISO 27001",
    description: "Information Security Management",
  },
  {
    icon: Award,
    title: "SOC 2 Type II",
    description: "Security & Availability Compliance",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Data Privacy & EU Regulations",
  },
  {
    icon: FileCheck,
    title: "DPIIT Act Ready",
    description: "India Data Protection Law",
  },
  {
    icon: Globe,
    title: "Multi-State Compliance",
    description: "TDS, EPF, ESI, PT Regulations",
  },
  {
    icon: Building,
    title: "Bank-Grade Security",
    description: "256-bit SSL Encrypted",
  },
];

export function SecuritySection() {
  return (
    <section className="relative py-6 overflow-hidden">
      {/* Premium Background */}
      <PremiumBackground variant="elegant" />

      <div className="relative max-w-[90rem] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 w-full mx-auto font-medium">
              Fovestta™ meets the highest global security and regulatory compliance. Your data is safe with us.
            </p>
          </motion.div>
        </div>

        {/* Security Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Soft glow behind security cards */}
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/10"></div>

              <div className="relative p-6 rounded-xl bg-white/70 backdrop-blur-xl border border-purple-100 group-hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-100/80">
                    <item.icon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 font-medium">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="mt-4">
          <SectionDivider variant="blue" />
        </div>
      </div>
    </section>
  );
}
