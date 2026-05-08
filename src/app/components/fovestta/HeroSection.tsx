import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20 pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 text-[#7C3AED] text-sm"
          >
            🎯 The Future of HR Management
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-7xl tracking-tight text-gray-900">
              The #1 HRMS for India
            </h1>
            <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-[#7C3AED] to-blue-600 bg-clip-text text-transparent">
              Compliance. Automation.
              <br />
              Results.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 w-full mx-auto leading-relaxed"
          >
            Manage TDS, EPF, ESI, IT compliance automatically. Transform HR from spreadsheets to intelligence. Trusted by 5000+ Indian companies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/request-demo" className="px-8 py-4 bg-[#7C3AED] text-white rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5">
              Book Free Demo
            </Link>
            <button className="px-8 py-4 bg-white/60 backdrop-blur-md border border-gray-300 text-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-gray-500"
          >
            Trusted by DPIIT-recognized startups and Indian industries
          </motion.p>

          {/* 3D Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <div className="relative w-full mx-auto">
              <div className="relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl p-8 aspect-video flex items-center justify-center">
                {/* 3D Animation Placeholder */}
                <div className="text-center">
                  <div className="w-full h-64 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <div className="text-gray-400 text-lg">3D HRMS Dashboard Animation Placeholder</div>
                  </div>
                  <p className="text-sm text-gray-500 italic">Interactive 3D HR Management System Visualization</p>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xl"
              >
                <div className="text-2xl text-[#7C3AED]">10,000+</div>
                <div className="text-sm text-gray-600">Companies Trust Us</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xl"
              >
                <div className="text-2xl text-green-600">99.99%</div>
                <div className="text-sm text-gray-600">System Uptime</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
