import { motion } from "motion/react";

const results = [
  {
    value: "35%",
    label: "Average Productivity Gain",
    description: "Reduce admin work and focus on strategic initiatives",
  },
  {
    value: "20+ hrs",
    label: "Saved Per Week",
    description: "Per HR manager on manual tasks",
  },
  {
    value: "99%",
    label: "Payroll Accuracy",
    description: "Virtually eliminate payroll errors and penalties",
  },
  {
    value: "2 days",
    label: "Faster Onboarding",
    description: "Get new employees productive in half the time",
  },
];

export function CustomerResultsSection() {
  return (
    <section className="relative py-10 bg-[#FCFBFF]">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] font-bold text-gray-900 mb-4 tracking-tight">Proven Results for Our Customers</h2>
            <p className="text-[18px] text-gray-600 w-full mx-auto font-medium">
              See the real impact Fovestta™ has on companies like yours
            </p>
          </motion.div>
        </div>

        {/* Results Flex/Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-[40px] font-black text-[#8B5CF6] mb-4 tracking-tight">{result.value}</div>
              <div className="text-[16px] font-bold text-gray-900 mb-2">{result.label}</div>
              <p className="text-[18px] text-gray-500 font-medium leading-relaxed max-w-[220px]">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
