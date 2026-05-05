import { motion } from "motion/react";

interface SectionDividerProps {
  variant?: 'purple' | 'blue' | 'gradient';
}

export function SectionDivider({ variant = 'purple' }: SectionDividerProps) {
  const gradients = {
    purple: 'from-purple-500/20 via-purple-400/10 to-transparent',
    blue: 'from-blue-500/20 via-cyan-400/10 to-transparent',
    gradient: 'from-purple-500/20 via-blue-400/10 to-cyan-400/5'
  };

  return (
    <div className="relative py-6 overflow-hidden">
      {/* Large Rounded Color Block with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {/* Outer glow */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradients[variant]} blur-3xl rounded-[100px]`}></div>

        {/* Color block */}
        <div className={`relative mx-auto max-w-6xl h-2 rounded-full bg-gradient-to-r ${gradients[variant]} shadow-[0_0_80px_rgba(124,58,237,0.3)]`}></div>
      </motion.div>

      {/* Decorative floating dots */}
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-[#7C3AED]"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="w-2 h-2 rounded-full bg-[#7C3AED]"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          className="w-2 h-2 rounded-full bg-[#7C3AED]"
        ></motion.div>
      </div>
    </div>
  );
}
