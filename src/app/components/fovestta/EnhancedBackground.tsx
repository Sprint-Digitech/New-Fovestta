import { motion } from "motion/react";

interface EnhancedBackgroundProps {
  variant?: 'light' | 'dark' | 'gradient';
  intensity?: 'subtle' | 'medium' | 'vibrant';
}

export function EnhancedBackground({
  variant = 'light',
  intensity = 'medium'
}: EnhancedBackgroundProps) {
  const opacities = {
    subtle: { mesh: 0.15, shapes: 0.05, grid: 0.04 },
    medium: { mesh: 0.25, shapes: 0.08, grid: 0.06 },
    vibrant: { mesh: 0.4, shapes: 0.12, grid: 0.08 }
  };

  const current = opacities[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>

      {/* Animated Gradient Orbs - Smoother, More Elegant */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 -left-40 w-[1000px] h-[1000px] rounded-full blur-[140px]"
        style={{
          background: `radial-gradient(circle, rgba(124, 58, 237, ${current.mesh}) 0%, rgba(167, 139, 250, ${current.mesh * 0.6}) 40%, transparent 70%)`,
        }}
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-1/3 -right-40 w-[900px] h-[900px] rounded-full blur-[130px]"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, ${current.mesh}) 0%, rgba(147, 197, 253, ${current.mesh * 0.6}) 40%, transparent 70%)`,
        }}
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -80, 100, 0],
          y: [0, 90, -70, 0],
          scale: [1, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12
        }}
        className="absolute bottom-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(236, 72, 153, ${current.mesh * 0.7}) 0%, rgba(251, 207, 232, ${current.mesh * 0.4}) 40%, transparent 70%)`,
        }}
      ></motion.div>

      {/* Subtle Accent Orbs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          opacity: [current.mesh * 0.6, current.mesh, current.mesh * 0.6],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
        className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, rgba(6, 182, 212, ${current.mesh * 0.8}) 0%, transparent 60%)`,
        }}
      ></motion.div>

      {/* Elegant Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, ${current.grid}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, ${current.grid}) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      ></div>

      {/* Floating Glass Shapes - More Refined */}
      <motion.div
        animate={{
          y: [0, -120, 0],
          x: [0, 60, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/5 w-80 h-80 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${current.shapes * 1.5}), rgba(124, 58, 237, ${current.shapes}) 50%, transparent 70%)`,
          backdropFilter: 'blur(2px)',
          border: `1px solid rgba(255, 255, 255, ${current.shapes * 2})`,
        }}
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 100, 0],
          x: [0, -50, 0],
          rotate: [0, -120, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full"
        style={{
          background: `radial-gradient(circle at 40% 40%, rgba(255, 255, 255, ${current.shapes * 1.5}), rgba(59, 130, 246, ${current.shapes}) 50%, transparent 70%)`,
          backdropFilter: 'blur(2px)',
          border: `1px solid rgba(255, 255, 255, ${current.shapes * 2})`,
        }}
      ></motion.div>

      {/* Accent Glass Cubes */}
      <motion.div
        animate={{
          y: [0, -70, 0],
          x: [0, 40, 0],
          rotateX: [0, 45, 0],
          rotateY: [0, 45, 0],
          rotateZ: [0, 30, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
        className="absolute top-1/3 left-1/3 w-72 h-72 rounded-3xl"
        style={{
          background: `linear-gradient(135deg, rgba(167, 139, 250, ${current.shapes * 0.8}), rgba(124, 58, 237, ${current.shapes * 0.4}))`,
          backdropFilter: 'blur(3px)',
          border: `1px solid rgba(255, 255, 255, ${current.shapes * 1.5})`,
          transformStyle: 'preserve-3d',
        }}
      ></motion.div>

      {/* Sparkle Elements */}
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400"
        style={{ opacity: current.shapes * 3 }}
      ></motion.div>

      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-blue-400"
        style={{ opacity: current.shapes * 3 }}
      ></motion.div>

      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.8,
        }}
        className="absolute bottom-1/3 left-2/3 w-2 h-2 rounded-full bg-pink-400"
        style={{ opacity: current.shapes * 3 }}
      ></motion.div>
    </div>
  );
}
