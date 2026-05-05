import { motion } from "motion/react";

interface RichBackgroundProps {
  variant?: 'light' | 'dark' | 'purple' | 'blue';
  hasFloatingShapes?: boolean;
  hasGrid?: boolean;
  hasDots?: boolean;
}

export function RichBackground({
  variant = 'light',
  hasFloatingShapes = true,
  hasGrid = true,
  hasDots = false
}: RichBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Mesh - Soft flowing clouds of color */}
      <div className="absolute inset-0">
        {/* Base gradient depending on variant */}
        {variant === 'light' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20"></div>

            {/* Animated mesh clouds */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-200/40 via-lavender-100/30 to-transparent rounded-full blur-3xl"
            ></motion.div>

            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5
              }}
              className="absolute top-1/3 -right-1/4 w-[900px] h-[900px] bg-gradient-to-bl from-blue-200/40 via-cyan-100/30 to-transparent rounded-full blur-3xl"
            ></motion.div>

            <motion.div
              animate={{
                x: [0, -60, 0],
                y: [0, 60, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 10
              }}
              className="absolute bottom-0 left-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-purple-300/30 via-pink-100/20 to-transparent rounded-full blur-3xl"
            ></motion.div>

            {/* Additional soft color clouds */}
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-lavender-200/30 to-purple-200/30 rounded-full blur-3xl"
            ></motion.div>
          </>
        )}

        {variant === 'dark' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0118] via-purple-950/50 to-blue-950/30"></div>
            {/* Dark variant mesh clouds - already implemented in PremiumHero */}
          </>
        )}
      </div>

      {/* Geometric Grid Pattern */}
      {hasGrid && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #7C3AED 1px, transparent 1px),
                linear-gradient(to bottom, #7C3AED 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          ></div>
        </div>
      )}

      {/* Dot Matrix Pattern */}
      {hasDots && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #7C3AED 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      )}

      {/* Floating 3D Shapes */}
      {hasFloatingShapes && (
        <>
          {/* Glass Sphere 1 */}
          <motion.div
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotateX: [0, 360],
              rotateY: [0, 180],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-400/10 via-purple-300/5 to-transparent backdrop-blur-3xl border border-white/10 shadow-[0_0_80px_rgba(124,58,237,0.15)]"
            style={{
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d'
            }}
          ></motion.div>

          {/* Glass Sphere 2 */}
          <motion.div
            animate={{
              y: [0, 80, 0],
              x: [0, -40, 0],
              rotateX: [0, -360],
              rotateZ: [0, 180],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute bottom-1/4 left-1/5 w-48 h-48 rounded-full bg-gradient-to-tl from-blue-400/10 via-cyan-300/5 to-transparent backdrop-blur-3xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.15)]"
            style={{
              transform: 'translateZ(30px)',
              transformStyle: 'preserve-3d'
            }}
          ></motion.div>

          {/* Glass Cube 1 */}
          <motion.div
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              rotateX: [0, 45, 0],
              rotateY: [0, 45, 0],
              rotateZ: [0, 45, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
            className="absolute top-1/3 left-1/3 w-56 h-56 rounded-3xl bg-gradient-to-br from-purple-500/8 via-pink-400/4 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_0_70px_rgba(124,58,237,0.12)]"
            style={{
              transform: 'translateZ(40px)',
              transformStyle: 'preserve-3d'
            }}
          ></motion.div>

          {/* Glass Cube 2 - Smaller */}
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, -25, 0],
              rotateX: [0, -30, 0],
              rotateY: [0, -30, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 12
            }}
            className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-2xl bg-gradient-to-bl from-cyan-500/8 via-blue-400/4 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.12)]"
            style={{
              transform: 'translateZ(25px)',
              transformStyle: 'preserve-3d'
            }}
          ></motion.div>

          {/* Additional smaller floating orbs */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/8 to-blue-400/8 backdrop-blur-xl border border-white/5"
          ></motion.div>

          <motion.div
            animate={{
              y: [0, 35, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7
            }}
            className="absolute bottom-1/2 left-1/4 w-36 h-36 rounded-full bg-gradient-to-l from-cyan-400/8 to-purple-400/8 backdrop-blur-xl border border-white/5"
          ></motion.div>
        </>
      )}
    </div>
  );
}
