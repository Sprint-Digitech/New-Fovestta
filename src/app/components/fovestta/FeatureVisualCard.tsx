import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { LazyImage } from "./LazyImage";

interface FeatureVisualCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient: string;
  glowColor: string;
  imageUrl?: string;
  index: number;
}

export function FeatureVisualCard({
  icon: Icon,
  title,
  description,
  gradient,
  glowColor,
  imageUrl,
  index
}: FeatureVisualCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Permanent Soft Glow behind card */}
      <div
        className="absolute -inset-8 rounded-[40px] opacity-40 blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)` }}
      ></div>

      {/* Stronger Glow effect on hover */}
      <div
        className="absolute -inset-4 bg-gradient-to-r opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-2xl rounded-3xl"
        style={{ background: `linear-gradient(135deg, ${glowColor}, transparent)` }}
      ></div>

      {/* Glass Card */}
      <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Soft inner glow */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

        {/* Image Header (if provided) */}
        {imageUrl && (
          <div className="relative">
            <LazyImage
              src={imageUrl}
              alt={title}
              aspectRatio="aspect-[16/9]"
              objectFit="cover"
              className="rounded-t-3xl"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80"></div>
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {/* 3D Metallic Icon Container */}
          <div className="relative mb-8">
            {/* Icon background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

            {/* Icon container with glassmorphism */}
            <div className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
              <Icon className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Text Content */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#7C3AED] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            {description}
          </p>
        </div>

        {/* Glowing bottom border */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl shadow-[0_0_20px_currentColor]`}></div>
      </div>
    </motion.div>
  );
}
