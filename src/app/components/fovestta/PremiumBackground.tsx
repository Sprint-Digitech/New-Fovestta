import { motion } from "motion/react";

interface PremiumBackgroundProps {
  variant?: 'luxury' | 'elegant' | 'vibrant';
}

export function PremiumBackground({ variant = 'luxury' }: PremiumBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Premium Base - Subtle Gradient with Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30"></div>

      {/* Luxury Metallic Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(124, 58, 237, 0.03) 2px, rgba(124, 58, 237, 0.03) 4px),
            repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(59, 130, 246, 0.02) 2px, rgba(59, 130, 246, 0.02) 4px)
          `
        }}
      ></div>

      {/* Premium Radial Gradient Orbs - Ultra Smooth */}
      <motion.div
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.4, 0.95, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95], // Custom luxury easing
        }}
        className="absolute -top-1/2 -left-1/2 w-[1200px] h-[1200px]"
        style={{
          background: `radial-gradient(circle at 50% 50%,
            rgba(124, 58, 237, 0.08) 0%,
            rgba(139, 92, 246, 0.05) 25%,
            rgba(167, 139, 250, 0.03) 45%,
            transparent 70%)`,
          filter: 'blur(80px)',
        }}
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -180, 120, 0],
          y: [0, 140, -90, 0],
          scale: [1, 1.3, 1.05, 1],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 8,
        }}
        className="absolute top-1/4 -right-1/2 w-[1100px] h-[1100px]"
        style={{
          background: `radial-gradient(circle at 50% 50%,
            rgba(59, 130, 246, 0.09) 0%,
            rgba(96, 165, 250, 0.06) 25%,
            rgba(147, 197, 253, 0.04) 45%,
            transparent 70%)`,
          filter: 'blur(90px)',
        }}
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -100, 140, 0],
          y: [0, 110, -80, 0],
          scale: [1, 1.25, 1.1, 1],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 15,
        }}
        className="absolute -bottom-1/3 left-1/3 w-[1000px] h-[1000px]"
        style={{
          background: `radial-gradient(circle at 50% 50%,
            rgba(236, 72, 153, 0.06) 0%,
            rgba(244, 114, 182, 0.04) 25%,
            rgba(251, 207, 232, 0.02) 45%,
            transparent 70%)`,
          filter: 'blur(85px)',
        }}
      ></motion.div>

      {/* Accent Gradient - Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 90, -60, 0],
          y: [0, -70, 60, 0],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 20,
        }}
        className="absolute top-1/2 right-1/4 w-[800px] h-[800px]"
        style={{
          background: `radial-gradient(circle at 50% 50%,
            rgba(6, 182, 212, 0.08) 0%,
            rgba(34, 211, 238, 0.05) 30%,
            transparent 60%)`,
          filter: 'blur(70px)',
        }}
      ></motion.div>

      {/* Premium Hexagonal Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #7C3AED 12%, transparent 12.5%, transparent 87%, #7C3AED 87.5%, #7C3AED),
            linear-gradient(150deg, #7C3AED 12%, transparent 12.5%, transparent 87%, #7C3AED 87.5%, #7C3AED),
            linear-gradient(30deg, #7C3AED 12%, transparent 12.5%, transparent 87%, #7C3AED 87.5%, #7C3AED),
            linear-gradient(150deg, #7C3AED 12%, transparent 12.5%, transparent 87%, #7C3AED 87.5%, #7C3AED)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 80%)',
        }}
      ></div>

      {/* Elegant Glass Orbs with Premium Shimmer */}
      <motion.div
        animate={{
          y: [0, -140, 0],
          x: [0, 70, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
        className="absolute top-1/5 right-1/6 w-[400px] h-[400px]"
        style={{
          background: `radial-gradient(circle at 35% 35%,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(124, 58, 237, 0.08) 30%,
            rgba(124, 58, 237, 0.04) 60%,
            transparent 80%)`,
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.08)',
        }}
      >
        {/* Inner Shimmer */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%)',
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 120, 0],
          x: [0, -80, 0],
          rotate: [0, -160, 0],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 10,
        }}
        className="absolute bottom-1/5 left-1/5 w-[350px] h-[350px]"
        style={{
          background: `radial-gradient(circle at 40% 40%,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(59, 130, 246, 0.08) 30%,
            rgba(59, 130, 246, 0.04) 60%,
            transparent 80%)`,
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.08)',
        }}
      >
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.25), transparent 50%)',
          }}
        ></motion.div>
      </motion.div>

      {/* Premium Floating Geometric Shapes */}
      <motion.div
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          rotateX: [0, 360],
          rotateY: [0, 180],
          rotateZ: [0, 90],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 5,
        }}
        className="absolute top-1/3 left-1/4 w-[320px] h-[320px]"
        style={{
          background: `linear-gradient(135deg,
            rgba(167, 139, 250, 0.06) 0%,
            rgba(124, 58, 237, 0.03) 50%,
            transparent 100%)`,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px 0 rgba(124, 58, 237, 0.06)',
        }}
      ></motion.div>

      {/* Luxury Light Rays */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              rgba(124, 58, 237, 0) 0deg,
              rgba(124, 58, 237, 0.05) 2deg,
              rgba(124, 58, 237, 0) 4deg
            )
          `,
        }}
      ></div>

      {/* Premium Sparkle Particles */}
      {[
        { top: '20%', left: '15%', delay: 0 },
        { top: '40%', right: '25%', delay: 1.5 },
        { bottom: '30%', left: '35%', delay: 3 },
        { top: '60%', right: '15%', delay: 4.5 },
        { bottom: '15%', right: '40%', delay: 6 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.4, 1.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pos.delay,
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            ...pos,
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.6), transparent)',
            boxShadow: '0 0 10px 2px rgba(124, 58, 237, 0.3)',
          }}
        ></motion.div>
      ))}

      {/* Subtle Noise Texture Overlay for Premium Feel */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      ></div>
    </div>
  );
}
