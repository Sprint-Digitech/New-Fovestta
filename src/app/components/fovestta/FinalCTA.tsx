import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="relative py-20 bg-[#FFF6F9]">
      <div className="w-full mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="text-[36px] font-bold text-gray-900 mb-4 tracking-tight">
            Ready to Join These Success Stories?
          </h2>

          {/* Description */}
          <p className="text-[17px] text-gray-600 mb-10 font-medium">
            Experience the same transformation for your organization. Start your free trial today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-[#8B5CF6] text-white text-[20px] font-bold rounded-lg shadow hover:bg-[#7C3AED] transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-900 text-[20px] font-bold rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
